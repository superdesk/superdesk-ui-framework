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
exports.Popover = void 0;
var React = __importStar(require("react"));
var _Positioner_1 = require("./_Positioner");
var Popover = /** @class */ (function (_super) {
    __extends(Popover, _super);
    function Popover() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Popover.prototype.render = function () {
        var _this = this;
        var _a, _b;
        return (React.createElement(_Positioner_1.Positioner, { triggerSelector: this.props.triggerSelector, placement: (_a = this.props.placement) !== null && _a !== void 0 ? _a : 'auto', className: "sd-popover" },
            React.createElement("div", { className: "sd-popover__header" },
                React.createElement("h4", { className: "sd-popover__title", tabIndex: 0, id: "popoverTitle" }, this.props.title),
                ((_b = this.props.displayCloseButton) !== null && _b !== void 0 ? _b : true) && (React.createElement("button", { className: "icn-btn icn-btn--small sd-popover__close", tabIndex: 0, "aria-label": 'Close dialog', onClick: function () {
                        var el = document.querySelector(_this.props.triggerSelector);
                        if (el instanceof HTMLElement) {
                            el.click();
                        }
                    } },
                    React.createElement("i", { className: "icon-close-small" })))),
            React.createElement("div", { className: "sd-popover__content" }, this.props.children)));
    };
    return Popover;
}(React.Component));
exports.Popover = Popover;
