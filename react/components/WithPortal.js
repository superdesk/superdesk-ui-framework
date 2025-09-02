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
Object.defineProperty(exports, "__esModule", { value: true });
exports.WithPortal = void 0;
exports.findParent = findParent;
var React = __importStar(require("react"));
var react_dom_1 = require("react-dom");
function findParent(element) {
    var _a;
    var dataTheme = element;
    while (dataTheme != null && (dataTheme === null || dataTheme === void 0 ? void 0 : dataTheme.getAttribute('data-theme')) == null) {
        dataTheme = (_a = dataTheme.parentElement) !== null && _a !== void 0 ? _a : null;
    }
    return dataTheme;
}
var WithPortal = /** @class */ (function (_super) {
    __extends(WithPortal, _super);
    function WithPortal(props) {
        var _this = _super.call(this, props) || this;
        _this.ref = React.createRef();
        return _this;
    }
    WithPortal.prototype.componentDidMount = function () {
        var _a, _b;
        this.dataTheme = (_b = (_a = findParent(this.ref.current)) === null || _a === void 0 ? void 0 : _a.getAttribute('data-theme')) !== null && _b !== void 0 ? _b : undefined;
    };
    WithPortal.prototype.render = function () {
        return (React.createElement("div", { ref: this.ref }, this.props.active &&
            (0, react_dom_1.createPortal)(React.createElement("div", { "data-theme": this.dataTheme, "data-test-id": this.props['data-test-id'] }, this.props.children), document.body)));
    };
    return WithPortal;
}(React.Component));
exports.WithPortal = WithPortal;
