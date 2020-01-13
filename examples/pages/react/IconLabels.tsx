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
                            <IconLabel text='Default label' icon='photo' />
                            <IconLabel text='Label primary' icon='facebook' type='primary' />
                            <IconLabel text='Label success' icon='text' type='success' />
                            <IconLabel text='Label warning' icon='paywall' type='warning' />
                            <IconLabel text='Label alert' icon='trash' type='alert' />
                            <IconLabel text='Label highlight' icon='composite' type='highlight' />
                            <IconLabel text='Label sd-green' icon='video' type='sd-green' />
                        </div>

                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        <IconLabel text='Default label' icon='photo' />
                        <IconLabel text='Label primary' icon='facebook' type='primary' />
                        <IconLabel text='Label success' icon='text' type='success' />
                        <IconLabel text='Label warning' icon='paywall' type='warning' />
                        <IconLabel text='Label alert' icon='trash' type='alert' />
                        <IconLabel text='Label highlight' icon='composite' type='highlight' />
                        <IconLabel text='Label sd-green' icon='video' type='sd-green' />
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">Props</h3>
                <PropsList>
                    <Prop name='text' isRequered={true} type='string' default='/' description='IconLabel text value.'/>
                    <Prop name='type' isRequered={false} type='default | primary | success | warning | alert | highlight | sd-green' default='default' description='Default + semantic colour variations (e.g. primary, success etc.).'/>
                    <Prop name='icon' isRequered={false} type='string' default='/' description='Icon class name without the icon- part.'/>
                </PropsList>
            </section>
        )
    }
}
