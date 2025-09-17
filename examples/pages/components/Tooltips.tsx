import * as React from 'react';

import * as Markup from '../../js/react';

import {Tooltip, Prop, PropsList, Button} from '../../../app-typescript';

export default class TooltipDoc extends React.Component {
    render() {
        return (
            <section className="docs-page__container">
                <h2 className="docs-page__h2">Tooltips</h2>
                <Markup.ReactMarkupCodePreview>
                    {`
                    <Tooltip content="I'm on top" >
                        <Button text='top' onClick={() => false} />
                    </Tooltip>
                `}
                </Markup.ReactMarkupCodePreview>
                <h3 className="docs-page__h3">Default</h3>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <div className="docs-page__content-row docs-page__content-row--no-margin">
                            <Tooltip content="I'm on top">
                                <Button text="top" onClick={() => false} />
                            </Tooltip>
                            <Tooltip content="I'm at the bottom" placement="bottom">
                                <Button text="bottom" onClick={() => false} />
                            </Tooltip>
                            <Tooltip content="I open on the left" placement="left">
                                <Button text="left" onClick={() => false} />
                            </Tooltip>
                            <Tooltip content="Right on!" placement="right">
                                <Button text="right" onClick={() => false} />
                            </Tooltip>
                        </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>
                        {`
                        <Tooltip text="I'm on top" >
                            <Button text='top' onClick={() => false} />
                        </Tooltip>
                        <Tooltip text="I'm at the bottom" flow='down'>
                            <Button text='bottom' onClick={() => false} />
                        </Tooltip>
                        <Tooltip text="I open on the left" flow='left'>
                            <Button text='left' onClick={() => false} />
                        </Tooltip>
                        <Tooltip text="Right on!" flow='right'>
                            <Button text='right' onClick={() => false} />
                        </Tooltip>
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">With JSX as content</h3>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <div className="docs-page__content-row docs-page__content-row--no-margin">
                            <Tooltip content={() => <span>hello <span style={{color: 'yellow'}}>world</span></span>}>
                                <Button text="demo" onClick={() => false} />
                            </Tooltip>
                        </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>
                        {`
                        <Tooltip content={() => <span>hello <span style={{color: 'yellow'}}>world</span></span>}>
                            <Button text="demo" onClick={() => false} />
                        </Tooltip>
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>
            </section>
        );
    }
}
