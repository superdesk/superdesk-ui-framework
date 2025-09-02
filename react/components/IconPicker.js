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
exports.IconPicker = void 0;
var React = __importStar(require("react"));
var Button_1 = require("./Button");
var Icon_1 = require("./Icon");
var SelectGrid_1 = require("./SelectGrid");
var IconPicker = /** @class */ (function (_super) {
    __extends(IconPicker, _super);
    function IconPicker(props) {
        var _this = _super.call(this, props) || this;
        _this.getItems = function (searchString) {
            return new Promise(function (resolve) {
                var icons = __spreadArray([], _this.state.icons, true);
                if (searchString) {
                    icons = icons.filter(function (icon) {
                        return icon.value.toLowerCase().includes(searchString) ||
                            icon.label.toLowerCase().includes(searchString);
                    });
                }
                resolve(icons);
            });
        };
        _this.onChange = function (item) {
            _this.props.onChange(item.value);
        };
        _this.triggerTemplate = function (props) { return (React.createElement(Button_1.Button, { icon: _this.props.value, text: _this.props.value, onClick: function (e) {
                props.onClick(e);
            }, iconOnly: true })); };
        _this.itemTemplate = function (_a) {
            var item = _a.item;
            return item && (React.createElement(React.Fragment, null,
                React.createElement(Icon_1.Icon, { name: item.value }),
                React.createElement("span", { className: "sd-text--normal sd-padding-t--1" }, item.label)));
        };
        _this.state = { icons: [] };
        return _this;
    }
    IconPicker.prototype.componentDidMount = function () {
        var translateFunction = this.props.translateFunction
            ? this.props.translateFunction
            : function (text) { return text; };
        this.setState({
            icons: getIcons(translateFunction),
        });
    };
    IconPicker.prototype.render = function () {
        var _a, _b;
        return (React.createElement(SelectGrid_1.SelectGrid, { label: (_a = this.props.label) !== null && _a !== void 0 ? _a : 'Icon', filterPlaceholder: (_b = this.props.filterPlaceholder) !== null && _b !== void 0 ? _b : 'Search...', getItems: this.getItems, onChange: this.onChange, itemTemplate: this.itemTemplate, triggerTemplate: this.triggerTemplate }));
    };
    return IconPicker;
}(React.PureComponent));
exports.IconPicker = IconPicker;
var getIcons = function (translateFunction) {
    var translatedIconNameMap = {
        'add-gallery': 'Add Gallery',
        'add-image': 'Add Image',
        adjust: 'Adjust',
        'align-center': 'Align Center',
        'align-justify': 'Align Justify',
        'align-left': 'Align Left',
        'align-right': 'Align Right',
        amp: 'AMP',
        analytics: 'Analytics',
        archive: 'Archive',
        'arrow-left': 'Arrow Left',
        'arrow-right': 'Arrow Right',
        'arrow-small': 'Arrow Small',
        ascending: 'Ascending',
        assign: 'Assign',
        attachment: 'Attachment',
        'attachment-large': 'Attachment Large',
        audio: 'Audio',
        'backward-thin': 'Backward Thin',
        'ban-circle': 'Ban Circle',
        bell: 'Bell',
        bold: 'Bold',
        broadcast: 'Broadcast',
        'broadcast-create': 'Broadcast Create',
        business: 'Business',
        calendar: 'Calendar',
        'calendar-list': 'Calendar List',
        'chevron-down-thin': 'Chevron Down Thin',
        'chevron-left-thin': 'Chevron Left Thin',
        'chevron-right-thin': 'Chevron Right Thin',
        'chevron-up-thin': 'Chevron Up Thin',
        'clear-all': 'Clear All',
        'clear-format': 'Clear Format',
        'close-small': 'Close Small',
        'close-thick': 'Close Thick',
        code: 'Code',
        collapse: 'Collapse',
        comment: 'Comment',
        composite: 'Composite',
        copy: 'Copy',
        crop: 'Crop',
        cut: 'Cut',
        descending: 'Descending',
        dots: 'Dots',
        'dots-vertical': 'Dots Vertical',
        download: 'Download',
        'download-alt': 'Download Alternate',
        'edit-line': 'Edit Line',
        envelope: 'Envelope',
        event: 'Event',
        'exclamation-sign': 'Exclamation Sign',
        expand: 'Expand',
        'expand-thin': 'Expand Thin',
        external: 'External',
        'eye-open': 'Eye Open',
        facebook: 'Facebook',
        'facebook-circle': 'Facebook Circle',
        fast_forward: 'Fast Forward',
        fast_rewind: 'Fast Rewind',
        'fetch-as': 'Fetch As',
        file: 'File',
        'filter-large': 'Filter Large',
        'flip-horizontal': 'Flip Horizontal',
        'flip-vertical': 'Flip Vertical',
        'folder-close': 'Folder Close',
        'folder-open': 'Folder Open',
        font: 'Font',
        'forward-thin': 'Forward Thin',
        fullscreen: 'Fullscreen',
        globe: 'Globe',
        graphic: 'Graphic',
        'grid-view': 'Grid View',
        'grid-view-large': 'Grid View Large',
        'heading-1': 'Heading 1',
        'heading-2': 'Heading 2',
        'heading-3': 'Heading 3',
        'heading-4': 'Heading 4',
        'heading-5': 'Heading 5',
        'heading-6': 'Heading 6',
        heart: 'Heart',
        'help-large': 'Help Large',
        'highlight-package': 'Highlight Package',
        home: 'Home',
        'indent-left': 'Indent Left',
        'indent-right': 'Indent Right',
        'info-large': 'Info Large',
        'info-sign': 'Info Sign',
        ingest: 'Ingest',
        instagram: 'Instagram',
        italic: 'Italic',
        'kanban-view': 'Kanban View',
        kill: 'Kill',
        link: 'Link',
        'linked-in': 'LinkedIn',
        'linked-in-circle': 'LinkedIn Circle',
        'list-alt': 'List Alternate',
        'list-menu': 'List Menu',
        'list-plus': 'List Plus',
        'list-view': 'List View',
        lock: 'Lock',
        'map-marker': 'Map Marker',
        'minus-sign': 'Minus Sign',
        'minus-small': 'Minus Small',
        mobile: 'Mobile',
        move: 'Move',
        'multi-star': 'Multi Start',
        multiedit: 'Multi Edit',
        'new-doc': 'New Document',
        ok: 'Okay',
        'ordered-list': 'Ordered List',
        'package-create': 'Package Create',
        'package-plus': 'Package Plus',
        paragraph: 'Paragraph',
        paste: 'Paste',
        pause: 'Pause',
        paywall: 'Paywall',
        pencil: 'Pencil',
        phone: 'Phone',
        photo: 'Photo',
        pick: 'Pick',
        picture: 'Picture',
        pin: 'Pin',
        play: 'Play',
        'plus-large': 'Plus Large',
        'plus-sign': 'Plus Sign',
        'plus-small': 'Plus Small',
        post: 'Post',
        preformatted: 'Preformatted',
        'preview-mode': 'Preview Mode',
        print: 'Print',
        'question-sign': 'Question Sign',
        quote: 'Quote',
        random: 'Random',
        recurring: 'Recurring',
        redo: 'Redo',
        refresh: 'Refresh',
        'remove-sign': 'Remove Sign',
        repeat: 'Repeat',
        retweet: 'Retweet',
        revert: 'Revert',
        'rotate-left': 'Rotate Left',
        'rotate-right': 'Rotate Right',
        search: 'Search',
        settings: 'Settings',
        'share-alt': 'Share Alternate',
        signal: 'Signal',
        skip_next: 'Skip Next',
        skip_previous: 'Skip Previous',
        slideshow: 'Slideshow',
        star: 'Star',
        'star-empty': 'Star Empty',
        stop: 'Stop',
        stream: 'Stream',
        strikethrough: 'Strikethrough',
        subscript: 'Subscript',
        suggestion: 'Suggestion',
        superscript: 'Superscript',
        switches: 'Switches',
        table: 'Table',
        'takes-package': 'Takes Package',
        tasks: 'Tasks',
        text: 'Text',
        'text-format': 'Text Format',
        th: 'Table Header',
        'th-large': 'Table Header Large',
        'th-list': 'Table Header List',
        time: 'Time',
        'to-lowercase': 'To Lowercase',
        'to-uppercase': 'To Uppercase',
        trash: 'Trash',
        twitter: 'Twitter',
        'twitter-circle': 'Twitter Circle',
        underline: 'Underline',
        undo: 'Undo',
        unlocked: 'Unlocked',
        'unordered-list': 'Unordered List',
        unspike: 'Unspike',
        upload: 'Upload',
        user: 'User',
        video: 'Video',
        'warning-sign': 'Warning Sign',
        'zoom-in': 'Zoom In',
        'zoom-out': 'Zoom Out',
    };
    return Object.keys(translatedIconNameMap)
        .sort()
        .map(function (icon) { return ({
        value: icon,
        label: translateFunction(translatedIconNameMap[icon]),
    }); });
};
