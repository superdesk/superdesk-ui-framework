import * as React from 'react';
import { ButtonGroup, Button, NavButton, SubNav, Dropdown, Input, IconButton, Tooltip, Select, Option, Icon, AvatarWrapper, AvatarContentText, Modal } from '../../../../app-typescript/index';
import * as Layout from '../../../../app-typescript/components/Layouts';
import * as Form from '../../../../app-typescript/components/Form';
import * as Nav from '../../../../app-typescript/components/Navigation';
import { BoxedList, BoxedListItem, BoxedListContentRow } from '../../../../app-typescript/components/Lists';
import { Spacer } from '@superdesk/common';

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
    sideBarOpen: boolean;
    arr: any;
}

export class Multiedit extends React.Component<IProps, IState> {
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
            sideBarOpen: false,
            arr: [<Editor />, <Editor />],

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
            <Modal
                className='p-dialog-flex'
                onHide={() => false}
                maximized={true} contentPadding={"none"}
                headerTemplate="Multiedit"
                visible={true}
            >
                <Spacer children={this.state.arr} gap={'0'} />
                <div
                    style={{
                        padding: '0 20px',
                        display: 'flex',
                        alignItems: 'center'
                    }}
                >
                    <Dropdown
                        append
                        items={[
                            { label: 'Action 1', onSelect: () => this.setState({arr: [...this.state.arr, <Editor />]}) },
                        ]}
                    >
                        <Button type="primary" icon="plus-large" text="Add article" style="filled" size="large" shape="round" iconOnly={true} onClick={()=> false} />
                    </Dropdown>
                </div>
            </Modal>
        );
    }
}

interface IEditor {
    sideBarOpen?: boolean;
    activeTab: string | null;
}

export class Editor extends React.Component<{}, IEditor> {
    constructor(props: IEditor) {
        super(props);
        this.state = {
            sideBarOpen: false,
            activeTab: '1',
        }
    }

    render() {
    return (
        <div style={{borderRight: '4px solid grey'}}>
            <Layout.AuthoringFrame
                header={(
                    <SubNav zIndex={2}>
                        <ButtonGroup align='end'>
                            <ButtonGroup subgroup={true} spaces="no-space">
                                <Tooltip text='More actions' flow='left'>
                                    <NavButton type='default' icon='dots-vertical' text='More actions' onClick={()=> false} />
                                </Tooltip>
                                <Tooltip text='Send to / Publish' flow='left'>
                                    <NavButton type='highlight' icon='send-to' iconSize='big' text='Send to / Publish' onClick={()=> false} />
                                </Tooltip>
                                <Tooltip text='Send to / Publish' flow='left'>
                                    <NavButton type='darker' icon={this.state.sideBarOpen ? 'forward-thin' : 'backward-thin'} text='More actions' onClick={()=> this.setState({sideBarOpen: !this.state.sideBarOpen})} />
                                </Tooltip>
                            </ButtonGroup>
                        </ButtonGroup>
                    </SubNav>
                )}
                main={(
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
                                <ButtonGroup align='end'>
                                    <IconButton icon="preview-mode" toolTipAppend={true} ariaValue="Print preview" onClick={()=> false} />
                                    <IconButton icon="adjust" ariaValue="Toogle theme" onClick={()=> false} />
                                    <IconButton icon="switches" ariaValue="Theme settings" onClick={()=> false} />
                                </ButtonGroup>
                            </React.Fragment>
                        )}
                        authoringHeader ={(
                            <React.Fragment>
                                <Form.FormGroup inlineLabel={true}>
                                    <Form.FormItem>
                                        <Input
                                            type='text'
                                            label='Slugline'
                                            value='This is some value'
                                            maxLength={30}
                                            info='This is some hint message'
                                            required={false}
                                            disabled={false}
                                            onChange={() => false}
                                        />
                                    </Form.FormItem>
                                    <Form.FormItem>
                                        <Input
                                            type='text'
                                            label='Slugline'
                                            value='This is some value'
                                            maxLength={30}
                                            info='This is some hint message'
                                            required={false}
                                            disabled={false}
                                            onChange={() => false}
                                        />
                                    </Form.FormItem>
                                </Form.FormGroup>
                                <Form.FormGroup inlineLabel={true}>
                                    <Form.FormItem>
                                        <Input
                                            type='text'
                                            label='Genre'
                                            value='This is some value'
                                            maxLength={30}
                                            info='This is some hint message'
                                            required={false}
                                            disabled={false}
                                            onChange={() => false}
                                        />
                                    </Form.FormItem>
                                </Form.FormGroup>
                                <Form.FormGroup marginBottom='0' inlineLabel={true}>
                                    <Form.FormItem>
                                        <Input
                                            type='text'
                                            label='Subject'
                                            value='This is some value'
                                            maxLength={30}
                                            info='This is some hint message'
                                            required={true}
                                            disabled={false}
                                            onChange={() => false}
                                        />
                                    </Form.FormItem>
                                    <Form.FormItem autoWidth={true}>
                                        <Form.FormText>Just testing:</Form.FormText>
                                    </Form.FormItem>
                                    <Form.FormItem>
                                        <Select
                                            label='Categories'
                                            labelHidden={true}
                                            value='This is some value'
                                            info='This is some hint message'
                                            required={true}
                                            disabled={false}
                                            onChange={() => false}
                                        >
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
                    />
                )}
                sidePanel={(
                    <Layout.Panel side='right' background='grey' open={false} size='x-small'>
                        <Layout.PanelHeader title='Pinned content' onClose={() => false}>
                        </Layout.PanelHeader>
                        <Layout.PanelContent>
                            <Layout.PanelContentBlock>
                                <BoxedList density='comfortable'>
                                    <BoxedListItem
                                        type="success"
                                        clickable={true}
                                        media={(
                                            <Icon name='slideshow'  />
                                        )}
                                        actions={(
                                            <IconButton icon="dots-vertical" ariaValue="More actions" onClick={()=> false} />
                                        )}
                                    >
                                        <BoxedListContentRow>
                                            Maecenas sed diam eget risus varius blandit sit amet non magna. Vestibulum id ligula porta felis euismod semper.
                                        </BoxedListContentRow>
                                        <BoxedListContentRow>
                                            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                                        </BoxedListContentRow>
                                    </BoxedListItem>
                                    <BoxedListItem
                                        type="warning"
                                        media={(
                                            <AvatarWrapper size="medium">
                                                <AvatarContentText text="JL" tooltipText="Jeffrey Lebowski" />
                                            </AvatarWrapper>
                                        )}
                                        footer={(
                                            <ButtonGroup align="end">
                                                <Button text="cancel" size="small" style="hollow" onClick={()=> false} />
                                                <Button text="yes" size="small" style="hollow" type="primary" onClick={()=> false} />
                                            </ButtonGroup>
                                        )}
                                        actions={(
                                            <IconButton icon="dots-vertical" ariaValue="More actions" onClick={()=> false} />
                                        )}
                                    >
                                        <BoxedListContentRow>
                                            Maecenas sed diam eget risus varius blandit sit amet magna.
                                        </BoxedListContentRow>
                                    </BoxedListItem>
                                    <BoxedListItem
                                        selected={true}
                                        actions={(
                                            <IconButton icon="dots-vertical" ariaValue="More actions" onClick={()=> false} />
                                        )}
                                    >
                                        <BoxedListContentRow>
                                            Maecenas sed diam eget risus varius blandit sit amet magna. Vestibulum id ligula porta felis euismod semper.
                                        </BoxedListContentRow>
                                    </BoxedListItem>
                                </BoxedList>
                            </Layout.PanelContentBlock>
                        </Layout.PanelContent>
                    </Layout.Panel>
                )}
                sideBarClosed={this.state.sideBarOpen}
                sideBar={(
                    <Nav.SideBarTabs
                        items={[
                            { icon: 'info', size: 'big', tooltip: 'Info', id: '1' },
                            { icon: 'chat', size: 'big', tooltip: 'Comments', id: '2' },
                            { icon: 'history', size: 'big', tooltip: 'History', id: '3' },
                            { icon: 'package', size: 'big', tooltip: 'Packages', id: '4' },
                            { icon: 'attachment', size: 'big', tooltip: 'Attachments', id: '5'},
                            { icon: 'comments', size: 'big', tooltip: 'Inline Comments', id: '6' },
                            { icon: 'suggestion', size: 'big', tooltip: 'Suggestions', id: '7' }
                        ]}
                        activeTab={this.state.activeTab}
                        onActiveTabChange={(val) => {
                            this.setState({
                                activeTab: val,
                            })
                        }}
                    />
                )}
            />
        </div>
    )
    }
}
