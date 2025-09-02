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
exports.Option = exports.Select = void 0;
var React = __importStar(require("react"));
var react_id_generator_1 = __importDefault(require("react-id-generator"));
var Form_1 = require("./Form");
var Select = /** @class */ (function (_super) {
    __extends(Select, _super);
    function Select(props) {
        var _this = _super.call(this, props) || this;
        _this.htmlId = (0, react_id_generator_1.default)();
        _this.handleChange = _this.handleChange.bind(_this);
        return _this;
    }
    Select.prototype.handleChange = function (event) {
        this.props.onChange(event.target.value);
    };
    Select.prototype.render = function () {
        if (this.props.preview) {
            return (React.createElement("div", null,
                React.createElement("span", null, this.props.value)));
        }
        return (React.createElement(Form_1.InputWrapper, { label: this.props.label, error: this.props.error, invalid: this.props.error != null, required: this.props.required, disabled: this.props.disabled, readonly: this.props.readonly, info: this.props.info, inlineLabel: this.props.inlineLabel, labelHidden: this.props.labelHidden, fullWidth: this.props.fullWidth, htmlId: this.htmlId, tabindex: this.props.tabindex, inputWrapper: this.props.inputWrapper },
            React.createElement("span", { className: "sd-input__select-caret-wrapper" },
                React.createElement("select", { className: "sd-input__select", id: this.htmlId, value: this.props.value, "aria-describedby": this.htmlId + 'label', tabIndex: this.props.tabindex, onChange: this.handleChange, disabled: this.props.disabled || this.props.readonly, "data-test-id": this.props['data-test-id'] }, this.props.children))));
    };
    return Select;
}(React.Component));
exports.Select = Select;
var Option = /** @class */ (function (_super) {
    __extends(Option, _super);
    function Option() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Option.prototype.render = function () {
        return React.createElement("option", { value: this.props.value }, this.props.children);
    };
    return Option;
}(React.PureComponent));
exports.Option = Option;
