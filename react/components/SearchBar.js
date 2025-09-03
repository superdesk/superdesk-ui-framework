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
exports.SearchBar = void 0;
var React = __importStar(require('react'));
var classnames_1 = __importDefault(require('classnames'));
var Icon_1 = require('./Icon');
var SearchBar = /** @class */ (function (_super) {
    __extends(SearchBar, _super);
    function SearchBar(props) {
        var _this = _super.call(this, props) || this;
        _this.componentDidMount = function () {
            document.addEventListener('mousedown', function (event) {
                if (_this.inputRef.current && !_this.inputRef.current.contains(event.target)) {
                    _this.setState({focused: false});
                }
            });
        };
        _this.state = {
            inputValue: _this.props.value ? _this.props.value : '',
            focused: _this.props.focused ? _this.props.focused : false,
            type: _this.props.type ? _this.props.type : 'expanded',
            boxed: _this.props.boxed ? _this.props.boxed : false,
            keyDown: false,
        };
        _this.inputRef = React.createRef();
        return _this;
    }
    SearchBar.prototype.componentDidUpdate = function (prevProps) {
        if (prevProps.value !== this.props.value) {
            this.setState({inputValue: this.props.value});
        }
    };
    SearchBar.prototype.render = function () {
        var _a;
        var _this = this;
        var classes = (0, classnames_1.default)(
            'sd-searchbar',
            ((_a = {}),
            (_a['sd-searchbar--'.concat(this.state.type)] = this.props.type),
            (_a['sd-searchbar--expanded'] = this.state.type === 'expanded' || this.props.type === undefined),
            (_a['sd-searchbar--focused'] = this.state.focused),
            (_a['sd-searchbar--boxed'] = this.state.boxed),
            _a),
        );
        return React.createElement(
            'div',
            {className: classes, ref: this.inputRef},
            this.props.children,
            React.createElement('label', {className: 'sd-searchbar__icon'}),
            React.createElement('input', {
                id: 'search-input',
                ref: function (input) {
                    return input && _this.props.focused && input.focus();
                },
                className: 'sd-searchbar__input',
                type: 'text',
                placeholder: this.props.placeholder,
                value: this.state.inputValue,
                onKeyPress: function (event) {
                    if (event.key === 'Enter') {
                        if (_this.props.onSubmit) {
                            _this.props.onSubmit(_this.state.inputValue);
                        }
                        _this.setState({keyDown: true});
                    }
                },
                onKeyUp: function (event) {
                    if (event.key === 'Enter') {
                        _this.setState({keyDown: false});
                    }
                },
                onChange: function (event) {
                    return _this.setState({inputValue: event.target.value});
                },
                onFocus: function () {
                    return _this.setState({focused: true});
                },
            }),
            this.state.inputValue &&
                React.createElement(
                    'button',
                    {
                        className: 'sd-searchbar__cancel',
                        onClick: function () {
                            _this.setState({inputValue: ''});
                            setTimeout(function () {
                                if (_this.props.onSubmit) {
                                    _this.props.onSubmit(_this.state.inputValue);
                                }
                            });
                        },
                    },
                    React.createElement(Icon_1.Icon, {name: 'remove-sign'}),
                ),
            this.state.inputValue &&
                React.createElement(
                    'button',
                    {
                        id: 'sd-searchbar__search-btn',
                        className: 'sd-searchbar__search-btn '.concat(
                            this.state.keyDown ? 'sd-searchbar__search-btn--active' : '',
                        ),
                        onClick: function () {
                            if (_this.props.onSubmit) {
                                _this.props.onSubmit(_this.state.inputValue);
                            }
                        },
                    },
                    React.createElement(Icon_1.Icon, {name: 'chevron-right-thin'}),
                ),
        );
    };
    return SearchBar;
})(React.PureComponent);
exports.SearchBar = SearchBar;
