"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateTimePicker = void 0;
var React = __importStar(require("react"));
var DatePicker_1 = require("../components/DatePicker");
var common_1 = require("@sourcefabric/common");
var lodash_1 = require("lodash");
var TimePicker_1 = require("./TimePicker");
var IconButton_1 = require("./IconButton");
var Form_1 = require("./Form");
var react_id_generator_1 = __importDefault(require("react-id-generator"));
var date_fns_1 = require("date-fns");
var helpers_1 = require("../helpers");
var DateTimePicker = /** @class */ (function (_super) {
    __extends(DateTimePicker, _super);
    function DateTimePicker() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.htmlId = (0, react_id_generator_1.default)();
        _this.handleTimeChange = function (time) {
            if (_this.props.valueType === 'date') {
                var _a = time.split(':').map(function (x) { return (0, lodash_1.defaultTo)(parseInt(x, 10), 0); }), hours = _a[0], minutes = _a[1];
                var origDate = _this.props.value ? new Date(_this.props.value) : new Date();
                origDate.setHours(hours, minutes);
                _this.props.onChange(origDate);
            }
            else if (_this.props.valueType === 'object') {
                _this.props.onChange(__assign(__assign({}, _this.props.value), { time: time }));
            }
            else {
                (0, helpers_1.assertNever)(_this.props);
            }
        };
        _this.handleDateChange = function (date) {
            var _a;
            if (_this.props.valueType === 'date') {
                if (date == null) {
                    _this.props.onChange(null);
                    return;
                }
                var origDate = (_a = _this.props.value) !== null && _a !== void 0 ? _a : new Date();
                var selectedDate = new Date(date);
                selectedDate.setHours(origDate.getHours(), origDate.getMinutes());
                _this.props.onChange(selectedDate);
            }
            else if (_this.props.valueType === 'object') {
                _this.props.onChange(__assign(__assign({}, _this.props.value), { date: date ? (0, date_fns_1.format)(date, 'yyyy-MM-dd') : undefined }));
            }
            else {
                (0, helpers_1.assertNever)(_this.props);
            }
        };
        _this.handleClear = function () {
            if (_this.props.valueType === 'date') {
                _this.props.onChange(null);
            }
            else if (_this.props.valueType === 'object') {
                _this.props.onChange({ date: undefined, time: undefined });
            }
            else {
                (0, helpers_1.assertNever)(_this.props);
            }
        };
        return _this;
    }
    DateTimePicker.prototype.prepareFormat = function (unitOfTime) {
        return unitOfTime.toString().padStart(2, '0');
    };
    DateTimePicker.prototype.getTimeValue = function () {
        var _a;
        if (this.props.valueType === 'date') {
            return this.props.value != null
                ? "".concat(this.prepareFormat(this.props.value.getHours()), ":").concat(this.prepareFormat(this.props.value.getMinutes()))
                : null;
        }
        else if (this.props.valueType === 'object') {
            return (_a = this.props.value.time) !== null && _a !== void 0 ? _a : null;
        }
        else {
            (0, helpers_1.assertNever)(this.props);
        }
    };
    DateTimePicker.prototype.getDateValue = function () {
        if (this.props.valueType === 'date') {
            return this.props.value;
        }
        else if (this.props.valueType === 'object') {
            return this.props.value.date ? new Date(this.props.value.date) : null;
        }
        else {
            (0, helpers_1.assertNever)(this.props);
        }
    };
    DateTimePicker.prototype.render = function () {
        var _this = this;
        var timeValue = this.getTimeValue();
        var dateValue = this.getDateValue();
        var timeRequiresDate = (function () {
            if (_this.props.valueType === 'object') {
                return _this.props.timeRequiresDate === true;
            }
            else if (_this.props.valueType === 'date') {
                return false;
            }
            else {
                return (0, helpers_1.assertNever)(_this.props);
            }
        })();
        return (React.createElement(Form_1.InputWrapper, { label: this.props.label, error: this.props.error, invalid: this.props.error != null, required: this.props.required, disabled: this.props.disabled, info: this.props.info, inlineLabel: this.props.inlineLabel, labelHidden: this.props.labelHidden, htmlId: this.htmlId, tabindex: this.props.tabindex, fullWidth: this.props.fullWidth, inputWrapper: this.props.inputWrapper, "data-test-id": this.props['data-test-id'], ref: this.props.ref },
            React.createElement(common_1.Spacer, { h: true, gap: "8", alignItems: "end", noWrap: true },
                React.createElement("div", { style: { flexGrow: 1 } },
                    React.createElement(DatePicker_1.DatePicker, { disabled: this.props.disabled, preview: this.props.preview, required: this.props.required, hideClearButton: true, value: dateValue, locale: this.props.locale, onChange: this.handleDateChange, dateFormat: this.props.dateFormat, inlineLabel: true, labelHidden: true, fullWidth: this.props.fullWidth, "data-test-id": "date-input" })),
                React.createElement("div", { style: { flexGrow: 1 } },
                    React.createElement(TimePicker_1.TimePicker, { disabled: this.props.disabled || (timeRequiresDate && dateValue == null), preview: this.props.preview, value: timeValue, onChange: this.handleTimeChange, inlineLabel: true, labelHidden: true, allowSeconds: this.props.allowSeconds, fullWidth: this.props.fullWidth, required: this.props.required, headerTemplate: this.props.timeHeaderTemplate, footerTemplate: this.props.timeFooterTemplate, "data-test-id": "time-input" })),
                this.props.preview !== true && (React.createElement(IconButton_1.IconButton, { disabled: this.props.disabled, icon: "remove-sign", onClick: this.handleClear, ariaValue: "Clear" })))));
    };
    return DateTimePicker;
}(React.PureComponent));
exports.DateTimePicker = DateTimePicker;
