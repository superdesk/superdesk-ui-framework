import * as React from 'react';

import * as Markup from '../../js/react';

import { IconLabel, Prop, PropsList } from '../../../app-typescript';

export default class IconLabelDoc extends React.Component {
    render() {
        return (
            <section className="docs-page__container">
                <h2 className="docs-page__h2">Icon Labels</h2>
                <Markup.ReactMarkupCodePreview>{`
                    <IconLabel text='Label primary' icon='facebook' type='primary' />
                `}
                </Markup.ReactMarkupCodePreview>
                <p className="docs-page__paragraph">Icon labels are inline styles for displaying a combination of icons from the icon font with a text label. Use the <code>type</code> prop to change semantic colour values based on the intended purpose.</p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <div className='docs-page__content-row docs-page__content-row--no-margin'>
                            <p className="docs-page__paragraph">// Basic</p>
                            <IconLabel text='Default label' icon='photo' />
                            <IconLabel text='Label primary' icon='facebook' type='primary' />
                            <IconLabel text='Label success' icon='text' type='success' />
                            <IconLabel text='Label warning' icon='paywall' type='warning' />
                            <IconLabel text='Label alert' icon='trash' type='alert' />
                            <IconLabel text='Label highlight' icon='composite' type='highlight' />
                            <IconLabel text='Label sd-green' icon='video' type='sd-green' />

                            <p className="docs-page__paragraph">// Translucent</p>
                            <IconLabel innerLabel='Start:' style='translucent' text='00:45' type='success' icon='time' />
                            <IconLabel innerLabel='end:' style='translucent' text='00:30' type='warning' icon='time' />
                            <IconLabel style='translucent' text='Label alert' type='alert' icon='time' />
                            <IconLabel style='translucent' text='Label highlight' type='highlight' icon='calendar' />
                            <IconLabel style='translucent' text='Label sd-green' type='sd-green' icon='calendar' />
                            <IconLabel style='translucent' text='Default label' icon='bell' />
                            <br />
                            <IconLabel innerLabel='Start:' style='translucent' text='00:45' type='success'/>
                            <IconLabel innerLabel='end:' style='translucent' text='00:30' type='warning'/>
                            <IconLabel style='translucent' text='Label alert' type='alert' />

                            <p className="docs-page__paragraph">// Translucent & Large</p>
                            <IconLabel innerLabel='Start:' size='large' style='translucent' text='00:45' type='success' icon='time' />
                            <IconLabel innerLabel='Start:' size='large' style='translucent' text='00:55' type='warning' icon='time' />
                            <IconLabel innerLabel='Start:' size='large' style='translucent' text='00:15' type='alert' icon='time' />
                            <br />
                            <IconLabel innerLabel='Start:' size='large' style='translucent' text='18:30' type='success' />
                            <IconLabel innerLabel='End:' size='large' style='translucent' text='20:30' type='highlight' />
                            <IconLabel innerLabel='Duration:' size='large' style='translucent' text='00:30' type='primary' />

                            <p className="docs-page__paragraph">// Translucent & Small</p>
                            <IconLabel innerLabel='Start:' size='small' style='translucent' text='00:45' type='success' icon='time' />
                            <IconLabel innerLabel='Start:' size='small' style='translucent' text='00:55' type='warning' icon='time' />
                            <IconLabel innerLabel='Start:' size='small' style='translucent' text='00:15' type='alert' icon='time' />
                            <br />
                            <IconLabel innerLabel='Start:' size='small' style='translucent' text='18:30' type='success' />
                            <IconLabel innerLabel='End:' size='small' style='translucent' text='20:30' type='highlight' />
                            <IconLabel innerLabel='Duration:' size='small' style='translucent' text='00:30' type='primary' />
                        </div>

                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        // Basic
                        <IconLabel text='Default label' icon='photo' />
                        <IconLabel text='Label primary' icon='facebook' type='primary' />
                        <IconLabel text='Label success' icon='text' type='success' />
                        <IconLabel text='Label warning' icon='paywall' type='warning' />
                        <IconLabel text='Label alert' icon='trash' type='alert' />
                        <IconLabel text='Label highlight' icon='composite' type='highlight' />
                        <IconLabel text='Label sd-green' icon='video' type='sd-green' />

                        // Translucent
                        <IconLabel style='translucent' text='Label success' type='success' icon='time' />
                        <IconLabel style='translucent' text='Label warning' type='warning' icon='time' />
                        <IconLabel style='translucent' text='Label alert' type='alert' icon='time' />
                        <IconLabel style='translucent' text='Label highlight' type='highlight' icon='calendar' />
                        <IconLabel style='translucent' text='Label sd-green' type='sd-green' icon='calendar' />
                        <IconLabel style='translucent' text='Default label' icon='bell' />
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">Props</h3>
                <PropsList>
                    <Prop name='text' isRequired={true} type='string' default='/' description='IconLabel text value.'/>
                    <Prop name='type' isRequired={false} type='default | primary | success | warning | alert | highlight | sd-green' default='default' description='Default + semantic colour variations (e.g. primary, success etc.).'/>
                    <Prop name='icon' isRequired={false} type='string' default='/' description='Icon class name without the icon- part.'/>
                    <Prop name='style' isRequired={false} type='basic | translucent' default='basic' description='Defines the style of the label (basic or translucent).'/>
                </PropsList>
            </section>
        )
    }
}
