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
exports.WithPopover = void 0;
var React = __importStar(require("react"));
var ShowPopup_1 = require("./ShowPopup");
/**
 * Wraps `PopupPositioner`
 * Quicker to use for simple use cases.
 */
var WithPopover = /** @class */ (function (_super) {
    __extends(WithPopover, _super);
    function WithPopover(props) {
        var _this = _super.call(this, props) || this;
        _this.togglePopup = _this.togglePopup.bind(_this);
        return _this;
    }
    WithPopover.prototype.togglePopup = function (referenceElement) {
        var _this = this;
        if (this.closePopup != null) {
            this.closePopup();
            this.closePopup = undefined;
        }
        else {
            this.closePopup = (0, ShowPopup_1.showPopup)(referenceElement, this.props.placement, this.props.component, this.props.closeOnHoverEnd, function () {
                var _a, _b;
                _this.closePopup = undefined;
                (_b = (_a = _this.props).onClose) === null || _b === void 0 ? void 0 : _b.call(_a);
            }).close;
        }
    };
    WithPopover.prototype.render = function () {
        return this.props.children(this.togglePopup);
    };
    return WithPopover;
}(React.PureComponent));
exports.WithPopover = WithPopover;
