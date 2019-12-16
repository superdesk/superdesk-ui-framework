import * as React from "react";
import * as Markup from "../../js/react";

import { Button } from "../../../app-typescript";

export default class ButtonsDoc extends React.Component {
    render() {
        return (
            <section className="docs-page__container">
                <h2 className="docs-page__h2">Buttons</h2>
                <h3 className="docs-page__h3">Sizing</h3>

                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                    <div className="docs-page__content-row">
                        <Button text="button small" size="small" onClick = { ()=> false}/>
                        <Button text="button default" onClick = { ()=> false}/>
                        <Button text="button large" size="large" onClick = { ()=> false}/>
                    </div>
                    <div className="docs-page__content-row">
                        <Button text="small expanded button" expand={true} size="small" onClick = { ()=> false}/>
                    </div>                    
                    <div className="docs-page__content-row">
                        <Button text="default expanded button" expand={true} onClick = { ()=> false}/>
                    </div>
                    <div className="docs-page__content-row">
                        <Button text="large expanded button" expand={true} size="large" onClick = { ()=> false}/>
                    </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        <Button text="button default" size="default" />
                        <Button text="button expanded" expand={true} />
                    `}</Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">Coloring</h3>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                    <div className="docs-page__content-row">
                        <Button text="default" onClick = { ()=> false}/>
                        <Button text="primary" type="primary" onClick = { ()=> false}/>
                        <Button text="success" type="success" onClick = { ()=> false}/>
                        <Button text="warning" type="warning" onClick = { ()=> false}/>
                        <Button text="alert" type="alert" onClick = { ()=> false}/>
                        <Button text="highlight" type="highlight" onClick = { ()=> false}/>
                        <Button text="sd-green" type="sd-green" onClick = { ()=> false}/>
                    </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        <Button text="default" />
                        <Button text="primary" type="primary" />
                        <Button text="success" type="success" />
                        <Button text="warning" type="warning" />
                        <Button text="alert" type="alert" />
                        <Button text="highlight" type="highlight" />
                        <Button text="sd-green" type="sd-green" />
                    `}</Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">Hollow style</h3>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                    <div className="docs-page__content-row">
                        <Button text="default" style="hollow" onClick = { ()=> false}/>
                        <Button text="primary" type="primary" style="hollow" onClick = { ()=> false}/>
                        <Button text="success" type="success" style="hollow" onClick = { ()=> false}/>
                        <Button text="warning" type="warning" style="hollow" onClick = { ()=> false}/>
                        <Button text="alert" type="alert" style="hollow" onClick = { ()=> false}/>
                        <Button text="highlight" type="highlight" style="hollow" onClick = { ()=> false}/>
                        <Button text="sd-green" type="sd-green" style="hollow" onClick = { ()=> false}/>
                    </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        <Button text="default" style="hollow" />
                        <Button text="primary" type="primary" style="hollow" />
                        <Button text="success" type="success" style="hollow" />
                        <Button text="warning" type="warning" style="hollow" />
                        <Button text="alert" type="alert" style="hollow" />
                        <Button text="highlight" type="highlight" style="hollow" />
                        <Button text="sd-green" type="sd-green" style="hollow" />
                    `}</Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">Text only (without background)</h3>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                    <div className="docs-page__content-row">
                        <Button text="default" style="text-only" onClick = { ()=> false}/>
                        <Button text="primary" type="primary" style="text-only" onClick = { ()=> false}/>
                        <Button text="success" type="success" style="text-only" onClick = { ()=> false}/>
                        <Button text="warning" type="warning" style="text-only" onClick = { ()=> false}/>
                        <Button text="alert" type="alert" style="text-only" onClick = { ()=> false}/>
                        <Button text="highlight" type="highlight" style="text-only" onClick = { ()=> false}/>
                        <Button text="sd-green" type="sd-green" style="text-only" onClick = { ()=> false}/>
                    </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        <Button text="default" style="text-only" />
                        <Button text="primary" type="primary" style="text-only" />
                        <Button text="success" type="success" style="text-only" />
                        <Button text="warning" type="warning" style="text-only" />
                        <Button text="alert" type="alert" style="text-only" />
                        <Button text="highlight" type="highlight" style="text-only" />
                        <Button text="sd-green" type="sd-green" style="text-only" />
                    `}</Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">Disabled</h3>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                    <div className="docs-page__content-row">
                        <Button text="default" disabled={true} onClick = { ()=> false}/>
                        <Button text="primary" type="primary" disabled={true} onClick = { ()=> false}/>
                        <Button text="success" type="success" disabled={true} onClick = { ()=> false}/>
                        <Button text="warning" type="warning" disabled={true} onClick = { ()=> false}/>
                        <Button text="alert" type="alert" disabled={true} onClick = { ()=> false}/>
                        <Button text="highlight" type="highlight" disabled={true} onClick = { ()=> false}/>
                        <Button text="sd-green" type="sd-green" disabled={true} onClick = { ()=> false}/>
                    </div>
                    <div className="docs-page__content-row">
                        <Button text="default" style="hollow" disabled={true} onClick = { ()=> false}/>
                        <Button text="primary" type="primary" style="hollow" disabled={true} onClick = { ()=> false}/>
                        <Button text="success" type="success" style="hollow" disabled={true} onClick = { ()=> false}/>
                        <Button text="warning" type="warning" style="hollow" disabled={true} onClick = { ()=> false}/>
                        <Button text="alert" type="alert" style="hollow" disabled={true} onClick = { ()=> false}/>
                        <Button text="highlight" type="highlight" style="hollow" disabled={true} onClick = { ()=> false}/>
                        <Button text="sd-green" type="sd-green" style="hollow" disabled={true} onClick = { ()=> false}/>
                    </div>
                    <div className="docs-page__content-row">
                        <Button text="default" style="text-only" disabled={true} onClick = { ()=> false}/>
                        <Button text="primary" type="primary" style="text-only" disabled={true} onClick = { ()=> false}/>
                        <Button text="success" type="success" style="text-only" disabled={true} onClick = { ()=> false}/>
                        <Button text="warning" type="warning" style="text-only" disabled={true} onClick = { ()=> false}/>
                        <Button text="alert" type="alert" style="text-only" disabled={true} onClick = { ()=> false}/>
                        <Button text="highlight" type="highlight" style="text-only" disabled={true} onClick = { ()=> false}/>
                        <Button text="sd-green" type="sd-green" style="text-only" disabled={true} onClick = { ()=> false}/>
                    </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        <Button text="default" disabled={true} />
                        <Button text="primary" type="primary" disabled={true} />
                        <Button text="success" type="success" disabled={true} />
                        <Button text="warning" type="warning" disabled={true} />
                        <Button text="alert" type="alert" disabled={true} />
                        <Button text="highlight" type="highlight" disabled={true} />
                        <Button text="sd-green" type="sd-green" disabled={true} />
                    `}</Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">Buttons with icon font and text</h3>
                <p className="docs-page__paragraph ng-scope">Buttons can be combined with the the icon font. No extra modifiers are needed, just adding any of the available classes from the Icon font to an <code>&lt;i&gt;</code> tag placed before the button text.</p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                    <p className="docs-page__paragraph">// Default size</p>
                    <div className="docs-page__content-row">
                        <Button text="default" icon="info-sign" onClick = { ()=> false}/>
                        <Button text="primary" type="primary" icon="plus-sign" onClick = { ()=> false}/>
                        <Button text="success" type="success" icon="ok" onClick = { ()=> false}/>
                        <Button text="alert" type="alert" icon="warning-sign" onClick = { ()=> false}/>
                        <Button text="default" icon="info-sign" style="hollow" onClick = { ()=> false}/>
                        <Button text="primary" type="primary" icon="plus-sign" style="hollow" onClick = { ()=> false}/>
                        <Button text="success" type="success" icon="ok" style="hollow"  onClick = { ()=> false}/>
                        <Button text="warning" type="warning" icon="warning-sign" style="hollow" onClick = { ()=> false}/>
                        <Button text="default" icon="info-sign" disabled={true} onClick = { ()=> false}/>
                        <Button text="primary" type="primary" icon="plus-sign" disabled={true} onClick = { ()=> false}/>
                    </div>
                    <p className="docs-page__paragraph">// Large size</p>
                    <div className="docs-page__content-row">
                        <Button text="default" icon="info-sign" size="large" onClick = { ()=> false}/>
                        <Button text="primary" type="primary" icon="plus-sign" size="large" onClick = { ()=> false}/>
                        <Button text="success" type="success" icon="ok" size="large" onClick = { ()=> false}/>
                        <Button text="default" icon="info-sign" style="hollow" size="large" onClick = { ()=> false}/>
                        <Button text="primary" type="primary" icon="plus-sign" style="hollow" size="large" onClick = { ()=> false}/>
                    </div>
                    <p className="docs-page__paragraph">// Small size</p>
                    <div className="docs-page__content-row">
                        <Button text="default" icon="info-sign" size="small" onClick = { ()=> false}/>
                        <Button text="primary" type="primary" icon="plus-sign" size="small" onClick = { ()=> false}/>
                    </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        <Button text="default" icon="info-sign" />
                        <Button text="primary" type="primary" icon="plus-sign" />
                        <Button text="success" type="success" icon="ok" />
                        <Button text="alert" type="alert" icon="warning-sign" />
                        <Button text="default" icon="info-sign" style="hollow" />
                        <Button text="primary" type="primary" icon="plus-sign" style="hollow" />
                        <Button text="success" type="success" icon="ok" style="hollow" />
                        <Button text="warning" type="warning" icon="warning-sign" style="hollow" />
                        <Button text="default" icon="info-sign" disabled={true} />
                        <Button text="primary" type="primary" icon="plus-sign" disabled={true} />
                    `}</Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">Buttons with icon font only</h3>
                <p className="docs-page__paragraph ng-scope">For buttons without any text, only an icon, the modifier <code>btn--icon-only</code> is needed to ajust the padding and width of the button.</p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                    <p className="docs-page__paragraph">// Default</p>
                    <div className="docs-page__content-row">
                        <Button icon="info-sign" onClick = { ()=> false}/>
                        <Button type="primary" icon="plus-sign" onClick = { ()=> false}/>
                        <Button type="success" icon="ok" onClick = { ()=> false}/>
                    </div>
                    <p className="docs-page__paragraph">// Large</p>
                    <div className="docs-page__content-row">
                        <Button type="warning" icon="exclamation-sign" size="large" onClick = { ()=> false}/>
                        <Button type="primary" icon="plus-sign" style="hollow" size="large" onClick = { ()=> false}/>
                        <Button type="highlight" icon="bell" size="large" onClick = { ()=> false}/>
                    </div>
                    <p className="docs-page__paragraph">// Small</p>
                    <div className="docs-page__content-row">
                        <Button type="alert" style="hollow" icon="kill" size="small" onClick = { ()=> false}/>
                        <Button icon="calendar" size="small" onClick = { ()=> false}/>
                        <Button type="primary" style="hollow" icon="refresh" size="small" onClick = { ()=> false}/>
                    </div>
                    <p className="docs-page__paragraph">// Circle default</p>
                    <div className="docs-page__content-row">
                        <Button size="normal" icon="info-sign" shape="round" onClick = { ()=> false}/>
                        <Button type="primary" icon="plus-large" shape="round" onClick = { ()=> false}/>
                        <Button type="success" icon="ok" shape="round" onClick = { ()=> false}/>
                    </div>
                    <p className="docs-page__paragraph">// Circle large</p>
                    <div className="docs-page__content-row">
                        <Button type="warning" icon="exclamation-sign" size="large" shape="round" onClick = { ()=> false}/>
                        <Button type="primary" icon="plus-large" style="hollow" size="large" shape="round" onClick = { ()=> false}/>
                        <Button type="highlight" icon="bell" size="large" shape="round" onClick = { ()=> false}/>
                    </div>
                    <p className="docs-page__paragraph">// Circle small</p>
                    <div className="docs-page__content-row">
                        <Button type="alert" icon="close-small" size="small" shape="round" onClick = { ()=> false}/>
                        <Button type="primary" icon="plus-large" size="small" shape="round" onClick = { ()=> false}/>
                        <Button type="sd-green" icon="star" size="small" shape="round" onClick = { ()=> false}/>
                    </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        // Default
                        <Button icon="info-sign" />
                        <Button type="primary" icon="plus-sign" />
                        <Button type="success" icon="ok" />
                        // Large
                        <Button type="warning" icon="exclamation-sign" size="large" />
                        <Button type="primary" icon="plus-sign" style="hollow" size="large" />
                        <Button type="highlight" icon="bell" size="large" />
                        // Small
                        <Button type="alert" style="hollow" icon="kill" size="small" />
                        <Button icon="calendar" size="small" />
                        <Button type="primary" style="hollow" icon="refresh" size="small" />
                        // Circle default
                        <Button size="normal" icon="info-sign" shape="round" />
                        <Button type="primary" icon="plus-large" shape="round" />
                        <Button type="success" icon="ok" shape="round" />
                        // Circle large
                        <Button type="warning" icon="exclamation-sign" size="large" shape="round" />
                        <Button type="primary" icon="plus-large" style="hollow" size="large" shape="round" />
                        <Button type="highlight" icon="bell" size="large" shape="round" />
                        // Circle small
                        <Button type="alert" icon="close-small" size="small" shape="round" />
                        <Button type="primary" icon="plus-large" size="small" shape="round" />
                        <Button type="sd-green" icon="star" size="small" shape="round" />
                    `}</Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">Dark UI</h3>
                <p className="docs-page__paragraph ng-scope">To have appropriate button colors on dark background, just add class <code>btn--ui-dark</code> to regular markup.</p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                    <p className="docs-page__paragraph">// Default style</p>
                    <div className="docs-page__content-row docs-page__content-row--ui-dark">
                        <Button text="default" theme="dark" onClick = { ()=> false}/>
                        <Button text="primary" type="primary" theme="dark" onClick = { ()=> false}/>
                        <Button text="success" type="success" theme="dark" onClick = { ()=> false}/>
                        <Button text="warning" type="warning" theme="dark" onClick = { ()=> false}/>
                        <Button text="alert" type="alert" theme="dark" onClick = { ()=> false}/>
                        <Button text="highlight" type="highlight" theme="dark" onClick = { ()=> false}/>
                        <Button text="sd-green" type="sd-green" theme="dark" onClick = { ()=> false}/>
                    </div>
                    <p className="docs-page__paragraph">// Hollow style</p>
                    <div className="docs-page__content-row docs-page__content-row--ui-dark">
                        <Button text="default" style="hollow" theme="dark" onClick = { ()=> false}/>
                        <Button text="primary" type="primary" style="hollow" theme="dark" onClick = { ()=> false}/>
                        <Button text="success" type="success" style="hollow" theme="dark" onClick = { ()=> false}/>
                        <Button text="warning" type="warning" style="hollow" theme="dark" onClick = { ()=> false}/>
                        <Button text="alert" type="alert" style="hollow" theme="dark" onClick = { ()=> false}/>
                        <Button text="highlight" type="highlight" style="hollow" theme="dark" onClick = { ()=> false}/>
                        <Button text="sd-green" type="sd-green" style="hollow" theme="dark" onClick = { ()=> false}/>
                    </div>
                    <p className="docs-page__paragraph">// Text only style</p>
                    <div className="docs-page__content-row docs-page__content-row--ui-dark">
                        <Button text="default" theme="dark" style="text-only" onClick = { ()=> false}/>
                        <Button text="primary" type="primary" style="text-only" theme="dark" onClick = { ()=> false}/>
                        <Button text="success" type="success" style="text-only" theme="dark" onClick = { ()=> false}/>
                        <Button text="warning" type="warning" style="text-only" theme="dark" onClick = { ()=> false}/>
                        <Button text="alert" type="alert" style="text-only" theme="dark" onClick = { ()=> false}/>
                        <Button text="highlight" type="highlight" style="text-only" theme="dark" onClick = { ()=> false}/>
                        <Button text="sd-green" type="sd-green" style="text-only" theme="dark" onClick = { ()=> false}/>
                    </div>
                    <p className="docs-page__paragraph">// Disabled</p>
                    <div className="docs-page__content-row docs-page__content-row--ui-dark">
                        <Button text="default" disabled={true} theme="dark" onClick = { ()=> false}/>
                        <Button text="primary" type="primary" disabled={true} theme="dark" onClick = { ()=> false}/>
                        <Button text="success" type="success" disabled={true} theme="dark" onClick = { ()=> false}/>
                        <Button text="warning" type="warning" disabled={true} theme="dark" onClick = { ()=> false}/>
                        <Button text="alert" type="alert" disabled={true} theme="dark" onClick = { ()=> false}/>
                        <Button text="highlight" type="highlight" disabled={true} theme="dark" onClick = { ()=> false}/>
                        <Button text="sd-green" type="sd-green" disabled={true} theme="dark" onClick = { ()=> false}/>
                        <Button text="default" style="hollow" disabled={true} theme="dark" onClick = { ()=> false}/>
                        <Button text="primary" type="primary" style="hollow" disabled={true} theme="dark" onClick = { ()=> false}/>
                        <Button text="success" type="success" style="hollow" disabled={true} theme="dark" onClick = { ()=> false}/>
                        <Button text="warning" type="warning" style="hollow" disabled={true} theme="dark" onClick = { ()=> false}/>
                        <Button text="alert" type="alert" style="hollow" disabled={true} theme="dark" onClick = { ()=> false}/>
                        <Button text="highlight" type="highlight" style="hollow" disabled={true} theme="dark" onClick = { ()=> false}/>
                        <Button text="sd-green" type="sd-green" style="hollow" disabled={true} theme="dark" onClick = { ()=> false}/>
                        <Button text="default" disabled={true} style="text-only" theme="dark" onClick = { ()=> false}/>
                        <Button text="primary" type="primary" style="text-only" disabled={true} theme="dark" onClick = { ()=> false}/>
                        <Button text="success" type="success" style="text-only" disabled={true} theme="dark" onClick = { ()=> false}/>
                        <Button text="warning" type="warning" style="text-only" disabled={true} theme="dark" onClick = { ()=> false}/>
                        <Button text="alert" type="alert" style="text-only" disabled={true} theme="dark" onClick = { ()=> false}/>
                        <Button text="highlight" type="highlight" style="text-only" disabled={true} theme="dark" onClick = { ()=> false}/>
                        <Button text="sd-green" type="sd-green" style="text-only" disabled={true} theme="dark" onClick = { ()=> false}/>
                    </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        <Button text="default" theme="dark" />
                        <Button text="primary" type="primary" theme="dark" />
                        <Button text="success" type="success" theme="dark" />
                        <Button text="warning" type="warning" theme="dark" />
                        <Button text="alert" type="alert" theme="dark" />
                        <Button text="highlight" type="highlight" theme="dark" />
                        <Button text="sd-green" type="sd-green" theme="dark" />
                    `}</Markup.ReactMarkupCode>
                </Markup.ReactMarkup>
            </section>
        )
    }
}
