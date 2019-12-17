import * as React from 'react';

import * as Markup from '../../js/react';

import { Tooltip } from '../../../app-typescript';

export default class TooltipDoc extends React.Component {
    render() {
        return (
            <section className="docs-page__container">
                <h2 className="docs-page__h2">Tooltips</h2>
                <p className="docs-page__paragraph"></p>
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
