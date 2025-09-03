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
exports.RadioButtonGroup = void 0;
var React = __importStar(require('react'));
var classnames_1 = __importDefault(require('classnames'));
var react_id_generator_1 = __importDefault(require('react-id-generator'));
var FormLabel_1 = require('./Form/FormLabel');
var RadioButtonGroup = /** @class */ (function (_super) {
    __extends(RadioButtonGroup, _super);
    function RadioButtonGroup(props) {
        var _this = _super.call(this, props) || this;
        _this.htmlId = (0, react_id_generator_1.default)();
        _this.handleChange = _this.handleChange.bind(_this);
        return _this;
    }
    RadioButtonGroup.prototype.handleChange = function (item) {
        if (this.props.disabled !== true && item.disabled !== true) {
            this.props.onChange(item.value);
        }
    };
    RadioButtonGroup.prototype.render = function () {
        var _a;
        var _this = this;
        var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        var classes = (0, classnames_1.default)(
            'sd-check-button__group',
            ((_a = {}),
            (_a[
                'sd-check-button__group--'.concat((_b = this.props.group) === null || _b === void 0 ? void 0 : _b.align)
            ] = (_c = this.props.group) === null || _c === void 0 ? void 0 : _c.align),
            (_a['sd-check-button__group--start'] =
                !((_d = this.props.group) === null || _d === void 0 ? void 0 : _d.grid) &&
                ((_e = this.props.group) === null || _e === void 0 ? void 0 : _e.align) === undefined),
            (_a['sd-check-button__group--vertical'] =
                ((_f = this.props.group) === null || _f === void 0 ? void 0 : _f.orientation) === 'vertical'),
            (_a['sd-check-button__group--grid'] = (_g = this.props.group) === null || _g === void 0 ? void 0 : _g.grid),
            (_a['sd-check-button__group--padded'] =
                ((_h = this.props.group) === null || _h === void 0 ? void 0 : _h.padded) === true),
            _a),
        );
        var selectedOption =
            this.props.value == null
                ? undefined
                : this.props.options.find(function (_a) {
                      var value = _a.value;
                      return value === _this.props.value;
                  });
        return React.createElement(
            React.Fragment,
            null,
            !((_j = this.props.group) === null || _j === void 0 ? void 0 : _j.groupLabel)
                ? React.createElement(
                      'div',
                      {
                          role: 'radiogroup',
                          className: classes,
                          'aria-labelledby':
                              (_k = this.props.group) === null || _k === void 0 ? void 0 : _k.groupLabelledBy,
                          'data-test-id': this.props['data-test-id'],
                          'data-test-value': selectedOption == null ? undefined : selectedOption.label,
                      },
                      this.props.options.map(function (item, index) {
                          return React.createElement(
                              'span',
                              {
                                  className: 'sd-check-button sd-check-button--native',
                                  key: index,
                                  tabIndex: _this.props.tabindex === undefined ? undefined : -1,
                              },
                              React.createElement('input', {
                                  type: 'radio',
                                  className: 'sd-check-button__input',
                                  id: _this.htmlId + index,
                                  tabIndex: _this.props.tabindex,
                                  name: _this.htmlId,
                                  onChange: function () {
                                      return _this.handleChange(item);
                                  },
                                  disabled: _this.props.disabled || item.disabled,
                                  required: _this.props.required,
                                  checked: item.value === _this.props.value,
                              }),
                              React.createElement(
                                  'label',
                                  {
                                      className: 'sd-check-button__text-label',
                                      htmlFor: _this.htmlId + index,
                                      'aria-label': item.labelHidden ? item.label : undefined,
                                      'data-test-id': 'item',
                                      'data-test-value': item.label,
                                  },
                                  item.icon
                                      ? React.createElement('i', {
                                            className: 'icon-'.concat(item.icon),
                                            'aria-hidden': 'true',
                                        })
                                      : null,
                                  !item.labelHidden || !item.icon
                                      ? React.createElement(
                                            'span',
                                            {className: 'sd-check-button__text-label-inner'},
                                            item.label,
                                        )
                                      : null,
                              ),
                          );
                      }),
                  )
                : null,
            ((_l = this.props.group) === null || _l === void 0 ? void 0 : _l.groupLabel)
                ? React.createElement(
                      'div',
                      {
                          className: 'sd-check-button__group-wrapper',
                          'data-test-id': this.props['data-test-id'],
                          'data-test-value': selectedOption == null ? undefined : selectedOption.label,
                      },
                      React.createElement(FormLabel_1.FormLabel, {
                          forId: this.htmlId + 'group',
                          text: this.props.group.groupLabel,
                      }),
                      React.createElement(
                          'div',
                          {role: 'radiogroup', id: this.htmlId + 'group', className: classes},
                          this.props.options.map(function (item, index) {
                              return React.createElement(
                                  'span',
                                  {className: 'sd-check-button sd-check-button--native', key: index, tabIndex: -1},
                                  React.createElement('input', {
                                      type: 'radio',
                                      className: 'sd-check-button__input',
                                      id: _this.htmlId + index,
                                      tabIndex: 0,
                                      name: _this.htmlId,
                                      onChange: function () {
                                          return _this.handleChange(item);
                                      },
                                      disabled: _this.props.disabled || item.disabled,
                                      required: _this.props.required,
                                      checked: item.value === _this.props.value,
                                  }),
                                  React.createElement(
                                      'label',
                                      {
                                          className: 'sd-check-button__text-label',
                                          htmlFor: _this.htmlId + index,
                                          'aria-label': item.labelHidden ? item.label : undefined,
                                      },
                                      item.icon
                                          ? React.createElement('i', {
                                                className: 'icon-'.concat(item.icon),
                                                'aria-hidden': 'true',
                                            })
                                          : null,
                                      !item.labelHidden || !item.icon
                                          ? React.createElement(
                                                'span',
                                                {className: 'sd-check-button__text-label-inner'},
                                                item.label,
                                            )
                                          : null,
                                  ),
                              );
                          }),
                      ),
                  )
                : null,
        );
    };
    return RadioButtonGroup;
})(React.Component);
exports.RadioButtonGroup = RadioButtonGroup;
