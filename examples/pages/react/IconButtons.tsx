import * as React from 'react';

import * as Markup from '../../js/react';

import { IconButton, Prop, PropsList, Tooltip } from '../../../app-typescript';

export default class IconButtonDoc extends React.Component {
    render() {
        return (
            <section className="docs-page__container">
                <h2 className="docs-page__h2">Plain icon button</h2>
                <Markup.ReactMarkupCodePreview>{`
                    <IconButton icon="close-small" ariaValue="aria-value" onClick={()=> false} />
                `}
                </Markup.ReactMarkupCodePreview>
                <p className="docs-page__paragraph">Plain icon button are mostly used for toolbars inside other UI components. They have a built in support for custom tooltips.</p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                    <p className="docs-page__paragraph">// Default look</p>
                    <p className="docs-page__paragraph--small">Hover buttons to see tooltips.</p>
                        <div className="docs-page__content-row docs-page__content-row--white">
                            <Tooltip text='I support tooltips!'>
                                <IconButton icon='close-small' ariaValue='close' onClick={()=> false} />
                            </Tooltip>
                            <IconButton icon='plus-large' ariaValue='plus' onClick ={()=> false} />
                            <IconButton icon='dots-vertical' ariaValue='dots' onClick={()=> false} />
                            <IconButton icon='trash' ariaValue='trash' onClick={()=> false} />
                            <Tooltip text='My tooltip is on right.' flow='right'>
                                <IconButton icon='close-small' ariaValue='close' onClick={()=> false} />
                            </Tooltip>
                        </div>
                        <p className="docs-page__paragraph">// Dark UI</p>
                        <div className="docs-page__content-row docs-page__content-row--ui-dark" style={{color:'white'}}>
                            <Tooltip text='I support tooltips!'>
                                    <IconButton icon='close-small' ariaValue='close' onClick={()=> false} />
                            </Tooltip>
                            <IconButton icon='plus-large' ariaValue='plus' onClick={()=> false} />
                            <IconButton icon='dots-vertical' ariaValue='dots' onClick={()=> false} />
                            <IconButton icon='trash' ariaValue='trash' onClick={()=> false} />
                            <Tooltip text='My tooltip is on right.' flow='right'>
                                <IconButton icon='close-small' ariaValue='close' onClick={()=> false} />
                            </Tooltip>
                        </div> 
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        <Tooltip text='I support tooltips!'>
                            <IconButton icon='close-small' ariaValue='close' onClick={()=> false} />
                        </Tooltip>
                        <IconButton icon='plus-large' ariaValue='plus' onClick ={()=> false} />
                        <IconButton icon='dots-vertical' ariaValue='dots' onClick={()=> false} />
                        <IconButton icon='trash' ariaValue='trash' onClick={()=> false} />
                        <Tooltip text='My tooltip is on right.' flow='right'>
                            <IconButton icon='close-small' ariaValue='close' onClick={()=> false} />
                        </Tooltip>

                        //Dark UI
                        <Tooltip text='I support tooltips!'>
                            <IconButton icon='close-small' ariaValue='close' onClick={()=> false} />
                        </Tooltip>
                        <IconButton icon='plus-large' ariaValue='plus' onClick={()=> false} />
                        <IconButton icon='dots-vertical' ariaValue='dots' onClick={()=> false} />
                        <IconButton icon='trash' ariaValue='trash' onClick={()=> false} />
                        <Tooltip text='My tooltip is on right.' flow='right'>
                            <IconButton icon='close-small' ariaValue='close' onClick={()=> false} />
                        </Tooltip>
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">Props</h3>
                <PropsList>
                    <Prop name='icon' isRequered={false} type='string' default='/' description='Icon class name without the icon- part.'/>
                    <Prop name='ariaValue' isRequered={true} type='string' default='/' description='Description for screen readers'/>
                </PropsList>
            </section>
        )
    }
}
