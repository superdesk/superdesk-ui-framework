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
exports.AuthoringInnerHeader = void 0;
var React = __importStar(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var Icon_1 = require("../Icon");
var AuthoringInnerHeader = /** @class */ (function (_super) {
    __extends(AuthoringInnerHeader, _super);
    function AuthoringInnerHeader(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            collapsed: _this.props.collapsed ? _this.props.collapsed : false,
        };
        return _this;
    }
    AuthoringInnerHeader.prototype.render = function () {
        var _this = this;
        var _a;
        var hideCollapseButton = (_a = this.props.hideCollapseButton) !== null && _a !== void 0 ? _a : false;
        var classes = (0, classnames_1.default)('sd-editor-content__authoring-header', {
            'authoring-header--collapsed': this.state.collapsed,
            'sd-editor-content__authoring-header--collapsible': !hideCollapseButton,
        });
        var headerPadding = this.props.headerPadding;
        return (React.createElement("header", { style: {
                paddingBlockStart: headerPadding === null || headerPadding === void 0 ? void 0 : headerPadding.top,
                paddingBlockEnd: headerPadding === null || headerPadding === void 0 ? void 0 : headerPadding.bottom,
                paddingInlineStart: headerPadding === null || headerPadding === void 0 ? void 0 : headerPadding.inlineStart,
                paddingInlineEnd: headerPadding === null || headerPadding === void 0 ? void 0 : headerPadding.inlineEnd,
            }, className: classes },
            React.createElement("div", { className: "authoring-header__holder" }, this.props.children),
            !hideCollapseButton && (React.createElement("button", { className: "authoring-header__toggle", onClick: function () { return _this.setState({ collapsed: !_this.state.collapsed }); } },
                React.createElement(Icon_1.Icon, { name: "chevron-up-thin" })))));
    };
    return AuthoringInnerHeader;
}(React.PureComponent));
exports.AuthoringInnerHeader = AuthoringInnerHeader;
