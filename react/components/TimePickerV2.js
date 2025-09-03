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
exports.TimePickerV2 = void 0;
var React = __importStar(require('react'));
var Form_1 = require('./Form');
var lodash_1 = require('lodash');
var TimePickerV2 = /** @class */ (function (_super) {
    __extends(TimePickerV2, _super);
    function TimePickerV2(props) {
        var _this = _super.call(this, props) || this;
        _this.handleTimeChange = _this.handleTimeChange.bind(_this);
        _this.getCorrectedTime = _this.getCorrectedTime.bind(_this);
        _this.getOptionsForTimeUnit = _this.getOptionsForTimeUnit.bind(_this);
        _this.padValue = _this.padValue.bind(_this);
        var hour = new Date().toLocaleTimeString([], {hour: 'numeric'});
        _this.is12HourFormat = hour.includes('AM') || hour.includes('PM');
        return _this;
    }
    /**
     * in case initial time is not valid according to disabled options, we return first valid option
     */
    TimePickerV2.prototype.getCorrectedTime = function (timeUnit, timeStringArray) {
        var _a;
        var dividedValue = this.props.value.split(':');
        var value = (function () {
            if (timeUnit === 'hours') {
                return dividedValue[0];
            } else if (timeUnit === 'minutes') {
                return dividedValue[1];
            }
            return dividedValue[2];
        })();
        if (
            !((_a = this.props.disabledOptions[timeUnit]) !== null && _a !== void 0 ? _a : []).includes(
                parseInt(value, 10),
            ) &&
            value != null
        ) {
            return value;
        }
        return timeStringArray[0];
    };
    TimePickerV2.prototype.getOptionsForTimeUnit = function (timeUnit) {
        var _this = this;
        var format12HourArr = (0, lodash_1.range)(1, 13);
        format12HourArr.unshift(format12HourArr.pop());
        var timeUnitArray = (function () {
            if (timeUnit === 'hours') {
                if (_this.is12HourFormat) {
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
                return !((_a = _this.props.disabledOptions[timeUnit]) !== null && _a !== void 0 ? _a : []).includes(
                    item,
                );
            })
            .map(function (value) {
                return (0, lodash_1.padStart)(value.toString(), 2, '0');
            });
    };
    TimePickerV2.prototype.handleTimeChange = function (index, newValue) {
        var current = this.props.value.split(':');
        var updated12HourValue = (function () {
            if (parseInt(current[0], 10) >= 12) {
                if (newValue === '12') {
                    return newValue;
                } else {
                    return (parseInt(newValue, 10) + 12).toString();
                }
            } else {
                if (newValue === '12') {
                    return '00';
                } else {
                    return newValue;
                }
            }
        })();
        current[index] = this.is12HourFormat ? updated12HourValue : newValue;
        this.props.onChange(current.join(':'));
    };
    TimePickerV2.prototype.componentDidMount = function () {
        var correctedTime = [
            this.getCorrectedTime('hours', this.getOptionsForTimeUnit('hours')),
            ':',
            this.getCorrectedTime('minutes', this.getOptionsForTimeUnit('minutes')),
            this.props.allowSeconds
                ? ':'.concat(this.getCorrectedTime('seconds', this.getOptionsForTimeUnit('seconds')))
                : '',
        ].join('');
        if (this.props.value !== correctedTime) {
            this.props.onChange(correctedTime);
        }
    };
    TimePickerV2.prototype.padValue = function (value) {
        return (0, lodash_1.padStart)(value.toString(), 2, '0');
    };
    TimePickerV2.prototype.updatedTimeUnit = function () {
        var timeUnitValuesArray = this.props.value.split(':');
        /**
         * updating the initial value from props
         */
        if (this.is12HourFormat) {
            if (parseInt(timeUnitValuesArray[0], 10) > 12) {
                timeUnitValuesArray[0] = this.padValue(parseInt(timeUnitValuesArray[0], 10) - 12);
            }
        }
        return timeUnitValuesArray;
    };
    TimePickerV2.prototype.render = function () {
        var _this = this;
        var timeUnitValuesArray = this.updatedTimeUnit();
        return React.createElement(
            Form_1.InputWrapper,
            {
                label: this.props.label,
                error: this.props.error,
                invalid: this.props.error != null,
                required: this.props.required,
                disabled: this.props.disabled,
                info: this.props.info,
                inlineLabel: this.props.inlineLabel,
                labelHidden: this.props.labelHidden,
                tabindex: this.props.tabindex,
                inputWrapper: this.props.inputWrapper,
            },
            React.createElement(
                'div',
                {className: 'sd__input__time-picker-v2', 'data-test-id': this.props['data-test-id']},
                React.createElement(
                    'div',
                    {className: 'input-wrapper__time-picker-v2'},
                    React.createElement(
                        'select',
                        {
                            className: 'sd-input__select',
                            value: timeUnitValuesArray[0],
                            onChange: function (_a) {
                                var target = _a.target;
                                _this.handleTimeChange(0, target.value);
                            },
                        },
                        this.getOptionsForTimeUnit('hours').map(function (hour) {
                            return React.createElement('option', {value: hour, label: hour, key: hour});
                        }),
                    ),
                    React.createElement('span', {className: 'time-picker-v2-suffix'}, ':'),
                ),
                React.createElement(
                    'div',
                    {className: 'input-wrapper__time-picker-v2'},
                    React.createElement(
                        'select',
                        {
                            className: 'sd-input__select',
                            value: timeUnitValuesArray[1],
                            onChange: function (_a) {
                                var target = _a.target;
                                _this.handleTimeChange(1, target.value);
                            },
                        },
                        this.getOptionsForTimeUnit('minutes').map(function (minute) {
                            return React.createElement('option', {value: minute, label: minute, key: minute});
                        }),
                    ),
                    this.props.allowSeconds && React.createElement('span', {className: 'time-picker-v2-suffix'}, ':'),
                ),
                this.props.allowSeconds &&
                    React.createElement(
                        'div',
                        {className: 'input-wrapper__time-picker-v2'},
                        React.createElement(
                            'select',
                            {
                                className: 'sd-input__select',
                                value: timeUnitValuesArray[2],
                                onChange: function (_a) {
                                    var target = _a.target;
                                    _this.handleTimeChange(2, target.value);
                                },
                            },
                            this.getOptionsForTimeUnit('seconds').map(function (second) {
                                return React.createElement('option', {value: second, label: second, key: second});
                            }),
                        ),
                    ),
                this.is12HourFormat &&
                    React.createElement(
                        'div',
                        {className: 'input-wrapper__time-picker-v2'},
                        React.createElement('span', {className: 'time-picker-v2-suffix'}),
                        React.createElement(
                            'select',
                            {
                                className: 'sd-input__select',
                                value: parseInt(this.props.value.split(':')[0], 10) >= 12 ? 'PM' : 'AM',
                                onChange: function (_a) {
                                    var target = _a.target;
                                    var splitValue = _this.props.value.split(':');
                                    if (target.value === 'PM') {
                                        splitValue[0] = _this.padValue(parseInt(splitValue[0], 10) + 12);
                                    } else {
                                        splitValue[0] = _this.padValue(parseInt(splitValue[0], 10) - 12);
                                    }
                                    _this.props.onChange(splitValue.join(':'));
                                },
                            },
                            React.createElement('option', {value: 'AM', label: 'AM'}),
                            React.createElement('option', {value: 'PM', label: 'PM'}),
                        ),
                    ),
            ),
        );
    };
    return TimePickerV2;
})(React.PureComponent);
exports.TimePickerV2 = TimePickerV2;
