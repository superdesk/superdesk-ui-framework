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
exports.TreeSelectPill = void 0;
var classnames_1 = __importDefault(require('classnames'));
var React = __importStar(require('react'));
var DragHandle_1 = require('../DragHandle');
var Icon_1 = require('../Icon');
var helpers_1 = require('../../helpers');
var TreeSelectPill = /** @class */ (function (_super) {
    __extends(TreeSelectPill, _super);
    function TreeSelectPill() {
        return (_super !== null && _super.apply(this, arguments)) || this;
    }
    TreeSelectPill.prototype.render = function () {
        var _this = this;
        var classes = (0, classnames_1.default)('tags-input__tag-item tags-input__tag-item--multi-select', {
            'tags-input__tag-item--readonly': this.props.readOnly,
            'tags-input__tag-item--draggable': this.props.draggable,
        });
        return React.createElement(
            'li',
            {
                className: classes,
                style: this.props.valueTemplate
                    ? {backgroundColor: this.props.backgroundColor}
                    : this.props.getBackgroundColor && {
                          backgroundColor: this.props.getBackgroundColor(this.props.item),
                      },
                'data-test-id': 'item',
            },
            this.props.draggable &&
                React.createElement(DragHandle_1.DragHandle, {blank: true, dotsInRow: '3', dotRows: '4'}),
            React.createElement(
                'span',
                {
                    className: 'tags-input__helper-box',
                    style: {
                        color: this.props.backgroundColor
                            ? (0, helpers_1.getTextColor)(this.props.backgroundColor)
                            : this.props.getBackgroundColor &&
                              (0, helpers_1.getTextColor)(this.props.getBackgroundColor(this.props.item)),
                    },
                },
                this.props.children,
                !this.props.readOnly &&
                    React.createElement(
                        'button',
                        {
                            className: 'tags-input__remove-button',
                            'data-test-id': 'remove',
                            onClick: function () {
                                return !_this.props.readOnly && !_this.props.disabled && _this.props.onRemove();
                            },
                        },
                        React.createElement(Icon_1.Icon, {name: 'close-small'}),
                    ),
            ),
        );
    };
    return TreeSelectPill;
})(React.Component);
exports.TreeSelectPill = TreeSelectPill;
