import * as React from 'react';
import * as Components from './components/Index';
import { ButtonGroup, Button, NavButton, SubNav, Dropdown, Input, IconButton, LeftMenu, BoxedList, BoxedListItem, BoxedListContentRow, Heading, Text, Time, Label, CreateButton, IconLabel, RadioButtonGroup, Select, Option } from '../../../../app-typescript/index';
import * as Layout from '../../../../app-typescript/components/Layouts';
import * as Form from '../../../../app-typescript/components/Form';
import * as Nav from '../../../../app-typescript/components/Navigation';
import { BottomNav } from '../../../../app-typescript/components/Navigation/BottomNav';
import { clone } from 'lodash';
import { RundownEditor } from './RundownEditor';
import { ContentList } from '../../../../app-typescript/components/Lists/ContentList';
import { TableList } from '../../../../app-typescript/components/Lists/TableList';
import { SearchBar } from './components/Index';

interface IProps {
    children?: React.ReactNode;
    heading?: string;
    active?: boolean;
    onClick(): void;
    ariaControls?: string;
    menuId?: string;
}

interface IState {
    theme: 'dark' | 'light' | string;
    mainMenuOpen: boolean;
    notificationsOpen: boolean;
    botNavArray: any;
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
    fullEditor: boolean;
    openPanel: boolean;
    rightPanel: boolean;
    previousState: boolean;
}

export class CoreLayout extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            theme: 'light',
            mainMenuOpen: false,
            notificationsOpen: false,
            botNavArray: [
                { icon:'photo', title: 'Sed posuere consectetur est at lobortis.', onClick: () => false, onRemove: (e) => this.handleDelete(e) },
                { title: 'Nullam id dolor id nibh ultricies.', onClick: () => false, onRemove: (e) => this.handleDelete(e)},
                { icon:'video', title: 'Nulla vitae elit libero, a pharetra augue.', onClick: () => false, onRemove: (e) => this.handleDelete(e)},
                { title: 'Donec sed odio dui.', onClick: () => false, onRemove: (e) => this.handleDelete(e)},
            ],
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
            fullEditor: false,
            openPanel: false,
            rightPanel: false,
            previousState: false,
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

        this.handleMainMenu = this.handleMainMenu.bind(this);
        this.handleNotifications = this.handleNotifications.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleFilter = this.handleFilter.bind(this);
        this.handlePreview = this.handlePreview.bind(this);
        this.handleTheme = this.handleTheme.bind(this);
        this.handleShow = this.handleShow.bind(this);
    }

    handleMainMenu() {
        this.setState((state) => ({
            mainMenuOpen: !state.mainMenuOpen,
        }));
    }

    handleNotifications() {
        this.setState((state) => ({
            notificationsOpen: !state.notificationsOpen,
        }));
    }
    
    handleDelete(indexNumber: number) {
        const newItems = clone(this.state.botNavArray);
        newItems.splice(indexNumber, 1);

        this.setState({
            botNavArray: newItems,
        });  
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
        return (
            <Layout.CoreLayout
                heading='Core Layout'
                menuOpen={this.state.mainMenuOpen}
                onClick={this.handleMainMenu}
                active={this.state.mainMenuOpen}
                ariaControls='main-menu'
                menuId='main-menu'
                editorFullWidth={this.state.fullEditor}
                openPanel={this.state.rightPanel}
                slideInMenu={(
                    <Layout.MainMenu
                        headerTitle='Main Menu'
                        poweredBy='Powered by Superdesk technology'
                        header={(null)}
                        footerContent={true}
                        footer={(
                            <p>Menu footer testing</p>
                        )}
                    >
                        <LeftMenu 
                            style='blanc'
                            reverseItemBorder={true}
                            size='large'
                            ariaLabel={'Left navigation'}   
                            activeItemId='1'
                            groups={[
                                { label: 'MAIN SECTIONS', items: [
                                    { id: '1', label: 'Section 1', ref:'section1'},
                                    { id: '2', label: 'Section 2', ref: 'section2' },
                                    { id: '3', label: 'Section 3', ref: 'section3' },
                                ]},
                                { label:'OTHER SECTIONS', items: [
                                    { id: '4', label: 'Section 4', ref: 'section4' },
                                    { id: '5', label: 'Section 5', ref: 'section5' },
                                ]},
                                { label:'OTHER SECTIONS', items: [
                                    { id: '6', label: 'Section 6', ref: 'section6' },
                                    { id: '7', label: 'Section 7', ref: 'section7' },
                                ]}
                            ]}
                            onSelect={() => false}
                        />
                    </Layout.MainMenu>
                )}
                topMenu={(
                    <NavButton badgeValue='6' icon='bell' text='Show notifications' onClick={this.handleNotifications} />
                )}
                footer={(
                    <>
                        <Layout.BottomBarAction onClick={()=> false} />
                        <BottomNav items={this.state.botNavArray} />
                    </>
                )}
                overlay={(
                    <Layout.NotificationPanel
                        header={(null)}
                        headerTitle='Notifications'
                        open={this.state.notificationsOpen}
                        onClick={this.handleNotifications}
                        theme='dark'
                    >
                        <BoxedList>
                            <BoxedListItem unread={true}>
                                <Time datetime='29.06.2022'>29.06.2022</Time>
                                <BoxedListContentRow>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum sociis natoque penatibus et
                                    magnis dis parturient montes, nascetur ridiculus mus.
                                </BoxedListContentRow>
                            </BoxedListItem>
                            <BoxedListItem>
                                <Time datetime='29.06.2022'>29.06.2022</Time>
                                <BoxedListContentRow>
                                    Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Vestibulum id ligula
                                    porta felis euismod semper.
                                </BoxedListContentRow>
                            </BoxedListItem>
                            <BoxedListItem>
                                <Time datetime='29.06.2022'>29.06.2022</Time>
                                <BoxedListContentRow>
                                    Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer
                                    posuere erat a ante venenatis dapibus posuere velit aliquet.
                                </BoxedListContentRow>
                            </BoxedListItem>
                        </BoxedList>
                    </Layout.NotificationPanel>
                )}
            >

                <Nav.SideBarMenu
                    items={[
                        { icon: 'dashboard', size: 'big', hover: this.state.openEditor && !this.state.rightPanel, },
                        { icon: 'view', size: 'big', hover: this.state.openEditor && !this.state.rightPanel, onCLick: () => this.setState({fullEditor: !this.state.fullEditor})},
                        { icon: 'marked-star', size: 'big', hover: this.state.openEditor && !this.state.rightPanel, onCLick: () => this.setState({fullEditor: !this.state.fullEditor}) },
                        { icon: 'spike', size: 'big', hover: this.state.openEditor && !this.state.rightPanel, onCLick: () => this.setState({fullEditor: !this.state.fullEditor}) },
                        { icon: 'personal', size: 'big', hover: this.state.openEditor && !this.state.rightPanel, onCLick: () => this.setState({fullEditor: !this.state.fullEditor}) },
                        { icon: 'global-search', size: 'big', hover: this.state.openEditor && !this.state.rightPanel, onCLick: () => this.setState({fullEditor: !this.state.fullEditor}) },
                        { icon: 'picture', size: 'big', hover: this.state.openEditor && !this.state.rightPanel, onCLick: () => this.setState({fullEditor: !this.state.fullEditor}) },
                        { icon: 'rundown', size: 'big', hover: this.state.openEditor && !this.state.rightPanel, onCLick: () => this.setState({fullEditor: !this.state.fullEditor})
                    }]}
                />

                {!this.state.fullEditor && !this.state.rightPanel
                    && (
                        <Layout.LayoutContainer>
                            <Layout.HeaderPanel>
                                <SubNav>
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
                                                }
                                            ]}
                                        >
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
                                            ]}
                                        >
                                            <CreateButton ariaValue='Create' onClick={() => false} />
                                        </Dropdown>
                                    </ButtonGroup>
                                </SubNav>

                                <SubNav>
                                    <ButtonGroup align='start'>
                                        <NavButton icon='filter-large' onClick={this.handleFilter} />
                                    </ButtonGroup>
                                    <ButtonGroup align='end'>
                                        <ButtonGroup align='sub' padded={true}>
                                            <Button size="normal" icon="chevron-left-thin" text="Previous" shape="round" iconOnly={true} disabled onClick={()=> false} />
                                            <Button text='Today' style='hollow' onClick={() => false} />
                                            <Button size="normal" icon="chevron-right-thin" text="Next" shape="round" iconOnly={true} onClick={()=> false} />
                                        </ButtonGroup>
                                        <RadioButtonGroup
                                            options={[
                                                {value:'test10', label:'D'},
                                                {value:'test11', label:'W'},
                                                {value:'test12', label:'M'},
                                            ]}
                                            group={{padded:false}}
                                            value={this.state.itemType}
                                            onChange={(value) => this.setState({ itemType: value })}
                                        />
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
                                                ]}
                                            >
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
                                                    }
                                                ]}
                                            >
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
                                                        onChange={(value) => {}}
                                                    >
                                                        <Option>Marker</Option>
                                                        <Option>Tabu</Option>
                                                    </Select>
                                                </Form.FormItem>
                                            </Form.FormGroup>
                                            <div className="form__group">
                                                <div className="form__item">
                                                    <Input
                                                        label='Title'
                                                        error='This is error message'
                                                        type='text'
                                                        value='Title'
                                                        inlineLabel={false}
                                                        disabled={false}
                                                        invalid={false}
                                                        onChange={(value) => {}}
                                                    />
                                                </div>
                                            </div>
                                            <div className="form__group">
                                                <div className="form__item">
                                                    <Select
                                                        label='Source'
                                                        value='Select ingest source...'
                                                        error='This is error message'
                                                        inlineLabel={false}
                                                        disabled={false}
                                                        invalid={false}
                                                        onChange={(value) => {}}
                                                    >
                                                        <Option value="option-1">Select ingest source...</Option>
                                                        <Option value="option-2">Associated Press</Option>
                                                        <Option value="option-3">Reuters</Option>
                                                    </Select>
                                                </div>
                                            </div>

                                            <div className="form__group">
                                                <div className="form__item">
                                                    <Input
                                                        label='Keyword'
                                                        error='This is error message'
                                                        type='text'
                                                        value='Keyword'
                                                        inlineLabel={false}
                                                        disabled={false}
                                                        invalid={false}
                                                        onChange={(value) => {}}
                                                    />
                                                </div>
                                            </div>

                                            <div className="form__group">
                                                <div className="form__item">
                                                    <Select
                                                        label='Usage right'
                                                        value='--- Not selected ---'
                                                        error='This is error message'
                                                        info='Dolor in hendrerit.'
                                                        inlineLabel={false}
                                                        disabled={false}
                                                        invalid={false}
                                                        onChange={(value) => {}}
                                                    >
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
                                <ContentList
                                    items={[
                                        {
                                            itemColum: [
                                                {
                                                    itemRow: [{
                                                        content:
                                                            <>
                                                                <i className="icon-rundown"></i>
                                                            </>
                                                    }],
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
                                                    itemRow: [{
                                                        content:
                                                            <>
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
                                    ]}
                                />

                            </Layout.MainPanel>
                            {/* MAIN CONTENT (Monitoring) */}
                            
                            <Layout.RightPanel open={this.state.openPreview}>
                                <Layout.Panel side='right'>
                                    <Layout.PanelHeader title='Item preview' onClose={() => this.setState({'openPreview': false})} />
                                    <Layout.PanelContent>
                                        <Layout.PanelContentBlock flex={true}>
                                            <Layout.Container direction='column' gap='x-small'>
                                                <Layout.Container direction='row' gap='small'><Text color='light'>Created 09.06.2022 by </Text><Text weight='medium'>Mika Karapet</Text></Layout.Container>
                                                <Layout.Container direction='row' gap='small'><Text color='light'>Updated 3 hours ago by </Text><Text weight='medium'>John Doe</Text></Layout.Container>
                                            </Layout.Container>

                                            <Layout.Container className='sd-margin-s--auto sd-flex--items-center'>
                                                {/* <Dropdown
                                                    align = 'right'
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
                                                </Dropdown> */}
                                            </Layout.Container>
                                        </Layout.PanelContentBlock>

                                        <Layout.PanelContentBlock>
                                            <Layout.Container direction='row'  gap='large' className='sd-margin-b--3'>
                                                <Label size='large' text='Tabu' color='blue--800'/>
                                                <Layout.Container direction='row' gap='small'>
                                                    <Text color='light' size='small' style='italic' >Template:</Text>
                                                    <Text size='small' style='italic' weight='medium'>Tabu daily</Text>
                                                </Layout.Container>
                                            </Layout.Container>
                                        
                                            <Layout.Container direction='column' className='sd-margin-y--2'>
                                                {/* <FormLabel text='Title' /> */}
                                                <Heading type='h2'>Tabu // 01.06.2022</Heading>
                                            </Layout.Container>

                                            <ButtonGroup>
                                                <IconLabel style='translucent' innerLabel='Airtime:' text='19:45 - 20:45' type='primary' />
                                                <IconLabel style='translucent' innerLabel='Duration:' text='00:56' type='warning' />
                                                <Text color='light' size='small' className='sd-margin--0'>OF</Text>
                                                <IconLabel style='translucent' innerLabel='Planned:'text='01:00' />
                                            </ButtonGroup>

                                            <TableList
                                                className='sd-margin-y--4'
                                                array={this.state.array}
                                                itemsDropdown={() => [
                                                    { label: <Label style='translucent' type='primary' text='aacc' />, onSelect: () => 1 },
                                                    { label: <Label style='translucent' text='prlg' />, onSelect: () => 1 },
                                                    { label: <Label style='translucent' type='primary' text='prlg' />, onSelect: () => 1 },
                                                ]}
                                            />   
                                        </Layout.PanelContentBlock>
                                    </Layout.PanelContent>
                                </Layout.Panel>
                            </Layout.RightPanel>
                            {/* PREVIEW PANEL*/}

                            <Layout.OverlayPanel />
                            {/* OVERLAY PANEL (Send To) */}
                        </Layout.LayoutContainer>
                    )
                }

                <Layout.ContentSplitter visible={this.state.openEditor} />

                {/* RUNDOWN EDITOR */}
                <Layout.AuthoringContainer open={this.state.openEditor}>
                    <RundownEditor
                        rightPanel={this.state.rightPanel}
                        openPanel={() => {
                            if (this.state.fullEditor) {
                                this.setState({previousState: true})
                            } else {
                                this.setState({previousState: false})
                            }
                            
                            this.setState({rightPanel: true})
                        }}
                        closePanel={() => {
                            if (!this.state.previousState) {
                                this.setState({rightPanel: false, fullEditor: false})
                            } else {
                                this.setState({rightPanel: false})
                            }
                        }}
                    />
                </Layout.AuthoringContainer>
                {/* END RUNDOWN EDITOR */}
     
            </Layout.CoreLayout>
        );
    }
}
