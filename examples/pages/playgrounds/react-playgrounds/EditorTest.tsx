import * as React from 'react';
import * as Components from './components/Index';
import { ButtonGroup, Button, NavButton, SubNav, Dropdown, Input, IconButton, Divider, Tooltip } from '../../../../app-typescript/index';
import * as Layout from '../../../../app-typescript/components/Layouts';
import * as Form from '../../../../app-typescript/components/Form';
import * as Nav from '../../../../app-typescript/components/Navigation';

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
    leftPanelOpen: boolean;
    rightPanelOpen: boolean;
    rightPanelPinned: boolean;
    sideOverlayOpen: boolean;
}

export class EditorTest extends React.Component<IProps, IState> {
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
            <Layout.AuthoringFrame
            header={(
<SubNav zIndex={2}>
                    <ButtonGroup align='right'>
                        <Button
                                text="Open pinned"
                                style="hollow"
                                onClick={() => this.setState({'rightPanelOpen': !this.state.rightPanelOpen})}
                            />
                        <Divider size="mini" />
                        <ButtonGroup subgroup={true} spaces="no-space">
                            <Dropdown
                                items={[
                                    {
                                        type: 'group', label: 'Chose a theme', items: [
                                            'divider',
                                            { label: 'Light', onSelect: () => this.handleTheme('light-ui')},
                                            { label: 'Dark', onSelect: () => this.handleTheme('dark-ui')},
                                        ]
                                    },
                                ]}>
                                <NavButton type='default' icon='adjust' onClick={()=> false} />
                            </Dropdown>
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
            )}
            leftPanel={(
                <Nav.SideBarTabs
                items={[
                    { icon: 'semantics', size: 'big', tooltip: 'Semantics', onClick: () => this.setState({'sideOverlayOpen': !this.state.sideOverlayOpen}) },
                    { icon: 'create-list', size: 'big', tooltip: 'Create list', onClick: () => this.setState({'sideOverlayOpen': !this.state.sideOverlayOpen}) },
                    { icon: 'picture', size: 'big', tooltip: 'Pictures', onClick: () => this.setState({'sideOverlayOpen': !this.state.sideOverlayOpen}) },
                    { icon: 'annotation', size: 'big', tooltip: 'Annotations', onClick: () => this.setState({'sideOverlayOpen': !this.state.sideOverlayOpen}) },
                    { icon: 'export', size: 'big', tooltip: 'Export', onClick: () => this.setState({'sideOverlayOpen': !this.state.sideOverlayOpen}) }]} />

            )}
            main={(
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
                        <ButtonGroup  align='right'>
                            <IconButton icon="preview-mode" ariaValue="Print preview" onClick={()=> false} />
                            <IconButton icon="adjust" ariaValue="Toogle theme" onClick={()=> false} />
                            <IconButton icon="switches" ariaValue="Theme settings" onClick={()=> false} />
                        </ButtonGroup>
                    </React.Fragment>
                )}
                authoringHeader={(
                    <React.Fragment>
                        <Form.FormGroup>
                            <Form.FormItem>
                                <Input label='Slugline'
                                    value='This is some value'
                                    maxLength={30}
                                    error='This is error message'
                                    info='This is some hint message'
                                    inlineLabel={true}
                                    required={false}
                                    disabled={false}
                                    invalid={false}
                                    onChange={(value) => {}} /> 
                            </Form.FormItem>
                        </Form.FormGroup>
                        <Form.FormGroup>
                            <Form.FormItem>
                                <Input label='Genre'
                                    value='This is some value'
                                    maxLength={30}
                                    error='This is error message'
                                    info='This is some hint message'
                                    inlineLabel={true}
                                    required={false}
                                    disabled={false}
                                    invalid={false}
                                    onChange={(value) => {}} /> 
                            </Form.FormItem>
                        </Form.FormGroup>
                        <Form.FormGroup marginBottom='0'>
                            <Form.FormItem>
                                <Input label='Subject'
                                    value='This is some value'
                                    maxLength={30}
                                    error='This is error message'
                                    info='This is some hint message'
                                    inlineLabel={true}
                                    required={true}
                                    disabled={false}
                                    invalid={false}
                                    onChange={(value) => {}} /> 
                            </Form.FormItem>
                            <Form.FormItem>
                                <Input label='Categories'
                                    value='This is some value'
                                    maxLength={30}
                                    error='This is error message'
                                    info='This is some hint message'
                                    inlineLabel={true}
                                    required={true}
                                    disabled={false}
                                    invalid={false}
                                    onChange={(value) => {}} /> 
                            </Form.FormItem>
                        </Form.FormGroup>
                    </React.Fragment>
                )}
                authoringBookmarks={(
                    // <span></span>
                    <Nav.QuickNavBar
                        items={[
                            { icon: 'heading-1', tooltip: 'Headline', onClick: () => false },
                            { icon: 'align-left', tooltip: 'Body', onClick: () => false },
                            { icon: 'picture', tooltip: 'Media', onClick: () => false },
                            { icon: 'attachment-large', tooltip: 'Attachments', onClick: () => false }]} />
                        )}>

                            <p className='sd-margin-b--3'>Maecenas sed diam eget risus varius blandit sit amet non magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas faucibus mollis interdum.
                                Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean lacinia bibendum nulla sed consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <p className='sd-margin-b--3'>Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
                                vestibulum. Nullam quis risus eget urna mollis ornare vel eu leo. Curabitur blandit tempus porttitor. Aenean lacinia bibendum nulla sed consectetur. Morbi leo
                                risus, porta ac consectetur ac, vestibulum at eros.</p>
                            <p className='sd-margin-b--3'>Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas sed diam eget risus varius blandit sit amet non magna. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
                                vestibulum. Nullam quis risus eget urna mollis ornare vel eu leo. Donec ullamcorper nulla non metus auctor fringilla. Donec id elit non mi porta gravida at eget metus. Morbi leo risus, porta ac consectetur ac,
                                vestibulum at eros. Curabitur blandit tempus porttitor. Vestibulum id ligula porta felis euismod semper. Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
                            <p>Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra
                                augue. Cras mattis consectetur purus sit amet fermentum. Maecenas faucibus mollis interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus
                                sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur
                                purus sit amet fermentum.</p>
                            <Layout.Container className='trtmrt'>
                                <span>Curabitur blandit tempus porttitor.</span>
                            </Layout.Container>
                </Layout.AuthoringMain>
            )}
            sidePanelPinned={this.state.rightPanelOpen}
            sidePanel={(
                <Layout.Panel side='right' background='grey' open={this.state.rightPanelOpen} size='x-small'>
                    <Layout.PanelHeader title='Pinned content' onClose={() => this.setState({'rightPanelOpen': false})}>
                    </Layout.PanelHeader>
                    <Layout.PanelContent>
                        <Layout.PanelContentBlock>
                            <p className='sd-margin-b--3'>Maecenas sed diam eget risus varius blandit sit amet non magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas faucibus mollis interdum.
                                Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean lacinia bibendum nulla sed consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <p className='sd-margin-b--3'>Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
                                vestibulum. Nullam quis risus eget urna mollis ornare vel eu leo. Curabitur blandit tempus porttitor. Aenean lacinia bibendum nulla sed consectetur.</p>
                            <p className='sd-margin-b--3'>Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas sed diam eget risus varius blandit sit amet non magna. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
                                vestibulum. Nullam quis risus eget urna mollis ornare vel eu leo. Donec ullamcorper nulla non metus auctor fringilla. Donec id elit non mi porta gravida at eget metus. Morbi leo risus, porta ac consectetur ac,
                                vestibulum at eros. Curabitur blandit tempus porttitor. Vestibulum id ligula porta felis euismod semper. Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
                            <p>Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra
                                augue. Cras mattis consectetur purus sit amet fermentum. Maecenas faucibus mollis interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus
                                sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur
                                purus sit amet fermentum.</p>

                        </Layout.PanelContentBlock>
                    </Layout.PanelContent>
                </Layout.Panel>
            )}
            sideOverlayOpen={this.state.sideOverlayOpen}
            sideOverlay={(
                <Layout.Panel background='light' open={this.state.sideOverlayOpen} size='x-small'>
                    <Layout.PanelHeader title='Overlay Panel content' onClose={() => this.setState({'sideOverlayOpen': false})}>
                    </Layout.PanelHeader>
                    <Layout.PanelContent>
                        <Layout.PanelContentBlock>
                            <p className='sd-margin-b--3'>Cras mattis consectetur purus sit amet fermentum. Curabitur blandit tempus porttitor. Aenean eu leo quam. Pellentesque ornare sem lacinia
                            quam venenatis vestibulum. Nullam quis risus eget urna mollis ornare vel eu leo. Vestibulum id ligula porta felis euismod semper. Nullam quis risus eget urna mollis ornare.</p>
                            <p className='sd-margin-b--3'>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh,ut
                            fermentum massa justo sit amet risus. Maecenas faucibus mollis interdum.</p>
                            <p>Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
                                vestibulum. Nullam quis risus eget urna mollis ornare vel eu leo. Curabitur blandit tempus porttitor. Aenean lacinia bibendum nulla sed consectetur. Morbi leo
                                risus, porta ac consectetur ac, vestibulum at eros.</p>
                        </Layout.PanelContentBlock>
                    </Layout.PanelContent>
                </Layout.Panel>
            )}
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
            overlayPanel={(
                <div></div>
            )}
        />
        );
    }
}
