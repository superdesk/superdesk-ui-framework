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
exports.Modal = void 0;
var React = __importStar(require('react'));
var dialog_1 = require('@superdesk/primereact/dialog');
var classnames_1 = __importDefault(require('classnames'));
var lodash_1 = require('lodash');
var zIndex_1 = require('./../zIndex');
var Modal = /** @class */ (function (_super) {
    __extends(Modal, _super);
    function Modal() {
        var _this = (_super !== null && _super.apply(this, arguments)) || this;
        _this.zIndex = (0, zIndex_1.getNextZIndex)();
        return _this;
    }
    Modal.prototype.render = function () {
        var _a;
        var _b;
        var classes = (0, classnames_1.default)(
            ((_a = {}),
            (_a['p-dialog-content--'.concat(this.props.size)] = this.props.size),
            (_a['p-dialog-content-bg--default'] = this.props.contentBg === undefined),
            (_a['p-dialog-content-bg--'.concat(this.props.contentBg)] = this.props.contentBg),
            (_a['p-dialog-content--padding-small'] = this.props.contentPadding === undefined),
            (_a['p-dialog-content--padding-'.concat(this.props.contentPadding)] = this.props.contentPadding),
            _a),
            this.props.className,
        );
        return React.createElement(
            'div',
            {style: {display: 'content'}, 'data-theme': this.props.theme !== 'dark' ? null : 'dark-ui'},
            React.createElement(
                dialog_1.Dialog,
                {
                    id: this.props.id,
                    visible: this.props.visible,
                    header: this.props.headerTemplate,
                    footer: this.props.footerTemplate,
                    closeOnEscape: this.props.closeOnEscape,
                    maximized: this.props.maximized,
                    maximizable: this.props.maximizable,
                    contentClassName: classes,
                    onShow: this.props.onShow,
                    onHide: (_b = this.props.onHide) !== null && _b !== void 0 ? _b : lodash_1.noop,
                    zIndex: this.zIndex,
                    position: this.props.position,
                    closable: this.props.onHide != null ? true : false,
                    'data-test-id': this.props['data-test-id'],
                },
                this.props.children,
            ),
        );
    };
    return Modal;
})(React.Component);
exports.Modal = Modal;
