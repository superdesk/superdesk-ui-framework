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
exports.SimpleListItem = exports.SimpleList = void 0;
var React = __importStar(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var SimpleListItem = /** @class */ (function (_super) {
    __extends(SimpleListItem, _super);
    function SimpleListItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SimpleListItem.prototype.render = function () {
        var _a;
        var classes = (0, classnames_1.default)('simple-list__item', (_a = {
                'simple-list__item--stacked': this.props.stacked,
                'simple-list__item--justify-flex-start': this.props.justify === undefined
            },
            _a["simple-list__item--justify-".concat(this.props.justify)] = this.props.justify || this.props.justify !== undefined,
            _a["simple-list__item--gap-".concat(this.props.gap)] = this.props.gap || this.props.gap !== undefined,
            _a));
        return (React.createElement("li", { className: classes, id: this.props.id || undefined }, this.props.children));
    };
    return SimpleListItem;
}(React.PureComponent));
exports.SimpleListItem = SimpleListItem;
var SimpleList = /** @class */ (function (_super) {
    __extends(SimpleList, _super);
    function SimpleList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SimpleList.prototype.render = function () {
        var _a;
        var classes = (0, classnames_1.default)('simple-list', (_a = {
                'simple-list--compact': this.props.density === undefined,
                'simple-list--dotted': this.props.border === true
            },
            _a["simple-list--".concat(this.props.density)] = this.props.density || this.props.density !== undefined,
            _a[''] = this.props.width === undefined,
            _a["simple-list--fixedW-".concat(this.props.width)] = this.props.width || this.props.width !== undefined,
            _a), this.props.className);
        return (React.createElement("ul", { className: classes, id: this.props.id || undefined }, this.props.children));
    };
    return SimpleList;
}(React.PureComponent));
exports.SimpleList = SimpleList;
