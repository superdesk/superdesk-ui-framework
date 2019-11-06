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
                        <Badge text='2' types='primary'/>
                        <Badge text='a' types='success'/>
                        <Badge text='b' types='warning'/>
                        <Badge text='6' types='alert'/>
                        <Badge text='2318' types='highlight'/>
                        <Badge text='76' types='light'/>
                    </div>

                    <p className="docs-page__paragraph">// Square</p>
                    <p style={{margin: '-10px 0 20px', color: '#747474'}}>Use this version only for single digits or numbers. For longer text use the <code>.label</code> class.</p>
                    <div className='docs-page__content-row'>
                        <Badge text='1'/>
                        <Badge text='2' types='primary' square={true}/>
                        <Badge text='a' types='success' square={true}/>
                        <Badge text='b' types='warning' square={true}/>
                        <Badge text='6' types='alert' square={true}/>
                        <Badge text='d' types='highlight' square={true}/>
                        <Badge text='9' types='light' square={true}/>
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
                        <Badge text='8' types='primary' element={true}>
                            <Button text='default'/>
                        </Badge>
                        <Badge text='6' types='light' element={true}>
                            <Button text='primary' types='primary'/>
                        </Badge>
                        <Badge text='4' types='highlight' element={true}>
                            <Button text='hollow' hollow={true}/>
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
