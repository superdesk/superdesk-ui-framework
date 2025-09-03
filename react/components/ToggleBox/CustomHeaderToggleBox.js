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
exports.CustomHeaderToggleBox = void 0;
var React = __importStar(require('react'));
var classnames_1 = __importDefault(require('classnames'));
var react_id_generator_1 = __importDefault(require('react-id-generator'));
var CustomHeaderToggleBox = /** @class */ (function (_super) {
    __extends(CustomHeaderToggleBox, _super);
    function CustomHeaderToggleBox(props) {
        var _a;
        var _this = _super.call(this, props) || this;
        _this.htmlId = (0, react_id_generator_1.default)('togglebox-');
        _this.contentRef = React.createRef();
        /**
         * Called via ref
         */
        _this.isOpen = function () {
            return _this.state.isOpen;
        };
        _this.toggle = function () {
            return new Promise(function (resolve, reject) {
                _this.setState({isOpen: !_this.state.isOpen, isAnimating: true}, function () {
                    if (_this.contentRef.current) {
                        var handleAnimation = function () {
                            var _a, _b;
                            (_b = (_a = _this.props).onToggle) === null || _b === void 0
                                ? void 0
                                : _b.call(_a, _this.state.isOpen);
                            _this.handleAnimationEnd();
                            resolve(_this.state.isOpen);
                        };
                        _this.contentRef.current.addEventListener('animationend', handleAnimation, {once: true});
                    } else {
                        reject();
                    }
                });
            });
        };
        _this.handleAnimationEnd = function () {
            _this.setState({isAnimating: false});
            if (_this.contentRef.current) {
                _this.contentRef.current.removeEventListener('animationend', _this.handleAnimationEnd);
            }
        };
        var isOpen = (_a = _this.props.initiallyOpen) !== null && _a !== void 0 ? _a : false;
        _this.state = {
            isOpen: isOpen,
            isAnimating: false,
            wasOpened: isOpen,
        };
        return _this;
    }
    CustomHeaderToggleBox.prototype.componentDidUpdate = function (_prevProps, prevState) {
        if (prevState.isOpen !== this.state.isOpen) {
            this.setState({isAnimating: true});
            if (this.contentRef.current) {
                this.contentRef.current.addEventListener('animationend', this.handleAnimationEnd);
            }
        }
        if (this.state.isOpen && !this.state.wasOpened) {
            this.setState({wasOpened: true});
        }
    };
    CustomHeaderToggleBox.prototype.render = function () {
        var classes = (0, classnames_1.default)('sd-shadow--z1 new-collapse-box', {
            'new-collapse-box--open': this.state.isOpen,
        });
        var isOpen = this.state.isOpen;
        return React.createElement(
            'div',
            {className: classes, 'aria-expanded': isOpen, 'data-test-id': 'toggle-box'},
            React.createElement(
                'div',
                {className: 'new-collapse-box__header'},
                React.createElement('div', {className: 'new-collapse-box__header-inner'}, this.props.header),
                React.createElement(
                    'button',
                    {className: 'new-collapse-box__divider', onClick: this.toggle, 'aria-controls': this.htmlId},
                    React.createElement(
                        'span',
                        {className: 'label label--translucent new-collapse-box__divider-label'},
                        this.props.getToggleButtonLabel(isOpen),
                    ),
                ),
            ),
            React.createElement(
                'div',
                {className: 'new-collapse-box__content'},
                React.createElement(
                    'div',
                    {
                        ref: this.contentRef,
                        id: this.htmlId,
                        'aria-hidden': !isOpen,
                        className: (0, classnames_1.default)('new-collapse-box__content-inner p-2 pt-0-5', {
                            'toggle-box__content--animation': this.state.isAnimating,
                        }),
                    },
                    this.state.isOpen || this.state.wasOpened || this.props.alwaysRenderChildren === true
                        ? this.props.children
                        : null,
                ),
            ),
        );
    };
    return CustomHeaderToggleBox;
})(React.PureComponent);
exports.CustomHeaderToggleBox = CustomHeaderToggleBox;
