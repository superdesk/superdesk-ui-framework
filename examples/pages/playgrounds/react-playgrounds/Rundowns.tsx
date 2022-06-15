import * as React from 'react';
import * as Components from './components/Index';
import { ButtonGroup, Button, NavButton, SubNav, Dropdown, CheckButtonGroup, RadioGroup, RadioButtonGroup, Input, Select, Option, Label, IconLabel, Icon, IconButton, Checkbox, GridList, Badge, Tooltip, CreateButton, Modal, EmptyState, Container, BoxedList, BoxedListItem, BoxedListContentRow, Text, Heading } from '../../../../app-typescript/index';
import * as Layout from '../../../../app-typescript/components/Layouts';
import * as Form from '../../../../app-typescript/components/Form';
import * as GridElements from '../../../../app-typescript/components/GridItem';


import dummy_items from '../dummy-data/items';
import { ContentList } from '../../../../app-typescript/components/Lists/ContentList';

interface IProps {
    children?: React.ReactNode;
}

interface IState {
    theme: 'dark' | 'light' | string;
    itemType: string;
    dropDownState: string;
    openPreview: boolean;
    openFilter: boolean;
    itemSelected1: boolean;
    itemSelected2: boolean;
    itemSelected3: boolean;
    value1: boolean;

    modalBasic: boolean;
    modalSmall: boolean;
    modalMedium: boolean;
    modalNewTemplate: boolean;
    modalNewShow: boolean;
    modalNewShowSuccess: boolean;
    modalManageTemplate: boolean;
    modalManageShow: boolean;
}

export class Rundowns extends React.Component<IProps, IState> {
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
            modalBasic: false,
            modalSmall: false,
            modalMedium: false,
            modalNewTemplate: false,
            modalNewShow: false,
            modalNewShowSuccess: false,
            modalManageTemplate: false,
            modalManageShow: false,
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

    handleTheme(newTheme: string) {
        this.setState({
            theme: newTheme
        })
    }

    changeStatus(item: any, status: string) {
        if (item.status.includes(status)) {
            item.status.splice(item.status.indexOf(status), 1);
        } else {
            item.status.push(status);
        }
    }

    render() {
        const newShowFooter2=(
            <ButtonGroup align="end">
                <Button text='Cancel' onClick={() => {this.setState({modalNewShowSuccess:false})}}/>
                <Button type='primary' text='yes, Create a Template' onClick={() => {this.setState({modalNewShowSuccess: false}), this.setState({modalNewTemplate:true})}}/>
            </ButtonGroup>
        );
        const newShowFooter=(
            <ButtonGroup align="end">
                <Button text='Cancel' onClick={() => {this.setState({modalNewShow:false})}}/>
                <Button type='primary' text='Save' onClick={() => {this.setState({modalNewShowSuccess: true}), this.setState({modalNewShow:false})}}/>
            </ButtonGroup>
        );
        return (
            <>
            <Components.Layout header='Rundowns' theme={this.state.theme}>
                <Components.SidebarMenu
                    items={[
                        { icon: 'dashboard', size: 'big' },
                        { icon: 'view', size: 'big' },
                        { icon: 'marked-star', size: 'big' },
                        { icon: 'spike', size: 'big' },
                        { icon: 'personal', size: 'big' },
                        { icon: 'global-search', size: 'big' },
                        { icon: 'picture', size: 'big' },
                        { icon: 'rundown', size: 'big', active: true }]} />

                <Components.LayoutContainer>
                    <Components.HeaderPanel>
                        <SubNav zIndex={2}>
                            <Components.SearchBar placeholder='Search media'></Components.SearchBar>
                            <ButtonGroup align='end' spaces='no-space'>
                                <Layout.Panel side='left'></Layout.Panel>
                                <Dropdown
                                    items={[
                                        {
                                            type: 'group', label: 'Settings', items: [
                                                'divider',
                                                { icon: 'switches', label: 'Manage Shows', onSelect: () => this.setState({modalNewTemplate: true}) },
                                                { icon: 'switches', label: 'Manage Templates', onSelect: () => this.setState({modalNewTemplate: true}) },
                                            ]
                                        }]}>
                                    <NavButton icon='settings' onClick={() => false} />
                                </Dropdown>
                                <Dropdown
                                    header={[
                                        {
                                            type: 'group', label: 'Create', items: []
                                        },
                                        {
                                            type: 'submenu', label: 'Rundown', icon: 'plus-sign', items: [
                                                { icon: 'plus-sign', label: 'Rundown', onSelect: () => 1 },
                                            ]
                                        },
                                    ]}
                                    items={[
                                        {
                                            type: 'group', label: 'Recent Templates', items: [
                                                { icon: 'plus-sign', label: 'Marker Daily', onSelect: () => this.setState({ dropDownState: ' ' }) },
                                                { icon: 'plus-sign', label: 'Marker Weekend', onSelect: () => this.setState({ dropDownState: ' ' }) },
                                                { icon: 'plus-sign', label: 'Tabu Daily', onSelect: () => this.setState({ dropDownState: ' ' }) },
                                                { icon: 'plus-sign', label: 'Tabu Specijal', onSelect: () => this.setState({ dropDownState: ' ' }) },
                                            ]
                                        }]}
                                        footer={[
                                            {
                                                type: 'group', items: [
                                                    { icon: 'list-plus', label: 'Create new Template', onSelect: () => this.setState({modalNewTemplate: true}) },
                                                    { icon: 'rundown', label: 'Create new Show', onSelect: () => this.setState({modalNewShow: true}) },
                                                ]
                                            },
                                        ]}>

                                    <CreateButton ariaValue='Create' onClick={() => false} />
                                </Dropdown>
                            </ButtonGroup>
                        </SubNav>
                        <SubNav zIndex={1}>
                            <ButtonGroup align='start'>
                                <NavButton icon='filter-large' onClick={this.handleFilter} />
                            </ButtonGroup>
                            <ButtonGroup align='end'>
                                <ButtonGroup align='sub' padded={true} >
                                    <Button size="normal" icon="chevron-left-thin" text="Previous" shape="round" iconOnly={true} disabled onClick={()=> false} />
                                    <Button text='Today' style='hollow' onClick={() => false} />
                                    <Button size="normal" icon="chevron-right-thin" text="Next" shape="round" iconOnly={true} onClick={()=> false} />
                                </ButtonGroup>
                                <RadioButtonGroup options={[
                                    {value:'test10', label:'D'},
                                    {value:'test11', label:'W'},
                                    {value:'test12', label:'M'},
                                ]} group={{padded:false}} value={this.state.itemType} onChange={(value) => this.setState({ itemType: value })} />
                                <ButtonGroup align='sub' spaces='no-space'>
                                    <Dropdown
                                        items={[
                                            {
                                                type: 'group', label: 'Chose a theme', items: [
                                                    'divider',
                                                    { label: 'Light', icon: 'adjust', onSelect: () => this.handleTheme('light-ui')},
                                                    { label: 'Dark', icon: 'adjust', onSelect: () => this.handleTheme('dark-ui')},
                                                    { label: 'Accessible Light', icon: 'adjust', onSelect: () => this.handleTheme('accessible-light-ui')},
                                                ]
                                            },
                                        ]}>
                                        <NavButton type='default' icon='adjust' onClick={()=> false} />
                                    </Dropdown>
                                    <Dropdown
                                        items={[
                                            {
                                                type: 'group', label: 'Actions', items: [
                                                    'divider',
                                                    { label: 'Action one', onSelect: () => this.setState({ dropDownState: ' ' }) },
                                                    { label: 'Action two', onSelect: () => this.setState({ dropDownState: ' ' }) },
                                                    { label: 'Action three', onSelect: () => this.setState({ dropDownState: ' ' }) },
                                                ]
                                            }]}>
                                        <NavButton icon='dots-vertical' onClick={() => false} />
                                    </Dropdown>
                                </ButtonGroup>
                            </ButtonGroup>


                        </SubNav>
                    </Components.HeaderPanel>
                    {/* TOOLBAR HEADER */}

                    <Components.LeftPanel open={this.state.openFilter}>
                        <Components.Panel side='left' background='grey'>
                            <Components.PanelHeader handleFilterParent={this.handleFilter} title='Advanced filters' />
                            <Components.PanelContent>
                                <Components.PanelContentBlock>
                                    <Form.FormGroup>
                                        <Form.FormItem>
                                            <Select
                                                label='Shows'
                                                labelHidden={true}
                                                value='This is some value'
                                                error='This is error message'
                                                info='This is some hint message'
                                                required={true}
                                                disabled={false}
                                                invalid={false}
                                                onChange={(value) => {}}>
                                                    <Option>Marker</Option>
                                                    <Option>Tabu</Option>
                                            </Select>
                                        </Form.FormItem>
                                    </Form.FormGroup>
                                    <div className="form__group">
                                        <div className="form__item">
                                            <Input label='Title'
                                                error='This is error message'
                                                type='text'
                                                value='Title'
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
                                                type='text'
                                                value='Keyword'
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

                        {/* <GridList size="small" gap="medium" margin="3">
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
                                            <IconButton icon='dots-vertical' ariaValue='More actions' onClick={()=> this.changeStatus(item, 'archived')} />
                                        </GridElements.GridItemFooterActions>
                                    </GridElements.GridItemFooter>
                                </GridElements.GridItem>
                            )}
                        </GridList> */}
                        <ContentList
                        items={[
                            {
                                itemColum: [
                                    {
                                        itemRow: [{content:<>
                                                    <i className="icon-rundown"></i>
                                                </>}],
                                        border: true
                                    },
                                    {
                                        itemRow: [
                                            {
                                                content:
                                                <>
                                                    <span className="sd-list-item__slugline">19:00 – 19:45</span>
                                                    <IconLabel style='translucent' innerLabel='Duration:' text='00:38' size='small' type='warning' />
                                                    <IconLabel style='translucent' innerLabel='Planned Duration:'text='00:45' size='small' />
                                                    <time className='sd-margin-s--auto' title="June 01, 2022 11:08 AM">11:08, 01.06.2022</time>
                                                </>
                                            },
                                            {
                                                content:
                                                <>
                                                    <Label text='Marker' color='blue--800'/>
                                                        <span className='sd-list-item__compound-text'>
                                                            <span className='sd-list-item__text-label'>Template:</span>
                                                            <span>Marker Daily</span>
                                                        </span>
                                                        <span className="sd-overflow-ellipsis sd-list-item--element-grow sd-list-item__headline">Marker // 01.06.2022</span>    
                                                    <Label style='translucent' text='Draft' />
                                                </>
                                            },
                                        ],
                                        fullwidth: true,
                                    }
                                ],
                                action: <IconButton icon='dots-vertical' ariaValue='More actions' onClick={()=> false} />,
                                locked: true,
                            },
                            {
                                itemColum: [
                                    {
                                        itemRow: [{content:<>
                                                    <i className="icon-rundown"></i>
                                                </>}], 
                                        border: true
                                    },
                                    {
                                        itemRow: [
                                            {
                                                content: 
                                                <>
                                                    <span className="sd-list-item__slugline">19:00 – 19:45</span>
                                                    <IconLabel style='translucent' innerLabel='Duration:' text='00:38' size='small' type='warning' />
                                                    <IconLabel style='translucent' innerLabel='Planned Duration:'text='00:45' size='small' />
                                                    <time className='sd-margin-s--auto' title="June 01, 2022 11:08 AM">11:08, 01.06.2022</time>
                                                </>
                                            },
                                            {
                                                content: 
                                                <>
                                                    <Label text='Marker' color='blue--800'/>
                                                        <span className='sd-list-item__compound-text'>
                                                            <span className='sd-list-item__text-label'>Template:</span>
                                                            <span>Marker Daily</span>
                                                        </span>
                                                        <span className="sd-overflow-ellipsis sd-list-item--element-grow sd-list-item__headline">Marker // 01.06.2022</span>    
                                                    <Label style='translucent' text='In Progress' type='warning' />
                                                </>
                                            },
                                        ],
                                        fullwidth: true,
                                    }
                                ],
                                action: <IconButton icon='dots-vertical' ariaValue='More actions' onClick={()=> false} />,
                            },
                            {
                                itemColum: [
                                    {
                                        itemRow: [{content:<>
                                                    <i className="icon-rundown"></i>
                                                </>}],
                                        border: true
                                    },
                                    {
                                        itemRow: [
                                            {
                                                content:
                                                <>
                                                    <span className="sd-list-item__slugline">19:00 – 19:45</span>
                                                    <IconLabel style='translucent' innerLabel='Duration:' text='00:38' size='small' type='warning' />
                                                    <IconLabel style='translucent' innerLabel='Planned Duration:'text='00:45' size='small' />
                                                    <time className='sd-margin-s--auto' title="June 01, 2022 11:08 AM">11:08, 01.06.2022</time>
                                                </>
                                            },
                                            {
                                                content:
                                                <>
                                                    <Label text='Marker' color='blue--800'/>
                                                        <span className='sd-list-item__compound-text'>
                                                            <span className='sd-list-item__text-label'>Template:</span>
                                                            <span>Marker Daily</span>
                                                        </span>
                                                        <span className="sd-overflow-ellipsis sd-list-item--element-grow sd-list-item__headline">Marker // 01.06.2022</span>    
                                                    <Label style='translucent' text='In Progress' type='warning' />
                                                </>
                                            },
                                        ],
                                        fullwidth: true,
                                    }
                                ],
                                action: <IconButton icon='dots-vertical' ariaValue='More actions' onClick={()=> false} />,
                            },
                        ]} />

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
                {/* RUNDOWN EDITOR */}
                <div className="testingCSS">
                    Rundown Editor Goes Here
                </div>
                {/* END RUNDOWN EDITOR */}
            </Components.Layout >

            {/* Create New Template Modal */}
            <Modal headerTemplate="Create new Template"
                visible={this.state.modalNewTemplate}
                contentBg='medium'
                contentPadding='none'
                size='x-large' onHide={() => {this.setState({modalNewTemplate: false})}}>
                <Components.LayoutContainer>
                    <Components.LeftPanel open={true}>
                        <Layout.Panel side='left' background='grey'>
                            <Layout.PanelHeader>
                                <Container className='sd-padding-x--2'>
                                    <Select
                                        label='Shows'
                                        fullWidth={true}
                                        labelHidden={true}
                                        inlineLabel={true}
                                        value='This is some value'
                                        required={true}
                                        disabled={false}
                                        invalid={false}
                                        onChange={(value) => {}}>
                                            <Option>Marker</Option>
                                            <Option>Tabu</Option>
                                    </Select>
                                </Container>
                            </Layout.PanelHeader>
                            <Layout.PanelContent>
                                <Layout.PanelContentBlock>
                                    <Container className='sd-margin-b--1'>
                                        <ButtonGroup align='end'>
                                            <Tooltip text='Create new template'>
                                                <Button type="primary" size='small' icon="plus-large" text="Cretae new Template" shape="round" iconOnly={true} onClick={()=> false} />
                                            </Tooltip>
                                        </ButtonGroup>
                                    </Container>
                                    <BoxedList>
                                        <BoxedListItem
                                            alignVertical='center'
                                            clickable={true}
                                            density='compact'
                                            actions={(
                                                <IconButton icon="dots-vertical" size='small' ariaValue="More actions" onClick={()=> false} />
                                            )}
                                            >
                                            <Container gap='small' >
                                                <Label text='Marker' color='blue--800'/>
                                                <span>Marker Daily</span>
                                            </Container>
                                        </BoxedListItem>
                                        <BoxedListItem
                                            alignVertical='center'
                                            clickable={true}
                                            density='compact'
                                            selected={true}
                                            actions={(
                                                <IconButton icon="dots-vertical" size='small' ariaValue="More actions" onClick={()=> false} />
                                            )}
                                            >
                                            <Container gap='small' >
                                                <Label text='Marker' color='blue--800'/>
                                                <span>Marker Weekend</span>
                                            </Container>
                                        </BoxedListItem>
                                        <BoxedListItem
                                            alignVertical='center'
                                            density='compact'
                                            clickable={true}
                                            actions={(
                                                <IconButton icon="dots-vertical" size='small' ariaValue="More actions" onClick={()=> false} />
                                            )}
                                            >
                                            <Container gap='small' >
                                                <Label text='Marker' color='blue--800'/>
                                                <span>Marker Special</span>
                                            </Container>
                                        </BoxedListItem>
                                    </BoxedList>

                                </Layout.PanelContentBlock>
                            </Layout.PanelContent>
                        </Layout.Panel>
                    </Components.LeftPanel>
                    {/* FILTER PANEL*/}
                    <Components.MainPanel >
                        <EmptyState
                            title={'Empty state title'} 
                            description={'Integer posuere erat a ante venenatis dapibus posuere velit aliquet.'} 
                            size="large" 
                            illustration="1" />
                    </Components.MainPanel>
                    {/* MAIN CONTENT */}
                </Components.LayoutContainer>
            </Modal>

            {/* New Show Modal */}
            <Modal headerTemplate="Create new Show"
                visible={this.state.modalNewShow}
                footerTemplate={newShowFooter}
                contentBg='medium'
                size='medium' onHide={() => {this.setState({modalNewShow: false})}}>
                <Form.FormGroup>
                    <Form.FormItem>
                        <Input
                            label='Show name'
                            type='text'
                            value=''
                            error='This is error message'
                            required={true}
                            onChange={() => {}}
                        />
                    </Form.FormItem>
                    </Form.FormGroup>
                    <Form.FormGroup>
                    <Form.FormItem>
                        <Input
                            label='Description'
                            type='text'
                            value=''
                            error='This is error message'
                            required={false}
                            onChange={() => {}}
                        />
                    </Form.FormItem>
                    </Form.FormGroup>
            </Modal>
            {/* New Show Modal Success */}
            <Modal headerTemplate="Create new Show"
                visible={this.state.modalNewShowSuccess}
                footerTemplate={newShowFooter2}
                contentBg='medium'
                size='medium' onHide={() => {this.setState({modalNewShowSuccess: false})}}>
                <Container direction='column' className='sd-flex--justify-center sd-flex--items-center sd-padding-y--2' gap='medium'>
                    <Icon name='checkmark-circle' type='success' size='big' scale='3x' />
                    <Text align='center' size='medium'>
                        The show <strong>Marker</strong> has been successfully created.<br />
                        Do you want to cretate a template for this show right away?
                    </Text>


                </Container>
            </Modal>

            {/* New Template Modal */}
            <Modal headerTemplate="Create new Template"
                visible={this.state.modalNewTemplate}
                contentBg='medium'
                contentPadding='none'
                size='x-large' onHide={() => {this.setState({modalNewTemplate: false})}}>
                <Components.LayoutContainer>
                    <Components.LeftPanel open={true}>
                        <Layout.Panel side='left' background='grey'>
                            <Layout.PanelHeader>
                                <Container className='sd-padding-x--2'>
                                    <Select
                                        label='Shows'
                                        fullWidth={true}
                                        labelHidden={true}
                                        inlineLabel={true}
                                        value='This is some value'
                                        required={true}
                                        disabled={false}
                                        invalid={false}
                                        onChange={(value) => {}}>
                                            <Option>Marker</Option>
                                            <Option>Tabu</Option>
                                    </Select>
                                </Container>
                            </Layout.PanelHeader>
                            <Layout.PanelContent>
                                <Layout.PanelContentBlock>
                                    <Container className='sd-margin-b--1-5'>
                                        <ButtonGroup align='end'>
                                            <Tooltip text='New template' flow='left'>
                                                <Button type="primary" size='small' icon="plus-large" text="Cretae new Template" shape="round" iconOnly={true} onClick={()=> false} />
                                            </Tooltip>
                                        </ButtonGroup>
                                    </Container>
                                    <BoxedList>
                                    <BoxedListItem
                                            alignVertical='center'
                                            clickable={true}
                                            density='compact'
                                            selected={true}
                                            actions={(
                                                <IconButton icon="dots-vertical" size='small' ariaValue="More actions" onClick={()=> false} />
                                            )}
                                            >
                                            <Container gap='small' >
                                                <Label text='Marker' color='blue--800'/>
                                                <span>Untitled</span>
                                            </Container>
                                        </BoxedListItem>
                                        <BoxedListItem
                                            alignVertical='center'
                                            clickable={true}
                                            density='compact'
                                            actions={(
                                                <IconButton icon="dots-vertical" size='small' ariaValue="More actions" onClick={()=> false} />
                                            )}
                                            >
                                            <Container gap='small' >
                                                <Label text='Marker' color='blue--800'/>
                                                <span>Marker Daily</span>
                                            </Container>
                                        </BoxedListItem>
                                        <BoxedListItem
                                            alignVertical='center'
                                            clickable={true}
                                            density='compact'
                                            actions={(
                                                <IconButton icon="dots-vertical" size='small' ariaValue="More actions" onClick={()=> false} />
                                            )}
                                            >
                                            <Container gap='small' >
                                                <Label text='Marker' color='blue--800'/>
                                                <span>Marker Weekend</span>
                                            </Container>
                                        </BoxedListItem>
                                        <BoxedListItem
                                            alignVertical='center'
                                            density='compact'
                                            clickable={true}
                                            actions={(
                                                <IconButton icon="dots-vertical" size='small' ariaValue="More actions" onClick={()=> false} />
                                            )}
                                            >
                                            <Container gap='small' >
                                                <Label text='Marker' color='blue--800'/>
                                                <span>Marker Special</span>
                                            </Container>
                                        </BoxedListItem>
                                    </BoxedList>

                                </Layout.PanelContentBlock>
                            </Layout.PanelContent>
                        </Layout.Panel>
                    </Components.LeftPanel>
                    {/* FILTER PANEL*/}
                    <Components.MainPanel >
                        <EmptyState
                            title={'Empty state title'} 
                            description={'Integer posuere erat a ante venenatis dapibus posuere velit aliquet.'} 
                            size="large" 
                            illustration="1" />
                    </Components.MainPanel>
                    {/* MAIN CONTENT */}
                </Components.LayoutContainer>
            </Modal>
            {/* End Modals */}
            </>
        );
    }
}
