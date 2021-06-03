import * as React from 'react';

import * as Markup from '../../js/react';
import { HeadingText, Button, Prop, PropsList } from '../../../app-typescript';
import { toasted } from '../../../app-typescript';

export default class ToastsDoc extends React.Component {
    // default
    showDefault = () => {
        toasted.notify("I'm a tasty default Toast message!", {position: 'top'});
    }

    // all positions
    showAll = () => {
        toasted.notify('Position top', { position: 'top' });
        toasted.notify('Position top-left', { position: 'top-left' });
        toasted.notify('Position top-right', { position: 'top-right' });
        toasted.notify('Position bottom', { position: 'bottom' });
        toasted.notify('Position bottom-left', { position: 'bottom-left' });
        toasted.notify('Position bottom-right', { position: 'bottom-right' });
    }

    // duration
    showDuration = () => {
        toasted.notify("Curabitur blandit tempus porttitor.", { duration: 3000 });
    }
    showNull = () => {
        toasted.notify("Curabitur blandit tempus porttitor.", {});
    }

    // coloring and icon
    showSuccess = () => {
        toasted.notify("I'm a tasty default Toast message!", { type: 'success', icon: 'ok'});
    }
    showAlert = () => {
        toasted.notify("Danger! Condimentum ridiculus ultricies ornare mollis.", { type: 'alert', icon: 'exclamation-sign', position: 'bottom'});
    }

    // size
    showSizeS = () => {
        toasted.notify("Et harum quidem rerum facilis est et expedita distinctio.", { position: 'top-left', size: 'fixed-s' });
    }
    showSizeM = () => {
        toasted.notify("Et harum quidem rerum facilis est et expedita distinctio.", { position: 'top-left', size: 'fixed-m' });
    }
    showSizeL = () => {
        toasted.notify("Et harum quidem rerum facilis est et expedita distinctio.", { position: 'top-left', size: 'fixed-l' });
    }
    showSizeXL = () => {
        toasted.notify("Et harum quidem rerum facilis est et expedita distinctio.", { position: 'top-left', size: 'fixed-xl' });
    }

    // custom element
    showCustomHeading = () => {
        toasted.notify(<HeadingText heading='I have Toaster heading!' text='Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec id elit non mi porta gravida at eget metus.' />, { type: 'primary', icon: 'info-sign', position: 'bottom' });
    }
    showAnotherCustomElement = () => {
        toasted.notify(
        <React.Fragment>
            <div className="sd-toast__icon"></div>
                <figure className="sd-toast__avatar avatar">sd</figure>
                <div className="sd-toast__message">
                    <div className="sd-toast__message-header">
                        <h4 className="sd-toast__heading">Martin Mustermann</h4>
                        <time title="March 22, 2017 11:08 AM">16:50, 16.03.2019</time>
                    </div>
                    <p>Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
            </div>
        </React.Fragment>
        , { position: 'bottom-right', size: 'fixed-l' });
    }
    
    render() {
        return (
            <section className="docs-page__container">
                <h2 className="docs-page__h2">Toasts</h2>
                <Markup.ReactMarkupCodePreview>{`
                   import {toasted} from 'superdesk-ui-framework/react';

                   toasted.notify("I'm a tasty default Toast message!", {});
                `}
                </Markup.ReactMarkupCodePreview>
                
                <h3 className="docs-page__h3">Position</h3>
                <p className="docs-page__paragraph">Chose one of 6 placement options (<code>'top'</code>, <code>'top-right'</code>, <code>'top-left'</code>, <code>'bottom'</code>, <code>'bottom-right'</code>, <code>'bottom-left'</code>). The default value is ’top’ and will be rendered so without explicitly specifying it.</p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                    <div className="docs-page__content-row">
                        <Button text='default' onClick={this.showDefault}></Button>
                        <Button text='all positions' onClick={this.showAll}></Button>
                    </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        toasted.notify("I'm a tasty default Toast message!", {});

                        toasted.notify('Position top', { position: 'top' });
                        toasted.notify('Position top-left', { position: 'top-left' });
                        toasted.notify('Position top-right', { position: 'top-right' });
                        toasted.notify('Position bottom', { position: 'bottom' });
                        toasted.notify('Position bottom-left', { position: 'bottom-left' });
                        toasted.notify('Position bottom-right', { position: 'bottom-right' });
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">Duration</h3>
                <p className="docs-page__paragraph">It can be set duration time off notification when is set <code>duration</code> option, otherwise the notification will appear indefinitely until manually closed by the user.</p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                    <p className="docs-page__paragraph">// Duration time 3000ms and NULL</p>
                    <div className="docs-page__content-row">
                        <Button text='3000' onClick={this.showDuration}></Button>
                        <Button text='null' onClick={this.showNull}></Button>
                    </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        toasted.notify("Curabitur blandit tempus porttitor.", { duration: 3000 });
                        toasted.notify("Curabitur blandit tempus porttitor.", {});
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">Coloring and Icon</h3>
                <p className="docs-page__paragraph">For Superdesk only Default and Primary buttons should be used in most cases. 
                Other semantic colour options are allowed but should be used only in cases where a clear distinction between similarly important actions is needed (e.g. Send To versus Publish action). Also it can be set icons for toast. 
                Just add any of the available classes from the Icon font as a value of the icon prop</p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                    <div className="docs-page__content-row">
                        <Button type='success' text='success' onClick={this.showSuccess}></Button>
                        <Button type='alert' text='alert' onClick={this.showAlert}></Button>
                    </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        toasted.notify("I'm a tasty default Toast message!", { type: 'success', icon: 'ok'});
                        toasted.notify("Danger! Condimentum ridiculus ultricies ornare mollis.", { type: 'alert', icon: 'exclamation-sign', position: 'bottom'});
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>
                
                <h3 className="docs-page__h3">Size</h3>
                <p className="docs-page__paragraph">To change the default size set the size value either to <code>'fixed-s'</code>, <code>'fixed-m'</code>, <code>'fixed-l'</code> or <code>'fixed-xl'</code>.</p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                    <div className="docs-page__content-row">
                        <Button text='fixed-s' onClick={this.showSizeS}></Button>
                        <Button text='fixed-m' onClick={this.showSizeM}></Button>
                        <Button text='fixed-l' onClick={this.showSizeL}></Button>
                        <Button text='fixed-xl' onClick={this.showSizeXL}></Button>
                    </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                       toasted.notify("Et harum quidem rerum facilis est et expedita distinctio.", { position: 'top-left', size: 'fixed-s' });
                       toasted.notify("Et harum quidem rerum facilis est et expedita distinctio.", { position: 'top-left', size: 'fixed-m' });
                       toasted.notify("Et harum quidem rerum facilis est et expedita distinctio.", { position: 'top-left', size: 'fixed-l' });
                       toasted.notify("Et harum quidem rerum facilis est et expedita distinctio.", { position: 'top-left', size: 'fixed-xl' });
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">Custom</h3>
                <p className="docs-page__paragraph"></p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                    <div className="docs-page__content-row">
                    <Button text='heading' type='primary' onClick={this.showCustomHeading}></Button>
                    <Button text='element' onClick={this.showAnotherCustomElement}></Button>
                    </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        toasted.notify(<HeadingText heading='I have Toaster heading!' text='Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec id elit non mi porta gravida at eget metus.' />, { type: 'primary', icon: 'info-sign', position: 'bottom' });
                        toasted.notify(
                        <React.Fragment>
                            <div className="sd-toast__icon"></div>
                            <figure className="sd-toast__avatar avatar">sd</figure>
                            <div className="sd-toast__message">
                                <div className="sd-toast__message-header">
                                    <h4 className="sd-toast__heading">Martin Mustermann</h4>
                                    <time title="March 22, 2017 11:08 AM">16:50, 16.03.2019</time>
                                </div>
                                <p>Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                            </div>
                        </React.Fragment>
                        , { position: 'bottom-right', size: 'fixed-l' });
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">Props</h3>
                <PropsList>
                    <Prop name='message' isRequered={true} type='string | React.ReactNode' default='normal' description='Message value or custom message element'/>
                    <Prop name='icon' isRequered={false} type='string' default='' description='Icon class name without the icon- part.'/>
                    <Prop name='type' isRequered={false} type='default | primary | success | warning | alert | highlight | light' default='default' description='Default + semantic colour variations (e.g. primary, success etc.).'/>
                    <Prop name='position' isRequered={false} type='top | bottom | top-right | top-left | bottom-right | bottom-left' default='top' description='Position of the toast'/>
                    <Prop name='size' isRequered={false} type='fixed-s | fixed-m | fixed-l | fixed-xl' default='normal' description='Specifies a different sizes of toast.'/>
                    <Prop name='duration' isRequered={false} type='number | null' default='null' description='Specifies a duration time of toast.'/>
                </PropsList>
            </section>
        )
    }
}
