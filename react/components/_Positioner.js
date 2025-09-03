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
var __assign =
    (this && this.__assign) ||
    function () {
        __assign =
            Object.assign ||
            function (t) {
                for (var s, i = 1, n = arguments.length; i < n; i++) {
                    s = arguments[i];
                    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
                }
                return t;
            };
        return __assign.apply(this, arguments);
    };
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
exports.Positioner = void 0;
var React = __importStar(require('react'));
var ReactDOM = __importStar(require('react-dom'));
var _popper = __importStar(require('popper.js'));
var zIndex_1 = require('../zIndex');
var Popper = _popper.default;
var eventCloseOthers = 'superdesk-ui-framework.positioner.closeOthers';
var padding = 5;
var PopperWrapper = /** @class */ (function (_super) {
    __extends(PopperWrapper, _super);
    function PopperWrapper(props) {
        var _this = _super.call(this, props) || this;
        _this.zIndex = (0, zIndex_1.getNextZIndex)();
        _this.wrapper = document.createElement('div'); // avoid setting to null
        _this.closeDropdownOnOutsideClickBound = function (event) {
            _this.props.closeDropdownOnOutsideClick(_this.wrapper, event);
        };
        return _this;
    }
    PopperWrapper.prototype.componentDidMount = function () {
        var _this = this;
        window.addEventListener('click', this.closeDropdownOnOutsideClickBound);
        window.addEventListener(eventCloseOthers, function (_event) {
            var event = _event;
            _this.props.handleCloseOthers(event);
        });
        var dropdownElement = this.wrapper;
        dropdownElement.style.zIndex = this.zIndex.toString();
        var rect = this.props.triggerElement.getBoundingClientRect();
        var viewportHeight = document.documentElement.clientHeight;
        var viewportWidth = document.documentElement.clientWidth;
        var availableSpaceTop = rect.top - padding;
        var availableSpaceBottom = viewportHeight - rect.bottom - padding;
        var availableSpaceLeft = rect.left;
        var availableSpaceRight = viewportWidth - rect.right;
        this.wrapper.style.maxHeight = Math.max(availableSpaceBottom, availableSpaceTop) + 'px';
        this.wrapper.style.maxWidth = Math.max(availableSpaceLeft, availableSpaceRight) + 'px';
        this.wrapper.style.overflow = 'auto';
        this.popperInstance = new Popper(this.props.triggerElement, dropdownElement, {
            placement: this.props.placement,
            eventsEnabled: false,
        });
        if (document.activeElement instanceof HTMLElement) {
            this.previouslyFocusedElement = document.activeElement;
        }
        this.wrapper.focus();
    };
    PopperWrapper.prototype.componentWillUnmount = function () {
        var _this = this;
        var _a;
        window.removeEventListener('click', this.closeDropdownOnOutsideClickBound);
        window.removeEventListener(eventCloseOthers, function (_event) {
            var event = _event;
            _this.props.handleCloseOthers(event);
        });
        this.popperInstance.destroy();
        (_a = this.previouslyFocusedElement) === null || _a === void 0 ? void 0 : _a.focus();
    };
    PopperWrapper.prototype.render = function () {
        var _this = this;
        return React.createElement(
            'div',
            {
                className: this.props.className,
                ref: function (w) {
                    if (w != null) {
                        _this.wrapper = w;
                    }
                },
                tabIndex: 0,
                role: 'dialog',
                'aria-labelledby': 'popoverTitle',
                onKeyDown: function (event) {
                    if (event.key === 'Escape') {
                        event.preventDefault();
                        _this.props.close();
                    }
                },
            },
            this.props.children,
        );
    };
    return PopperWrapper;
})(React.Component);
var Positioner = /** @class */ (function (_super) {
    __extends(Positioner, _super);
    function Positioner(props) {
        var _this = _super.call(this, props) || this;
        _this.elementForPositioner = document.body.appendChild(document.createElement('div'));
        _this.triggerElement = document.createElement('div'); // avoid setting to null
        _this.state = {
            open: false,
        };
        _this.toggleDropdown = _this.toggleDropdown.bind(_this);
        _this.handleCloseOthers = _this.handleCloseOthers.bind(_this);
        _this.closeDropdownOnOutsideClick = _this.closeDropdownOnOutsideClick.bind(_this);
        return _this;
    }
    Positioner.prototype.handleCloseOthers = function (event) {
        if (event.detail.triggerElement !== this.triggerElement) {
            this.setState({open: false});
        }
    };
    Positioner.prototype.componentDidMount = function () {
        var _this = this;
        setTimeout(function () {
            // trigger element can rendered as a sibling to positioner
            // so it might not be in the DOM at the same time.
            var el = document.querySelector(_this.props.triggerSelector);
            if (el instanceof HTMLElement) {
                _this.triggerElement = el;
                _this.triggerElement.addEventListener('click', _this.toggleDropdown);
            }
        });
    };
    Positioner.prototype.componentWillUnmount = function () {
        this.elementForPositioner.remove();
        ReactDOM.unmountComponentAtNode(this.elementForPositioner);
        this.triggerElement.removeEventListener('click', this.toggleDropdown);
    };
    Positioner.prototype.toggleDropdown = function (e) {
        // When toggle button is clicked it should not bubble up.
        // For example, if clicking a list item opens the preview, the preview should not be opened if the click is on
        // the toggle button. Even if the toggle button is inside the list item.
        e.stopPropagation();
        window.dispatchEvent(
            new CustomEvent(eventCloseOthers, {
                detail: {
                    triggerElement: this.triggerElement,
                },
            }),
        );
        this.setState({open: !this.state.open});
    };
    // arguments are in a different order, because the method is bound
    Positioner.prototype.closeDropdownOnOutsideClick = function (wrapper, event) {
        if (
            this.state.open === true &&
            event != null &&
            event.target !== this.triggerElement &&
            event.target != null &&
            event.target instanceof Node && // wrapper.contains accepts only Node type
            wrapper != null &&
            !wrapper.contains(event.target)
        ) {
            this.setState({
                open: false,
            });
        }
    };
    Positioner.prototype.componentDidUpdate = function () {
        var _this = this;
        if (this.state.open === true) {
            ReactDOM.render(
                React.createElement(
                    PopperWrapper,
                    __assign({}, this.props, {
                        handleCloseOthers: this.handleCloseOthers,
                        closeDropdownOnOutsideClick: this.closeDropdownOnOutsideClick,
                        triggerElement: this.triggerElement,
                        close: function () {
                            _this.setState({open: false});
                        },
                    }),
                ),
                this.elementForPositioner,
            );
        } else {
            ReactDOM.unmountComponentAtNode(this.elementForPositioner);
        }
    };
    Positioner.prototype.render = function () {
        // can't use portal, because it causes events to bubble in the original DOM location and not body
        return null;
    };
    return Positioner;
})(React.Component);
exports.Positioner = Positioner;
