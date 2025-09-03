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
exports.MultiSelect = void 0;
var React = __importStar(require('react'));
var multiselect_1 = require('@superdesk/primereact/multiselect');
var classnames_1 = __importDefault(require('classnames'));
var react_id_generator_1 = __importDefault(require('react-id-generator'));
var Form_1 = require('./Form');
var SelectPreview_1 = require('./SelectPreview');
var zIndex_1 = require('../zIndex');
var MultiSelect = /** @class */ (function (_super) {
    __extends(MultiSelect, _super);
    function MultiSelect(props) {
        var _this = _super.call(this, props) || this;
        _this.htmlId = (0, react_id_generator_1.default)();
        _this.zIndex = (0, zIndex_1.getNextZIndex)();
        _this.state = {
            value: _this.props.value != null ? _this.props.value : [],
            options: [],
            invalid: _this.props.invalid ? _this.props.invalid : false,
        };
        return _this;
    }
    MultiSelect.prototype.render = function () {
        var _this = this;
        var _a;
        var classes = (0, classnames_1.default)({
            showSelectAll: this.props.showSelectAll,
            showFilter: this.props.filter,
        });
        if (this.props.preview) {
            return React.createElement(SelectPreview_1.SelectPreview, {
                kind: {mode: 'multi-select'},
                items: this.state.value,
                valueTemplate: this.props.selectedItemTemplate,
                getLabel: this.props.optionLabel,
            });
        }
        return React.createElement(
            Form_1.InputWrapper,
            {
                label: this.props.label,
                error: this.props.error,
                invalid: this.props.error != null,
                required: this.props.required,
                disabled: this.props.disabled,
                info: this.props.info,
                inlineLabel: this.props.inlineLabel,
                labelHidden: this.props.labelHidden,
                htmlId: this.htmlId,
                tabindex: this.props.tabindex,
                inputWrapper: this.props.inputWrapper,
            },
            React.createElement(multiselect_1.MultiSelect, {
                panelClassName: classes,
                value: this.props.value,
                options: this.props.options,
                onChange: function (_a) {
                    var value = _a.value;
                    return _this.props.onChange(value);
                },
                display: 'chip',
                zIndex: this.zIndex,
                filter: this.props.filter,
                appendTo: document.body,
                placeholder: this.props.placeholder,
                optionLabel: function (option) {
                    return _this.props.optionLabel(option);
                },
                emptyFilterMessage: this.props.emptyFilterMessage,
                filterPlaceholder: this.props.filterPlaceholder,
                itemTemplate: this.props.itemTemplate,
                selectedItemTemplate: this.props.selectedItemTemplate,
                maxSelectedLabels: (_a = this.props.maxSelectedLabels) !== null && _a !== void 0 ? _a : 4,
                selectedItemsLabel: this.props.selectedItemsLabel,
                ariaLabelledBy: this.htmlId + 'label',
                tabIndex: this.props.tabIndex ? this.props.tabIndex : '0',
                showClear: this.props.showClear,
                disabled: this.props.disabled,
                inputId: this.htmlId,
            }),
        );
    };
    return MultiSelect;
})(React.Component);
exports.MultiSelect = MultiSelect;
