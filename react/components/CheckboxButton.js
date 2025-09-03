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
exports.CheckboxButton = void 0;
var React = __importStar(require('react'));
var react_id_generator_1 = __importDefault(require('react-id-generator'));
var CheckboxButton = /** @class */ (function (_super) {
    __extends(CheckboxButton, _super);
    function CheckboxButton(props) {
        var _this = _super.call(this, props) || this;
        _this.htmlId = (0, react_id_generator_1.default)();
        _this.handleChange = _this.handleChange.bind(_this);
        return _this;
    }
    CheckboxButton.prototype.handleChange = function (event) {
        if (!this.props.disabled) {
            this.props.onChange(event.target.checked);
        }
    };
    CheckboxButton.prototype.render = function () {
        return React.createElement(
            'span',
            {
                className: 'sd-check-button sd-check-button--native',
                tabIndex: this.props.tabindex === undefined ? undefined : -1,
            },
            React.createElement('input', {
                type: 'checkbox',
                className: 'sd-check-button__input',
                id: this.htmlId,
                tabIndex: this.props.tabindex,
                checked: this.props.checked,
                onChange: this.handleChange,
                disabled: this.props.disabled,
                required: this.props.required,
            }),
            React.createElement(
                'label',
                {
                    className: 'sd-check-button__text-label',
                    htmlFor: this.htmlId,
                    'aria-label': this.props.label.hidden ? this.props.label.text : undefined,
                },
                this.props.label.icon
                    ? React.createElement('i', {
                          className: 'icon-'.concat(this.props.label.icon),
                          'aria-hidden': 'true',
                      })
                    : null,
                !this.props.label.hidden || !this.props.label.icon
                    ? React.createElement(
                          'span',
                          {className: 'sd-check-button__text-label-inner'},
                          this.props.label.text,
                      )
                    : null,
            ),
        );
    };
    return CheckboxButton;
})(React.Component);
exports.CheckboxButton = CheckboxButton;
