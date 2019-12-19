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
                <p className="docs-page__paragraph">To have tabs like navigation add <code>TabList</code> component and inside of it add tabs.</p>
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

                <h3 className="docs-page__h3">Large tabs</h3>
                <p className="docs-page__paragraph">Add ‘large’ to size prop of the <code>TabList</code> component.</p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <div className='docs-page__content-row'>
                            <TabList size='big'>
                                <Tab label='Content'>Content here.</Tab>
                                <Tab label='Metadata'>Metadata here.</Tab>
                                <Tab label='Duplicates'>Duplicates here.</Tab>
                            </TabList>
                        </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        <TabList size='big'>
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
                            <TabList size='small'>
                                <Tab label='Content'>Content here.</Tab>
                                <Tab label='Metadata'>Metadata here.</Tab>
                                <Tab label='Duplicates'>Duplicates here.</Tab>
                            </TabList>
                        </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        <TabList size='small'>
                            <Tab label='Content'>Content here.</Tab>
                            <Tab label='Metadata'>Metadata here.</Tab>
                            <Tab label='Duplicates'>Duplicates here.</Tab>
                        </TabList>
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">Dark tab variation</h3>
                <p className="docs-page__paragraph">Add ‘dark’ to theme prop of the <code>TabList</code> component.. Dark navigation also works with different sizing (big or small).</p>
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
