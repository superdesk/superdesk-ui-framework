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
exports.SelectPreview = void 0;
var classnames_1 = __importDefault(require('classnames'));
var React = __importStar(require('react'));
var helpers_1 = require('../helpers');
var SelectPreview = /** @class */ (function (_super) {
    __extends(SelectPreview, _super);
    function SelectPreview() {
        return (_super !== null && _super.apply(this, arguments)) || this;
    }
    SelectPreview.prototype.render = function () {
        var _this = this;
        return React.createElement(
            'div',
            {className: 'tags-preview'},
            React.createElement(
                'ul',
                {className: 'tags-preview__tag-list'},
                this.props.items.map(function (item, i) {
                    var Wrapper = function (_a) {
                        var backgroundColor = _a.backgroundColor,
                            borderColor = _a.borderColor,
                            children = _a.children;
                        var classes = (0, classnames_1.default)('tags-preview__tag-item', {
                            'tags-preview__tag-item--single-select': _this.props.kind.mode === 'single-select',
                            'tags-preview__tag-item--border':
                                (_this.props.kind.mode === 'single-select' && _this.props.kind.getBorderColor) ||
                                borderColor,
                        });
                        return React.createElement(
                            'li',
                            {
                                className: classes,
                                style: (function () {
                                    if (_this.props.valueTemplate != null) {
                                        return {backgroundColor: backgroundColor, borderColor: borderColor};
                                    } else {
                                        if (
                                            _this.props.kind.mode === 'multi-select' &&
                                            _this.props.kind.getBackgroundColor != null
                                        ) {
                                            return {
                                                backgroundColor: _this.props.kind.getBackgroundColor(item),
                                            };
                                        } else if (
                                            _this.props.kind.mode === 'single-select' &&
                                            _this.props.kind.getBorderColor != null
                                        ) {
                                            return {
                                                borderLeftColor: _this.props.kind.getBorderColor(item),
                                            };
                                        } else {
                                            return undefined;
                                        }
                                    }
                                })(),
                            },
                            React.createElement(
                                'span',
                                {
                                    className: 'tags-input__helper-box',
                                    style: (function () {
                                        if (backgroundColor != null) {
                                            return {color: (0, helpers_1.getTextColor)(backgroundColor)};
                                        } else {
                                            if (
                                                _this.props.kind.mode === 'multi-select' &&
                                                _this.props.kind.getBackgroundColor != null
                                            ) {
                                                return {
                                                    color: (0, helpers_1.getTextColor)(
                                                        _this.props.kind.getBackgroundColor(item),
                                                    ),
                                                };
                                            } else {
                                                return undefined;
                                            }
                                        }
                                    })(),
                                },
                                children,
                            ),
                        );
                    };
                    return React.createElement(
                        React.Fragment,
                        {key: i},
                        _this.props.valueTemplate
                            ? _this.props.valueTemplate(item, Wrapper)
                            : React.createElement(
                                  Wrapper,
                                  null,
                                  React.createElement('span', null, _this.props.getLabel(item)),
                              ),
                    );
                }),
            ),
        );
    };
    return SelectPreview;
})(React.Component);
exports.SelectPreview = SelectPreview;
