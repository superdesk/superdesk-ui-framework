#!/usr/bin/env bash
# Usage: use-ui-framework-build.sh <search-root> <build-dir>
#
# Runs inside a consumer repo (superdesk-client-core, superdesk-planning) after its dependencies
# are installed. Replaces every installed superdesk-ui-framework under <search-root> with the
# tarball next to this script, then checks that the copy client-core's webpack config aliases
# when building from <build-dir> is that build.
#
# The folders are swapped directly instead of going through npm: client-core pins an exact
# ui-framework version, so a version bump would make npm nest a registry copy under
# superdesk-core/node_modules, which is the path webpack prefers.
set -euo pipefail

search_root=$1
build_dir=$2

here=$(cd "$(dirname "$0")" && pwd)
tarball=$(ls "$here"/superdesk-ui-framework-*.tgz)
expected=$(cat "$here/bundle.sha256")

sha256() {
    if command -v sha256sum > /dev/null; then
        sha256sum "$1" | cut -d' ' -f1
    else
        shasum -a 256 "$1" | cut -d' ' -f1
    fi
}

copies=$(find "$search_root" -path '*/node_modules/superdesk-ui-framework/package.json' -exec dirname {} \;)

if [ -z "$copies" ]; then
    echo "::error::No installed superdesk-ui-framework found under $search_root"
    exit 1
fi

echo "Replacing installed superdesk-ui-framework with $(basename "$tarball") (bundle sha256 $expected)"

for dir in $copies; do
    before=$(sha256 "$dir/dist/superdesk-ui.bundle.js")
    rm -rf "$dir"
    mkdir -p "$dir"
    tar -xzf "$tarball" -C "$dir" --strip-components=1
    echo "  $dir: $before -> $(sha256 "$dir/dist/superdesk-ui.bundle.js")"
done

cd "$build_dir"

EXPECTED_SHA256="$expected" node - << 'EOF'
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

// Mirrors how superdesk-client-core's webpack.config.js resolves the `superdesk-ui-framework` alias.
const moduleDir = (name, paths) => path.dirname(require.resolve(`${name}/package.json`, {paths}));
const coreDir = moduleDir('superdesk-core', [process.cwd()]);
const nested = path.join(coreDir, 'node_modules/superdesk-ui-framework');
const uiDir = fs.existsSync(nested) ? nested : moduleDir('superdesk-ui-framework', [coreDir, process.cwd()]);

const bundle = fs.readFileSync(path.join(uiDir, 'dist/superdesk-ui.bundle.js'));
const actual = crypto.createHash('sha256').update(bundle).digest('hex');
const expected = process.env.EXPECTED_SHA256;

console.log(`webpack will alias superdesk-ui-framework to ${fs.realpathSync(uiDir)}`);
console.log(`  bundle sha256: ${actual}`);
console.log(`  expected:      ${expected}`);

if (actual !== expected) {
    console.log('::error::webpack would bundle a superdesk-ui-framework other than the caller build');
    process.exit(1);
}
EOF
