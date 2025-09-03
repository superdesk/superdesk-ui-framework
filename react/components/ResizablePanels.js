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
exports.ResizablePanels = void 0;
var React = __importStar(require('react'));
var react_resizable_panels_1 = require('@superdesk/react-resizable-panels');
/**
 Features:
 * No absolute positioning is used
 * Component height is fully dynamic and adjusts according to children inside panes
 * Library supports an arbitrary number of panes. We are not using it to keep API minimal.
 * Drawback: only works with percent units. Can be made to work with pixels
 * by creating a wrapper that measures available space and converts to percent.
 */
var ResizablePanels = /** @class */ (function (_super) {
    __extends(ResizablePanels, _super);
    function ResizablePanels(props) {
        var _this = _super.call(this, props) || this;
        _this.primaryPanelRef = null;
        _this.secondaryPanelRef = null;
        return _this;
    }
    ResizablePanels.prototype.render = function () {
        var _this = this;
        var _a = this.props,
            direction = _a.direction,
            primarySize = _a.primarySize,
            secondarySize = _a.secondarySize,
            children = _a.children;
        var separatorDimensions = direction === 'horizontal' ? {width: 3, height: '100%'} : {height: 3, width: '100%'};
        // Sometimes second panel is conditional. Checking here is more convenient.
        if (
            children.some(function (child) {
                return child === false || child == null;
            })
        ) {
            return children;
        }
        return React.createElement(
            react_resizable_panels_1.PanelGroup,
            {direction: direction},
            React.createElement(
                react_resizable_panels_1.Panel,
                {
                    id: 'primary',
                    minSize: primarySize === null || primarySize === void 0 ? void 0 : primarySize.min,
                    maxSize: primarySize === null || primarySize === void 0 ? void 0 : primarySize.max,
                    defaultSize: primarySize === null || primarySize === void 0 ? void 0 : primarySize.default,
                    ref: function (panelRef) {
                        _this.primaryPanelRef = panelRef;
                    },
                },
                children[0],
            ),
            React.createElement(
                react_resizable_panels_1.PanelResizeHandle,
                null,
                React.createElement('div', {
                    style: __assign({background: 'var(--color-text-lighter)'}, separatorDimensions),
                    onDoubleClick: function () {
                        var _a, _b;
                        if ((primarySize === null || primarySize === void 0 ? void 0 : primarySize.default) != null) {
                            (_a = _this.primaryPanelRef) === null || _a === void 0
                                ? void 0
                                : _a.resize(primarySize.default);
                        } else if (
                            (secondarySize === null || secondarySize === void 0 ? void 0 : secondarySize.default) !=
                            null
                        ) {
                            (_b = _this.secondaryPanelRef) === null || _b === void 0
                                ? void 0
                                : _b.resize(secondarySize.default);
                        }
                    },
                }),
            ),
            React.createElement(
                react_resizable_panels_1.Panel,
                {
                    id: 'secondary',
                    minSize: secondarySize === null || secondarySize === void 0 ? void 0 : secondarySize.min,
                    maxSize: secondarySize === null || secondarySize === void 0 ? void 0 : secondarySize.max,
                    defaultSize: secondarySize === null || secondarySize === void 0 ? void 0 : secondarySize.default,
                    ref: function (panelRef) {
                        _this.secondaryPanelRef = panelRef;
                    },
                },
                children[1],
            ),
        );
    };
    return ResizablePanels;
})(React.PureComponent);
exports.ResizablePanels = ResizablePanels;
