"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertNever = assertNever;
exports.nameof = nameof;
exports.getTextColor = getTextColor;
function assertNever(x) {
    throw new Error('Unexpected object: ' + x);
}
function nameof(name) {
    return name.toString();
}
function getTextColor(backgroundColor) {
    if (backgroundColor) {
        var r = parseInt(backgroundColor.substr(1, 2), 16);
        var g = parseInt(backgroundColor.substr(3, 2), 16);
        var b = parseInt(backgroundColor.substr(5, 2), 16);
        var yiq = (r * 299 + g * 587 + b * 114) / 1000;
        return yiq >= 128 ? 'black' : 'white';
    }
    else {
        return;
    }
}
