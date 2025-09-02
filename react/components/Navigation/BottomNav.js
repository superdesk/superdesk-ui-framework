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
exports.BottomNav = void 0;
var React = __importStar(require("react"));
var Icon_1 = require("../Icon");
var IconButton_1 = require("../IconButton");
var lodash_1 = require("lodash");
var BottomNav = /** @class */ (function (_super) {
    __extends(BottomNav, _super);
    function BottomNav(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            index: -1,
            closeIndex: -1,
            items: _this.props.items,
        };
        _this.handleClick = _this.handleClick.bind(_this);
        _this.handleDelete = _this.handleDelete.bind(_this);
        return _this;
    }
    BottomNav.prototype.handleClick = function (indexNumber) {
        this.setState({
            index: indexNumber,
        });
        if (this.state.index === indexNumber) {
            this.setState({
                closeIndex: indexNumber,
            });
        }
    };
    BottomNav.prototype.handleDelete = function (indexNumber) {
        var newItems = (0, lodash_1.clone)(this.state.items);
        newItems.splice(indexNumber, 1);
        this.setState({
            items: newItems,
        });
    };
    BottomNav.prototype.render = function () {
        var _this = this;
        return (React.createElement("ul", { className: "sd-bottom-nav-list" }, this.props.items.map(function (item, index) {
            return (React.createElement("li", { key: index, className: 'sd-bottom-nav-list__item' +
                    (item['active']
                        ? ' sd-bottom-nav-list__item--active'
                        : index === _this.state.index
                            ? ' sd-bottom-nav-list__item--active'
                            : '') },
                React.createElement("a", { className: "sd-bottom-nav-list__item-title", onClick: function (event) {
                        _this.handleClick(index);
                        item.onClick(event);
                    } },
                    item['icon'] && React.createElement(Icon_1.Icon, { name: item['icon'] }),
                    React.createElement("span", null, item.title)),
                React.createElement(IconButton_1.IconButton, { size: "small", icon: "close-small", ariaValue: "Delete", onClick: function () { return item.onRemove(index); } })));
        })));
    };
    return BottomNav;
}(React.PureComponent));
exports.BottomNav = BottomNav;
