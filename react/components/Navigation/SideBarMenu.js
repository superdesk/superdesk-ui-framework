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
exports.SideBarMenu = void 0;
var React = __importStar(require("react"));
var Icon_1 = require("../Icon");
var SideBarMenu = /** @class */ (function (_super) {
    __extends(SideBarMenu, _super);
    function SideBarMenu(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            index: -1,
            closeIndex: -1,
            hover: _this.props.hover ? _this.props.hover : false,
        };
        _this.handleClick = _this.handleClick.bind(_this);
        _this.handleArrows = _this.handleArrows.bind(_this);
        return _this;
    }
    SideBarMenu.prototype.handleClick = function (indexNumber) {
        this.setState({
            index: indexNumber,
        });
        if (this.state.index === indexNumber) {
            this.setState({
                closeIndex: indexNumber,
            });
        }
    };
    SideBarMenu.prototype.handleArrows = function () {
        this.setState({
            hover: !this.state.hover,
        });
    };
    SideBarMenu.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: "sd-sidebar-menu sd-content-wrapper__left-tabs" },
            React.createElement("ul", { className: 'authoring-active' }, this.props.items.map(function (item, index) {
                if (item === 'divider') {
                    return React.createElement("li", { key: index, className: "sd-sidebar-menu__spacer" });
                }
                else {
                    return (React.createElement("li", { key: index, "data-sd-tooltip": item['tooltip'], "data-flow": "right", className: item.hover ? 'authoring-active__item' : '' },
                        React.createElement("a", { className: 'sd-sidebar-menu__btn' +
                                (_this.state.hover ? ' sd-sidebar-menu__btn--closed ' : '') +
                                (item['active']
                                    ? ' sd-sidebar-menu__btn--active'
                                    : index === _this.state.index
                                        ? ' sd-sidebar-menu__btn--active'
                                        : ''), onClick: function () {
                                _this.handleClick(index);
                                if (item.hover) {
                                    _this.handleArrows();
                                    if (item.onCLick) {
                                        item.onCLick();
                                    }
                                }
                            } },
                            React.createElement("span", { className: "sd-sidebar-menu__main-icon " },
                                React.createElement(Icon_1.Icon, { size: item['size'], name: item['icon'] })),
                            React.createElement("i", { className: "sd-sidebar-menu__helper-icon big-icon--chevron-left" }))));
                }
            }))));
    };
    return SideBarMenu;
}(React.PureComponent));
exports.SideBarMenu = SideBarMenu;
