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
var __assign =
    (this && this.__assign) ||
    function () {
        __assign =
            Object.assign ||
            function (t) {
                for (var s, i = 1, n = arguments.length; i < n; i++) {
                    s = arguments[i];
                    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
                }
                return t;
            };
        return __assign.apply(this, arguments);
    };
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
exports.AvatarContentImage = void 0;
var React = __importStar(require('react'));
var AvatarContentImage = /** @class */ (function (_super) {
    __extends(AvatarContentImage, _super);
    function AvatarContentImage() {
        return (_super !== null && _super.apply(this, arguments)) || this;
    }
    AvatarContentImage.prototype.render = function () {
        var _a = this.props,
            imageUrl = _a.imageUrl,
            tooltipText = _a.tooltipText,
            onClick = _a.onClick;
        var maybeButtonProps =
            onClick == null
                ? {}
                : {
                      role: 'button',
                      onClick: function () {
                          return onClick();
                      },
                  };
        if (imageUrl == null) {
            return React.createElement(
                'span',
                __assign({}, maybeButtonProps, {
                    className: 'sd-avatar-content sd-avatar-content--dummy-img',
                    title: tooltipText,
                }),
                React.createElement(
                    'svg',
                    {
                        width: '200',
                        height: '200',
                        viewBox: '0 0 200 200',
                        fill: 'none',
                        xmlns: 'http://www.w3.org/2000/svg',
                        style: {display: 'block', width: '100%', height: '100%'},
                    },
                    React.createElement('circle', {cx: '100', cy: '100', r: '100', fill: 'white', fillOpacity: '0'}),
                    React.createElement('path', {
                        fillRule: 'evenodd',
                        clipRule: 'evenodd',
                        d: 'M40 153V145.384C40 141.557 41.16 137.981 43.16 135C49.14 126.057 66.24 119.711 77.14 118C82.74 117.115 90.16 116.538 100 116.538C109.84 116.538 117.26 117.115 122.86 118C133.76 119.711 150.86 126.057 156.84 135C158.84 137.981 160 141.557 160 145.384V153C150 165 130 180 100 180C70 180 50 165 40 153ZM100 30C122.08 30 140 47.2307 140 68.4614C140 89.6922 122.08 106.923 100 106.923C77.92 106.923 60 89.6922 60 68.4614C60 47.2307 77.92 30 100 30Z',
                        fill: 'var(--sd-colour-avatar-dummy)',
                        fillOpacity: '1',
                    }),
                ),
            );
        } else {
            return React.createElement(
                'span',
                __assign({}, maybeButtonProps, {className: 'sd-avatar-content', title: tooltipText}),
                React.createElement('img', {src: imageUrl}),
            );
        }
    };
    return AvatarContentImage;
})(React.PureComponent);
exports.AvatarContentImage = AvatarContentImage;
