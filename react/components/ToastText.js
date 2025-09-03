'use strict';
var __createBinding =
    (this && this.__createBinding) ||
    (Object.create
        ? function (o, m, k, k2) {
              if (k2 === undefined) k2 = k;
              var desc = Object.getOwnPropertyDescriptor(m, k);
              if (!desc || ('get' in desc ? !m.__esModule : desc.writable || desc.configurable)) {
                  desc = {
                      enumerable: true,
                      get: function () {
                          return m[k];
                      },
                  };
              }
              Object.defineProperty(o, k2, desc);
          }
        : function (o, m, k, k2) {
              if (k2 === undefined) k2 = k;
              o[k2] = m[k];
          });
var __setModuleDefault =
    (this && this.__setModuleDefault) ||
    (Object.create
        ? function (o, v) {
              Object.defineProperty(o, 'default', {enumerable: true, value: v});
          }
        : function (o, v) {
              o['default'] = v;
          });
var __importStar =
    (this && this.__importStar) ||
    (function () {
        var ownKeys = function (o) {
            ownKeys =
                Object.getOwnPropertyNames ||
                function (o) {
                    var ar = [];
                    for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
                    return ar;
                };
            return ownKeys(o);
        };
        return function (mod) {
            if (mod && mod.__esModule) return mod;
            var result = {};
            if (mod != null)
                for (var k = ownKeys(mod), i = 0; i < k.length; i++)
                    if (k[i] !== 'default') __createBinding(result, mod, k[i]);
            __setModuleDefault(result, mod);
            return result;
        };
    })();
Object.defineProperty(exports, '__esModule', {value: true});
var React = __importStar(require('react'));
var Icon_1 = require('./Icon');
var ToastText = function (_a) {
    var id = _a.id,
        title = _a.title,
        icon = _a.icon,
        onClose = _a.onClose;
    var ref = React.useRef(null);
    return React.createElement(
        React.Fragment,
        null,
        icon
            ? React.createElement('div', {className: 'sd-toast__icon'}, React.createElement(Icon_1.Icon, {name: icon}))
            : null,
        typeof title === 'string'
            ? React.createElement(
                  'span',
                  {style: {width: '100%'}, ref: ref, id: id},
                  React.createElement('div', {className: 'sd-toast__message'}, title),
              )
            : React.createElement('span', {style: {width: '100%', display: 'inherit'}, ref: ref, id: id}, title),
        onClose && React.createElement(Close, {onClose: onClose}),
    );
};
var Close = function (_a) {
    var onClose = _a.onClose;
    return React.createElement(
        'button',
        {className: 'icn-btn sd-toast__actions', type: 'button', 'aria-label': 'Close', onClick: onClose},
        React.createElement(Icon_1.Icon, {name: 'close-small'}),
    );
};
exports.default = ToastText;
