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
exports.Alert = void 0;
var React = __importStar(require('react'));
var classnames_1 = __importDefault(require('classnames'));
var Icon_1 = require('./Icon');
var Alert = /** @class */ (function (_super) {
    __extends(Alert, _super);
    function Alert(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            open: true,
        };
        _this.onToggle = _this.onToggle.bind(_this);
        return _this;
    }
    Alert.prototype.onToggle = function () {
        this.setState(function (state) {
            return {
                open: !state.open,
            };
        });
    };
    Alert.prototype.render = function () {
        var _a, _b;
        var classesAlert = (0, classnames_1.default)(
            'sd-alert',
            ((_a = {
                'sd-alert--hollow': this.props.style === 'hollow',
                'sd-alert--small': this.props.size === 'small',
            }),
            (_a['sd-alert--'.concat(this.props.type)] = this.props.type),
            (_a['sd-alert--'.concat(this.props.type)] = this.props.type),
            (_a['sd-alert--margin-normal'] = this.props.margin === undefined),
            (_a['sd-alert--margin-'.concat(this.props.margin)] = this.props.margin),
            (_a['sd-alert--hidden'] = !this.state.open),
            (_a['sd-alert--banner-style'] = this.props.banner),
            _a),
        );
        var classesInfoBtn = (0, classnames_1.default)(
            'sd-alert__info-btn sd-shadow--z2',
            ((_b = {}),
            (_b['sd-alert__info-btn--'.concat(this.props.type)] = this.props.type),
            (_b['sd-alert__info-btn--hidden'] = this.state.open),
            _b),
        );
        var styles = {};
        if (this.props.fullWidth) {
            styles.width = '100%';
        }
        return React.createElement(
            'div',
            {className: 'sd-alert__container', style: styles},
            React.createElement(
                'div',
                {className: classesAlert},
                this.props.icon
                    ? React.createElement(
                          'span',
                          {className: 'sd-alert__icon'},
                          React.createElement(Icon_1.Icon, {name: this.props.icon}),
                      )
                    : null,
                this.props.restoreIcon
                    ? React.createElement('button', {
                          className: 'sd-alert__close',
                          onClick: this.onToggle,
                          'aria-label': 'Close',
                      })
                    : null,
                React.createElement('span', {className: 'sd-alert__content'}, this.props.children),
            ),
            this.props.restoreIcon
                ? React.createElement(
                      'span',
                      {className: classesInfoBtn, onClick: this.onToggle},
                      React.createElement('i', {
                          className: this.props.restoreIcon === 'help' ? 'icon-help-large' : 'icon-info-large',
                      }),
                  )
                : null,
        );
    };
    return Alert;
})(React.PureComponent);
exports.Alert = Alert;
