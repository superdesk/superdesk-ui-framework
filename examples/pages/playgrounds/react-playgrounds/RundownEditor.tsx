import * as React from 'react';
import * as Components from './components/Index';
import { ButtonGroup, Button, NavButton, SubNav, Dropdown, Input, IconButton, Divider, Tooltip, Select, Option, Switch, Icon, AvatarWrapper, AvatarContentImage, AvatarContentText, Text, EmptyState, Alert, SlidingToolbar, TabLabel, Tabs, Heading, RadioButtonGroup, Container, Label, IconLabel } from '../../../../app-typescript/index';
import * as Layout from '../../../../app-typescript/components/Layouts';
import * as Form from '../../../../app-typescript/components/Form';
import * as Nav from '../../../../app-typescript/components/Navigation';
import { BoxedList, BoxedListItem, BoxedListContentRow } from '../../../../app-typescript/components/Lists';
import { SimpleList, SimpleListItem } from '../../../../app-typescript/components/Lists';

interface IProps {
    children?: React.ReactNode;
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
            rightPanelOpen: false,
            rightPanelPinned: false,
            sideOverlayOpen: false,
            
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

    render() {
        return (
                <Layout.LayoutContainer>
                    <Layout.HeaderPanel>       
                        <SubNav>
                            <ButtonGroup align='end'>
                                <Button text="Cancel"  onClick={()=> false} type="default" />
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
                            headerPadding='medium'
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
                                                error='This is error message'
                                                info=''
                                                required={true}
                                                disabled={false}
                                                invalid={false}
                                                onChange={(value) => {}}>
                                                    <Option>Type 1</Option>
                                                    <Option>Type 2</Option>
                                            </Select>
                                        </Form.FormItem>
                                        <Form.FormItem>
                                            <Select
                                                label='Show'
                                                value='show value'
                                                error='This is error message'
                                                info=''
                                                required={true}
                                                disabled={false}
                                                invalid={false}
                                                onChange={(value) => {}}>
                                                    <Option>Marker</Option>
                                                    <Option>Tabu</Option>
                                            </Select>
                                        </Form.FormItem>
                                        <Form.FormItem>
                                            <Select
                                                label='Show section'
                                                value='Some value'
                                                error='This is error message'
                                                info=''
                                                required={true}
                                                disabled={false}
                                                invalid={false}
                                                onChange={(value) => {}}>
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
                                                error='This is error message'
                                                info=''
                                                required={false}
                                                disabled={false}
                                                invalid={false}
                                                onChange={(value) => {}} /> 
                                        </Form.FormItem>
                                        <Form.FormItem>
                                            <Input
                                                type='text'
                                                label='Category'
                                                value=''
                                                error='This is error message'
                                                info=''
                                                required={false}
                                                disabled={false}
                                                invalid={false}
                                                onChange={(value) => {}} /> 
                                        </Form.FormItem>
                                    </Form.FormGroup>
                                    <Form.FormGroup>
                                        <Form.FormItem>
                                            <Input
                                                type='text'
                                                label='Author'
                                                value='This is some value'
                                                error='This is error message'
                                                required={true}
                                                disabled={false}
                                                invalid={false}
                                                onChange={(value) => {}} /> 
                                        </Form.FormItem>
                                    </Form.FormGroup>
                                    <Form.FormGroup marginBottom='2'>
                                        <Form.FormItem>
                                            <Input
                                                type='text'
                                                label='Start Time'
                                                value=''
                                                error='This is error message'
                                                required={true}
                                                disabled={false}
                                                invalid={false}
                                                onChange={(value) => {}} /> 
                                        </Form.FormItem>
                                        <Form.FormItem>
                                            <Input
                                                type='text'
                                                label='End Time'
                                                value=''
                                                error='This is error message'
                                                required={true}
                                                disabled={false}
                                                invalid={false}
                                                onChange={(value) => {}} /> 
                                        </Form.FormItem>
                                        <Form.FormItem>
                                            <Input
                                                type='text'
                                                label='Duration'
                                                value=''
                                                error='This is error message'
                                                required={true}
                                                disabled={false}
                                                invalid={false}
                                                onChange={(value) => {}} /> 
                                        </Form.FormItem>
                                    </Form.FormGroup>
                                </React.Fragment>
                            )}
                            >
                                <Container direction='column' className='sd-margin-y--2'>
                                    <input
                                        type='text'
                                        value='Marker // 01.06.2022'
                                        className='sd-editor__input--title' />
                                </Container>
                                <ButtonGroup>
                                    <IconLabel style='translucent' innerLabel='Airtime:' text='19:00 - 19:45' size='large' type='primary' icon='time' />
                                    <IconLabel style='translucent' innerLabel='Duration:' text='00:38' size='large' type='warning' />
                                    <Text color='light' size='medium' className='sd-margin--0'>OF</Text>
                                    <IconLabel style='translucent' innerLabel='Planned Duration:'text='00:45' size='large' />
                                </ButtonGroup>
                                <Container direction='column' className='sd-margin-y--4'>
                                    <ul className='table-list table-list--contained'>
                                        <li className='table-list__item-container' onClick={() => this.setState({rightPanelOpen: !this.state.rightPanelOpen})}>
                                            <div className='table-list__item table-list__item--clickable table-list__item--draggable'>
                                                <div className='table-list__item-content'>
                                                    <div className='table-list__item-content-block'>
                                                        <Label style='translucent' text='aacc' />
                                                        <Label style='translucent' type='primary' text='prlg' />
                                                    </div>
                                                    <div className='table-list__item-content-block table-list__item-content-block--center'>
                                                        <span>Duis mollis est non commodo</span>
                                                    </div>
                                                    <div className='table-list__item-content-block'>
                                                    <IconLabel style='translucent' innerLabel='Planned:' text='00:20' />
                                                        <IconLabel style='translucent' innerLabel='Duration:' text='00:20' type='success' />
                                                    </div>
                                                </div>
                                                <div className='table-list__slide-in-actions'>
                                                    <IconButton icon='dots-vertical' size='small' ariaValue='More actions' onClick={()=> false} />
                                                </div>
                                            </div>

                                            <div className='table-list__add-bar-container'>
                                                <Tooltip text='Add item' flow='top' appendToBody={true}>
                                                    <div className='table-list__add-bar'>
                                                        <Button type="primary" icon="plus-large" text="Add item" size="small" shape="round" iconOnly={true} onClick={()=> false} />
                                                    </div>
                                                </Tooltip>
                                            </div>
                                        </li>

                                        <li className='table-list__item-container' onClick={() => this.setState({rightPanelOpen: !this.state.rightPanelOpen})}>
                                            <div className='table-list__item table-list__item--clickable table-list__item--draggable'>
                                                <div className='table-list__item-content'>
                                                    <div className='table-list__item-content-block'>
                                                        <Label style='translucent' type='warning' text='pokr' />
                                                        <Label style='translucent' text='slika' />
                                                    </div>
                                                    <div className='table-list__item-content-block table-list__item-content-block--center'>
                                                        <span>Nullam id dolor id nibh ultricies</span>
                                                    </div>
                                                    <div className='table-list__item-content-block'>
                                                        <IconLabel style='translucent' innerLabel='Planned:' text='00:12' />
                                                        <IconLabel style='translucent' innerLabel='Duration:' text='00:11' type='warning' />
                                                    </div>
                                                </div>
                                                <div className='table-list__slide-in-actions'>
                                                    <IconButton icon='dots-vertical' size='small' ariaValue='More actions' onClick={()=> false} />
                                                </div>
                                            </div>

                                            <div className='table-list__add-bar-container'>
                                                <Tooltip text='Add item' flow='top' appendToBody={true}>
                                                    <div className='table-list__add-bar'>
                                                        <Button type="primary" icon="plus-large" text="Add item" size="small" shape="round" iconOnly={true} onClick={()=> false} />
                                                    </div>
                                                </Tooltip>
                                            </div>
                                        </li>

                                        <li className='table-list__item-container'>
                                            <div className='table-list__item table-list__item--clickable table-list__item--draggable'>
                                                <div className='table-list__item-content'>
                                                    <div className='table-list__item-content-block'>
                                                        <Label style='translucent' type='warning' text='pokr' />
                                                        <Label style='translucent' text='slika' />
                                                    </div>
                                                    <div className='table-list__item-content-block table-list__item-content-block--center'>
                                                        <span>Cras mattis consectetur purus</span>
                                                    </div>
                                                    <div className='table-list__item-content-block'>
                                                        <IconLabel style='translucent' innerLabel='Planned:' text='00:14' />
                                                        <IconLabel style='translucent' innerLabel='Duration:' text='00:15' type='alert' />
                                                    </div>
                                                </div>
                                                <div className='table-list__slide-in-actions'>
                                                    <IconButton icon='pencil' size='small' ariaValue='More actions' onClick={()=> false} />
                                                    <IconButton icon='trash' size='small' ariaValue='More actions' onClick={()=> false} />
                                                </div>
                                            </div>

                                            <div className='table-list__add-bar-container'>
                                                <Tooltip text='Add item' flow='top' appendToBody={true}>
                                                    <div className='table-list__add-bar'>
                                                        <Button type="primary" icon="plus-large" text="Add item" size="small" shape="round" iconOnly={true} onClick={()=> false} />
                                                    </div>
                                                </Tooltip>
                                            </div>
                                        </li>
                                    </ul>
                                </Container>

                        </Layout.AuthoringMain>
                    </Layout.MainPanel>

                    <Layout.RightPanel open={this.state.rightPanelOpen}>
                        <Layout.Panel size='x-large' side='right'>
                            <Layout.PanelContent>
                                <Layout.AuthoringFrame 
                                    main={
                                    <Layout.AuthoringMain
                                        headerPadding='medium'
                                        toolbarCustom={true}
                                        toolBar={(
                                            <React.Fragment>
                                                <SubNav className='sd-shadow--z0'>
                                                    <SlidingToolbar>
                                                        <ButtonGroup align='start'>
                                                            <IconButton ariaValue="Close" icon="close-small" onClick={() => this.setState({rightPanelOpen: !this.state.rightPanelOpen})} />
                                                        </ButtonGroup>
                                                        <ButtonGroup align='end'>
                                                            <Button text="Save Changes" style='hollow' onClick={() => this.setState({rightPanelOpen: !this.state.rightPanelOpen})} type="primary" />
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
                                                            error='This is error message'
                                                            info=' '
                                                            required={true}
                                                            disabled={false}
                                                            invalid={false}
                                                            onChange={(value) => {}}>
                                                                <Option>Type 1</Option>
                                                                <Option>Type 2</Option>
                                                        </Select>
                                                    </Form.FormItem>
                                                    <Form.FormItem>
                                                        <Select
                                                            label='Show section'
                                                            value='Some value'
                                                            error='This is error message'
                                                            info=' '
                                                            required={true}
                                                            disabled={false}
                                                            invalid={false}
                                                            onChange={(value) => {}}>
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
                                                            error='This is error message'
                                                            info=' '
                                                            required={true}
                                                            disabled={false}
                                                            invalid={false}
                                                            onChange={(value) => {}}>
                                                                <Option>Option 1</Option>
                                                                <Option>Option 2</Option>
                                                        </Select>
                                                    </Form.FormItem>
                                                    <Form.FormItem>
                                                        <Input
                                                            type='text'
                                                            label='Category'
                                                            value=' '
                                                            error='This is error message'
                                                            info=' '
                                                            required={false}
                                                            disabled={false}
                                                            invalid={false}
                                                            onChange={(value) => {}} /> 
                                                    </Form.FormItem>
                                                </Form.FormGroup>
                                                <Form.FormGroup inlineLabel={false}>
                                                    <Form.FormItem>
                                                        <Input
                                                            type='text'
                                                            label='Author'
                                                            value='This is some value'
                                                            error='This is error message'
                                                            info=' '
                                                            required={false}
                                                            disabled={false}
                                                            invalid={false}
                                                            onChange={(value) => {}} /> 
                                                    </Form.FormItem>
                                                </Form.FormGroup>
                                            </React.Fragment>
                                        )}
                                    >

                                    </Layout.AuthoringMain>
                                    }
                                    sideBar={(
                                        <Nav.SideBarTabs
                                        items={[
                                            { icon: 'info', size: 'big', tooltip: 'Info', onClick: () => this.setState({'sideOverlayOpen': !this.state.sideOverlayOpen}) },
                                            { icon: 'chat', size: 'big', tooltip: 'Comments', onClick: () => this.setState({'sideOverlayOpen': !this.state.sideOverlayOpen}) },
                                            { icon: 'history', size: 'big', tooltip: 'History', onClick: () => this.setState({'sideOverlayOpen': !this.state.sideOverlayOpen}) },
                                            { icon: 'package', size: 'big', tooltip: 'Packages', onClick: () => this.setState({'sideOverlayOpen': !this.state.sideOverlayOpen}) },
                                            { icon: 'attachment', size: 'big', tooltip: 'Attachments', onClick: () => this.setState({'sideOverlayOpen': !this.state.sideOverlayOpen}) },
                                            { icon: 'comments', size: 'big', tooltip: 'Inline Comments', onClick: () => this.setState({'sideOverlayOpen': !this.state.sideOverlayOpen}) },
                                            { icon: 'suggestion', size: 'big', tooltip: 'Suggestions', onClick: () => this.setState({'sideOverlayOpen': !this.state.sideOverlayOpen}) }]} />
                                    )}
                                />
                            </Layout.PanelContent>
                        </Layout.Panel>         
                    </Layout.RightPanel>
                    
                </Layout.LayoutContainer>
        );
    }
}