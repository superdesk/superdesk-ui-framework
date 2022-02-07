import * as React from 'react';
import * as Components from './components/Index';
import { ButtonGroup, Button, NavButton, SubNav, Dropdown, CheckButtonGroup, RadioButton, Input, Select, Option, Label, Icon, IconButton, Checkbox, GridList, Badge } from '../../../../app-typescript/index';
import * as GridElements from '../../../../app-typescript/components/GridItem';

import dummy_items from '../dummy-data/items';


interface IProps {
    children?: React.ReactNode;
}

interface IState {
    theme: 'dark' | 'light';
    itemType: string;
    dropDownState: string;
    openPreview: boolean;
    openFilter: boolean;
    itemSelected1: boolean;
    itemSelected2: boolean;
    itemSelected3: boolean;
    value1: boolean;
}

export class SamsPlayground extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            theme: 'light',
            itemType: 'itemtype01',
            dropDownState: '',
            openPreview: false,
            openFilter: false,
            itemSelected1: false,
            itemSelected2: false,
            itemSelected3: false,
            value1: false,
        }
        this.handleFilter = this.handleFilter.bind(this);
        this.handlePreview = this.handlePreview.bind(this);
        this.handleTheme = this.handleTheme.bind(this);
    }

    handleFilter() {
        this.setState((state) => ({
            openFilter: !state.openFilter,
        }));
    }

    handlePreview() {
        this.setState((state) => ({
            openPreview: !state.openPreview,
        }));
    }

    handleTheme() {
        if (this.state.theme === 'light') {
            this.setState({
                theme: 'dark'
            })
        } else {
            this.setState({
                theme: 'light'
            })
        }
    }

    changeStatus(item: any, status: string) {
        if (item.status.includes(status)) {
            item.status.splice(item.status.indexOf(status), 1);
        } else {
            item.status.push(status);
        }
    }

    render() {
        return (
            <Components.Layout header='SAMS playground' theme={this.state.theme}>
                <Components.SidebarMenu
                    items={[
                        { icon: 'dashboard', size: 'big' },
                        { icon: 'view', size: 'big' },
                        { icon: 'marked-star', size: 'big' },
                        { icon: 'spike', size: 'big' },
                        { icon: 'personal', size: 'big' },
                        { icon: 'global-search', size: 'big' },
                        { icon: 'picture', size: 'big', active: true }]} />

                <Components.LayoutContainer>
                    <Components.HeaderPanel>
                        <SubNav theme={this.state.theme} zIndex={2}>
                            <ButtonGroup align='inline'>
                                <Dropdown
                                    items={[
                                        {
                                            type: 'group', label: 'Archives', items: [
                                                'divider',
                                                { label: 'All archives', onSelect: () => this.setState({ dropDownState: 'All archives' }) },
                                                { label: 'Media archive', onSelect: () => this.setState({ dropDownState: 'Media archive' }) },
                                                { label: 'File archive', onSelect: () => this.setState({ dropDownState: 'File archive' }) },
                                                { label: 'AP images', onSelect: () => this.setState({ dropDownState: 'AP archive' }) },
                                            ]
                                        }]}>
                                    <NavButton text={this.state.dropDownState ? this.state.dropDownState : 'All Archives'} onClick={() => false} />
                                </Dropdown>
                            </ButtonGroup>
                            <Components.SearchBar placeholder='Search media'></Components.SearchBar>

                            <ButtonGroup align='right'>
                                <NavButton icon='dots-vertical' onClick={() => false} />
                            </ButtonGroup>
                        </SubNav>
                        <SubNav theme={this.state.theme} zIndex={1}>
                            <ButtonGroup align='inline'>
                                <NavButton icon='filter-large' onClick={this.handleFilter} />
                            </ButtonGroup>
                            <CheckButtonGroup padded>
                                <RadioButton value={this.state.itemType} onChange={(value) => this.setState({ itemType: value })} options={[
                                    { value: 'itemtype01', label: 'All item types' },
                                    { value: 'itemtype02', label: 'Images only' },
                                    { value: 'itemtype03', label: 'Videos only' },
                                    { value: 'itemtype04', label: 'Documents only' }]} />
                            </CheckButtonGroup>
                            <ButtonGroup align='right'>
                                <NavButton icon='adjust' onClick={this.handleTheme} />
                                <NavButton icon='th-list' onClick={() => false} />
                            </ButtonGroup>
                        </SubNav>
                    </Components.HeaderPanel>
                    {/* TOOLBAR HEADER */}

                    <Components.LeftPanel open={this.state.openFilter}>
                        <Components.Panel side='left' background='grey'>
                            <Components.PanelHeader handleFilterParent={this.handleFilter} title='Advanced filters' />
                            <Components.PanelContent>
                                <Components.PanelContentBlock>
                                    <div className="form__group">
                                        <div className="form__item">
                                            <Input label='Title'
                                                error='This is error message'
                                                inlineLabel={false}
                                                disabled={false}
                                                invalid={false}
                                                onChange={(value) => { }} />
                                        </div>
                                    </div>
                                    <div className="form__group">
                                        <div className="form__item">
                                            <Select label='Source'
                                                value='Select ingest source...'
                                                error='This is error message'
                                                inlineLabel={false}
                                                disabled={false}
                                                invalid={false}
                                                onChange={(value) => { }}>
                                                <Option value="option-1">Select ingest source...</Option>
                                                <Option value="option-2">Associated Press</Option>
                                                <Option value="option-3">Reuters</Option>
                                            </Select>
                                        </div>
                                    </div>

                                    <div className="form__group">
                                        <div className="form__item">
                                            <Input label='Keyword'
                                                error='This is error message'
                                                inlineLabel={false}
                                                disabled={false}
                                                invalid={false}
                                                onChange={(value) => { }} />
                                        </div>
                                    </div>

                                    <div className="form__group">
                                        <div className="form__item">
                                            <Select label='Usage right'
                                                value='--- Not selected ---'
                                                error='This is error message'
                                                info='Dolor in hendrerit.'
                                                inlineLabel={false}
                                                disabled={false}
                                                invalid={false}
                                                onChange={(value) => { }}>
                                                <Option value="">--- Not selected ---</Option>
                                                <Option value="single">Single usage</Option>
                                                <Option value="time">Time restricted</Option>
                                                <Option value="bananas">Indefinite usage</Option>
                                                <Option value="indefinite">Pears</Option>
                                            </Select>
                                        </div>
                                    </div>
                                </Components.PanelContentBlock>
                            </Components.PanelContent>
                            <Components.PanelFooter>
                                <Button text='Clear' style='hollow' onClick={() => false} />
                                <Button text='Submit' type='primary' onClick={() => false} />
                            </Components.PanelFooter>
                        </Components.Panel>
                    </Components.LeftPanel>
                    {/* FILTER PANEL*/}

                    <Components.MainPanel >

                        <GridList size="small" gap="medium" margin="1">
                            {dummy_items.map((item, index) =>
                                <GridElements.GridItem locked={item.locked} status={item.status} onClick={this.handlePreview} itemtype={item.type} key={index}>
                                    <GridElements.GridItemCheckWrapper>
                                        <Checkbox checked={item.selected} label={{text:''}} onChange={(value) => {
                                            item.selected = value;
                                            this.changeStatus(item, 'selected');
                                        }} />
                                    </GridElements.GridItemCheckWrapper>
                                    <GridElements.GridItemTopActions>
                                        <IconButton icon='fullscreen' ariaValue='More actions' onClick={()=> false} />
                                    </GridElements.GridItemTopActions>
                                    <GridElements.GridItemMedia>
                                        { item.image ? <img src={item.image} alt={item.imageAlt}/> : null }
                                    </GridElements.GridItemMedia>
                                    <GridElements.GridItemContent>
                                        <GridElements.GridItemTime time={item.date} />
                                        <GridElements.GridItemTitle>{item.title}</GridElements.GridItemTitle>
                                        <GridElements.GridItemText>{item.description}</GridElements.GridItemText>
                                    </GridElements.GridItemContent>
                                    <GridElements.GridItemFooter>
                                        <GridElements.GridItemFooterBlock align='left'>
                                            <Icon name={item.type} className='sd-grid-item__type-icn' />
                                            <Badge text={item.urgency} color={item.urgencyColor} />
                                            <Badge text={item.priority} shape='square' color={item.priorityColor} />
                                        </GridElements.GridItemFooterBlock>
                                        <GridElements.GridItemFooterActions>
                                            <Dropdown
                                                align = 'right'
                                                append = {true}
                                                items={[
                                                    {
                                                        type: 'group', label: 'Actions', items: [
                                                            'divider',
                                                            { label: 'Edit', icon: 'pencil', onSelect: () => this.setState({ dropDownState: 'Edit ' }) },
                                                            { label: 'Download', icon: 'download', onSelect: () => this.setState({ dropDownState: 'Download' }) },
                                                            { label: 'Delete', icon: 'trash', onSelect: () => this.setState({ dropDownState: 'Delete' }) },
                                                        ]
                                                    }]}>
                                                <IconButton ariaValue='dropdown-more-options' icon='dots-vertical' onClick={() => false} />
                                            </Dropdown>
                                        </GridElements.GridItemFooterActions>
                                    </GridElements.GridItemFooter>
                                </GridElements.GridItem>
                            )}
                        </GridList>

                    </Components.MainPanel>
                    {/* MAIN CONTENT (Monitoring) */}

                    <Components.RightPanel open={this.state.openPreview}>
                        <Components.Panel side='right'>
                            <Components.PanelHeader title='Item details' handleFilterParent={this.handlePreview} />
                            <Components.PanelContent>
                                <Components.PanelContentBlock flex={true}>
                                    <div className="side-panel__content-block-inner side-panel__content-block-inner--grow">
                                        <p className="sd-text__date-and-author"><time>Created 19.06.2020 by </time> <span className="sd-text__author">Mika Karapet</span></p> 
                                        <p className="sd-text__date-and-author"><time>Updated 3 hours ago by</time> <span className="sd-text__author">John Doe</span></p>
                                    </div>
                                    <div className="side-panel__content-block-inner side-panel__content-block-inner--right">
                                        <Dropdown
                                            align = 'right'
                                            append = {true}
                                            items={[
                                                {
                                                    type: 'group', label: 'Actions', items: [
                                                        'divider',
                                                        { label: 'Edit', icon: 'pencil', onSelect: () => this.setState({ dropDownState: 'Edit ' }) },
                                                        { label: 'Download', icon: 'download', onSelect: () => this.setState({ dropDownState: 'Download' }) },
                                                        { label: 'Delete', icon: 'trash', onSelect: () => this.setState({ dropDownState: 'Delete' }) },
                                                    ]
                                                }]}>
                                            <IconButton ariaValue='dropdown-more-options' icon='dots-vertical' onClick={() => false} />
                                        </Dropdown>
                                    </div>
                                </Components.PanelContentBlock>
                                <Components.PanelContentBlock padding='0' className='side-panel__content-block--image'>
                                    <span className="side-panel__image-actions">
                                        <IconButton ariaValue='button-fullscreen' icon='fullscreen' onClick={() => false} />
                                    </span>
                                    <img src="/d_trump.jpg" alt="test" />
                                </Components.PanelContentBlock>

                                <Components.PanelContentBlock>
                                    <div className="form__row">
                                        <label className="form-label form-label--light">Title</label>
                                        <p className="sd-text__title">Cursus Aenean</p>
                                    </div>
                                    <div className="form__row">
                                        <label className="form-label form-label--light">Description</label>
                                        <p className="sd-text sd-text--medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi leo risus, porta ac consectetur, vestibulum eros.</p>
                                    </div>
                                    <div className="form__row">
                                        <Label text='Public' type='success' style='hollow' size='large' />
                                    </div> 
                                </Components.PanelContentBlock>
                            </Components.PanelContent>
                        </Components.Panel>
                    </Components.RightPanel>
                    {/* PREVIEW PANEL*/}

                    <Components.OverlayPanel />
                    {/* OVERLAY PANEL (Send To) */}
                </Components.LayoutContainer>
            </Components.Layout >
        );
    }
}
