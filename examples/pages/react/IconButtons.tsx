import * as React from 'react';

import * as Markup from '../../js/react';

import { IconButton, Prop, PropsList, Tooltip } from '../../../app-typescript';

export default class IconButtonDoc extends React.Component {
    render() {
        return (
            <section className="docs-page__container">
                <h2 className="docs-page__h2">Plain icon button</h2>
                <Markup.ReactMarkupCodePreview>{`
                    <IconButton icon="close-small" ariaValue="Screen-reader text" onClick={()=> false} />
                `}
                </Markup.ReactMarkupCodePreview>
                <p className="docs-page__paragraph">The IconButton component is mostly used for action buttons in toolbars, inside other UI components. They can be combined with the Tooltip component to dsplay tooltips.
                The small version should be generally avoided and used only where the footprint of the default version is to large.</p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <p className="docs-page__paragraph">// Default</p>
                        <p className="docs-page__paragraph--small">Hover buttons to see tooltips.</p>
                        <div className="docs-page__content-row docs-page__content-row--white">
                            <IconButton icon='close-small' ariaValue='Close' onClick={()=> false} />
                            <IconButton icon='plus-large' ariaValue='Add' onClick={()=> false} />
                            <IconButton icon='dots-vertical' ariaValue='More options' onClick={()=> false} />
                            <IconButton icon='trash' ariaValue='Move to trash' onClick={()=> false} />
                            <IconButton icon='close-small' ariaValue='Close' onClick={()=> false} />
                        </div>
                        <p className="docs-page__paragraph">// Small</p>
                        <div className="docs-page__content-row docs-page__content-row--white sd-d-flex ">
                            <IconButton size='small' icon='plus-large' ariaValue='Add' onClick={()=> false} />
                            <span className="sd-margin-x--auto"></span>
                            <IconButton size='small' icon='close-small' ariaValue='Close' onClick={()=> false} />
                        </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        <IconButton icon='close-small' ariaValue='Close' onClick={()=> false} />
                        <IconButton icon='plus-large' ariaValue='Add' onClick={()=> false} />
                        <IconButton icon='dots-vertical' ariaValue='More options' onClick={()=> false} />
                        <IconButton icon='trash' ariaValue='Move to trash' onClick={()=> false} />
                        <IconButton icon='close-small' ariaValue='Close' onClick={()=> false} />

                        // Small
                        <IconButton size='small' icon='plus-large' ariaValue='Add' onClick={()=> false} />
                        ...
                        <IconButton size='small' icon='close-small' ariaValue='Close' onClick={()=> false} />
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">Props</h3>
                <PropsList>
                    <Prop name='icon' isRequired={false} type='string' default='/' description='Icon class name without the icon- part.'/>
                    <Prop name='ariaValue' isRequired={true} type='string' default='/' description='Description for screen readers, also used as the ToolTip value.'/>
                    <Prop name='size' isRequired={false} type='small' default='normal' description='Creates an IconButton with a smaller footprint.'/>
                    <Prop name='toolTipFlow' isRequired={false} type='top | left | right | down' default='top' description='Defines the possition of the ToolTip.'/>
                    <Prop name='toolTipAppend' isRequired={false} type='boolean' default='false' description='Uses the append to body version of the ToolTips if set to true.'/>
                </PropsList>
            </section>
        )
    }
}
