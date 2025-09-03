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
exports.PopupPositioner = void 0;
exports.showPopup = showPopup;
var React = __importStar(require('react'));
var react_dom_1 = __importDefault(require('react-dom'));
var core_1 = require('@popperjs/core');
var lodash_1 = require('lodash');
var popper_max_size_modifier_1 = __importDefault(require('popper-max-size-modifier'));
var zIndex_1 = require('../zIndex');
var padding = 8;
var PopupPositioner = /** @class */ (function (_super) {
    __extends(PopupPositioner, _super);
    function PopupPositioner(props) {
        var _this = _super.call(this, props) || this;
        _this.zIndex = (0, zIndex_1.getNextZIndex)();
        _this.closeOnClick = _this.closeOnClick.bind(_this);
        _this.closeOnScroll = (0, lodash_1.throttle)(_this.closeOnScroll.bind(_this), 200);
        _this.closeOnMouseLeave = _this.closeOnMouseLeave.bind(_this);
        _this.wrapperEl = null;
        _this.popper = null;
        return _this;
    }
    PopupPositioner.prototype.closeOnClick = function (event) {
        if (this.wrapperEl == null) {
            return;
        }
        if (
            this.props.getReferenceElement().contains(event.target) !== true &&
            this.wrapperEl.contains(event.target) !== true
        ) {
            this.props.onClose();
        }
    };
    PopupPositioner.prototype.closeOnScroll = function (event) {
        if (this.wrapperEl == null) {
            return;
        }
        if (this.wrapperEl.contains(event.target) !== true) {
            this.props.onClose();
        }
    };
    PopupPositioner.prototype.closeOnMouseLeave = function (event) {
        if (this.wrapperEl == null) {
            return;
        }
        if (this.wrapperEl.contains(event.target) !== true) {
            this.props.onClose();
        }
    };
    PopupPositioner.prototype.componentDidMount = function () {
        var _this = this;
        window.addEventListener('click', this.closeOnClick, {capture: true});
        window.addEventListener('scroll', this.closeOnScroll, true);
        if (this.props.closeOnHoverEnd && this.wrapperEl != null) {
            this.props.getReferenceElement().addEventListener('mouseleave', this.closeOnMouseLeave);
            this.wrapperEl.addEventListener('mouseleave', this.closeOnMouseLeave);
        }
        var applyMaxSize = {
            name: 'applyMaxSize',
            enabled: true,
            phase: 'beforeWrite',
            requires: ['maxSize'],
            fn: function (_a) {
                var state = _a.state;
                var height = state.modifiersData.maxSize.height;
                // subtracting {padding} in order to make a gap between the edge of the viewport
                state.styles.popper.maxHeight = ''.concat(height - padding, 'px');
            },
        };
        /**
         * If popover height is greater than viewport height,
         * popper will not flip it to direction that has more space available.
         * This modifier limits popover height to max available
         * so popper can position it in direction where more space is available.
         */
        var restrictHeightToMaxAvailable = {
            name: 'restrictHeightToMaxAvailable',
            enabled: true,
            phase: 'main',
            fn: lodash_1.noop,
            // execute this as early as possible not to interfere with popper calculations
            requires: ['popperOffsets'],
            effect: function (args) {
                var popperHeight = args.state.elements.popper.offsetHeight;
                var viewportHeight = document.body.offsetHeight;
                var refRect = args.state.elements.reference.getBoundingClientRect();
                var availableSpaceAbove = refRect.top;
                var availableSpaceBelow = viewportHeight - refRect.bottom;
                var availableSpaceMax = Math.max(availableSpaceAbove, availableSpaceBelow);
                if (popperHeight > availableSpaceMax) {
                    args.state.elements.popper.style.height = availableSpaceMax + 'px';
                }
                return function () {
                    // no cleanup needed
                };
            },
        };
        if (this.wrapperEl != null) {
            /**
             * Wait until referenceElement renders so createPopper
             * can take its dimensions into account.
             */
            setTimeout(function () {
                if (_this.wrapperEl != null) {
                    _this.popper = (0, core_1.createPopper)(_this.props.getReferenceElement(), _this.wrapperEl, {
                        placement: _this.props.placement,
                        modifiers: [
                            restrictHeightToMaxAvailable,
                            {
                                name: 'preventOverflow',
                                options: {
                                    padding: {
                                        top: padding,
                                    },
                                },
                            },
                            popper_max_size_modifier_1.default,
                            applyMaxSize,
                        ],
                    });
                }
            }, 50);
        }
    };
    PopupPositioner.prototype.componentWillUnmount = function () {
        var _a, _b;
        window.removeEventListener('click', this.closeOnClick);
        window.removeEventListener('scroll', this.closeOnScroll, true);
        if (this.props.closeOnHoverEnd && this.wrapperEl != null) {
            this.props.getReferenceElement().removeEventListener('mouseleave', this.closeOnMouseLeave);
            this.wrapperEl.removeEventListener('mouseleave', this.closeOnMouseLeave);
        }
        (_b = (_a = this.popper) === null || _a === void 0 ? void 0 : _a.destroy) === null || _b === void 0
            ? void 0
            : _b.call(_a);
    };
    PopupPositioner.prototype.render = function () {
        var _this = this;
        return React.createElement(
            React.Fragment,
            null,
            react_dom_1.default.createPortal(
                React.createElement(
                    'div',
                    {
                        ref: function (el) {
                            _this.wrapperEl = el;
                        },
                        style: {
                            position: 'absolute',
                            left: '-100vw',
                            display: 'flex',
                            zIndex: this.zIndex,
                        },
                        'data-test-id': this.props['data-test-id'],
                    },
                    this.props.children,
                ),
                document.body,
            ),
        );
    };
    return PopupPositioner;
})(React.PureComponent);
exports.PopupPositioner = PopupPositioner;
/**
 * The popup will remove itself if click/scroll events are detected outside the popup.
 */
function showPopup(referenceElement, placement, Component, closeOnHoverEnd, onClose) {
    var el = document.createElement('div');
    document.body.appendChild(el);
    var closeFn = function () {
        react_dom_1.default.unmountComponentAtNode(el);
        el.remove();
        onClose === null || onClose === void 0 ? void 0 : onClose();
    };
    react_dom_1.default.render(
        React.createElement(
            PopupPositioner,
            {
                getReferenceElement: function () {
                    return referenceElement;
                },
                placement: placement,
                onClose: closeFn,
                closeOnHoverEnd: closeOnHoverEnd || false,
            },
            React.createElement(Component, {closePopup: closeFn}),
        ),
        el,
    );
    return {close: closeFn};
}
