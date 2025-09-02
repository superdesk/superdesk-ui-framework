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
exports.DropZone = void 0;
var React = __importStar(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var Icon_1 = require("./Icon");
var DropZone = /** @class */ (function (_super) {
    __extends(DropZone, _super);
    function DropZone(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            dragClass: false,
            dropClass: false,
        };
        _this.drop = _this.drop.bind(_this);
        _this.dragOver = _this.dragOver.bind(_this);
        _this.dragEnter = _this.dragEnter.bind(_this);
        _this.dragLeave = _this.dragLeave.bind(_this);
        return _this;
    }
    DropZone.prototype.drop = function (event) {
        event.preventDefault();
        this.setState({ dropClass: true, dragClass: false });
        // var data = event.dataTransfer.getData("Text");
    };
    DropZone.prototype.dragOver = function (event) {
        event.preventDefault();
        this.setState({ dragClass: true });
    };
    DropZone.prototype.dragEnter = function (event) {
        event.preventDefault();
    };
    DropZone.prototype.dragLeave = function (event) {
        event.preventDefault();
        this.setState({ dragClass: false });
    };
    DropZone.prototype.render = function () {
        var _a;
        var _this = this;
        var classes = (0, classnames_1.default)('sd-dropzone__drop-target', (_a = {
                'sd-dropzone__drop-target--ondragover': this.state.dragClass,
                'sd-dropzone__drop-target--ondrop': this.state.dropClass
            },
            _a["sd-dropzone__drop-target--".concat(this.props.type)] = this.props.type,
            _a), this.props.className);
        return (React.createElement("div", { className: classes, onDragLeave: function (event) { return _this.dragLeave(event); }, onDragEnter: function (event) { return _this.dragEnter(event); }, onDragOver: function (event) { return _this.dragOver(event); }, onDrop: function (event) { return _this.drop(event); }, onDragStart: function () { return false; }, onDragEnd: function () { return false; } },
            React.createElement("div", { className: "sd-dropzone__target-border" }),
            React.createElement("input", { type: "file", className: "sd-dropzone__input" }),
            this.props.icon ? (React.createElement("figure", { className: "sd-dropzone__icon", "aria-hidden": "true" },
                React.createElement(Icon_1.Icon, { name: "upload-alt", size: "big" }))) : null,
            this.props.heading ? React.createElement("h4", { className: "sd-dropzone__heading" }, this.props.heading) : null,
            React.createElement("p", { className: "sd-dropzone__description" }, this.props.text)));
    };
    return DropZone;
}(React.PureComponent));
exports.DropZone = DropZone;
