const config = require('superdesk-code-style');

config['rules']['max-len'] = [2, 140, 4];
config['extends'] = config['extends'] || [];
config['extends'].push('plugin:storybook/recommended');

module.exports = config;
