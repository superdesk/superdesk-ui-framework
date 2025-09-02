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
exports.SelectWithTemplate = void 0;
var React = __importStar(require("react"));
var dropdown_1 = require("@superdesk/primereact/dropdown");
var react_id_generator_1 = __importDefault(require("react-id-generator"));
var Form_1 = require("./Form");
var labelKey = 'label';
/**
 * @deprecated use MultiSelect or TreeSelect
 */
var SelectWithTemplate = /** @class */ (function (_super) {
    __extends(SelectWithTemplate, _super);
    function SelectWithTemplate(props) {
        var _this = _super.call(this, props) || this;
        _this.htmlId = (0, react_id_generator_1.default)();
        _this.state = {
            options: [],
            loading: false,
            invalid: _this.props.invalid ? _this.props.invalid : false,
        };
        _this.componentRef = null;
        return _this;
    }
    SelectWithTemplate.prototype.componentDidMount = function () {
        var _this = this;
        this.setState({ loading: true });
        this.props.getItems(null).then(function (_options) {
            var _a;
            _this.setState({ options: _options, loading: false });
            if (_this.props.autoFocus && _this.props.autoOpen) {
                (_a = _this.componentRef) === null || _a === void 0 ? void 0 : _a.showOverlay();
            }
        });
    };
    SelectWithTemplate.prototype.render = function () {
        var _this = this;
        var _a;
        var ItemTemplate = this.props.itemTemplate;
        var ValueTemplate = this.props.valueTemplate;
        var _b = this.state, loading = _b.loading, options = _b.options;
        var _c = this.props, value = _c.value, onChange = _c.onChange, getLabel = _c.getLabel, disabled = _c.disabled, required = _c.required, zIndex = _c.zIndex, autoFocus = _c.autoFocus, areEqual = _c.areEqual, getItems = _c.getItems, emptyFilterMessage = _c.noResultsFoundMessage, filterPlaceholder = _c.filterPlaceholder, width = _c.width;
        // Using another data structure so it is possible to have getLabel function
        // which is more type safe than passing a string with a field name to use for labels.
        function toInternalStructure(option) {
            var _a;
            return _a = {}, _a[labelKey] = getLabel(option), _a.original = option, _a;
        }
        var optionsInternal = options.map(function (option) { return toInternalStructure(option); });
        var valueInternal = value == null
            ? null
            : ((_a = optionsInternal === null || optionsInternal === void 0 ? void 0 : optionsInternal.find(function (_a) {
                var original = _a.original;
                return areEqual(original, value);
            })) !== null && _a !== void 0 ? _a : toInternalStructure(value));
        // This is regarding the placeholder for selected value.
        // itemTemplate will be used to render it, but a non-empty value
        // needs to be passed to prime react component
        // or it will not be displayed at all, even if returned by itemTemplate
        var fakePlaceholderWithNonBreakingSpace = ' ';
        return (React.createElement(Form_1.InputWrapper, { label: this.props.label, error: this.props.error, required: this.props.required, disabled: this.props.disabled, invalid: this.state.invalid, info: this.props.info, inlineLabel: this.props.inlineLabel, labelHidden: this.props.labelHidden, fullWidth: this.props.fullWidth, htmlId: this.htmlId, tabindex: this.props.tabindex, inputWrapper: this.props.inputWrapper },
            React.createElement(dropdown_1.Dropdown, { inputId: this.htmlId, ariaLabelledBy: this.htmlId + 'label', value: valueInternal, options: optionsInternal, onChange: function (e) {
                    onChange(e.value == null ? null : e.value.original);
                }, placeholder: fakePlaceholderWithNonBreakingSpace, filterPlaceholder: filterPlaceholder, filter: true, filterBy: labelKey, showClear: !required, emptyFilterMessage: emptyFilterMessage, itemTemplate: function (option) { var _a; return React.createElement(ItemTemplate, { option: (_a = option === null || option === void 0 ? void 0 : option.original) !== null && _a !== void 0 ? _a : null }); }, valueTemplate: function (option) {
                    var _a, _b;
                    return ValueTemplate != null ? (React.createElement(ValueTemplate, { option: (_a = option === null || option === void 0 ? void 0 : option.original) !== null && _a !== void 0 ? _a : null })) : (React.createElement(ItemTemplate, { option: (_b = option === null || option === void 0 ? void 0 : option.original) !== null && _b !== void 0 ? _b : null }));
                }, disabled: disabled, required: required, autoFocus: autoFocus, appendTo: document.body, loading: loading, onFilterInputChange: function (searchString) {
                    _this.setState({ loading: true });
                    getItems(searchString).then(function (_options) {
                        _this.setState({ options: _options, loading: false });
                    });
                }, zIndex: zIndex, style: width === '100%' ? { display: 'flex', width: '100%' } : {}, ref: function (componentRef) {
                    _this.componentRef = componentRef;
                } })));
    };
    return SelectWithTemplate;
}(React.Component));
exports.SelectWithTemplate = SelectWithTemplate;
