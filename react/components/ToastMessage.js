"use strict";
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
exports.ToastMessage = void 0;
var React = __importStar(require("react"));
var ToastText_1 = __importDefault(require("./ToastText"));
var classnames_1 = __importDefault(require("classnames"));
var ToastMessage = function (_a) {
    var _b;
    var id = _a.id, message = _a.message, type = _a.type, icon = _a.icon, size = _a.size, duration = _a.duration, position = _a.position, closeElement = _a.closeElement;
    var _c = React.useState(false), show = _c[0], setShow = _c[1];
    var _d = React.useState(false), enter = _d[0], setEnter = _d[1];
    var timer;
    React.useEffect(function () { return setShow(true); }, []);
    if (typeof duration === 'number') {
        React.useEffect(function () {
            timer = window.setTimeout(function () {
                close(id, position);
            }, duration);
            return function () { return clearTimeout(timer); };
        }, [enter]);
    }
    function onMouseEnter() {
        clearTimeout(timer);
    }
    function onMouseLeave() {
        setEnter(false);
    }
    function close(element, elementPosition) {
        setShow(false);
        setTimeout(function () {
            closeElement(element, elementPosition);
        }, 100);
    }
    var classes = (0, classnames_1.default)('sd-toast', (_b = {},
        _b["sd-toast--".concat(type)] = type,
        _b["sd-toast--".concat(size)] = size,
        _b['sd-toast--enter'] = !show && !enter,
        _b['sd-toast--enter-active'] = show,
        _b['sd-toast--exit'] = enter && !show,
        _b['sd-toast--exit-active'] = !show,
        _b));
    return (React.createElement("div", { className: classes, onMouseEnter: onMouseEnter, onMouseLeave: onMouseLeave, "aria-live": "assertive", "aria-atomic": "true" },
        React.createElement(ToastText_1.default, { id: id, title: message, icon: icon, onClose: function () { return close(id, position); } })));
};
exports.ToastMessage = ToastMessage;
