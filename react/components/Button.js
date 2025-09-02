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
exports.Button = void 0;
var React = __importStar(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var Icon_1 = require("./Icon");
var Spinner_1 = require("./Spinner");
var Tooltip_1 = require("./Tooltip");
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Button.prototype.render = function () {
        var _a;
        var _this = this;
        var classes = (0, classnames_1.default)('btn', (_a = {
                'btn--expanded': this.props.expand
            },
            _a["btn--".concat(this.props.size)] = this.props.size !== 'normal' && this.props.size !== undefined,
            _a["btn--".concat(this.props.type)] = this.props.type !== 'default' && this.props.type !== undefined,
            _a["btn--".concat(this.props.style)] = this.props.style !== 'filled' && this.props.style !== undefined,
            _a['btn--disabled'] = this.props.disabled,
            _a['btn--icon-only'] = this.props.iconOnly,
            _a['btn--ui-dark'] = this.props.theme === 'dark',
            _a['btn--icon-only-circle'] = this.props.shape === 'round' && this.props.iconOnly,
            _a['sd-flex-justify-start'] = this.props.textAlign === 'start',
            _a['sd-flex-justify-end'] = this.props.textAlign === 'end',
            _a));
        return (React.createElement(TooltipWrapper, { tooltipText: this.props.tooltip }, function (_a) {
            var attributes = _a.attributes;
            return (React.createElement("button", __assign({}, attributes, { id: _this.props.id, className: classes, tabIndex: 0, disabled: _this.props.disabled || _this.props.isLoading, "data-loading": _this.props.isLoading, onClick: _this.props.disabled ? function () { return false; } : function (event) { return _this.props.onClick(event); }, "aria-label": _this.props.iconOnly ? _this.props.text : '', "data-test-id": _this.props['data-test-id'], style: _this.props.noMargin ? { margin: 0 } : undefined }),
                _this.props.isLoading ? React.createElement(Spinner_1.Spinner, { size: "mini" }) : null,
                _this.props.icon && !_this.props.isLoading ? React.createElement(Icon_1.Icon, { ariaHidden: true, name: _this.props.icon }) : null,
                _this.props.iconOnly ? null : _this.props.text));
        }));
    };
    return Button;
}(React.PureComponent));
exports.Button = Button;
var TooltipWrapper = /** @class */ (function (_super) {
    __extends(TooltipWrapper, _super);
    function TooltipWrapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TooltipWrapper.prototype.render = function () {
        var _a = this.props, tooltipText = _a.tooltipText, children = _a.children;
        return (tooltipText !== null && tooltipText !== void 0 ? tooltipText : '').length > 0 ? (React.createElement(Tooltip_1.WithTooltip, { text: tooltipText }, function (_a) {
            var attributes = _a.attributes;
            return children({ attributes: attributes });
        })) : (React.createElement(React.Fragment, null, children({ attributes: {} })));
    };
    return TooltipWrapper;
}(React.PureComponent));
