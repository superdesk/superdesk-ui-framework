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
exports.RadioGroup = void 0;
var React = __importStar(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var react_id_generator_1 = __importDefault(require("react-id-generator"));
var RadioGroup = /** @class */ (function (_super) {
    __extends(RadioGroup, _super);
    function RadioGroup(props) {
        var _this = _super.call(this, props) || this;
        _this.htmlId = (0, react_id_generator_1.default)();
        _this.handleChange = _this.handleChange.bind(_this);
        return _this;
    }
    RadioGroup.prototype.handleChange = function (item) {
        if (!item.disabled) {
            this.props.onChange(item.value);
        }
    };
    RadioGroup.prototype.render = function () {
        var _this = this;
        var classes = (0, classnames_1.default)('sd-check__group-new', {
            'sd-check__group-new--vertical': this.props.orientation === 'vertical',
        });
        return (React.createElement("div", { className: classes, "aria-labelledby": this.props.groupLabelledBy }, this.props.options.map(function (item, index) { return (React.createElement("span", { className: "sd-check-new__wrapper", key: index, "label-position": _this.props.labelSide || null, tabIndex: _this.props.tabindex === undefined ? undefined : -1 },
            React.createElement("input", { type: "radio", className: "sd-check-new__input", id: _this.htmlId + index, tabIndex: _this.props.tabindex, name: _this.htmlId, onChange: function () { return _this.handleChange(item); }, disabled: item.disabled, required: _this.props.required, checked: item.value === _this.props.value }),
            React.createElement("span", { className: "sd-radio-new" }),
            React.createElement("label", { htmlFor: _this.htmlId + index }, item.label))); })));
    };
    return RadioGroup;
}(React.Component));
exports.RadioGroup = RadioGroup;
