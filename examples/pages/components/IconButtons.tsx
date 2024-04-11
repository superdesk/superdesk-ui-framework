import * as React from 'react';

import * as Markup from '../../js/react';

import { IconButton, Prop, PropsList, Tooltip, Container, ButtonGroup } from '../../../app-typescript';

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
                            <IconButton icon='close-small' disabled ariaValue='Close' onClick={()=> false} />
                            <IconButton icon='plus-large'  ariaValue='Add' onClick={()=> false} />
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

                        <p className="docs-page__paragraph">// Xtra large, 'outline' style</p>
                        <Container gap="large" className='sd-radius--medium sd-panel-bg--000 sd-shadow--z2 sd-padding--3 sd-margin-b--3'>
                            <ButtonGroup align='center' spaces='loose'>
                                <IconButton style='outline' size='x-large' icon='pencil' ariaValue='Add' onClick={()=> false} />
                                <IconButton style='outline' disabled={true} size='x-large' icon='switches' ariaValue='Add' onClick={()=> false} />
                                <IconButton style='outline' size='x-large' icon='crop' ariaValue='Close' onClick={()=> false} />
                            </ButtonGroup>
                        </Container>

                        <p className="docs-page__paragraph">// Xtra large, outlineWhite style</p>
                        <p className="docs-page__paragraph--small">The 'outlineWhite' syle forces a white icon and outline. It can be used on dark overlays for example.</p>
                        <div style={{background: 'hsla(214, 13%, 12%, 1)'}} className="sd-container sd-container--flex sd-container--gap-large sd-radius--medium sd-shadow--z2 sd-padding--3">
                            <ButtonGroup align='center' spaces='loose'>
                                <IconButton style='outlineWhite' size='x-large' icon='pencil' ariaValue='Edit metadata' onClick={()=> false} />
                                <IconButton style='outlineWhite' disabled={true} size='x-large' icon='switches' ariaValue='Edit image' onClick={()=> false} />
                                <IconButton style='outlineWhite' size='x-large' icon='crop' ariaValue='Edit crops' onClick={()=> false} />
                            </ButtonGroup>
                        </div>

                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        <IconButton icon='close-small' disabled ariaValue='Close' onClick={()=> false} />
                        <IconButton icon='plus-large' ariaValue='Add' onClick={()=> false} />
                        <IconButton icon='dots-vertical' ariaValue='More options' onClick={()=> false} />
                        <IconButton icon='trash' ariaValue='Move to trash' onClick={()=> false} />
                        <IconButton icon='close-small' ariaValue='Close' onClick={()=> false} />

                        // Small
                        <IconButton size='small' icon='plus-large' ariaValue='Add' onClick={()=> false} />
                        ...
                        <IconButton size='small' icon='close-small' ariaValue='Close' onClick={()=> false} />

                        // Xtra large, 'outline' style
                        <ButtonGroup align='center' spaces='loose'>
                            <IconButton style='outline' size='x-large' icon='pencil' ariaValue='Add' onClick={()=> false} />
                            <IconButton style='outline' disabled={true} size='x-large' icon='switches' ariaValue='Add' onClick={()=> false} />
                            <IconButton style='outline' size='x-large' icon='crop' ariaValue='Close' onClick={()=> false} />
                        </ButtonGroup>

                        // Xtra large, outlineWhite style
                        <ButtonGroup align='center' spaces='loose'>
                            <IconButton style='outlineWhite' size='x-large' icon='pencil' ariaValue='Edit metadata' onClick={()=> false} />
                            <IconButton style='outlineWhite' disabled={true} size='x-large' icon='switches' ariaValue='Edit image' onClick={()=> false} />
                            <IconButton style='outlineWhite' size='x-large' icon='crop' ariaValue='Edit crops' onClick={()=> false} />
                        </ButtonGroup>
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">Props</h3>
                <PropsList>
                    <Prop name='icon' isRequired={false} type='string' default='/' description='Icon class name without the icon- part.'/>
                    <Prop name='ariaValue' isRequired={true} type='string' default='/' description='Description for screen readers, also used as the ToolTip value.'/>
                    <Prop name='size' isRequired={false} type='default | small | x-large' default='default' description='Creates an IconButton with a smaller or larger footprint.'/>
                    <Prop name='style' isRequired={false} type='default | outline | outlineWhite' default='default' description='Different styling options.'/>
                    <Prop name='disabled' isRequired={false} type='boolean' default='false' description='Disables the Button, preventing mouse events.'/>
                    <Prop name='toolTipFlow' isRequired={false} type='top | left | right | down' default='top' description='Defines the possition of the ToolTip.'/>
                    <Prop name='toolTipAppend' isRequired={false} type='boolean' default='false' description='Uses the append to body version of the ToolTips if set to true.'/>
                </PropsList>
            </section>
        )
    }
}
