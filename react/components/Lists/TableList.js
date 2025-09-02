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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableListItem = exports.TableList = void 0;
var React = __importStar(require("react"));
var react_dom_1 = __importDefault(require("react-dom"));
var classnames_1 = __importDefault(require("classnames"));
var react_beautiful_dnd_1 = require("react-beautiful-dnd");
var Tooltip_1 = require("../Tooltip");
var Button_1 = require("../Button");
var Dropdown_1 = require("../Dropdown");
var SingleAndDoubleClickFunction_1 = require("./../SingleAndDoubleClickFunction");
var reorder = function (list, startIndex, endIndex) {
    var result = Array.from(list);
    var removed = result.splice(startIndex, 1)[0];
    result.splice(endIndex, 0, removed);
    return result;
};
var TableList = /** @class */ (function (_super) {
    __extends(TableList, _super);
    function TableList(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            items: [],
        };
        _this.onDragEnd = _this.onDragEnd.bind(_this);
        _this.dropDown = _this.dropDown.bind(_this);
        return _this;
    }
    TableList.prototype.componentDidMount = function () {
        if (this.props.array) {
            this.setState({ items: this.props.array });
        }
    };
    TableList.prototype.componentDidUpdate = function (prevProps) {
        if (this.props.array) {
            if (prevProps.array !== this.props.array) {
                this.setState({
                    items: this.props.array,
                });
            }
        }
    };
    TableList.prototype.onDragEnd = function (result) {
        if (!result.destination) {
            return;
        }
        var items = reorder(this.state.items, result.source.index, result.destination.index);
        this.setState({
            items: items,
        });
        return this.props.onDrag ? this.props.onDrag(result.source.index, result.destination.index) : null;
    };
    TableList.prototype.dropDown = function () {
        return (React.createElement(Dropdown_1.Dropdown, { items: this.props.itemsDropdown ? this.props.itemsDropdown() : [] },
            React.createElement(Button_1.Button, { type: "primary", icon: "plus-large", text: "Add item", size: "small", shape: "round", iconOnly: true, onClick: function () { return false; } })));
    };
    TableList.prototype.render = function () {
        var _a;
        var _this = this;
        var classes = (0, classnames_1.default)('', (_a = {
                'table-list': !this.props.addItem,
                'table-list--read-only': this.props.readOnly
            },
            _a["".concat(this.props.className)] = this.props.className,
            _a));
        return this.state.items.length > 0 ? (this.props.dragAndDrop ? (React.createElement(react_beautiful_dnd_1.DragDropContext, { onDragEnd: this.onDragEnd },
            React.createElement(react_beautiful_dnd_1.Droppable, { droppableId: "droppable" }, function (provided, _snapshot) { return (React.createElement("div", __assign({ role: "list", className: classes, ref: provided.innerRef }, provided.droppableProps),
                _this.state.items.map(function (item, index) { return (React.createElement(react_beautiful_dnd_1.Draggable, { key: index, draggableId: "".concat(index), index: index }, function (provided2, snapshot) {
                    return _this.props.append ? (React.createElement(PortalItem, { provided: provided2, snapshot: snapshot, item: item, index: index, dragAndDrop: _this.props.dragAndDrop, showDragHandle: _this.props.showDragHandle, addItem: _this.props.addItem, onAddItem: function () {
                            return _this.props.onAddItem && _this.props.onAddItem(index, item);
                        }, itemsDropdown: function () {
                            return _this.props.itemsDropdown ? _this.props.itemsDropdown(index) : [];
                        } })) : (React.createElement("div", __assign({ ref: provided2.innerRef }, provided2.draggableProps, provided2.dragHandleProps),
                        React.createElement(TableListItem, { dragAndDrop: _this.props.dragAndDrop, start: item.start, center: item.center, end: item.end, action: item.action, selected: item.selected, onClick: item.onClick ? item.onClick : undefined, onDoubleClick: item.onDoubleClick ? item.onDoubleClick : undefined, addItem: _this.props.addItem, itemsDropdown: function () {
                                return _this.props.itemsDropdown
                                    ? _this.props.itemsDropdown(index)
                                    : [];
                            }, hexColor: item.hexColor, locked: item.locked, positionLocked: item.positionLocked, onAddItem: function () {
                                return _this.props.onAddItem && _this.props.onAddItem(index, item);
                            }, showDragHandle: _this.props.showDragHandle })));
                })); }),
                provided.placeholder,
                _this.props.addItem && !_this.props.readOnly && (React.createElement("div", { className: "table-list__add-item table-list__item--margin" },
                    React.createElement(Tooltip_1.Tooltip, { text: "Add item", flow: "top" },
                        React.createElement("div", { className: "table-list__add-item--container sd-margin-x--auto" }, _this.dropDown())))))); }))) : (React.createElement("div", { role: "list", className: classes },
            this.state.items.map(function (item, index) { return (React.createElement(TableListItem, { key: index, start: item.start, center: item.center, end: item.end, action: item.action, selected: item.selected, onClick: item.onClick ? item.onClick : undefined, onDoubleClick: item.onDoubleClick ? item.onDoubleClick : undefined, addItem: _this.props.addItem, itemsDropdown: function () { return (_this.props.itemsDropdown ? _this.props.itemsDropdown(index) : []); }, hexColor: item.hexColor, locked: item.locked, positionLocked: item.positionLocked, onAddItem: function () { return _this.props.onAddItem && _this.props.onAddItem(index, item); } })); }),
            this.props.addItem && !this.props.readOnly && (React.createElement("div", { className: "table-list__add-item table-list__item--margin" },
                React.createElement(Tooltip_1.Tooltip, { text: "Add item", flow: "top" },
                    React.createElement("div", { className: "table-list__add-item--container sd-margin-x--auto" }, this.dropDown()))))))) : this.props.addItem && !this.props.readOnly ? (React.createElement("div", { role: "list", className: classes },
            React.createElement("div", { className: "table-list__add-item table-list__item--margin" },
                React.createElement(Tooltip_1.Tooltip, { text: "Add item", flow: "top" },
                    React.createElement("div", { className: "table-list__add-item--container sd-margin-x--auto" }, this.dropDown()))))) : null;
    };
    return TableList;
}(React.PureComponent));
exports.TableList = TableList;
var TableListItem = /** @class */ (function (_super) {
    __extends(TableListItem, _super);
    function TableListItem(props) {
        var _this = _super.call(this, props) || this;
        _this.onActionMenuClick = function (event) {
            event.preventDefault();
            event.stopPropagation();
        };
        _this.multiClickHandler = (0, SingleAndDoubleClickFunction_1.setupSingleAndDoubleClick)();
        return _this;
    }
    TableListItem.prototype.render = function () {
        var _this = this;
        var classes = (0, classnames_1.default)('table-list__item', {
            'table-list__item--selected': this.props.selected,
            'table-list__item--clickable': this.props.onClick,
            'table-list__item--draggable': this.props.dragAndDrop,
            'table-list__item--locked': this.props.locked,
            'table-list__item--position-locked': this.props.positionLocked,
            'table-list__item--drag-handles-always': !this.props.showDragHandle,
            'table-list__item--drag-handles-none': this.props.showDragHandle === 'none',
            'table-list__item--margin': !this.props.addItem,
        });
        var Wrapper = this.props.addItem
            ? function (_a) {
                var children = _a.children;
                return React.createElement("div", { className: "table-list__item-container" }, children);
            }
            : function (_a) {
                var children = _a.children;
                return children;
            };
        return (React.createElement(Wrapper, null,
            React.createElement(React.Fragment, null,
                React.createElement("div", { role: "listitem", className: classes, onClick: function (e) {
                        return _this.multiClickHandler(e, {
                            onSingleClick: function () {
                                var selection = window.getSelection();
                                if (_this.props.onClick && selection) {
                                    if (_this.props.dragAndDrop) {
                                        _this.props.onClick();
                                    }
                                    else {
                                        if (selection.toString().length < 1) {
                                            _this.props.onClick();
                                        }
                                    }
                                }
                            },
                            onDoubleClick: function () {
                                if (_this.props.onDoubleClick) {
                                    _this.props.onDoubleClick();
                                }
                            },
                        });
                    } },
                    React.createElement("div", { className: "table-list__item-border", style: { backgroundColor: this.props.hexColor } }),
                    React.createElement("div", { className: "table-list__item-content" },
                        React.createElement("div", { className: "table-list__item-content-block" }, this.props.start && this.props.start),
                        React.createElement("div", { className: "table-list__item-content-block table-list__item-content-block--center" }, this.props.center && this.props.center),
                        React.createElement("div", { className: "table-list__item-content-block" }, this.props.end && this.props.end)),
                    this.props.action && (React.createElement("div", { className: "table-list__slide-in-actions", onClick: this.onActionMenuClick }, this.props.action))),
                this.props.addItem && (React.createElement("div", { className: "table-list__add-bar-container" },
                    React.createElement(Tooltip_1.Tooltip, { text: "Add item", flow: "top" },
                        React.createElement("div", { className: "table-list__add-bar" },
                            React.createElement(Dropdown_1.Dropdown, { onChange: this.props.onAddItem, items: this.props.itemsDropdown ? this.props.itemsDropdown() : [] },
                                React.createElement(Button_1.Button, { type: "primary", icon: "plus-large", text: "Add item", size: "small", shape: "round", iconOnly: true, onClick: function () { return false; } })))))))));
    };
    return TableListItem;
}(React.PureComponent));
exports.TableListItem = TableListItem;
var PortalItem = /** @class */ (function (_super) {
    __extends(PortalItem, _super);
    function PortalItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PortalItem.prototype.render = function () {
        var _this = this;
        var provided = this.props.provided;
        var snapshot = this.props.snapshot;
        var usePortal = snapshot.isDragging;
        var child = (React.createElement("div", __assign({ ref: provided.innerRef }, provided.draggableProps, provided.dragHandleProps),
            React.createElement(TableListItem, { dragAndDrop: this.props.dragAndDrop, start: this.props.item.start, center: this.props.item.center, end: this.props.item.end, action: this.props.item.action, onClick: this.props.item.onClick ? this.props.item.onClick : undefined, onDoubleClick: this.props.item.onDoubleClick ? this.props.item.onDoubleClick : undefined, addItem: this.props.addItem, itemsDropdown: this.props.itemsDropdown, hexColor: this.props.item.hexColor, locked: this.props.item.locked, positionLocked: this.props.item.positionLocked, onAddItem: function () { return _this.props.onAddItem; }, showDragHandle: this.props.showDragHandle })));
        if (!usePortal) {
            return child;
        }
        // if dragging - put the item in a portal
        return react_dom_1.default.createPortal(child, document.body);
    };
    return PortalItem;
}(React.PureComponent));
