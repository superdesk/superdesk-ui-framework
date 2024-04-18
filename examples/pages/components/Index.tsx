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
import {WithPaginationDocs} from './WithPaginationDocs';
import { PopoverDoc } from './Popover';
import { MenuDocs } from './Menu';
import {WithSizeObserverDocs} from './WithSizeObserver';
import {ResizablePanelsDoc} from './ResizablePanels';
import { IllustrationButtonDoc } from './IllustrationButton';

const pages = {
    basicComponents: {
        name: 'Basic Components',
        items: {
            'buttons': {
                name: 'Buttons',
            },
            'icon-buttons': {
                name: 'Icon Buttons'
            },
            'button-groups': {
                name: 'Button Group & Divider'
            },
            'labels': {
                name: 'Labels',
            },
            'icon-labels': {
                name: 'Icon Labels'
            },
            'badges': {
                name: 'Badges',
            },
            'alerts': {
                name: 'Alerts'
            },
            'avatar': {
                name: 'Avatar',
            },
            'tooltips': {
                name: 'Tooltips'
            },
            'tags': {
                name: 'Tags'
            },
            'dropdowns': {
                name: 'Dropdowns'
            },
            'nav-buttons': {
                name: 'Nav buttons'
            },
            'toast': {
                name: 'Toasts'
            },
            'popover': {
                name: 'Popover'
            },
            'modal': {
                name: 'Modal'
            },
            'carousel': {
                name: 'Carousel'
            },
            'menu': {
                name: 'Menu',
            },
            'treemenu': {
                name: 'TreeMenu',
            },
            "drag-handle": {
                name: 'Drag handle'
            },
            "illustration-button" : {
                name: 'Illustration Button'
            }
        }
    },
    navigationComponents: {
        name: "Navigation",
        items: {
            'tab': {
                name: 'Tabs'
            },
            'left-navigation': {
                name: 'Left navigation'
            },
            'Quick-navigation-bar': {
                name: 'Quick navigation bar'
            },
            'sub-navigation': {
                name: 'Sub navigation bar'
            },
        }
    },
    containerComponents: {
        name: "Containers",
        items: {
            'container': {
                name: 'Container component'
            },
            'empty-states': {
                name: 'Empty states'
            },
            'grid-item': {
                name: 'Grid Item'
            },
            'panel': {
                name: 'Panel'
            },
        }
    },
    layoutComponents: {
        name: "Layout",
        items: {
            'content-divider': {
                name: 'Content Divider'
            },
            "togglebox": {
                name: "Togglebox"
            },
            "resizable-panels": {
                name: "Resizable panels"
            },
        }
    },
    textComponents: {
        name: "Text",
        items: {
            'heading': {
                name: 'Heading component'
            },
            'text': {
                name: 'Text component'
            },
        }
    },
    listComponents: {
        name: "Lists",
        items: {
            'grid-list': {
                name: 'Grid List'
            },
            'list-items': {
                name: 'List items'
            },
            'simple-list': {
                name: 'Simple list'
            },
            'boxed-list': {
                name: 'Boxed list'
            },
            'table-list': {
                name: 'Table list'
            },
            'content-list': {
                name: 'Content list'
            },
            'with-pagination': {
                name: 'With pagination'
            },
        }
    },
    formComponents: {
        name: "Form Components",
        items: {
            'inputs': {
                name: 'Inputs',
            },
            'autocomplete': {
                name: 'Autocomplete',
            },
            'tag-input': {
                name: 'Tag Input',
            },
            'select': {
                name: 'Select',
            },
            'select-grid': {
                name: 'Select Grid',
            },
            'select-with-template': {
                name: 'Select with template',
            },
            'with-size-observer': {
                name: 'With size observer',
            },
            'multiselect': {
                name: 'MultiSelect',
            },
            'treeselect': {
                name: 'TreeSelect',
            },
            'date-picker': {
                name: 'Date Picker',
            },
            'time-picker': {
                name: 'Time Picker',
            },
            'icon-picker': {
                name: 'Icon Picker',
            },
            'duration-input': {
                name: 'Duration Input',
            },
            'switch': {
                name: 'Switch'
            },
            'radiogroup': {
                name: 'RadioGroup'
            },
            'checkbox': {
                name: 'Checkbox'
            },
            'dropzone': {
                name: 'DropZone'
            },
            'create-button': {
                name: 'CreateButton'
            },
        }
    },
    generalComponents: {
        name: "General",
        items: {
            'icon-font': {
                name: 'Icon font',
            },
            'big-icon-font': {
                name: 'Big icon font'
            }
        }
    }
}
interface IProps {
    theme?: string;
}
interface IState {
    theme: 'dark-ui' | 'light-ui' | string;
}

class ReactDoc extends React.Component<IProps, IState> {
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
            <React.Fragment>
                <ReactNav pages={pages} />
                <main className="docs-page__content docs-page__container-fluid">
                    <div className="docs-page__fla-button-container">
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
                            <button className="docs-page__fla-button" aria-label="Change theme" onClick={() => false}>
                                <i className="icon-adjust"></i>
                            </button>
                        </Dropdown>
                    </div>
                    <Switch>
                        <Route path="/components/buttons" component={ButtonsDoc} />
                        <Route path="/components/icon-buttons" component={IconButtonDoc} />
                        <Route path="/components/button-groups" component={ButtonGroupsDoc} />
                        <Route path="/components/labels" component={LabelsDoc} />
                        <Route path="/components/icon-labels" component={IconLabelDoc} />
                        <Route path="/components/badges" component={BadgesDoc} />
                        <Route path="/components/alerts" component={AlertDoc} />
                        <Route path="/components/avatar" component={AvatarDoc} />
                        <Route path="/components/tooltips" component={TooltipDoc} />
                        <Route path="/components/tags" component={TagDoc} />
                        <Route path="/components/inputs" component={InputsDoc} />
                        <Route path="/components/autocomplete" component={AutocompleteDoc} />
                        <Route path="/components/select" component={SelectsDoc} />
                        <Route path="/components/select-with-template" component={SelectWithTemplateDocs} />
                        <Route path="/components/with-size-observer" component={WithSizeObserverDocs} />
                        <Route path="/components/multiselect" component={MultiselectDocs} />
                        <Route path="/components/treeselect" component={TreeSelectDocs} />
                        <Route path="/components/treemenu" component={TreeMenuDocs} />
                        <Route path="/components/duration-input" component={DurationInputDoc} />
                        <Route path="/components/with-pagination" component={WithPaginationDocs} />
                        <Route path="/components/popover" component={PopoverDoc} />
                        <Route path="/components/date-picker" component={DatePickerDoc} />
                        <Route path="/components/time-picker" component={TimePickerDoc} />
                        <Route path="/components/switch" component={SwitchDoc} />
                        <Route path="/components/radiogroup" component={RadioGroupDoc} />
                        <Route path="/components/checkbox" component={CheckboxsDoc} />
                        <Route path="/components/tab" component={TabsDoc} />
                        <Route path="/components/left-navigation" component={LeftNavigationsDoc} />
                        <Route path="/components/Quick-navigation-bar" component={QuickNavBarDoc} />
                        <Route path="/components/nav-buttons" component={NavButtonsDoc} />
                        <Route path="/components/icon-font" component={IconFontDoc} />
                        <Route path="/components/big-icon-font" component={BigIconFontDoc} />
                        <Route path="/components/sub-navigation" component={SubNavDoc} />
                        <Route path="/components/dropdowns" component={DropdownDoc} />
                        <Route path="/components/toast" component={ToastsDoc} />
                        <Route path="/components/drag-handle" component={DragHandleDocs} />
                        <Route path="/components/tag-input" component={TagInputDocs} />
                        <Route path="/components/empty-states" component={EmptyStateDoc} />
                        <Route path="/components/grid-list" component={GridListDoc} />
                        <Route path="/components/grid-item" component={GridItemDoc} />
                        <Route path="/components/modal" component={ModalDoc} />
                        <Route path="/components/carousel" component={CarouselDoc} />
                        <Route path="/components/content-divider" component={ContentDividerDoc} />
                        <Route path="/components/menu" component={MenuDocs} />
                        <Route path="/components/togglebox" component={ToggleboxDocs} />
                        <Route path="/components/list-items" component={ListItemsDoc} />
                        <Route path="/components/panel" component={PanelDoc} />
                        <Route path="/components/select-grid" component={SelectGridDocs} />
                        <Route path="/components/icon-picker" component={IconPickerDocs} />
                        <Route path="/components/simple-list" component={SimpleListDoc} />
                        <Route path="/components/boxed-list" component={BoxedListDoc} />
                        <Route path="/components/table-list" component={TableListDoc} />
                        <Route path="/components/content-list" component={ContentListDoc} />
                        <Route path="/components/heading" component={HeadingDoc} />
                        <Route path="/components/text" component={TextDoc} />
                        <Route path="/components/container" component={ContainerDoc} />
                        <Route path="/components/dropzone" component={DropZoneDoc} />
                        <Route path="/components/create-button" component={CreateButtonDoc} />
                        <Route path="/components/resizable-panels" component={ResizablePanelsDoc} />
                        <Route path="/components/illustration-button" component={IllustrationButtonDoc} />
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

const parsePlayground = ({ match }, playgrounds) => {
    const Component = Playgrounds[playgrounds[match.params.id].component];
    return (
        <Component />
    );
};

export { ReactDoc, ReactPlayground };

