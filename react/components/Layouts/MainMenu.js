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
Object.defineProperty(exports, '__esModule', {value: true});
exports.MainMenuFooter =
    exports.MainMenuContent =
    exports.MainMenuHeader =
    exports.MainMenuContainer =
    exports.MainMenu =
        void 0;
var React = __importStar(require('react'));
var MainMenuContainer = /** @class */ (function (_super) {
    __extends(MainMenuContainer, _super);
    function MainMenuContainer() {
        return (_super !== null && _super.apply(this, arguments)) || this;
    }
    MainMenuContainer.prototype.render = function () {
        return React.createElement(
            'div',
            {
                id: this.props.id,
                'aria-labelledby': 'main-menu_title',
                className: 'sd-main-menu__navigation',
                'data-theme': this.props.theme ? ''.concat(this.props.theme, '-ui') : null,
            },
            this.props.children,
        );
    };
    return MainMenuContainer;
})(React.PureComponent);
exports.MainMenuContainer = MainMenuContainer;
var MainMenuHeader = /** @class */ (function (_super) {
    __extends(MainMenuHeader, _super);
    function MainMenuHeader() {
        return (_super !== null && _super.apply(this, arguments)) || this;
    }
    MainMenuHeader.prototype.render = function () {
        return React.createElement(
            'div',
            {className: 'sd-main-menu__header'},
            React.createElement(
                'h3',
                {id: 'main-menu_title', className: 'sd-main-menu__title'},
                this.props.headerTitle,
            ),
        );
    };
    return MainMenuHeader;
})(React.PureComponent);
exports.MainMenuHeader = MainMenuHeader;
var MainMenuContent = /** @class */ (function (_super) {
    __extends(MainMenuContent, _super);
    function MainMenuContent() {
        return (_super !== null && _super.apply(this, arguments)) || this;
    }
    MainMenuContent.prototype.render = function () {
        return React.createElement('div', {className: 'sd-main-menu__content'}, this.props.children);
    };
    return MainMenuContent;
})(React.PureComponent);
exports.MainMenuContent = MainMenuContent;
var MainMenuFooter = /** @class */ (function (_super) {
    __extends(MainMenuFooter, _super);
    function MainMenuFooter() {
        return (_super !== null && _super.apply(this, arguments)) || this;
    }
    MainMenuFooter.prototype.render = function () {
        return React.createElement(
            'div',
            {className: 'sd-main-menu__footer'},
            this.props.poweredBy &&
                React.createElement('div', {className: 'sd-main-menu__footer-info'}, this.props.poweredBy),
            React.createElement('div', {className: 'sd-main-menu__footer-logo'}),
            this.props.footerContent &&
                React.createElement('div', {className: 'sd-main-menu__footer-content'}, this.props.children),
        );
    };
    return MainMenuFooter;
})(React.PureComponent);
exports.MainMenuFooter = MainMenuFooter;
var MainMenu = /** @class */ (function (_super) {
    __extends(MainMenu, _super);
    function MainMenu() {
        return (_super !== null && _super.apply(this, arguments)) || this;
    }
    MainMenu.prototype.render = function () {
        return React.createElement(
            MainMenuContainer,
            null,
            React.createElement(MainMenuHeader, {headerTitle: this.props.headerTitle}, this.props.header),
            React.createElement(MainMenuContent, null, this.props.children),
            this.props.footer &&
                React.createElement(
                    MainMenuFooter,
                    {footerContent: this.props.footerContent, poweredBy: this.props.poweredBy},
                    this.props.footer,
                ),
        );
    };
    return MainMenu;
})(React.PureComponent);
exports.MainMenu = MainMenu;
exports.default = MainMenu;
