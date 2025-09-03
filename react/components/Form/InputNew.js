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
exports.InputNew = void 0;
var React = __importStar(require('react'));
var react_id_generator_1 = __importDefault(require('react-id-generator'));
var _1 = require('.');
var InputNew = /** @class */ (function (_super) {
    __extends(InputNew, _super);
    function InputNew(props) {
        var _a, _b;
        var _this = _super.call(this, props) || this;
        _this.htmlId = (0, react_id_generator_1.default)();
        _this.state = {
            value: (_a = _this.props.value) !== null && _a !== void 0 ? _a : '',
            invalid: (_b = _this.props.invalid) !== null && _b !== void 0 ? _b : false,
        };
        return _this;
    }
    InputNew.prototype.componentDidUpdate = function (prevProps) {
        if (prevProps.value !== this.props.value) {
            this.setState({value: this.props.value});
        }
    };
    InputNew.prototype.render = function () {
        var _this = this;
        var _a;
        return React.createElement(
            _1.InputWrapper,
            {
                label: this.props.label,
                error: this.props.error,
                required: this.props.required,
                disabled: this.props.disabled,
                value: this.state.value,
                invalid: this.state.invalid,
                info: this.props.info,
                maxLength: this.props.maxLength,
                inlineLabel: this.props.inlineLabel,
                labelHidden: this.props.labelHidden,
                size: (_a = this.props.size) !== null && _a !== void 0 ? _a : 'medium',
                fullWidth: this.props.fullWidth,
                htmlId: this.htmlId,
                boxedStyle: this.props.boxedStyle,
                boxedLable: this.props.boxedLable,
                tabindex: this.props.tabindex,
            },
            React.createElement(_1.InputBase, {
                type: 'text',
                onChange: function (value) {
                    _this.setState({value: value});
                    _this.setState({
                        invalid: _this.props.maxLength ? value.length > _this.props.maxLength : false,
                    });
                    _this.props.onChange(value);
                },
                disabled: this.props.disabled,
                htmlId: this.htmlId,
                value: this.state.value,
                'aria-describedby': this.htmlId + 'label',
                tabIndex: this.props.tabindex,
                placeholder: this.props.placeholder,
            }),
        );
    };
    return InputNew;
})(React.PureComponent);
exports.InputNew = InputNew;
