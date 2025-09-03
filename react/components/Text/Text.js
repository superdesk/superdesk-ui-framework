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
exports.Text = void 0;
var React = __importStar(require('react'));
var classnames_1 = __importDefault(require('classnames'));
var Text = /** @class */ (function (_super) {
    __extends(Text, _super);
    function Text() {
        return (_super !== null && _super.apply(this, arguments)) || this;
    }
    Text.prototype.render = function () {
        var _a;
        var classes = (0, classnames_1.default)(
            'sd-text',
            ((_a = {
                'sd-text--italic': this.props.style === 'italic',
                'sd-text--normal': this.props.weight === undefined,
            }),
            (_a['sd-text--'.concat(this.props.weight)] = this.props.weight || this.props.weight !== undefined),
            (_a['sd-text-align--left'] = this.props.align === undefined),
            (_a['sd-text-align--'.concat(this.props.align)] = this.props.align && this.props.align !== 'start'),
            (_a['sd-font-size--'.concat(this.props.size)] = this.props.size && this.props.size !== 'small'),
            (_a['sd-text--sans'] = this.props.fontStyle === undefined),
            (_a['sd-text--'.concat(this.props.fontStyle)] = this.props.fontStyle && this.props.fontStyle !== 'sans'),
            (_a[''] = this.props.color === undefined),
            (_a['sd-text-color--'.concat(this.props.color)] = this.props.color && this.props.color !== 'normal'),
            _a),
            this.props.className,
        );
        var styles = {};
        if (this.props.noMargin === true) {
            styles.margin = 0;
        }
        return React.createElement('p', {className: classes, style: styles}, this.props.children);
    };
    return Text;
})(React.PureComponent);
exports.Text = Text;
