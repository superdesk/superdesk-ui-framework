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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Menu = void 0;
var React = __importStar(require("react"));
var tieredmenu_1 = require("@superdesk/primereact/tieredmenu");
var helpers_1 = require("../helpers");
var zIndex_1 = require("../zIndex");
function isSeparator(item) {
    return item['separator'] === true;
}
function isMenuLeaf(item) {
    return item['onClick'] != null;
}
function isMenuBranch(item) {
    return isSeparator(item) !== true && isMenuLeaf(item) !== true;
}
var Menu = /** @class */ (function (_super) {
    __extends(Menu, _super);
    function Menu(props) {
        var _this = _super.call(this, props) || this;
        _this.zIndex = (0, zIndex_1.getNextZIndex)();
        _this.menu = null;
        _this.focusedBefore = null;
        _this.close = _this.close.bind(_this);
        _this.toggle = _this.toggle.bind(_this);
        _this.toPrimeReactInterface = _this.toPrimeReactInterface.bind(_this);
        return _this;
    }
    Menu.prototype.toPrimeReactInterface = function (items) {
        var _this = this;
        return items.map(function (item) {
            if (isSeparator(item)) {
                return { separator: true };
            }
            else if (isMenuBranch(item)) {
                return {
                    label: item.label,
                    icon: item.icon,
                    items: _this.toPrimeReactInterface(item.children),
                };
            }
            else if (isMenuLeaf(item)) {
                return {
                    label: item.label,
                    icon: item.icon,
                    command: function (event) {
                        /**
                         * a click on menu item should not trigger other click handlers
                         * above in the DOM tree. e.g. if menu is inside a clickable list item
                         */
                        event.originalEvent.stopPropagation();
                        _this.close(event.originalEvent);
                        item.onClick();
                    },
                    disabled: item.disabled,
                };
            }
            else {
                return (0, helpers_1.assertNever)(item);
            }
        });
    };
    Menu.prototype.toggle = function (event) {
        var _a;
        (_a = this.menu) === null || _a === void 0 ? void 0 : _a.toggle(event);
    };
    Menu.prototype.close = function (event) {
        var _a;
        (_a = this.menu) === null || _a === void 0 ? void 0 : _a.toggle(event);
    };
    Menu.prototype.render = function () {
        var _this = this;
        var _a;
        return (React.createElement(React.Fragment, null,
            this.props.children(this.toggle),
            React.createElement("div", { onKeyDown: function (event) {
                    if (event.key === 'Escape') {
                        event.stopPropagation();
                        _this.close(event);
                        if (_this.focusedBefore instanceof HTMLElement) {
                            _this.focusedBefore.focus();
                        }
                    }
                } },
                React.createElement(tieredmenu_1.TieredMenu, { popup: true, model: this.toPrimeReactInterface(this.props.items), ref: function (el) { return (_this.menu = el); }, appendTo: document.body, onShow: function () {
                        _this.focusedBefore = document.activeElement;
                        var firstMenuItem = document.querySelectorAll('.p-tieredmenu [role="menuitem"]')[0];
                        if (firstMenuItem instanceof HTMLElement) {
                            firstMenuItem.focus();
                        }
                    }, "data-test-id": (_a = this.props['data-test-id']) !== null && _a !== void 0 ? _a : 'menu', zIndex: this.zIndex }))));
    };
    return Menu;
}(React.Component));
exports.Menu = Menu;
