import * as React from 'react';

import * as Markup from '../../js/react';

import { Tab, TabList, Prop, PropsList, TabNav, TabItem } from '../../../app-typescript';
import {TabPanel, TabContent} from '../../../app-typescript';
import { stringify } from 'querystring';

interface IState {
    selected: string;
    customSelected: string;
    alternativeWaySelected: string;
}

export default class TabsDoc extends React.Component<{}, IState> {
    constructor(props){
        super(props);
        this.state = {
            selected: null,
            customSelected: 'metadata',
            alternativeWaySelected: null,
        }
        this.handleClick=this.handleClick.bind(this);
        this.handleClick_customTab=this.handleClick_customTab.bind(this);
        this.handleClick_alternativeWay=this.handleClick_alternativeWay.bind(this);
    }
    tabs: TabList;

    handleClick = (id: string) => {
        this.setState({
            selected: id,
        })
    }

    handleClick_customTab = (id: string) => {
        this.setState({
            customSelected: id,
        })
    }

    handleClick_alternativeWay = (id: string) => {
        this.setState({
            alternativeWaySelected: id,
        })
    }

    render() {
        return (
            <section className="docs-page__container">
                <h2 className="docs-page__h2">Tabs</h2>
                <Markup.ReactMarkupCodePreview>{`
                    <TabList  ref={(tabs) => {
                        this.tabs = tabs;
                    }}
                    tabs={[
                        {label: 'Content', content: 'Content here.', id: 'content'},
                        {label: 'Metadata', content: 'Metadata here', id: 'metadata'},
                        {label: 'Duplicate', content: 'Duplicate here.', id: 'duplicate'}
                    ]}
                    >
                    </TabList>
                `}
                </Markup.ReactMarkupCodePreview>
                <h3 className="docs-page__h3">Default tabs</h3>
                <p className="docs-page__paragraph">To have a tab-like navigation add the <code>TabList</code> component and multiple <code>Tab</code> components inside of it, or add the appropriate attributes on <code>TabList.</code></p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <div className='docs-page__content-row'>
                            <TabList  ref={(tabs) => {
                                this.tabs = tabs;
                            }}
                            tabs={[
                                {label: 'Content', content: 'Content here.', id: 'content'},
                                {label: 'Metadata', content: 'Metadata here', id: 'metadata'},
                                {label: 'Duplicate', content: 'Duplicate here.', id: 'duplicate'}
                            ]}
                            >
                                {/* <Tab label='Content' id='content' >Content here.</Tab>
                                <Tab label='Metadata' id='metadata' >Metadata here.</Tab>
                                <Tab label='Duplicates' id='duplicate' >Duplicates here.</Tab> */}
                            </TabList>
                        </div>
                        <p className="docs-page__paragraph">// Start width custom tab.</p>
                        <div className='docs-page__content-row'>
                            <TabList  ref={(tabs) => {
                                this.tabs = tabs;
                            }} 
                            selected='metadata'
                            tabs={[
                                {label: 'Content', content: 'Content here.', id: 'content'},
                                {label: 'Metadata', content: 'Metadata here', id: 'metadata'},
                                {label: 'Duplicate', content: 'Duplicate here.', id: 'duplicate'}
                            ]}
                            >
                                {/* <Tab label='Content' id='content' >Content here.</Tab>
                                <Tab label='Metadata' id='metadata' >Metadata here.</Tab>
                                <Tab label='Duplicates' id='duplicate' >Duplicates here.</Tab> */}
                            </TabList>
                        </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        <TabList  ref={(tabs) => {
                            this.tabs = tabs;
                        }}
                        tabs={[
                            {label: 'Content', content: 'Content here.', id: 'content'},
                            {label: 'Metadata', content: 'Metadata here', id: 'metadata'},
                            {label: 'Duplicate', content: 'Duplicate here.', id: 'duplicate'}
                        ]}
                        >
                        </TabList>

                        // start with custom tab (add atributte selected)
                        <TabList  ref={(tabs) => {
                            this.tabs = tabs;
                        }}
                        selected='metadata' //tabs.id
                        tabs={[
                            {label: 'Content', content: 'Content here.', id: 'content'},
                            {label: 'Metadata', content: 'Metadata here', id: 'metadata'},
                            {label: 'Duplicate', content: 'Duplicate here.', id: 'duplicate'}
                        ]}
                        >
                        </TabList>
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">Sizes</h3>
                <p className="docs-page__paragraph">Tabs come in three different sizes – normal, small and large. Add prop <code>size='large'</code> to the <code>TabList</code> component to create large tabs or <code>size='small'</code> for small ones. The default (normal) size doesn't need the <code>size</code> prop to be specified.</p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <div className='docs-page__content-row'>
                            <p className="docs-page__paragraph">// Normal tabs (default)</p>
                            <TabList>
                                <Tab label='Content'>Content here.</Tab>
                                <Tab label='Metadata'>Metadata here.</Tab>
                                <Tab label='Duplicates'>Duplicates here.</Tab>
                            </TabList>
                        </div>
                        <div className='docs-page__content-row'>
                            <p className="docs-page__paragraph">// Small tabs</p>
                            <TabList size='small'>
                                <Tab label='Content'>Content here.</Tab>
                                <Tab label='Metadata'>Metadata here.</Tab>
                                <Tab label='Duplicates'>Duplicates here.</Tab>
                            </TabList>
                        </div>
                        <div className='docs-page__content-row'>
                            <p className="docs-page__paragraph">// Large tabs</p>
                            <TabList size='large'>
                                <Tab label='Content'>Content here.</Tab>
                                <Tab label='Metadata'>Metadata here.</Tab>
                                <Tab label='Duplicates'>Duplicates here.</Tab>
                            </TabList>
                        </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        // Normal tabs (default)
                        <TabList>
                            <Tab label='Content'>Content here.</Tab>
                            <Tab label='Metadata'>Metadata here.</Tab>
                            <Tab label='Duplicates'>Duplicates here.</Tab>
                        </TabList>
                        // Large tabs
                        <TabList size='large'>
                            <Tab label='Content'>Content here.</Tab>
                            <Tab label='Metadata'>Metadata here.</Tab>
                            <Tab label='Duplicates'>Duplicates here.</Tab>
                        </TabList>
                        // Small tabs
                        <TabList size='small'>
                            <Tab label='Content'>Content here.</Tab>
                            <Tab label='Metadata'>Metadata here.</Tab>
                            <Tab label='Duplicates'>Duplicates here.</Tab>
                        </TabList>
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">Dark tab variation</h3>
                <p className="docs-page__paragraph">Add prop <code>theme='dark'</code> to the <code>TabList</code> component. The Dark theme also works in combination with different size values.</p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <div className='docs-page__content-row docs-page__content-row--ui-dark'>
                            <TabList theme='dark'>
                                <Tab label='Content'>Content here.</Tab>
                                <Tab label='Metadata'>Metadata here.</Tab>
                                <Tab label='Duplicates'>Duplicates here.</Tab>
                            </TabList>
                        </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        <TabList theme='dark'>
                            <Tab label='Content'>Content here.</Tab>
                            <Tab label='Metadata'>Metadata here.</Tab>
                            <Tab label='Duplicates'>Duplicates here.</Tab>
                        </TabList>
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">Tabs with two components ( <code>TabNav</code> and <code> TabContent</code> ) </h3>
                <p className="docs-page__paragraph">If you want to use on one place list of tabs and on another place content of tabs, wrap all <code>TabItem</code> with <code>TabNav</code> component and all <code>TabPanel</code> components with <code>TabContent</code>, or add the appropriate attributes on <code>TabNav</code> and <code>TabContent</code></p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <div className='docs-page__content-row'>
                            <TabNav onClick={this.handleClick}  activePanel={this.state.selected}
                                tabs={[
                                        {label: 'Content', id: 'content'},
                                        {label: 'Metadata', id: 'metadata'},
                                        {label: 'Duplicate', id: 'duplicate'}   
                                    ]}
                                    >
                            </TabNav>
                            <TabContent activePanel={this.state.selected}
                                tabs={[
                                        {content: 'Content here.', id: 'content'},
                                        {content: 'Metadata here.', id: 'metadata'},
                                        {content: 'Duplicates here.', id: 'duplicate'}
                                    ]}
                                    >
                            </TabContent>
                        </div>
                        <p className="docs-page__paragraph">// Start width custom tab.</p>
                        <div className='docs-page__content-row'>
                            <TabNav onClick={this.handleClick_customTab}  activePanel={this.state.customSelected}
                                tabs={[
                                        {label: 'Content', id: 'content'},
                                        {label: 'Metadata', id: 'metadata'},
                                        {label: 'Duplicate', id: 'duplicate'}
                                    ]}
                                    >
                            </TabNav>
                            <TabContent activePanel={this.state.customSelected}
                                tabs={[
                                        {content: 'Content here.', id: 'content'},
                                        {content: 'Metadata here.', id: 'metadata'},
                                        {content: 'Duplicates here.', id: 'duplicate'}
                                    ]}
                                    >
                            </TabContent>
                        </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                    this.state = {
                        selected: null,
                    }
                    handleClick = (id: string) => {
                        this.setState({
                            selected: id,
                        })
                    }

                    <TabNav onClick={this.handleClick}  activePanel={this.state.selected}
                        tabs={[
                                {label: 'Content', id: 'content'},
                                {label: 'Metadata', id: 'metadata'},
                                {label: 'Duplicate', id: 'duplicate'}   
                            ]}
                            >
                    </TabNav>
                    <TabContent activePanel={this.state.selected}
                        tabs={[
                                {content: 'Content here.', id: 'content'},
                                {content: 'Metadata here.', id: 'metadata'},
                                {content: 'Duplicates here.', id: 'duplicate'}
                            ]}
                            >
                    </TabContent>

                    // start with custom tab
                    this.state = {
                        selected: 'metadata' //tabs.id,
                    }
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <p className="docs-page__paragraph">Alternative way with children:</p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <div className='docs-page__content-row'>
                            <TabNav onClick={this.handleClick_alternativeWay}  activePanel={this.state.alternativeWaySelected}>
                                <TabItem id='content'>Content</TabItem>
                                <TabItem id='metadata'>Metadata</TabItem>
                                <TabItem id='duplicate'>Duplicate</TabItem>
                            </TabNav>
                            <TabContent activePanel={this.state.alternativeWaySelected}>
                                <TabPanel id='content'>Content here.</TabPanel>
                                <TabPanel id='metadata'>Metadata here.</TabPanel>
                                <TabPanel id='duplicate'>Duplicates here.</TabPanel>
                            </TabContent>
                        </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                    this.state = {
                        selected: null,
                    }
                    handleClick = (id: string) => {
                        this.setState({
                            selected: id,
                        })
                    }

                    <TabNav onClick={this.handleClick}  activePanel={this.state.selected}>
                        <TabItem id='content'>Content</TabItem>
                        <TabItem id='metadata'>Metadata</TabItem>
                        <TabItem id='duplicate'>Duplicate</TabItem>
                    </TabNav>
                    <TabContent activePanel={this.state.selected}>
                        <TabPanel id='content'>Content here.</TabPanel>
                        <TabPanel id='metadata'>Metadata here.</TabPanel>
                        <TabPanel id='duplicate'>Duplicates here.</TabPanel>
                    </TabContent>
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">Props</h3>
                <br/>
                <h4 className="docs-page__h4">TabList</h4>
                <PropsList>
                    <Prop name='TabList size' isRequired={false} type='small | normal | large' default='normal' description='Specifies a small, normal or large button.'/>
                    <Prop name='TabList theme' isRequired={false} type='light | dark' default='light' description='Styles tablist for diffrent background'/>
                    <Prop name='TabList selected' isRequired={false} type='string' default='/' description='Specify which tab should be pre-selected'/>
                    <Prop name='TabList tabs' isRequired={false} type='Array<label: string, content: React.ReactNode, id: string>' default='/' description='Array of objects'/>
                    <Prop name='Tab label' isRequired={false} type='string' default='/' description='Text value of label'/>
                    <Prop name='Tab id' isRequired={false} type='string' default='/' description='Id value of Tab component'/>
                    <Prop name='Tab children' isRequired={false} type='React.ReactNode' default='/' description='Children of component'/>
                </PropsList>
                <p className='docs-page__paragraph'>tabs: TabList</p>
                <PropsList>
                    <Prop name='label' isRequired={true} type='string' default='/' description='Text value of label'/>
                    <Prop name='content' isRequired={true} type='React.ReactNode' default='/' description='React.ReactNode'/>
                    <Prop name='id' isRequired={true} type='string' default='/' description='Id value'/>
                </PropsList>
                <br/>
                <h4 className="docs-page__h4">TabNav and TabContent</h4>
                <PropsList>
                    <Prop name='TabNav size' isRequired={false} type='small | normal | large' default='normal' description='Specifies a small, normal or large button'/>
                    <Prop name='TabNav theme' isRequired={false} type='light | dark' default='light' description='Styles tablist for diffrent background'/>
                    <Prop name='TabNav ariaLabel' isRequired={false} type='string' default='/' description='Text value of aria-label'/>
                    <Prop name='TabNav onClick' isRequired={true} type='function' default='/' description='Use to return value of clicked label'/>
                    <Prop name='TabNav activePanel' isRequired={true} type='string' default='/' description='Specify which tab should be pre-selected'/>
                    <Prop name='TabNav tabs' isRequired={false} type='Array<label: string, id: string>' default='/' description='Array of objects'/>
                    <Prop name='TabItem id' isRequired={true} type='string' default='/' description='Id value of Tab Item'/>
                    <Prop name='TabItem label' isRequired={true} type='string' default='/' description='Text value of Tab label'/>
                    <Prop name='TabContent theme' isRequired={false} type='light | dark' default='light' description='Styles tablist for diffrent background'/>
                    <Prop name='TabContent activePanel' isRequired={true} type='string' default='/' description='Specify which tab should be pre-selected'/>
                    <Prop name='TabContent tabs' isRequired={false} type='Array<content: React.ReactNode, id: string>' default='/' description='Array of objects'/>
                    <Prop name='TabPanel id' isRequired={true} type='string' default='/' description='Id value of Tab Panel'/>
                </PropsList>
                <p className='docs-page__paragraph'>tabs: TabNav</p>
                <PropsList>
                    <Prop name='label' isRequired={true} type='string' default='/' description='Text value of label'/>
                    <Prop name='id' isRequired={true} type='string' default='/' description='Unique identifier to connect tab nav and tab content'/>
                </PropsList>
                <p className='docs-page__paragraph'>tabs: TabContent</p>
                <PropsList>
                    <Prop name='content' isRequired={true} type='React.ReactNode' default='/' description='React.ReactNode'/>
                    <Prop name='id' isRequired={true} type='string' default='/' description='Unique identifier to connect tab nav and tab content'/>
                </PropsList>
            </section>
        )
    }
}
