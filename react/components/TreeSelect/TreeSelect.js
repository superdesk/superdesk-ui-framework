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
exports.TreeSelect = void 0;
var React = __importStar(require('react'));
var Icon_1 = require('../Icon');
var Loader_1 = require('../Loader');
var react_id_generator_1 = __importDefault(require('react-id-generator'));
var debounce_1 = __importDefault(require('lodash/debounce'));
var Form_1 = require('../Form');
var core_1 = require('@popperjs/core');
var lodash_1 = require('lodash');
var helpers_1 = require('../../helpers');
var SelectPreview_1 = require('../SelectPreview');
var TreeSelectPill_1 = require('./TreeSelectPill');
var TreeSelectItem_1 = require('./TreeSelectItem');
var KeyboardNavigation_1 = require('./KeyboardNavigation');
var WithPortal_1 = require('../WithPortal');
var react_beautiful_dnd_1 = require('react-beautiful-dnd');
var zIndex_1 = require('../../zIndex');
var common_1 = require('@sourcefabric/common');
var TreeSelect = /** @class */ (function (_super) {
    __extends(TreeSelect, _super);
    function TreeSelect(props) {
        var _this = _super.call(this, props) || this;
        _this.htmlId = (0, react_id_generator_1.default)();
        _this.zIndex = (0, zIndex_1.getNextZIndex)();
        _this.inputFocus = function () {
            var _a;
            (_a = _this.inputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
        };
        _this.listNavigation = function () {
            var element = document.querySelector('.suggestion-item--btn');
            element.focus();
        };
        _this.buttonFocus = function () {
            var _a;
            (_a = _this.categoryButtonRef.current) === null || _a === void 0 ? void 0 : _a.focus();
        };
        _this.onMouseDown = function (event) {
            var _a, _b;
            if (
                ((_a = _this.dropdownRef.current) === null || _a === void 0 ? void 0 : _a.contains(event.target)) !==
                    true &&
                ((_b = _this.treeSelectRef.current) === null || _b === void 0 ? void 0 : _b.contains(event.target)) !==
                    true &&
                _this.state.openDropdown
            ) {
                _this.setState({
                    openDropdown: false,
                    searchFieldValue: '',
                });
            }
        };
        _this.onKeyDown = function (e) {
            if (_this.state.openDropdown && _this.ref.current) {
                (0, KeyboardNavigation_1.keyboardNavigation)(
                    e,
                    _this.ref.current,
                    _this.categoryButtonRef.current ? _this.buttonFocus : _this.inputFocus,
                );
                if (e.key === 'Backspace' && _this.state.activeTree.length > 0) {
                    _this.backButton();
                    var lastElement = _this.state.buttonTarget.pop();
                    if (lastElement != null) {
                        var className = (0, TreeSelectItem_1.getPrefixedItemId)(lastElement);
                        var element = document.getElementsByClassName(className)[0];
                        element.focus();
                    }
                }
            }
        };
        _this.onPressEsc = function (event) {
            if (event.key === 'Escape' && _this.state.openDropdown) {
                _this.setState({
                    openDropdown: false,
                    searchFieldValue: '',
                });
            }
        };
        _this.componentDidMount = function () {
            _this.recursion(_this.state.options);
            document.addEventListener('mousedown', _this.onMouseDown);
            document.addEventListener('keydown', _this.onKeyDown);
            document.addEventListener('keydown', _this.onPressEsc);
            if (_this.props.dropdownInitiallyOpen) {
                _this.setState({openDropdown: true});
            }
        };
        _this.debounceFn = (0, debounce_1.default)(_this.handleDebounce, 500);
        _this.state = {
            value: _this.props.value ? _this.props.value : [],
            options: _this.props.getOptions ? _this.props.getOptions() : [],
            firstBranchOptions: _this.props.getOptions ? _this.props.getOptions() : [],
            searchFieldValue: '',
            activeTree: [],
            filterArr: [],
            buttonTree: [],
            buttonTarget: [],
            buttonValue: null,
            buttonMouseEvent: false,
            openDropdown: false,
            loading: false,
        };
        _this.removeClick = _this.removeClick.bind(_this);
        _this.handleMultiLevel = _this.handleMultiLevel.bind(_this);
        _this.backButton = _this.backButton.bind(_this);
        _this.handleButton = _this.handleButton.bind(_this);
        _this.handleTree = _this.handleTree.bind(_this);
        _this.filteredItem = _this.filteredItem.bind(_this);
        _this.branchButton = _this.branchButton.bind(_this);
        _this.handleDebounce = _this.handleDebounce.bind(_this);
        _this.toggleMenu = _this.toggleMenu.bind(_this);
        _this.onMouseDown = _this.onMouseDown.bind(_this);
        _this.onKeyDown = _this.onKeyDown.bind(_this);
        _this.onPressEsc = _this.onPressEsc.bind(_this);
        _this.dropdownRef = React.createRef();
        _this.ref = React.createRef();
        _this.inputRef = React.createRef();
        _this.categoryButtonRef = React.createRef();
        _this.openDropdownRef = React.createRef();
        _this.treeSelectRef = React.createRef();
        _this.popperInstance = null;
        _this.onDragEnd = _this.onDragEnd.bind(_this);
        _this.changesFromOutside = false;
        return _this;
    }
    TreeSelect.prototype.componentWillUnmount = function () {
        document.removeEventListener('mousedown', this.onMouseDown);
        document.removeEventListener('keydown', this.onKeyDown);
        document.addEventListener('keydown', this.onPressEsc);
    };
    TreeSelect.prototype.componentDidUpdate = function (prevProps, prevState) {
        var _a, _b;
        if (!(0, lodash_1.isEqual)(prevState.value, this.state.value)) {
            if (this.changesFromOutside) {
                this.changesFromOutside = false;
            } else {
                this.props.onChange(this.state.value);
            }
        } else if (
            !(0, lodash_1.isEqual)(prevProps.value, this.props.value) &&
            !(0, lodash_1.isEqual)(this.props.value, this.state.value)
        ) {
            this.changesFromOutside = true;
            this.setState({
                value: (_a = this.props.value) !== null && _a !== void 0 ? _a : [],
            });
        }
        if (prevState.openDropdown !== this.state.openDropdown) {
            this.toggleMenu();
        }
        if (this.props.kind === 'synchronous') {
            if (
                prevState.activeTree !== this.state.activeTree ||
                prevState.filterArr !== this.state.filterArr ||
                prevState.options !== this.state.options
            ) {
                (_b = this.popperInstance) === null || _b === void 0 ? void 0 : _b.update();
            }
        }
    };
    TreeSelect.prototype.toggleMenu = function () {
        var _this = this;
        var _a, _b;
        if (this.state.openDropdown) {
            if (this.treeSelectRef.current && this.dropdownRef.current) {
                this.popperInstance = (0, core_1.createPopper)(this.treeSelectRef.current, this.dropdownRef.current, {
                    placement: 'bottom-start',
                });
            }
            (_a = this.inputRef.current) === null || _a === void 0
                ? void 0
                : _a.addEventListener('keydown', function (e) {
                      if (e.key === 'ArrowDown') {
                          e.preventDefault();
                          e.stopPropagation();
                          if (_this.categoryButtonRef.current) {
                              _this.buttonFocus();
                          } else {
                              setTimeout(function () {
                                  _this.listNavigation();
                              });
                          }
                      }
                  });
            if (this.inputRef.current) {
                this.inputFocus();
            } else {
                var element = document.querySelector('.suggestion-item--btn');
                element.focus();
            }
        } else {
            (_b = this.openDropdownRef.current) === null || _b === void 0 ? void 0 : _b.focus();
        }
    };
    TreeSelect.prototype.removeClick = function (i) {
        this.setState({
            value: this.state.value.filter(function (_item, index) {
                return index !== i;
            }),
        });
    };
    TreeSelect.prototype.handleMultiLevel = function (item) {
        if (item.children) {
            this.setState({
                activeTree: __spreadArray(__spreadArray([], this.state.activeTree, true), [this.state.options], false),
                options: item.children,
            });
        }
    };
    TreeSelect.prototype.handleButton = function (item) {
        var buttonTreeNext = this.state.buttonTree;
        if (this.state.buttonValue != null) {
            buttonTreeNext = buttonTreeNext.concat(this.state.buttonValue);
        }
        this.setState({
            buttonTree: buttonTreeNext,
            buttonValue: item,
        });
    };
    TreeSelect.prototype.handleValue = function (event, item) {
        var _this = this;
        if (this.props.allowMultiple) {
            var checkItem = this.state.value.find(function (valueItem) {
                return _this.props.getId(valueItem) === _this.props.getId(item.value);
            });
            if (!checkItem) {
                this.setState({value: __spreadArray(__spreadArray([], this.state.value, true), [item.value], false)});
            }
            if (!event.ctrlKey) {
                if (this.props.getOptions) {
                    this.setState({
                        options: this.state.firstBranchOptions,
                        activeTree: [],
                        buttonTarget: [],
                        openDropdown: false,
                    });
                } else {
                    this.setState({activeTree: [], buttonTarget: [], openDropdown: false});
                }
            }
            this.setState({buttonMouseEvent: false});
        } else {
            var checkItem = this.state.value.find(function (valueItem) {
                return _this.props.getId(valueItem) === _this.props.getId(item.value);
            });
            if (!checkItem) {
                this.setState({value: [item.value]});
            }
            if (!event.ctrlKey) {
                this.setState({
                    options: this.state.firstBranchOptions,
                    activeTree: [],
                    buttonTarget: [],
                    openDropdown: false,
                });
            }
            this.setState({buttonMouseEvent: false});
        }
    };
    TreeSelect.prototype.handleBranchValue = function (event, item) {
        var _this = this;
        if (this.props.allowMultiple) {
            var checkItem = this.state.value.find(function (valueItem) {
                return _this.props.getId(valueItem) === _this.props.getId(item.value);
            });
            if (!checkItem) {
                this.setState({value: __spreadArray(__spreadArray([], this.state.value, true), [item.value], false)});
            }
            if (!event.ctrlKey) {
                this.setState({
                    options: this.state.firstBranchOptions,
                    activeTree: [],
                    buttonTarget: [],
                    openDropdown: false,
                });
            }
            this.setState({buttonMouseEvent: false});
        } else {
            var checkItem = this.state.value.find(function (valueItem) {
                return _this.props.getId(valueItem) === _this.props.getId(item.value);
            });
            if (!checkItem) {
                this.setState({value: [item.value]});
            }
            if (!event.ctrlKey) {
                this.setState({
                    options: this.state.firstBranchOptions,
                    activeTree: [],
                    buttonTarget: [],
                    openDropdown: false,
                });
            }
            this.setState({buttonMouseEvent: false});
        }
    };
    TreeSelect.prototype.handleTree = function (event, option) {
        var _this = this;
        if (option.children) {
            this.handleButton(option);
            this.handleMultiLevel(option);
            if (event.altKey && this.props.allowMultiple) {
                if (this.props.selectBranchWithChildren) {
                    var filteredItems_1 = [];
                    option.children.forEach(function (item) {
                        if (!_this.state.value.includes(item.value)) {
                            filteredItems_1.push(item.value);
                        }
                    });
                    this.setState({
                        value: __spreadArray(__spreadArray([], this.state.value, true), filteredItems_1, true),
                        options: this.state.firstBranchOptions,
                        openDropdown: false,
                        activeTree: [],
                        buttonTarget: [],
                    });
                } else {
                    var filteredItems_2 = [];
                    option.children.forEach(function (item) {
                        if (!_this.state.value.includes(item.value) && !item.children) {
                            filteredItems_2.push(item.value);
                        }
                    });
                    if (filteredItems_2.length > 0) {
                        this.setState({
                            value: __spreadArray(__spreadArray([], this.state.value, true), filteredItems_2, true),
                            options: this.state.firstBranchOptions,
                            openDropdown: false,
                            activeTree: [],
                            buttonTarget: [],
                        });
                    }
                }
            }
        } else {
            this.handleValue(event, option);
            if (!event.ctrlKey) {
                this.setState({openDropdown: false});
            }
        }
        var element = document.querySelector('.suggestion-item--btn');
        element.focus();
    };
    TreeSelect.prototype.backButton = function () {
        var items = this.state.activeTree.pop();
        if (items != null) {
            this.setState({
                options: items,
            });
        }
        var item = this.state.buttonTree.pop();
        this.setState({
            buttonValue: item !== null && item !== void 0 ? item : null,
        });
    };
    TreeSelect.prototype.recursion = function (arr) {
        var _this = this;
        arr.map(function (item) {
            _this.state.filterArr.push(item);
            if (item.children) {
                _this.recursion(item.children);
            }
        });
    };
    TreeSelect.prototype.filteredItem = function (arr) {
        var _this = this;
        var _a;
        if (this.props.kind === 'synchronous') {
            var filteredArr = arr.filter(function (item) {
                if (_this.state.searchFieldValue) {
                    if (
                        _this.props
                            .getLabel(item.value)
                            .toLowerCase()
                            .includes(_this.state.searchFieldValue.toLowerCase())
                    ) {
                        return item.value;
                    } else {
                        return;
                    }
                } else {
                    return item.value;
                }
            });
            if (filteredArr.length === 0) {
                return React.createElement('li', {className: 'suggestion-item--nothing-found'}, 'Nothing found');
            } else {
                return filteredArr.map(function (option, i) {
                    var selectedItem = _this.state.value.some(function (obj) {
                        return _this.props.getId(obj) === _this.props.getId(option.value);
                    });
                    return React.createElement(TreeSelectItem_1.TreeSelectItem, {
                        key: i,
                        option: option,
                        handleTree: _this.handleTree,
                        selectedItem: selectedItem,
                        allowMultiple: _this.props.allowMultiple,
                        getBorderColor: _this.props.getBorderColor,
                        getBackgroundColor: _this.props.getBackgroundColor,
                        getId: _this.props.getId,
                        optionTemplate: _this.props.optionTemplate,
                        getLabel: _this.props.getLabel,
                        onClick: function () {
                            return _this.setState({
                                searchFieldValue: '',
                            });
                        },
                    });
                });
            }
        } else if (this.props.kind === 'asynchronous') {
            if (this.state.options.length > 0) {
                return this.state.options.map(function (item, i) {
                    var selectedItem = _this.state.value.some(function (obj) {
                        return _this.props.getId(obj) === _this.props.getId(item.value);
                    });
                    return React.createElement(
                        'li',
                        {
                            key: i,
                            className: 'suggestion-item suggestion-item--multi-select',
                            onClick: function (event) {
                                _this.handleValue(event, item);
                            },
                        },
                        React.createElement(
                            'button',
                            {className: 'suggestion-item--btn', 'data-test-id': 'option'},
                            _this.props.optionTemplate
                                ? _this.props.optionTemplate(item.value)
                                : React.createElement(
                                      'span',
                                      {className: selectedItem ? 'suggestion-item--selected' : undefined},
                                      _this.props.getLabel(item.value),
                                  ),
                        ),
                    );
                });
            } else {
                return React.createElement(
                    'li',
                    {className: 'suggestion-item--nothing-found'},
                    (_a = this.props.noResultsFoundMessage) !== null && _a !== void 0 ? _a : 'Nothing found',
                );
            }
        } else {
            return;
        }
    };
    TreeSelect.prototype.branchButton = function (buttonValue) {
        var _this = this;
        setTimeout(function () {
            var _a;
            (_a = _this.categoryButtonRef.current) === null || _a === void 0
                ? void 0
                : _a.addEventListener('keydown', function (e) {
                      var _a;
                      if (e.key === 'ArrowDown') {
                          e.preventDefault();
                          e.stopPropagation();
                          setTimeout(function () {
                              var element = document.querySelector('.suggestion-item--btn');
                              element.focus();
                          });
                      }
                      if (e.key === 'ArrowUp') {
                          e.preventDefault();
                          e.stopPropagation();
                          (_a = _this.inputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
                      }
                  });
        });
        var selectedButton = this.state.value.some(function (obj) {
            return _this.props.getId(obj) === _this.props.getId(buttonValue.value);
        });
        if (!selectedButton) {
            return React.createElement(
                'button',
                {
                    className: 'autocomplete__button autocomplete__button--multi-select',
                    ref: this.categoryButtonRef,
                    onMouseOver: function () {
                        return _this.setState({buttonMouseEvent: true});
                    },
                    onMouseOut: function () {
                        return _this.setState({buttonMouseEvent: false});
                    },
                    onClick: function (event) {
                        return _this.handleBranchValue(event, buttonValue);
                    },
                },
                'Choose entire category',
            );
        } else {
            return React.createElement(
                'button',
                {className: 'autocomplete__button autocomplete__button--multi-select autocomplete__button--disabled'},
                'Category selected',
            );
        }
    };
    TreeSelect.prototype.handleDebounce = function () {
        var _this = this;
        this.setState({options: []});
        if (this.props.kind === 'asynchronous') {
            if (this.state.searchFieldValue) {
                this.ICancelFn = this.props.searchOptions(this.state.searchFieldValue, function (items) {
                    var _a;
                    _this.setState({options: items, loading: false});
                    (_a = _this.popperInstance) === null || _a === void 0 ? void 0 : _a.update();
                });
            } else {
                this.setState({options: this.state.firstBranchOptions, loading: false});
            }
        }
    };
    TreeSelect.prototype.onDragEnd = function (result) {
        if (!result.destination) {
            return;
        }
        this.setState({
            value: (0, common_1.arrayMove)(this.state.value, result.source.index, result.destination.index),
        });
    };
    TreeSelect.prototype.renderItemContent = function (item, Wrapper) {
        var _a, _b, _c;
        if (this.props.valueTemplate) {
            return this.props.valueTemplate(item, Wrapper);
        }
        var content =
            (_c = (_b = (_a = this.props).optionTemplate) === null || _b === void 0 ? void 0 : _b.call(_a, item)) !==
                null && _c !== void 0
                ? _c
                : React.createElement('span', null, this.props.getLabel(item));
        return React.createElement(Wrapper, null, content);
    };
    TreeSelect.prototype.render = function () {
        var _this = this;
        var _a;
        if (this.props.preview) {
            return React.createElement(SelectPreview_1.SelectPreview, {
                kind: this.props.allowMultiple
                    ? {
                          mode: 'multi-select',
                          getBackgroundColor: this.props.getBackgroundColor,
                      }
                    : {
                          mode: 'single-select',
                          getBorderColor: this.props.getBorderColor,
                      },
                items: this.state.value,
                valueTemplate: this.props.valueTemplate,
                getLabel: this.props.getLabel,
            });
        }
        var ListWrapper = this.props.sortable
            ? function (_a) {
                  var children = _a.children;
                  return React.createElement(
                      react_beautiful_dnd_1.DragDropContext,
                      {onDragEnd: _this.onDragEnd},
                      React.createElement(
                          react_beautiful_dnd_1.Droppable,
                          {droppableId: 'droppable', direction: 'horizontal'},
                          function (provided, _snapshot) {
                              return React.createElement(
                                  'ul',
                                  __assign(
                                      {className: 'tags-input__tag-list', ref: provided.innerRef},
                                      provided.droppableProps,
                                  ),
                                  children,
                                  provided.placeholder,
                              );
                          },
                      ),
                  );
              }
            : function (_a) {
                  var children = _a.children;
                  return React.createElement('ul', {className: 'tags-input__tag-list'}, children);
              };
        var ItemWrapper = this.props.sortable
            ? function (_a) {
                  var children = _a.children,
                      itemId = _a.itemId,
                      i = _a.i;
                  return React.createElement(
                      react_beautiful_dnd_1.Draggable,
                      {draggableId: itemId, index: i},
                      function (provided2) {
                          return React.createElement(
                              'div',
                              __assign({ref: provided2.innerRef}, provided2.draggableProps, provided2.dragHandleProps),
                              children,
                          );
                      },
                  );
              }
            : function (_a) {
                  var children = _a.children;
                  return React.createElement(React.Fragment, null, children);
              };
        return React.createElement(
            Form_1.InputWrapper,
            {
                label: this.props.label,
                error: this.props.error,
                invalid: this.props.error != null,
                required: this.props.required,
                disabled: this.props.disabled,
                info: this.props.info,
                inlineLabel: this.props.inlineLabel,
                labelHidden: this.props.labelHidden,
                htmlId: this.htmlId,
                tabindex: this.props.tabindex,
                fullWidth: this.props.fullWidth,
                'data-test-id': this.props['data-test-id'],
                inputWrapper: this.props.inputWrapper,
            },
            React.createElement(
                'div',
                {
                    className:
                        '\n                        tags-input sd-input__input\n                        tags-input--'.concat(
                            this.props.allowMultiple ? 'multi-select' : 'single-select',
                        ),
                    ref: this.treeSelectRef,
                    'data-test-id': this.props.allowMultiple ? undefined : 'open-popover',
                },
                this.props.allowMultiple
                    ? React.createElement(
                          'div',
                          {className: 'tags-input__tags'},
                          this.props.readOnly ||
                              React.createElement(
                                  'button',
                                  {
                                      ref: this.openDropdownRef,
                                      className:
                                          '\n                                        tags-input__add-button\n                                        '.concat(
                                              this.props.disabled ? 'tags-input__add-button--disabled' : '',
                                          ),
                                      onClick: function (e) {
                                          e.stopPropagation();
                                          if (!_this.props.disabled) {
                                              _this.setState({
                                                  openDropdown: !_this.state.openDropdown,
                                                  searchFieldValue: '',
                                              });
                                          }
                                      },
                                      'data-test-id': 'open-popover',
                                      'aria-haspopup': 'tree',
                                      'aria-expanded': this.state.openDropdown,
                                  },
                                  React.createElement('i', {className: 'icon-plus-large'}),
                              ),
                          React.createElement(
                              ListWrapper,
                              null,
                              this.state.value.map(function (item, i) {
                                  var Wrapper = function (_a) {
                                      var backgroundColor = _a.backgroundColor,
                                          children = _a.children;
                                      return React.createElement(
                                          TreeSelectPill_1.TreeSelectPill,
                                          {
                                              item: item,
                                              readOnly: _this.props.readOnly,
                                              disabled: _this.props.disabled,
                                              valueTemplate: _this.props.valueTemplate,
                                              backgroundColor: backgroundColor,
                                              onRemove: function () {
                                                  return _this.removeClick(i);
                                              },
                                              getBackgroundColor: _this.props.getBackgroundColor,
                                              draggable: _this.props.sortable,
                                          },
                                          children,
                                      );
                                  };
                                  var itemId = _this.props.getId(item);
                                  return React.createElement(
                                      ItemWrapper,
                                      {itemId: itemId, key: itemId, i: i},
                                      _this.renderItemContent(item, Wrapper),
                                  );
                              }),
                          ),
                          this.state.value.length > 0
                              ? this.props.readOnly ||
                                    this.props.disabled ||
                                    React.createElement(
                                        'button',
                                        {
                                            className: 'tags-input__remove-value',
                                            style: {position: 'relative', bottom: '2px'},
                                            onClick: function (e) {
                                                e.stopPropagation();
                                                _this.setState({value: []});
                                            },
                                        },
                                        React.createElement(Icon_1.Icon, {name: 'remove-sign'}),
                                    )
                              : null,
                      )
                    : React.createElement(
                          'div',
                          {className: 'tags-input__tags'},
                          this.props.readOnly ||
                              React.createElement('button', {
                                  className: 'tags-input__overlay-button',
                                  ref: this.openDropdownRef,
                                  onClick: function () {
                                      _this.setState({openDropdown: !_this.state.openDropdown});
                                  },
                              }),
                          this.state.value.length < 1 &&
                              React.createElement(
                                  'span',
                                  {
                                      className:
                                          'tags-input__single-item' +
                                          (this.props.readOnly ? ' tags-input__tag-item--readonly' : ''),
                                  },
                                  React.createElement(
                                      'span',
                                      {className: 'tags-input__placeholder'},
                                      this.props.placeholder,
                                  ),
                              ),
                          this.state.value.map(function (item, i) {
                              var Wrapper = function (_a) {
                                  var backgroundColor = _a.backgroundColor,
                                      borderColor = _a.borderColor,
                                      children = _a.children;
                                  return React.createElement(
                                      'span',
                                      {
                                          className:
                                              'tags-input__single-item' +
                                              (_this.props.readOnly ? ' tags-input__tag-item--readonly' : ''),
                                          onClick: function () {
                                              return !_this.props.readOnly && _this.removeClick(i);
                                          },
                                      },
                                      _this.props.getBorderColor &&
                                          React.createElement('div', {
                                              className: 'item-border item-border-selected',
                                              style: borderColor
                                                  ? {backgroundColor: borderColor}
                                                  : {backgroundColor: _this.props.getBorderColor(item)},
                                          }),
                                      React.createElement(
                                          'span',
                                          {
                                              className: 'tags-input__helper-box',
                                              style: {
                                                  color:
                                                      backgroundColor && (0, helpers_1.getTextColor)(backgroundColor),
                                              },
                                          },
                                          React.createElement(
                                              'span',
                                              {
                                                  className: backgroundColor && 'tags-input__tag-item',
                                                  style: {backgroundColor: backgroundColor, margin: 0},
                                                  'data-test-id': 'item',
                                              },
                                              children,
                                          ),
                                          _this.props.readOnly !== true &&
                                              _this.props.required !== true &&
                                              React.createElement(
                                                  'span',
                                                  {
                                                      className: 'tags-input__remove-button',
                                                      'data-test-id': 'clear-value',
                                                  },
                                                  React.createElement(Icon_1.Icon, {name: 'remove-sign'}),
                                              ),
                                      ),
                                  );
                              };
                              return React.createElement(
                                  React.Fragment,
                                  {key: i},
                                  _this.renderItemContent(item, Wrapper),
                              );
                          }),
                      ),
            ),
            React.createElement(
                WithPortal_1.WithPortal,
                {active: this.state.openDropdown, 'data-test-id': 'tree-select-popover'},
                React.createElement(
                    'div',
                    {
                        className:
                            'autocomplete autocomplete--multi-select' +
                            (this.props.width === 'medium' ? ' autocomplete--fixed-width' : ''),
                        style: {
                            zIndex: this.zIndex,
                            width:
                                (_a = this.treeSelectRef.current) === null || _a === void 0 ? void 0 : _a.offsetWidth,
                            minWidth: '300px',
                        },
                        ref: this.dropdownRef,
                    },
                    React.createElement(
                        'div',
                        {className: 'autocomplete__header'},
                        React.createElement(
                            'div',
                            {className: 'autocomplete__icon'},
                            React.createElement(Icon_1.Icon, {name: 'search', className: 'search'}),
                        ),
                        React.createElement(
                            'div',
                            {className: 'autocomplete__filter'},
                            React.createElement('input', {
                                className: 'autocomplete__input',
                                type: 'text',
                                placeholder: this.props.searchPlaceholder,
                                ref: this.inputRef,
                                value: this.state.searchFieldValue,
                                onChange: function (event) {
                                    var _a, _b;
                                    if (_this.props.kind === 'synchronous') {
                                        _this.setState({searchFieldValue: event.target.value});
                                        (_a = _this.popperInstance) === null || _a === void 0 ? void 0 : _a.update();
                                    } else if (_this.props.kind === 'asynchronous') {
                                        if (_this.ICancelFn) {
                                            _this.ICancelFn();
                                        }
                                        _this.setState({
                                            searchFieldValue: event.target.value,
                                            options: [],
                                            loading: true,
                                        });
                                        (_b = _this.popperInstance) === null || _b === void 0 ? void 0 : _b.update();
                                        _this.debounceFn();
                                    } else {
                                        return;
                                    }
                                },
                                'data-test-id': 'filter-input',
                            }),
                        ),
                    ),
                    this.state.activeTree.length > 0 &&
                        this.state.buttonValue != null &&
                        React.createElement(
                            'div',
                            {className: 'autocomplete__category-header'},
                            React.createElement(
                                'div',
                                {
                                    className: 'autocomplete__icon',
                                    onClick: function () {
                                        _this.backButton();
                                    },
                                },
                                React.createElement(Icon_1.Icon, {name: 'arrow-left', className: 'arrow-left'}),
                            ),
                            React.createElement(
                                'div',
                                {className: 'autocomplete__filter'},
                                React.createElement(
                                    'button',
                                    {className: 'autocomplete__category-title'},
                                    this.props.optionTemplate
                                        ? this.props.optionTemplate(this.state.buttonValue.value)
                                        : this.props.getLabel(this.state.buttonValue.value),
                                ),
                                this.props.selectBranchWithChildren && this.branchButton(this.state.buttonValue),
                            ),
                        ),
                    this.state.loading
                        ? React.createElement(
                              'ul',
                              {className: 'suggestion-list--loader'},
                              React.createElement(Loader_1.Loader, {overlay: true}),
                          )
                        : this.state.searchFieldValue === ''
                          ? this.props.getOptions
                              ? React.createElement(
                                    'ul',
                                    {
                                        className: 'suggestion-list suggestion-list--multi-select',
                                        ref: this.ref,
                                        'data-test-id': 'options',
                                        role: 'tree',
                                        'aria-multiselectable': this.props.allowMultiple,
                                    },
                                    this.state.options.map(function (option, i) {
                                        var selectedItem = _this.state.value.some(function (obj) {
                                            return _this.props.getId(obj) === _this.props.getId(option.value);
                                        });
                                        return React.createElement(TreeSelectItem_1.TreeSelectItem, {
                                            key: i,
                                            option: option,
                                            handleTree: _this.handleTree,
                                            selectedItem: selectedItem,
                                            allowMultiple: _this.props.allowMultiple,
                                            parentCategory:
                                                _this.state.buttonValue == null
                                                    ? undefined
                                                    : _this.props.getLabel(_this.state.buttonValue.value),
                                            getBorderColor: _this.props.getBorderColor,
                                            getBackgroundColor: _this.props.getBackgroundColor,
                                            getId: _this.props.getId,
                                            getLabel: _this.props.getLabel,
                                            optionTemplate: _this.props.optionTemplate,
                                            onKeyDown: function () {
                                                return _this.setState({
                                                    buttonTarget: __spreadArray(
                                                        __spreadArray([], _this.state.buttonTarget, true),
                                                        [_this.props.getId(option.value)],
                                                        false,
                                                    ),
                                                });
                                            },
                                        });
                                    }),
                                )
                              : null
                          : React.createElement(
                                'ul',
                                {className: 'suggestion-list suggestion-list--multi-select', ref: this.ref},
                                this.filteredItem(
                                    this.props.singleLevelSearch ? this.state.options : this.state.filterArr,
                                ),
                            ),
                ),
            ),
        );
    };
    return TreeSelect;
})(React.Component);
exports.TreeSelect = TreeSelect;
