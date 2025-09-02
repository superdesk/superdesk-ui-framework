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
exports.Avatar = void 0;
var React = __importStar(require("react"));
var avatar_image_1 = require("./avatar-image");
var avatar_wrapper_1 = require("./avatar-wrapper");
var avatar_text_1 = require("./avatar-text");
var Avatar = /** @class */ (function (_super) {
    __extends(Avatar, _super);
    function Avatar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Avatar.prototype.render = function () {
        var _a = this.props, imageUrl = _a.imageUrl, initials = _a.initials, size = _a.size, statusIndicator = _a.statusIndicator, administratorIndicator = _a.administratorIndicator, icon = _a.icon, noAvatarPlaceholderColor = _a.noAvatarPlaceholderColor, displayName = _a.displayName, customContent = _a.customContent, statusDot = _a.statusDot;
        var tooltipCombined = [displayName, this.props.tooltip]
            .filter(function (str) { return (str !== null && str !== void 0 ? str : '').trim().length > 0; })
            .join('\n');
        return (React.createElement(avatar_wrapper_1.AvatarWrapper, { size: size, statusIndicator: statusIndicator ? { status: statusIndicator, tooltipText: '' } : undefined, administratorIndicator: administratorIndicator ? { enabled: true, tooltipText: '' } : undefined, icon: icon, statusDot: statusDot, noAvatarPlaceholderColor: noAvatarPlaceholderColor }, (function () {
            if (customContent != null) {
                return customContent;
            }
            else if (imageUrl != null || initials == null) {
                return React.createElement(avatar_image_1.AvatarContentImage, { imageUrl: imageUrl, tooltipText: tooltipCombined });
            }
            else {
                return React.createElement(avatar_text_1.AvatarContentText, { text: initials, tooltipText: tooltipCombined });
            }
        })()));
    };
    return Avatar;
}(React.PureComponent));
exports.Avatar = Avatar;
