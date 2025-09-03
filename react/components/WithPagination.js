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
Object.defineProperty(exports, '__esModule', {value: true});
exports.WithPagination = void 0;
exports.getPagination = getPagination;
var React = __importStar(require('react'));
var Icon_1 = require('../components/Icon');
function getPagination(currentPage, totalPages) {
    if (currentPage <= 0 || totalPages <= 0 || currentPage > totalPages) {
        return [];
    }
    var basePages = [currentPage - 2, currentPage - 1, currentPage, currentPage + 1, currentPage + 2].filter(
        function (page) {
            return page >= 1 && page <= totalPages;
        },
    );
    if (!basePages.includes(1)) {
        // include first and maybe dots
        var firstInCurrentList = basePages[0];
        if (firstInCurrentList !== 1) {
            basePages = __spreadArray(['dots'], basePages, true);
        }
        basePages = __spreadArray([1], basePages, true);
    }
    if (!basePages.includes(totalPages)) {
        // include last and maybe dots
        var lastInCurrentList = basePages[basePages.length - 1];
        if (lastInCurrentList !== totalPages - 1) {
            // add dots if we're skipping some numbers
            basePages = basePages.concat('dots');
        }
        basePages = __spreadArray(__spreadArray([], basePages, true), [totalPages], false);
    }
    return basePages;
}
function getScrollParent(element) {
    var _a;
    if (element == null) {
        return null;
    }
    var parentElement = element;
    var overflowY = window.getComputedStyle(parentElement).overflowY;
    var hasScrollbar = overflowY === 'auto' || overflowY === 'scroll';
    while (parentElement !== null && !hasScrollbar) {
        parentElement = (_a = parentElement.parentElement) !== null && _a !== void 0 ? _a : null;
    }
    return parentElement;
}
var WithPagination = /** @class */ (function (_super) {
    __extends(WithPagination, _super);
    function WithPagination(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            currentPage: 1,
            items: null,
        };
        _this.switchPage = _this.switchPage.bind(_this);
        _this.getPageSize = _this.getPageSize.bind(_this);
        _this.pageCount = 0;
        _this.abortController = new window.AbortController(); // window. needed for unit tests
        _this.ref = null;
        _this.inProgress = false;
        return _this;
    }
    WithPagination.prototype.getPageSize = function () {
        var _a;
        return (_a = this.props.pageSize) !== null && _a !== void 0 ? _a : 100;
    };
    WithPagination.prototype.switchPage = function (page) {
        var _this = this;
        if (this.inProgress) {
            this.abortController.abort();
        }
        this.inProgress = true;
        this.props.getItems(page, this.getPageSize(), this.abortController.signal).then(function (res) {
            _this.inProgress = false;
            _this.setState({items: res.items, currentPage: page}, function () {
                var _a;
                var scrollableEl = getScrollParent(_this.ref);
                var diff =
                    scrollableEl != null &&
                    ((_a = _this.ref) === null || _a === void 0 ? void 0 : _a.scrollHeight) != null
                        ? scrollableEl.offsetHeight - _this.ref.scrollHeight
                        : null;
                if (scrollableEl != null) {
                    scrollableEl.scrollTop = diff != null ? diff : 0;
                }
            });
        });
    };
    WithPagination.prototype.componentDidMount = function () {
        var _this = this;
        this.props.getItems(1, this.getPageSize(), this.abortController.signal).then(function (res) {
            _this.pageCount = Math.ceil(res.itemCount / _this.getPageSize());
            _this.setState({items: res.items});
        });
    };
    WithPagination.prototype.render = function () {
        var _this = this;
        if (this.state.items == null) {
            return null;
        }
        var pageElements = getPagination(this.state.currentPage, this.pageCount).map(function (el, i) {
            if (el === 'dots') {
                return React.createElement(
                    'span',
                    {'data-test-id': 'more-pages', className: 'sd-pagination__item sd-pagination__item--more'},
                    '...',
                );
            } else {
                return React.createElement(
                    'button',
                    {
                        'data-test-id': 'page-button-'.concat(i),
                        className:
                            _this.state.currentPage === el
                                ? 'sd-pagination__item sd-pagination__item--active'
                                : 'sd-pagination__item',
                        onClick: function () {
                            return _this.switchPage(el);
                        },
                    },
                    el,
                );
            }
        });
        pageElements.unshift(
            React.createElement(
                React.Fragment,
                null,
                React.createElement(
                    'button',
                    {
                        'data-test-id': 'btn-1',
                        className: 'sd-pagination__item sd-pagination__item--start',
                        disabled: this.state.currentPage === 1,
                        onClick: function () {
                            return _this.switchPage(1);
                        },
                    },
                    React.createElement(Icon_1.Icon, {name: 'backward-thin'}),
                ),
                React.createElement(
                    'button',
                    {
                        'data-test-id': 'btn-2',
                        className: 'sd-pagination__item sd-pagination__item--start',
                        disabled: this.state.currentPage <= 1,
                        onClick: function () {
                            return _this.switchPage(_this.state.currentPage - 1);
                        },
                    },
                    React.createElement(Icon_1.Icon, {name: 'chevron-left-thin'}),
                ),
            ),
        );
        pageElements.push(
            React.createElement(
                React.Fragment,
                null,
                React.createElement(
                    'button',
                    {
                        'data-test-id': 'btn-3',
                        className: 'sd-pagination__item sd-pagination__item--forward',
                        onClick: function () {
                            return _this.switchPage(_this.state.currentPage + 1);
                        },
                        disabled: this.state.currentPage === this.pageCount,
                    },
                    React.createElement(Icon_1.Icon, {name: 'chevron-right-thin'}),
                ),
                React.createElement(
                    'button',
                    {
                        'data-test-id': 'btn-4',
                        className: 'sd-pagination__item sd-pagination__item--end',
                        onClick: function () {
                            return _this.switchPage(_this.pageCount);
                        },
                        disabled: this.state.currentPage === this.pageCount,
                    },
                    React.createElement(Icon_1.Icon, {name: 'forward-thin'}),
                ),
            ),
        );
        var StyledPagination = function () {
            return React.createElement(
                'div',
                {
                    style: {
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                    },
                },
                pageElements,
            );
        };
        return React.createElement(
            'div',
            {
                style: {
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                },
                ref: function (element) {
                    _this.ref = element;
                },
            },
            this.pageCount > 1
                ? React.createElement(
                      React.Fragment,
                      null,
                      React.createElement(StyledPagination, null),
                      this.props.children(this.state.items),
                      React.createElement(StyledPagination, null),
                  )
                : this.props.children(this.state.items),
        );
    };
    return WithPagination;
})(React.PureComponent);
exports.WithPagination = WithPagination;
