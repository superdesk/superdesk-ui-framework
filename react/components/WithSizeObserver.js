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
exports.WithSizeObserver = void 0;
var React = __importStar(require("react"));
/**
 * Higher order component for dynamically retrieving dimensions of any element.
 * It uses `ResizeObserver` to listen for updates and re-render children efficiently.
 */
var WithSizeObserver = /** @class */ (function (_super) {
    __extends(WithSizeObserver, _super);
    function WithSizeObserver(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            dimensions: 'not-initialized',
        };
        _this.el = null;
        return _this;
    }
    WithSizeObserver.prototype.componentDidMount = function () {
        var _this = this;
        this.observerInstance = new ResizeObserver(function (entries) {
            _this.setState({
                dimensions: {
                    width: Math.floor(entries[0].contentRect.width),
                    height: Math.floor(entries[0].contentRect.height),
                },
            });
        });
        if (this.el != null) {
            this.observerInstance.observe(this.el);
        }
    };
    WithSizeObserver.prototype.componentWillUnmount = function () {
        if (this.observerInstance != null && this.el != null) {
            this.observerInstance.unobserve(this.el);
        }
    };
    WithSizeObserver.prototype.render = function () {
        var _this = this;
        var dimensions = this.state.dimensions;
        return (React.createElement("div", { ref: function (el) {
                _this.el = el;
            }, style: __assign({ position: 'relative', width: '100%', height: '100%' }, this.props.style) },
            React.createElement("div", { style: { position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' } }, dimensions === 'not-initialized' ? null : this.props.children(dimensions))));
    };
    return WithSizeObserver;
}(React.PureComponent));
exports.WithSizeObserver = WithSizeObserver;
