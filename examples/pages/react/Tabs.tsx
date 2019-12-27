import * as React from 'react';

import * as Markup from '../../js/react';

import { Tab, TabList } from '../../../app-typescript';


export default class TabsDoc extends React.Component<{}> {
    tabs: TabList;

    componentDidMount() {
        this.tabs.goTo('Content')
    }

    render() {
        return (
            <section className="docs-page__container">
                <h2 className="docs-page__h2">Tabs</h2>
                <Markup.ReactMarkupCodePreview>{`
                    <TabList>
                        <Tab label='Content'>Content here.</Tab>
                        <Tab label='Metadata'>Metadata here.</Tab>
                        <Tab label='Duplicates'>Duplicates here.</Tab>
                    </TabList>
                `}
                </Markup.ReactMarkupCodePreview>
                <h3 className="docs-page__h3">Default tabs</h3>
                <p className="docs-page__paragraph">To have a tab-like navigation add the <code>TabList</code> component and multiple <code>Tab</code> components inside of it.</p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <div className='docs-page__content-row'>
                            <TabList ref={(tabs) => {
                                this.tabs = tabs;
                            }}>
                                <Tab label='Content'>Content here.</Tab>
                                <Tab label='Metadata'>Metadata here.</Tab>
                                <Tab label='Duplicates'>Duplicates here.</Tab>
                            </TabList>
                        </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        <TabList>
                            <Tab label='Content'>Content here.</Tab>
                            <Tab label='Metadata'>Metadata here.</Tab>
                            <Tab label='Duplicates'>Duplicates here.</Tab>
                        </TabList>
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">Sizes</h3>
                <p className="docs-page__paragraph">Tabs come in three different sizes, normal, large. Add prop <code>size='large'</code> to the <code>TabList</code> component to create large tabs or <code>size='small'</code> for small ones. The default (normal) size doesn't need the <code>size</code> prop to be specified.</p>
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
                            <TabList size='large'>
                                <Tab label='Content'>Content here.</Tab>
                                <Tab label='Metadata'>Metadata here.</Tab>
                                <Tab label='Duplicates'>Duplicates here.</Tab>
                            </TabList>
                        </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        <TabList size='large'>
                            <Tab label='Content'>Content here.</Tab>
                            <Tab label='Metadata'>Metadata here.</Tab>
                            <Tab label='Duplicates'>Duplicates here.</Tab>
                        </TabList>
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">Small tabs</h3>
                <p className="docs-page__paragraph">Add ‘small’ to size prop of the <code>TabList</code> component.</p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <div className='docs-page__content-row'>
                            <p className="docs-page__paragraph">// Small tabs</p>
                            <TabList size='small'>
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
            </section>
        )
    }
}
