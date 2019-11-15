import * as React from 'react';

import * as Markup from '../../js/react';

import { Label } from '../../../app-typescript';

export default class LabelsDoc extends React.Component {
    render() {
        return (
            <section className="docs-page__container">
                <h2 className="docs-page__h2">Labels</h2>
                <p className="docs-page__paragraph">Labels are inline styles that can be dropped into body text. For example, labels are used to show the state of items in Superdesk.</p>
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
                        <Label text='No text transform here' size='large' transform={true} color='primary'/>
                        <Label text='No text transform' size='large' transform={true} color='success'/>
                    </div>
                    <div className='docs-page__content-row'>
                        
                    </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>
                       
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>
                
                <h3 className="docs-page__h3">Coloring</h3>
                <p className="docs-page__paragraph">By default labels have a wider color palette than buttons and badges.</p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                    <div className='docs-page__content-row'>
                        <Label text='default label'/>
                        <Label text='primary label' color='primary'/>
                        <Label text='success label' color='success'/>
                        <Label text='color label' color='yellow2'/>
                        <Label text='warning label' color='warning'/>
                        <Label text='color label' color='orange2'/>
                        <Label text='alert label' color='alert'/>
                        <Label text='color label' color='red2'/>
                        <Label text='highlight label' color='highlight'/>
                        <Label text='color label' color='highlight2'/>
                        <Label text='color label' color='highlight3'/>
                        <Label text='color label' color='highlight4'/>
                        <Label text='color label' color='darkBlue2'/>
                        
                    </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>
                       
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">Hollow style</h3>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                    <div className='docs-page__content-row'>
                        <Label text='default label' size='normal' style='hollow'/>
                        <Label text='primary label' size='normal' color='primary' style='hollow'/>
                        <Label text='success label' size='normal'color='success' style='hollow'/>
                        <Label text='color label' size='normal' color='yellow2' style='hollow'/>
                        <Label text='warning label' size='normal' color='warning' style='hollow'/>
                        <Label text='color label' size='normal' color='orange2' style='hollow'/>
                        <Label text='alert label' size='normal' color='alert' style='hollow'/>
                        <Label text='color label' size='normal' color='red2' style='hollow'/>
                        <Label text='highlight label' size='normal' color='highlight' style='hollow'/>
                        <Label text='color label' size='normal' color='highlight2' style='hollow'/>
                        <Label text='color label' size='normal' color='highlight3' style='hollow'/>
                        <Label text='color label' size='normal' color='highlight4' style='hollow'/>
                        <Label text='color label' size='normal' color='darkBlue2' style='hollow'/>  
                    </div>
                    <div className='docs-page__content-row'>
                        <Label text='hollow large' size='large' style='hollow'/>
                        <Label text='hollow large' size='large' color='primary' style='hollow'/>
                        <Label text='Hollow, large & no text transformation' color='highlight2' size='large' style='hollow' transform={true}/>
                    </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>
                       
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">Link label</h3>
                <p className="docs-page__paragraph">Should be used only in specific case, like in line with other regular labels inside the list item. Otherwise using regular buttons is preferred.</p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                    <div className='docs-page__content-row'>
                        <Label text='default label' size='normal' onClick = { ()=> false}/>
                        <Label text='primary label' size='normal' color='primary' onClick = { ()=> false}/>
                        <Label text='success label' size='normal' color='success' onClick = { ()=> false}/>
                        <Label text='alert label' size='normal' color='alert' onClick = { ()=> false}/>
                    </div>
                    <div className='docs-page__content-row'>
                        <Label text='default label' size='normal' style='hollow' onClick = { ()=> false}/>
                        <Label text='primary label' size='normal' color='primary' style='hollow' onClick = { ()=> false}/>
                        <Label text='success label' size='normal' color='success' style='hollow' onClick = { ()=> false}/>
                        <Label text='alert label' size='normal' color='alert' style='hollow' onClick = { ()=> false}/>
                    </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>
                       
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>
            </section>
        )
    }
}
