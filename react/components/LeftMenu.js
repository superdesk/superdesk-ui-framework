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
var __spreadArray =
    (this && this.__spreadArray) ||
    function (to, from, pack) {
        if (pack || arguments.length === 2)
            for (var i = 0, l = from.length, ar; i < l; i++) {
                if (ar || !(i in from)) {
                    if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                    ar[i] = from[i];
                }
            }
        return to.concat(ar || Array.prototype.slice.call(from));
    };
var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : {default: mod};
    };
Object.defineProperty(exports, '__esModule', {value: true});
exports.LeftMenu = void 0;
var React = __importStar(require('react'));
var classnames_1 = __importDefault(require('classnames'));
var react_scrollspy_1 = __importDefault(require('react-scrollspy'));
var LeftMenu = /** @class */ (function (_super) {
    __extends(LeftMenu, _super);
    function LeftMenu(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            active: _this.props.activeItemId ? _this.props.activeItemId : '',
        };
        return _this;
    }
    LeftMenu.prototype.handleClick = function (item, event) {
        var _a;
        event === null || event === void 0 ? void 0 : event.preventDefault();
        this.setState({
            active: item.id,
        });
        if (item.ref) {
            return (_a = document.getElementById(item.ref)) === null || _a === void 0
                ? void 0
                : _a.scrollIntoView({block: 'nearest', behavior: 'smooth'});
        }
        if (item.onClick) {
            return item.onClick();
        }
        this.props.onSelect(item.id, item.route ? item.route : '');
    };
    LeftMenu.prototype.componentDidMount = function () {
        var _a;
        if (this.props.scrollTo) {
            return (_a = document.getElementById(this.props.scrollTo)) === null || _a === void 0
                ? void 0
                : _a.scrollIntoView({block: 'nearest', behavior: 'smooth'});
        }
    };
    LeftMenu.prototype.render = function () {
        var _a;
        var _this = this;
        var classes = (0, classnames_1.default)(
            'sd-left-nav',
            ((_a = {
                'sd-left-nav--default': this.props.style === undefined,
            }),
            (_a['sd-left-nav--'.concat(this.props.style)] = this.props.style || this.props.style !== undefined),
            (_a['sd-left-nav--medium'] = this.props.size === undefined),
            (_a['sd-left-nav--'.concat(this.props.size)] = this.props.size || this.props.size !== undefined),
            (_a['sd-left-nav--reverse-border'] = this.props.reverseItemBorder),
            _a),
            this.props.className,
        );
        var scrollspyList = function () {
            var scrollSpyList = [];
            var scrollSpyItems = [];
            _this.props.groups.map(function (element, index) {
                scrollSpyList = __spreadArray(__spreadArray([], scrollSpyList, true), [element.label], false);
                scrollSpyItems.push(
                    React.createElement(
                        'span',
                        {className: 'sd-left-nav__group-header', key: 'group-' + index},
                        element.label,
                    ),
                );
                element.items.map(function (elementOfItem, indexOfItem) {
                    scrollSpyList = __spreadArray(
                        __spreadArray([], scrollSpyList, true),
                        [''.concat(elementOfItem.ref)],
                        false,
                    );
                    scrollSpyItems.push(
                        React.createElement(
                            'a',
                            {
                                key: 'item-' + indexOfItem,
                                onClick: function (event) {
                                    _this.handleClick(elementOfItem, event);
                                },
                                className: 'sd-left-nav__btn',
                            },
                            elementOfItem.label,
                        ),
                    );
                });
            });
            return React.createElement(
                react_scrollspy_1.default,
                {
                    offset: _this.props.offset ? _this.props.offset : -300,
                    items: scrollSpyList,
                    rootEl: _this.props.scrollSpy,
                    currentClassName: 'sd-left-nav__btn--active',
                },
                scrollSpyItems.map(function (element) {
                    return element;
                }),
            );
        };
        var defaultList = function () {
            return _this.props.groups.map(function (group, i) {
                return React.createElement(
                    React.Fragment,
                    {key: i},
                    React.createElement('span', {className: 'sd-left-nav__group-header'}, group.label),
                    group.items.map(function (item, j) {
                        return React.createElement(
                            'button',
                            {
                                key: j,
                                onClick: function (event) {
                                    _this.handleClick(item, event);
                                },
                                className:
                                    item.id === _this.state.active
                                        ? 'sd-left-nav__btn sd-left-nav__btn--active'
                                        : 'sd-left-nav__btn',
                            },
                            item.label,
                        );
                    }),
                );
            });
        };
        return React.createElement(
            'nav',
            {className: classes, 'aria-label': this.props.ariaLabel},
            this.props.scrollSpy ? scrollspyList() : defaultList(),
        );
    };
    return LeftMenu;
})(React.PureComponent);
exports.LeftMenu = LeftMenu;
