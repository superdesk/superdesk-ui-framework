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
exports.SelectGrid = void 0;
var React = __importStar(require("react"));
var react_id_generator_1 = __importDefault(require("react-id-generator"));
var overlaypanel_1 = require("@superdesk/primereact/overlaypanel");
var Loader_1 = require("./Loader");
var GRID_COLS = 3;
var GRID_ROWS = 5;
var PAGE_SIZE = GRID_COLS * GRID_ROWS;
var SelectGrid = /** @class */ (function (_super) {
    __extends(SelectGrid, _super);
    function SelectGrid(props) {
        var _this = _super.call(this, props) || this;
        _this.htmlId = (0, react_id_generator_1.default)();
        _this.mountPopup = function (event) {
            var _a, _b;
            if (!event) {
                (_a = _this.overlayPanel.current) === null || _a === void 0 ? void 0 : _a.hide();
            }
            else {
                (_b = _this.overlayPanel.current) === null || _b === void 0 ? void 0 : _b.toggle(event);
            }
            document.addEventListener('keydown', _this.handleKeydown);
            setTimeout(function () {
                var _a;
                (_a = _this.searchInput.current) === null || _a === void 0 ? void 0 : _a.focus();
            });
            _this.loadItems();
        };
        _this.search = function (event) {
            var searchString = event.target.value.toLowerCase();
            _this.loadItems(searchString);
        };
        _this.loadItems = function (searchString) {
            if (searchString === void 0) { searchString = null; }
            _this.setState({ loading: true });
            _this.props.getItems(searchString).then(function (items) {
                _this.setState({ items: items, loading: false });
            });
        };
        _this.hidePopupAndRefocus = function () {
            var _a, _b, _c;
            document.removeEventListener('keydown', _this.handleKeydown);
            (_a = _this.overlayPanel.current) === null || _a === void 0 ? void 0 : _a.hide();
            (_c = (_b = _this.buttonContainer.current) === null || _b === void 0 ? void 0 : _b.querySelector('button')) === null || _c === void 0 ? void 0 : _c.focus();
        };
        _this.select = function (item) {
            _this.props.onChange(item);
            _this.hidePopupAndRefocus();
            // trigger component update
            _this.forceUpdate();
        };
        _this.getItemElement = function (index) {
            var _a;
            return (_a = _this.gridContainer.current) === null || _a === void 0 ? void 0 : _a.querySelector("[data-item-index=\"".concat(index, "\"]"));
        };
        _this.handleKeydown = function (event) {
            var _a, _b, _c, _d, _e, _f;
            var navKeys = ['Enter', 'ArrowRight', 'ArrowLeft', 'ArrowUp', 'ArrowDown', 'PageDown', 'PageUp'];
            var activeElement = document.activeElement;
            if (event.code === 'Escape') {
                event.preventDefault();
                event.stopPropagation();
                _this.hidePopupAndRefocus();
            }
            else if (activeElement === ((_a = _this.searchInput) === null || _a === void 0 ? void 0 : _a.current)) {
                if (event.code === 'ArrowDown') {
                    event.preventDefault();
                    (_b = _this.getItemElement(0)) === null || _b === void 0 ? void 0 : _b.focus();
                }
                else if (event.code === 'Enter' && _this.state.items.length === 1) {
                    event.preventDefault();
                    _this.select(_this.state.items[0]);
                }
            }
            else if (((_c = document.activeElement) === null || _c === void 0 ? void 0 : _c.getAttribute('data-item-index')) && navKeys.includes(event.code)) {
                var itemIndex = parseInt(activeElement === null || activeElement === void 0 ? void 0 : activeElement.getAttribute('data-item-index'), 10);
                event.preventDefault(); // Prevent scrolling, etc.
                if (event.code === 'Enter') {
                    _this.select(_this.state.items[itemIndex]);
                    return;
                }
                else if (event.code === 'ArrowRight') {
                    itemIndex += 1;
                }
                else if (event.code === 'ArrowLeft') {
                    itemIndex -= 1;
                }
                else if (event.code === 'ArrowDown') {
                    itemIndex += GRID_COLS;
                }
                else if (event.code === 'ArrowUp') {
                    if (itemIndex < GRID_COLS) {
                        (_e = (_d = _this.searchInput) === null || _d === void 0 ? void 0 : _d.current) === null || _e === void 0 ? void 0 : _e.focus();
                        return;
                    }
                    itemIndex -= GRID_COLS;
                }
                else if (event.code === 'PageDown') {
                    itemIndex += PAGE_SIZE;
                }
                else if (event.code === 'PageUp') {
                    itemIndex -= PAGE_SIZE;
                }
                if (itemIndex < 0) {
                    itemIndex = 0;
                }
                else if (itemIndex >= _this.state.items.length) {
                    itemIndex = _this.state.items.length - 1;
                }
                (_f = _this.getItemElement(itemIndex)) === null || _f === void 0 ? void 0 : _f.focus();
            }
        };
        _this.state = { items: [], loading: true };
        _this.buttonContainer = React.createRef();
        _this.overlayPanel = React.createRef();
        _this.searchInput = React.createRef();
        _this.gridContainer = React.createRef();
        return _this;
    }
    SelectGrid.prototype.componentDidMount = function () {
        var _this = this;
        this.props.getItems(null).then(function (items) {
            _this.setState({ items: items, loading: false });
        });
    };
    SelectGrid.prototype.componentWillUnmount = function () {
        document.removeEventListener('keydown', this.handleKeydown);
    };
    SelectGrid.prototype.render = function () {
        var _this = this;
        var ItemTemplate = this.props.itemTemplate;
        var TriggerTemplate = this.props.triggerTemplate;
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { className: "sd-input sd-input--grid-select", ref: this.buttonContainer, "aria-label": this.props.label, key: this.props.label },
                React.createElement("label", { className: "sd-input__label" }, this.props.label),
                React.createElement(TriggerTemplate, { onClick: this.mountPopup })),
            React.createElement(overlaypanel_1.OverlayPanel, { onHide: function () {
                    var _a, _b;
                    document.removeEventListener('keydown', _this.handleKeydown);
                    (_b = (_a = _this.buttonContainer.current) === null || _a === void 0 ? void 0 : _a.querySelector('button')) === null || _b === void 0 ? void 0 : _b.focus();
                }, ref: this.overlayPanel, dismissable: true, className: "select-grid__overlay-panel", appendTo: document.body },
                React.createElement("div", { className: "select-grid__panel" },
                    React.createElement("div", { className: "select-grid__header" },
                        React.createElement("div", { className: "sd-searchbar sd-searchbar--boxed" },
                            React.createElement("label", { className: "sd-searchbar__icon" }),
                            React.createElement("input", { className: "sd-searchbar__input", placeholder: this.props.filterPlaceholder || 'Search...', type: "text", onChange: this.search, ref: this.searchInput }))),
                    React.createElement("div", { className: "select-grid__body", ref: this.gridContainer },
                        this.state.loading && React.createElement(Loader_1.Loader, { overlay: this.state.loading }),
                        this.state.items.map(function (item, index) { return (React.createElement("div", { key: _this.htmlId + item.label, "data-item-index": index, className: "flex-grid__item select-grid__item sd-padding-y--3", tabIndex: 0, role: "button", "aria-label": item.name, onClick: function () { return _this.select(item); } },
                            React.createElement(ItemTemplate, { key: item.value, item: item }))); }))))));
    };
    return SelectGrid;
}(React.PureComponent));
exports.SelectGrid = SelectGrid;
