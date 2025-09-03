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
exports.InputWrapper = void 0;
var React = __importStar(require('react'));
var classnames_1 = __importDefault(require('classnames'));
var InputWrapper = /** @class */ (function (_super) {
    __extends(InputWrapper, _super);
    function InputWrapper(props) {
        var _a;
        var _this = _super.call(this, props) || this;
        _this.state = {
            value: (_a = _this.props.value) !== null && _a !== void 0 ? _a : '',
        };
        return _this;
    }
    InputWrapper.prototype.render = function () {
        var _a;
        var _b, _c, _d, _e;
        if (((_b = this.props.inputWrapper) === null || _b === void 0 ? void 0 : _b.kind) === 'custom') {
            var Component = this.props.inputWrapper.component;
            return React.createElement(Component, {
                input: this.props.children,
                label: (_c = this.props.label) !== null && _c !== void 0 ? _c : '',
                'data-test-id': this.props['data-test-id'],
            });
        }
        var fullWidth = (_d = this.props.fullWidth) !== null && _d !== void 0 ? _d : true;
        var classes = (0, classnames_1.default)(
            'sd-input',
            ((_a = {
                'sd-input--inline-label': this.props.inlineLabel,
                'sd-input--required': this.props.required,
                'sd-input--disabled': this.props.disabled,
                'sd-input--full-width': fullWidth,
                'sd-input--content-width': !fullWidth,
                'sd-input--invalid': this.props.invalid,
                'sd-input--medium': this.props.size === undefined,
            }),
            (_a['sd-input--'.concat(this.props.size)] = this.props.size || this.props.size !== undefined),
            (_a['sd-input--boxed-style'] = this.props.boxedStyle),
            (_a['sd-input--boxed-label'] = this.props.boxedLable),
            _a),
        );
        var labelClasses = (0, classnames_1.default)('sd-input__label', {
            'a11y-only': this.props.labelHidden,
            'sd-input__label--boxed': this.props.boxedLable,
        });
        return React.createElement(
            'div',
            {className: classes, 'data-test-id': this.props['data-test-id']},
            React.createElement(
                'label',
                {
                    className: labelClasses,
                    htmlFor: this.props.htmlId,
                    id: this.props.htmlId + 'label',
                    tabIndex: this.props.tabindex === undefined ? undefined : -1,
                },
                this.props.label,
            ),
            React.createElement('div', {className: 'sd-input__input-container'}, this.props.children),
            this.props.maxLength &&
                React.createElement(
                    'div',
                    {className: 'sd-input__char-count'},
                    (_e = this.props.value) === null || _e === void 0 ? void 0 : _e.toString().length,
                    ' / ',
                    this.props.maxLength,
                ),
            React.createElement(
                'div',
                {className: 'sd-input__message-box'},
                this.props.info &&
                    !this.props.invalid &&
                    React.createElement('div', {className: 'sd-input__hint'}, this.props.info),
                this.props.invalid && React.createElement('div', {className: 'sd-input__message'}, this.props.error),
            ),
        );
    };
    return InputWrapper;
})(React.Component);
exports.InputWrapper = InputWrapper;
