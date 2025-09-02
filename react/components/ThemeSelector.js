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
exports.ThemeSelector = void 0;
var React = __importStar(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var react_id_generator_1 = __importDefault(require("react-id-generator"));
var ThemeSelector = /** @class */ (function (_super) {
    __extends(ThemeSelector, _super);
    function ThemeSelector(props) {
        var _this = _super.call(this, props) || this;
        _this.htmlId = (0, react_id_generator_1.default)();
        _this.handleChange = _this.handleChange.bind(_this);
        return _this;
    }
    ThemeSelector.prototype.handleChange = function (item) {
        console.log(item);
        if (!item.disabled) {
            this.props.onChange(item.value);
        }
    };
    ThemeSelector.prototype.render = function () {
        var _a;
        var _this = this;
        var classes = (0, classnames_1.default)('sd-theme-selector__list ', (_a = {},
            _a["sd-theme-selector__list--".concat(this.props.size)] = this.props.size,
            _a));
        return (React.createElement("div", { className: classes }, this.props.options.map(function (item, index) { return (React.createElement("div", { className: "sd-theme-selector__item", key: index, tabIndex: -1 },
            React.createElement("figure", { className: "sd-theme-selector__item-thumb", "data-theme": item.theme + '-ui', "aria-hidden": "true" },
                React.createElement("svg", { viewBox: "0 0 156 94", xmlns: "http://www.w3.org/2000/svg" },
                    React.createElement("g", { fill: "none", fillRule: "evenodd" },
                        React.createElement("path", { d: "m0 0h156v94h-156z", fill: "var(--sd-colour-panel-bg--100)" }),
                        React.createElement("circle", { cx: "144", cy: "33", fill: "var(--color-text-lighter)", r: "4" }),
                        React.createElement("rect", { fill: "var(--sd-colour-interactive)", height: "15", rx: "2", width: "58", x: "91", y: "71" }),
                        React.createElement("g", { fill: "var(--sd-colour-btn-bg-neutral)" },
                            React.createElement("rect", { height: "15", rx: "2", width: "58", x: "29", y: "52" }),
                            React.createElement("rect", { height: "15", rx: "2", width: "58", x: "29", y: "71" }),
                            React.createElement("rect", { height: "15", rx: "2", width: "58", x: "91", y: "52" })),
                        React.createElement("g", { fill: "#fff" },
                            React.createElement("rect", { height: "3", rx: "1.5", width: "9", x: "99", y: "77" }),
                            React.createElement("rect", { height: "3", rx: "1.5", width: "11", x: "130", y: "77" }),
                            React.createElement("rect", { height: "3", rx: "1.5", width: "18", x: "110", y: "77" })),
                        React.createElement("g", { fill: "var(--color-text-light)" },
                            React.createElement("rect", { height: "3", rx: "1.5", width: "9", x: "37", y: "58" }),
                            React.createElement("rect", { height: "3", rx: "1.5", width: "11", x: "68", y: "58" }),
                            React.createElement("rect", { height: "3", rx: "1.5", width: "18", x: "48", y: "58" }),
                            React.createElement("rect", { height: "3", rx: "1.5", width: "9", x: "37", y: "77" }),
                            React.createElement("rect", { height: "3", rx: "1.5", width: "11", x: "68", y: "77" }),
                            React.createElement("rect", { height: "3", rx: "1.5", width: "18", x: "48", y: "77" }),
                            React.createElement("rect", { height: "3", rx: "1.5", width: "9", x: "99", y: "58" }),
                            React.createElement("rect", { height: "3", rx: "1.5", width: "11", x: "130", y: "58" }),
                            React.createElement("rect", { height: "3", rx: "1.5", width: "18", x: "110", y: "58" })),
                        React.createElement("g", { fill: "var(--color-text)" },
                            React.createElement("rect", { height: "4", rx: "2", width: "11", x: "29", y: "31" }),
                            React.createElement("rect", { height: "4", rx: "2", width: "14", x: "70", y: "31" }),
                            React.createElement("rect", { height: "4", rx: "2", width: "23", x: "43", y: "31" })),
                        React.createElement("path", { d: "m0 22h22v72h-22z", fill: "var(--sd-colour-sidebar-menu--00)" }),
                        React.createElement("circle", { cx: "11", cy: "52", fill: "var(--sd-colour-interactive)", r: "6" }),
                        React.createElement("g", { fill: "var(--color-icon-default)", opacity: ".75" },
                            React.createElement("circle", { cx: "11", cy: "34", r: "6" }),
                            React.createElement("circle", { cx: "11", cy: "70", r: "6" })),
                        React.createElement("path", { d: "m0 0h156v22h-156z", fill: "var(--sd-colour-top-menu)" }),
                        React.createElement("path", { d: "m0 22h156v1h-156z", fill: "var(--sd-colour--shadow-line)" }),
                        React.createElement("g", { fill: "hsla(214, 13%, 65%, 1)", opacity: "1" },
                            React.createElement("rect", { height: "4", rx: "2", width: "11", x: "31", y: "9" }),
                            React.createElement("rect", { height: "4", rx: "2", width: "23", x: "45", y: "9" })),
                        React.createElement("path", { d: "m22 44h134v1h-134z", fill: "var(--sd-colour-line--medium)" }),
                        React.createElement("path", { d: "m0 0h22v22h-22z", fill: "var(--sd-colour-top-menu__btn)" }),
                        React.createElement("path", { d: "m15 13v1h-8v-1zm0-3v1h-8v-1zm0-3v1h-8v-1z", fill: "#fff" })))),
            React.createElement("div", { className: "sd-theme-selector__item-action" },
                React.createElement("input", { type: "radio", className: "sd-theme-selector__input", id: _this.htmlId + index, tabIndex: 0, name: _this.htmlId, onChange: function () { return _this.handleChange(item); }, disabled: item.disabled }),
                React.createElement("span", { className: "sd-radio-new" }),
                React.createElement("label", { className: "sd-theme-selector__label", htmlFor: _this.htmlId + index }, item.label),
                React.createElement("span", { className: "sd-theme-selector__label-text", "aria-hidden": "true" }, item.label)))); })));
    };
    return ThemeSelector;
}(React.Component));
exports.ThemeSelector = ThemeSelector;
