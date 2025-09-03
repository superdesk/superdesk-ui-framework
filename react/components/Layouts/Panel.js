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
exports.PanelTools =
    exports.PanelHeaderSlidingToolbar =
    exports.PanelFooter =
    exports.PanelContentBlock =
    exports.PanelContent =
    exports.PanelHeader =
    exports.Panel =
        void 0;
var React = __importStar(require('react'));
var IconButton_1 = require('../IconButton');
var Spinner_1 = require('../Spinner');
var classnames_1 = __importDefault(require('classnames'));
var ButtonGroup_1 = require('../ButtonGroup');
var zIndex_1 = require('../../zIndex');
var Panel = /** @class */ (function (_super) {
    __extends(Panel, _super);
    function Panel() {
        return (_super !== null && _super.apply(this, arguments)) || this;
    }
    Panel.prototype.render = function () {
        var _a, _b;
        var classes = (0, classnames_1.default)(
            'side-panel',
            ((_a = {}),
            (_a['side-panel--'.concat(this.props.side)] = this.props.side),
            (_a['side-panel--'.concat(this.props.background)] =
                this.props.background !== 'light' && this.props.background !== undefined),
            _a),
            this.props.className,
        );
        var classes2Obj =
            ((_b = {}),
            (_b['side-panel__container--'.concat(this.props.side)] = this.props.side !== null),
            (_b['panel-open'] = this.props.open === true),
            _b);
        var style = {};
        if (typeof this.props.size === 'string') {
            classes2Obj['side-panel__container--'.concat(this.props.size)] = true;
        } else if (this.props.size != null) {
            style.width = this.props.size.custom;
        }
        var classes2 = (0, classnames_1.default)('side-panel__container', classes2Obj);
        return React.createElement(
            'div',
            {
                className: classes2,
                style: style,
                'data-theme': this.props.theme ? ''.concat(this.props.theme, '-ui') : null,
                'data-test-id': this.props['data-test-id'],
            },
            React.createElement('div', {className: classes}, this.props.children),
        );
    };
    return Panel;
})(React.PureComponent);
exports.Panel = Panel;
exports.default = Panel;
var PanelHeader = /** @class */ (function (_super) {
    __extends(PanelHeader, _super);
    function PanelHeader(props) {
        var _this = _super.call(this, props) || this;
        _this.zIndex = (0, zIndex_1.getNextZIndex)();
        return _this;
    }
    PanelHeader.prototype.render = function () {
        var _a;
        var darkColors = ['blueGrey', 'blueGreyDarker'];
        var classes = (0, classnames_1.default)(
            'side-panel__header side-panel__header--border-b',
            ((_a = {}),
            (_a['side-panel__header--'.concat(this.props.color)] = this.props.color || this.props.color !== undefined),
            (_a['side-panel__header--has-close'] = this.props.onClose),
            _a),
            this.props.className,
        );
        var style = {
            zIndex: this.zIndex,
        };
        var defaultTheme = darkColors.includes(this.props.color || '') ? 'dark-ui' : null;
        return React.createElement(
            'div',
            {'data-theme': this.props.theme || defaultTheme, className: classes, style: style},
            React.createElement(
                'div',
                {className: 'side-panel__header-wrapper'},
                this.props.title != null &&
                    React.createElement(
                        'div',
                        {className: 'side-panel__header-inner'},
                        React.createElement('h3', {className: 'side-panel__heading'}, this.props.title),
                    ),
                (this.props.onClose == null && this.props.iconButtons == null) ||
                    React.createElement(
                        ButtonGroup_1.ButtonGroup,
                        {align: 'end', spaces: 'no-space', className: 'side-panel__btn-group'},
                        this.props.iconButtons != null && this.props.iconButtons,
                        this.props.onClose != null &&
                            React.createElement(IconButton_1.IconButton, {
                                icon: 'close-small',
                                ariaValue: 'Close',
                                onClick: this.props.onClose,
                            }),
                    ),
            ),
            this.props.children,
        );
    };
    return PanelHeader;
})(React.PureComponent);
exports.PanelHeader = PanelHeader;
var PanelContent = /** @class */ (function (_super) {
    __extends(PanelContent, _super);
    function PanelContent() {
        return (_super !== null && _super.apply(this, arguments)) || this;
    }
    PanelContent.prototype.render = function () {
        return React.createElement(
            'div',
            {className: 'side-panel__content'},
            this.props.loading &&
                React.createElement(
                    Spinner_1.LoadingOverlay,
                    null,
                    React.createElement(Spinner_1.Spinner, {size: 'large'}),
                ),
            this.props.empty && React.createElement(Spinner_1.LoadingOverlay, null, this.props.emptyTemplate),
            this.props.children,
        );
    };
    return PanelContent;
})(React.PureComponent);
exports.PanelContent = PanelContent;
var PanelContentBlock = /** @class */ (function (_super) {
    __extends(PanelContentBlock, _super);
    function PanelContentBlock() {
        return (_super !== null && _super.apply(this, arguments)) || this;
    }
    PanelContentBlock.prototype.render = function () {
        var _a;
        var classes = (0, classnames_1.default)(
            'side-panel__content-block',
            this.props.className,
            ((_a = {
                'side-panel__content-block--flex': this.props.flex,
            }),
            (_a['side-panel__content-block--padding-'.concat(this.props.padding)] = this.props.padding),
            _a),
        );
        return React.createElement('div', {className: classes}, this.props.children);
    };
    return PanelContentBlock;
})(React.PureComponent);
exports.PanelContentBlock = PanelContentBlock;
// ============= Panel Footer ============ //
var PanelFooter = /** @class */ (function (_super) {
    __extends(PanelFooter, _super);
    function PanelFooter() {
        return (_super !== null && _super.apply(this, arguments)) || this;
    }
    PanelFooter.prototype.render = function () {
        return React.createElement(
            'div',
            {className: 'side-panel__footer side-panel__footer--button-box'},
            this.props.children,
        );
    };
    return PanelFooter;
})(React.PureComponent);
exports.PanelFooter = PanelFooter;
var PanelHeaderSlidingToolbar = /** @class */ (function (_super) {
    __extends(PanelHeaderSlidingToolbar, _super);
    function PanelHeaderSlidingToolbar() {
        return (_super !== null && _super.apply(this, arguments)) || this;
    }
    PanelHeaderSlidingToolbar.prototype.render = function () {
        var classes = (0, classnames_1.default)('subnav__sliding-toolbar', {
            'subnav__sliding-toolbar--right': this.props.right,
        });
        return React.createElement('div', {className: classes}, this.props.children);
    };
    return PanelHeaderSlidingToolbar;
})(React.PureComponent);
exports.PanelHeaderSlidingToolbar = PanelHeaderSlidingToolbar;
var PanelTools = /** @class */ (function (_super) {
    __extends(PanelTools, _super);
    function PanelTools() {
        return (_super !== null && _super.apply(this, arguments)) || this;
    }
    PanelTools.prototype.render = function () {
        return React.createElement(
            'div',
            {className: 'side-panel__tools'},
            this.props.tools.map(function (tool) {
                return React.createElement(IconButton_1.IconButton, {
                    key: tool.title,
                    id: tool.title,
                    icon: tool.icon,
                    ariaValue: tool.ariaValue,
                    onClick: tool.onClick,
                });
            }),
        );
    };
    return PanelTools;
})(React.PureComponent);
exports.PanelTools = PanelTools;
