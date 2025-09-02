"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.keyboardNavigation = void 0;
var getButtonList = function (menuRef) {
    var _a;
    var list = Array.from((_a = menuRef === null || menuRef === void 0 ? void 0 : menuRef.querySelectorAll(':scope > li')) !== null && _a !== void 0 ? _a : []);
    var buttons = [];
    if (list != null) {
        __spreadArray([], list, true).filter(function (item) {
            if (item.querySelectorAll('.suggestion-item--btn:not([disabled])').length > 0) {
                buttons.push(item.querySelector('.suggestion-item--btn'));
            }
        });
    }
    return buttons;
};
var nextElement = function (buttons, currentIndex, e) {
    e.preventDefault();
    e.stopPropagation();
    if (buttons[currentIndex + 1]) {
        buttons[currentIndex + 1].focus();
    }
    else {
        buttons[0].focus();
    }
};
var prevElement = function (buttons, currentIndex, e, ref) {
    e.preventDefault();
    e.stopPropagation();
    if (buttons[currentIndex - 1]) {
        buttons[currentIndex - 1].focus();
    }
    else if (currentIndex === 0) {
        if (ref) {
            ref();
        }
    }
    else {
        buttons[buttons.length - 1].focus();
    }
};
var keyboardNavigation = function (e, menuRef, ref) {
    var buttons = getButtonList(menuRef);
    var currentElement = document.activeElement;
    var currentIndex = Array.prototype.indexOf.call(buttons, currentElement);
    if (document.activeElement != null && buttons.includes(document.activeElement)) {
        if ((e === null || e === void 0 ? void 0 : e.key) === 'ArrowDown') {
            nextElement(buttons, currentIndex, e);
        }
        else if ((e === null || e === void 0 ? void 0 : e.key) === 'ArrowUp') {
            prevElement(buttons, currentIndex, e, ref);
        }
    }
};
exports.keyboardNavigation = keyboardNavigation;
