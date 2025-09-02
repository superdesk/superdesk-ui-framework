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
exports.ContentDivider = void 0;
var React = __importStar(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var ContentDivider = /** @class */ (function (_super) {
    __extends(ContentDivider, _super);
    function ContentDivider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ContentDivider.prototype.render = function () {
        var _a;
        var classes = (0, classnames_1.default)('sd-content-divider', (_a = {
                'sd-content-divider--horizontal': this.props.orientation === undefined,
                'sd-content-divider--no-border': this.props.border === false
            },
            _a["sd-content-divider--".concat(this.props.type)] = this.props.type || this.props.type !== undefined,
            _a["sd-content-divider--text-".concat(this.props.align)] = this.props.align || this.props.align !== undefined,
            _a["sd-content-divider--".concat(this.props.orientation)] = this.props.orientation || this.props.orientation !== undefined,
            _a['sd-content-divider--margin-medium'] = this.props.margin === undefined,
            _a["sd-content-divider--margin-".concat(this.props.margin)] = this.props.margin || this.props.margin !== undefined,
            _a));
        if (this.props.children) {
            return (React.createElement("div", { className: 'sd-content-divider--with-text ' + classes, role: "separator" },
                React.createElement("span", { className: "sd-content-divider__inner-text" }, this.props.children)));
        }
        else {
            return React.createElement("div", { className: classes, role: "separator" });
        }
    };
    return ContentDivider;
}(React.PureComponent));
exports.ContentDivider = ContentDivider;
