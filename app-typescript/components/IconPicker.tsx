import * as React from 'react';
// @ts-ignore
import * as iconFont from '../../app/styles/_icon-font.scss';
import { Button } from './Button';
import { Icon } from './Icon';
import { IItem, SelectGrid } from "./SelectGrid";

interface IProps {
    label?: string;
    filterPlaceholder?: string;
    translateFunction?: (text: string) => string;
    value: string;
    onChange(icon: string): void;
}

interface IState {
    icons: Array<IItem>;
}

export class IconPicker extends React.PureComponent<IProps, IState> {

    constructor(props: IProps) {
        super(props);
        this.state = { icons: [] };
    }

    componentDidMount() {
        const translateFunction = this.props.translateFunction ?
            this.props.translateFunction : (text: string): string => text;
        this.setState({
            icons: getIcons(translateFunction),
        });
    }

    getItems = (searchString: string | null): Promise<Array<IItem>> => {
        return new Promise((resolve) => {
            let icons = [...this.state.icons];

            if (searchString) {
                icons = icons.filter(
                    (icon) => (
                        icon.value.toLowerCase().includes(searchString) ||
                        icon.label.toLowerCase().includes(searchString)
                    ),
                );
            }
            resolve(icons);
        });
    }

    onChange = (item: IItem) => {
        this.props.onChange(item.value);
    }

    triggerTemplate = (props: any) => <Button
        icon={this.props.value}
        text={this.props.value}
        onClick={(e) => { props.onClick(e); }}
        iconOnly={true} />

    itemTemplate = ({ item }: { item: IItem | null }) => item ?
        (<>
            <Icon name={item.value} />
            <span className="sd-text__normal sd-padding-t--1">
                {item.label}
            </span>
        </>) : null

    render() {
        return (
            <SelectGrid
                label={this.props.label || "Icon"}
                filterPlaceholder={this.props.filterPlaceholder || "Search..."}
                getItems={this.getItems}
                onChange={this.onChange}
                itemTemplate={this.itemTemplate}
                triggerTemplate={this.triggerTemplate}
            />
        );
    }
}

const getIcons = (translateFunction: (text: string) => string): Array<IItem> => {
    const translatedIconNameMap: any = {
        'add-gallery': 'Add Gallery',
        'add-image': 'Add Image',
        'adjust': 'Adjust',
        'align-center': 'Align Center',
        'align-justify': 'Align Justify',
        'align-left': 'Align Left',
        'align-right': 'Align Right',
        'amp': 'AMP',
        'analytics': 'Analytics',
        'archive': 'Archive',
        'arrow-left': 'Arrow Left',
        'arrow-right': 'Arrow Right',
        'arrow-small': 'Arrow Small',
        'ascending': 'Ascending',
        'assign': 'Assign',
        'attachment': 'Attachment',
        'attachment-large': 'Attachment Large',
        'audio': 'Audio',
        'backward-thin': 'Backward Thin',
        'ban-circle': 'Ban Circle',
        'bell': 'Bell',
        'bold': 'Bold',
        'broadcast': 'Broadcast',
        'broadcast-create': 'Broadcast Create',
        'business': 'Business',
        'calendar': 'Calendar',
        'calendar-list': 'Calendar List',
        'chevron-down-thin': 'Chevron Down Thin',
        'chevron-left-thin': 'Chevron Left Thin',
        'chevron-right-thin': 'Chevron Right Thin',
        'chevron-up-thin': 'Chevron Up Thin',
        'clear-all': 'Clear All',
        'clear-format': 'Clear Format',
        'close-small': 'Close Small',
        'close-thick': 'Close Thick',
        'code': 'Code',
        'collapse': 'Collapse',
        'comment': 'Comment',
        'composite': 'Composite',
        'copy': 'Copy',
        'crop': 'Crop',
        'cut': 'Cut',
        'descending': 'Descending',
        'dots': 'Dots',
        'dots-vertical': 'Dots Vertical',
        'download': 'Download',
        'download-alt': 'Download Alternate',
        'edit-line': 'Edit Line',
        'envelope': 'Envelope',
        'event': 'Event',
        'exclamation-sign': 'Exclamation Sign',
        'expand': 'Expand',
        'expand-thin': 'Expand Thin',
        'external': 'External',
        'eye-open': 'Eye Open',
        'facebook': 'Facebook',
        'facebook-circle': 'Facebook Circle',
        'fast_forward': 'Fast Forward',
        'fast_rewind': 'Fast Rewind',
        'fetch-as': 'Fetch As',
        'file': 'File',
        'filter-large': 'Filter Large',
        'flip-horizontal': 'Flip Horizontal',
        'flip-vertical': 'Flip Vertical',
        'folder-close': 'Folder Close',
        'folder-open': 'Folder Open',
        'font': 'Font',
        'forward-thin': 'Forward Thin',
        'fullscreen': 'Fullscreen',
        'globe': 'Globe',
        'graphic': 'Graphic',
        'grid-view': 'Grid View',
        'grid-view-large': 'Grid View Large',
        'heading-1': 'Heading 1',
        'heading-2': 'Heading 2',
        'heading-3': 'Heading 3',
        'heading-4': 'Heading 4',
        'heading-5': 'Heading 5',
        'heading-6': 'Heading 6',
        'heart': 'Heart',
        'help-large': 'Help Large',
        'highlight-package': 'Highlight Package',
        'home': 'Home',
        'indent-left': 'Indent Left',
        'indent-right': 'Indent Right',
        'info-large': 'Info Large',
        'info-sign': 'Info Sign',
        'ingest': 'Ingest',
        'instagram': 'Instagram',
        'italic': 'Italic',
        'kanban-view': 'Kanban View',
        'kill': 'Kill',
        'link': 'Link',
        'linked-in': 'LinkedIn',
        'linked-in-circle': 'LinkedIn Circle',
        'list-alt': 'List Alternate',
        'list-menu': 'List Menu',
        'list-plus': 'List Plus',
        'list-view': 'List View',
        'lock': 'Lock',
        'map-marker': 'Map Marker',
        'minus-sign': 'Minus Sign',
        'minus-small': 'Minus Small',
        'mobile': 'Mobile',
        'move': 'Move',
        'multi-star': 'Multi Start',
        'multiedit': 'Multi Edit',
        'new-doc': 'New Document',
        'ok': 'Okay',
        'ordered-list': 'Ordered List',
        'package-create': 'Package Create',
        'package-plus': 'Package Plus',
        'paragraph': 'Paragraph',
        'paste': 'Paste',
        'pause': 'Pause',
        'paywall': 'Paywall',
        'pencil': 'Pencil',
        'phone': 'Phone',
        'photo': 'Photo',
        'pick': 'Pick',
        'picture': 'Picture',
        'pin': 'Pin',
        'play': 'Play',
        'plus-large': 'Plus Large',
        'plus-sign': 'Plus Sign',
        'plus-small': 'Plus Small',
        'post': 'Post',
        'preformatted': 'Preformatted',
        'preview-mode': 'Preview Mode',
        'print': 'Print',
        'question-sign': 'Question Sign',
        'quote': 'Quote',
        'random': 'Random',
        'recurring': 'Recurring',
        'redo': 'Redo',
        'refresh': 'Refresh',
        'remove-sign': 'Remove Sign',
        'repeat': 'Repeat',
        'retweet': 'Retweet',
        'revert': 'Revert',
        'rotate-left': 'Rotate Left',
        'rotate-right': 'Rotate Right',
        'search': 'Search',
        'settings': 'Settings',
        'share-alt': 'Share Alternate',
        'signal': 'Signal',
        'skip_next': 'Skip Next',
        'skip_previous': 'Skip Previous',
        'slideshow': 'Slideshow',
        'star': 'Star',
        'star-empty': 'Star Empty',
        'stop': 'Stop',
        'stream': 'Stream',
        'strikethrough': 'Strikethrough',
        'subscript': 'Subscript',
        'suggestion': 'Suggestion',
        'superscript': 'Superscript',
        'switches': 'Switches',
        'table': 'Table',
        'takes-package': 'Takes Package',
        'tasks': 'Tasks',
        'text': 'Text',
        'text-format': 'Text Format',
        'th': 'Table Header',
        'th-large': 'Table Header Large',
        'th-list': 'Table Header List',
        'time': 'Time',
        'to-lowercase': 'To Lowercase',
        'to-uppercase': 'To Uppercase',
        'trash': 'Trash',
        'twitter': 'Twitter',
        'twitter-circle': 'Twitter Circle',
        'underline': 'Underline',
        'undo': 'Undo',
        'unlocked': 'Unlocked',
        'unordered-list': 'Unordered List',
        'unspike': 'Unspike',
        'upload': 'Upload',
        'user': 'User',
        'video': 'Video',
        'warning-sign': 'Warning Sign',
        'zoom-in': 'Zoom In',
        'zoom-out': 'Zoom Out',
    };

    return iconFont.icon
        .split(', ')
        .sort()
        .map((icon: string) => ({
            value: icon,
            label: translatedIconNameMap[icon] ? translateFunction(translatedIconNameMap[icon]) : icon,
        }));
};
