'use strict';
var __extends =
    (this && this.__extends) ||
    (function () {
        var extendStatics = function (d, b) {
            extendStatics =
                Object.setPrototypeOf ||
                ({__proto__: []} instanceof Array &&
                    function (d, b) {
                        d.__proto__ = b;
                    }) ||
                function (d, b) {
                    for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
                };
            return extendStatics(d, b);
        };
        return function (d, b) {
            if (typeof b !== 'function' && b !== null)
                throw new TypeError('Class extends value ' + String(b) + ' is not a constructor or null');
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : ((__.prototype = b.prototype), new __());
        };
    })();
var __createBinding =
    (this && this.__createBinding) ||
    (Object.create
        ? function (o, m, k, k2) {
              if (k2 === undefined) k2 = k;
              var desc = Object.getOwnPropertyDescriptor(m, k);
              if (!desc || ('get' in desc ? !m.__esModule : desc.writable || desc.configurable)) {
                  desc = {
                      enumerable: true,
                      get: function () {
                          return m[k];
                      },
                  };
              }
              Object.defineProperty(o, k2, desc);
          }
        : function (o, m, k, k2) {
              if (k2 === undefined) k2 = k;
              o[k2] = m[k];
          });
var __setModuleDefault =
    (this && this.__setModuleDefault) ||
    (Object.create
        ? function (o, v) {
              Object.defineProperty(o, 'default', {enumerable: true, value: v});
          }
        : function (o, v) {
              o['default'] = v;
          });
var __importStar =
    (this && this.__importStar) ||
    (function () {
        var ownKeys = function (o) {
            ownKeys =
                Object.getOwnPropertyNames ||
                function (o) {
                    var ar = [];
                    for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
                    return ar;
                };
            return ownKeys(o);
        };
        return function (mod) {
            if (mod && mod.__esModule) return mod;
            var result = {};
            if (mod != null)
                for (var k = ownKeys(mod), i = 0; i < k.length; i++)
                    if (k[i] !== 'default') __createBinding(result, mod, k[i]);
            __setModuleDefault(result, mod);
            return result;
        };
    })();
Object.defineProperty(exports, '__esModule', {value: true});
exports.TimePickerPopover = void 0;
var React = __importStar(require('react'));
var common_1 = require('@sourcefabric/common');
var ContentDivider_1 = require('./ContentDivider');
var RadioButtonGroup_1 = require('./RadioButtonGroup');
var time_1 = require('../utils/time');
var helpers_1 = require('../helpers');
var TimeValueHolder = /** @class */ (function (_super) {
    __extends(TimeValueHolder, _super);
    function TimeValueHolder(props) {
        var _this = _super.call(this, props) || this;
        _this.spanEl = React.createRef();
        return _this;
    }
    TimeValueHolder.prototype.scrollToValue = function () {
        var _a;
        (_a = this.spanEl.current) === null || _a === void 0 ? void 0 : _a.scrollIntoView();
    };
    TimeValueHolder.prototype.render = function () {
        var _a;
        return React.createElement(
            'span',
            {
                ref: this.props.isActive ? this.spanEl : undefined,
                onClick: this.props.onClick,
                className: (0, common_1.classnames)('p-1 time-unit', {
                    'time-unit-highlight': (_a = this.props.isActive) !== null && _a !== void 0 ? _a : false,
                }),
            },
            this.props.value,
        );
    };
    return TimeValueHolder;
})(React.PureComponent);
function parseUnitOfTime(unit, value, is12HourFormat) {
    var _a = (value !== null && value !== void 0 ? value : '').split(':'),
        hour = _a[0],
        minutes = _a[1],
        seconds = _a[2];
    var valueForUnit = (function () {
        if (unit === 'hours') {
            /**
             * Hour value is always in 24-hour format, so we need to adjust it
             * to 12-hour if needed.
             */
            if (is12HourFormat) {
                return hour === '00' ? '12' : hour;
            } else {
                return hour;
            }
        } else if (unit === 'minutes') {
            return minutes;
        } else if (unit === 'seconds') {
            return seconds;
        } else {
            (0, helpers_1.assertNever)(unit);
        }
    })();
    var valueParsed =
        is12HourFormat && unit === 'hours' && valueForUnit !== '12'
            ? parseInt(valueForUnit, 10) % 12
            : parseInt(valueForUnit, 10);
    return (0, time_1.padValue)(valueParsed);
}
var TimePickerPopover = /** @class */ (function (_super) {
    __extends(TimePickerPopover, _super);
    function TimePickerPopover(props) {
        var _this = _super.call(this, props) || this;
        _this.inputRefs = [React.createRef(), React.createRef(), React.createRef()];
        _this.handleChange = _this.handleChange.bind(_this);
        var hour = new Date().toLocaleTimeString([]);
        _this.is12HourFormat = hour.includes('AM') || hour.includes('PM');
        return _this;
    }
    TimePickerPopover.prototype.handleChange = function (unit, value) {
        var fallbackDate = new Date();
        var _a =
                this.props.value == null
                    ? [
                          (0, time_1.padValue)(fallbackDate.getHours()),
                          (0, time_1.padValue)(fallbackDate.getMinutes()),
                          (0, time_1.padValue)(fallbackDate.getSeconds()),
                      ]
                    : this.props.value.split(':'),
            hour = _a[0],
            minutes = _a[1],
            seconds = _a[2];
        var nextValue = '';
        if (unit === 'hours') {
            nextValue = ''.concat(value, ':').concat(minutes);
        } else if (unit === 'minutes') {
            nextValue = ''.concat(hour, ':').concat(value);
        } else if (unit === 'seconds') {
            nextValue = ''.concat(hour, ':').concat(minutes, ':').concat(value);
        } else {
            (0, helpers_1.assertNever)(unit);
        }
        if (this.props.allowSeconds && unit !== 'seconds') {
            nextValue += ':'.concat(seconds);
        }
        this.props.onChange(nextValue);
    };
    TimePickerPopover.prototype.componentDidMount = function () {
        this.inputRefs.forEach(function (unitOfTime) {
            var _a, _b;
            return (_b =
                (_a = unitOfTime === null || unitOfTime === void 0 ? void 0 : unitOfTime.current) === null ||
                _a === void 0
                    ? void 0
                    : _a.scrollToValue) === null || _b === void 0
                ? void 0
                : _b.call(_a);
        });
    };
    TimePickerPopover.prototype.render = function () {
        var _this = this;
        var _a;
        var styleForColumnOfUnit = {
            maxHeight: 190,
            overflowY: 'auto',
            scrollbarWidth: 'none',
            marginTop: 'var(--gap-1)',
        };
        return React.createElement(
            'div',
            {className: 'sd-shadow--z2 radius-md', onBlur: this.props.closePopup},
            React.createElement(
                common_1.Spacer,
                {
                    v: true,
                    gap: '0',
                    style: {
                        width: 200,
                        padding: 'var(--gap-1)',
                        backgroundColor: 'var(--color-bg-00)',
                        borderRadius: 'var(--b-radius--small)',
                    },
                },
                this.props.headerTemplate &&
                    React.createElement(
                        React.Fragment,
                        null,
                        this.props.headerTemplate,
                        React.createElement(ContentDivider_1.ContentDivider, {
                            border: true,
                            type: 'solid',
                            orientation: 'horizontal',
                            margin: 'none',
                        }),
                    ),
                React.createElement(
                    common_1.Spacer,
                    {h: true, gap: '4', noWrap: true, justifyContent: 'center', alignItems: 'start'},
                    React.createElement(
                        common_1.Spacer,
                        {v: true, gap: '4', style: styleForColumnOfUnit, alignItems: 'center', noWrap: true},
                        (0, time_1.getOptionsForTimeUnit)('hours', this.is12HourFormat).map(function (hour) {
                            var isActiveHour =
                                hour === parseUnitOfTime('hours', _this.props.value, _this.is12HourFormat);
                            return React.createElement(TimeValueHolder, {
                                ref: isActiveHour ? _this.inputRefs[0] : undefined,
                                onClick: function () {
                                    _this.handleChange('hours', hour);
                                },
                                isActive: isActiveHour,
                                value: hour,
                            });
                        }),
                    ),
                    React.createElement(ContentDivider_1.ContentDivider, {
                        align: 'center',
                        border: true,
                        type: 'solid',
                        orientation: 'vertical',
                        margin: 'none',
                    }),
                    React.createElement(
                        common_1.Spacer,
                        {v: true, gap: '4', style: styleForColumnOfUnit, alignItems: 'center', noWrap: true},
                        (0, time_1.getOptionsForTimeUnit)('minutes', this.is12HourFormat).map(function (minute) {
                            var isActiveMinute =
                                minute === parseUnitOfTime('minutes', _this.props.value, _this.is12HourFormat);
                            return React.createElement(TimeValueHolder, {
                                ref: isActiveMinute ? _this.inputRefs[1] : undefined,
                                isActive: isActiveMinute,
                                value: minute,
                                onClick: function () {
                                    _this.handleChange('minutes', minute);
                                },
                            });
                        }),
                    ),
                    this.props.allowSeconds &&
                        React.createElement(
                            React.Fragment,
                            null,
                            React.createElement(ContentDivider_1.ContentDivider, {
                                align: 'center',
                                border: true,
                                type: 'solid',
                                orientation: 'vertical',
                                margin: 'none',
                            }),
                            React.createElement(
                                common_1.Spacer,
                                {v: true, gap: '4', style: styleForColumnOfUnit, alignItems: 'center', noWrap: true},
                                (0, time_1.getOptionsForTimeUnit)('seconds', this.is12HourFormat).map(
                                    function (second) {
                                        var isActiveMinute =
                                            second ===
                                            parseUnitOfTime('seconds', _this.props.value, _this.is12HourFormat);
                                        return React.createElement(TimeValueHolder, {
                                            ref: isActiveMinute ? _this.inputRefs[2] : undefined,
                                            onClick: function () {
                                                _this.handleChange('seconds', second);
                                            },
                                            isActive: isActiveMinute,
                                            value: second,
                                        });
                                    },
                                ),
                            ),
                        ),
                    this.is12HourFormat &&
                        React.createElement(
                            'div',
                            {
                                style: {
                                    marginTop: 'var(--gap-1)',
                                },
                            },
                            React.createElement(RadioButtonGroup_1.RadioButtonGroup, {
                                onChange: function (nextValue) {
                                    var _a;
                                    var _b = ((_a = _this.props.value) !== null && _a !== void 0 ? _a : '').split(':'),
                                        hour = _b[0],
                                        minutes = _b[1],
                                        seconds = _b[2];
                                    if (nextValue === 'PM') {
                                        var newValue = ''
                                            .concat((0, time_1.padValue)(parseInt(hour, 10) + 12), ':')
                                            .concat(minutes);
                                        if (_this.props.allowSeconds) {
                                            newValue += ':'.concat(seconds);
                                        }
                                        _this.props.onChange(newValue);
                                    } else {
                                        var newValue = ''
                                            .concat((0, time_1.padValue)(parseInt(hour, 10) - 12), ':')
                                            .concat(minutes);
                                        if (_this.props.allowSeconds) {
                                            newValue += ':'.concat(seconds);
                                        }
                                        _this.props.onChange(newValue);
                                    }
                                },
                                options: [
                                    {
                                        label: 'AM',
                                        value: 'AM',
                                    },
                                    {
                                        label: 'PM',
                                        value: 'PM',
                                    },
                                ],
                                value:
                                    parseInt(
                                        ((_a = this.props.value) !== null && _a !== void 0 ? _a : '').split(':')[0],
                                        10,
                                    ) < 12
                                        ? 'AM'
                                        : 'PM',
                            }),
                        ),
                ),
                this.props.footerTemplate &&
                    React.createElement(
                        React.Fragment,
                        null,
                        React.createElement(ContentDivider_1.ContentDivider, {
                            border: true,
                            type: 'solid',
                            orientation: 'horizontal',
                            margin: 'none',
                        }),
                        this.props.footerTemplate,
                    ),
            ),
        );
    };
    return TimePickerPopover;
})(React.PureComponent);
exports.TimePickerPopover = TimePickerPopover;
