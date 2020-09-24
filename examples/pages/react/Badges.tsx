import * as React from 'react';

import * as Markup from '../../js/react';

import { Badge, Button, Prop, PropsList } from '../../../app-typescript';
export default class BadgeDoc extends React.Component {
    render() {

        return (
            <section className="docs-page__container">
                <h2 className="docs-page__h2">Badge</h2>
                <Markup.ReactMarkupCodePreview>{`
                   <Badge text='2' type='primary' />
                `}
                </Markup.ReactMarkupCodePreview>
                <p className="docs-page__paragraph">Badges are inline styles that can be dropped into a text. They are usualy used for displaying digits or single uppercase letters. For full words the Label component should be used.</p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <p className="docs-page__paragraph">// Circle (default)</p>
                        <div className='docs-page__content-row'>
                            <Badge text='1' />
                            <Badge text='2' type='primary' />
                            <Badge text='a' type='success' />
                            <Badge text='b' type='warning' />
                            <Badge text='6' type='alert' />
                            <Badge text='2318' type='highlight' />
                            <Badge text='76' type='light' />
                        </div>

                        <p className="docs-page__paragraph">// Square</p>
                        <p className="docs-page__paragraph--small">Use this version only for single digits or numbers. For longer text use the <code>.label</code> class.</p>
                        <div className='docs-page__content-row'>
                            <Badge text='1' />
                            <Badge text='2' type='primary' shape='square' />
                            <Badge text='a' type='success' shape='square' />
                            <Badge text='b' type='warning' shape='square' />
                            <Badge text='6' type='alert' shape='square' />
                            <Badge text='d' type='highlight' shape='square' />
                            <Badge text='9' type='light' shape='square' />
                        </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        // Circle (default)
                        <Badge text='1'/>
                        <Badge text='2' type='primary' />
                        <Badge text='a' type='success' />
                        <Badge text='b' type='warning' />
                        <Badge text='6' type='alert' />
                        <Badge text='2318' type='highlight' />
                        <Badge text='76' type='light' />

                        // Square
                        <Badge text='1'/>
                        <Badge text='2' type='primary' shape='square' />
                        <Badge text='a' type='success' shape='square' />
                        <Badge text='b' type='warning' shape='square' />
                        <Badge text='6' type='alert' shape='square' />
                        <Badge text='d' type='highlight' shape='square' />
                        <Badge text='9' type='light' shape='square' />
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>
                <h3 className="docs-page__h3">Colours</h3>
                <p className="docs-page__paragraph">By default, badges use the standard semantic colour palette (e.g. primary, success, warning etc.). Due to the considerable use of the badge component in Superdesk the standard palette is often not enough. In such cases, the colours can be extended by adding the <code>color</code> prop with a value of any of the colours from the <a className='link' href='#/components/colors' target='blank'>extended colour palette</a>.</p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <p className="docs-page__paragraph">// Basic colour palette</p>
                        <div className='docs-page__content-row'>
                            <Badge text='1' shape='square' />
                            <Badge text='A' type='primary' shape='square' />
                            <Badge text='2' type='success' shape='square' />
                            <Badge text='B' type='warning' shape='square' />
                            <Badge text='3' type='alert' />
                            <Badge text='C' type='highlight' />
                            <Badge text='4' type='light' />
                        </div>
                        <p className="docs-page__paragraph">// Extended colour palette examples</p>
                        <div className='docs-page__content-row'>
                            <Badge text='1' color='indigo--300' />
                            <Badge text='2' color='indigo--400' />
                            <Badge text='3' color='indigo--500' />
                            <Badge text='A' color='deep-orange--400' shape='square' />
                            <Badge text='B' color='deep-orange--500' shape='square' />
                            <Badge text='C' color='deep-orange--600' shape='square' />
                            <Badge text='4' color='light-green--500' />
                            <Badge text='5' color='light-green--600' />
                            <Badge text='6' color='light-green--700' />
                            <Badge text='D' color='purple--300' shape='square' />
                            <Badge text='E' color='purple--400' shape='square' />
                            <Badge text='F' color='purple--500' shape='square' />
                        </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        // Basic colour palette
                        <Badge text='1' shape='square'/>
                        <Badge text='A' type='primary' shape='square'/>
                        <Badge text='2' type='success' shape='square'/>
                        <Badge text='B' type='warning' shape='square'/>
                        <Badge text='3' type='alert'/>
                        <Badge text='C' type='highlight'/>
                        <Badge text='4' type='light'/>
                        // Extended colour palette examples
                        <Badge text='1' color='indigo--300'/>
                        <Badge text='2' color='indigo--400'/>
                        <Badge text='3' color='indigo--500'/>
                        <Badge text='A' color='deep-orange--400' shape='square'/>
                        <Badge text='B' color='deep-orange--500' shape='square'/>
                        <Badge text='C' color='deep-orange--600' shape='square'/>
                        <Badge text='4' color='light-green--500'/>
                        <Badge text='5' color='light-green--600'/>
                        <Badge text='6' color='light-green--700'/>
                        <Badge text='D' color='purple--300' shape='square'/>
                        <Badge text='E' color='purple--400' shape='square'/>
                        <Badge text='F' color='purple--500' shape='square'/>
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">Element with badge</h3>
                <p className="docs-page__paragraph">Wrap another component with the Badge component, so that badge is applied to its children.</p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <div className='docs-page__content-row'>
                            <Badge text='8' type='primary'>
                                <Button text='default' onClick={() => false} />
                            </Badge>
                            <Badge text='6'>
                                <Button text='primary' type='primary' onClick={() => false} />
                            </Badge>
                            <Badge text='4' type='highlight'>
                                <Button text='hollow' style='hollow' onClick={() => false} />
                            </Badge>
                        </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        <Badge text='8' type='primary'>
                            <Button text='default' onClick={()=> false} />
                        </Badge>
                        <Badge text='6'>
                            <Button text='primary' type='primary' onClick={()=> false} />
                        </Badge>
                        <Badge text='4' type='highlight'>
                            <Button text='hollow' style='hollow' onClick={()=> false} />
                        </Badge>
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">Props</h3>
                <PropsList>
                    <Prop name='text' isRequered={false} type='string' default='/' description='Badge text value.' />
                    <Prop name='type' isRequered={false} type='default | primary | success | warning | alert | highlight | sd-green' default='default' description='Default + semantic colour variations (e.g. primary, success etc.)' />
                    <Prop name='color' isRequered={false} type='string' default='/' description='Extended color palette from the framework (e.g. red--500);  NOTE: The badge can have either a Type or Color defined, not both at the same time.' />
                    <Prop name='shape' isRequered={false} type='round | square' default='round' description='Make shape of badge square or default round.' />
                </PropsList>
            </section>
        )
    }
}
