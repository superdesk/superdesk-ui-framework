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
exports.BoxedListFooter = exports.BoxedListActions = exports.BoxedListContentRow = exports.BoxedListItem = exports.BoxedList = void 0;
var React = __importStar(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var BoxedListMedia = /** @class */ (function (_super) {
    __extends(BoxedListMedia, _super);
    function BoxedListMedia() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BoxedListMedia.prototype.render = function () {
        return React.createElement("div", { className: "boxed-list__item-media" }, this.props.children);
    };
    return BoxedListMedia;
}(React.PureComponent));
var BoxedListContent = /** @class */ (function (_super) {
    __extends(BoxedListContent, _super);
    function BoxedListContent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BoxedListContent.prototype.render = function () {
        return React.createElement("div", { className: "boxed-list__item-content" }, this.props.children);
    };
    return BoxedListContent;
}(React.PureComponent));
var BoxedListContentRow = /** @class */ (function (_super) {
    __extends(BoxedListContentRow, _super);
    function BoxedListContentRow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BoxedListContentRow.prototype.render = function () {
        return React.createElement("div", { className: "boxed-list__item-content-row" }, this.props.children);
    };
    return BoxedListContentRow;
}(React.PureComponent));
exports.BoxedListContentRow = BoxedListContentRow;
var BoxedListFooter = /** @class */ (function (_super) {
    __extends(BoxedListFooter, _super);
    function BoxedListFooter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BoxedListFooter.prototype.render = function () {
        return React.createElement("div", { className: "boxed-list__item-footer" }, this.props.children);
    };
    return BoxedListFooter;
}(React.PureComponent));
exports.BoxedListFooter = BoxedListFooter;
var BoxedListActions = /** @class */ (function (_super) {
    __extends(BoxedListActions, _super);
    function BoxedListActions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BoxedListActions.prototype.render = function () {
        var _this = this;
        var classes = (0, classnames_1.default)({
            'boxed-list__actions--static': this.props.slideIn === undefined,
            'boxed-list__actions--slide-in': this.props.slideIn === true || this.props.slideIn !== undefined,
        });
        return (React.createElement("div", { className: classes, ref: function (el) {
                _this.rootElement = el;
            } }, this.props.children));
    };
    return BoxedListActions;
}(React.PureComponent));
exports.BoxedListActions = BoxedListActions;
var BoxedListItem = /** @class */ (function (_super) {
    __extends(BoxedListItem, _super);
    function BoxedListItem(props) {
        var _this = _super.call(this, props) || this;
        _this.actionsRef = null;
        _this.handleClick = _this.handleClick.bind(_this);
        return _this;
    }
    BoxedListItem.prototype.handleClick = function (event) {
        var _a, _b, _c;
        if (((_a = this.actionsRef) === null || _a === void 0 ? void 0 : _a.rootElement) != null && this.actionsRef.rootElement.contains(event.target)) {
            return;
        }
        else {
            (_c = (_b = this.props).onClick) === null || _c === void 0 ? void 0 : _c.call(_b);
        }
    };
    BoxedListItem.prototype.render = function () {
        var _a;
        var _this = this;
        var classes = (0, classnames_1.default)('boxed-list__item', (_a = {
                'boxed-list__item--comfortable': this.props.density === undefined
            },
            _a["boxed-list__item--".concat(this.props.density)] = this.props.density || this.props.density !== undefined,
            _a['boxed-list__item--clickable'] = this.props.clickable === true,
            _a['boxed-list__item--selected'] = this.props.selected,
            _a['boxed-list__item--unread'] = this.props.unread,
            _a['boxed-list__item--colored-bg'] = this.props.coloredBg,
            _a["boxed-list__item--".concat(this.props.type)] = this.props.type || this.props.type !== undefined,
            _a["boxed-list__item--align-".concat(this.props.alignVertical)] = this.props.alignVertical,
            _a));
        return (React.createElement("li", { className: classes, onClick: this.handleClick },
            this.props.media && React.createElement(BoxedListMedia, null, this.props.media),
            React.createElement(BoxedListContent, null, this.props.children),
            this.props.footer && React.createElement(BoxedListFooter, null, this.props.footer),
            this.props.actions && (React.createElement(BoxedListActions, { slideIn: this.props.slideInActions, ref: function (ref) {
                    _this.actionsRef = ref;
                } }, this.props.actions))));
    };
    return BoxedListItem;
}(React.PureComponent));
exports.BoxedListItem = BoxedListItem;
var BoxedList = /** @class */ (function (_super) {
    __extends(BoxedList, _super);
    function BoxedList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BoxedList.prototype.render = function () {
        var _a;
        var classes = (0, classnames_1.default)('boxed-list', (_a = {
                'boxed-list--compact': this.props.density === undefined
            },
            _a["boxed-list--".concat(this.props.density)] = this.props.density || this.props.density !== undefined,
            _a), this.props.className);
        return (React.createElement("ul", { className: classes, style: this.props.style }, this.props.children));
    };
    return BoxedList;
}(React.PureComponent));
exports.BoxedList = BoxedList;
