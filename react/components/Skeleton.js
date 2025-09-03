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
exports.Skeleton = void 0;
var React = __importStar(require('react'));
var classnames_1 = __importDefault(require('classnames'));
var Skeleton = /** @class */ (function (_super) {
    __extends(Skeleton, _super);
    function Skeleton() {
        return (_super !== null && _super.apply(this, arguments)) || this;
    }
    Skeleton.prototype.skeletonStyle = function () {
        if (this.props.size) {
            return {width: this.props.size, height: this.props.size, borderRadius: this.props.borderRadius};
        } else {
            return {width: this.props.width, height: this.props.height, borderRadius: this.props.borderRadius};
        }
    };
    Skeleton.prototype.render = function () {
        var skeletonClassName = (0, classnames_1.default)(
            'p-skeleton p-component',
            {
                'p-skeleton-circle': this.props.shape === 'circle',
                'p-skeleton-none': this.props.animation === 'none',
            },
            this.props.className,
        );
        var style = this.skeletonStyle();
        return React.createElement('div', {style: style, className: skeletonClassName});
    };
    Skeleton.defaultProps = {
        shape: 'rectangle',
        size: null,
        width: '100%',
        height: '1.2rem',
        borderRadius: null,
        animation: 'wave',
        style: null,
        className: null,
    };
    return Skeleton;
})(React.Component);
exports.Skeleton = Skeleton;
