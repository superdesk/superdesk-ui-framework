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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SideBarTabs = void 0;
var React = __importStar(require("react"));
var Icon_1 = require("../Icon");
var Badge_1 = require("../Badge");
var classnames_1 = __importDefault(require("classnames"));
var SideBarTabs = /** @class */ (function (_super) {
    __extends(SideBarTabs, _super);
    function SideBarTabs(props) {
        var _this = _super.call(this, props) || this;
        _this.handleClick = _this.handleClick.bind(_this);
        return _this;
    }
    SideBarTabs.prototype.componentDidMount = function () {
        var _this = this;
        var activeItem = this.props.items.find(function (item) { return item !== 'divider' && item.id === _this.props.activeTab; });
        if (activeItem != null && activeItem !== 'divider') {
            this.props.onActiveTabChange(activeItem.id);
        }
    };
    SideBarTabs.prototype.handleClick = function (item) {
        if (this.props.activeTab === item.id) {
            this.props.onActiveTabChange(null);
        }
        else {
            this.props.onActiveTabChange(item.id);
        }
    };
    SideBarTabs.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: "sd-sidetab-menu sd-sidetab-menu--static", "data-test-id": this.props['data-test-id'] },
            React.createElement("ul", null, this.props.items.map(function (item, index) {
                if (item === 'divider') {
                    return React.createElement("li", { key: index, className: "sd-sidetab-menu__spacer" });
                }
                else {
                    return (React.createElement("li", { key: index, "data-sd-tooltip": item.tooltip, "data-flow": "left" },
                        React.createElement("button", { disabled: _this.props.disabled, role: "button", "aria-label": item.tooltip, className: (0, classnames_1.default)('sd-sidetab-menu__btn', {
                                'sd-sidetab-menu__btn--active': item.id === _this.props.activeTab && _this.props.disabled !== true,
                            }), onClick: function () { return _this.handleClick(item); }, "data-test-id": "widget-icon", "data-test-value": item.id },
                            item.badgeValue != null && React.createElement(Badge_1.Badge, { text: item['badgeValue'], type: "primary" }),
                            React.createElement("span", { className: "sd-sidetab-menu__main-icon " },
                                React.createElement(Icon_1.Icon, { size: item['size'], name: item['icon'] })),
                            React.createElement("i", { className: "sd-sidetab-menu__helper-icon icon-close-small" }))));
                }
            }))));
    };
    return SideBarTabs;
}(React.PureComponent));
exports.SideBarTabs = SideBarTabs;
