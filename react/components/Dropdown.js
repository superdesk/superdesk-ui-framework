"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dropdown = void 0;
var React = __importStar(require("react"));
var ReactDOM = __importStar(require("react-dom"));
var core_1 = require("@popperjs/core");
var react_id_generator_1 = require("react-id-generator");
var zIndex_1 = require("./../zIndex");
var DROPDOWN_ID_CONTAINER = 'sd-dropdown-constainer';
var Dropdown = function (_a) {
    var items = _a.items, header = _a.header, footer = _a.footer, children = _a.children, align = _a.align, onChange = _a.onChange, maxHeight = _a.maxHeight;
    var _b = React.useState(-1), zIndex = _b[0], setZIndex = _b[1];
    if (zIndex === -1) {
        setZIndex((0, zIndex_1.getNextZIndex)());
    }
    var _c = React.useState(false), open = _c[0], setOpen = _c[1];
    var _d = React.useState(false), change = _d[0], setChange = _d[1];
    var menuID = (0, react_id_generator_1.useId)()[0];
    var ref = React.useRef(null);
    var buttonRef = React.useRef(null);
    var headerElements = header === null || header === void 0 ? void 0 : header.map(function (el, index) {
        return each(el, index);
    });
    var maxHeightStyle = maxHeight ? { maxHeight: maxHeight } : {};
    var dropdownElements = items.map(function (el, index) {
        return each(el, index);
    });
    var footerElements = footer === null || footer === void 0 ? void 0 : footer.map(function (el, index) {
        return each(el, index);
    });
    React.useEffect(function () {
        var existingElement = document.getElementById(DROPDOWN_ID_CONTAINER);
        if (!existingElement) {
            var el = document.createElement('div');
            el.id = DROPDOWN_ID_CONTAINER;
            el.style.position = 'absolute';
            el.style.top = '0';
            el.style.left = '0';
            el.style.width = '1px';
            el.style.height = '1px';
            el.setAttribute('data-test-id', 'dropdown-overlay');
            document.body.appendChild(el);
        }
    }, [change]);
    React.useLayoutEffect(function () {
        if (change) {
            addInPlaceholder();
        }
        setChange(true);
    }, [open]);
    function createAppendMenu() {
        if (header && footer) {
            return (React.createElement("div", { className: "dropdown__menu dropdown__menu--has-head-foot", id: menuID, role: "menu", ref: ref, style: { zIndex: zIndex } },
                React.createElement("ul", { className: "dropdown__menu-header" }, headerElements),
                React.createElement("ul", { className: "dropdown__menu-body" }, dropdownElements),
                React.createElement("ul", { className: "dropdown__menu-footer dropdown__menu-footer--has-list " }, footerElements)));
        }
        else if (header) {
            return (React.createElement("div", { className: "dropdown__menu dropdown__menu--has-head-foot", id: menuID, role: "menu", ref: ref, style: { zIndex: zIndex } },
                React.createElement("ul", { className: "dropdown__menu-header" }, headerElements),
                React.createElement("ul", { className: "dropdown__menu-body" }, dropdownElements)));
        }
        else if (footer) {
            return (React.createElement("div", { className: "dropdown__menu dropdown__menu--has-head-foot", id: menuID, role: "menu", ref: ref, style: { zIndex: zIndex } },
                React.createElement("ul", { className: "dropdown__menu-body" }, dropdownElements),
                React.createElement("ul", { className: "dropdown__menu-footer dropdown__menu-footer--has-list " }, footerElements)));
        }
        else {
            return (React.createElement("ul", { className: "dropdown__menu ", id: menuID, role: "menu", ref: ref, style: __assign({ zIndex: zIndex, overflowY: 'auto' }, maxHeightStyle) }, dropdownElements));
        }
    }
    function toggleDisplay() {
        if (!open) {
            var menuRef_1;
            setOpen(true);
            setTimeout(function () {
                menuRef_1 = ref.current;
                var toggleRef = buttonRef.current;
                if (toggleRef && menuRef_1) {
                    (0, core_1.createPopper)(toggleRef, menuRef_1, {
                        placement: checkAlign() ? 'bottom-end' : 'bottom-start',
                        strategy: 'fixed',
                    });
                    menuRef_1.style.display = 'block';
                }
            }, 0);
            document.addEventListener('click', closeMenu);
            setTimeout(function () {
                menuRef_1.getElementsByTagName('button')[0].focus();
            });
        }
        else {
            setOpen(false);
        }
    }
    function closeMenu() {
        document.removeEventListener('click', closeMenu);
        setOpen(false);
    }
    function checkAlign() {
        if (align === 'right') {
            return true;
        }
        else {
            return false;
        }
    }
    function addInPlaceholder() {
        var placeholder = document.getElementById(DROPDOWN_ID_CONTAINER);
        var menu = createAppendMenu();
        if (open) {
            return ReactDOM.render(menu, placeholder);
        }
        else {
            if (placeholder) {
                ReactDOM.unmountComponentAtNode(placeholder);
            }
        }
    }
    function each(item, index) {
        if (item['type'] === 'submenu') {
            var submenuItems_1 = [];
            item['items'].forEach(function (el, key) {
                submenuItems_1.push(each(el, key));
            });
            return (React.createElement(DropdownItemWithSubmenu, { key: index, index: index, item: item, menuID: menuID, subMenuItems: submenuItems_1, onChange: onChange }));
        }
        else if (item['type'] === 'group') {
            var groupItems_1 = [];
            item['items'].forEach(function (el, key) {
                groupItems_1.push(each(el, key));
            });
            return (React.createElement(React.Fragment, { key: index },
                React.createElement("li", null,
                    React.createElement("div", { className: "dropdown__menu-label" }, item['label'])),
                groupItems_1));
        }
        else if (item === 'divider') {
            return React.createElement("li", { className: "dropdown__menu-divider", key: index });
        }
        else {
            return (React.createElement(DropdownItem, { key: index, label: item['label'], icon: item['icon'], active: item['active'], onSelect: item['onSelect'], onChange: onChange }));
        }
    }
    return (React.createElement("div", { className: 'dropdown ' + (open ? 'open' : '') }, typeof children === 'object' ? (React.isValidElement(children) ? (React.createElement("div", { ref: buttonRef, style: { display: 'content' } }, (function () {
        var attrs = {
            className: children.props.className
                ? children.props.className + ' dropdown__toggle dropdown-toggle'
                : 'dropdown__toggle dropdown-toggle',
            'aria-haspopup': 'menu',
            'aria-expanded': open,
            onClick: toggleDisplay,
            ref: buttonRef,
        };
        return React.cloneElement(children, attrs);
    })())) : null) : (React.createElement("button", { style: { whiteSpace: 'nowrap' }, ref: buttonRef, className: " dropdown__toggle dropdown-toggle", "aria-haspopup": "menu", tabIndex: 0, "aria-expanded": open, onClick: toggleDisplay },
        children,
        React.createElement("span", { className: "dropdown__caret" })))));
};
exports.Dropdown = Dropdown;
var DropdownItem = function (_a) {
    var label = _a.label, icon = _a.icon, active = _a.active, onSelect = _a.onSelect, onChange = _a.onChange;
    return (React.createElement("li", { role: "none", className: active ? 'dropdown__menu-item--active' : '' },
        React.createElement("button", { tabIndex: 0, role: "menuitem", onClick: function () {
                setTimeout(function () {
                    onSelect();
                });
                if (onChange) {
                    onChange();
                }
            } },
            React.createElement("i", { className: icon ? 'icon-' + icon : '' }),
            label)));
};
var DropdownItemWithSubmenu = function (_a) {
    var index = _a.index, item = _a.item, menuID = _a.menuID, subMenuItems = _a.subMenuItems, onChange = _a.onChange;
    var _b = React.useState(undefined), open = _b[0], setOpen = _b[1];
    var refButtonSubMenu = React.useRef(null);
    var refSubMenu = React.useRef(null);
    var placeholder = document.getElementById(menuID);
    React.useEffect(function () {
        var subMenuRef = refSubMenu.current;
        var subToggleRef = refButtonSubMenu.current;
        if (open === true) {
            placeholder === null || placeholder === void 0 ? void 0 : placeholder.appendChild(subMenuRef);
            subMenuRef.style.display = 'block';
        }
        else if (open === false) {
            placeholder === null || placeholder === void 0 ? void 0 : placeholder.removeChild(subMenuRef);
            subMenuRef.style.display = 'none';
        }
        if (subMenuRef && subToggleRef) {
            (0, core_1.createPopper)(subToggleRef, subMenuRef, {
                placement: 'right-start',
            });
        }
    }, [open]);
    return (React.createElement("li", { key: index, ref: refButtonSubMenu },
        React.createElement("div", { className: "dropdown", onMouseLeave: function () { return setOpen(false); } },
            React.createElement("button", { className: "dropdown__toggle dropdown-toggle", "aria-haspopup": "menu", tabIndex: 0, onClick: function () {
                    if (item.onSelect) {
                        setTimeout(function () {
                            item.onSelect();
                        });
                    }
                    if (onChange) {
                        onChange();
                    }
                }, onMouseOver: function () { return setOpen(true); } },
                item['icon'] ? React.createElement("i", { className: 'icon-' + item['icon'] }) : null,
                item['label']),
            React.createElement("ul", { role: "menu", ref: refSubMenu, style: { display: 'none' }, className: "dropdown__menu" }, subMenuItems))));
};
