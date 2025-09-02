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
exports.Label = void 0;
var React = __importStar(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var helpers_1 = require("../helpers");
var Label = /** @class */ (function (_super) {
    __extends(Label, _super);
    function Label() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Label.prototype.render = function () {
        var _a;
        var classes = (0, classnames_1.default)('label', (_a = {},
            _a["label--".concat(this.props.size)] = this.props.size !== 'normal' && this.props.size !== undefined,
            _a['label--no-transform'] = this.props.noTransform,
            _a["label--".concat(this.props.type)] = this.props.type !== undefined && !this.props.color,
            _a["".concat(this.props.color)] = this.props.color !== undefined && !this.props.type && !this.props.style,
            _a["label--".concat(this.props.style)] = this.props.style !== 'filled' && this.props.style !== undefined,
            _a["hollow-".concat(this.props.color)] = this.props.color && this.props.style === 'hollow',
            _a));
        if (this.props.link || this.props.onClick) {
            if (this.props.style === 'hollow') {
                return (React.createElement("a", { className: classes, href: this.props.link, onClick: this.props.onClick, style: { color: this.props.hexColor, borderColor: this.props.hexColor }, "data-test-id": this.props['data-test-id'] }, this.props.text));
            }
            else if (this.props.style === 'translucent') {
                return (React.createElement("a", { className: classes, href: this.props.link, onClick: this.props.onClick, style: { color: this.props.hexColor, backgroundColor: "".concat(this.props.hexColor, "33") }, "data-test-id": this.props['data-test-id'] }, this.props.text));
            }
            else {
                return (React.createElement("a", { className: classes, href: this.props.link, onClick: this.props.onClick, style: { backgroundColor: this.props.hexColor }, "data-test-id": this.props['data-test-id'] }, this.props.text));
            }
        }
        else {
            if (this.props.style === 'hollow') {
                return (React.createElement("span", { className: classes, style: { color: this.props.hexColor, borderColor: this.props.hexColor }, "data-test-id": this.props['data-test-id'] }, this.props.text));
            }
            else if (this.props.style === 'translucent') {
                return (React.createElement("span", { className: classes, style: { color: this.props.hexColor, backgroundColor: "".concat(this.props.hexColor, "33") }, "data-test-id": this.props['data-test-id'] }, this.props.text));
            }
            else {
                return (React.createElement("span", { className: classes, style: this.props.hexColor
                        ? { backgroundColor: this.props.hexColor, color: (0, helpers_1.getTextColor)(this.props.hexColor) }
                        : undefined, "data-test-id": this.props['data-test-id'] }, this.props.text));
            }
        }
    };
    return Label;
}(React.PureComponent));
exports.Label = Label;
