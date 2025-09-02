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
exports.NotificationPanelFooter = exports.NotificationPanelContent = exports.NotificationPanelHeader = exports.NotificationPanelContainer = exports.NotificationPanel = void 0;
var React = __importStar(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var IconButton_1 = require("../IconButton");
var NotificationPanelContainer = /** @class */ (function (_super) {
    __extends(NotificationPanelContainer, _super);
    function NotificationPanelContainer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NotificationPanelContainer.prototype.render = function () {
        var _a;
        var classes = (0, classnames_1.default)('sd-notification-panel', (_a = {},
            _a["sd-notification-panel--open"] = this.props.open,
            _a));
        return (React.createElement("div", { id: this.props.id, "aria-labelledby": "notifications_title", className: classes, "data-theme": this.props.theme ? "".concat(this.props.theme, "-ui") : null }, this.props.children));
    };
    return NotificationPanelContainer;
}(React.PureComponent));
exports.NotificationPanelContainer = NotificationPanelContainer;
var NotificationPanelHeader = /** @class */ (function (_super) {
    __extends(NotificationPanelHeader, _super);
    function NotificationPanelHeader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NotificationPanelHeader.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: "sd-notification-panel__header" },
            React.createElement("h3", { id: "notifications_title", className: "sd-notification-panel__title" }, this.props.headerTitle),
            React.createElement(IconButton_1.IconButton, { toolTipFlow: "left", ariaValue: "Close", icon: "close-small", onClick: function () { return _this.props.onClick(); } })));
    };
    return NotificationPanelHeader;
}(React.PureComponent));
exports.NotificationPanelHeader = NotificationPanelHeader;
var NotificationPanelContent = /** @class */ (function (_super) {
    __extends(NotificationPanelContent, _super);
    function NotificationPanelContent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NotificationPanelContent.prototype.render = function () {
        return React.createElement("div", { className: "sd-notification-panel__content" }, this.props.children);
    };
    return NotificationPanelContent;
}(React.PureComponent));
exports.NotificationPanelContent = NotificationPanelContent;
var NotificationPanelFooter = /** @class */ (function (_super) {
    __extends(NotificationPanelFooter, _super);
    function NotificationPanelFooter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NotificationPanelFooter.prototype.render = function () {
        return React.createElement("div", { className: "sd-notification-panel__footer" }, this.props.children);
    };
    return NotificationPanelFooter;
}(React.PureComponent));
exports.NotificationPanelFooter = NotificationPanelFooter;
var NotificationPanel = /** @class */ (function (_super) {
    __extends(NotificationPanel, _super);
    function NotificationPanel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NotificationPanel.prototype.render = function () {
        var _this = this;
        return (React.createElement(NotificationPanelContainer, { open: this.props.open, theme: this.props.theme },
            React.createElement(NotificationPanelHeader, { headerTitle: this.props.headerTitle, onClick: function () { return _this.props.onClick(); } }, this.props.header),
            React.createElement(NotificationPanelContent, null, this.props.children),
            this.props.footer && React.createElement(NotificationPanelFooter, null, this.props.footer)));
    };
    return NotificationPanel;
}(React.PureComponent));
exports.NotificationPanel = NotificationPanel;
exports.default = NotificationPanel;
