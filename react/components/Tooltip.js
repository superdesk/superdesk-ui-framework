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
var __assign =
    (this && this.__assign) ||
    function () {
        __assign =
            Object.assign ||
            function (t) {
                for (var s, i = 1, n = arguments.length; i < n; i++) {
                    s = arguments[i];
                    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
                }
                return t;
            };
        return __assign.apply(this, arguments);
    };
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
exports.Tooltip = exports.WithTooltip = void 0;
var React = __importStar(require('react'));
var react_id_generator_1 = __importDefault(require('react-id-generator'));
var tippy_js_1 = __importDefault(require('tippy.js'));
var helpers_1 = require('../helpers');
function flowToPlacement(flow) {
    switch (flow) {
        case undefined:
            return undefined;
        case 'top':
            return 'top';
        case 'right':
            return 'right';
        case 'down':
            return 'bottom';
        case 'left':
            return 'left';
        default:
            return (0, helpers_1.assertNever)(flow);
    }
}
var tooltipAttributeName = 'data-with-tooltip';
var getTooltipSelector = function (value) {
    return '['.concat(tooltipAttributeName, '=').concat(value, ']');
};
var WithTooltip = /** @class */ (function (_super) {
    __extends(WithTooltip, _super);
    function WithTooltip(props) {
        var _this = _super.call(this, props) || this;
        _this.id = (0, react_id_generator_1.default)();
        _this.instance = null;
        return _this;
    }
    WithTooltip.prototype.setupTooltip = function () {
        var _a;
        var placement = flowToPlacement((_a = this.props.flow) !== null && _a !== void 0 ? _a : 'top');
        var content = this.props.text;
        if (this.instance == null) {
            this.instance = (0, tippy_js_1.default)(getTooltipSelector(this.id), {
                placement: placement,
            })[0];
            if (this.instance == null) {
                // prevent crashing in unit tests
                return;
            }
            if (content != null) {
                this.instance.setContent(content);
            } else {
                this.instance.hide();
                this.instance.disable();
            }
        }
        var willBeEnabled = content != null;
        var isEnabled = this.instance.state.isEnabled;
        if (isEnabled && willBeEnabled) {
            this.instance.setContent(content);
        } else if (isEnabled) {
            // enabled now, but needs to be disabled
            this.instance.hide();
            this.instance.disable();
        } else if (willBeEnabled) {
            // disabled now, but needs to be enabled
            this.instance.setContent(content);
            this.instance.enable();
            this.instance.show();
        }
    };
    WithTooltip.prototype.componentDidMount = function () {
        this.setupTooltip();
    };
    WithTooltip.prototype.componentDidUpdate = function () {
        this.setupTooltip();
    };
    WithTooltip.prototype.render = function () {
        var _a;
        return this.props.children({attributes: ((_a = {}), (_a[tooltipAttributeName] = this.id), _a)});
    };
    return WithTooltip;
})(React.PureComponent);
exports.WithTooltip = WithTooltip;
var Tooltip = /** @class */ (function (_super) {
    __extends(Tooltip, _super);
    function Tooltip() {
        return (_super !== null && _super.apply(this, arguments)) || this;
    }
    Tooltip.prototype.render = function () {
        var _this = this;
        return React.createElement(WithTooltip, {text: this.props.text, flow: this.props.flow}, function (_a) {
            var attributes = _a.attributes;
            return React.createElement(
                'div',
                __assign({}, attributes, {style: {display: 'inline-flex'}}),
                _this.props.children,
            );
        });
    };
    return Tooltip;
})(React.PureComponent);
exports.Tooltip = Tooltip;
