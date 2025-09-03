'use strict';
var __spreadArray =
    (this && this.__spreadArray) ||
    function (to, from, pack) {
        if (pack || arguments.length === 2)
            for (var i = 0, l = from.length, ar; i < l; i++) {
                if (ar || !(i in from)) {
                    if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                    ar[i] = from[i];
                }
            }
        return to.concat(ar || Array.prototype.slice.call(from));
    };
Object.defineProperty(exports, '__esModule', {value: true});
exports.getOptionsForTimeUnit = getOptionsForTimeUnit;
exports.padValue = padValue;
var lodash_1 = require('lodash');
function getOptionsForTimeUnit(timeUnit, is12HourFormat, disabledOptions) {
    var format12HourArr = __spreadArray([12], (0, lodash_1.range)(1, 12), true);
    var timeUnitArray = (function () {
        if (timeUnit === 'hours') {
            if (is12HourFormat) {
                return format12HourArr;
            } else {
                return (0, lodash_1.range)(24);
            }
        } else {
            return (0, lodash_1.range)(60);
        }
    })();
    return timeUnitArray
        .filter(function (item) {
            var _a;
            return !(
                (_a = disabledOptions === null || disabledOptions === void 0 ? void 0 : disabledOptions[timeUnit]) !==
                    null && _a !== void 0
                    ? _a
                    : []
            ).includes(item);
        })
        .map(function (value) {
            return value.toString().padStart(2, '0');
        });
}
function padValue(value) {
    return value.toString().padStart(2, '0');
}
