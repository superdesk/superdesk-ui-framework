import * as React from 'react';
import * as Components from './components/Index';
import { ButtonGroup, Button, NavButton, SubNav, Dropdown, CheckButtonGroup, RadioGroup, RadioButtonGroup, Input, Select, Option, Label, IconLabel, Icon, IconButton, Checkbox, GridList, Badge, Tooltip, CreateButton, Modal, EmptyState, Container, BoxedList, BoxedListItem, BoxedListContentRow, Text, Heading, FormLabel, SlidingToolbar, Switch, SwitchGroup, SearchBar } from '../../../../app-typescript/index';
import * as Layout from '../../../../app-typescript/components/Layouts';
import * as Form from '../../../../app-typescript/components/Form';
import {RundownEditor} from './RundownEditor';
import * as Nav from '../../../../app-typescript/components/Navigation';
import * as GridElements from '../../../../app-typescript/components/GridItem';


import dummy_items from '../dummy-data/items';
import { ContentList } from '../../../../app-typescript/components/Lists/ContentList';
import { TableList } from '../../../../app-typescript/components/Lists/TableList';

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
    openEditor: boolean;
    openShowEditor: boolean;
    array: any;
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
            value1: true,
            modalBasic: false,
            modalSmall: false,
            modalMedium: false,
            modalNewTemplate: false,
            modalNewShow: false,
            modalNewShowSuccess: false,
            modalManageTemplate: false,
            modalManageShow: false,
            openEditor: false,
            openShowEditor: false,
            array: [
                {
                    start: <>
                                <Label style='translucent' text='aacc' />
                                <Label style='translucent' type='primary' text='prlg' />
                            </>,
                    center: <span>Duis mollis est non commodo</span>,
                    onClick: () => false,
                },
                {
                    start: <>
                                <Label style='translucent' type='warning' text='pokr' />
                                <Label style='translucent' text='slika' />
                            </>,
                    center: <span>Nullam id dolor id nibh ultricies</span>,
                    onClick: () => false,
                },
                {
                    start: <>
                                <Label style='translucent' text='aacc' />
                                <Label style='translucent' type='primary' text='prlg' />
                            </>,
                    center: <span>Duis mollis est non commodo</span>,
                    onClick: () => false,
                },
                {
                    start: <>
                                <Label style='translucent' type='warning' text='pokr' />
                                <Label style='translucent' text='slika' />
                            </>,
                    center: <span>Cras mattis consectetur purus</span>,
                    onClick: () => false,
                },
                {
                    start: <>
                                <Label style='translucent' text='aacc' />
                                <Label style='translucent' type='primary' text='prlg' />
                            </>,
                    center: <span>Duis mollis est non commodo</span>,
                    onClick: () => false,
                },
            ]

        }
        this.handleFilter = this.handleFilter.bind(this);
        this.handlePreview = this.handlePreview.bind(this);
        this.handleTheme = this.handleTheme.bind(this);
        this.handleShow = this.handleShow.bind(this);
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

    handleShow() {
        this.setState((state) => ({
            openShowEditor: !state.openShowEditor,
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
            <Layout.Layout header='Rundowns' theme={this.state.theme}>
                <Nav.SideBarMenu
                    items={[
                        { icon: 'dashboard', size: 'big' },
                        { icon: 'view', size: 'big' },
                        { icon: 'marked-star', size: 'big' },
                        { icon: 'spike', size: 'big' },
                        { icon: 'personal', size: 'big' },
                        { icon: 'global-search', size: 'big' },
                        { icon: 'picture', size: 'big' },
                        { icon: 'rundown', size: 'big', active: true }]} />

                <Layout.LayoutContainer>
                    <Layout.HeaderPanel>
                        <SubNav zIndex={2}>
                            <SearchBar placeholder='Search media'></SearchBar>
                            <ButtonGroup align='end' spaces='no-space'>
                                <Dropdown
                                    items={[
                                        {
                                            type: 'group', label: 'Settings', items: [
                                                'divider',
                                                { icon: 'switches', label: 'Manage Shows', onSelect: () => this.setState({modalManageShow: true}) },
                                                { icon: 'switches', label: 'Manage Templates', onSelect: () => this.setState({modalManageTemplate: true}) },
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
                    </Layout.HeaderPanel>
                    {/* TOOLBAR HEADER */}

                    <Layout.LeftPanel open={this.state.openFilter}>
                        <Layout.Panel side='left' background='grey'>
                            <Layout.PanelHeader title='Advanced filters' onClose={() => this.setState({'openFilter': false})} />
                            <Layout.PanelContent>
                                <Layout.PanelContentBlock>
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
                                </Layout.PanelContentBlock>
                            </Layout.PanelContent>
                            <Layout.PanelFooter>
                                <Button text='Clear' style='hollow' onClick={() => false} />
                                <Button text='Submit' type='primary' onClick={() => false} />
                            </Layout.PanelFooter>
                        </Layout.Panel>
                    </Layout.LeftPanel>
                    {/* FILTER PANEL*/}
                    <Layout.MainPanel>

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
                                                    <Label style='translucent' text='In Progress' type='warning' />
                                                </>
                                            },
                                        ],
                                        fullwidth: true,
                                    }
                                ],
                                action: <IconButton icon='dots-vertical' ariaValue='More actions' onClick={()=> false} />,
                                locked: true,
                                onClick: () => this.setState({openEditor: !this.state.openEditor}),
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
                                                    <Label text='Tabu' color='blue--800'/>
                                                        <span className='sd-list-item__compound-text'>
                                                            <span className='sd-list-item__text-label'>Template:</span>
                                                            <span>Tabu Daily</span>
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
                                onClick: () => this.setState({openPreview: !this.state.openPreview}),
                            },
                        ]} />

                    </Layout.MainPanel>
                    {/* MAIN CONTENT (Monitoring) */}
                    <Layout.RightPanel open={this.state.openPreview}>
                        <Layout.Panel side='right'>
                            <Layout.PanelHeader title='Item preview' onClose={() => this.setState({'openPreview': false})}  />
                            <Layout.PanelContent>
                                <Layout.PanelContentBlock flex={true}>
                                    <Container direction='column' gap='x-small'>
                                        <Container direction='row' gap='small'><Text color='light'>Created 09.06.2022 by </Text><Text weight='medium'>Mika Karapet</Text></Container>
                                        <Container direction='row' gap='small'><Text color='light'>Updated 3 hours ago by </Text><Text weight='medium'>John Doe</Text></Container>
                                    </Container>
                                    <Container className='sd-margin-s--auto sd-flex--items-center'>
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
                                    </Container>
                                </Layout.PanelContentBlock>

                                <Layout.PanelContentBlock>
                                    <Container direction='row'  gap='large' className='sd-margin-b--3'>
                                        <Label size='large' text='Tabu' color='blue--800'/>
                                        <Container direction='row' gap='small'>
                                            <Text color='light' size='small' style='italic' >Template:</Text>
                                            <Text size='small' style='italic' weight='medium'>Tabu daily</Text>
                                        </Container>
                                    </Container>
                                
                                    <Container direction='column' className='sd-margin-y--2'>
                                        {/* <FormLabel text='Title' /> */}
                                        <Heading type='h2'>Tabu // 01.06.2022</Heading>
                                    </Container>
                                    <ButtonGroup>
                                        <IconLabel style='translucent' innerLabel='Airtime:' text='19:45 - 20:45' type='primary' />
                                        <IconLabel style='translucent' innerLabel='Duration:' text='00:56' type='warning' />
                                        <Text color='light' size='small' className='sd-margin--0'>OF</Text>
                                        <IconLabel style='translucent' innerLabel='Planned:'text='01:00' />
                                    </ButtonGroup>
                                    <TableList
                                className='sd-margin-y--4'
                                array={this.state.array}
                                itemsDropdown={[
                                    { label: <Label style='translucent' type='primary' text='aacc' />, onSelect: () => 1 },
                                    { label: <Label style='translucent' text='prlg' />, onSelect: () => 1 },
                                    { label: <Label style='translucent' type='primary' text='prlg' />, onSelect: () => 1 },
                                ]}
                                onClick={() => false}
                                />   
                                </Layout.PanelContentBlock>
                            </Layout.PanelContent>
                        </Layout.Panel>
                    </Layout.RightPanel>
                    {/* PREVIEW PANEL*/}

                    <Layout.OverlayPanel />
                    {/* OVERLAY PANEL (Send To) */}
                </Layout.LayoutContainer>
                <Layout.ContentSplitter visible={this.state.openEditor} />
                {/* RUNDOWN EDITOR */}
                <Layout.AuthoringContainer open={this.state.openEditor}>
                    <RundownEditor />
                </Layout.AuthoringContainer>
                {/* END RUNDOWN EDITOR */}
            </Layout.Layout >

            {/* Manage Templates Modal */}
            <Modal headerTemplate="Manage Templates"
                visible={this.state.modalManageTemplate}
                contentBg='medium'
                contentPadding='none'
                size='x-large' onHide={() => {this.setState({modalManageTemplate: false})}}>
                <Layout.LayoutContainer>
                    <Layout.LeftPanel open={true}>
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
                                            <Option>Select show</Option>
                                            <Option>Marker</Option>
                                            <Option>Tabu</Option>
                                    </Select>
                                </Container>
                            </Layout.PanelHeader>
                            <Layout.PanelContent>
                                <EmptyState
                                    title={'No show is selected'} 
                                    description={'Please select a Show from the dropdown at the top.'} 
                                    size="small" 
                                    illustration="1" />
                                    {/* <Container className='sd-margin-b--1'>
                                        <ButtonGroup align='end'>
                                            <Tooltip text='Manage templates'>
                                                <Button type="primary" size='small' icon="plus-large" text="Cretae new Template" shape="round" iconOnly={true} onClick={()=> false} />
                                            </Tooltip>
                                        </ButtonGroup>
                                    </Container> */}
                                    {/* <BoxedList>
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
                                    </BoxedList> */}


                            </Layout.PanelContent>
                        </Layout.Panel>
                    </Layout.LeftPanel>
                    {/* FILTER PANEL*/}
                    <Layout.MainPanel >
                        <EmptyState
                            title={'No Template selected'} 
                            description={'Please select a Show and Template frome the side panel.'} 
                            size="large" 
                            illustration="1" />
                    </Layout.MainPanel>
                    {/* MAIN CONTENT */}
                </Layout.LayoutContainer>
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
                <Layout.LayoutContainer>
                    <Layout.LeftPanel open={true}>
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
                    </Layout.LeftPanel>
                    {/* FILTER PANEL*/}
                    <Layout.MainPanel padding='none'>
                        
                            <RundownEditor />
                        
                    </Layout.MainPanel>
                    {/* MAIN CONTENT */}
                </Layout.LayoutContainer>
            </Modal>

            {/* Manage Shows Modal */}
            <Modal headerTemplate="Manage Shows"
                visible={this.state.modalManageShow}
                contentBg='medium'
                contentPadding='none'
                size='x-large' onHide={() => {this.setState({modalManageShow: false})}}>
                <Layout.LayoutContainer>
                <Layout.HeaderPanel>
                        <SubNav zIndex={2}>
                            <SearchBar placeholder='Search shows'></SearchBar>
                            <ButtonGroup align='end' spaces='no-space'>
                                <CreateButton ariaValue='New show' onClick={() => false} />
                            </ButtonGroup>
                        </SubNav>
                    </Layout.HeaderPanel>
                    {/* MAIN CONTENT */}
                    <Layout.MainPanel>
                        <BoxedList>
                            <BoxedListItem
                                alignVertical='center'
                                clickable={true}
                                density='compact'
                                selected={this.state.openShowEditor}
                                onClick={() => this.setState({openShowEditor: !this.state.openShowEditor})}
                                actions={(
                                    <IconButton icon="dots-vertical" size='small' ariaValue="More actions" onClick={()=> false} />
                                )}
                                >
                                <Container className='sd-flex-justify-space-between'>
                                    <Heading type='h4'>Marker</Heading>
                                    <Text color='lighter'>3 template</Text>
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
                                <Container className='sd-flex-justify-space-between'>
                                    <Heading type='h4'>Tabu</Heading>
                                    <Text color='lighter'>3 template</Text>
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
                                <Container className='sd-flex-justify-space-between'>
                                    <Heading type='h4'>Život u ringu</Heading>
                                    <Text color='lighter'>1 template</Text>
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
                                <Container className='sd-flex-justify-space-between'>
                                    <Heading type='h4'>Intervju</Heading>
                                    <Text color='lighter'>3 templates</Text>
                                </Container>
                            </BoxedListItem>
                        </BoxedList>
                        
                    </Layout.MainPanel>
                    <Layout.RightPanel open={this.state.openShowEditor}>
                        <Layout.Panel side='right' background='grey'>
                            <Layout.PanelHeader title='Show details' onClose={() => this.setState({'openShowEditor': false})} >
                                
                            {this.state.value1 ||
                                <Layout.PanelHeaderSlidingToolbar>
                                    <ButtonGroup align='start'>
                                        <IconButton ariaValue="Close" icon="close-small" onClick={() => this.setState({openShowEditor: !this.state.openShowEditor})} />
                                    </ButtonGroup>
                                    <ButtonGroup align='end'>
                                        <Button text="Save Changes" style='hollow' onClick={() => this.setState({openShowEditor: !this.state.openShowEditor})} type="primary" />
                                    </ButtonGroup>
                                </Layout.PanelHeaderSlidingToolbar>}
                            </Layout.PanelHeader>
                            <Layout.PanelContent>
                                <Layout.PanelContentBlock flex={true}>
                                    <Container direction='column' gap='x-small'>
                                        <Container direction='row' gap='small'><Text color='light'>Created 09.06.2022 by </Text><Text weight='medium'>Mika Karapet</Text></Container>
                                        <Container direction='row' gap='small'><Text color='light'>Updated 3 hours ago by </Text><Text weight='medium'>John Doe</Text></Container>
                                    </Container>
                                    <Container className='sd-margin-s--auto sd-flex--items-center'>
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
                                    </Container>
                                </Layout.PanelContentBlock>
                                <Layout.PanelContentBlock>
                                    <SwitchGroup className='sd-margin-b--3'>
                                        <Switch label={{text:'Active'}} value={this.state.value1} onChange={(value) => this.setState(() => ({ value1: value }))} />
                                    </SwitchGroup>
                                    <Form.FormGroup>
                                        <Form.FormItem>
                                            <Input
                                                type='text'
                                                label='Show name'
                                                value='Marker'
                                                error='This is error message'
                                                info=' '
                                                required={true}
                                                disabled={false}
                                                invalid={false}
                                                onChange={(value) => {}} /> 
                                        </Form.FormItem>
                                    </Form.FormGroup>
                                    <Form.FormGroup>
                                        <Form.FormItem>
                                            <Input
                                                type='text'
                                                label='Description'
                                                value=''
                                                error='This is error message'
                                                info=''
                                                required={false}
                                                disabled={false}
                                                invalid={false}
                                                onChange={(value) => {}} /> 
                                        </Form.FormItem>
                                    </Form.FormGroup>
                                </Layout.PanelContentBlock>

                                <Layout.PanelContentBlock>
                                    <Heading type='h3' className='sd-margin-b--2'>Show templates</Heading>
                                    <BoxedList>
                                        <BoxedListItem
                                            alignVertical='center'
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
                    </Layout.RightPanel>
                </Layout.LayoutContainer>
            </Modal>
            {/* End All Modals */}
            </>
        );
    }
}
