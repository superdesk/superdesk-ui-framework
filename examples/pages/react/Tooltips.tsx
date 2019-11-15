import * as React from 'react';

import * as Markup from '../../js/react';

import { Tooltip } from '../../../app-typescript';

export default class TooltipDoc extends React.Component {
    render() {
        return (
            <section className="docs-page__container">
                <h2 className="docs-page__h2">Tooltips</h2>
                <p className="docs-page__paragraph">Add the <code>sd-tooltip</code> attribute to an element to add a tooltip to the element. 
                    The value of the attribute will be the text in the tooltip. The tooltip will appear at the top of the element by default. 
                    Use the optional <code>flow</code> attribute to control the possiton of the tooltip; possible values are: <code>bottom</code>, <code>left</code> and <code>right</code>.<br/>
                </p>
                <p className="docs-page__paragraph">You can also use <code>data-sd-tooltip</code> syntax with <code>data-flow</code> attribute, if needed.</p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                    <div className="docs-page__content-row">
                        <Tooltip text="top" tooltip={{text:"I'm on top"}}  onClick = { ()=> false}/>
                        <Tooltip text="bottom" tooltip={{text:"I'm at the Bottom",flow:"down"}}  onClick = { ()=> false}/>
                        <Tooltip text="left" tooltip={{text:"I open on the left",flow:"left"}}  onClick = { ()=> false}/>
                        <Tooltip text="right" tooltip={{text:"Right on!", flow:"right"}}  onClick = { ()=> false}/>
                    </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>
                       
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>
            </section>
        )
    }
}
