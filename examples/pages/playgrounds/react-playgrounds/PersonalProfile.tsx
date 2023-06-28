import * as React from 'react';
import * as Components from './components/Index';
import { 
    Button, ButtonGroup, IconButton, NavButton,
    SubNav, SubNavDivider,
    Dropdown,
    Checkbox, CheckGroup, CheckButtonGroup, CheckboxButton, RadioGroup, RadioButtonGroup, Switch, SwitchGroup,
    Input, Select, Option,
    Label, Badge,
    Icon,
    Tooltip,
    Tabs, TabLabel, TabContent, TabPanel,
    AvatarWrapper, AvatarContentImage, AvatarContentText,
    LeftMenu,
    SimpleList, SimpleListItem,
    Container,
    Heading, Text,
    Divider,
    ThemeSelector,
    Tag
} from '../../../../app-typescript/index';
import * as GridElements from '../../../../app-typescript/components/GridItem';
import * as Layout from '../../../../app-typescript/components/Layouts';
import * as Form from '../../../../app-typescript/components/Form';

import dummy_items from '../dummy-data/items';

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
    value2: boolean;
    value3: boolean;
    value4: boolean;
    value5: boolean;
    value6: boolean;
    value7: boolean;
    value8: boolean;
    value9: boolean;
    value10: boolean;
    value11: boolean;
    value12: boolean;
    radioValue1: string;
    radioValue2: string;
    radioValue3: string;
    indexValue: number;
}

export class PersonalProfile extends React.Component<IProps, IState> {
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
            value2: true,
            value3: true,
            value4: false,
            value5: true,
            value6: true,
            value7: false,
            value8: false,
            value9: false,
            value10: false,
            value11: true,
            value12: true,
            radioValue1: 'list',
            radioValue2: 'grid',
            radioValue3: 'list',
            indexValue: 0,
        }
        this.handleFilter = this.handleFilter.bind(this);
        this.handlePreview = this.handlePreview.bind(this);
        this.handleTheme = this.handleTheme.bind(this);
        this.handleClick=this.handleClick.bind(this);
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


    handleClick = (number: number) => {
        this.setState({
            indexValue: number,
        })
    }

    render() {
        return (
            <Components.Layout header='My Profile' theme={this.state.theme}>
                <Components.LayoutContainer>
                    <Components.HeaderPanel>
                        <SubNav>
                            <ButtonGroup align='start' spaces='no-space'>
                                <Tooltip text='User list' flow='right'>
                                    <NavButton icon='arrow-left' onClick={() => false} />
                                </Tooltip>
                            </ButtonGroup>
                            <SubNavDivider width='medium' />
                            <AvatarWrapper size="medium">
                                <AvatarContentImage imageUrl="/avatar.jpg" tooltipText="John Doe" />
                            </AvatarWrapper>
                            <h2 className='subnav__page-title'>Jeffrey Lebowski</h2>
                        </SubNav>
                        <SubNav>
                            <SubNavDivider width='small' />
                            <Tabs onClick={this.handleClick}>
                                <TabLabel label='Overview' indexValue={0}/>
                                <TabLabel label='Personal preferences' indexValue={1}/>
                                <TabLabel label='Privileges' indexValue={2}/>
                            </Tabs>

                        </SubNav>
                    </Components.HeaderPanel>
                    {/* TOOLBAR HEADER */}
                    <TabContent  activePanel={this.state.indexValue}>
                        <TabPanel indexValue={0}>
                            <Layout.LeftPanel open={true}>
                                <Layout.Panel background='transparent' size='xx-small'>
                                    <Layout.PanelContent>
                                        <LeftMenu ariaLabel={'Left navigation'} 
                                            scrollSpy='#scrollContainer'
                                            activeItemId='1'
                                            style='blanc' 
                                            groups={[{ label: '', items: [
                                                { id: '1', label: 'General info', ref:'profile'},
                                                { id: '2', label: 'Password', ref: 'password' },
                                                { id: '3', label: 'Default desk', ref: 'defaultDesk' },
                                                { id: '4', label: 'Language', ref: 'language' },
                                                { id: '5', label: 'Author info', ref: 'autorInfo' }
                                            ]}]}
                                            onSelect={() => {console.log('onSelect triggered')}} />
                                    </Layout.PanelContent>
                                </Layout.Panel>
                            </Layout.LeftPanel>
                            {/* FILTER PANEL*/}
                            <Layout.MainPanel className='sd-padding--3' id='scrollContainer'>
                                <SimpleList density='comfortable' width='large'>
                                    <SimpleListItem stacked={true} id='profile'>
                                        <Container id="profile" direction='column' className='sd-radius--medium sd-panel-bg--gradient-1 sd-shadow--z2 sd-padding--3 sd-state--focus'>
                                            <Container className='sd-flex-justify-space-between sd-margin-b--2'>
                                                <Label text='Active' type='success' style='translucent' />
                                                <Switch toolTipFlow='left' label={{content:'Toggle active', hidden: true}} value={this.state.value1} onChange={(value) => this.setState(() => ({ value1: value }))} />
                                            </Container>
                                            <Container direction='column' className='sd-flex-align-items-center sd-margin-x--auto'>
                                                <AvatarWrapper size="xx-large">
                                                    <AvatarContentImage imageUrl="/avatar.jpg" tooltipText="John Doe" />
                                                </AvatarWrapper>
                                                <Heading className='sd-margin-b--0-5 sd-margin-t--2' align='center' type='h2'>Jeffrey Lebowski</Heading>
                                                <Text className='sd-margin-b--1 sd-font-size--medium' align='center' color='light' >the_dude</Text>
                                                <Text className='sd-margin-b--1-5 sd-font-size--x-small' align='center' color='lighter'>Member since 24.04.2011</Text>
                                                <ButtonGroup spaces='compact' align='center'>
                                                    <Tag text='Editor' shade='light' readOnly={true} onClick={()=>false} />
                                                    <Tag text='Author' shade='light' readOnly={true} onClick={()=>false} />
                                                    <Tag text='Administrator' shade='highlight1' readOnly={true} onClick={()=>false} />
                                                </ButtonGroup>
                                            </Container>
                                            <Container direction='column' className='sd-margin-t--4'>
                                                <Form.FormGroup marginBottom='3'>
                                                    <Form.FormItem>
                                                        <Input
                                                            label='First Name'
                                                            type='text'
                                                            value='Jeffrey'
                                                            error='Error message'
                                                            required={false}
                                                            disabled={false}
                                                            invalid={false}
                                                            onChange={(value) => {}} />
                                                    </Form.FormItem>
                                                </Form.FormGroup>
                                                <Form.FormGroup marginBottom='3'>
                                                    <Form.FormItem>
                                                        <Input
                                                            label='Last Name'
                                                            type='text'
                                                            value='Lebowski'
                                                            error='Error message'
                                                            required={false}
                                                            disabled={false}
                                                            invalid={false}
                                                            onChange={(value) => {}} />
                                                    </Form.FormItem>
                                                </Form.FormGroup>
                                                <Form.FormGroup marginBottom='4'>
                                                    <Form.FormItem>
                                                        <Input
                                                            label='Username'
                                                            type='text'
                                                            value='the_dude'
                                                            error='Error message'
                                                            required={false}
                                                            disabled={false}
                                                            invalid={false}
                                                            onChange={(value) => {}} />
                                                    </Form.FormItem>
                                                </Form.FormGroup>


                                                <Form.FormGroup marginBottom='3'>
                                                    <Form.FormItem>
                                                        <Input
                                                            label='Email'
                                                            type='text'
                                                            value='jeffrey.lebowski@bloodsimple.org'
                                                            error='Error message'
                                                            required={false}
                                                            disabled={false}
                                                            invalid={false}
                                                            onChange={(value) => {}} />
                                                    </Form.FormItem>
                                                </Form.FormGroup>
                                                <Form.FormGroup marginBottom='3'>
                                                    <Form.FormItem>
                                                        <Input
                                                            label='Phone number'
                                                            type='text'
                                                            value='+381 64 155 22 55'
                                                            error='Error message'
                                                            required={false}
                                                            disabled={false}
                                                            invalid={false}
                                                            onChange={(value) => {}} />
                                                    </Form.FormItem>
                                                </Form.FormGroup>
                                                <Form.FormGroup marginBottom='4'>
                                                    <Form.FormItem>
                                                    <Select
                                                        label='Role'
                                                        value='Select user role'
                                                        required={false}
                                                        disabled={false}
                                                        invalid={false}
                                                        onChange={(value) => {}}>
                                                            <Option>Editor</Option>
                                                            <Option>Journalist</Option>
                                                            <Option>Photographer</Option>
                                                            <Option>Freelancer</Option>
                                                            <Option>Journalist Assistant</Option>
                                                        </Select> 
                                                    </Form.FormItem>
                                                </Form.FormGroup>
                                                <CheckGroup orientation='vertical'>
                                                    <Checkbox checked={this.state.value11} label={{text:'Administrator'}}
                                                        onChange={(value) => this.setState(() => ({ value11: value }))} />
                                                    <Checkbox checked={this.state.value12} label={{text:'Author'}}
                                                        onChange={(value) => this.setState(() => ({ value12: value }))} />
                                                </CheckGroup>
                                            </Container>
                                        </Container>
                                    </SimpleListItem>
                                    <SimpleListItem stacked={true} id='password'>
                                        <Heading type='h3'>Password</Heading>
                                        <Container className='sd-radius--medium sd-panel-bg--000 sd-shadow--z2 sd-padding--3 sd-state--focus'>
                                            <ButtonGroup align='center'>
                                                <Button style='hollow' type='primary' text='Change password' onClick={()=> false} />
                                            </ButtonGroup>
                                        </Container>
                                    </SimpleListItem>
                                    <SimpleListItem stacked={true} id='defaultDesk' >
                                        <Heading type='h3'>Default desk</Heading>
                                        <Container className='sd-radius--medium sd-panel-bg--000 sd-shadow--z2 sd-padding--3 sd-state--focus'>
                                            <Form.FormGroup inlineLabel={true} marginBottom='0'>
                                                    <Form.FormItem>
                                                        <Select
                                                            label='Default desk'
                                                            value='This is some value'
                                                            labelHidden={true}
                                                            required={false}
                                                            disabled={false}
                                                            invalid={false}
                                                            onChange={(value) => {}}>
                                                                <Option>International</Option>
                                                                <Option>Kulture</Option>
                                                                <Option>National</Option>
                                                                <Option>News</Option>
                                                                <Option>Politics</Option>
                                                                <Option>Sports</Option>
                                                        </Select> 
                                                    </Form.FormItem>
                                                </Form.FormGroup>
                                        </Container>
                                    </SimpleListItem>
                                    <SimpleListItem stacked={true} id='language'>
                                        <Heading type='h3'>Language</Heading>
                                        <Container className='sd-radius--medium sd-panel-bg--000 sd-shadow--z2 sd-padding--3 sd-state--focus'>
                                            <Form.FormGroup inlineLabel={true} marginBottom='0'>
                                                    <Form.FormItem>
                                                        <Select
                                                            label='Language'
                                                            value='English'
                                                            labelHidden={true}
                                                            required={false}
                                                            disabled={false}
                                                            invalid={false}
                                                            onChange={(value) => {}}>
                                                                <Option>English</Option>
                                                                <Option>German</Option>
                                                                <Option>French</Option>
                                                                <Option>Serbian</Option>
                                                        </Select> 
                                                    </Form.FormItem>
                                                </Form.FormGroup>
                                        </Container>
                                    </SimpleListItem>
                                    <SimpleListItem stacked={true} id='autorInfo'>
                                        <h3 className='sd-font-size--medium'>Author info</h3>
                                        <Container direction='column' className='sd-radius--medium sd-panel-bg--000 sd-shadow--z2 sd-padding--3 sd-state--focus'>
                                            <Form.FormGroup marginBottom='3'>
                                                <Form.FormItem>
                                                    <Input
                                                        label='Sign-Off'
                                                        type='text'
                                                        value='the_dude'
                                                        error='Error message'
                                                        required={false}
                                                        disabled={false}
                                                        invalid={false}
                                                        onChange={(value) => {}} />
                                                </Form.FormItem>
                                            </Form.FormGroup>
                                            <Form.FormGroup marginBottom='3'>
                                                <Form.FormItem>
                                                    <Input
                                                        label='Byline'
                                                        type='text'
                                                        value='Jeffrey Lebowski'
                                                        error='Error message'
                                                        required={false}
                                                        disabled={false}
                                                        invalid={false}
                                                        onChange={(value) => {}} />
                                                </Form.FormItem>
                                            </Form.FormGroup>
                                            <Form.FormGroup marginBottom='3'>
                                                <Form.FormItem>
                                                    <Input
                                                        label='Job Title'
                                                        type='text'
                                                        value='the_dude'
                                                        error='Error message'
                                                        required={false}
                                                        disabled={false}
                                                        invalid={false}
                                                        onChange={(value) => {}} />
                                                </Form.FormItem>
                                            </Form.FormGroup>
                                            <Form.FormGroup marginBottom='4'>
                                                <Form.FormItem>
                                                    <Input
                                                        label='Biography'
                                                        type='text'
                                                        value='the_dude'
                                                        error='Error message'
                                                        required={false}
                                                        disabled={false}
                                                        invalid={false}
                                                        onChange={(value) => {}} />
                                                </Form.FormItem>
                                            </Form.FormGroup>
                                            <Heading className='sd-margin-t--3 sd-margin-b--2' type='h4'>Social media</Heading>
                                            <Form.FormGroup marginBottom='3'>
                                                <Form.FormItem>
                                                    <Input
                                                        label='Facebook'
                                                        type='text'
                                                        value='the_dude'
                                                        error='Error message'
                                                        required={false}
                                                        disabled={false}
                                                        invalid={false}
                                                        onChange={(value) => {}} />
                                                </Form.FormItem>
                                            </Form.FormGroup>
                                            <Form.FormGroup marginBottom='3'>
                                                <Form.FormItem>
                                                    <Input
                                                        label='Instagram'
                                                        type='text'
                                                        value='the_dude'
                                                        error='Error message'
                                                        required={false}
                                                        disabled={false}
                                                        invalid={false}
                                                        onChange={(value) => {}} />
                                                </Form.FormItem>
                                            </Form.FormGroup>
                                            <Form.FormGroup marginBottom='2'>
                                                <Form.FormItem>
                                                    <Input
                                                        label='Twitter'
                                                        type='text'
                                                        value='the_dude'
                                                        error='Error message'
                                                        required={false}
                                                        disabled={false}
                                                        invalid={false}
                                                        onChange={(value) => {}} />
                                                </Form.FormItem>
                                            </Form.FormGroup>

                                        </Container>
                                    </SimpleListItem>
                                </SimpleList>
                            </Layout.MainPanel>
                            {/* MAIN CONTENT (Monitoring) */}
                            <Components.RightPanel open={this.state.openPreview}>
                            </Components.RightPanel>
                            {/* PREVIEW PANEL*/}
                            <Components.OverlayPanel />
                            {/* OVERLAY PANEL (Send To) */}
                        </TabPanel>
                        <TabPanel indexValue={1}>
                            <Layout.LeftPanel open={true}>
                                <Layout.Panel background='transparent' size='xx-small'>
                                    <Layout.PanelContent>

                                        <LeftMenu ariaLabel={'Left navigation'} 
                                            activeItemId='#1'
                                            style='blanc' 
                                            groups={[{ label: '', items: [
                                                { id: '1', label: 'Feature preview' },
                                                { id: '2', label: 'View formats' },
                                                { id: '3', label: 'Notifications' },
                                                { id: '4', label: 'Article defaults' },
                                                { id: '5', label: 'Categories' },
                                                { id: '6', label: 'Desks' },
                                                { id: '7', label: 'Vocabulary values' },
                                                { id: '8', label: 'Appearance' }
                                            ]}]}
                                            onSelect={() => false} />
                                    </Layout.PanelContent>
                                </Layout.Panel>
                            </Layout.LeftPanel>
                            {/* FILTER PANEL*/}
                            <Layout.MainPanel className='sd-padding--3'>
                                <SimpleList density='comfortable' width='large'>
                                    <SimpleListItem stacked={true}>
                                        <Heading type='h3'>Feature preview</Heading>
                                        <Container className='sd-radius--medium sd-panel-bg--000 sd-shadow--z2 sd-padding--3 sd-state--focus'>
                                            <Switch label={{content:'Enable Feature Preview'}} value={this.state.value1} onChange={(value) => this.setState(() => ({ value1: value }))} />
                                        </Container>
                                    </SimpleListItem>
                                    <SimpleListItem stacked={true}>
                                        <Heading type='h3'>View formats</Heading>
                                        <Container direction='column' className='sd-radius--medium sd-panel-bg--000 sd-shadow--z2 sd-padding--3 sd-state--focus'>
                                            <Text color='light' className=''>Select the prefered default view format for specific areas of Superdesks interface.
                                            The sections will always open in the selected view format, but can be always changed using the view option dropdown in each section.
                                            </Text>
                                            <SimpleList density='compact' border={true} className='sd-margin-t--3 sd-margin-b--0 sd-padding-b--0' >
                                                <SimpleListItem stacked={true}>
                                                    <Heading type='h4'>Archive</Heading>
                                                    <RadioButtonGroup value={this.state.radioValue1} options={[
                                                        {label: "Grid view", value: "grid", icon: "th"},
                                                        {label: "List view", value: "list", icon: "th-list"},
                                                    ]} onChange={(value) => this.setState(() => ({ radioValue1: value }))} />
                                                </SimpleListItem>
                                                <SimpleListItem stacked={true}>
                                                    <Heading type='h4'>Contacts</Heading>
                                                    <RadioButtonGroup value={this.state.radioValue2} options={[
                                                        {label: "Grid view", value: "grid", icon: "th"},
                                                        {label: "List view", value: "list", icon: "th-list"},
                                                    ]} onChange={(value) => this.setState(() => ({ radioValue2: value }))} />
                                                </SimpleListItem>
                                                <SimpleListItem stacked={true}>
                                                    <Heading type='h4'>Archive</Heading>
                                                    <RadioButtonGroup value={this.state.radioValue3} options={[
                                                        {label: "Grid view", value: "grid", icon: "th"},
                                                        {label: "List view", value: "list", icon: "th-list"},
                                                        {label: "Swimlane view", value: "kanban", icon: "kanban-view"},
                                                    ]} onChange={(value) => this.setState(() => ({ radioValue3: value }))} />
                                                </SimpleListItem>

                                            </SimpleList>
                                        </Container>
                                    </SimpleListItem>
                                    <SimpleListItem stacked={true}>
                                    <Heading type='h3'>Notifications</Heading>
                                        <Container className='sd-radius--medium sd-panel-bg--000 sd-shadow--z2 sd-padding--3 sd-state--focus'>
                                            <SwitchGroup>
                                                <Switch label={{content:'Send notifications via email'}} value={this.state.value2} onChange={(value) => this.setState(() => ({ value2: value }))} />
                                                <Switch label={{content:'Allow Desktop Notifications'}} value={this.state.value3} onChange={(value) => this.setState(() => ({ value3: value }))} />
                                            </SwitchGroup>
                                        </Container>
                                    </SimpleListItem>
                                    <SimpleListItem stacked={true}>
                                        <h3 className='sd-font-size--medium'>Article defaults</h3>
                                        <Container direction='column' className='sd-radius--medium sd-panel-bg--000 sd-shadow--z2 sd-padding--3 sd-state--focus'>
                                            <Form.FormGroup>
                                                <Form.FormItem>
                                                    <Input
                                                        label='Dateline / Located'
                                                        type='text'
                                                        value=''
                                                        error='This is error message'
                                                        required={false}
                                                        disabled={false}
                                                        invalid={false}
                                                        onChange={(value) => {}} /> 
                                                </Form.FormItem>
                                            </Form.FormGroup>
                                            <Form.FormGroup>
                                                <Form.FormItem>
                                                    <Select
                                                        label='Place'
                                                        value='This is some value'
                                                        error='This is error message'
                                                        required={true}
                                                        disabled={false}
                                                        invalid={false}
                                                        onChange={(value) => {}}>
                                                            <Option>Select place</Option>
                                                            <Option>Option 1</Option>
                                                            <Option>Option 2</Option>
                                                    </Select> 
                                                </Form.FormItem>
                                            </Form.FormGroup>
                                        </Container>
                                    </SimpleListItem>
                                    <SimpleListItem stacked={true}>
                                        <Heading type='h3'>Categories</Heading>
                                        <Container direction='column' className='sd-radius--medium sd-panel-bg--000 sd-shadow--z2 sd-padding--3 sd-state--focus'>
                                            <Heading type='h4'>Preferred Categories</Heading>
                                            <Text color='light' className=''>By selecting the categories you are interested in, the system will only display these in a
                                                menu for setting the content item's categories (along with any of its existing categories).
                                            </Text>
                                            <ButtonGroup className='sd-margin-y--2'>
                                                <Button text='All' style='text-only' type='primary' onClick={()=> false} />
                                                <Divider border={true} />
                                                <Button text='None' style='text-only' type='primary' onClick={()=> false} />
                                                <Divider border={true} />
                                                <Button text='Default' style='text-only' type='primary' onClick={()=> false} />
                                            </ButtonGroup>
                                            <CheckButtonGroup  grid={true}>
                                                <CheckboxButton checked={this.state.value1} label={{text:'Category one'}} onChange={(value) => this.setState(() => ({ value1: value }))} />
                                                <CheckboxButton checked={this.state.value2} label={{text:'Category two'}} onChange={(value) => this.setState(() => ({ value2: value }))} />
                                                <CheckboxButton checked={this.state.value3} label={{text:'Category three'}} onChange={(value) => this.setState(() => ({ value3: value }))} />
                                                <CheckboxButton checked={this.state.value4} label={{text:'Category four'}} onChange={(value) => this.setState(() => ({ value4: value }))} />
                                            </CheckButtonGroup>
                                        </Container>
                                    </SimpleListItem>
                                    <SimpleListItem stacked={true}>
                                        <Heading type='h3'>Desks</Heading>
                                        <Container  direction='column' className='sd-radius--medium sd-panel-bg--000 sd-shadow--z2 sd-padding--3 sd-state--focus'>
                                            <Heading type='h4'>Preferred Desks</Heading>
                                            <Text color='light' className='sd-margin-b--2'>By selecting the desks as your preferred desks, they appear first in the order when
                                                sending or publishing items.
                                            </Text>
                                            <CheckButtonGroup  grid={true}>
                                                <CheckboxButton checked={this.state.value5} label={{text:'Politics'}} onChange={(value) => this.setState(() => ({ value5: value }))} />
                                                <CheckboxButton checked={this.state.value6} label={{text:'Sports'}} onChange={(value) => this.setState(() => ({ value6: value }))} />
                                                <CheckboxButton checked={this.state.value7} label={{text:'News'}} onChange={(value) => this.setState(() => ({ value7: value }))} />
                                                <CheckboxButton checked={this.state.value8} label={{text:'National'}} onChange={(value) => this.setState(() => ({ value8: value }))} />
                                                <CheckboxButton checked={this.state.value9} label={{text:'International'}} onChange={(value) => this.setState(() => ({ value9: value }))} />
                                                <CheckboxButton checked={this.state.value10} label={{text:'Kulture'}} onChange={(value) => this.setState(() => ({ value10: value }))} />
                                            </CheckButtonGroup>
                                        </Container>
                                    </SimpleListItem>
                                    <SimpleListItem stacked={true}>
                                        <Heading type='h3'>Vocabulary values</Heading>
                                        <Container direction='column'  className='sd-radius--medium sd-padding--2 sd-border--medium sd-border-style--dashed'>
                                            <Text color='lighter' size='medium' className='sd-margin--auto' align='center'>There are no vocabularies configured.</Text>
                                        </Container>
                                    </SimpleListItem>
                                    <SimpleListItem stacked={true}>
                                        <Heading type='h3'>Appearance</Heading>
                                        <Container direction='column' className='sd-radius--medium sd-panel-bg--000 sd-shadow--z2 sd-padding--3 sd-state--focus'>
                                            <Heading type='h4'>Themes</Heading>
                                            <Text color='light' className='sd-margin-b--2'>Change the appearance of Superdesk across the whole application.</Text>
                                            <ThemeSelector size='small' options={[
                                                {label: 'Light', value: 'light-ui', theme: 'light'},
                                                {label: 'Dark', value: 'dark-ui', theme: 'dark'},
                                                {label: 'High Contrast', value: 'high-contrast', theme: 'contrast-light', disabled: true},
                                            ]} onChange={($event)=>{this.setState({theme: $event})}} value={this.state.theme} />
                                        </Container>
                                    </SimpleListItem>
                                </SimpleList>
                            </Layout.MainPanel>
                            {/* MAIN CONTENT (Monitoring) */}

                            <Layout.RightPanel open={this.state.openPreview}>
                            </Layout.RightPanel>
                            {/* PREVIEW PANEL*/}
                        </TabPanel>
                        <TabPanel indexValue={2}>
                            <Layout.MainPanel >
                                Privileges Content goes here
                            </Layout.MainPanel>
                        </TabPanel>
                    </TabContent>
                </Components.LayoutContainer>
            </Components.Layout >
        );
    }
}
