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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var ToastMessage_1 = require("./ToastMessage");
var firstState = {
    top: [],
    bottom: [],
    'top-right': [],
    'top-left': [],
    'bottom-right': [],
    'bottom-left': [],
};
var ToastWrapper = /** @class */ (function (_super) {
    __extends(ToastWrapper, _super);
    function ToastWrapper(props) {
        var _this = _super.call(this, props) || this;
        _this.state = firstState;
        _this.notify = function (message, options) {
            var toast = _this.createToastState(message, options);
            var position = toast.position;
            var isTop = position === 'top';
            _this.setState(function (prev) {
                var _a;
                return __assign(__assign({}, prev), (_a = {}, _a[position] = isTop ? __spreadArray([toast], prev[position], true) : __spreadArray(__spreadArray([], prev[position], true), [toast], false), _a));
            });
            return { id: toast.id, position: toast.position };
        };
        _this.createToastState = function (message, options) {
            var _a;
            var id = '' + ++ToastWrapper.idCounter;
            var position = (_a = options.position) !== null && _a !== void 0 ? _a : 'top';
            return {
                id: id,
                message: message,
                icon: options.icon,
                position: position,
                duration: options.duration,
                type: options.type,
                size: options.size,
            };
        };
        _this.requestClose = function (id, position) {
            _this.setState(function (prev) {
                var _a;
                return __assign(__assign({}, prev), (_a = {}, _a[position] = prev[position].filter(function (toast) { return toast.id !== id; }), _a));
            });
        };
        _this.notify = _this.notify.bind(_this);
        return _this;
    }
    ToastWrapper.prototype.render = function () {
        var _this = this;
        return Object.keys(this.state).map(function (position) {
            var pos = position;
            var toasts = _this.state[pos];
            return (React.createElement("div", { key: position, className: 'sd-toast__container sd-toast__container--' + pos }, (pos === 'top' ? toasts : __spreadArray([], toasts, true).reverse()).map(function (toast) {
                return (React.createElement(ToastMessage_1.ToastMessage, { position: pos, type: toast.type, icon: toast.icon, closeElement: _this.requestClose, duration: toast.duration, key: toast.id, id: toast.id, message: toast.message, size: toast.size }));
            })));
        });
    };
    ToastWrapper.idCounter = 0;
    return ToastWrapper;
}(React.PureComponent));
exports.default = ToastWrapper;
