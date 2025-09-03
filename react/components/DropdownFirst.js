'use strict';
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
exports.DropdownFooter =
    exports.DropdownBody =
    exports.DropdownHeader =
    exports.DropdownLabel =
    exports.DropdownDivider =
    exports.DropdownItem =
    exports.DropdownFirst =
        void 0;
var React = __importStar(require('react'));
var classnames_1 = __importDefault(require('classnames'));
var DropdownFirst = function (_a) {
    var _b, _c;
    var name = _a.name,
        align = _a.align,
        side = _a.side,
        level = _a.level,
        icon = _a.icon,
        headerFooter = _a.headerFooter,
        navDropdown = _a.navDropdown,
        children = _a.children;
    var _d = React.useState(false),
        open = _d[0],
        setOpen = _d[1];
    var _e = React.useState(false),
        height = _e[0],
        setHeight = _e[1];
    var ref = React.useRef(null);
    var inDebounce;
    function calculate() {
        var number = getDimensions(ref.current);
        var second = screen.height;
        var heightEl = heightElement(ref.current);
        if (second - number.bottom < heightEl + 100 && number.top > heightEl) {
            setHeight(true);
        } else {
            setHeight(false);
        }
    }
    var debounce = function (delay) {
        return function () {
            var context = children;
            clearTimeout(inDebounce);
            inDebounce = window.setTimeout(function () {
                return calculate.apply(context);
            }, delay);
        };
    };
    React.useLayoutEffect(
        function () {
            var element = document.getElementsByClassName('dropdown')[0];
            var parentElement = getScrollParent(element);
            parentElement.parentNode.addEventListener('scroll', debounce(50));
            calculate();
            return function () {
                parentElement.removeEventListener('scroll', debounce(50));
                clearTimeout(inDebounce);
            };
        },
        [open],
    );
    var classes = (0, classnames_1.default)(
        'dropdown',
        ((_b = {}),
        (_b['open'] = open),
        (_b['dropdown--align-right'] = align === 'right'),
        (_b['dropdown--drop'.concat(side)] = side),
        (_b['dropdown--dropup'] = height),
        _b),
    );
    function isOpen() {
        if (!open) {
            setOpen(true);
            document.addEventListener('click', closeMenu);
        } else {
            setOpen(false);
        }
    }
    function closeMenu() {
        document.removeEventListener('click', closeMenu);
        setOpen(false);
    }
    function getDimensions(el) {
        var rect = el.getBoundingClientRect();
        return {
            top: rect.top,
            bottom: rect.bottom,
        };
    }
    function heightElement(el) {
        return el.clientHeight;
    }
    // scrollable
    function getScrollParent(node) {
        if (node.scrollHeight > node.clientHeight) {
            return node;
        } else {
            if (node.parentElement !== null) {
                var newElement = node.parentElement;
                return getScrollParent(newElement);
            }
        }
    }
    if (headerFooter) {
        return React.createElement(
            'div',
            {className: classes},
            React.createElement(
                'button',
                {
                    className: navDropdown
                        ? 'dropdown__toggle navbtn dropdown-toggle'
                        : 'dropdown__toggle nav-btn dropdown-toggle',
                    onClick: isOpen,
                },
                icon
                    ? React.createElement('i', {className: 'icon-' + icon})
                    : React.createElement(
                          React.Fragment,
                          null,
                          name,
                          React.createElement('span', {className: 'dropdown__caret'}),
                      ),
            ),
            React.createElement('div', {className: 'dropdown__menu dropdown__menu--has-head-foot', ref: ref}, children),
        );
    } else {
        if (level) {
            var classesMenu = (0, classnames_1.default)(
                'dropdown__menu',
                ((_c = {}), (_c['dropdown__menu--submenu-left'] = align === 'left'), _c),
            );
            return React.createElement(
                'li',
                null,
                React.createElement(
                    'div',
                    {className: classes},
                    React.createElement(
                        'button',
                        {className: 'dropdown__toggle dropdown-toggle'},
                        icon && level ? React.createElement('i', {className: icon ? 'icon-' + icon : ''}) : null,
                        name,
                    ),
                    React.createElement('ul', {className: classesMenu, ref: ref, role: 'menu'}, children),
                ),
            );
        } else {
            return React.createElement(
                'div',
                {className: classes},
                React.createElement(
                    'button',
                    {
                        className: navDropdown
                            ? 'dropdown__toggle navbtn dropdown-toggle'
                            : 'dropdown__toggle nav-btn dropdown-toggle',
                        onClick: isOpen,
                    },
                    icon
                        ? React.createElement('i', {className: 'icon-' + icon})
                        : React.createElement(
                              React.Fragment,
                              null,
                              name,
                              React.createElement('span', {className: 'dropdown__caret'}),
                          ),
                ),
                React.createElement('ul', {className: 'dropdown__menu', ref: ref}, children),
            );
        }
    }
};
exports.DropdownFirst = DropdownFirst;
var DropdownItem = function (_a) {
    var text = _a.text,
        icon = _a.icon,
        noLink = _a.noLink,
        onSelect = _a.onSelect;
    if (noLink) {
        return React.createElement('li', {className: 'dropdown__menu-item--no-link'}, text);
    } else {
        return React.createElement(
            'li',
            null,
            React.createElement(
                'button',
                {onSelect: onSelect},
                React.createElement('i', {className: icon ? 'icon-' + icon : ''}),
                text,
            ),
        );
    }
};
exports.DropdownItem = DropdownItem;
var DropdownDivider = function (_a) {
    return React.createElement('li', {className: 'dropdown__menu-divider'});
};
exports.DropdownDivider = DropdownDivider;
var DropdownLabel = function (_a) {
    var text = _a.text;
    return React.createElement('li', null, React.createElement('div', {className: 'dropdown__menu-label'}, text));
};
exports.DropdownLabel = DropdownLabel;
var DropdownHeader = function (_a) {
    var title = _a.title,
        children = _a.children;
    return React.createElement(
        'ul',
        {className: 'dropdown__menu-header'},
        React.createElement(exports.DropdownLabel, {text: title}),
        children,
    );
};
exports.DropdownHeader = DropdownHeader;
var DropdownBody = function (_a) {
    var title = _a.title,
        children = _a.children;
    return React.createElement(
        'ul',
        {className: 'dropdown__menu-body'},
        React.createElement(exports.DropdownLabel, {text: title}),
        children,
    );
};
exports.DropdownBody = DropdownBody;
var DropdownFooter = function (_a) {
    var title = _a.title,
        children = _a.children;
    return React.createElement(
        'ul',
        {className: 'dropdown__menu-footer dropdown__menu-footer--has-list'},
        React.createElement(exports.DropdownLabel, {text: title}),
        children,
    );
};
exports.DropdownFooter = DropdownFooter;
exports.DropdownFirst.Item = exports.DropdownItem;
exports.DropdownFirst.Divider = exports.DropdownDivider;
exports.DropdownFirst.Label = exports.DropdownLabel;
exports.DropdownFirst.Header = exports.DropdownHeader;
exports.DropdownFirst.Body = exports.DropdownBody;
exports.DropdownFirst.Footer = exports.DropdownFooter;
