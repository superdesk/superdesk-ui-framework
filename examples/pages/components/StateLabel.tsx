import * as React from 'react';
import * as Markup from '../../js/react';
import {StateLabel, Prop, PropsList} from '../../../app-typescript';

export default class StateLabelDoc extends React.Component {
    render() {
        return (
            <section className="docs-page__container">
                <h2 className="docs-page__h2">State Label</h2>
                <Markup.ReactMarkupCodePreview>
                    {`
                    <StateLabel state="published" text="Published" />
                `}
                </Markup.ReactMarkupCodePreview>
                <p className="docs-page__paragraph">
                    Display item states with predefined semantic colors. Currently supports 15 states with automatic
                    color mapping.
                </p>

                <h3 className="docs-page__h3">All States</h3>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <div className="docs-page__content-row">
                            <div style={{display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center'}}>
                                <StateLabel state="draft" text="Draft" />
                                <StateLabel state="ingested" text="Ingested" />
                                <StateLabel state="routed" text="Routed" />
                                <StateLabel state="fetched" text="Fetched" />
                                <StateLabel state="submitted" text="Submitted" />
                                <StateLabel state="in_progress" text="In Progress" />
                                <StateLabel state="published" text="Published" />
                                <StateLabel state="spiked" text="Spiked" />
                                <StateLabel state="recalled" text="Recalled" />
                                <StateLabel state="killed" text="Killed" />
                                <StateLabel state="scheduled" text="Scheduled" />
                                <StateLabel state="corrected" text="Corrected" />
                                <StateLabel state="correction" text="Correction" />
                                <StateLabel state="being_corrected" text="Being Corrected" />
                                <StateLabel state="unpublished" text="Unpublished" />
                            </div>
                        </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>
                        {`
                        <StateLabel state="draft" text="Draft" />
                        <StateLabel state="ingested" text="Ingested" />
                        <StateLabel state="routed" text="Routed" />
                        <StateLabel state="fetched" text="Fetched" />
                        <StateLabel state="submitted" text="Submitted" />
                        <StateLabel state="in_progress" text="In Progress" />
                        <StateLabel state="published" text="Published" />
                        <StateLabel state="spiked" text="Spiked" />
                        <StateLabel state="recalled" text="Recalled" />
                        <StateLabel state="killed" text="Killed" />
                        <StateLabel state="scheduled" text="Scheduled" />
                        <StateLabel state="corrected" text="Corrected" />
                        <StateLabel state="correction" text="Correction" />
                        <StateLabel state="being_corrected" text="Being Corrected" />
                        <StateLabel state="unpublished" text="Unpublished" />
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">With Click Handler</h3>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <div className="docs-page__content-row">
                            <StateLabel
                                state="being_corrected"
                                text="Click me to open article"
                                onClick={() => alert('Article opened!')}
                            />
                        </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>
                        {`
                        <StateLabel
                            state="being_corrected"
                            text="Click me to open article"
                            onClick={() => alert('Article opened!')}
                        />
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">Different Sizes</h3>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <div className="docs-page__content-row">
                            <div style={{display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center'}}>
                                <StateLabel state="published" text="Small" size="small" />
                                <StateLabel state="published" text="Normal" size="normal" />
                                <StateLabel state="published" text="Large" size="large" />
                            </div>
                        </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>
                        {`
                        <StateLabel state="published" text="Small" size="small" />
                        <StateLabel state="published" text="Normal" size="normal" />
                        <StateLabel state="published" text="Large" size="large" />
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">Custom State Mapping</h3>
                <p className="docs-page__paragraph">
                    Override default state-to-color mapping or define custom states with their own colors and styles.
                </p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <div className="docs-page__content-row">
                            <div style={{display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center'}}>
                                <StateLabel state="draft" text="Draft (Default)" />
                                <StateLabel
                                    state="draft"
                                    text="Draft (Custom Alert)"
                                    mappingOverride={{
                                        draft: {type: 'alert', style: 'hollow'},
                                    }}
                                />
                                <StateLabel
                                    state="archived"
                                    text="Archived"
                                    mappingOverride={{
                                        archived: {color: 'gray--500', style: 'hollow'},
                                    }}
                                />
                            </div>
                        </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>
                        {`
                        {/* Predefined state with default mapping */}
                        <StateLabel state="draft" text="Draft (Default)" />

                        {/* Override predefined state mapping */}
                        <StateLabel
                            state="draft"
                            text="Draft (Custom Alert)"
                            mappingOverride={{
                                draft: {type: 'alert', style: 'hollow'}
                            }}
                        />

                        {/* Custom state with mapping */}
                        <StateLabel
                            state="archived"
                            text="Archived"
                            mappingOverride={{
                                archived: {color: 'gray--500', style: 'hollow'}
                            }}
                        />
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">Props</h3>
                <PropsList>
                    <Prop
                        name="state"
                        isRequired={true}
                        type="StateType"
                        default="/"
                        description="The item state value. One of 15 predefined states (draft, published, etc.) or any custom state string"
                    />
                    <Prop name="text" isRequired={true} type="string" default="/" description="Label text to display" />
                    <Prop name="onClick" isRequired={false} type="() => void" default="/" description="Click handler" />
                    <Prop
                        name="color"
                        isRequired={false}
                        type="string"
                        default="/"
                        description="Custom color override (e.g. red--500); NOTE: When defined, it overrides the state's predefined color"
                    />
                    <Prop
                        name="size"
                        isRequired={false}
                        type="small | normal | large"
                        default="normal"
                        description="Label size"
                    />
                    <Prop
                        name="noTransform"
                        isRequired={false}
                        type="boolean"
                        default="false"
                        description="Disable uppercase text transformation"
                    />
                    <Prop
                        name="mappingOverride"
                        isRequired={false}
                        type="Partial<Record<StateType, IStateColorConfig>>"
                        default="undefined"
                        description="Override or define state-to-color mapping. Works with predefined and custom states"
                    />
                </PropsList>
            </section>
        );
    }
}
