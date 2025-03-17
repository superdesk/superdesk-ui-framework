import * as React from 'react';
import { ButtonGroup, Button, NavButton, SubNav, Input, IconButton, Divider, Tooltip, Select, Option, Text, SlidingToolbar, Container, Label, IconLabel, Icon } from '../../../../app-typescript/index';
import * as Layout from '../../../../app-typescript/components/Layouts';
import * as Form from '../../../../app-typescript/components/Form';
import * as Nav from '../../../../app-typescript/components/Navigation';
import { TableList } from '../../../../app-typescript/components/Lists/TableList';

interface IProps {
    children?: React.ReactNode;
    rightPanel?: boolean;
    openPanel(): any;
    closePanel(): void;
}

interface IState {
    theme: 'dark' | 'light' | string;
    itemType: string;
    dropDownState: string;
    itemSelected1: boolean;
    itemSelected2: boolean;
    itemSelected3: boolean;
    value1: boolean;
    value2: boolean;
    value3: boolean;
    leftPanelOpen: boolean;
    rightPanelOpen: boolean;
    rightPanelPinned: boolean;
    sideOverlayOpen: boolean;
    array: any;
    inputValue: string;
    activeTab: string | null;
    isExpanded: boolean;
}

export class RundownEditor extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            theme: 'light',
            itemType: 'itemtype01',
            dropDownState: '',
            itemSelected1: false,
            itemSelected2: false,
            itemSelected3: false,
            value1: false,
            value2: false,
            value3: false,
            leftPanelOpen: false,
            rightPanelOpen: this.props.rightPanel ? this.props.rightPanel : false,
            rightPanelPinned: false,
            sideOverlayOpen: false,
            inputValue: 'string',
            array: [
                {
                    start: <>
                                <Label style='translucent' text='aacc' />
                                <Label style='translucent' type='primary' text='prlg' />
                            </>,
                    center: <span>Duis mollis est non commodo</span>,
                    end: <>
                            <IconLabel style='translucent' innerLabel='Planned:' text='00:20' />
                            <IconLabel style='translucent' innerLabel='Duration:' text='00:20' type='success' />
                        </>,
                    action: <IconButton icon='dots-vertical' size='small' ariaValue='More actions' onClick={()=> false} />,
                    onClick: () => { this.props.openPanel() }
                },
                {
                    start: <>
                                <Label style='translucent' type='warning' text='pokr' />
                                <Label style='translucent' text='slika' />
                            </>,
                    center: <span>Nullam id dolor id nibh ultricies</span>,
                    end: <>
                        <IconLabel style='translucent' innerLabel='Planned:' text='00:12' />
                        <IconLabel style='translucent' innerLabel='Duration:' text='00:11' type='warning' />
                        </>,
                    action: <IconButton icon='dots-vertical' size='small' ariaValue='More actions' onClick={()=> false} />,
                    onClick: () => { this.props.openPanel() }
                },
                {
                    start: <>
                                <Label style='translucent' text='aacc' />
                                <Label style='translucent' type='primary' text='prlg' />
                            </>,
                    center: <span>Duis mollis est non commodo</span>,
                    end: <>
                            <IconLabel style='translucent' innerLabel='Planned:' text='00:20' />
                            <IconLabel style='translucent' innerLabel='Duration:' text='00:20' type='success' />
                        </>,
                    action: <IconButton icon='dots-vertical' size='small' ariaValue='More actions' onClick={()=> false} />,
                    onClick: () => { this.props.openPanel() }
                },
                {
                    start: <>
                                <Label style='translucent' type='warning' text='pokr' />
                                <Label style='translucent' text='slika' />
                            </>,
                    center: <span>Cras mattis consectetur purus</span>,
                    end: <>
                            <IconLabel style='translucent' innerLabel='Planned:' text='00:14' />
                            <IconLabel style='translucent' innerLabel='Duration:' text='00:15' type='alert' />
                        </>,
                    action: <IconButton icon='dots-vertical' size='small' ariaValue='More actions' onClick={()=> false} />,
                    onClick: () => { this.props.openPanel() }
                },
                {
                    start: <>
                                <Label style='translucent' text='aacc' />
                                <Label style='translucent' type='primary' text='prlg' />
                            </>,
                    center: <span>Duis mollis est non commodo</span>,
                    end: <>
                            <IconLabel style='translucent' innerLabel='Planned:' text='00:20' />
                            <IconLabel style='translucent' innerLabel='Duration:' text='00:20' type='success' />
                        </>,
                    action: <IconButton icon='dots-vertical' size='small' ariaValue='More actions' onClick={()=> false} />,
                    onClick: () => { this.props.openPanel() }
                },
            ],
            activeTab: null,
            isExpanded: false,
        }
        this.handleTheme = this.handleTheme.bind(this);
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

    toggleExpand = () => {
        this.setState(prevState => ({ isExpanded: !prevState.isExpanded }));
    }

    render() {
        return (
            <Layout.LayoutContainer>
                <Layout.HeaderPanel>
                    <SubNav>
                        <Tooltip text={this.state.isExpanded ? "Revert Authoring" : "Expand Authoring"} flow='right'>
                            <button
                                className={`expand-button ${this.state.isExpanded ? "expand-button--expanded" : ""}`}
                                onClick={this.toggleExpand}
                            >
                                <Icon name='chevron-left-thin' />
                            </button>
                        </Tooltip>
                        <ButtonGroup align='end'>
                            <Button text="Cancel" onClick={()=> false} type="default" />
                            <Button text="Save Rundown" onClick={()=> false} type="primary" />
                            <Divider size="mini" />
                            <ButtonGroup subgroup={true} spaces="no-space">
                                <Tooltip text='Minimize' flow='left'>
                                    <NavButton type='default' icon='minimize' iconSize='big' text='Minimize' onClick={()=> false} />
                                </Tooltip>
                                <Tooltip text='More actions' flow='left'>
                                    <NavButton type='default' icon='dots-vertical' text='More actions' onClick={()=> false} />
                                </Tooltip>
                                <Tooltip text='Send to / Publish' flow='left'>
                                    <NavButton type='highlight' icon='send-to' iconSize='big' text='Send to / Publish' onClick={()=> false} />
                                </Tooltip>
                            </ButtonGroup>
                        </ButtonGroup>
                    </SubNav>
                </Layout.HeaderPanel>

                <Layout.MainPanel padding='none'>
                    <Layout.AuthoringMain
                        toolBar={(
                            <React.Fragment>
                                <div className="sd-editor-toolbar__content">
                                    <dl>
                                        <dt>Created</dt>
                                        <dd><time title="July 29, 2021 3:58 PM">07/29</time></dd>
                                        <dt>by</dt>
                                        <dt>Nareg Asmarian</dt>
                                    </dl>
                                    <dl>
                                        <dt>Modified</dt>
                                        <dd><time title="July 29, 2021 3:58 PM">07/29</time></dd>
                                    </dl>
                                </div>
                            </React.Fragment>
                        )}
                        authoringHeader={(
                            <React.Fragment>
                                <Form.FormGroup>
                                    <Form.FormItem>
                                        <Select
                                            label='Type'
                                            value='Type value'
                                            required={true}
                                            disabled={false}
                                            onChange={() => false}
                                        >
                                            <Option>Type 1</Option>
                                            <Option>Type 2</Option>
                                        </Select>
                                    </Form.FormItem>
                                    <Form.FormItem>
                                        <Select
                                            label='Show'
                                            value='show value'
                                            required={true}
                                            disabled={false}
                                            onChange={() => false}
                                        >
                                            <Option>Marker</Option>
                                            <Option>Tabu</Option>
                                        </Select>
                                    </Form.FormItem>
                                    <Form.FormItem>
                                        <Select
                                            label='Show section'
                                            value='Some value'
                                            required={true}
                                            disabled={false}
                                            onChange={() => false}
                                        >
                                            <Option>Section 1</Option>
                                            <Option>Section 2</Option>
                                        </Select>
                                    </Form.FormItem>
                                </Form.FormGroup>
                                <Form.FormGroup>
                                    <Form.FormItem>
                                        <Input
                                            type='text'
                                            label='Slugline'
                                            value=''
                                            required={false}
                                            disabled={false}
                                            onChange={() => false}
                                        />
                                    </Form.FormItem>
                                    <Form.FormItem>
                                        <Input
                                            type='text'
                                            label='Category'
                                            value=''
                                            required={false}
                                            disabled={false}
                                            onChange={() => false}
                                        />
                                    </Form.FormItem>
                                </Form.FormGroup>
                                <Form.FormGroup>
                                    <Form.FormItem>
                                        <Input
                                            type='text'
                                            label='Author'
                                            value='This is some value'
                                            required={true}
                                            disabled={false}
                                            onChange={() => false}
                                        />
                                    </Form.FormItem>
                                </Form.FormGroup>
                                <Form.FormGroup marginBottom='2'>
                                    <Form.FormItem>
                                        <Input
                                            type='text'
                                            label='Start Time'
                                            value=''
                                            required={true}
                                            disabled={false}
                                            onChange={() => false}
                                        />
                                    </Form.FormItem>
                                    <Form.FormItem>
                                        <Input
                                            type='text'
                                            label='End Time'
                                            value=''
                                            required={true}
                                            disabled={false}
                                            onChange={() => false}
                                        />
                                    </Form.FormItem>
                                    <Form.FormItem>
                                        <Input
                                            type='text'
                                            label='Duration'
                                            value=''
                                            required={true}
                                            disabled={false}
                                            onChange={() => false}
                                        />
                                    </Form.FormItem>
                                </Form.FormGroup>
                            </React.Fragment>
                        )}
                    >
                        <Container direction='column' className='sd-margin-y--2'>
                            <Input
                                label='Rundown title'
                                value={'Marker // 01.06.2022'}
                                boxedStyle={true}
                                boxedLable={true}
                                size='x-large'
                                placeholder='Rundown title'
                                labelHidden={true}
                                type='text'
                                tabindex={0}
                                onChange={(value) => this.setState({inputValue: value})}
                            />
                        </Container>
                        <ButtonGroup>
                            <IconLabel style='translucent' innerLabel='Airtime:' text='19:00 - 19:45' size='large' type='primary' icon='time' />
                            <IconLabel style='translucent' innerLabel='Duration:' text='00:38' size='large' type='warning' />
                            <Text color='light' size='medium' className='sd-margin--0'>OF</Text>
                            <IconLabel style='translucent' innerLabel='Planned:'text='00:45' size='large' />
                        </ButtonGroup>
                        <TableList
                            className='sd-margin-y--4'
                            dragAndDrop
                            addItem
                            array={this.state.array}
                            itemsDropdown={() => [
                                { label: <Label style='translucent' type='primary' text='aacc' />, onSelect: () => 1 },
                                { label: <Label style='translucent' text='prlg' />, onSelect: () => 1 },
                                { label: <Label style='translucent' type='primary' text='prlg' />, onSelect: () => 1 },
                            ]}
                        />
                    </Layout.AuthoringMain>
                </Layout.MainPanel>

                <Layout.RightPanel open={this.props.rightPanel}>
                    <Layout.Panel size='x-large' side='right'>
                        <Layout.PanelContent>
                            <Layout.AuthoringFrame
                                main={
                                    <Layout.AuthoringMain
                                        toolbarCustom={true}
                                        headerCollapsed={true}
                                        toolBar={(
                                            <React.Fragment>
                                                <SubNav className='sd-shadow--z0'>
                                                    <SlidingToolbar>
                                                        <ButtonGroup align='start'>
                                                            <IconButton ariaValue="Close" icon="close-small" onClick={() => this.props.closePanel()} />
                                                        </ButtonGroup>
                                                        <ButtonGroup align='end'>
                                                            <Button text="Save Changes" style='hollow' onClick={() => this.props.closePanel()} type="primary" />
                                                        </ButtonGroup>
                                                    </SlidingToolbar>
                                                </SubNav>

                                                <div className='sd-editor-content__toolbar-inner'>
                                                    <div className="sd-editor-toolbar__content">
                                                        <dl>
                                                            <dt>Created</dt>
                                                            <dd><time title="July 29, 2021 3:58 PM">07/29</time></dd>
                                                            <dt>by</dt>
                                                            <dt>Nareg Asmarian</dt>
                                                        </dl>
                                                        <dl>
                                                            <dt>Modified</dt>
                                                            <dd><time title="July 29, 2021 3:58 PM">07/29</time></dd>
                                                        </dl>
                                                    </div>
                                                </div>
                                            </React.Fragment>
                                        )}
                                        authoringHeader={(
                                            <React.Fragment>
                                                <Form.FormGroup inlineLabel={false}>
                                                    <Form.FormItem>
                                                        <Select
                                                            label='Type'
                                                            value='Type value'
                                                            required={true}
                                                            disabled={false}
                                                            onChange={() => false}
                                                        >
                                                            <Option>Type 1</Option>
                                                            <Option>Type 2</Option>
                                                        </Select>
                                                    </Form.FormItem>
                                                    <Form.FormItem>
                                                        <Select
                                                            label='Show section'
                                                            value='Some value'
                                                            required={true}
                                                            disabled={false}
                                                            onChange={() => false}
                                                        >
                                                            <Option>Section 1</Option>
                                                            <Option>Section 2</Option>
                                                        </Select>
                                                    </Form.FormItem>
                                                </Form.FormGroup>
                                                <Form.FormGroup inlineLabel={false}>
                                                    <Form.FormItem>
                                                        <Select
                                                            label='Duration'
                                                            value='Some value'
                                                            required={true}
                                                            disabled={false}
                                                            onChange={() => false}
                                                        >
                                                            <Option>Option 1</Option>
                                                            <Option>Option 2</Option>
                                                        </Select>
                                                    </Form.FormItem>
                                                    <Form.FormItem>
                                                        <Input
                                                            type='text'
                                                            label='Category'
                                                            value=' '
                                                            required={false}
                                                            disabled={false}
                                                            onChange={() => false}
                                                        />
                                                    </Form.FormItem>
                                                </Form.FormGroup>
                                                <Form.FormGroup inlineLabel={false}>
                                                    <Form.FormItem>
                                                        <Input
                                                            type='text'
                                                            label='Author'
                                                            value='This is some value'
                                                            required={false}
                                                            disabled={false}
                                                            onChange={() => false}
                                                        />
                                                    </Form.FormItem>
                                                </Form.FormGroup>
                                            </React.Fragment>
                                        )}
                                    />
                                }
                                sideBar={(
                                    <Nav.SideBarTabs
                                        items={[
                                            { icon: 'info', size: 'big', tooltip: 'Info', id: '1' },
                                            { icon: 'chat', size: 'big', tooltip: 'Comments', id: '2' },
                                            { icon: 'history', size: 'big', tooltip: 'History', id: '3' },
                                            { icon: 'package', size: 'big', tooltip: 'Packages', id: '4' },
                                            { icon: 'attachment', size: 'big', tooltip: 'Attachments', id: '5' },
                                            { icon: 'comments', size: 'big', tooltip: 'Inline Comments', badgeValue: '5', id: '6' },
                                            { icon: 'suggestion', size: 'big', tooltip: 'Suggestions', id: '7' }
                                        ]}
                                        activeTab={this.state.activeTab}
                                        onActiveTabChange={(id) => {
                                            this.setState({
                                                activeTab: id,
                                            })
                                        }}
                                    />
                                )}
                            />
                        </Layout.PanelContent>
                    </Layout.Panel>
                </Layout.RightPanel>
            </Layout.LayoutContainer>
        );
    }
}
