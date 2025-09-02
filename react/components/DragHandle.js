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
exports.DragHandle = void 0;
var React = __importStar(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var DragHandleDots_1 = require("./DragHandleDots");
var dotSize = 4; // Size of the single dot image (OneDot.svg) that gets repeated and forms the dotted pattern.
var DragHandle = /** @class */ (function (_super) {
    __extends(DragHandle, _super);
    function DragHandle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DragHandle.prototype.render = function () {
        var _a;
        var _b, _c;
        var classes = (0, classnames_1.default)('drag-handle-wrapper', (_a = {},
            _a["drag-handle-wrapper--boxed"] = !this.props.blank,
            _a['drag-handle-wrapper--blank'] = this.props.blank,
            _a), this.props.className);
        var calcSize = function (numberOfDots) {
            return Number(numberOfDots) * dotSize - dotSize / 2;
        };
        return (React.createElement("div", { className: classes },
            React.createElement(DragHandleDots_1.DragHandleDots, { style: { width: calcSize((_b = this.props.dotsInRow) !== null && _b !== void 0 ? _b : '2'), height: calcSize((_c = this.props.dotRows) !== null && _c !== void 0 ? _c : '4') }, color: this.props.dotColor })));
    };
    return DragHandle;
}(React.PureComponent));
exports.DragHandle = DragHandle;
