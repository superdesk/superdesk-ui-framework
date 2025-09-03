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
var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : {default: mod};
    };
Object.defineProperty(exports, '__esModule', {value: true});
exports.AvatarWrapper = void 0;
var React = __importStar(require('react'));
var classnames_1 = __importDefault(require('classnames'));
var Icon_1 = require('../Icon');
/**
 * @deprecated use AvatarV2
 */
var AvatarWrapper = /** @class */ (function (_super) {
    __extends(AvatarWrapper, _super);
    function AvatarWrapper() {
        return (_super !== null && _super.apply(this, arguments)) || this;
    }
    AvatarWrapper.prototype.render = function () {
        var _a, _b, _c;
        var icon = this.props.icon;
        var statusDot = this.props.statusDot;
        return React.createElement(
            'span',
            {
                className: (0, classnames_1.default)('sd-avatar', {
                    'sd-avatar--x-small': this.props.size === 'x-small',
                    'sd-avatar--small': this.props.size === 'small',
                    'sd-avatar--medium': this.props.size === 'medium' || this.props.size == null,
                    'sd-avatar--large': this.props.size === 'large',
                    'sd-avatar--x-large': this.props.size === 'x-large',
                    'sd-avatar--xx-large': this.props.size === 'xx-large',
                    'sd-avatar--indicator-status--online':
                        ((_a = this.props.statusIndicator) === null || _a === void 0 ? void 0 : _a.status) === 'online',
                    'sd-avatar--indicator-status--offline':
                        ((_b = this.props.statusIndicator) === null || _b === void 0 ? void 0 : _b.status) ===
                        'offline',
                    'sd-avatar--empty-light': this.props.noAvatarPlaceholderColor === 'subtle',
                }),
                'data-test-id': this.props['data-test-id'],
                title: this.props.statusIndicator != null ? this.props.statusIndicator.tooltipText : '',
            },
            this.props.children,
            ((_c = this.props.administratorIndicator) === null || _c === void 0 ? void 0 : _c.enabled) === true
                ? React.createElement('i', {
                      className: 'icon-settings sd-avatar--indicator-admin',
                      title: this.props.administratorIndicator.tooltipText,
                  })
                : null,
            icon != null &&
                React.createElement(
                    'span',
                    {className: 'sd-avatar__icon'},
                    React.createElement(Icon_1.Icon, {name: icon.name, color: icon.color}),
                ),
            statusDot != null &&
                React.createElement('span', {
                    style: {backgroundColor: statusDot.color},
                    className: 'sd-avatar__coverage-state',
                }),
        );
    };
    return AvatarWrapper;
})(React.PureComponent);
exports.AvatarWrapper = AvatarWrapper;
