import * as React from 'react';

import * as Markup from '../../js/react';

import { Label } from '../../../app-typescript';

export default class LabelsDoc extends React.Component {
    render() {
        return (
            <section className="docs-page__container">
                <h2 className="docs-page__h2">Labels</h2>
                <p className="docs-page__paragraph">Labels are inline styles that can be dropped into body text. For example, labels are used to show the state of items in Superdesk.</p>
                <Markup.ReactMarkupCodePreview>{`
                    <Label text='default label'/>
                `}
                </Markup.ReactMarkupCodePreview>
               
                <h3 className="docs-page__h3">Sizing</h3>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                    <div className='docs-page__content-row'>
                        <Label text='default label'/>
                        <Label text='large label' size='large'/>
                    </div>
                    <div className='docs-page__content-row'>
                        <p className="docs-page__paragraph">// No text transformation</p>
                        <p style={{margin: '-10 0 20', color:' #747474'}}>This version should be used only in combination with <code>label--large</code></p>
                    </div>                    
                    <div className='docs-page__content-row'>
                        <Label text='No text transform here' size='large' noTransform={true} type='primary'/>
                        <Label text='No text transform' size='large' noTransform={true} type='success'/>
                    </div>
                    <div className='docs-page__content-row'>
                        
                    </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        <Label text='default label'/>
                        <Label text='large label' size='large'/>
                        
                        // No text transformation
                        <Label text='No text transform here' size='large' noTransform={true} type='primary'/>
                        <Label text='No text transform' size='large' noTransform={true} type='success'/>
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>
                
                <h3 className="docs-page__h3">Coloring</h3>
                <p className="docs-page__paragraph">By default labels have a wider color <a href='https://ui-framework.superdesk.org/#/components/colors'>palette</a> than buttons and badges.</p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                    <div className='docs-page__content-row'>
                        <Label text='default label'/>
                        <Label text='primary label' type='primary'/>
                        <Label text='success label' type='success'/>
                        <Label text='warning label' type='warning'/>
                        <Label text='alert label' type='alert'/>
                        <Label text='highlight label' type='highlight'/>
                        <Label text='sd-green label' type='sd-green'/>  
                    </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        <Label text='default label'/>
                        <Label text='primary label' type='primary'/>
                        <Label text='success label' type='success'/>
                        <Label text='warning label' type='warning'/>
                        <Label text='alert label' type='alert'/>
                        <Label text='highlight label' type='highlight'/>
                        <Label text='sd-green label' type='sd-green'/> 
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">Hollow style</h3>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                    <div className='docs-page__content-row'>
                        <Label text='default label' style='hollow'/>
                        <Label text='primary label' type='primary' style='hollow'/>
                        <Label text='success label' type='success' style='hollow'/>
                        <Label text='warning label' type='warning' style='hollow'/>
                        <Label text='alert label' type='alert' style='hollow'/>
                        <Label text='highlight label' type='highlight' style='hollow'/>
                        <Label text='sd-gren label' type='sd-green' style='hollow'/>
                    </div>
                    <div className='docs-page__content-row'>
                        <Label text='hollow large' size='large' style='hollow'/>
                        <Label text='hollow large' size='large' type='primary' style='hollow'/>
                        <Label text='Hollow, large & no text transformation' type='highlight' size='large' style='hollow' noTransform={true}/>
                    </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        <Label text='default label' style='hollow'/>
                        <Label text='primary label' type='primary' style='hollow'/>
                        <Label text='success label' type='success' style='hollow'/>
                        <Label text='warning label' type='warning' style='hollow'/>
                        <Label text='alert label' type='alert' style='hollow'/>
                        <Label text='highlight label' type='highlight' style='hollow'/>
                        <Label text='sd-gren label' type='sd-green' style='hollow'/>

                        <Label text='hollow large' size='large' style='hollow'/>
                        <Label text='hollow large' size='large' type='primary' style='hollow'/>
                        <Label text='Hollow, large & no text transformation' type='highlight' size='large' style='hollow' noTransform={true}/>
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">Link label</h3>
                <p className="docs-page__paragraph">Should be used only in specific case, like in line with other regular labels inside the list item. Otherwise using regular buttons is preferred.</p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                    <div className='docs-page__content-row'>
                        <Label text='default label' onClick={()=> false}/>
                        <Label text='primary label' type='primary' onClick={()=> false}/>
                        <Label text='success label' type='success' onClick={()=> false}/>
                        <Label text='alert label' type='alert' onClick={()=> false}/>
                    </div>
                    <div className='docs-page__content-row'>
                        <Label text='default label' style='hollow' onClick={()=> false}/>
                        <Label text='primary label' type='primary' style='hollow' onClick={()=> false}/>
                        <Label text='success label' type='success' style='hollow' onClick={()=> false}/>
                        <Label text='alert label' type='alert' style='hollow' onClick={()=> false}/>
                    </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        <Label text='default label' onClick={()=> false}/>
                        <Label text='primary label' type='primary' onClick={()=> false}/>
                        <Label text='success label' type='success' onClick={()=> false}/>
                        <Label text='alert label' type='alert'/>

                        <Label text='default label' style='hollow' onClick={()=> false}/>
                        <Label text='primary label' type='primary' style='hollow' onClick={()=> false}/>
                        <Label text='success label' type='success' style='hollow' onClick={()=> false}/>
                        <Label text='alert label' type='alert' style='hollow' onClick={()=> false}/>
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>
            </section>
        )
    }
}
