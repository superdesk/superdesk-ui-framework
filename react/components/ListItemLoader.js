'use strict';
var __extends =
    (this && this.__extends) ||
    (function () {
        var extendStatics = function (d, b) {
            extendStatics =
                Object.setPrototypeOf ||
                ({__proto__: []} instanceof Array &&
                    function (d, b) {
                        d.__proto__ = b;
                    }) ||
                function (d, b) {
                    for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
                };
            return extendStatics(d, b);
        };
        return function (d, b) {
            if (typeof b !== 'function' && b !== null)
                throw new TypeError('Class extends value ' + String(b) + ' is not a constructor or null');
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : ((__.prototype = b.prototype), new __());
        };
    })();
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
exports.ListItemLoader = void 0;
var React = __importStar(require('react'));
var Skeleton_1 = require('./Skeleton');
var ListItemLoader = /** @class */ (function (_super) {
    __extends(ListItemLoader, _super);
    function ListItemLoader() {
        return (_super !== null && _super.apply(this, arguments)) || this;
    }
    ListItemLoader.prototype.render = function () {
        return React.createElement(
            'div',
            {className: 'sd-list-item sd-shadow--z1 sd-list-item--no-hover', 'data-test-id': 'list-item-placeholder'},
            React.createElement('div', {className: 'sd-list-item__border'}),
            React.createElement(
                'div',
                {className: 'sd-list-item__column'},
                React.createElement(Skeleton_1.Skeleton, {shape: 'circle', size: '2rem'}),
            ),
            React.createElement(
                'div',
                {className: 'sd-list-item__column sd-padding-y--1'},
                React.createElement(Skeleton_1.Skeleton, {
                    shape: 'circle',
                    size: '2rem',
                    className: 'sd-margin-b--0-5',
                }),
                React.createElement(Skeleton_1.Skeleton, {shape: 'circle', size: '2rem'}),
            ),
            React.createElement(
                'div',
                {className: 'sd-list-item__column sd-list-item__column--grow sd-list-item__column--no-border'},
                React.createElement(
                    'div',
                    {className: 'sd-list-item__row sd-padding-b--0-5'},
                    React.createElement(Skeleton_1.Skeleton, {borderRadius: '16px'}),
                    React.createElement(Skeleton_1.Skeleton, {
                        width: '10rem',
                        borderRadius: '16px',
                        className: 'sd-margin-l--0-5',
                    }),
                ),
                React.createElement(
                    'div',
                    {className: 'sd-list-item__row'},
                    React.createElement(Skeleton_1.Skeleton, {width: '8rem', borderRadius: '16px'}),
                    React.createElement(Skeleton_1.Skeleton, {
                        width: '8rem',
                        borderRadius: '16px',
                        className: 'sd-margin-l--0-5',
                    }),
                    React.createElement(Skeleton_1.Skeleton, {
                        width: '8rem',
                        borderRadius: '16px',
                        className: 'sd-margin-l--0-5',
                    }),
                ),
            ),
        );
    };
    return ListItemLoader;
})(React.Component);
exports.ListItemLoader = ListItemLoader;
