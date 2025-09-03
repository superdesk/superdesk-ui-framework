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
exports.Input = void 0;
var React = __importStar(require('react'));
var react_id_generator_1 = __importDefault(require('react-id-generator'));
var InputWrapper_1 = require('./Form/InputWrapper');
var Input = /** @class */ (function (_super) {
    __extends(Input, _super);
    function Input(props) {
        var _this = _super.call(this, props) || this;
        _this.htmlId = (0, react_id_generator_1.default)();
        _this.handleChange = _this.handleChange.bind(_this);
        return _this;
    }
    Input.prototype.handleChange = function (event) {
        if (this.props.type === 'number') {
            this.props.onChange(Number(event.target.value));
        } else {
            this.props.onChange(event.target.value);
        }
    };
    Input.prototype.render = function () {
        var _a, _b;
        if (this.props.preview) {
            return React.createElement('div', null, React.createElement('span', null, this.props.value));
        }
        return React.createElement(
            InputWrapper_1.InputWrapper,
            {
                label: this.props.label,
                required: this.props.required,
                disabled: this.props.disabled,
                value: this.props.value,
                error: this.props.error,
                invalid: this.props.error != null,
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
                inputWrapper: this.props.inputWrapper,
            },
            React.createElement('input', {
                className: 'sd-input__input',
                type: (_b = this.props.type) !== null && _b !== void 0 ? _b : 'text',
                id: this.htmlId,
                value: this.props.value,
                'aria-describedby': this.htmlId + 'label',
                tabIndex: this.props.tabindex,
                onChange: this.handleChange,
                placeholder: this.props.placeholder,
                disabled: this.props.disabled,
                'data-test-id': this.props['data-test-id'],
            }),
        );
    };
    return Input;
})(React.Component);
exports.Input = Input;
