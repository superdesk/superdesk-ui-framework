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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResizeObserverComponent = void 0;
var react_1 = __importDefault(require("react"));
var ResizeObserverComponent = /** @class */ (function (_super) {
    __extends(ResizeObserverComponent, _super);
    function ResizeObserverComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            dimensions: 'not-initialized',
        };
        return _this;
    }
    ResizeObserverComponent.prototype.componentDidMount = function () {
        var _this = this;
        this.observerInstance = new ResizeObserver(function (entries) {
            _this.setState({
                dimensions: {
                    width: Math.floor(entries[0].contentRect.width),
                },
            });
        });
        this.observerInstance.observe(this.el);
    };
    ResizeObserverComponent.prototype.componentWillUnmount = function () {
        this.observerInstance.unobserve(this.el);
    };
    ResizeObserverComponent.prototype.render = function () {
        var _this = this;
        var dimensions = this.state.dimensions;
        return (react_1.default.createElement("div", { ref: function (el) {
                _this.el = el;
            } }, dimensions === 'not-initialized' ? null : this.props.children(dimensions)));
    };
    return ResizeObserverComponent;
}(react_1.default.PureComponent));
exports.ResizeObserverComponent = ResizeObserverComponent;
