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
exports.TreeSelectItem = void 0;
exports.getPrefixedItemId = getPrefixedItemId;
var React = __importStar(require("react"));
var Icon_1 = require("../Icon");
var helpers_1 = require("../../helpers");
function getPrefixedItemId(id) {
    return id + '-focus';
}
var TreeSelectItem = /** @class */ (function (_super) {
    __extends(TreeSelectItem, _super);
    function TreeSelectItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TreeSelectItem.prototype.render = function () {
        var _this = this;
        return (React.createElement("li", { className: "suggestion-item suggestion-item--multi-select", role: "none", onClick: function (event) {
                var _a, _b;
                if (!_this.props.disabledItem) {
                    (_b = (_a = _this.props).onClick) === null || _b === void 0 ? void 0 : _b.call(_a);
                    event.preventDefault();
                    event.stopPropagation();
                    _this.props.handleTree(event, _this.props.option);
                }
            } },
            React.createElement("button", { 
                // the className is generated in order to focus the element later
                className: "suggestion-item--btn ".concat(getPrefixedItemId(this.props.getId(this.props.option.value))) +
                    (this.props.disabledItem ? ' suggestion-item--disabled' : ''), onKeyDown: function (event) {
                    var _a, _b;
                    if (event.key === 'Enter' && _this.props.option.children) {
                        (_b = (_a = _this.props).onKeyDown) === null || _b === void 0 ? void 0 : _b.call(_a);
                    }
                }, disabled: this.props.disabledItem, "data-test-id": "option", role: "treeitem", "aria-selected": this.props.selectedItem === true, "aria-disabled": this.props.disabledItem === true },
                this.props.getBorderColor && !this.props.allowMultiple && (React.createElement("div", { className: "item-border", style: {
                        backgroundColor: this.props.getBorderColor(this.props.option.value),
                    } })),
                React.createElement("span", { className: 'suggestion-item--bgcolor' + (this.props.selectedItem ? ' suggestion-item--selected' : ''), style: this.props.getBackgroundColor && this.props.option.value
                        ? {
                            backgroundColor: this.props.getBackgroundColor(this.props.option.value),
                            color: (0, helpers_1.getTextColor)(this.props.getBackgroundColor(this.props.option.value)),
                        }
                        : undefined }, this.props.optionTemplate
                    ? this.props.optionTemplate(this.props.option.value)
                    : this.props.getLabel(this.props.option.value)),
                this.props.option.children && (React.createElement("span", { className: "suggestion-item__icon", "aria-hidden": "true", "data-test-id": "children-indicator" },
                    React.createElement(Icon_1.Icon, { name: "chevron-right-thin" }))))));
    };
    return TreeSelectItem;
}(React.Component));
exports.TreeSelectItem = TreeSelectItem;
