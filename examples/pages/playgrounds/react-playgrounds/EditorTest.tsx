import * as React from 'react';
import {
    ButtonGroup,
    Button,
    NavButton,
    SubNav,
    Dropdown,
    Input,
    IconButton,
    Divider,
    Tooltip,
    Switch,
    Icon,
    Avatar,
    Text,
    EmptyState,
    Heading,
    TreeSelect,
} from '../../../../app-typescript/index';
import * as Layout from '../../../../app-typescript/components/Layouts';
import * as Form from '../../../../app-typescript/components/Form';
import * as Nav from '../../../../app-typescript/components/Navigation';
import {BoxedList, BoxedListItem, BoxedListContentRow} from '../../../../app-typescript/components/Lists';
import {SimpleList, SimpleListItem} from '../../../../app-typescript/components/Lists';

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
    activeTab: string | null;
}

const singleSelectOptions = [
    {
        value: {name: 'Category1', border: 'red'},
        children: [
            {
                value: {name: 'Sub-category1'},
                children: [{value: {name: 'Item5'}}, {value: {name: 'Item6'}}],
            },
            {
                value: {name: 'Sub-category2'},
                children: [{value: {name: 'Item7'}}, {value: {name: 'Item8'}}],
            },
            {
                value: {name: 'Sub-category3'},
                children: [{value: {name: 'Item9'}}, {value: {name: 'Item10'}}],
            },
            {
                value: {name: 'Sub-category4'},
                children: [{value: {name: 'Item11'}}, {value: {name: 'Item12'}}],
            },
            {
                value: {name: 'Sub-category5'},
                children: [{value: {name: 'Item13'}}, {value: {name: 'Item14'}}],
            },
            {
                value: {name: 'Sub-category6'},
                children: [{value: {name: 'Item15'}}, {value: {name: 'Item16'}}],
            },
        ],
    },
    {
        value: {name: 'Category2', border: 'green'},
        children: [
            {
                value: {name: 'Item1'},
            },
            {
                value: {name: 'Item2'},
            },
        ],
    },
    {
        value: {name: 'Category3', border: 'yellow'},
        children: [
            {
                value: {name: 'Item3'},
            },
            {
                value: {name: 'Item4'},
            },
        ],
    },
];

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
            value2: false,
            value3: false,
            leftPanelOpen: false,
            rightPanelOpen: false,
            rightPanelPinned: false,
            sideOverlayOpen: false,
            activeTab: '1',
        };
        this.handleTheme = this.handleTheme.bind(this);
    }

    handleTheme(newTheme: string) {
        this.setState({
            theme: newTheme,
        });
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
                header={
                    <SubNav>
                        <ButtonGroup align="end">
                            <Button
                                text="Open pinned"
                                style="hollow"
                                onClick={() => this.setState({rightPanelOpen: !this.state.rightPanelOpen})}
                            />
                            <Divider size="mini" />
                            <ButtonGroup subgroup={true} spaces="no-space">
                                <Dropdown
                                    items={[
                                        {
                                            type: 'group',
                                            label: 'Chose a theme',
                                            items: [
                                                'divider',
                                                {label: 'Light', onSelect: () => this.handleTheme('light-ui')},
                                                {label: 'Dark', onSelect: () => this.handleTheme('dark-ui')},
                                            ],
                                        },
                                    ]}
                                >
                                    <NavButton type="default" icon="adjust" onClick={() => false} />
                                </Dropdown>
                                <Tooltip text="Minimize" flow="left">
                                    <NavButton
                                        type="default"
                                        icon="minimize"
                                        iconSize="big"
                                        text="Minimize"
                                        onClick={() => false}
                                    />
                                </Tooltip>
                                <Tooltip text="More actions" flow="left">
                                    <NavButton
                                        type="default"
                                        icon="dots-vertical"
                                        text="More actions"
                                        onClick={() => false}
                                    />
                                </Tooltip>
                                <Tooltip text="Send to / Publish" flow="left">
                                    <NavButton
                                        type="highlight"
                                        icon="send-to"
                                        iconSize="big"
                                        text="Send to / Publish"
                                        onClick={() => false}
                                    />
                                </Tooltip>
                            </ButtonGroup>
                        </ButtonGroup>
                    </SubNav>
                }
                leftPanel={
                    <Nav.SideBarTabs
                        items={[
                            {icon: 'semantics', size: 'big', tooltip: 'Semantics', id: '1'},
                            {icon: 'create-list', size: 'big', tooltip: 'Create list', id: '2'},
                            {icon: 'picture', size: 'big', tooltip: 'Pictures', id: '3'},
                            {icon: 'annotation', size: 'big', tooltip: 'Annotations', id: '4'},
                            {icon: 'export', size: 'big', tooltip: 'Export', id: '5'},
                        ]}
                        activeTab={this.state.activeTab}
                        onActiveTabChange={(val) => {
                            this.setState({
                                activeTab: val,
                            });
                        }}
                    />
                }
                main={
                    <Layout.AuthoringMain
                        headerPadding={{
                            top: 10,
                        }}
                        toolBar={
                            <React.Fragment>
                                <div className="sd-editor-toolbar__content">
                                    <dl>
                                        <dt>Created</dt>
                                        <dd>
                                            <time title="July 29, 2021 3:58 PM">07/29</time>
                                        </dd>
                                        <dt>by</dt>
                                        <dt>Nareg Asmarian</dt>
                                    </dl>
                                    <dl>
                                        <dt>Modified</dt>
                                        <dd>
                                            <time title="July 29, 2021 3:58 PM">07/29</time>
                                        </dd>
                                    </dl>
                                </div>
                                <ButtonGroup align="end">
                                    <IconButton
                                        icon="preview-mode"
                                        toolTipAppend={true}
                                        ariaValue="Print preview"
                                        onClick={() => false}
                                    />
                                    <IconButton icon="adjust" ariaValue="Toogle theme" onClick={() => false} />
                                    <IconButton icon="switches" ariaValue="Theme settings" onClick={() => false} />
                                </ButtonGroup>
                            </React.Fragment>
                        }
                        authoringHeader={
                            <React.Fragment>
                                <Form.FormGroup>
                                    <Form.FormItem>
                                        <Input
                                            type="text"
                                            label="Slugline"
                                            value="This is some value"
                                            maxLength={30}
                                            info="This is some hint message"
                                            required={false}
                                            disabled={false}
                                            onChange={() => false}
                                        />
                                    </Form.FormItem>
                                    <Form.FormItem>
                                        <Input
                                            type="text"
                                            label="Slugline"
                                            value="This is some value"
                                            maxLength={30}
                                            info="This is some hint message"
                                            required={false}
                                            disabled={false}
                                            onChange={() => false}
                                        />
                                    </Form.FormItem>
                                    <Form.FormItem>
                                        <Input
                                            type="text"
                                            label="Slugline"
                                            value="This is some value"
                                            maxLength={30}
                                            info="This is some hint message"
                                            required={false}
                                            disabled={false}
                                            onChange={() => false}
                                        />
                                    </Form.FormItem>
                                </Form.FormGroup>
                                <Form.FormGroup>
                                    <Form.FormItem>
                                        <Input
                                            type="text"
                                            label="Genre"
                                            value="This is some value"
                                            maxLength={30}
                                            info="This is some hint message"
                                            required={false}
                                            disabled={false}
                                            onChange={() => false}
                                        />
                                    </Form.FormItem>
                                </Form.FormGroup>
                                <Form.FormGroup marginBottom="0">
                                    <Form.FormItem>
                                        <Input
                                            type="text"
                                            label="Subject"
                                            value="This is some value"
                                            maxLength={30}
                                            info="This is some hint message"
                                            required={true}
                                            disabled={false}
                                            onChange={() => false}
                                        />
                                    </Form.FormItem>
                                    <Form.FormItem autoWidth={true}>
                                        <Form.FormText>Just testing:</Form.FormText>
                                    </Form.FormItem>
                                    <Form.FormItem>
                                        <TreeSelect
                                            kind="synchronous"
                                            value={[]}
                                            getOptions={() => singleSelectOptions}
                                            getLabel={(item) => item.name}
                                            getId={(item) => item.name}
                                            getBorderColor={(item) => item.border}
                                            selectBranchWithChildren
                                            label="TreeSelect Label"
                                            // info="Info Message"
                                            labelHidden={true}
                                            placeholder="Select one"
                                            optionTemplate={(item: any) => {
                                                return <div>Label: {item.name}</div>;
                                            }}
                                            valueTemplate={(item: any, Wrapper) => {
                                                return (
                                                    <Wrapper backgroundColor={item.bgColor}>
                                                        <span>{item.name}</span>
                                                    </Wrapper>
                                                );
                                            }}
                                            onChange={() => false}
                                        />
                                        {/* <Dropdown
                                            items={[
                                                { label: 'Action 1', onSelect: () => 1 },
                                                { label: 'Action 2', onSelect: () => 1 },
                                                { label: 'Action 3', onSelect: () => 1 },
                                            ]}>
                                        Toogle button
                                        </Dropdown> */}
                                    </Form.FormItem>
                                    <Form.FormItem autoWidth={true}>
                                        <ButtonGroup>
                                            <IconButton ariaValue="Submit" icon="picture" onClick={() => false} />
                                            <Button text="Cancel" onClick={() => false} type="default" style="hollow" />
                                            <Button text="Submit" onClick={() => false} type="primary" />
                                        </ButtonGroup>
                                    </Form.FormItem>
                                </Form.FormGroup>
                            </React.Fragment>
                        }
                        authoringBookmarks={
                            <Nav.QuickNavBar
                                scrollSpy="#scroll"
                                offset={-300}
                                items={[
                                    {icon: 'heading-1', tooltip: 'Headline', onClick: () => false, id: 'section1'},
                                    {icon: 'align-left', tooltip: 'Body', onClick: () => false, id: 'section2'},
                                    {icon: 'picture', tooltip: 'Media', onClick: () => false, id: 'section3'},
                                    {
                                        icon: 'attachment-large',
                                        tooltip: 'Attachments',
                                        onClick: () => false,
                                        id: 'section4',
                                    },
                                ]}
                            />
                        }
                    >
                        <div id="scroll" style={{overflow: 'scroll', height: 600}}>
                            <div id="section1">
                                <Heading type="h1" className="sd-padding--5">
                                    Section 1
                                </Heading>
                                <p className="sd-margin-b--3">
                                    Maecenas sed diam eget risus varius blandit sit amet non magna. Lorem ipsum dolor
                                    sit amet, consectetur adipiscing elit. Maecenas faucibus mollis interdum. Cras justo
                                    odio, dapibus ac facilisis in, egestas eget quam. Aenean lacinia bibendum nulla sed
                                    consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>
                                <p className="sd-margin-b--3">
                                    Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna
                                    mollis euismod. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
                                    vestibulum. Nullam quis risus eget urna mollis ornare vel eu leo. Curabitur blandit
                                    tempus porttitor. Aenean lacinia bibendum nulla sed consectetur. Morbi leo risus,
                                    porta ac consectetur ac, vestibulum at eros.
                                </p>
                                <p className="sd-margin-b--3">
                                    Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas sed diam eget risus
                                    varius blandit sit amet non magna. Aenean eu leo quam. Pellentesque ornare sem
                                    lacinia quam venenatis vestibulum. Nullam quis risus eget urna mollis ornare vel eu
                                    leo. Donec ullamcorper nulla non metus auctor fringilla. Donec id elit non mi porta
                                    gravida at eget metus. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                                    Curabitur blandit tempus porttitor. Vestibulum id ligula porta felis euismod semper.
                                    Maecenas sed diam eget risus varius blandit sit amet non magna.
                                </p>
                                <p>
                                    Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu
                                    leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit
                                    libero, a pharetra augue. Cras mattis consectetur purus sit amet fermentum. Maecenas
                                    faucibus mollis interdum. Cum sociis natoque penatibus et magnis dis parturient
                                    montes, nascetur ridiculus mus. Vivamus sagittis lacus vel augue laoreet rutrum
                                    faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor
                                    ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
                                    fermentum.
                                </p>
                                <Layout.Container
                                    gap="large"
                                    className="sd-border--medium sd-font-size--medium sd-padding--2 sd-radius--large"
                                >
                                    <span>Curabitur blandit tempus porttitor.</span>
                                    <Button text="Test button" type="primary" onClick={() => false} />
                                    <Button text="Test button" type="highlight" onClick={() => false} />
                                    <ButtonGroup align="end">
                                        <Button text="Cancel" onClick={() => false} type="default" style="hollow" />
                                        <Button text="Submit" onClick={() => false} type="primary" />
                                    </ButtonGroup>
                                </Layout.Container>
                            </div>

                            <div id="section2">
                                <Heading type="h1" className="sd-padding--5">
                                    Section 2
                                </Heading>
                                <p className="sd-margin-b--3">
                                    Maecenas sed diam eget risus varius blandit sit amet non magna. Lorem ipsum dolor
                                    sit amet, consectetur adipiscing elit. Maecenas faucibus mollis interdum. Cras justo
                                    odio, dapibus ac facilisis in, egestas eget quam. Aenean lacinia bibendum nulla sed
                                    consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>
                                <p className="sd-margin-b--3">
                                    Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna
                                    mollis euismod. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
                                    vestibulum. Nullam quis risus eget urna mollis ornare vel eu leo. Curabitur blandit
                                    tempus porttitor. Aenean lacinia bibendum nulla sed consectetur. Morbi leo risus,
                                    porta ac consectetur ac, vestibulum at eros.
                                </p>
                                <p className="sd-margin-b--3">
                                    Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas sed diam eget risus
                                    varius blandit sit amet non magna. Aenean eu leo quam. Pellentesque ornare sem
                                    lacinia quam venenatis vestibulum. Nullam quis risus eget urna mollis ornare vel eu
                                    leo. Donec ullamcorper nulla non metus auctor fringilla. Donec id elit non mi porta
                                    gravida at eget metus. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                                    Curabitur blandit tempus porttitor. Vestibulum id ligula porta felis euismod semper.
                                    Maecenas sed diam eget risus varius blandit sit amet non magna.
                                </p>
                                <p>
                                    Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu
                                    leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit
                                    libero, a pharetra augue. Cras mattis consectetur purus sit amet fermentum. Maecenas
                                    faucibus mollis interdum. Cum sociis natoque penatibus et magnis dis parturient
                                    montes, nascetur ridiculus mus. Vivamus sagittis lacus vel augue laoreet rutrum
                                    faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor
                                    ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
                                    fermentum.
                                </p>
                                <Layout.Container
                                    gap="large"
                                    className="sd-border--medium sd-font-size--medium sd-padding--2 sd-radius--large"
                                >
                                    <span>Curabitur blandit tempus porttitor.</span>
                                    <Button text="Test button" type="primary" onClick={() => false} />
                                    <Button text="Test button" type="highlight" onClick={() => false} />
                                    <ButtonGroup align="end">
                                        <Button text="Cancel" onClick={() => false} type="default" style="hollow" />
                                        <Button text="Submit" onClick={() => false} type="primary" />
                                    </ButtonGroup>
                                </Layout.Container>
                            </div>

                            <div id="section3">
                                <Heading type="h1" className="sd-padding--5">
                                    Section 3
                                </Heading>
                                <p className="sd-margin-b--3">
                                    Maecenas sed diam eget risus varius blandit sit amet non magna. Lorem ipsum dolor
                                    sit amet, consectetur adipiscing elit. Maecenas faucibus mollis interdum. Cras justo
                                    odio, dapibus ac facilisis in, egestas eget quam. Aenean lacinia bibendum nulla sed
                                    consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>
                                <p className="sd-margin-b--3">
                                    Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna
                                    mollis euismod. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
                                    vestibulum. Nullam quis risus eget urna mollis ornare vel eu leo. Curabitur blandit
                                    tempus porttitor. Aenean lacinia bibendum nulla sed consectetur. Morbi leo risus,
                                    porta ac consectetur ac, vestibulum at eros.
                                </p>
                                <p className="sd-margin-b--3">
                                    Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas sed diam eget risus
                                    varius blandit sit amet non magna. Aenean eu leo quam. Pellentesque ornare sem
                                    lacinia quam venenatis vestibulum. Nullam quis risus eget urna mollis ornare vel eu
                                    leo. Donec ullamcorper nulla non metus auctor fringilla. Donec id elit non mi porta
                                    gravida at eget metus. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                                    Curabitur blandit tempus porttitor. Vestibulum id ligula porta felis euismod semper.
                                    Maecenas sed diam eget risus varius blandit sit amet non magna.
                                </p>
                                <p>
                                    Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu
                                    leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit
                                    libero, a pharetra augue. Cras mattis consectetur purus sit amet fermentum. Maecenas
                                    faucibus mollis interdum. Cum sociis natoque penatibus et magnis dis parturient
                                    montes, nascetur ridiculus mus. Vivamus sagittis lacus vel augue laoreet rutrum
                                    faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor
                                    ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
                                    fermentum.
                                </p>
                                <Layout.Container
                                    gap="large"
                                    className="sd-border--medium sd-font-size--medium sd-padding--2 sd-radius--large"
                                >
                                    <span>Curabitur blandit tempus porttitor.</span>
                                    <Button text="Test button" type="primary" onClick={() => false} />
                                    <Button text="Test button" type="highlight" onClick={() => false} />
                                    <ButtonGroup align="end">
                                        <Button text="Cancel" onClick={() => false} type="default" style="hollow" />
                                        <Button text="Submit" onClick={() => false} type="primary" />
                                    </ButtonGroup>
                                </Layout.Container>
                            </div>

                            <div id="section4">
                                <Heading type="h1" className="sd-padding--5">
                                    Section 4
                                </Heading>
                                <p className="sd-margin-b--3">
                                    Maecenas sed diam eget risus varius blandit sit amet non magna. Lorem ipsum dolor
                                    sit amet, consectetur adipiscing elit. Maecenas faucibus mollis interdum. Cras justo
                                    odio, dapibus ac facilisis in, egestas eget quam. Aenean lacinia bibendum nulla sed
                                    consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>
                                <p className="sd-margin-b--3">
                                    Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna
                                    mollis euismod. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
                                    vestibulum. Nullam quis risus eget urna mollis ornare vel eu leo. Curabitur blandit
                                    tempus porttitor. Aenean lacinia bibendum nulla sed consectetur. Morbi leo risus,
                                    porta ac consectetur ac, vestibulum at eros.
                                </p>
                                <p className="sd-margin-b--3">
                                    Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas sed diam eget risus
                                    varius blandit sit amet non magna. Aenean eu leo quam. Pellentesque ornare sem
                                    lacinia quam venenatis vestibulum. Nullam quis risus eget urna mollis ornare vel eu
                                    leo. Donec ullamcorper nulla non metus auctor fringilla. Donec id elit non mi porta
                                    gravida at eget metus. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                                    Curabitur blandit tempus porttitor. Vestibulum id ligula porta felis euismod semper.
                                    Maecenas sed diam eget risus varius blandit sit amet non magna.
                                </p>
                                <p>
                                    Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu
                                    leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit
                                    libero, a pharetra augue. Cras mattis consectetur purus sit amet fermentum. Maecenas
                                    faucibus mollis interdum. Cum sociis natoque penatibus et magnis dis parturient
                                    montes, nascetur ridiculus mus. Vivamus sagittis lacus vel augue laoreet rutrum
                                    faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor
                                    ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
                                    fermentum.
                                </p>
                                <Layout.Container
                                    gap="large"
                                    className="sd-border--medium sd-font-size--medium sd-padding--2 sd-radius--large"
                                >
                                    <span>Curabitur blandit tempus porttitor.</span>
                                    <Button text="Test button" type="primary" onClick={() => false} />
                                    <Button text="Test button" type="highlight" onClick={() => false} />
                                    <ButtonGroup align="end">
                                        <Button text="Cancel" onClick={() => false} type="default" style="hollow" />
                                        <Button text="Submit" onClick={() => false} type="primary" />
                                    </ButtonGroup>
                                </Layout.Container>
                            </div>
                        </div>
                    </Layout.AuthoringMain>
                }
                sidePanelPinned={this.state.rightPanelOpen}
                sidePanel={
                    <Layout.Panel side="right" background="grey" open={this.state.rightPanelOpen} size="x-small">
                        <Layout.PanelHeader
                            title="Pinned content"
                            onClose={() => this.setState({rightPanelOpen: false})}
                        ></Layout.PanelHeader>
                        <Layout.PanelContent>
                            <Layout.PanelContentBlock>
                                <BoxedList density="comfortable">
                                    <BoxedListItem
                                        type="success"
                                        clickable={true}
                                        media={<Icon name="slideshow" />}
                                        actions={
                                            <IconButton
                                                icon="dots-vertical"
                                                ariaValue="More actions"
                                                onClick={() => false}
                                            />
                                        }
                                    >
                                        <BoxedListContentRow>
                                            Maecenas sed diam eget risus varius blandit sit amet non magna. Vestibulum
                                            id ligula porta felis euismod semper.
                                        </BoxedListContentRow>
                                        <BoxedListContentRow>
                                            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                                        </BoxedListContentRow>
                                    </BoxedListItem>
                                    <BoxedListItem
                                        type="warning"
                                        media={
                                            <Avatar
                                                size="medium"
                                                displayName="Jeffrey Lebowski"
                                                imageUrl={null}
                                                initials="JL"
                                            />
                                        }
                                        footer={
                                            <ButtonGroup align="end">
                                                <Button text="cancel" size="small" onClick={() => false} />
                                                <Button
                                                    text="Save Changes"
                                                    size="small"
                                                    type="primary"
                                                    onClick={() => false}
                                                />
                                            </ButtonGroup>
                                        }
                                        actions={
                                            <IconButton
                                                icon="dots-vertical"
                                                ariaValue="More actions"
                                                onClick={() => false}
                                            />
                                        }
                                    >
                                        <BoxedListContentRow>
                                            Maecenas sed diam eget risus varius blandit sit amet magna.
                                        </BoxedListContentRow>
                                    </BoxedListItem>
                                    <BoxedListItem
                                        selected={true}
                                        actions={
                                            <IconButton
                                                icon="dots-vertical"
                                                ariaValue="More actions"
                                                onClick={() => false}
                                            />
                                        }
                                    >
                                        <BoxedListContentRow>
                                            Maecenas sed diam eget risus varius blandit sit amet magna. Vestibulum id
                                            ligula porta felis euismod semper.
                                        </BoxedListContentRow>
                                    </BoxedListItem>
                                </BoxedList>
                            </Layout.PanelContentBlock>
                        </Layout.PanelContent>
                    </Layout.Panel>
                }
                sideOverlayOpen={this.state.sideOverlayOpen}
                sideOverlay={
                    <Layout.Panel background="light" open={this.state.sideOverlayOpen} size="x-small">
                        <Layout.PanelHeader
                            title="Metadata (overlay pannel)"
                            onClose={() => this.setState({sideOverlayOpen: false})}
                        />
                        <Layout.PanelContent loading={false} empty={false} emptyTemplate={<EmptyState title="test" />}>
                            <Layout.PanelContentBlock>
                                <SimpleList border={true}>
                                    <SimpleListItem justify="space-between">
                                        <Form.FormLabel text="My label" />
                                        <Switch
                                            toolTipFlow="left"
                                            label={{content: 'My label', hidden: true}}
                                            value={this.state.value1}
                                            onChange={(value) => this.setState(() => ({value1: value}))}
                                        />
                                    </SimpleListItem>
                                    <SimpleListItem justify="space-between">
                                        <Form.FormLabel text="Form label" />
                                        <Switch
                                            toolTipFlow="left"
                                            label={{content: 'Form label', hidden: true}}
                                            value={this.state.value2}
                                            onChange={(value) => this.setState(() => ({value2: value}))}
                                        />
                                    </SimpleListItem>
                                    <SimpleListItem stacked={true}>
                                        <Form.FormLabel text="Label two" />
                                        <Text size="small" weight="light">
                                            Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id
                                            ligula porta felis euismod semper. Nullam quis risus eget urna mollis ornare
                                            vel eu leo.
                                        </Text>
                                    </SimpleListItem>
                                </SimpleList>
                            </Layout.PanelContentBlock>
                        </Layout.PanelContent>
                    </Layout.Panel>
                }
                sideBar={
                    <Nav.SideBarTabs
                        items={[
                            {icon: 'info', size: 'big', tooltip: 'Info', id: '1'},
                            {icon: 'chat', size: 'big', tooltip: 'Comments', id: '2'},
                            {icon: 'history', size: 'big', tooltip: 'History', id: '3'},
                            {icon: 'package', size: 'big', tooltip: 'Packages', id: '4'},
                            {icon: 'attachment', size: 'big', tooltip: 'Attachments', id: '5'},
                            {icon: 'comments', size: 'big', tooltip: 'Inline Comments', id: '6'},
                            {icon: 'suggestion', size: 'big', tooltip: 'Suggestions', id: '7'},
                        ]}
                        activeTab={this.state.activeTab}
                        onActiveTabChange={(val) => {
                            this.setState({
                                activeTab: val,
                                sideOverlayOpen: !this.state.sideOverlayOpen,
                            });
                        }}
                    />
                }
                overlayPanel={<div></div>}
            />
        );
    }
}
