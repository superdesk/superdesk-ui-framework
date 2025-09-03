'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
exports.setupSingleAndDoubleClick = setupSingleAndDoubleClick;
function setupSingleAndDoubleClick() {
    var timer;
    var delay = 250;
    return function (event, cb) {
        clearTimeout(timer);
        if (event.nativeEvent.detail === 1) {
            timer = window.setTimeout(function () {
                cb.onSingleClick(event);
            }, delay);
        } else if (event.nativeEvent.detail === 2) {
            cb.onDoubleClick(event);
        }
    };
}
