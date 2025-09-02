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
exports.TagInput = void 0;
var React = __importStar(require("react"));
var chips_1 = require("@superdesk/primereact/chips");
var Form_1 = require("./Form");
var react_id_generator_1 = __importDefault(require("react-id-generator"));
var SelectPreview_1 = require("./SelectPreview");
var TagInput = /** @class */ (function (_super) {
    __extends(TagInput, _super);
    function TagInput() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.htmlId = (0, react_id_generator_1.default)();
        return _this;
    }
    TagInput.prototype.render = function () {
        var _a = this.props, onChange = _a.onChange, value = _a.value, placeholder = _a.placeholder;
        if (this.props.preview) {
            return React.createElement(SelectPreview_1.SelectPreview, { kind: { mode: 'multi-select' }, items: this.props.value, getLabel: function (item) { return item; } });
        }
        return (React.createElement(Form_1.InputWrapper, { label: this.props.label, error: this.props.error, invalid: this.props.error != null, required: this.props.required, disabled: this.props.disabled, info: this.props.info, inlineLabel: this.props.inlineLabel, labelHidden: this.props.labelHidden, htmlId: this.htmlId, tabindex: this.props.tabindex, inputWrapper: this.props.inputWrapper },
            React.createElement(chips_1.Chips, { className: "\n                        tags-input--multi-select sd-input__input\n                        ".concat(this.props.disabled ? ' tags-input__padding-disabled' : ''), allowDuplicate: false, separator: ",", onChange: function (event) { return onChange(event.value); }, value: value, placeholder: this.props.disabled ? undefined : placeholder, disabled: this.props.disabled })));
    };
    return TagInput;
}(React.Component));
exports.TagInput = TagInput;
