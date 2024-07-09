import * as React from 'react';

import { ReactNav, ReactDefault } from '../../js/react';
import { ButtonGroup, Button, NavButton, Dropdown, IllustrationButton } from '../../../app-typescript/index';

import {
    Switch,
    Route,
} from "react-router-dom";

import InputsDoc from './Inputs';
import AutocompleteDoc from './Autocomplete';
import SelectsDoc from './Selects';
import ButtonsDoc from './Buttons';
import LabelsDoc from './Labels';
import ButtonGroupsDoc from './ButtonGroups';
import BadgesDoc from './Badges';
import AlertDoc from './Alerts';
import AvatarDoc from './Avatar';
import IconButtonDoc from './IconButtons';
import IconLabelDoc from './IconLabels';
import TooltipDoc from './Tooltips';
import DatePickerDoc from './DatePicker';
import TimePickerDoc from './TimePicker';
import SwitchDoc from './Switch';
import RadioGroupDoc from './RadioGroup';
import CheckboxsDoc from './Checkboxs';
import TabsDoc from './Tabs';
import LeftNavigationsDoc from './LeftNavigations';
import QuickNavBarDoc from './QuickNavigationBar';
import NavButtonsDoc from './NavButtons';
import IconFontDoc from './IconFont';
import BigIconFontDoc from './BigIconFont';
import SubNavDoc from './SubNav';
import DropdownDoc from './Dropdowns';
import ToastsDoc from './Toasts';
import TagDoc from './Tags';
import EmptyStateDoc from './EmptyStates';
import GridListDoc from './GridList';
import GridItemDoc from './GridItem';
import ModalDoc from './Modal';
import CarouselDoc from './Carousel';
import ContentDividerDoc from './ContentDivider';
import ToggleboxDocs from './Togglebox';
import ListItemsDoc from './ListItems';
import PanelDoc from './Panel';
import SelectGridDocs from './SelectGrid';
import IconPickerDocs from "./IconPicker";
import SimpleListDoc from "./SimpleList";
import BoxedListDoc from "./BoxedList";
import TableListDoc from "./TableList";
import ContentListDoc from "./ContentList";
import HeadingDoc from "./Heading";
import TextDoc from "./Text";
import ContainerDoc from './Container';
import DropZoneDoc from './DropZone';
import CreateButtonDoc from './CreateButton';
import TagInputDocs from './TagInputDocs';
import DragHandleDocs from './DragHandleDocs';

import * as Playgrounds from '../playgrounds/react-playgrounds/Index';
import { SelectWithTemplateDocs } from './SelectWithTemplate';
import { MultiselectDocs } from './MultiSelect';
import { TreeSelectDocs } from './TreeSelect';
import { TreeMenuDocs } from './TreeMenu';
import DurationInputDoc from './DurationInput';
import { WithPaginationDocs } from './WithPaginationDocs';
import { PopoverDoc } from './Popover';
import { MenuDocs } from './Menu';
import { WithSizeObserverDocs } from './WithSizeObserver';
import { ResizablePanelsDoc } from './ResizablePanels';
import { IllustrationButtonDoc } from './IllustrationButton';

// Utilities
import { SpacingUtilitiesDoc } from './utilities/SpacingUtilities';
import { TextUtilitiesDoc } from './utilities/TextUtilities';
import { ShadowUtilitiesDoc } from './utilities/ShadowUtilities';
import { PositionUtilitiesDoc } from './utilities/PositionUtilities';
import { OverflowUtilitiesDoc } from './utilities/OverflowUtilities';
import { DisplayUtilitiesDoc } from './utilities/DisplayUtilities';
import { FlexAndGridUtilitiesDoc } from './utilities/FlexAndGridUtilities';
import { BorderRadiusUtilitiesDoc } from './utilities/BorderRadiusUtilities';
import { BorderUtilitiesDoc } from './utilities/BorderUtilities';
import { OpacityUtilitiesDoc } from './utilities/OpacityUtilities';
import { ObjectFitUtilitiesDoc } from './utilities/ObjectFitUtilities';
import { ObjectPositionUtilitiesDoc } from './utilities/ObjectPositionUtilities';


interface IPages {
    [group: string]: {
        name: string;
        items: {
            [urlId: string]: {
                name: string;
                component: React.ComponentType<any>;
            }
        };
    };
}

const pages: IPages = {
    basicComponents: {
        name: 'Basic Components',
        items: {
            'buttons': {
                name: 'Buttons',
                component: ButtonsDoc,
            },
            'icon-buttons': {
                name: 'Icon Buttons',
                component: IconButtonDoc,
            },
            'button-groups': {
                name: 'Button Group & Divider',
                component: ButtonGroupsDoc,
            },
            'labels': {
                name: 'Labels',
                component: LabelsDoc,
            },
            'icon-labels': {
                name: 'Icon Labels',
                component: IconLabelDoc,
            },
            'badges': {
                name: 'Badges',
                component: BadgesDoc,
            },
            'alerts': {
                name: 'Alerts',
                component: AlertDoc,
            },
            'avatar': {
                name: 'Avatar',
                component: AvatarDoc,
            },
            'tooltips': {
                name: 'Tooltips',
                component: TooltipDoc,
            },
            'tags': {
                name: 'Tags',
                component: TagDoc,
            },
            'dropdowns': {
                name: 'Dropdowns',
                component: DropdownDoc,
            },
            'nav-buttons': {
                name: 'Nav buttons',
                component: NavButtonsDoc,
            },
            'toast': {
                name: 'Toasts',
                component: ToastsDoc,
            },
            'popover': {
                name: 'Popover',
                component: PopoverDoc,
            },
            'modal': {
                name: 'Modal',
                component: ModalDoc,
            },
            'carousel': {
                name: 'Carousel',
                component: CarouselDoc,
            },
            'menu': {
                name: 'Menu',
                component: MenuDocs,
            },
            'treemenu': {
                name: 'TreeMenu',
                component: TreeMenuDocs,
            },
            "drag-handle": {
                name: 'Drag handle',
                component: DragHandleDocs,
            },
            "illustration-button": {
                name: 'Illustration Button',
                component: IllustrationButtonDoc,
            }
        }
    },
    navigationComponents: {
        name: "Navigation",
        items: {
            'tab': {
                name: 'Tabs',
                component: TabsDoc,
            },
            'left-navigation': {
                name: 'Left navigation',
                component: LeftNavigationsDoc,
            },
            'quick-navigation-bar': {
                name: 'Quick navigation bar',
                component: QuickNavBarDoc,
            },
            'sub-navigation': {
                name: 'Sub navigation bar',
                component: SubNavDoc,
            },
        }
    },
    containerComponents: {
        name: "Containers",
        items: {
            'container': {
                name: 'Container component',
                component: ContainerDoc,
            },
            'empty-states': {
                name: 'Empty states',
                component: EmptyStateDoc,
            },
            'grid-item': {
                name: 'Grid Item',
                component: GridItemDoc,
            },
            'panel': {
                name: 'Panel',
                component: PanelDoc,
            },
        }
    },
    layoutComponents: {
        name: "Layout",
        items: {
            'content-divider': {
                name: 'Content Divider',
                component: ContentDividerDoc,
            },
            "togglebox": {
                name: "Togglebox",
                component: ToggleboxDocs,
            },
            "resizable-panels": {
                name: "Resizable panels",
                component: ResizablePanelsDoc,
            },
        }
    },
    textComponents: {
        name: "Text",
        items: {
            'heading': {
                name: 'Heading component',
                component: HeadingDoc,
            },
            'text': {
                name: 'Text component',
                component: TextDoc,
            },
        }
    },
    listComponents: {
        name: "Lists",
        items: {
            'grid-list': {
                name: 'Grid List',
                component: GridListDoc,
            },
            'list-items': {
                name: 'List items',
                component: ListItemsDoc,
            },
            'simple-list': {
                name: 'Simple list',
                component: SimpleListDoc,
            },
            'boxed-list': {
                name: 'Boxed list',
                component: BoxedListDoc,
            },
            'table-list': {
                name: 'Table list',
                component: TableListDoc,
            },
            'content-list': {
                name: 'Content list',
                component: ContentListDoc,
            },
            'with-pagination': {
                name: 'With pagination',
                component: WithPaginationDocs,
            },
        }
    },
    formComponents: {
        name: "Form Components",
        items: {
            'inputs': {
                name: 'Inputs',
                component: InputsDoc,
            },
            'autocomplete': {
                name: 'Autocomplete',
                component: AutocompleteDoc,
            },
            'tag-input': {
                name: 'Tag Input',
                component: TagInputDocs,
            },
            'select': {
                name: 'Select',
                component: SelectsDoc,
            },
            'select-grid': {
                name: 'Select Grid',
                component: SelectGridDocs,
            },
            'select-with-template': {
                name: 'Select with template',
                component: SelectWithTemplateDocs,
            },
            'with-size-observer': {
                name: 'With size observer',
                component: WithSizeObserverDocs,
            },
            'multiselect': {
                name: 'MultiSelect',
                component: MultiselectDocs,
            },
            'treeselect': {
                name: 'TreeSelect',
                component: TreeSelectDocs,
            },
            'date-picker': {
                name: 'Date Picker',
                component: DatePickerDoc,
            },
            'time-picker': {
                name: 'Time Picker',
                component: TimePickerDoc,
            },
            'icon-picker': {
                name: 'Icon Picker',
                component: IconPickerDocs,
            },
            'duration-input': {
                name: 'Duration Input',
                component: DurationInputDoc,
            },
            'switch': {
                name: 'Switch',
                component: SwitchDoc,
            },
            'radiogroup': {
                name: 'RadioGroup',
                component: RadioGroupDoc,
            },
            'checkbox': {
                name: 'Checkbox',
                component: CheckboxsDoc,
            },
            'dropzone': {
                name: 'DropZone',
                component: DropZoneDoc,
            },
            'create-button': {
                name: 'CreateButton',
                component: CreateButtonDoc,
            },
        }
    },
    generalComponents: {
        name: "General",
        items: {
            'icon-font': {
                name: 'Icon font',
                component: IconFontDoc,
            },
            'big-icon-font': {
                name: 'Big icon font',
                component: BigIconFontDoc,
            }
        }
    },
    utilityClasses: {
        name: "Utility classes",
        items: {
            'border-utilities': {
                name: 'Border',
                component: BorderUtilitiesDoc,
            },
            'border-radius-utilities': {
                name: 'Border Radius',
                component: BorderRadiusUtilitiesDoc,
            },
            'display-utilities': {
                name: 'Display',
                component: DisplayUtilitiesDoc,
            },
            'flex-and-grid-utilities': {
                name: 'Flex & Grid',
                component: FlexAndGridUtilitiesDoc,
            },
            'object-fit-utilities': {
                name: 'Object Fit',
                component: ObjectFitUtilitiesDoc,
            },
            'object-position-utilities': {
                name: 'Object Position',
                component: ObjectPositionUtilitiesDoc,
            },
            'opacity-utilities': {
                name: 'Opacity',
                component: OpacityUtilitiesDoc,
            },
            'overflow-utilities': {
                name: 'Overflow',
                component: OverflowUtilitiesDoc,
            },
            'position-utilities': {
                name: 'Position',
                component: PositionUtilitiesDoc,
            },
            'shadow-utilities': {
                name: 'Shadow',
                component: ShadowUtilitiesDoc,
            },
            'spacing-utilities': {
                name: 'Spacing',
                component: SpacingUtilitiesDoc,
            },
            'text-utilities': {
                name: 'Text',
                component: TextUtilitiesDoc,
            },
        }
    }
}

const routes: Array<{path: string; component: React.ComponentType<any>}> = [];

for (const group of Object.values(pages)) {
    for (const [id, value] of Object.entries(group.items)) {
        routes.push({path: `/components/${id}`, component: value.component});
    }
}

class ReactDoc extends React.Component {
    render() {
        return (
            <React.Fragment>
                <ReactNav pages={pages} />
                <main className="docs-page__content docs-page__container-fluid">
                    <Switch>
                        {
                            routes.map((route) => <Route path={route.path} component={route.component} />)
                        }

                        <Route path="/" component={ReactDefault} />
                    </Switch>
                </main>
            </React.Fragment>
        )
    }
}

interface IProps {
    playgrounds: any;
}

class ReactPlayground extends React.Component<IProps> {
    render() {
        return (
            <Switch>
                <Route path="/playgrounds/react/:id" render={(props) => parsePlayground(props, this.props.playgrounds)} />
            </Switch>
        )
    }
}

interface IProps {
    theme?: string;
}
interface IState {
    theme: 'dark-ui' | 'light-ui' | string;
}
class ReactThemePicker extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            theme: 'light-ui',
        }
        this.handleTheme = this.handleTheme.bind(this);
    }

    handleTheme(newTheme: string) {
        document.body.setAttribute('data-theme', newTheme);

        this.setState({
            theme: newTheme
        })
    }

    checkTheme(theme: string) {
        return this.state.theme === theme;
    }

    render() {
        return (
            <Dropdown
                items={[
                    {
                        type: 'group', label: 'Chose a theme', items: [
                            'divider',
                            { label: 'Light', icon: 'adjust', active: this.checkTheme('light-ui'), onSelect: () => this.handleTheme('light-ui') },
                            { label: 'Dark', icon: 'adjust', active: this.checkTheme('dark-ui'), onSelect: () => this.handleTheme('dark-ui') },
                            { label: 'Accessible Light', active: this.checkTheme('accessible-light-ui'), icon: 'adjust', onSelect: () => this.handleTheme('accessible-light-ui') },
                        ]
                    },
                ]}>
                <button className="docs-page__header-button" aria-label="Change theme" onClick={() => false}>
                    <i className="icon-adjust"></i>
                </button>
            </Dropdown>
        );
    }
}

const parsePlayground = ({ match }, playgrounds) => {
    const Component = Playgrounds[playgrounds[match.params.id].component];
    return (
        <Component />
    );
};

export { ReactDoc, ReactPlayground, ReactThemePicker };

