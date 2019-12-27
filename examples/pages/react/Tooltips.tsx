import * as React from 'react';

import * as Markup from '../../js/react';

import { Tooltip } from '../../../app-typescript';

export default class TooltipDoc extends React.Component {
    render() {
        return (
            <section className="docs-page__container">
                <h2 className="docs-page__h2">Tooltips</h2>
                <Markup.ReactMarkupCodePreview>{`
                    <Tooltip text="top" tooltip={{text:"I'm on top"}} onClick={() => false}/>
                `}
                </Markup.ReactMarkupCodePreview>
                <p className="docs-page__paragraph">Chose one of 4 placement options (<code>’left’</code>, <code>’right’</code>, <code>’bottom’</code>, and <code>’top’</code>). The default value is <code>’top’</code> and will be rendered so without explicitly specifying it.</p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <div className="docs-page__content-row docs-page__content-row--no-margin">
                            <Tooltip text="top" tooltip={{ text: "I'm on top" }} onClick={() => false} />
                            <Tooltip text="bottom" tooltip={{ text: "I'm at the Bottom", flow: "down" }} onClick={() => false} />
                            <Tooltip text="left" tooltip={{ text: "I open on the left", flow: "left" }} onClick={() => false} />
                            <Tooltip text="right" tooltip={{ text: "Right on!", flow: "right" }} onClick={() => false} />
                        </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        <Tooltip text="top" tooltip={{text:"I'm on top"}} onClick={()=> false} />
                        <Tooltip text="bottom" tooltip={{text:"I'm at the Bottom", flow:"down"}} onClick={() => false} />
                        <Tooltip text="left" tooltip={{text:"I open on the left", flow:"left"}} onClick={() => false} />
                        <Tooltip text="right" tooltip={{text:"Right on!", flow:"right"}} onClick={() => false} />
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>
            </section>
        )
    }
}
