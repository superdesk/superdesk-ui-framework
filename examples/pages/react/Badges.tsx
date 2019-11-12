import * as React from 'react';

import * as Markup from '../../js/react';

import { Badge, Button } from '../../../app-typescript';

export default class BadgeDoc extends React.Component {
    render() {
        return (
            <section className="docs-page__container">
                <h2 className="docs-page__h2">Badge</h2>
                <p className="docs-page__paragraph">Add the .badge class to an element to create a badge. In the code example <code>&lt;span&gt;</code> is used, but any tag will do.</p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                    <p className="docs-page__paragraph">// Circle (default)</p>
                    <div className='docs-page__content-row'>
                        <Badge text='1'/>
                        <Badge text='2' color='primary' style='round'/>
                        <Badge text='a' color='success' style='round'/>
                        <Badge text='b' color='warning' style='round'/>
                        <Badge text='6' color='alert' style='round'/>
                        <Badge text='2318' color='highlight' style='round'/>
                        <Badge text='76' color='light' style='round'/>
                    </div>

                    <p className="docs-page__paragraph">// Square</p>
                    <p style={{margin: '-10px 0 20px', color: '#747474'}}>Use this version only for single digits or numbers. For longer text use the <code>.label</code> class.</p>
                    <div className='docs-page__content-row'>
                        <Badge text='1'/>
                        <Badge text='2' color='primary' style='square'/>
                        <Badge text='a' color='success' style='square'/>
                        <Badge text='b' color='warning' style='square'/>
                        <Badge text='6' color='alert' style='square'/>
                        <Badge text='d' color='highlight' style='square'/>
                        <Badge text='9' color='light' style='square'/>
                    </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>
                       
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">Element with badge</h3>
                <p className="docs-page__paragraph">Add the div with <code>.element-with-badge</code> class and put inside your element and after it the badge.</p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                    <div className='docs-page__content-row'>
                        <Badge text='8' color='primary'>
                            <Button text='default'/>
                        </Badge>
                        <Badge text='6' color='light'>
                            <Button text='primary' type='primary'/>
                        </Badge>
                        <Badge text='4' color='highlight'>
                            <Button text='hollow' style='hollow'/>
                        </Badge>
                    </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>
                       
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>
            </section>
        )
    }
}
