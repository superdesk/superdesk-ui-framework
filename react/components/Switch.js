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
exports.Switch = void 0;
var React = __importStar(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var react_id_generator_1 = __importDefault(require("react-id-generator"));
var Tooltip_1 = require("./Tooltip");
var Switch = /** @class */ (function (_super) {
    __extends(Switch, _super);
    function Switch(props) {
        var _this = _super.call(this, props) || this;
        _this.htmlId = (0, react_id_generator_1.default)('switch-');
        _this.onClick = _this.onClick.bind(_this);
        return _this;
    }
    Switch.prototype.onClick = function () {
        if (this.props.disabled) {
            return;
        }
        this.props.onChange(!this.props.value);
    };
    Switch.prototype.render = function () {
        var classes = (0, classnames_1.default)('sd-switch', {
            checked: this.props.value,
            disabled: this.props.disabled,
        });
        var checkboxInput = (React.createElement("span", { role: "checkbox", id: this.htmlId, className: classes, "aria-checked": this.props.value, "aria-disabled": this.props.disabled, tabIndex: 0, onClick: this.onClick },
            React.createElement("span", { className: "inner" })));
        // if external label is used it can't be hidden
        if (this.props.label.hidden && typeof this.props.label.content === 'string') {
            return (React.createElement(Tooltip_1.Tooltip, { text: this.props.label.content, flow: this.props.toolTipFlow },
                React.createElement("span", { className: "sd-switch__wrapper", tabIndex: -1 },
                    checkboxInput,
                    React.createElement("label", { className: "a11y-only", htmlFor: this.htmlId }, this.props.label.content))));
        }
        else {
            var labelContent = typeof this.props.label.content === 'string' ? (React.createElement("label", { htmlFor: this.htmlId }, this.props.label.content)) : (this.props.label.content(this.htmlId));
            return (React.createElement("span", { className: "sd-switch__wrapper", tabIndex: -1 },
                this.props.label.side === 'left' ? labelContent : null,
                checkboxInput,
                this.props.label.side !== 'left' ? labelContent : null));
        }
    };
    return Switch;
}(React.PureComponent));
exports.Switch = Switch;
