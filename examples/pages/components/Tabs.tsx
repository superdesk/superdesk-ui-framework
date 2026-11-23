import * as React from 'react';
import * as Markup from '../../js/react';

import {Tab, TabList, Prop, PropsList} from '../../../app-typescript';
import {Tabs, TabLabel, TabPanel, TabContent} from '../../../app-typescript';

interface IState {
    indexValue: number;
}

export default class TabsDoc extends React.Component<{}, IState> {
    constructor(props) {
        super(props);
        this.state = {
            indexValue: 0,
        };
        this.handleClick = this.handleClick.bind(this);
    }
    tabs: TabList;

    componentDidMount() {
        this.tabs.goTo('Content');
    }

    handleClick = (number: number) => {
        this.setState({
            indexValue: number,
        });
    };

    render() {
        return (
            <section className="docs-page__container">
                <h2 className="docs-page__h2">Tabs</h2>
                <Markup.ReactMarkupCodePreview>
                    {`
                    <TabList>
                        <Tab label='Content'>Content here.</Tab>
                        <Tab label='Metadata'>Metadata here.</Tab>
                        <Tab label='Duplicates'>Duplicates here.</Tab>
                    </TabList>
                `}
                </Markup.ReactMarkupCodePreview>
                <h3 className="docs-page__h3">Default tabs</h3>
                <p className="docs-page__paragraph">
                    To have a tab-like navigation add the <code>TabList</code> component and multiple <code>Tab</code>{' '}
                    components inside of it.
                </p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <div className="docs-page__content-row">
                            <TabList
                                ref={(tabs) => {
                                    this.tabs = tabs;
                                }}
                            >
                                <Tab label="Content">Content here.</Tab>
                                <Tab label="Metadata">Metadata here.</Tab>
                                <Tab label="Duplicates">Duplicates here.</Tab>
                            </TabList>
                        </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>
                        {`
                        <TabList>
                            <Tab label='Content'>Content here.</Tab>
                            <Tab label='Metadata'>Metadata here.</Tab>
                            <Tab label='Duplicates'>Duplicates here.</Tab>
                        </TabList>
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">Sizes</h3>
                <p className="docs-page__paragraph">
                    Tabs come in three different sizes – normal, small and large. Add prop <code>size='large'</code> to
                    the <code>TabList</code> component to create large tabs or <code>size='small'</code> for small ones.
                    The default (normal) size doesn't need the <code>size</code> prop to be specified.
                </p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <div className="docs-page__content-row">
                            <p className="docs-page__paragraph">// Normal tabs (default)</p>
                            <TabList>
                                <Tab label="Content">Content here.</Tab>
                                <Tab label="Metadata">Metadata here.</Tab>
                                <Tab label="Duplicates">Duplicates here.</Tab>
                            </TabList>
                        </div>
                        <div className="docs-page__content-row">
                            <p className="docs-page__paragraph">// Small tabs</p>
                            <TabList size="small">
                                <Tab label="Content">Content here.</Tab>
                                <Tab label="Metadata">Metadata here.</Tab>
                                <Tab label="Duplicates">Duplicates here.</Tab>
                            </TabList>
                        </div>
                        <div className="docs-page__content-row">
                            <p className="docs-page__paragraph">// Large tabs</p>
                            <TabList size="large">
                                <Tab label="Content">Content here.</Tab>
                                <Tab label="Metadata">Metadata here.</Tab>
                                <Tab label="Duplicates">Duplicates here.</Tab>
                            </TabList>
                        </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>
                        {`
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

                <h3 className="docs-page__h3">
                    Tabs with two components ( <code>Tabs</code> and <code> TabContent</code> ){' '}
                </h3>
                <p className="docs-page__paragraph">
                    If you want to use on one place list of tabs and on another place content of tabs, wrap all{' '}
                    <code>TabLabel</code> with <code>Tabs</code> component and all <code>TabPanel</code> components with{' '}
                    <code>TabContent.</code>
                </p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <div className="docs-page__content-row">
                            <Tabs selectedIndex={this.state.indexValue} onClick={this.handleClick}>
                                <TabLabel label="Content" indexValue={0} />
                                <TabLabel label="Metadata" indexValue={1} />
                                <TabLabel label="Duplicates" indexValue={2} />
                            </Tabs>
                            <TabContent activePanel={this.state.indexValue}>
                                <TabPanel indexValue={0}>Content here.</TabPanel>
                                <TabPanel indexValue={1}>Metadata here.</TabPanel>
                                <TabPanel indexValue={2}>Duplicates here.</TabPanel>
                            </TabContent>
                        </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>
                        {`
                    const [activeIndex, setActiveIndex] = React.useState(0);
                    const handleClick = (index: number) => {
                        setActiveIndex(index);
                    }

                       <Tabs selectedIndex={activeIndex} onClick={handleClick}>
                            <TabLabel label='Content' indexValue={0}/>
                            <TabLabel label='Metadata' indexValue={1}/>
                            <TabLabel label='Duplicates' indexValue={2}/>
                        </Tabs>
                        <TabContent activePanel={activeIndex}>
                            <TabPanel indexValue={0}>
                                Content here.
                            </TabPanel>
                            <TabPanel indexValue={1}>
                                Metadata here.
                            </TabPanel>
                            <TabPanel indexValue={2}>
                                Duplicates here.
                            </TabPanel>
                        </TabContent>
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <p className="docs-page__paragraph">
                    Pass <code>selectedIndex</code> to control the selected tab, for example to switch to a tab from
                    code. Without it, <code>Tabs</code> keeps the selection itself and{' '}
                    <code>initiallySelectedIndex</code> only sets the first one.
                </p>

                <h3 className="docs-page__h3">Segmented</h3>
                <p className="docs-page__paragraph">
                    Add prop <code>style='segmented'</code> for a segmented control look, for switching between views of
                    the same content, such as the sections of a form in a side panel.
                </p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <div className="docs-page__content-row">
                            <Tabs style="segmented" selectedIndex={this.state.indexValue} onClick={this.handleClick}>
                                <TabLabel label="Content" indexValue={0} />
                                <TabLabel label="Metadata" indexValue={1} />
                                <TabLabel label="Duplicates" indexValue={2} />
                            </Tabs>
                        </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>
                        {`
                        <Tabs style='segmented' selectedIndex={activeIndex} onClick={setActiveIndex}>
                            <TabLabel label='Content' indexValue={0}/>
                            <TabLabel label='Metadata' indexValue={1}/>
                            <TabLabel label='Duplicates' indexValue={2}/>
                        </Tabs>
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">Props</h3>
                <PropsList>
                    <Prop
                        name="tablist size"
                        isRequired={false}
                        type="small | normal | large"
                        default="normal"
                        description="Specifies a small, normal or large button."
                    />
                    <Prop
                        name="tablist theme"
                        isRequired={false}
                        type="light | dark"
                        default="light"
                        description="Styles tablist for diffrent background."
                    />
                    <Prop
                        name="tab label"
                        isRequired={false}
                        type="string"
                        default="/"
                        description="Text value of Tab label"
                    />
                </PropsList>
                <br />
                <h4 className="docs-page__h4">Tabs Custom</h4>
                <PropsList>
                    <Prop
                        name="tabs size"
                        isRequired={false}
                        type="small | normal | large"
                        default="normal"
                        description="Specifies a small, normal or large button."
                    />
                    <Prop
                        name="tabs theme"
                        isRequired={false}
                        type="light | dark"
                        default="light"
                        description="Styles tablist for diffrent background."
                    />
                    <Prop
                        name="tabs style"
                        isRequired={false}
                        type="default | segmented"
                        default="default"
                        description="Segmented shows the tabs as a segmented control."
                    />
                    <Prop
                        name="tabs selectedIndex"
                        isRequired={false}
                        type="number"
                        default="/"
                        description="Index of the selected tab. When set, the selection follows this prop and onClick only reports clicks."
                    />
                    <Prop
                        name="tabs initiallySelectedIndex"
                        isRequired={false}
                        type="number"
                        default="0"
                        description="Index of the tab selected on mount, when selectedIndex is not set."
                    />
                    <Prop
                        name="tabs ariaLabel"
                        isRequired={false}
                        type="string"
                        default="/"
                        description="Text value of aria-label"
                    />
                    <Prop
                        name="tabs onClick"
                        isRequired={true}
                        type="function"
                        default="/"
                        description="Use to return value of clicked label"
                    />
                    <Prop
                        name="tablabel indexValue"
                        isRequired={true}
                        type="number"
                        default="/"
                        description="Index value of label"
                    />
                    <Prop
                        name="tablabel label"
                        isRequired={true}
                        type="string"
                        default="/"
                        description="Text value of Tab label"
                    />

                    <Prop
                        name="tabcontent theme"
                        isRequired={false}
                        type="light | dark"
                        default="light"
                        description="Styles tablist for diffrent background."
                    />
                    <Prop
                        name="tabcontent activePanel"
                        isRequired={true}
                        type="number"
                        default="/"
                        description="Index value of active Tab"
                    />
                    <Prop
                        name="tabpanel indexValue"
                        isRequired={true}
                        type="number"
                        default="/"
                        description="Index value of Tab Panel"
                    />
                </PropsList>
            </section>
        );
    }
}
