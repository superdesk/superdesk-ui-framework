import * as React from "react";
import * as Markup from "../../js/react";
import { Button } from "../../../app-typescript";
import * as Components from '../playgrounds/react-playgrounds/components/Index';

export default class ButtonsDoc extends React.Component {
    render() {
        return (
            <section className="docs-page__container">
                <h2 className="docs-page__h2">Buttons</h2>
                <Markup.ReactMarkupCodePreview>{`
                    <Button text="button default" onClick={()=> false}/>
                `}
                </Markup.ReactMarkupCodePreview>
                <h3 className="docs-page__h3 docs-page__h3--small-top-m">Coloring</h3>
                <p className="docs-page__paragraph">For Superdesk only <em>Default</em> and <em>Primary</em> buttons should be used in most cases. Other semantic colour options are allowed but should be used only in cases where a clear distinction between similarly important actions is needed (e.g. <em>Send To</em> versus <em>Publish</em> action).</p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                    <div className="docs-page__content-row">
                        <Button text="default" onClick={()=> false} />
                        <Button text="primary" type="primary" onClick={()=> false} />
                    </div>
                    <p className="docs-page__paragraph">// Other colour options</p>
                    <div className="docs-page__content-row docs-page__content-row--no-margin">
                        <Button text="success" type="success" onClick={()=> false} />
                        <Button text="warning" type="warning" onClick={()=> false} />
                        <Button text="alert" type="alert" onClick={()=> false} />
                        <Button text="highlight" type="highlight" onClick={()=> false} />
                        <Button text="sd-green" type="sd-green" onClick={()=> false} />
                    </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        <Button text="default" onClick={()=> false} />
                        <Button text="primary" type="primary" onClick={()=> false} />
                        // Other colour options
                        <Button text="success" type="success" onClick={()=> false} />
                        <Button text="warning" type="warning" onClick={()=> false} />
                        <Button text="alert" type="alert" onClick={()=> false} />
                        <Button text="highlight" type="highlight" onClick={()=> false} />
                        <Button text="sd-green" type="sd-green" onClick={()=> false} />
                    `}</Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <Components.GraphicButtonsGroup>
                    <Components.GraphicButton graphic='design' text='View design guidelines' smallText='Design guidelines' link='#/design/buttons' />
                </Components.GraphicButtonsGroup>

                <h3 className="docs-page__h3">Hollow style</h3>
                <p className="docs-page__paragraph">Define prop <code>style="hollow"</code> to create a hollow buttons.</p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                    <div className="docs-page__content-row">
                        <Button text="default" style="hollow" onClick={()=> false} />
                        <Button text="primary" type="primary" style="hollow" onClick={()=> false} />
                    </div>
                    <p className="docs-page__paragraph">// Other colour options</p>
                    <div className="docs-page__content-row docs-page__content-row--no-margin">
                        <Button text="success" type="success" style="hollow" onClick={()=> false} />
                        <Button text="warning" type="warning" style="hollow" onClick={()=> false} />
                        <Button text="alert" type="alert" style="hollow" onClick={()=> false} />
                        <Button text="highlight" type="highlight" style="hollow" onClick={()=> false} />
                        <Button text="sd-green" type="sd-green" style="hollow" onClick={()=> false} />
                    </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        <Button text="default" style="hollow" onClick={()=> false} />
                        <Button text="primary" type="primary" style="hollow" onClick={()=> false} />
                        // Other colour options
                        <Button text="success" type="success" style="hollow" onClick={()=> false} />
                        <Button text="warning" type="warning" style="hollow" onClick={()=> false} />
                        <Button text="alert" type="alert" style="hollow" onClick={()=> false} />
                        <Button text="highlight" type="highlight" style="hollow" onClick={()=> false} />
                        <Button text="sd-green" type="sd-green" style="hollow" onClick={()=> false} />
                    `}</Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">Text only (without background)</h3>
                <p className="docs-page__paragraph">Define prop <code>style="text-only</code> for buttons without a background.</p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                    <div className="docs-page__content-row docs-page__content-row--no-margin">
                        <Button text="default" style="text-only" onClick={()=> false} />
                        <Button text="primary" type="primary" style="text-only" onClick={()=> false} />
                        <Button text="success" type="success" style="text-only" onClick={()=> false} />
                        <Button text="warning" type="warning" style="text-only" onClick={()=> false} />
                        <Button text="alert" type="alert" style="text-only" onClick={()=> false} />
                        <Button text="highlight" type="highlight" style="text-only" onClick={()=> false} />
                        <Button text="sd-green" type="sd-green" style="text-only" onClick={()=> false} />
                    </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        <Button text="default" style="text-only" onClick={()=> false} />
                        <Button text="primary" type="primary" style="text-only" onClick={()=> false} />
                        <Button text="success" type="success" style="text-only" onClick={()=> false} />
                        <Button text="warning" type="warning" style="text-only" onClick={()=> false} />
                        <Button text="alert" type="alert" style="text-only" onClick={()=> false} />
                        <Button text="highlight" type="highlight" style="text-only" onClick={()=> false} />
                        <Button text="sd-green" type="sd-green" style="text-only" onClick={()=> false} />
                    `}</Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">Sizing</h3>
                <p className="docs-page__paragraph">For the default button, no size has to be specified. To change the default size set the <code>size</code> value either to <code>small</code> or <code>large</code>. For the button to take the full width of the container add <code>expand={'{true}'}</code>.</p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                    <div className="docs-page__content-row">
                        <Button text="button small" size="small" onClick={()=> false} />
                        <Button text="button default" onClick={()=> false} />
                        <Button text="button large" size="large" onClick={()=> false} />
                    </div>
                    <div className="docs-page__content-row">
                        <Button text="small expanded button" expand={true} size="small" onClick={()=> false} />
                    </div>                    
                    <div className="docs-page__content-row">
                        <Button text="default expanded button" expand={true} onClick={()=> false} />
                    </div>
                    <div className="docs-page__content-row">
                        <Button text="large expanded button" expand={true} size="large" onClick={()=> false} />
                    </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        <Button text="button default" size="default" />
                        <Button text="button expanded" expand={true} />
                    `}</Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">Disabled</h3>
                <p className="docs-page__paragraph"><code>disabled={'{true}'}</code></p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                    <div className="docs-page__content-row">
                        <Button text="default" disabled={true} onClick={()=> false} />
                        <Button text="primary" type="primary" disabled={true} onClick={()=> false} />
                        <Button text="success" type="success" disabled={true} onClick={()=> false} />
                        <Button text="warning" type="warning" disabled={true} onClick={()=> false} />
                        <Button text="alert" type="alert" disabled={true} onClick={()=> false} />
                        <Button text="highlight" type="highlight" disabled={true} onClick={()=> false} />
                        <Button text="sd-green" type="sd-green" disabled={true} onClick={()=> false} />
                    </div>
                    <div className="docs-page__content-row">
                        <Button text="default" style="hollow" disabled={true} onClick={()=> false} />
                        <Button text="primary" type="primary" style="hollow" disabled={true} onClick={()=> false} />
                        <Button text="success" type="success" style="hollow" disabled={true} onClick={()=> false} />
                        <Button text="warning" type="warning" style="hollow" disabled={true} onClick={()=> false} />
                        <Button text="alert" type="alert" style="hollow" disabled={true} onClick={()=> false} />
                        <Button text="highlight" type="highlight" style="hollow" disabled={true} onClick={()=> false} />
                        <Button text="sd-green" type="sd-green" style="hollow" disabled={true} onClick={()=> false} />
                    </div>
                    <div className="docs-page__content-row docs-page__content-row--no-margin">
                        <Button text="default" style="text-only" disabled={true} onClick={()=> false} />
                        <Button text="primary" type="primary" style="text-only" disabled={true} onClick={()=> false} />
                        <Button text="success" type="success" style="text-only" disabled={true} onClick={()=> false} />
                        <Button text="warning" type="warning" style="text-only" disabled={true} onClick={()=> false} />
                        <Button text="alert" type="alert" style="text-only" disabled={true} onClick={()=> false} />
                        <Button text="highlight" type="highlight" style="text-only" disabled={true} onClick={()=> false} />
                        <Button text="sd-green" type="sd-green" style="text-only" disabled={true} onClick={()=> false} />
                    </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        <Button text="default" disabled={true} onClick={()=> false} />
                        <Button text="primary" type="primary" disabled={true} onClick={()=> false} />
                        <Button text="success" type="success" disabled={true} onClick={()=> false} />
                        <Button text="warning" type="warning" disabled={true} onClick={()=> false} />
                        <Button text="alert" type="alert" disabled={true} onClick={()=> false} />
                        <Button text="highlight" type="highlight" disabled={true} onClick={()=> false} />
                        <Button text="sd-green" type="sd-green" disabled={true} onClick={()=> false} />

                        <Button text="default" style="hollow" disabled={true} onClick={()=> false} />
                        <Button text="primary" type="primary" style="hollow" disabled={true} onClick={()=> false} />
                        <Button text="success" type="success" style="hollow" disabled={true} onClick={()=> false} />
                        <Button text="warning" type="warning" style="hollow" disabled={true} onClick={()=> false} />
                        <Button text="alert" type="alert" style="hollow" disabled={true} onClick={()=> false} />
                        <Button text="highlight" type="highlight" style="hollow" disabled={true} onClick={()=> false} />
                        <Button text="sd-green" type="sd-green" style="hollow" disabled={true} onClick={()=> false} />

                        <Button text="default" style="text-only" disabled={true} onClick={()=> false} />
                        <Button text="primary" type="primary" style="text-only" disabled={true} onClick={()=> false} />
                        <Button text="success" type="success" style="text-only" disabled={true} onClick={()=> false} />
                        <Button text="warning" type="warning" style="text-only" disabled={true} onClick={()=> false} />
                        <Button text="alert" type="alert" style="text-only" disabled={true} onClick={()=> false} />
                        <Button text="highlight" type="highlight" style="text-only" disabled={true} onClick={()=> false} />
                        <Button text="sd-green" type="sd-green" style="text-only" disabled={true} onClick={()=> false} />
                    `}</Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">Buttons with icon and text</h3>
                <p className="docs-page__paragraph">Buttons can be combined with icons from the icon font. Just add any of the available classes from the Icon font as a value of the <code>icon</code> prop.</p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                    <p className="docs-page__paragraph">// Default size</p>
                    <div className="docs-page__content-row">
                        <Button text="default" icon="info-sign" onClick={()=> false} />
                        <Button text="primary" type="primary" icon="plus-sign" onClick={()=> false} />
                        <Button text="success" type="success" icon="ok" onClick={()=> false} />
                        <Button text="alert" type="alert" icon="warning-sign" onClick={()=> false} />
                        <Button text="default" icon="info-sign" style="hollow" onClick={()=> false} />
                        <Button text="primary" type="primary" icon="plus-sign" style="hollow" onClick={()=> false} />
                        <Button text="success" type="success" icon="ok" style="hollow" onClick={()=> false} />
                        <Button text="warning" type="warning" icon="warning-sign" style="hollow" onClick={()=> false} />
                        <Button text="default" icon="info-sign" disabled={true} onClick={()=> false} />
                        <Button text="primary" type="primary" icon="plus-sign" disabled={true} onClick={()=> false} />
                    </div>
                    <p className="docs-page__paragraph">// Large size</p>
                    <div className="docs-page__content-row">
                        <Button text="default" icon="info-sign" size="large" onClick={()=> false} />
                        <Button text="primary" type="primary" icon="plus-sign" size="large" onClick={()=> false} />
                        <Button text="success" type="success" icon="ok" size="large" onClick={()=> false} />
                        <Button text="default" icon="info-sign" style="hollow" size="large" onClick={()=> false} />
                        <Button text="primary" type="primary" icon="plus-sign" style="hollow" size="large" onClick={()=> false} />
                    </div>
                    <p className="docs-page__paragraph">// Small size</p>
                    <div className="docs-page__content-row">
                        <Button text="default" icon="info-sign" size="small" onClick={()=> false} />
                        <Button text="primary" type="primary" icon="plus-sign" size="small" onClick={()=> false} />
                    </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        // Default size
                        <Button text="default" icon="info-sign" onClick={()=> false} />
                        <Button text="primary" type="primary" icon="plus-sign" onClick={()=> false} />
                        <Button text="success" type="success" icon="ok" onClick={()=> false} />
                        <Button text="alert" type="alert" icon="warning-sign" onClick={()=> false} />
                        <Button text="default" icon="info-sign" style="hollow" onClick={()=> false} />
                        <Button text="primary" type="primary" icon="plus-sign" style="hollow" onClick={()=> false} />
                        <Button text="success" type="success" icon="ok" style="hollow" onClick={()=> false} />
                        <Button text="warning" type="warning" icon="warning-sign" style="hollow" onClick={()=> false} />
                        <Button text="default" icon="info-sign" disabled={true} onClick={()=> false} />
                        <Button text="primary" type="primary" icon="plus-sign" disabled={true} onClick={()=> false} />

                        // Large size
                        <Button text="default" icon="info-sign" size="large" onClick={()=> false} />
                        <Button text="primary" type="primary" icon="plus-sign" size="large" onClick={()=> false} />
                        <Button text="success" type="success" icon="ok" size="large" onClick={()=> false} />
                        <Button text="default" icon="info-sign" style="hollow" size="large" onClick={()=> false} />
                        <Button text="primary" type="primary" icon="plus-sign" style="hollow" size="large" onClick={()=> false} />

                        // Small size
                        <Button text="default" icon="info-sign" size="small" onClick={()=> false} />
                        <Button text="primary" type="primary" icon="plus-sign" size="small" onClick={()=> false} />
                    `}</Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">Buttons with icon font only</h3>
                <p className="docs-page__paragraph">Buttons can also contain only an icon, without any text. To achieve this the <code>icon</code> value needs to be specified and the <code>text</code> prop left out completely.</p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                    <p className="docs-page__paragraph">// Default</p>
                    <div className="docs-page__content-row">
                        <Button icon="info-sign" onClick={()=> false} />
                        <Button type="primary" icon="plus-sign" onClick={()=> false} />
                        <Button type="success" icon="ok" onClick={()=> false} />
                    </div>
                    <p className="docs-page__paragraph">// Large</p>
                    <div className="docs-page__content-row">
                        <Button type="warning" icon="exclamation-sign" size="large" onClick={()=> false} />
                        <Button type="primary" icon="plus-sign" style="hollow" size="large" onClick={()=> false} />
                        <Button type="highlight" icon="bell" size="large" onClick={()=> false} />
                    </div>
                    <p className="docs-page__paragraph">// Small</p>
                    <div className="docs-page__content-row">
                        <Button type="alert" style="hollow" icon="kill" size="small" onClick={()=> false} />
                        <Button icon="calendar" size="small" onClick={()=> false} />
                        <Button type="primary" style="hollow" icon="refresh" size="small" onClick={()=> false} />
                    </div>
                    <p className="docs-page__paragraph">// Circle default</p>
                    <div className="docs-page__content-row">
                        <Button size="normal" icon="info-sign" shape="round" onClick={()=> false} />
                        <Button type="primary" icon="plus-large" shape="round" onClick={()=> false} />
                        <Button type="success" icon="ok" shape="round" onClick={()=> false} />
                    </div>
                    <p className="docs-page__paragraph">// Circle large</p>
                    <div className="docs-page__content-row">
                        <Button type="warning" icon="exclamation-sign" size="large" shape="round" onClick={()=> false} />
                        <Button type="primary" icon="plus-large" style="hollow" size="large" shape="round" onClick={()=> false} />
                        <Button type="highlight" icon="bell" size="large" shape="round" onClick={()=> false} />
                    </div>
                    <p className="docs-page__paragraph">// Circle small</p>
                    <div className="docs-page__content-row">
                        <Button type="alert" icon="close-small" size="small" shape="round" onClick={()=> false} />
                        <Button type="primary" icon="plus-large" size="small" shape="round" onClick={()=> false} />
                        <Button type="sd-green" icon="star" size="small" shape="round" onClick={()=> false} />
                    </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        // Default
                        <Button icon="info-sign" onClick={()=> false} />
                        <Button type="primary" icon="plus-sign" onClick={()=> false} />
                        <Button type="success" icon="ok" onClick={()=> false} />

                        // Large
                        <Button type="warning" icon="exclamation-sign" size="large" onClick={()=> false} />
                        <Button type="primary" icon="plus-sign" style="hollow" size="large" onClick={()=> false} />
                        <Button type="highlight" icon="bell" size="large" onClick={()=> false} />

                        // Small
                        <Button type="alert" style="hollow" icon="kill" size="small" onClick={()=> false} />
                        <Button icon="calendar" size="small" onClick={()=> false} />
                        <Button type="primary" style="hollow" icon="refresh" size="small" onClick={()=> false} />

                        // Circle default
                        <Button size="normal" icon="info-sign" shape="round" onClick={()=> false} />
                        <Button type="primary" icon="plus-large" shape="round" onClick={()=> false} />
                        <Button type="success" icon="ok" shape="round" onClick={()=> false} />

                        // Circle large
                        <Button type="warning" icon="exclamation-sign" size="large" shape="round" onClick={()=> false} />
                        <Button type="primary" icon="plus-large" style="hollow" size="large" shape="round" onClick={()=> false} />
                        <Button type="highlight" icon="bell" size="large" shape="round" onClick={()=> false} />

                        // Circle small
                        <Button type="alert" icon="close-small" size="small" shape="round" onClick={()=> false} />
                        <Button type="primary" icon="plus-large" size="small" shape="round" onClick={()=> false} />
                        <Button type="sd-green" icon="star" size="small" shape="round" onClick={()=> false} />
                    `}</Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">Dark UI</h3>
                <p className="docs-page__paragraph">To directly modify the button styles for a dark background set the prop <code>theme</code> to <code>"dark"</code>.</p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                    <p className="docs-page__paragraph">// Default style</p>
                    <div className="docs-page__content-row docs-page__content-row--ui-dark">
                        <Button text="default" theme="dark" onClick={()=> false} />
                        <Button text="primary" type="primary" theme="dark" onClick={()=> false} />
                        <Button text="success" type="success" theme="dark" onClick={()=> false} />
                        <Button text="warning" type="warning" theme="dark" onClick={()=> false} />
                        <Button text="alert" type="alert" theme="dark" onClick={()=> false} />
                        <Button text="highlight" type="highlight" theme="dark" onClick={()=> false} />
                        <Button text="sd-green" type="sd-green" theme="dark" onClick={()=> false} />
                    </div>
                    <p className="docs-page__paragraph">// Hollow style</p>
                    <div className="docs-page__content-row docs-page__content-row--ui-dark">
                        <Button text="default" style="hollow" theme="dark" onClick={()=> false} />
                        <Button text="primary" type="primary" style="hollow" theme="dark" onClick={()=> false} />
                        <Button text="success" type="success" style="hollow" theme="dark" onClick={()=> false} />
                        <Button text="warning" type="warning" style="hollow" theme="dark" onClick={()=> false} />
                        <Button text="alert" type="alert" style="hollow" theme="dark" onClick={()=> false} />
                        <Button text="highlight" type="highlight" style="hollow" theme="dark" onClick={()=> false} />
                        <Button text="sd-green" type="sd-green" style="hollow" theme="dark" onClick={()=> false} />
                    </div>
                    <p className="docs-page__paragraph">// Text only style</p>
                    <div className="docs-page__content-row docs-page__content-row--ui-dark">
                        <Button text="default" theme="dark" style="text-only" onClick={()=> false} />
                        <Button text="primary" type="primary" style="text-only" theme="dark" onClick={()=> false} />
                        <Button text="success" type="success" style="text-only" theme="dark" onClick={()=> false} />
                        <Button text="warning" type="warning" style="text-only" theme="dark" onClick={()=> false} />
                        <Button text="alert" type="alert" style="text-only" theme="dark" onClick={()=> false} />
                        <Button text="highlight" type="highlight" style="text-only" theme="dark" onClick={()=> false} />
                        <Button text="sd-green" type="sd-green" style="text-only" theme="dark" onClick={()=> false} />
                    </div>
                    <p className="docs-page__paragraph">// Disabled</p>
                    <div className="docs-page__content-row docs-page__content-row--ui-dark">
                        <Button text="default" disabled={true} theme="dark" onClick={()=> false} />
                        <Button text="primary" type="primary" disabled={true} theme="dark" onClick={()=> false} />
                        <Button text="success" type="success" disabled={true} theme="dark" onClick={()=> false} />
                        <Button text="warning" type="warning" disabled={true} theme="dark" onClick={()=> false} />
                        <Button text="alert" type="alert" disabled={true} theme="dark" onClick={()=> false} />
                        <Button text="highlight" type="highlight" disabled={true} theme="dark" onClick={()=> false} />
                        <Button text="sd-green" type="sd-green" disabled={true} theme="dark" onClick={()=> false} />
                        <Button text="default" style="hollow" disabled={true} theme="dark" onClick={()=> false} />
                        <Button text="primary" type="primary" style="hollow" disabled={true} theme="dark" onClick={()=> false} />
                        <Button text="success" type="success" style="hollow" disabled={true} theme="dark" onClick={()=> false} />
                        <Button text="warning" type="warning" style="hollow" disabled={true} theme="dark" onClick={()=> false} />
                        <Button text="alert" type="alert" style="hollow" disabled={true} theme="dark" onClick={()=> false} />
                        <Button text="highlight" type="highlight" style="hollow" disabled={true} theme="dark" onClick={()=> false} />
                        <Button text="sd-green" type="sd-green" style="hollow" disabled={true} theme="dark" onClick={()=> false} />
                        <Button text="default" disabled={true} style="text-only" theme="dark" onClick={()=> false} />
                        <Button text="primary" type="primary" style="text-only" disabled={true} theme="dark" onClick={()=> false} />
                        <Button text="success" type="success" style="text-only" disabled={true} theme="dark" onClick={()=> false} />
                        <Button text="warning" type="warning" style="text-only" disabled={true} theme="dark" onClick={()=> false} />
                        <Button text="alert" type="alert" style="text-only" disabled={true} theme="dark" onClick={()=> false} />
                        <Button text="highlight" type="highlight" style="text-only" disabled={true} theme="dark" onClick={()=> false} />
                        <Button text="sd-green" type="sd-green" style="text-only" disabled={true} theme="dark" onClick={()=> false} />
                    </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        // Defaut size
                        <Button text="default" theme="dark" onClick={()=> false} />
                        <Button text="primary" type="primary" theme="dark" onClick={()=> false} />
                        <Button text="success" type="success" theme="dark" onClick={()=> false} />
                        <Button text="warning" type="warning" theme="dark" onClick={()=> false} />
                        <Button text="alert" type="alert" theme="dark" onClick={()=> false} />
                        <Button text="highlight" type="highlight" theme="dark" onClick={()=> false} />
                        <Button text="sd-green" type="sd-green" theme="dark" onClick={()=> false} />

                        // Hollow style
                        <Button text="default" style="hollow" theme="dark" onClick={()=> false} />
                        <Button text="primary" type="primary" style="hollow" theme="dark" onClick={()=> false} />
                        <Button text="success" type="success" style="hollow" theme="dark" onClick={()=> false} />
                        <Button text="warning" type="warning" style="hollow" theme="dark" onClick={()=> false} />
                        <Button text="alert" type="alert" style="hollow" theme="dark" onClick={()=> false} />
                        <Button text="highlight" type="highlight" style="hollow" theme="dark" onClick={()=> false} />
                        <Button text="sd-green" type="sd-green" style="hollow" theme="dark" onClick={()=> false} />

                        // Text only style
                        <Button text="default" theme="dark" style="text-only" onClick={()=> false} />
                        <Button text="primary" type="primary" style="text-only" theme="dark" onClick={()=> false} />
                        <Button text="success" type="success" style="text-only" theme="dark" onClick={()=> false} />
                        <Button text="warning" type="warning" style="text-only" theme="dark" onClick={()=> false} />
                        <Button text="alert" type="alert" style="text-only" theme="dark" onClick={()=> false} />
                        <Button text="highlight" type="highlight" style="text-only" theme="dark" onClick={()=> false} />
                        <Button text="sd-green" type="sd-green" style="text-only" theme="dark" onClick={()=> false} />

                        // Disabled
                        <Button text="default" disabled={true} theme="dark" onClick={()=> false} />
                        <Button text="primary" type="primary" disabled={true} theme="dark" onClick={()=> false} />
                        <Button text="success" type="success" disabled={true} theme="dark" onClick={()=> false} />
                        <Button text="warning" type="warning" disabled={true} theme="dark" onClick={()=> false} />
                        <Button text="alert" type="alert" disabled={true} theme="dark" onClick={()=> false} />
                        <Button text="highlight" type="highlight" disabled={true} theme="dark" onClick={()=> false} />
                        <Button text="sd-green" type="sd-green" disabled={true} theme="dark" onClick={()=> false} />
                        <Button text="default" style="hollow" disabled={true} theme="dark" onClick={()=> false} />
                        <Button text="primary" type="primary" style="hollow" disabled={true} theme="dark" onClick={()=> false} />
                        <Button text="success" type="success" style="hollow" disabled={true} theme="dark" onClick={()=> false} />
                        <Button text="warning" type="warning" style="hollow" disabled={true} theme="dark" onClick={()=> false} />
                        <Button text="alert" type="alert" style="hollow" disabled={true} theme="dark" onClick={()=> false} />
                        <Button text="highlight" type="highlight" style="hollow" disabled={true} theme="dark" onClick={()=> false} />
                        <Button text="sd-green" type="sd-green" style="hollow" disabled={true} theme="dark" onClick={()=> false} />
                        <Button text="default" disabled={true} style="text-only" theme="dark" onClick={()=> false} />
                        <Button text="primary" type="primary" style="text-only" disabled={true} theme="dark" onClick={()=> false} />
                        <Button text="success" type="success" style="text-only" disabled={true} theme="dark" onClick={()=> false} />
                        <Button text="warning" type="warning" style="text-only" disabled={true} theme="dark" onClick={()=> false} />
                        <Button text="alert" type="alert" style="text-only" disabled={true} theme="dark" onClick={()=> false} />
                        <Button text="highlight" type="highlight" style="text-only" disabled={true} theme="dark" onClick={()=> false} />
                        <Button text="sd-green" type="sd-green" style="text-only" disabled={true} theme="dark" onClick={()=> false} />
                    `}</Markup.ReactMarkupCode>
                </Markup.ReactMarkup>
            </section>
        )
    }
}
