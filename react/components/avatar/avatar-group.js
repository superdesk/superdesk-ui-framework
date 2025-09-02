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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.AvatarGroup = void 0;
var React = __importStar(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var avatar_1 = require("./avatar");
var avatar_wrapper_1 = require("./avatar-wrapper");
var avatar_number_1 = require("./avatar-number");
var avatar_placeholder_1 = require("./avatar-placeholder");
var common_1 = require("@sourcefabric/common");
var WithPopover_1 = require("../WithPopover");
function isAvatar(item) {
    return item['kind'] == null;
}
var AvatarGroup = /** @class */ (function (_super) {
    __extends(AvatarGroup, _super);
    function AvatarGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AvatarGroup.prototype.render = function () {
        var _this = this;
        var _a = this.props, size = _a.size, items = _a.items;
        var someIconsHaveExtraElements = items
            .filter(isAvatar)
            .some(function (_a) {
            var icon = _a.icon, administratorIndicator = _a.administratorIndicator;
            return icon != null || administratorIndicator != null;
        });
        var gap = someIconsHaveExtraElements ? 'medium' : 'none';
        var max = (function () {
            if (_this.props.max === 'show-all') {
                return _this.props.items.length;
            }
            else if (_this.props.max == null) {
                return 4;
            }
            else {
                return _this.props.max;
            }
        })();
        var itemsOverLimit = items.length - max;
        var PlusButtonWrapper = function (_a) {
            var children = _a.children, onToggle = _a.onToggle;
            if (_this.props.onClick == null) {
                return (React.createElement("button", { style: { padding: 0 }, onClick: function (event) {
                        if (_this.props.onClick == null) {
                            onToggle(event.target);
                        }
                    } }, children));
            }
            else {
                return React.createElement(React.Fragment, null, children);
            }
        };
        var someHaveDisplayName = this.props.items.some(function (item) { return isAvatar(item) && item.displayName.length > 0; });
        return (React.createElement(WithPopover_1.WithPopover, { placement: "bottom-end", component: function () { return (React.createElement("div", { className: "avatar-popup" }, _this.props.items.map(function (item, index) {
                return someHaveDisplayName ? (React.createElement(common_1.Spacer, { h: true, alignItems: "center", gap: "16", noGrow: true, key: index },
                    isAvatar(item) && item.displayName,
                    isAvatar(item) ? (React.createElement(avatar_1.Avatar, { size: "small", imageUrl: item.imageUrl, initials: item.initials, displayName: item.displayName, icon: item.icon, statusDot: item.statusDot })) : (React.createElement(avatar_placeholder_1.AvatarPlaceholder, { kind: "plus-button", size: "small", icon: item.icon, onClick: item.onClick })))) : (React.createElement("div", null,
                    React.createElement(avatar_placeholder_1.AvatarPlaceholder, { kind: "plus-button", size: "small", icon: item.icon, onClick: isAvatar(item) ? undefined : item.onClick, key: index })));
            }))); } }, function (onToggle) { return (React.createElement("div", { className: (0, classnames_1.default)('sd-avatar-group', 'sd-avatar-group--stacked', "sd-avatar-group--stacked--gap-".concat(gap)), role: "group", onClick: _this.props.onClick },
            items.slice(0, max).map(function (item, index) {
                if (isAvatar(item)) {
                    return React.createElement(avatar_1.Avatar, __assign({}, item, { key: index, size: size }));
                }
                else {
                    return React.createElement(avatar_placeholder_1.AvatarPlaceholder, __assign({}, item, { key: index, size: _this.props.size }));
                }
            }),
            itemsOverLimit > 0 && (React.createElement(PlusButtonWrapper, { onToggle: onToggle },
                React.createElement(avatar_wrapper_1.AvatarWrapper, { size: size },
                    React.createElement(avatar_number_1.AvatarContentNumber, { number: "".concat(itemsOverLimit) })))))); }));
    };
    return AvatarGroup;
}(React.PureComponent));
exports.AvatarGroup = AvatarGroup;
