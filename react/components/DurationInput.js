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
var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : {default: mod};
    };
Object.defineProperty(exports, '__esModule', {value: true});
exports.DurationInput = void 0;
exports.getDurationString = getDurationString;
var React = __importStar(require('react'));
var moment_1 = __importDefault(require('moment'));
var react_id_generator_1 = __importDefault(require('react-id-generator'));
var Form_1 = require('./Form');
var DurationInput = /** @class */ (function (_super) {
    __extends(DurationInput, _super);
    function DurationInput(props) {
        var _this = _super.call(this, props) || this;
        _this.htmlId = (0, react_id_generator_1.default)();
        _this.state = {
            hours: _this.stateUpdate('hours', _this.props.hours, _this.props.minutes, _this.props.seconds),
            minutes: _this.stateUpdate('minutes', _this.props.minutes, _this.props.seconds),
            seconds: _this.stateUpdate('seconds', _this.props.seconds),
            blink: '',
        };
        _this.hourRef = React.createRef();
        _this.minuteRef = React.createRef();
        _this.secondRef = React.createRef();
        _this.handleKeyDown = _this.handleKeyDown.bind(_this);
        _this.zeroPad = _this.zeroPad.bind(_this);
        _this.handleChange = _this.handleChange.bind(_this);
        _this.handleFocusOnKeyUp = _this.handleFocusOnKeyUp.bind(_this);
        _this.handleKeyValue = _this.handleKeyValue.bind(_this);
        _this.valueUpdate = _this.valueUpdate.bind(_this);
        _this.stateUpdate = _this.stateUpdate.bind(_this);
        return _this;
    }
    DurationInput.prototype.stateUpdate = function (state, parametar1, parametar2, parametar3) {
        var value;
        if (state === 'hours') {
            value = parametar1
                ? parametar1 + Math.floor((parametar2 || 0) / 60) + Math.floor((parametar3 || 0) / 3600)
                : Math.floor((parametar2 || 0) / 60) + Math.floor((parametar3 || 0) / 3600);
        } else if (state === 'minutes') {
            value = parametar1
                ? (parametar1 % 60) + Math.floor(((parametar2 || 0) % 3600) / 60)
                : Math.floor(((parametar2 || 0) % 3600) / 60);
        } else {
            value = parametar1 ? parametar1 % 60 : 0;
        }
        return this.zeroPad(value);
    };
    DurationInput.prototype.componentDidUpdate = function (prevProps, prevState) {
        var _this = this;
        if (!this.hourRef.current || !this.minuteRef.current || !this.secondRef.current) {
            return;
        }
        if (this.state.hours !== prevState.hours) {
            if (Number(this.hourRef.current.value) > 99) {
                this.setState({
                    hours: this.zeroPad(99),
                });
            }
        }
        if (this.state.minutes !== prevState.minutes) {
            if (Number(this.minuteRef.current.value) > 59) {
                this.setState({
                    hours: this.zeroPad(Number(this.state.hours) + 1),
                    minutes: this.zeroPad(this.state.minutes % 60),
                });
                this.setState({blink: 'hour'});
                setTimeout(function () {
                    _this.setState({blink: ''});
                }, 500);
            }
            if (Number(this.minuteRef.current.value) < 0) {
                this.setState({
                    hours:
                        parseInt(''.concat(this.zeroPad(Number(this.state.hours))), 10) > 0
                            ? this.zeroPad(Number(this.state.hours) - 1)
                            : this.zeroPad(Number(this.state.hours)),
                    minutes: 59,
                });
                this.setState({blink: 'hour'});
                setTimeout(function () {
                    _this.setState({blink: ''});
                }, 500);
            }
        }
        if (this.state.seconds !== prevState.seconds) {
            if (Number(this.secondRef.current.value) > 59) {
                this.setState({
                    minutes: this.zeroPad(Number(this.state.minutes) + 1),
                    seconds: this.zeroPad(this.state.seconds % 60),
                });
                this.setState({blink: 'minute'});
                setTimeout(function () {
                    _this.setState({blink: ''});
                }, 500);
            }
            if (Number(this.secondRef.current.value) < 0) {
                this.setState({
                    minutes: this.zeroPad(Number(this.state.minutes) - 1),
                    seconds: 59,
                });
                this.setState({blink: 'minute'});
                setTimeout(function () {
                    _this.setState({blink: ''});
                }, 500);
            }
        }
        if (
            this.hourRef.current.value.length === 2 &&
            this.minuteRef.current.value.length === 2 &&
            this.secondRef.current.value.length === 2
        ) {
            if (
                this.props.hours !== prevProps.hours ||
                this.props.minutes !== prevProps.minutes ||
                this.props.seconds !== prevProps.seconds
            ) {
                this.setState({
                    hours: this.stateUpdate('hours', this.props.hours, this.props.minutes, this.props.seconds),
                    minutes: this.stateUpdate('minutes', this.props.minutes, this.props.seconds),
                    seconds: this.stateUpdate('seconds', this.props.seconds),
                });
            }
        }
    };
    DurationInput.prototype.valueUpdate = function () {
        if (this.props.onChange) {
            this.props.onChange(
                moment_1.default
                    .duration(
                        ''.concat(this.state.hours, ':').concat(this.state.minutes, ':').concat(this.state.seconds),
                    )
                    .asSeconds(),
            );
        }
    };
    DurationInput.prototype.handleKeyDown = function (event) {
        if (!(event.target instanceof HTMLInputElement)) {
            return;
        }
        if (event.target.id === 'hours') {
            if (event.key === 'ArrowRight') {
                if (event.target.selectionEnd === event.target.value.length) {
                    this.handleFocus(this.minuteRef.current, event.target.id);
                }
            }
            if (event.key === 'ArrowLeft') {
                if (event.target.selectionStart === 0) {
                    this.handleFocus(this.secondRef.current, event.target.id);
                }
            }
        }
        if (event.target.id === 'minutes') {
            if (event.key === 'ArrowRight') {
                if (event.target.selectionEnd === event.target.value.length) {
                    this.handleFocus(this.secondRef.current, event.target.id);
                }
            }
            if (event.key === 'ArrowLeft') {
                if (event.target.selectionStart === 0) {
                    this.handleFocus(this.hourRef.current, event.target.id);
                }
            }
        }
        if (event.target.id === 'seconds') {
            if (event.key === 'ArrowRight') {
                if (event.target.selectionEnd === event.target.value.length) {
                    this.handleFocus(this.hourRef.current, event.target.id);
                }
            }
            if (event.key === 'ArrowLeft') {
                if (event.target.selectionStart === 0) {
                    this.handleFocus(this.minuteRef.current, event.target.id);
                }
            }
        }
        if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
            this.handleKeyValue(event, event.target.id);
            setTimeout(this.valueUpdate);
        }
        if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
            if (!this.state.hours || !this.state.minutes || !this.state.seconds) {
                setTimeout(this.valueUpdate);
            }
        }
    };
    DurationInput.prototype.handleKeyValue = function (event, state) {
        if (!(event.target instanceof HTMLInputElement)) {
            return;
        }
        if (!this.state[state]) {
            return;
        }
        event.preventDefault();
        event.stopPropagation();
        var stateClone = {};
        if (event.key === 'ArrowUp') {
            if (event.target.id === 'hours') {
                stateClone[state] =
                    this.state[state] < 99 ? this.zeroPad(Number(this.state[state]) + 1) : this.zeroPad(99);
            } else {
                stateClone[state] = this.zeroPad(Number(this.state[state]) + 1);
            }
        } else if (event.key === 'ArrowDown') {
            if (event.target.id === 'hours') {
                stateClone[state] =
                    this.state[state] > 0 ? this.zeroPad(Number(this.state[state]) - 1) : this.zeroPad(0);
            } else {
                stateClone[state] = this.zeroPad(Number(this.state[state]) - 1);
            }
        }
        this.setState(stateClone);
    };
    DurationInput.prototype.zeroPad = function (value) {
        if (value.toString().length === 1 || value === 0) {
            return '0'.concat(value);
        } else if (!value) {
            return '00';
        } else {
            return value;
        }
    };
    DurationInput.prototype.handleChange = function (event, state) {
        var stateClone = {};
        if (event.target.value.length > 2) {
            if (event.target.selectionStart === 1) {
                stateClone[state] = event.target.value.slice(0, 1);
            } else if (event.target.selectionStart === 2) {
                stateClone[state] = event.target.value.slice(1, 2);
            } else {
                stateClone[state] = event.target.value.slice(2, 3);
            }
        } else {
            stateClone[state] = event.target.value;
        }
        this.setState(stateClone);
        setTimeout(this.valueUpdate);
    };
    DurationInput.prototype.handleFocus = function (ref, state) {
        ref === null || ref === void 0 ? void 0 : ref.focus();
        setTimeout(function () {
            ref === null || ref === void 0 ? void 0 : ref.setSelectionRange(0, 2);
        });
        var stateClone = {};
        stateClone[state] = this.zeroPad(this.state[state]);
        this.setState(stateClone);
    };
    DurationInput.prototype.handleFocusOnKeyUp = function (event, ref) {
        if (
            event.key !== 'ArrowRight' &&
            event.key !== 'ArrowLeft' &&
            event.key !== 'ArrowUp' &&
            event.key !== 'ArrowDown' &&
            event.key !== 'Backspace'
        ) {
            if ((event.keyCode > 46 && event.keyCode < 58) || (event.keyCode > 95 && event.keyCode < 106)) {
                var target = event.target;
                if (target.value.length >= 2) {
                    ref === null || ref === void 0 ? void 0 : ref.focus();
                    setTimeout(function () {
                        ref === null || ref === void 0 ? void 0 : ref.setSelectionRange(0, 2);
                    });
                }
            }
        }
    };
    DurationInput.prototype.render = function () {
        var _this = this;
        if (this.props.preview) {
            return React.createElement(
                'div',
                {className: 'sd-input__duration-input-preview'},
                React.createElement(
                    'div',
                    null,
                    React.createElement('span', {className: 'duration-input-preview'}, this.state.hours),
                    React.createElement('span', {className: 'sd-input__suffix'}, 'h'),
                ),
                React.createElement(
                    'div',
                    null,
                    React.createElement('span', {className: 'duration-input-preview'}, this.state.minutes),
                    React.createElement('span', {className: 'sd-input__suffix'}, 'm'),
                ),
                React.createElement(
                    'div',
                    null,
                    React.createElement('span', {className: 'duration-input-preview'}, this.state.seconds),
                    React.createElement('span', {className: 'sd-input__suffix'}, 's'),
                ),
            );
        }
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
                htmlId: this.htmlId,
                tabindex: this.props.tabindex,
                inputWrapper: this.props.inputWrapper,
            },
            React.createElement(
                'div',
                {className: 'sd-input__duration-input'},
                React.createElement('input', {
                    className: 'duration-input '.concat(this.state.blink === 'hour' ? 'blink_me' : ''),
                    type: 'text',
                    id: 'hours',
                    autoComplete: 'off',
                    max: 99,
                    min: 0,
                    ref: this.hourRef,
                    value: this.state.hours,
                    disabled: this.props.disabled,
                    onKeyDown: function (event) {
                        return _this.handleKeyDown(event);
                    },
                    onKeyUp: function (event) {
                        return _this.handleFocusOnKeyUp(event, _this.minuteRef.current);
                    },
                    onChange: function (event) {
                        _this.handleChange(event, 'hours');
                    },
                    onBlur: function (event) {
                        return _this.setState({hours: _this.zeroPad(event.target.value)});
                    },
                    onKeyPress: function (event) {
                        if (!/[0-9]/.test(event.key)) {
                            event.preventDefault();
                        }
                    },
                }),
                React.createElement('span', {className: 'sd-input__suffix'}, 'h'),
                React.createElement('input', {
                    className: 'duration-input '.concat(this.state.blink === 'minute' ? 'blink_me' : ''),
                    type: 'text',
                    id: 'minutes',
                    autoComplete: 'off',
                    ref: this.minuteRef,
                    value: this.state.minutes,
                    disabled: this.props.disabled,
                    onKeyDown: function (event) {
                        return _this.handleKeyDown(event);
                    },
                    onKeyUp: function (event) {
                        return _this.handleFocusOnKeyUp(event, _this.secondRef.current);
                    },
                    onChange: function (event) {
                        _this.handleChange(event, 'minutes');
                    },
                    onBlur: function (event) {
                        return _this.setState({minutes: _this.zeroPad(event.target.value)});
                    },
                    onKeyPress: function (event) {
                        if (!/[0-9]/.test(event.key)) {
                            event.preventDefault();
                        }
                    },
                }),
                React.createElement('span', {className: 'sd-input__suffix'}, 'm'),
                React.createElement('input', {
                    className: 'duration-input',
                    type: 'text',
                    id: 'seconds',
                    autoComplete: 'off',
                    ref: this.secondRef,
                    value: this.state.seconds,
                    disabled: this.props.disabled,
                    onKeyDown: function (event) {
                        return _this.handleKeyDown(event);
                    },
                    onKeyUp: function (event) {
                        return _this.handleFocusOnKeyUp(event, _this.hourRef.current);
                    },
                    onChange: function (event) {
                        _this.handleChange(event, 'seconds');
                    },
                    onBlur: function (event) {
                        return _this.setState({seconds: _this.zeroPad(event.target.value)});
                    },
                    onKeyPress: function (event) {
                        if (!/[0-9]/.test(event.key)) {
                            event.preventDefault();
                        }
                    },
                }),
                React.createElement('span', {className: 'sd-input__suffix'}, 's'),
            ),
        );
    };
    return DurationInput;
})(React.PureComponent);
exports.DurationInput = DurationInput;
function getDurationString(seconds, minSections) {
    if (minSections === void 0) {
        minSections = 1;
    }
    function zeroPad(value) {
        if (value.toString().length === 1 || value === 0) {
            return '0'.concat(value);
        } else if (!value) {
            return '00';
        } else {
            return value;
        }
    }
    var hour = zeroPad(Math.floor(seconds / 3600));
    var minute = zeroPad(Math.floor((seconds % 3600) / 60));
    var second = zeroPad(Math.floor(seconds % 60));
    if (minSections === 3) {
        return ''.concat(hour, 'h ').concat(minute, 'm ').concat(second, 's');
    } else if (minSections === 2) {
        if (Number(hour) > 0) {
            return ''.concat(hour, 'h ').concat(minute, 'm ').concat(second, 's');
        } else {
            return ''.concat(minute, 'm ').concat(second, 's');
        }
    } else {
        if (Number(hour) === 0 && Number(minute) === 0) {
            return ''.concat(second, 's');
        } else if (Number(hour) === 0 && Number(minute) > 0) {
            return ''.concat(minute, 'm ').concat(second, 's');
        } else {
            return ''.concat(hour, 'h ').concat(minute, 'm ').concat(second, 's');
        }
    }
}
