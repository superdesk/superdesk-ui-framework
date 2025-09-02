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
exports.InputBase = void 0;
var React = __importStar(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var InputBase = /** @class */ (function (_super) {
    __extends(InputBase, _super);
    function InputBase(props) {
        var _a, _b;
        var _this = _super.call(this, props) || this;
        _this.state = {
            value: (_a = _this.props.value) !== null && _a !== void 0 ? _a : '',
            invalid: (_b = _this.props.invalid) !== null && _b !== void 0 ? _b : false,
        };
        _this.handleChange = _this.handleChange.bind(_this);
        return _this;
    }
    // htmlId = nextId();
    InputBase.prototype.handleChange = function (event) {
        this.setState({ value: event.target.value });
        if (this.props.type === 'number') {
            this.props.onChange(Number(event.target.value));
        }
        else {
            this.props.onChange(event.target.value);
        }
    };
    InputBase.prototype.componentDidUpdate = function (prevProps) {
        if (prevProps.value !== this.props.value) {
            this.setState({ value: this.props.value });
        }
    };
    InputBase.prototype.render = function () {
        var _a;
        var _b;
        var classes = (0, classnames_1.default)('sd-input__input', (_a = {
                'sd-input__input--boxed-style': this.props.boxedStyle,
                'sd-input__input--required': this.props.required,
                'sd-input__input--invalid': this.props.invalid,
                'sd-input__input--disabled': this.props.disabled,
                'sd-input__input--medium': this.props.size === undefined
            },
            _a["sd-input__input--".concat(this.props.size)] = this.props.size || this.props.size !== undefined,
            _a));
        return (React.createElement("input", { className: classes, type: (_b = this.props.type) !== null && _b !== void 0 ? _b : 'text', id: this.props.htmlId, value: this.state.value, "aria-describedby": this.props.htmlId + 'label', tabIndex: this.props.tabIndex, onChange: this.handleChange, placeholder: this.props.placeholder, disabled: this.props.disabled }));
    };
    return InputBase;
}(React.Component));
exports.InputBase = InputBase;
