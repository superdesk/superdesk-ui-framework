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
exports.DatePickerISO = exports.DatePicker = void 0;
var React = __importStar(require("react"));
var addDays_1 = __importDefault(require("date-fns/addDays"));
var format_1 = __importDefault(require("date-fns/format"));
var moment_1 = __importDefault(require("moment"));
var calendar_1 = require("@superdesk/primereact/calendar");
var lodash_1 = require("lodash");
var react_id_generator_1 = __importDefault(require("react-id-generator"));
var Form_1 = require("./Form");
var Button_1 = require("./Button");
var weekstart_1 = require("weekstart");
var common_1 = require("@sourcefabric/common");
var localization_1 = require("../localization");
var helpers_1 = require("../helpers");
var internalPrimereactClassnames = {
    overlayVisible: 'p-input-overlay-visible',
};
// tries to parse primereact/calendar value format to IDatePicker['value']
function parseFromPrimeReactCalendarFormat(value) {
    if (Array.isArray(value)) {
        return 'failed-to-parse'; // arrays aren't supported
    }
    else if (value instanceof Date) {
        return value;
    }
    else if (value === '') {
        return null;
    }
    else {
        // at this point value is a free input string that can't be parsed to a Date inside primereact/calendar
        return 'failed-to-parse';
    }
}
function parseToPrimeReactCalendarFormat(value) {
    return value === null ? undefined : value;
}
function getDatePickerLocale(code) {
    var localeCode = code !== null && code !== void 0 ? code : 'en-US';
    var firstDayOfWeek = (0, weekstart_1.getWeekStartByLocale)(localeCode);
    var dayNames = {
        long: [],
        short: [],
        narrow: [],
    };
    for (var _i = 0, _a = (0, common_1.getWeekdayNames)(0, localeCode); _i < _a.length; _i++) {
        var weekday = _a[_i];
        dayNames.long.push(weekday.nameLong);
        dayNames.short.push(weekday.nameShort);
        dayNames.narrow.push(weekday.nameNarrow);
    }
    var locale = {
        firstDayOfWeek: firstDayOfWeek,
        dayNames: dayNames.long,
        dayNamesShort: dayNames.short,
        dayNamesMin: dayNames.short, // using short instead of narrow on purpose
        monthNames: (0, common_1.getMonthNames)(localeCode, 'long'),
        monthNamesShort: (0, common_1.getMonthNames)(localeCode, 'short'),
        today: localization_1.localization.translations.today,
        clear: localization_1.localization.translations.clear,
    };
    return locale;
}
var DatePicker = /** @class */ (function (_super) {
    __extends(DatePicker, _super);
    function DatePicker(props) {
        var _this = _super.call(this, props) || this;
        _this.htmlId = (0, react_id_generator_1.default)();
        _this.state = {
            value: parseToPrimeReactCalendarFormat(_this.props.value),
            valid: true,
        };
        _this.hidePopupOnScroll = (0, lodash_1.throttle)(function () {
            if (_this.instance != null &&
                _this.instance.panel != null &&
                _this.instance.hideOverlay != null &&
                _this.instance.panel.classList.contains(internalPrimereactClassnames.overlayVisible)) {
                _this.instance.hideOverlay();
            }
        }, 300);
        return _this;
    }
    DatePicker.prototype.componentDidMount = function () {
        document.addEventListener('scroll', this.hidePopupOnScroll, true);
    };
    DatePicker.prototype.componentWillUnmount = function () {
        document.removeEventListener('scroll', this.hidePopupOnScroll);
    };
    DatePicker.prototype.componentDidUpdate = function (prevProps) {
        // sync internal state with props
        // the check is more complex than a === b, because value equality is checked rather than reference equality
        // which prevents infinite loops that may happen otherwise
        if (this.props.value === null || prevProps.value === null) {
            // at least one of the values is null so strict comparison can be used
            if (this.props.value !== prevProps.value) {
                this.setState({ value: parseToPrimeReactCalendarFormat(this.props.value), valid: true });
            }
        }
        else if (this.props.value.getTime() !== prevProps.value.getTime()) {
            // comparing by value
            this.setState({ value: parseToPrimeReactCalendarFormat(this.props.value), valid: true });
        }
    };
    DatePicker.prototype.render = function () {
        var _this = this;
        if (this.props.preview) {
            return (
            // We have to do type assertion here because we wrap primereact's component using
            // a narrower interface i.e. primereact supports an array of dates or a single date,
            // and our wrapped component will only ever use a single date.
            React.createElement("div", null,
                React.createElement("span", null, (0, moment_1.default)(this.state.value).format(this.props.dateFormat))));
        }
        var locale = (function () {
            if (_this.props.locale == null) {
                return undefined;
            }
            else if (_this.props.locale.type === 'code-only') {
                return getDatePickerLocale(_this.props.locale.code);
            }
            else if (_this.props.locale.type === 'full') {
                return __assign(__assign({}, _this.props.locale.payload), { today: localization_1.localization.translations.today, clear: localization_1.localization.translations.clear });
            }
            else {
                return (0, helpers_1.assertNever)(_this.props.locale);
            }
        })();
        var showClearButton = this.props.required === true ? false : this.props.hideClearButton !== true;
        return (React.createElement(Form_1.InputWrapper, { label: this.props.label, error: this.props.error, invalid: this.props.error != null, required: this.props.required, disabled: this.props.disabled, info: this.props.info, inlineLabel: this.props.inlineLabel, labelHidden: this.props.labelHidden, htmlId: this.htmlId, tabindex: this.props.tabindex, inputWrapper: this.props.inputWrapper, fullWidth: this.props.fullWidth },
            React.createElement(calendar_1.Calendar, { className: "sd-input__input", footerTemplate: showClearButton
                    ? function () { return (React.createElement("div", { className: "d-flex justify-end" },
                        React.createElement(Button_1.Button, { onClick: function () {
                                _this.props.onChange(null);
                                if (_this.instance != null &&
                                    typeof _this.instance.hideOverlay === 'function') {
                                    _this.instance.hideOverlay();
                                }
                            }, text: "Clear", "data-test-id": "clear-button" }))); }
                    : undefined, inputId: this.htmlId, ariaLabelledBy: this.htmlId + 'label', ref: function (ref) {
                    _this.instance = ref;
                    var refAny = ref;
                    if (_this.props['data-test-id'] != null && (refAny === null || refAny === void 0 ? void 0 : refAny.inputElement) != null) {
                        refAny.inputElement.setAttribute('data-test-id', _this.props['data-test-id']);
                    }
                }, value: this.state.value === null ? undefined : this.state.value, onChange: function (event) {
                    var result = parseFromPrimeReactCalendarFormat(event.value);
                    if (result !== 'failed-to-parse') {
                        _this.setState({ value: event.value, valid: true });
                        _this.props.onChange(result);
                    }
                    else {
                        // updating internal state so a user can continue typing and enter a valid value
                        _this.setState({ value: event.value, valid: false });
                    }
                }, locale: locale, dateFormat: this.props.dateFormat.replace('YYYY', 'yy').replace('MM', 'mm').replace('DD', 'dd'), showIcon: true, icon: "icon-calendar", headerTemplate: function () {
                    return _this.props.headerButtonBar == null ? null : (React.createElement("div", { className: "datepicker-header-toolbar" }, _this.props.headerButtonBar.map(function (_a, i) {
                        var label = _a.label, days = _a.days;
                        return (React.createElement("button", { key: i, className: "btn btn--small", onClick: function () {
                                _this.props.onChange((0, addDays_1.default)(new Date(), days));
                                if (_this.instance != null &&
                                    typeof _this.instance.hideOverlay === 'function') {
                                    _this.instance.hideOverlay();
                                }
                            } }, label));
                    })));
                }, appendTo: document.body, disabled: this.props.disabled, minDate: this.props.minDate, maxDate: this.props.maxDate, onBlur: function (event) {
                    // @ts-ignore: Object is possibly 'null'.
                    if (!(event === null || event === void 0 ? void 0 : event.target.value)) {
                        // @ts-ignore: Object is possibly 'null'.
                        _this.setState({ valid: true, value: null });
                    }
                    else {
                        // restoring internal state to current props value
                        _this.setState({ valid: true, value: parseToPrimeReactCalendarFormat(_this.props.value) });
                    }
                } })));
    };
    return DatePicker;
}(React.PureComponent));
exports.DatePicker = DatePicker;
var DatePickerISO = /** @class */ (function (_super) {
    __extends(DatePickerISO, _super);
    function DatePickerISO() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DatePickerISO.prototype.render = function () {
        var _this = this;
        return (React.createElement(DatePicker, { value: new Date(this.props.value), onChange: function (value) {
                if (value === null) {
                    _this.props.onChange('');
                }
                else {
                    _this.props.onChange((0, format_1.default)(value, 'yyyy-MM-dd'));
                }
            }, disabled: this.props.disabled, preview: this.props.preview, headerButtonBar: this.props.headerButtonBar, dateFormat: this.props.dateFormat, locale: this.props.locale, inlineLabel: this.props.inlineLabel, required: this.props.required, fullWidth: this.props.fullWidth, labelHidden: this.props.labelHidden, tabindex: this.props.tabindex, label: this.props.label, info: this.props.info, error: this.props.error }));
    };
    return DatePickerISO;
}(React.PureComponent));
exports.DatePickerISO = DatePickerISO;
