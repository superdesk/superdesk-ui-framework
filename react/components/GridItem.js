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
exports.GridItemCheckWrapper =
    exports.GridItemTopActions =
    exports.GridItemFooterActions =
    exports.GridItemFooterBlock =
    exports.GridItemSlug =
    exports.GridItemText =
    exports.GridItemTitle =
    exports.GridItemTime =
    exports.GridItemContentBlock =
    exports.GridItemFooter =
    exports.GridItemMedia =
    exports.GridItemContent =
    exports.GridItem =
        void 0;
var React = __importStar(require('react'));
var classnames_1 = __importDefault(require('classnames'));
var GridItemMedia = /** @class */ (function (_super) {
    __extends(GridItemMedia, _super);
    function GridItemMedia() {
        return (_super !== null && _super.apply(this, arguments)) || this;
    }
    GridItemMedia.prototype.render = function () {
        return React.createElement('div', {className: 'sd-grid-item__media'}, this.props.children);
    };
    return GridItemMedia;
})(React.PureComponent);
exports.GridItemMedia = GridItemMedia;
var GridItemContent = /** @class */ (function (_super) {
    __extends(GridItemContent, _super);
    function GridItemContent() {
        return (_super !== null && _super.apply(this, arguments)) || this;
    }
    GridItemContent.prototype.render = function () {
        return React.createElement('div', {className: 'sd-grid-item__content'}, this.props.children);
    };
    return GridItemContent;
})(React.PureComponent);
exports.GridItemContent = GridItemContent;
var GridItemContentBlock = /** @class */ (function (_super) {
    __extends(GridItemContentBlock, _super);
    function GridItemContentBlock() {
        return (_super !== null && _super.apply(this, arguments)) || this;
    }
    GridItemContentBlock.prototype.render = function () {
        return React.createElement('div', {className: 'sd-grid-item__content-block'}, this.props.children);
    };
    return GridItemContentBlock;
})(React.PureComponent);
exports.GridItemContentBlock = GridItemContentBlock;
var GridItemFooter = /** @class */ (function (_super) {
    __extends(GridItemFooter, _super);
    function GridItemFooter() {
        return (_super !== null && _super.apply(this, arguments)) || this;
    }
    GridItemFooter.prototype.render = function () {
        return React.createElement('div', {className: 'sd-grid-item__footer'}, this.props.children);
    };
    return GridItemFooter;
})(React.PureComponent);
exports.GridItemFooter = GridItemFooter;
var GridItemFooterBlock = /** @class */ (function (_super) {
    __extends(GridItemFooterBlock, _super);
    function GridItemFooterBlock() {
        return (_super !== null && _super.apply(this, arguments)) || this;
    }
    GridItemFooterBlock.prototype.render = function () {
        var _a;
        var classes = (0, classnames_1.default)(
            'sd-grid-item__footer-block',
            ((_a = {}), (_a['sd-grid-item__footer-block--'.concat(this.props.align)] = this.props.align), _a),
        );
        return React.createElement('div', {className: classes}, this.props.children);
    };
    GridItemFooterBlock.defaultProps = {
        align: 'left',
    };
    return GridItemFooterBlock;
})(React.PureComponent);
exports.GridItemFooterBlock = GridItemFooterBlock;
var GridItemFooterActions = /** @class */ (function (_super) {
    __extends(GridItemFooterActions, _super);
    function GridItemFooterActions() {
        return (_super !== null && _super.apply(this, arguments)) || this;
    }
    GridItemFooterActions.prototype.render = function () {
        var classes = (0, classnames_1.default)('sd-grid-item__footer-actions', {
            'sd-grid-item__footer-actions--visible': this.props.autohide === false,
        });
        return React.createElement('div', {className: classes}, this.props.children);
    };
    GridItemFooterActions.defaultProps = {
        autohide: true,
    };
    return GridItemFooterActions;
})(React.PureComponent);
exports.GridItemFooterActions = GridItemFooterActions;
var GridItemTime = /** @class */ (function (_super) {
    __extends(GridItemTime, _super);
    function GridItemTime() {
        return (_super !== null && _super.apply(this, arguments)) || this;
    }
    GridItemTime.prototype.render = function () {
        return React.createElement('time', {title: this.props.time}, this.props.time);
    };
    return GridItemTime;
})(React.PureComponent);
exports.GridItemTime = GridItemTime;
var GridItemTitle = /** @class */ (function (_super) {
    __extends(GridItemTitle, _super);
    function GridItemTitle() {
        return (_super !== null && _super.apply(this, arguments)) || this;
    }
    GridItemTitle.prototype.render = function () {
        return React.createElement('h4', {className: 'sd-grid-item__title'}, this.props.children);
    };
    return GridItemTitle;
})(React.PureComponent);
exports.GridItemTitle = GridItemTitle;
var GridItemSlug = /** @class */ (function (_super) {
    __extends(GridItemSlug, _super);
    function GridItemSlug() {
        return (_super !== null && _super.apply(this, arguments)) || this;
    }
    GridItemSlug.prototype.render = function () {
        return React.createElement('span', {className: 'sd-grid-item__slugline'}, this.props.children);
    };
    return GridItemSlug;
})(React.PureComponent);
exports.GridItemSlug = GridItemSlug;
var GridItemText = /** @class */ (function (_super) {
    __extends(GridItemText, _super);
    function GridItemText() {
        return (_super !== null && _super.apply(this, arguments)) || this;
    }
    GridItemText.prototype.render = function () {
        return React.createElement('p', {className: 'sd-grid-item--element-grow'}, this.props.children);
    };
    return GridItemText;
})(React.PureComponent);
exports.GridItemText = GridItemText;
var GridItemTopActions = /** @class */ (function (_super) {
    __extends(GridItemTopActions, _super);
    function GridItemTopActions() {
        return (_super !== null && _super.apply(this, arguments)) || this;
    }
    GridItemTopActions.prototype.render = function () {
        return React.createElement('div', {className: 'sd-grid-item__top-actions'}, this.props.children);
    };
    return GridItemTopActions;
})(React.PureComponent);
exports.GridItemTopActions = GridItemTopActions;
var GridItemCheckWrapper = /** @class */ (function (_super) {
    __extends(GridItemCheckWrapper, _super);
    function GridItemCheckWrapper() {
        return (_super !== null && _super.apply(this, arguments)) || this;
    }
    GridItemCheckWrapper.prototype.render = function () {
        return React.createElement('span', {className: 'sd-grid-item__checkbox'}, this.props.children);
    };
    return GridItemCheckWrapper;
})(React.PureComponent);
exports.GridItemCheckWrapper = GridItemCheckWrapper;
var GridItem = /** @class */ (function (_super) {
    __extends(GridItem, _super);
    function GridItem() {
        return (_super !== null && _super.apply(this, arguments)) || this;
    }
    GridItem.prototype.render = function () {
        var classes = (0, classnames_1.default)(
            'sd-grid-item',
            [
                'sd-grid-item__type--'.concat(this.props.itemtype),
                {
                    locked: this.props.locked,
                    'sd-grid-item--with-click': this.props.onClick,
                    fetched: this.props.fetched,
                },
            ],
            this.props.status,
        );
        return React.createElement(
            'div',
            {className: classes, onClick: this.props.onClick},
            this.props.children,
            React.createElement('div', {className: 'sd-grid-item__state-border'}),
        );
    };
    GridItem.defaultProps = {
        locked: false,
        fetched: false,
        itemtype: 'file',
        status: [],
    };
    return GridItem;
})(React.PureComponent);
exports.GridItem = GridItem;
exports.default = GridItem;
