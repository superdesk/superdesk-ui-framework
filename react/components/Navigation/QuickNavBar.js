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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuickNavBar = void 0;
var React = __importStar(require("react"));
var Icon_1 = require("../Icon");
var react_scrollspy_1 = __importDefault(require("react-scrollspy"));
var QuickNavBar = /** @class */ (function (_super) {
    __extends(QuickNavBar, _super);
    function QuickNavBar(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            index: 0,
            closeIndex: -1,
            arr: [],
        };
        _this.handleClick = _this.handleClick.bind(_this);
        return _this;
    }
    QuickNavBar.prototype.handleClick = function (item, indexNumber, event) {
        var _a;
        this.setState({
            index: indexNumber,
        });
        if (this.state.index === indexNumber) {
            this.setState({
                closeIndex: indexNumber,
                index: -1,
            });
        }
        if (item.id && this.props.scrollSpy) {
            return (_a = document.getElementById(item.id)) === null || _a === void 0 ? void 0 : _a.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
        }
        if (item.onClick) {
            item.onClick(event);
        }
    };
    QuickNavBar.prototype.render = function () {
        var _this = this;
        var itemsArr = [];
        this.props.items.map(function (item) {
            if (item !== 'divider') {
                itemsArr = __spreadArray(__spreadArray([], itemsArr, true), ["".concat(item.id)], false);
            }
        });
        return (React.createElement("div", { className: "sd-quickbar-menu" }, this.props.scrollSpy ? (React.createElement("ul", null,
            React.createElement(react_scrollspy_1.default, { items: itemsArr, currentClassName: "sd-quickbar-menu__list-item--active", rootEl: this.props.scrollSpy, offset: this.props.offset || 0 }, this.props.items.map(function (item, index) {
                if (item === 'divider') {
                    return React.createElement("li", { key: index, className: "sd-quickbar__spacer" });
                }
                else {
                    return (React.createElement("li", { key: index, "data-sd-tooltip": item['tooltip'], "data-flow": "right", className: "sd-quickbar-menu__list-item" },
                        React.createElement("a", { role: "button", "aria-label": item['tooltip'], className: 'sd-quickbar__btn', onClick: function () { return _this.handleClick(item, index, event); } },
                            React.createElement(Icon_1.Icon, { size: 'small', name: item['icon'] }))));
                }
            })))) : (React.createElement("ul", null, this.props.items.map(function (item, index) {
            if (item === 'divider') {
                return React.createElement("li", { key: index, className: "sd-quickbar__spacer" });
            }
            else {
                return (React.createElement("li", { key: index, "data-sd-tooltip": item['tooltip'], "data-flow": "right" },
                    React.createElement("a", { role: "button", "aria-label": item['tooltip'], className: 'sd-quickbar__btn' +
                            (index === _this.state.index ? ' sd-quickbar__btn--active' : ''), onClick: function () { return _this.handleClick(item, index, event); } },
                        React.createElement(Icon_1.Icon, { size: 'small', name: item['icon'] }))));
            }
        })))));
    };
    return QuickNavBar;
}(React.PureComponent));
exports.QuickNavBar = QuickNavBar;
