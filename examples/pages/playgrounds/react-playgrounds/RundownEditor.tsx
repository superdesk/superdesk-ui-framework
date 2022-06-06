import * as React from 'react';
import * as Components from './components/Index';
import { ButtonGroup, Button, NavButton, SubNav, Dropdown, Input, IconButton, Divider, Tooltip, Select, Option, Switch, Icon, AvatarWrapper, AvatarContentImage, AvatarContentText, Text, EmptyState, Alert, SlidingToolbar, TabLabel, Tabs, Heading, RadioButtonGroup } from '../../../../app-typescript/index';
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
                <Components.LayoutContainer>

                    <Components.HeaderPanel>       
                        <SubNav>
                            <ButtonGroup align='end'>
                                <Button text="Cancel" onClick={()=> this.setState({ rightPanelOpen: true,
                                })} type="default" />
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
                    </Components.HeaderPanel>
                    
                    <Components.MainPanel padding='none'>
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
                                    <Form.FormGroup inlineLabel={true}>
                                        <Form.FormItem>
                                            <Input
                                                type='text'
                                                label='Slugline'
                                                value='This is some value'
                                                maxLength={30}
                                                error='This is error message'
                                                info='This is some hint message'
                                                required={false}
                                                disabled={false}
                                                invalid={false}
                                                onChange={(value) => {}} /> 
                                        </Form.FormItem>
                                        <Form.FormItem>
                                            <Input
                                                type='text'
                                                label='Slugline'
                                                value='This is some value'
                                                maxLength={30}
                                                error='This is error message'
                                                info='This is some hint message'
                                                required={false}
                                                disabled={false}
                                                invalid={false}
                                                onChange={(value) => {}} /> 
                                        </Form.FormItem>
                                    </Form.FormGroup>
                                    <Form.FormGroup inlineLabel={true}>
                                        <Form.FormItem>
                                            <Input
                                                type='text'
                                                label='Genre'
                                                value='This is some value'
                                                maxLength={30}
                                                error='This is error message'
                                                info='This is some hint message'
                                                required={false}
                                                disabled={false}
                                                invalid={false}
                                                onChange={(value) => {}} /> 
                                        </Form.FormItem>
                                    </Form.FormGroup>
                                    <Form.FormGroup marginBottom='0' inlineLabel={true}>
                                        <Form.FormItem>
                                            <Input
                                                type='text'
                                                label='Subject'
                                                value='This is some value'
                                                maxLength={30}
                                                error='This is error message'
                                                info='This is some hint message'
                                                required={true}
                                                disabled={false}
                                                invalid={false}
                                                onChange={(value) => {}} /> 
                                        </Form.FormItem>
                                        <Form.FormItem autoWidth={true}>
                                            <Form.FormText>Just testing:</Form.FormText>
                                        </Form.FormItem>
                                        <Form.FormItem>
                                            <Select
                                                label='Categories'
                                                labelHidden={true}
                                                value='This is some value'
                                                error='This is error message'
                                                info='This is some hint message'
                                                required={true}
                                                disabled={false}
                                                invalid={false}
                                                onChange={(value) => {}}>
                                                    <Option>Option 1</Option>
                                                    <Option>Option 2</Option>
                                            </Select>
                                        </Form.FormItem>
                                        <Form.FormItem autoWidth={true}>
                                            <ButtonGroup>
                                                <IconButton ariaValue="Submit" icon="picture" onClick={()=> false} />
                                                <Button text="Cancel" onClick={()=> false} type="default" style="hollow" />
                                                <Button text="Submit" onClick={()=> false} type="primary" />
                                            </ButtonGroup>
                                        </Form.FormItem>
                                    </Form.FormGroup>
                                </React.Fragment>
                            )}
                            >
                                <BoxedList>
                                    <BoxedListItem onClick={() => this.setState({rightPanelOpen: !this.state.rightPanelOpen})} >List Item</BoxedListItem>
                                    <BoxedListItem onClick={() => this.setState({rightPanelOpen: !this.state.rightPanelOpen})} type='default'>List Item</BoxedListItem>
                                    <BoxedListItem onClick={() => this.setState({rightPanelOpen: !this.state.rightPanelOpen})} type='success'>List Item</BoxedListItem>
                                    <BoxedListItem onClick={() => this.setState({rightPanelOpen: !this.state.rightPanelOpen})} type='warning'>List Item</BoxedListItem>
                                    <BoxedListItem onClick={() => this.setState({rightPanelOpen: !this.state.rightPanelOpen})} type='alert'>List Item</BoxedListItem>
                                    <BoxedListItem onClick={() => this.setState({rightPanelOpen: !this.state.rightPanelOpen})} type='highlight'>List Item</BoxedListItem>
                                </BoxedList>
                        </Layout.AuthoringMain>
                    </Components.MainPanel>

                    <Components.RightPanel open={this.state.rightPanelOpen}>
                        <Layout.Panel size='xx-large' side='right'>
                            <Layout.PanelContent>
                                <Layout.AuthoringFrame 
                                    main={
                                    <Layout.AuthoringMain
                                        toolBar={(
                                            <React.Fragment>
                                                <SubNav zIndex={999}>
                                                    <ButtonGroup align='end'>
                                                        
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
                                                <Form.FormGroup inlineLabel={false}>
                                                    <Form.FormItem>
                                                        <Input
                                                            type='text'
                                                            label='Slugline'
                                                            value='This is some value'
                                                            maxLength={30}
                                                            error='This is error message'
                                                            info='This is some hint message'
                                                            required={false}
                                                            disabled={false}
                                                            invalid={false}
                                                            onChange={(value) => {}} /> 
                                                    </Form.FormItem>
                                                    <Form.FormItem>
                                                        <Input
                                                            type='text'
                                                            label='Slugline'
                                                            value='This is some value'
                                                            maxLength={30}
                                                            error='This is error message'
                                                            info='This is some hint message'
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
                                                            label='Genre'
                                                            value='This is some value'
                                                            maxLength={30}
                                                            error='This is error message'
                                                            info='This is some hint message'
                                                            required={false}
                                                            disabled={false}
                                                            invalid={false}
                                                            onChange={(value) => {}} /> 
                                                    </Form.FormItem>
                                                </Form.FormGroup>
                                                <Form.FormGroup marginBottom='0' inlineLabel={true}>
                                                    <Form.FormItem>
                                                        <Input
                                                            type='text'
                                                            label='Subject'
                                                            value='This is some value'
                                                            maxLength={30}
                                                            error='This is error message'
                                                            info='This is some hint message'
                                                            required={true}
                                                            disabled={false}
                                                            invalid={false}
                                                            onChange={(value) => {}} /> 
                                                    </Form.FormItem>
                                                    <Form.FormItem autoWidth={false}>
                                                        <Form.FormText>Just testing:</Form.FormText>
                                                    </Form.FormItem>
                                                    <Form.FormItem>
                                                        <Select
                                                            label='Categories'
                                                            labelHidden={true}
                                                            value='This is some value'
                                                            error='This is error message'
                                                            info='This is some hint message'
                                                            required={true}
                                                            disabled={false}
                                                            invalid={false}
                                                            onChange={(value) => {}}>
                                                                <Option>Option 1</Option>
                                                                <Option>Option 2</Option>
                                                        </Select>
                                                    </Form.FormItem>
                                                </Form.FormGroup>
                                            </React.Fragment>
                                        )}
                                    >
                                        <BoxedList>
                                            <BoxedListItem >List Item</BoxedListItem>
                                            <BoxedListItem type='default'>List Item</BoxedListItem>
                                            <BoxedListItem type='success'>List Item</BoxedListItem>
                                            <BoxedListItem type='warning'>List Item</BoxedListItem>
                                            <BoxedListItem type='alert'>List Item</BoxedListItem>
                                            <BoxedListItem type='highlight'>List Item</BoxedListItem>
                                        </BoxedList>
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
                    </Components.RightPanel>
                    
                </Components.LayoutContainer>
        );
    }
}