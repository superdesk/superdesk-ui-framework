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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Autocomplete = void 0;
var React = __importStar(require("react"));
var autocomplete_1 = require("@superdesk/primereact/autocomplete");
var classnames_1 = __importDefault(require("classnames"));
var react_id_generator_1 = __importDefault(require("react-id-generator"));
var Autocomplete = /** @class */ (function (_super) {
    __extends(Autocomplete, _super);
    function Autocomplete(props) {
        var _a, _b;
        var _this = _super.call(this, props) || this;
        _this.htmlId = (0, react_id_generator_1.default)();
        _this.state = {
            selectedItem: (_a = _this.props.value) !== null && _a !== void 0 ? _a : null,
            filteredItems: null,
            invalid: (_b = _this.props.invalid) !== null && _b !== void 0 ? _b : false,
            focused: false,
        };
        _this.searchItem = _this.searchItem.bind(_this);
        return _this;
    }
    Autocomplete.prototype.search = function (term) {
        var _this = this;
        var _a;
        if (!this.props.search) {
            return;
        }
        (_a = this.latestCall) === null || _a === void 0 ? void 0 : _a.cancel();
        this.latestCall = this.props.search(term, function (results) {
            _this.setState({ filteredItems: results });
        });
    };
    Autocomplete.prototype.searchItem = function (event) {
        var _this = this;
        if (this.props.search) {
            return this.search(event.query);
        }
        setTimeout(function () {
            var filteredItems;
            if (!event.query.trim().length) {
                filteredItems = __spreadArray([], _this.props.items, true);
            }
            else {
                filteredItems = _this.props.items.filter(function (item) {
                    if (_this.props.keyValue) {
                        return item[_this.props.keyValue].toLowerCase().startsWith(event.query.toLowerCase());
                    }
                    return item.toLowerCase().startsWith(event.query.toLowerCase());
                });
            }
            _this.setState({ filteredItems: filteredItems });
        }, 250);
    };
    Autocomplete.prototype.handleChange = function (event) {
        this.setState({ selectedItem: event.value });
        this.props.onChange(event.value);
    };
    Autocomplete.prototype.handleSelect = function (event) {
        this.setState({ selectedItem: event.value });
        if (this.props.onSelect) {
            this.props.onSelect(event.value);
        }
    };
    Autocomplete.prototype.handleInputClear = function () {
        this.setState({ selectedItem: null });
    };
    Autocomplete.prototype.render = function () {
        var _this = this;
        var classes, inputFieldClass;
        if (this.props.isSearchField) {
            classes = (0, classnames_1.default)('sd-searchbar', 'sd-searchbar--boxed', {
                'sd-searchbar--disabled': this.props.disabled,
                'sd-searchbar--invalid': this.props.invalid || this.state.invalid,
                'sd-searchbar--focused': this.state.focused,
            });
            inputFieldClass = 'sd-searchbar__input';
        }
        else {
            classes = (0, classnames_1.default)('sd-input', {
                'sd-input--inline-label': this.props.inlineLabel,
                'sd-input--required': this.props.required,
                'sd-input--disabled': this.props.disabled,
                'sd-input--invalid': this.props.invalid || this.state.invalid,
                'sd-input--focused': this.state.focused,
            });
            inputFieldClass = 'sd-input__input';
        }
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { className: classes },
                this.props.label && !this.props.isSearchField ? (React.createElement("label", { className: "sd-input__label", htmlFor: this.htmlId }, this.props.label)) : null,
                this.props.label && this.props.isSearchField ? (React.createElement("label", { className: "sd-searchbar__icon", htmlFor: this.htmlId, "aria-label": this.props.label })) : null,
                React.createElement(autocomplete_1.AutoComplete, { id: this.htmlId, inputClassName: inputFieldClass, value: this.state.selectedItem, placeholder: this.props.placeholder, suggestions: this.state.filteredItems, completeMethod: this.searchItem, itemTemplate: this.props.listItemTemplate, field: this.props.keyValue, disabled: this.props.disabled, minLength: this.props.minLength ? this.props.minLength : 1, onFocus: function () {
                        _this.setState({ focused: true });
                    }, onBlur: function () {
                        _this.setState({ focused: false });
                    }, onChange: function (event) { return _this.handleChange(event); }, onSelect: function (event) { return _this.handleSelect(event); } }),
                this.props.isSearchField && this.state.selectedItem ? (React.createElement("button", { className: "sd-searchbar__cancel", onClick: function () { return _this.handleInputClear(); } },
                    React.createElement("i", { className: "icon-remove-sign", "aria-label": "remove-sign" }))) : null,
                !this.props.isSearchField ? (React.createElement("div", { className: "sd-input__message-box" },
                    this.props.info && !this.props.invalid && !this.state.invalid ? (React.createElement("div", { className: "sd-input__hint" }, this.props.info)) : null,
                    this.props.invalid || this.state.invalid ? (React.createElement("div", { className: "sd-input__message" }, this.props.error)) : null)) : null),
            this.props.isSearchField ? (React.createElement("div", { className: "sd-searchbar__message-box" },
                this.props.info && !this.props.invalid && !this.state.invalid ? (React.createElement("div", { className: "sd-searchbar__hint" }, this.props.info)) : null,
                this.props.invalid || this.state.invalid ? (React.createElement("div", { className: "sd-searchbar__message" }, this.props.error)) : null)) : null));
    };
    return Autocomplete;
}(React.Component));
exports.Autocomplete = Autocomplete;
