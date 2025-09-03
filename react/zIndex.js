'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
exports.zIndex = void 0;
exports.getNextZIndex = getNextZIndex;
exports.zIndex = 1100;
function getNextZIndex() {
    return ++exports.zIndex;
}
