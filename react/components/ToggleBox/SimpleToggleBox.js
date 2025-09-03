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
exports.SimpleToggleBox = void 0;
var React = __importStar(require('react'));
var classnames_1 = __importDefault(require('classnames'));
var react_id_generator_1 = __importDefault(require('react-id-generator'));
/**
 * @ngdoc react
 * @name ToggleBox
 * @description ToggleBox used to open/close a set of details
 */
var SimpleToggleBox = /** @class */ (function (_super) {
    __extends(SimpleToggleBox, _super);
    function SimpleToggleBox(props) {
        var _a;
        var _this = _super.call(this, props) || this;
        _this.htmlId = (0, react_id_generator_1.default)('togglebox-');
        _this.contentRef = React.createRef();
        _this.handleKeyDown = function (event) {
            if (event.key === 'ArrowRight' && !_this.state.isOpen) {
                _this.setState({isOpen: true});
            } else if (event.key === 'ArrowLeft' && _this.state.isOpen) {
                _this.setState({isOpen: false});
            } else if (event.key === 'Enter') {
                _this.toggle();
            }
        };
        /**
         * Called via ref
         */
        _this.isOpen = function () {
            return _this.state.isOpen;
        };
        _this.toggle = function () {
            _this.setState({isOpen: !_this.state.isOpen}, function () {
                if (!_this.state.isOpen && _this.props.onClose) {
                    _this.props.onClose();
                } else if (_this.props.onOpen) {
                    _this.props.onOpen();
                }
            });
        };
        _this.handleAnimationEnd = function () {
            _this.setState({isAnimating: false});
            if (_this.contentRef.current) {
                _this.contentRef.current.removeEventListener('animationend', _this.handleAnimationEnd);
            }
        };
        _this.state = {
            isOpen: (_a = _this.props.initiallyOpen) !== null && _a !== void 0 ? _a : false,
            isAnimating: false,
        };
        return _this;
    }
    SimpleToggleBox.prototype.componentDidUpdate = function (_prevProps, prevState) {
        if (prevState.isOpen !== this.state.isOpen) {
            this.setState({isAnimating: true});
            if (this.contentRef.current) {
                this.contentRef.current.addEventListener('animationend', this.handleAnimationEnd);
            }
        }
    };
    SimpleToggleBox.prototype.render = function () {
        var _a;
        var classes = (0, classnames_1.default)(
            'toggle-box',
            ((_a = {
                'toggle-box--margin-normal': this.props.margin === undefined,
                'toggle-box--large-title': this.props.largeTitle,
                'toggle-box--circle': this.props.circledChevron,
            }),
            (_a['toggle-box--margin-'.concat(this.props.margin)] = this.props.margin),
            (_a.hidden = !this.state.isOpen),
            (_a.open = this.state.isOpen),
            _a),
            this.props.className,
        );
        var _b = this.props,
            title = _b.title,
            children = _b.children,
            badge = _b.badge;
        var isOpen = this.state.isOpen;
        return React.createElement(
            'div',
            {className: classes},
            React.createElement(
                'a',
                {
                    className: 'toggle-box__header',
                    onClick: this.toggle,
                    role: 'button',
                    tabIndex: 0,
                    onKeyDown: this.handleKeyDown,
                    'aria-expanded': isOpen,
                    'aria-controls': this.htmlId,
                },
                React.createElement(
                    'div',
                    {className: 'toggle-box__chevron'},
                    React.createElement('i', {className: 'icon-chevron-right-thin'}),
                ),
                React.createElement('div', {className: 'toggle-box__label'}, title),
                React.createElement('div', {className: 'toggle-box__line'}),
                badge ? badge : null,
            ),
            React.createElement(
                'div',
                {className: 'toggle-box__content-wraper'},
                React.createElement(
                    'div',
                    {
                        id: this.htmlId,
                        className: (0, classnames_1.default)('toggle-box__content', {
                            'toggle-box__content--animation': this.state.isAnimating,
                        }),
                        'aria-hidden': !isOpen,
                        ref: this.contentRef,
                    },
                    children,
                ),
            ),
        );
    };
    return SimpleToggleBox;
})(React.PureComponent);
exports.SimpleToggleBox = SimpleToggleBox;
