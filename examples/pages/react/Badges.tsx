import * as React from 'react';

import * as Markup from '../../js/react';

import { Badge, Button} from '../../../app-typescript';

export default class BadgeDoc extends React.Component {
    render() {
        return (
            <section className="docs-page__container"> 
                <h2 className="docs-page__h2">Badge</h2>
                <Markup.ReactMarkupCodePreview>{`
                   <Badge text='2' type='primary' style='round'/>
                `}
                </Markup.ReactMarkupCodePreview>
                <p className="docs-page__paragraph">Badges are inline styles that can be dropped into a text. They are usualy used for displaying digits or single uppercase letters. For full words the Label component should be used.</p>
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
                    <p className="docs-page__paragraph--small">Use this version only for single digits or numbers. For longer text use the <code>.label</code> class.</p>
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
                <p className="docs-page__paragraph">Wrap another component with the Badge component, so that badge is applied to its children.</p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                    <div className='docs-page__content-row'>
                        <Badge text='8' type='primary'>
                            <Button text='default' onClick={()=> false}/>
                        </Badge>
                        <Badge text='6'>
                            <Button text='primary' type='primary' onClick={()=> false}/>
                        </Badge>
                        <Badge text='4' type='highlight'>
                            <Button text='hollow' style='hollow' onClick={()=> false}/>
                        </Badge>
                    </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        <Badge text='8' type='primary'>
                            <Button text='default' onClick={()=> false}/>
                        </Badge>
                        <Badge text='6'>
                            <Button text='primary' type='primary' onClick={()=> false}/>
                        </Badge>
                        <Badge text='4' type='highlight'>
                            <Button text='hollow' style='hollow' onClick={()=> false}/>
                        </Badge>
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>
  
            </section>
        )
    }
}
