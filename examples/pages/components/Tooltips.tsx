import * as React from 'react';

import * as Markup from '../../js/react';

import { Tooltip, Prop, PropsList, Button } from '../../../app-typescript';

export default class TooltipDoc extends React.Component {
    render() {
        return (
            <section className="docs-page__container">
                <h2 className="docs-page__h2">Tooltips</h2>
                <Markup.ReactMarkupCodePreview>{`
                    <Tooltip text="I'm on top" >
                        <Button text='top' onClick={() => false} />
                    </Tooltip>
                `}
                </Markup.ReactMarkupCodePreview>
                <h3 className="docs-page__h3">Default</h3>
                <p className="docs-page__paragraph">Chose one of 4 placement options (<code>’left’</code>, <code>’right’</code>, <code>down</code>, and <code>’top’</code>). The default value is <code>’top’</code> and will be rendered so without explicitly specifying it.</p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <div className="docs-page__content-row docs-page__content-row--no-margin">
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
                        </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
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

                <h3 className="docs-page__h3">Props</h3>
                <PropsList>
                    <Prop name='text' isRequired={true} type='string' default='/' description='Tooltip text value.' />
                    <Prop name='flow' isRequired={false} type='top | left | right | down' default='top' description='Position of tooltip text.' />
                </PropsList>
            </section>
        )
    }
}
