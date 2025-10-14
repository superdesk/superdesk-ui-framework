import * as React from 'react';
import {Popover, PropsList, Prop} from '../../../app-typescript';

import * as Markup from '../../js/react';

export class PopoverDoc extends React.Component {
    buttonRef: HTMLButtonElement | null;

    render() {
        return (
            <section className="docs-page__container">
                <h2 className="docs-page__h2">Popover triggered on click</h2>
                <Markup.ReactMarkupCodePreview>
                    {`
                    <Popover triggerSelector="#trigger-button-id" title="Popover title">
                        Popover content.
                    </Popover>
                `}
                </Markup.ReactMarkupCodePreview>

                <p className="docs-page__paragraph"></p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <div className="docs-page__content-row docs-page__content-row--no-margin">
                            <div className="form__row gap-0-5 sd-d-flex">
                                <button className="btn btn-default" aria-haspopup="true" id="button-view-content">
                                    Click me
                                </button>

                                <Popover
                                    triggerSelector="#button-view-content"
                                    title="Popover test"
                                    placement="top-end"
                                >
                                    Donec sed odio dui. Aenean lacinia bibendum nulla sed consectetur.
                                </Popover>
                            </div>
                        </div>
                    </Markup.ReactMarkupPreview>

                    <Markup.ReactMarkupCode>{`
                        <Popover
                            triggerSelector="#button-view-content"
                            title="Popover test"
                            placement="top-end"
                        >
                            Donec sed odio dui. Aenean lacinia bibendum nulla sed consectetur.
                        </Popover>
                    `}</Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h2 className="docs-page__h2">Popover triggered on hover</h2>
                <p className="docs-page__paragraph"></p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <div className="docs-page__content-row docs-page__content-row--no-margin">
                            <div className="form__row gap-0-5 sd-d-flex">
                                <button className="btn btn-default" aria-haspopup="true" id="hover-content">
                                    Hover me
                                </button>

                                <Popover
                                    showOnHover={true}
                                    triggerSelector="#hover-content"
                                    title="Popover test"
                                    placement="top-end"
                                    displayCloseButton={false}
                                >
                                    Donec sed odio dui. Aenean lacinia bibendum nulla sed consectetur.
                                </Popover>
                            </div>
                        </div>
                    </Markup.ReactMarkupPreview>

                    <Markup.ReactMarkupCode>{`
                        <Popover
                            triggerSelector="#button-view-content"
                            title="Popover test"
                            placement="top-end"
                            showOnHover={true}
                        >
                            Donec sed odio dui. Aenean lacinia bibendum nulla sed consectetur.
                        </Popover>
                    `}</Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">Props</h3>
                <PropsList>
                    <Prop
                        name="title"
                        isRequired={true}
                        type="string"
                        default="null"
                        description="Title of the popover component."
                    />
                    <Prop
                        name="triggerSelector"
                        isRequired={true}
                        type="string"
                        default="null"
                        description="ID selector for an element that will be used to toggle the popover."
                    />
                    <Prop
                        name="showOnHover"
                        isRequired={false}
                        type="boolean"
                        default="undefined"
                        description="Show/hide the popover on hover."
                    />
                    <Prop
                        name="displayCloseButton"
                        isRequired={false}
                        type="boolean"
                        default="true"
                        description="Show or hide the close button."
                    />
                    <Prop
                        name="placement"
                        isRequired={false}
                        type="auto | auto-end | auto-start | bottom | bottom-end | bottom-start | left | left-end | left-start | right | right-end | right-start | top | top-end | top-start"
                        default="auto"
                        description="Define the placement of the Popover."
                    />
                </PropsList>
            </section>
        );
    }
}
