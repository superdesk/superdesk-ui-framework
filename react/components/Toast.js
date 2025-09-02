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
exports.toasted = void 0;
var React = __importStar(require("react"));
var ReactDOM = __importStar(require("react-dom"));
var ToastWrapper_1 = __importDefault(require("./ToastWrapper"));
var TOAST_ID = 'react-toast';
var Toasted = /** @class */ (function () {
    function Toasted() {
        this.componentRef = null;
    }
    Toasted.prototype.setup = function () {
        var _this = this;
        if (this.componentRef != null) {
            return;
        }
        var element = null;
        var existingElement = document.getElementById(TOAST_ID);
        if (existingElement) {
            element = existingElement;
        }
        else {
            var el = document.createElement('div');
            el.id = TOAST_ID;
            el.className = 'sd-toast__container sd-toast__container--top';
            document.body.appendChild(el);
            element = el;
        }
        ReactDOM.render(React.createElement(ToastWrapper_1.default, { ref: function (ref) {
                _this.componentRef = ref;
            } }), element);
    };
    Toasted.prototype.notify = function (message, options) {
        this.setup();
        if (this.componentRef != null) {
            return this.componentRef.notify(message, options);
        }
        return null;
    };
    Toasted.prototype.close = function (messageId) {
        if (this.componentRef != null) {
            this.componentRef.requestClose(messageId.id, messageId.position);
        }
    };
    return Toasted;
}());
exports.toasted = new Toasted();
