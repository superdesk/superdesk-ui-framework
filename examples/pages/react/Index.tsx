import * as React from 'react';

import { ReactNav, ReactDefault } from '../../js/react';
import { ButtonGroup, Button, NavButton, Dropdown } from '../../../app-typescript/index';

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
import TagInputDocs from './TagInputDocs'

import * as Playgrounds from '../playgrounds/react-playgrounds/Index';
import { SelectWithTemplateDocs } from './SelectWithTemplate';
import { MultiselectDocs } from './MultiSelect';
import { TreeSelectDocs } from './TreeSelect';
import DurationInputDoc from './DurationInput';
import {WithPaginationDocs} from './WithPaginationDocs';
import { PopoverDoc } from './Popover';
import { MenuDocs } from './Menu';
import {WithSizeObserverDocs} from './WithSizeObserver';
import {ResizablePanelsDoc} from './ResizablePanels';

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
                        <Route path="/react/buttons" component={ButtonsDoc} />
                        <Route path="/react/icon-buttons" component={IconButtonDoc} />
                        <Route path="/react/button-groups" component={ButtonGroupsDoc} />
                        <Route path="/react/labels" component={LabelsDoc} />
                        <Route path="/react/icon-labels" component={IconLabelDoc} />
                        <Route path="/react/badges" component={BadgesDoc} />
                        <Route path="/react/alerts" component={AlertDoc} />
                        <Route path="/react/avatar" component={AvatarDoc} />
                        <Route path="/react/tooltips" component={TooltipDoc} />
                        <Route path="/react/tags" component={TagDoc} />
                        <Route path="/react/inputs" component={InputsDoc} />
                        <Route path="/react/autocomplete" component={AutocompleteDoc} />
                        <Route path="/react/select" component={SelectsDoc} />
                        <Route path="/react/select-with-template" component={SelectWithTemplateDocs} />
                        <Route path="/react/with-size-observer" component={WithSizeObserverDocs} />
                        <Route path="/react/multiselect" component={MultiselectDocs} />
                        <Route path="/react/treeselect" component={TreeSelectDocs} />
                        <Route path="/react/duration-input" component={DurationInputDoc} />
                        <Route path="/react/with-pagination" component={WithPaginationDocs} />
                        <Route path="/react/popover" component={PopoverDoc} />
                        <Route path="/react/date-picker" component={DatePickerDoc} />
                        <Route path="/react/time-picker" component={TimePickerDoc} />
                        <Route path="/react/switch" component={SwitchDoc} />
                        <Route path="/react/radiogroup" component={RadioGroupDoc} />
                        <Route path="/react/checkbox" component={CheckboxsDoc} />
                        <Route path="/react/tab" component={TabsDoc} />
                        <Route path="/react/left-navigation" component={LeftNavigationsDoc} />
                        <Route path="/react/Quick-navigation-bar" component={QuickNavBarDoc} />
                        <Route path="/react/nav-buttons" component={NavButtonsDoc} />
                        <Route path="/react/icon-font" component={IconFontDoc} />
                        <Route path="/react/big-icon-font" component={BigIconFontDoc} />
                        <Route path="/react/sub-navigation" component={SubNavDoc} />
                        <Route path="/react/dropdowns" component={DropdownDoc} />
                        <Route path="/react/toast" component={ToastsDoc} />
                        <Route path="/react/tag-input" component={TagInputDocs} />
                        <Route path="/react/empty-states" component={EmptyStateDoc} />
                        <Route path="/react/grid-list" component={GridListDoc} />
                        <Route path="/react/grid-item" component={GridItemDoc} />
                        <Route path="/react/modal" component={ModalDoc} />
                        <Route path="/react/carousel" component={CarouselDoc} />
                        <Route path="/react/content-divider" component={ContentDividerDoc} />
                        <Route path="/react/menu" component={MenuDocs} />
                        <Route path="/react/togglebox" component={ToggleboxDocs} />
                        <Route path="/react/list-items" component={ListItemsDoc} />
                        <Route path="/react/panel" component={PanelDoc} />
                        <Route path="/react/select-grid" component={SelectGridDocs} />
                        <Route path="/react/icon-picker" component={IconPickerDocs} />
                        <Route path="/react/simple-list" component={SimpleListDoc} />
                        <Route path="/react/boxed-list" component={BoxedListDoc} />
                        <Route path="/react/table-list" component={TableListDoc} />
                        <Route path="/react/content-list" component={ContentListDoc} />
                        <Route path="/react/heading" component={HeadingDoc} />
                        <Route path="/react/text" component={TextDoc} />
                        <Route path="/react/container" component={ContainerDoc} />
                        <Route path="/react/dropzone" component={DropZoneDoc} />
                        <Route path="/react/create-button" component={CreateButtonDoc} />
                        <Route path="/react/resizable-panels" component={ResizablePanelsDoc} />
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

