import * as React from 'react';

import * as Markup from '../../js/react';

import { Badge, Button} from '../../../app-typescript';

export default class BadgeDoc extends React.Component {
    render() {
        return (
            <section className="docs-page__container"> 
                <h2 className="docs-page__h2">Badge</h2>
                <p className="docs-page__paragraph"></p>
                <Markup.ReactMarkupCodePreview>{`
                   <Badge text='2' type='primary' style='round'/>
                `}
                </Markup.ReactMarkupCodePreview>
                <p className="docs-page__paragraph">Add the .badge class to an element to create a badge. In the code example <code>&lt;span&gt;</code> is used, but any tag will do.</p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                    <p className="docs-page__paragraph">// Circle (default)</p>
                    <div className='docs-page__content-row'>
                        <Badge text='1'/>
                        <Badge text='2' type='primary' style='round'/>
                        <Badge text='a' type='success' style='round'/>
                        <Badge text='b' type='warning' style='round'/>
                        <Badge text='6' type='alert' style='round'/>
                        <Badge text='2318' type='highlight' style='round'/>
                        <Badge text='76' type='light' style='round'/>
                    </div>

                    <p className="docs-page__paragraph">// Square</p>
                    <p style={{margin: '-10px 0 20px', color: '#747474'}}>Use this version only for single digits or numbers. For longer text use the <code>.label</code> class.</p>
                    <div className='docs-page__content-row'>
                        <Badge text='1'/>
                        <Badge text='2' type='primary' style='square'/>
                        <Badge text='a' type='success' style='square'/>
                        <Badge text='b' type='warning' style='square'/>
                        <Badge text='6' type='alert' style='square'/>
                        <Badge text='d' type='highlight' style='square'/>
                        <Badge text='9' type='light' style='square'/>
                    </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        // Circle (default)
                        <Badge text='1'/>
                        <Badge text='2' type='primary' style='round'/>
                        <Badge text='a' type='success' style='round'/>
                        <Badge text='b' type='warning' style='round'/>
                        <Badge text='6' type='alert' style='round'/>
                        <Badge text='2318' type='highlight' style='round'/>
                        <Badge text='76' type='light' style='round'/>

                        // Square
                        <Badge text='1'/>
                        <Badge text='2' type='primary' style='square'/>
                        <Badge text='a' type='success' style='square'/>
                        <Badge text='b' type='warning' style='square'/>
                        <Badge text='6' type='alert' style='square'/>
                        <Badge text='d' type='highlight' style='square'/>
                        <Badge text='9' type='light' style='square'/>
                    `}          
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">Element with badge</h3>
                <p className="docs-page__paragraph"></p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                    <div className='docs-page__content-row'>
                        <Badge text='8' type='primary'>
                            <Button text='default' onClick = { ()=> false}/>
                        </Badge>
                        <Badge text='6'>
                            <Button text='primary' type='primary' onClick = { ()=> false}/>
                        </Badge>
                        <Badge text='4' type='highlight'>
                            <Button text='hollow' style='hollow' onClick = { ()=> false}/>
                        </Badge>
                    </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        <Badge text='8' type='primary'>
                            <Button text='default'/>
                        </Badge>
                        <Badge text='6'>
                            <Button text='primary' type='primary'/>
                        </Badge>
                        <Badge text='4' type='highlight'>
                            <Button text='hollow' style='hollow'/>
                        </Badge>
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>
  
            </section>
        )
    }
}
