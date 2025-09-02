"use strict";
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
exports.TabPanel = exports.TabContent = exports.Tabs = exports.TabLabel = void 0;
var React = __importStar(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var TabLabel = function (_a) {
    var label = _a.label;
    return React.createElement("span", null, label);
};
exports.TabLabel = TabLabel;
var Tabs = function (props) {
    var _a;
    var initiallySelectedIndex = props.initiallySelectedIndex, size = props.size, theme = props.theme, ariaLabel = props.ariaLabel, children = props.children, onClick = props.onClick;
    var _b = React.useState(initiallySelectedIndex !== null && initiallySelectedIndex !== void 0 ? initiallySelectedIndex : 0), index = _b[0], setIndex = _b[1];
    function handleSelected(i) {
        setIndex(i);
        handleClick(i);
    }
    var handleClick = function (i) {
        onClick(i);
    };
    var classes = (0, classnames_1.default)('sd-nav-tabs', (_a = {},
        _a["sd-nav-tabs--".concat(size)] = size && size !== undefined,
        _a['sd-nav-tabs--ui-dark'] = theme === 'dark',
        _a));
    return (React.createElement("div", { className: classes, role: "tablist", "aria-label": ariaLabel ? ariaLabel : 'tabs', "data-test-id": props['data-test-id'] }, children.map(function (item, i) { return (React.createElement("button", { key: i, "aria-controls": 'tabpanel-' + i, className: 'sd-nav-tabs__tab' + (index === i ? ' sd-nav-tabs__tab--active' : ''), onClick: function () { return handleSelected(i); }, role: "tab", "aria-selected": index === i ? 'true' : 'false' }, item)); })));
};
exports.Tabs = Tabs;
var TabContent = function (_a) {
    var theme = _a.theme, children = _a.children, activePanel = _a.activePanel;
    return (React.createElement("div", { className: 'sd-nav-tabs__content' + (theme === 'dark' ? ' sd-nav-tabs__content--ui-dark' : '') }, children.map(function (panel, i) {
        return panel.props.indexValue === activePanel && (React.createElement("div", { className: "sd-nav-tabs__pane", role: "tabpanel", "aria-labelledby": 'tab-' + activePanel, key: i }, panel));
    })));
};
exports.TabContent = TabContent;
var TabPanel = function (_a) {
    var children = _a.children, indexValue = _a.indexValue;
    return React.createElement(React.Fragment, { key: indexValue }, children);
};
exports.TabPanel = TabPanel;
