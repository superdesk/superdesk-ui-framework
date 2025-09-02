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
exports.ContentListItem = exports.ContentList = void 0;
var React = __importStar(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var SingleAndDoubleClickFunction_1 = require("./../SingleAndDoubleClickFunction");
var ContentListItem = /** @class */ (function (_super) {
    __extends(ContentListItem, _super);
    function ContentListItem(props) {
        var _this = _super.call(this, props) || this;
        _this.onActionMenuClick = function (event) {
            event.preventDefault();
            event.stopPropagation();
        };
        _this.multiClickHandler = (0, SingleAndDoubleClickFunction_1.setupSingleAndDoubleClick)();
        return _this;
    }
    ContentListItem.prototype.render = function () {
        var _this = this;
        var classes = (0, classnames_1.default)('sd-list-item sd-shadow--z1', {
            'sd-list-item--activated': this.props.activated,
            'sd-list-item--selected': this.props.selected,
            fetched: this.props.archived,
            actioning: this.props.loading,
        });
        return (React.createElement("div", { role: "listitem", className: classes, onClick: function (e) {
                return _this.multiClickHandler(e, {
                    onSingleClick: function () {
                        var selection = window.getSelection();
                        if (_this.props.onClick && selection) {
                            if (selection.toString().length < 1) {
                                _this.props.onClick();
                            }
                        }
                    },
                    onDoubleClick: function () {
                        if (_this.props.onDoubleClick) {
                            _this.props.onDoubleClick();
                        }
                    },
                });
            } },
            this.props.locked ? (React.createElement("div", { className: "sd-list-item__border sd-list-item__border--locked" })) : (React.createElement("div", { className: "sd-list-item__border" })),
            this.props.itemColum.map(function (item, index) {
                return (React.createElement("div", { className: "\n                            sd-list-item__column\n                            ".concat(item.fullwidth && 'sd-list-item__column--grow', "\n                            ").concat(!item.border && 'sd-list-item__column--no-border'), key: index }, item.itemRow.map(function (e, i) {
                    return item.itemRow.length <= 1 ? (React.createElement(React.Fragment, { key: i }, e.content)) : (React.createElement("div", { className: "sd-list-item__row", key: i }, e.content));
                })));
            }),
            React.createElement("div", { className: "sd-list-item__action-menu", onClick: this.onActionMenuClick }, this.props.action)));
    };
    return ContentListItem;
}(React.PureComponent));
exports.ContentListItem = ContentListItem;
var ContentList = /** @class */ (function (_super) {
    __extends(ContentList, _super);
    function ContentList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ContentList.prototype.render = function () {
        var classes = (0, classnames_1.default)('sd-list-item-group sd-list-item-group--space-between-items');
        return (React.createElement("div", { role: "list", className: classes }, this.props.items.map(function (item, index) {
            return (React.createElement(ContentListItem, { key: index, itemColum: item.itemColum, locked: item.locked, action: item.action, loading: item.loading, activated: item.activated, selected: item.selected, archived: item.archived, onClick: item.onClick, onDoubleClick: item.onDoubleClick }));
        })));
    };
    return ContentList;
}(React.PureComponent));
exports.ContentList = ContentList;
