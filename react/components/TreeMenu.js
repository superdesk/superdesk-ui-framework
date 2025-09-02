"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TreeMenu = void 0;
var React = __importStar(require("react"));
var Icon_1 = require("./Icon");
var core_1 = require("@popperjs/core");
var TreeSelectItem_1 = require("./TreeSelect/TreeSelectItem");
var KeyboardNavigation_1 = require("./TreeSelect/KeyboardNavigation");
var WithPortal_1 = require("./WithPortal");
var helpers_1 = require("../helpers");
var zIndex_1 = require("../zIndex");
function nodeHasChildren(item) {
    return item[(0, helpers_1.nameof)('children')] != null;
}
function nodeCanBeSelected(item) {
    return item[(0, helpers_1.nameof)('onSelect')] != null;
}
function onSelect(item) {
    if (nodeCanBeSelected(item)) {
        return item.onSelect();
    }
    return undefined;
}
function disabledItem(item) {
    if (nodeCanBeSelected(item)) {
        return item.disabled;
    }
    return undefined;
}
var TreeMenu = /** @class */ (function (_super) {
    __extends(TreeMenu, _super);
    function TreeMenu(props) {
        var _this = _super.call(this, props) || this;
        _this.zIndex = (0, zIndex_1.getNextZIndex)();
        _this.inputFocus = function () {
            var _a;
            (_a = _this.inputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
        };
        _this.listNavigation = function () {
            var element = document.querySelector('.suggestion-item--btn:not([disabled])');
            element === null || element === void 0 ? void 0 : element.focus();
        };
        _this.onMouseDown = function (event) {
            var _a, _b;
            if (((_a = _this.dropdownRef.current) === null || _a === void 0 ? void 0 : _a.contains(event.target)) !== true &&
                ((_b = _this.treeMenuRef.current) === null || _b === void 0 ? void 0 : _b.contains(event.target)) !== true &&
                _this.state.openDropdown) {
                _this.setState({
                    openDropdown: false,
                    searchFieldValue: '',
                });
            }
        };
        _this.onKeyDown = function (e) {
            if (_this.state.openDropdown && _this.ref.current) {
                (0, KeyboardNavigation_1.keyboardNavigation)(e, _this.ref.current, _this.inputFocus);
                if (e.key === 'Backspace' && _this.state.activeTree.length > 0) {
                    _this.backButton();
                    var lastElement = _this.state.buttonTarget.pop();
                    if (lastElement != null) {
                        var className = (0, TreeSelectItem_1.getPrefixedItemId)(lastElement);
                        var element = document.getElementsByClassName(className)[0];
                        element === null || element === void 0 ? void 0 : element.focus();
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
        };
        _this.state = {
            options: _this.props.getOptions ? _this.props.getOptions() : [],
            firstBranchOptions: _this.props.getOptions ? _this.props.getOptions() : [],
            searchFieldValue: '',
            activeTree: [],
            buttonTree: [],
            buttonTarget: [],
            filterArr: [],
            buttonValue: null,
            openDropdown: false,
        };
        _this.handleMultiLevel = _this.handleMultiLevel.bind(_this);
        _this.backButton = _this.backButton.bind(_this);
        _this.handleButton = _this.handleButton.bind(_this);
        _this.handleTree = _this.handleTree.bind(_this);
        _this.toggleMenu = _this.toggleMenu.bind(_this);
        _this.toggle = _this.toggle.bind(_this);
        _this.onMouseDown = _this.onMouseDown.bind(_this);
        _this.onKeyDown = _this.onKeyDown.bind(_this);
        _this.onPressEsc = _this.onPressEsc.bind(_this);
        _this.dropdownRef = React.createRef();
        _this.ref = React.createRef();
        _this.openDropdownRef = React.createRef();
        _this.treeMenuRef = React.createRef();
        _this.inputRef = React.createRef();
        _this.popperInstance = null;
        return _this;
    }
    TreeMenu.prototype.componentWillUnmount = function () {
        document.removeEventListener('mousedown', this.onMouseDown);
        document.removeEventListener('keydown', this.onKeyDown);
        document.addEventListener('keydown', this.onPressEsc);
    };
    TreeMenu.prototype.componentDidUpdate = function (prevProps, prevState) {
        var _this = this;
        var _a;
        if (prevState.openDropdown !== this.state.openDropdown) {
            this.toggleMenu();
        }
        if (prevState.activeTree !== this.state.activeTree ||
            prevState.filterArr !== this.state.filterArr ||
            prevState.options !== this.state.options) {
            (_a = this.popperInstance) === null || _a === void 0 ? void 0 : _a.update();
        }
        // Update options when getOptions prop is updated
        if (this.props.getOptions && prevProps.getOptions !== this.props.getOptions) {
            var newOptions_1 = this.props.getOptions();
            this.setState({
                options: newOptions_1,
                firstBranchOptions: newOptions_1,
                filterArr: [],
            }, function () {
                _this.recursion(newOptions_1);
            });
        }
    };
    TreeMenu.prototype.toggleMenu = function () {
        var _this = this;
        var _a, _b;
        if (this.state.openDropdown) {
            if (this.openDropdownRef.current && this.dropdownRef.current) {
                this.popperInstance = (0, core_1.createPopper)(this.openDropdownRef.current, this.dropdownRef.current, {
                    placement: 'bottom-start',
                    modifiers: [
                        {
                            name: 'flip',
                            enabled: true,
                        },
                    ],
                    onFirstUpdate: function (state) {
                        var _a;
                        (_a = _this.popperInstance) === null || _a === void 0 ? void 0 : _a.setOptions({
                            placement: state.placement,
                            modifiers: _this.popperInstance.state.options.modifiers.map(function (modifier) {
                                return modifier.name === 'flip' ? __assign(__assign({}, modifier), { enabled: false }) : modifier;
                            }),
                        });
                    },
                });
            }
            (_a = this.inputRef.current) === null || _a === void 0 ? void 0 : _a.addEventListener('keydown', function (e) {
                if (e.key === 'ArrowDown') {
                    e.preventDefault();
                    e.stopPropagation();
                    setTimeout(function () {
                        _this.listNavigation();
                    });
                }
            });
            if (this.inputRef.current) {
                this.inputFocus();
            }
            else {
                var element = document.querySelector('.suggestion-item--btn:not([disabled])');
                element === null || element === void 0 ? void 0 : element.focus();
            }
        }
        else {
            (_b = this.openDropdownRef.current) === null || _b === void 0 ? void 0 : _b.focus();
        }
    };
    TreeMenu.prototype.toggle = function (event) {
        event.stopPropagation();
        this.setState({
            openDropdown: !this.state.openDropdown,
        });
    };
    TreeMenu.prototype.handleMultiLevel = function (item) {
        if (nodeHasChildren(item)) {
            this.setState({
                activeTree: __spreadArray(__spreadArray([], this.state.activeTree, true), [this.state.options], false),
                options: item.children,
            });
        }
    };
    TreeMenu.prototype.handleButton = function (item) {
        var buttonTreeNext = this.state.buttonTree;
        if (this.state.buttonValue != null) {
            buttonTreeNext = buttonTreeNext.concat(this.state.buttonValue);
        }
        this.setState({
            buttonTree: buttonTreeNext,
            buttonValue: item,
        });
    };
    TreeMenu.prototype.handleTree = function (_event, option) {
        if (nodeHasChildren(option)) {
            this.handleButton(option);
            this.handleMultiLevel(option);
        }
        else {
            this.setState({
                openDropdown: false,
                options: this.state.firstBranchOptions,
                activeTree: [],
                buttonTarget: [],
            });
        }
        setTimeout(function () {
            var element = document.querySelectorAll('.suggestion-item--btn:not([disabled])')[0];
            element === null || element === void 0 ? void 0 : element.focus();
        });
    };
    TreeMenu.prototype.backButton = function () {
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
    TreeMenu.prototype.recursion = function (arr) {
        var _this = this;
        arr.map(function (item) {
            _this.state.filterArr.push(item);
            if (nodeHasChildren(item)) {
                _this.recursion(item.children);
            }
        });
    };
    TreeMenu.prototype.filteredItem = function (arr) {
        var _this = this;
        var filteredArr = arr.filter(function (item) {
            if (_this.state.searchFieldValue) {
                if (_this.props.getLabel(item.value).toLowerCase().includes(_this.state.searchFieldValue.toLowerCase())) {
                    return item.value;
                }
                else {
                    return;
                }
            }
            else {
                return item.value;
            }
        });
        if (filteredArr.length === 0) {
            return React.createElement("li", { className: "suggestion-item--nothing-found" }, "Nothing found");
        }
        else {
            return filteredArr.map(function (option, i) { return (React.createElement(TreeSelectItem_1.TreeSelectItem, { key: i, option: option, handleTree: _this.handleTree, disabledItem: disabledItem(option), getBorderColor: _this.props.getBorderColor, getBackgroundColor: _this.props.getBackgroundColor, getId: _this.props.getId, optionTemplate: _this.props.optionTemplate, getLabel: _this.props.getLabel, onClick: function () {
                    if (onSelect != null) {
                        onSelect(option);
                        _this.setState({
                            searchFieldValue: '',
                        });
                    }
                } })); });
        }
    };
    TreeMenu.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { ref: this.treeMenuRef },
            React.createElement("div", { ref: this.openDropdownRef }, this.props.children(this.toggle)),
            React.createElement(WithPortal_1.WithPortal, { active: this.state.openDropdown, "data-test-id": "tree-menu-popover" },
                React.createElement("div", { ref: this.dropdownRef, className: "autocomplete autocomplete--multi-select autocomplete--fixed-width", style: {
                        zIndex: this.zIndex,
                    } },
                    React.createElement("div", { className: "autocomplete__header" },
                        React.createElement("div", { className: "autocomplete__icon", onClick: function () {
                                _this.backButton();
                            } },
                            React.createElement(Icon_1.Icon, { name: "search", className: "search" })),
                        React.createElement("div", { className: "autocomplete__filter" },
                            React.createElement("input", { className: "autocomplete__input", type: "text", placeholder: this.props.searchPlaceholder, ref: this.inputRef, value: this.state.searchFieldValue, onChange: function (event) {
                                    var _a;
                                    _this.setState({ searchFieldValue: event.target.value });
                                    (_a = _this.popperInstance) === null || _a === void 0 ? void 0 : _a.update();
                                } }))),
                    this.state.activeTree.length > 0 && this.state.buttonValue != null && (React.createElement("div", { className: "autocomplete__category-header" },
                        React.createElement("div", { className: "autocomplete__icon", onClick: function () {
                                _this.backButton();
                            } },
                            React.createElement(Icon_1.Icon, { name: "arrow-left", className: "arrow-left" })),
                        React.createElement("div", { className: "autocomplete__filter" },
                            React.createElement("button", { className: "autocomplete__category-title" }, this.props.optionTemplate
                                ? this.props.optionTemplate(this.state.buttonValue.value)
                                : this.props.getLabel(this.state.buttonValue.value))))),
                    this.state.searchFieldValue === '' ? (this.props.getOptions ? (React.createElement("ul", { ref: this.ref, className: "suggestion-list suggestion-list--multi-select", role: "tree" }, this.state.options.map(function (option, i) { return (React.createElement(TreeSelectItem_1.TreeSelectItem, { key: i, option: option, handleTree: _this.handleTree, onClick: function () {
                            onSelect(option);
                        }, disabledItem: disabledItem(option), getBorderColor: _this.props.getBorderColor, parentCategory: _this.state.buttonValue == null
                            ? undefined
                            : _this.props.getLabel(_this.state.buttonValue.value), getBackgroundColor: _this.props.getBackgroundColor, getId: _this.props.getId, optionTemplate: _this.props.optionTemplate, getLabel: _this.props.getLabel, onKeyDown: function () {
                            return _this.setState({
                                buttonTarget: __spreadArray(__spreadArray([], _this.state.buttonTarget, true), [
                                    _this.props.getId(option.value),
                                ], false),
                            });
                        } })); }))) : null) : (React.createElement("ul", { className: "suggestion-list suggestion-list--multi-select", ref: this.ref }, this.filteredItem(this.props.singleLevelSearch ? this.state.options : this.state.filterArr)))))));
    };
    return TreeMenu;
}(React.Component));
exports.TreeMenu = TreeMenu;
