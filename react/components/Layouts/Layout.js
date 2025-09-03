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
exports.Layout = void 0;
var React = __importStar(require('react'));
var Layout = function (_a) {
    var header = _a.header,
        children = _a.children,
        theme = _a.theme;
    return React.createElement(
        'div',
        {className: 'sd-page-grid--test docs-page__full-width-helper', 'data-theme': theme},
        React.createElement(
            'div',
            {className: 'sd-main-menu'},
            React.createElement('div', {className: 'sd-main-menu__inner'}),
        ),
        React.createElement(
            'header',
            {className: 'sd-top-menu'},
            React.createElement(
                'a',
                {className: 'sd-top-menu__collapse-nav'},
                React.createElement('i', {className: 'icon-collapse icon--white'}),
            ),
            React.createElement('p', {className: 'sd-top-menu__header'}, header),
        ),
        React.createElement('section', {id: '1', className: 'sd-content sd-content-wrapper'}, children),
        React.createElement('footer', {className: 'sd-bottom-bar'}, 'Footer'),
    );
};
exports.Layout = Layout;
