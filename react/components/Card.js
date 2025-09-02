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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.Card = void 0;
var React = __importStar(require("react"));
var Card = /** @class */ (function (_super) {
    __extends(Card, _super);
    function Card() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Card.prototype.render = function () {
        var style = {
            width: '100%',
            background: 'var(--sd-item__main-Bg)',
            borderRadius: 'var(--b-radius--medium)',
            boxShadow: 'var(--sd-shadow--z2)',
        };
        if (this.props.paddingBase != null) {
            style.padding = "calc( ".concat(this.props.paddingBase, " * var(--base-increment))");
        }
        if (this.props.paddingBlock != null) {
            style.paddingBlock = this.props.paddingBlock;
        }
        if (this.props.paddingBlockStart != null) {
            style.paddingBlockStart = this.props.paddingBlockStart;
        }
        if (this.props.paddingBlockEnd != null) {
            style.paddingBlockEnd = this.props.paddingBlockEnd;
        }
        if (this.props.paddingInline != null) {
            style.paddingInline = this.props.paddingInline;
        }
        if (this.props.paddingInlineStart != null) {
            style.paddingInlineStart = this.props.paddingInlineStart;
        }
        if (this.props.paddingInlineEnd != null) {
            style.paddingInlineEnd = this.props.paddingInlineEnd;
        }
        return (React.createElement("div", { style: __assign(__assign({}, style), this.props.style), "data-test-id": this.props['data-test-id'] }, this.props.children));
    };
    return Card;
}(React.PureComponent));
exports.Card = Card;
