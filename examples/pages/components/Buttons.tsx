import * as React from 'react';
import * as Markup from '../../js/react';
import {Button, Prop, PropsList, Label} from '../../../app-typescript';
import * as Components from '../playgrounds/react-playgrounds/components/Index';

export default class ButtonsDoc extends React.Component {
    render() {
        return (
            <section className="docs-page__container">
                <h2 className="docs-page__h2">Buttons</h2>
                <Markup.ReactMarkupCodePreview>
                    {`
                    <Button text="button default" onClick={()=> false} />
                `}
                </Markup.ReactMarkupCodePreview>
                <h3 className="docs-page__h3 docs-page__h3--small-top-m">Coloring</h3>
                <p className="docs-page__paragraph">
                    For Superdesk, only <em>Primary</em>, <em>Secondary</em> and <em>Tertiary</em> buttons should be
                    used. Other colour options will be deprecated in future versions.
                </p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <div className="docs-page__content-row docs-page__content-row--flex">
                            <Button text="Primary" type="primary" onClick={() => false} />
                            <Button text="Secondary" type="secondary" onClick={() => false} tooltip="test tooltip" />
                            <Button text="Tertiary" type="tertiary" onClick={() => false} />
                        </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        <Button text="Primary" type="primary" onClick={() => false} />
                        <Button text="Secondary" type="secondary" onClick={() => false} tooltip="test tooltip" />
                        <Button text="Tertiary" type="tertiary" onClick={() => false} />
                    `}</Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <Components.GraphicButtonsGroup>
                    <Components.GraphicButton
                        graphic="design"
                        text="View design guidelines"
                        smallText="Design guidelines"
                        link="#/design/buttons"
                    />
                </Components.GraphicButtonsGroup>

                <div className="d-flex items-center gap-1 mt-5 mb-1">
                    <h3 className="docs-page__h3 m-0">
                        Text only (without background)
                    </h3>
                    <Label text="Deprecated" size="large" noTransform={true} type="warning" />
                </div>
                <p className="docs-page__paragraph">
                    This option is deprecated and will be removed in future versions.
                </p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <div className="docs-page__content-row docs-page__content-row--flex">
                            <Button text="primary" type="primary" style="text-only" onClick={() => false} />
                            <Button text="default" style="text-only" onClick={() => false} />
                            <Button text="success" type="success" style="text-only" onClick={() => false} />
                            <Button text="warning" type="warning" style="text-only" onClick={() => false} />
                            <Button text="alert" type="alert" style="text-only" onClick={() => false} />
                            <Button text="highlight" type="highlight" style="text-only" onClick={() => false} />
                        </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        <Button text="primary" type="primary" style="text-only" onClick={()=> false} />
                        <Button text="default" style="text-only" onClick={()=> false} />
                        <Button text="success" type="success" style="text-only" onClick={()=> false} />
                        <Button text="warning" type="warning" style="text-only" onClick={()=> false} />
                        <Button text="alert" type="alert" style="text-only" onClick={()=> false} />
                        <Button text="highlight" type="highlight" style="text-only" onClick={()=> false} />
                    `}</Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">Sizing</h3>
                <p className="docs-page__paragraph">
                    For the default button, no size has to be specified. To change the default size set the{' '}
                    <code>size</code> value either to <code>small</code> or <code>large</code>. For the button to take
                    the full width of the container add <code>expand={'{true}'}</code>.
                </p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <div className="docs-page__content-row docs-page__content-row--flex">
                            <Button text="button large" size="large" onClick={() => false} />
                            <Button text="button default" onClick={() => false} />
                            <Button text="button small" size="small" onClick={() => false} />
                        </div>
                        <div className="docs-page__content-row docs-page__content-row--flex">
                            <Button text="large expanded button" expand={true} size="large" onClick={() => false} />
                        </div>
                        <div className="docs-page__content-row docs-page__content-row--flex">
                            <Button text="default expanded button" expand={true} onClick={() => false} />
                        </div>
                        <div className="docs-page__content-row docs-page__content-row--flex">
                            <Button text="small expanded button" expand={true} size="small" onClick={() => false} />
                        </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        <Button text="button large" size="large" onClick={()=> false} />
                        <Button text="button default" onClick={()=> false} />
                        <Button text="button small" size="small" onClick={()=> false} />

                        <Button text="large expanded button" expand={true} size="large" onClick={()=> false} />
                        <Button text="default expanded button" expand={true} onClick={()=> false} />
                        <Button text="small expanded button" expand={true} size="small" onClick={()=> false} />
                    `}</Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">States</h3>
                <p className="docs-page__paragraph">
                    Disabled state:<code>disabled={'{true}'}</code>; Loading state:<code>isLoading={'{true}'}</code>
                    ;{' '}
                </p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <p className="docs-page__paragraph">// Disabled</p>
                        <div className="docs-page__content-row docs-page__content-row--flex">
                            <Button text="Primary" type="primary" disabled={true} onClick={() => false} />
                            <Button text="Secondary" disabled={true} onClick={() => false} />
                            <Button text="Tertiary" type="tertiary" disabled={true} onClick={() => false} />
                        </div>
                        <p className="docs-page__paragraph">// Loading</p>
                        <div className="docs-page__content-row docs-page__content-row--flex">
                            <Button text="Primary" type="primary" isLoading={true} onClick={() => false} />
                            <Button text="Secondary" isLoading={true} onClick={() => false} />
                            <Button text="Tertiary" type="tertiary" isLoading={true} onClick={() => false} />
                        </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        // Disabled
                        <Button text="Primary" type="primary" disabled={true} onClick={() => false} />
                        <Button text="Secondary" disabled={true} onClick={() => false} />
                        <Button text="Tertiary" type="tertiary" disabled={true} onClick={() => false} />

                        // Loading
                        <Button text="Primary" type="primary" isLoading={true} onClick={() => false} />
                        <Button text="Secondary" isLoading={true} onClick={() => false} />
                        <Button text="Tertiary" type="tertiary" isLoading={true} onClick={() => false} />
                    `}</Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">Buttons with icon and text</h3>
                <p className="docs-page__paragraph">
                    Buttons can be combined with icons from the icon font. Just add any of the available classes from
                    the Icon font as a value of the <code>icon</code> prop.
                </p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <p className="docs-page__paragraph">// Default size</p>
                        <div className="docs-page__content-row docs-page__content-row--flex">
                            <Button
                                text="Primary"
                                type="primary"
                                icon="plus-sign"
                                onClick={() => false}
                            />
                            <Button
                                text="Secondary"
                                type="secondary"
                                icon="info-sign"
                                onClick={() => false}
                            />
                            <Button
                                text="Tertiary"
                                type="tertiary"
                                icon="info-sign"
                                onClick={() => false}
                            />
                        </div>
                        <p className="docs-page__paragraph">// Large and small options</p>
                        <div className="docs-page__content-row docs-page__content-row--flex">
                            <Button
                                text="Primary large"
                                type="primary"
                                icon="plus-sign"
                                size="large"
                                onClick={() => false}
                            />
                            <Button
                                text="Secondary large"
                                icon="info-sign"
                                size="large"
                                onClick={() => false}
                            />
                            <Button
                                text="Primary small"
                                type="primary"
                                icon="plus-sign"
                                size="small"
                                onClick={() => false}
                            />
                            <Button
                                text="Tertiary small"
                                type="tertiary"
                                icon="info-sign"
                                size="small"
                                onClick={() => false}
                            />
                        </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        // Default size
                        <Button
                            text="Primary"
                            type="primary"
                            icon="plus-sign"
                            onClick={() => false}
                        />
                        <Button
                            text="Secondary"
                            type="secondary"
                            icon="info-sign"
                            onClick={() => false}
                        />
                        <Button
                            text="Tertiary"
                            type="tertiary"
                            icon="info-sign"
                            onClick={() => false}
                        />

                        // Large and small options
                        <Button
                            text="Primary large"
                            type="primary"
                            icon="plus-sign"
                            size="large"
                            onClick={() => false}
                        />
                        <Button
                            text="Secondary large"
                            icon="info-sign"
                            size="large"
                            onClick={() => false}
                        />
                        <Button
                            text="Primary small"
                            type="primary"
                            icon="plus-sign"
                            size="small"
                            onClick={() => false}
                        />
                        <Button
                            text="Tertiary small"
                            type="tertiary"
                            icon="info-sign"
                            size="small"
                            onClick={() => false}
                        />
                    `}</Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">Buttons with icon font only</h3>
                <p className="docs-page__paragraph">
                    Buttons can also contain only an icon, without any visible text. To achieve this specify the{' '}
                    <code>icon</code> value and set <code>iconOnly={true}</code>. The specified text value will be used
                    for the <code>aria-label</code>.
                </p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <p className="docs-page__paragraph">// Large default and small</p>
                        <div className="docs-page__content-row">
                            <Button
                                type="primary"
                                icon="plus-sign"
                                text="plus-sign"
                                size="large"
                                iconOnly={true}
                                onClick={() => false}
                            />
                            <Button
                                type="secondary"
                                icon="exclamation-sign"
                                text="exclamation-sign"
                                size="large"
                                iconOnly={true}
                                onClick={() => false}
                            />

                            <Button
                                type="tertiary"
                                icon="bell"
                                text="bell"
                                size="large"
                                iconOnly={true}
                                onClick={() => false}
                            />
                            <Button
                                type="primary"
                                icon="plus-sign"
                                text="plus-sign"
                                iconOnly={true}
                                onClick={() => false}
                            />
                            <Button
                                icon="info-sign"
                                text="info-sign"
                                iconOnly={true}
                                onClick={() => false}
                            />
                            <Button
                                type="tertiary"
                                icon="ok"
                                text="ok"
                                iconOnly={true}
                                onClick={() => false}
                            />
                            <Button
                                type="primary"
                                icon="plus-sign"
                                text="plus-sign"
                                size="small"
                                iconOnly={true}
                                onClick={() => false}
                            />
                            <Button
                                icon="calendar"
                                size="small"
                                text="calendar"
                                iconOnly={true}
                                onClick={() => false}
                            />
                            <Button
                                type="tertiary"
                                icon="refresh"
                                text="refresh"
                                size="small"
                                iconOnly={true}
                                onClick={() => false}
                            />
                        </div>

                        <p className="docs-page__paragraph">// Circle (large, default and small)</p>
                        <div className="docs-page__content-row">
                            <Button
                                type="primary"
                                icon="plus-large"
                                text="plus-large"
                                size="large"
                                shape="round"
                                iconOnly={true}
                                onClick={() => false}
                            />
                            <Button
                                type="secondary"
                                icon="exclamation-sign"
                                text="exclamation-sign"
                                size="large"
                                shape="round"
                                iconOnly={true}
                                onClick={() => false}
                            />

                            <Button
                                type="tertiary"
                                icon="chevron-up-thin"
                                text="Pull up"
                                shape="round"
                                size="large"
                                iconOnly={true}
                                onClick={() => false}
                            />

                            <Button
                                type="primary"
                                icon="plus-large"
                                text="plus-large"
                                shape="round"
                                iconOnly={true}
                                onClick={() => false}
                            />
                            <Button
                                type="secondary"
                                icon="info-sign"
                                text="info-sign"
                                shape="round"
                                iconOnly={true}
                                onClick={() => false}
                            />
                            <Button
                                type="tertiary"
                                icon="ok"
                                text="ok"
                                shape="round"
                                iconOnly={true}
                                onClick={() => false}
                            />

                            <Button
                                type="primary"
                                icon="plus-large"
                                text="Add New"
                                size="small"
                                shape="round"
                                iconOnly={true}
                                onClick={() => false}
                            />
                            <Button
                                icon="star"
                                text="star"
                                size="small"
                                shape="round"
                                iconOnly={true}
                                onClick={() => false}
                            />
                            <Button
                                type="tertiary"
                                icon="close-small"
                                text="close-small"
                                size="small"
                                shape="round"
                                iconOnly={true}
                                onClick={() => false}
                            />
                        </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        // Large default and small
                        <Button
                            type="primary"
                            icon="plus-sign"
                            text="plus-sign"
                            size="large"
                            iconOnly={true}
                            onClick={() => false}
                        />
                        <Button
                            type="secondary"
                            icon="exclamation-sign"
                            text="exclamation-sign"
                            size="large"
                            iconOnly={true}
                            onClick={() => false}
                        />
                        <Button
                            type="tertiary"
                            icon="bell"
                            text="bell"
                            size="large"
                            iconOnly={true}
                            onClick={() => false}
                        />
                        <Button
                            type="primary"
                            icon="plus-sign"
                            text="plus-sign"
                            iconOnly={true}
                            onClick={() => false}
                        />
                        <Button
                            icon="info-sign"
                            text="info-sign"
                            iconOnly={true}
                            onClick={() => false}
                        />
                        <Button
                            type="tertiary"
                            icon="ok"
                            text="ok"
                            iconOnly={true}
                            onClick={() => false}
                        />
                        <Button
                            type="primary"
                            icon="plus-sign"
                            text="plus-sign"
                            size="small"
                            iconOnly={true}
                            onClick={() => false}
                        />
                        <Button
                            icon="calendar"
                            size="small"
                            text="calendar"
                            iconOnly={true}
                            onClick={() => false}
                        />
                        <Button
                            type="tertiary"
                            icon="refresh"
                            text="refresh"
                            size="small"
                            iconOnly={true}
                            onClick={() => false}
                        />

                        // Circle (large, default and small)
                        <Button
                            type="primary"
                            icon="plus-large"
                            text="plus-large"
                            size="large"
                            shape="round"
                            iconOnly={true}
                            onClick={() => false}
                        />
                        <Button
                            type="secondary"
                            icon="exclamation-sign"
                            text="exclamation-sign"
                            size="large"
                            shape="round"
                            iconOnly={true}
                            onClick={() => false}
                        />
                        <Button
                            type="tertiary"
                            icon="chevron-up-thin"
                            text="Pull up"
                            shape="round"
                            size="large"
                            iconOnly={true}
                            onClick={() => false}
                        />

                        <Button
                            type="primary"
                            icon="plus-large"
                            text="plus-large"
                            shape="round"
                            iconOnly={true}
                            onClick={() => false}
                        />
                        <Button
                            type="secondary"
                            icon="info-sign"
                            text="info-sign"
                            shape="round"
                            iconOnly={true}
                            onClick={() => false}
                        />
                        <Button
                            type="tertiary"
                            icon="ok"
                            text="ok"
                            shape="round"
                            iconOnly={true}
                            onClick={() => false}
                        />

                        <Button
                            type="primary"
                            icon="plus-large"
                            text="Add New"
                            size="small"
                            shape="round"
                            iconOnly={true}
                            onClick={() => false}
                        />
                        <Button
                            icon="star"
                            text="star"
                            size="small"
                            shape="round"
                            iconOnly={true}
                            onClick={() => false}
                        />
                        <Button
                            type="tertiary"
                            icon="close-small"
                            text="close-small"
                            size="small"
                            shape="round"
                            iconOnly={true}
                            onClick={() => false}
                        />
                    `}</Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">Props</h3>
                <PropsList>
                    <Prop
                        name="text"
                        isRequired={true}
                        type="string"
                        default="/"
                        description="Text value of the Button. In the case of iconOnly buttons the value will be set to the aria-label."
                    />
                    <Prop
                        name="iconOnly"
                        isRequired={false}
                        type="boolean"
                        default="false"
                        description="This prop is used for Buttons with icons only. It set to true, it will visually hide the text and use the value for the aria-label."
                    />
                    <Prop
                        name="expand"
                        isRequired={false}
                        type="boolean"
                        default="false"
                        description="Spans the full width of the Button parent."
                    />
                    <Prop
                        name="style"
                        isRequired={false}
                        type="filled | hollow | text-only"
                        default="filled"
                        description="Styles are deprecated and will be removed in future versions. Three levels (see type prop) are advised: Primary, Secondary, and Tertiary."
                    />
                    <Prop
                        name="shape"
                        isRequired={false}
                        type="square | round"
                        default="square"
                        description="Make shape of button round or default square."
                    />
                    <Prop
                        name="type"
                        isRequired={false}
                        type="primary | secondary | tertiary | default | success | warning | alert | highlight | sd-green"
                        default="secondary"
                        description="Three levels are advised: Primary, Secondary, and Tertiary. Other semantic variations (success, warning, alert, highlight, sd-green) are deprecated and will be removed in future versions."
                    />
                    <Prop
                        name="theme"
                        isRequired={false}
                        type="light | dark"
                        default="light"
                        description="Styles button for diffrent background."
                    />
                    <Prop
                        name="size"
                        isRequired={false}
                        type="small | normal | large"
                        default="normal"
                        description="Specifies a small, normal or large button."
                    />
                    <Prop
                        name="icon"
                        isRequired={false}
                        type="string"
                        default="/"
                        description="Icon class name without the icon- part."
                    />
                    <Prop
                        name="disabled"
                        isRequired={false}
                        type="boolean"
                        default="false"
                        description="Disables the Button, preventing mouse events."
                    />
                    <Prop
                        name="isLoading"
                        isRequired={false}
                        type="boolean"
                        default="false"
                        description="Adds a loading indicator and disables the button if set to true."
                    />
                    <Prop
                        name="onClick"
                        isRequired={true}
                        type="function"
                        default="false"
                        description="Callback fired when a button is pressed."
                    />
                </PropsList>
            </section>
        );
    }
}
