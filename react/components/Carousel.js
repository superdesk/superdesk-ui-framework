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
exports.Carousel = void 0;
var React = __importStar(require("react"));
var carousel_1 = require("@superdesk/primereact/carousel");
var Badge_1 = require("./Badge");
var Carousel = /** @class */ (function (_super) {
    __extends(Carousel, _super);
    function Carousel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Carousel.prototype.render = function () {
        var header = (React.createElement("div", { className: "sd-thumb-carousel__header" },
            this.props.title && (React.createElement(React.Fragment, null,
                React.createElement("h4", { className: "sd-thumb-carousel__heading" }, this.props.title),
                React.createElement(Badge_1.Badge, { text: '' + (this.props.imageCount || this.props.images.length), type: "light" }))),
            this.props.headerMeta && (React.createElement("div", { className: "sd-thumb-carousel__header-block--r" }, this.props.headerMeta))));
        var footer = this.props.description ? (React.createElement("div", { className: "sd-thumb-carousel__description" }, this.props.description)) : null;
        var itemTemplate = function (props) { return (React.createElement("div", { className: "sd-thumb-carousel__item" },
            React.createElement("div", { className: "sd-thumb-carousel__item-inner" },
                React.createElement("img", { src: props.src, alt: props.alt })))); };
        return (React.createElement("div", { style: { display: 'content' }, "data-theme": this.props.theme !== 'dark' ? null : 'dark-ui', className: this.props.className },
            React.createElement(carousel_1.Carousel, { id: this.props.id, value: this.props.images, numVisible: this.props.numVisible, numScroll: this.props.numScroll, responsiveOptions: this.props.responsiveOptions, itemTemplate: itemTemplate, header: header, footer: footer, indicatorsContentClassName: "sd-thumb-carousel__indicators", onPageChange: this.props.onPageChange })));
    };
    return Carousel;
}(React.PureComponent));
exports.Carousel = Carousel;
