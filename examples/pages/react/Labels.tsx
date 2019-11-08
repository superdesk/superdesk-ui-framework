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
                        <Label text='large label' sizes='large'/>
                    </div>
                    <div className='docs-page__content-row'>
                        <p className="docs-page__paragraph">// No text transformation</p>
                        <p style={{margin: '-10 0 20', color:' #747474'}}>This version should be used only in combination with <code>label--large</code></p>
                    </div>                    
                    <div className='docs-page__content-row'>
                        <Label text='No text transform here' sizes='large' noTransform={true} types='primary'/>
                        <Label text='No text transform' sizes='large' noTransform={true} types='success'/>
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
                        <Label text='primary label' types='primary'/>
                        <Label text='success label' types='success'/>
                        <Label text='color label' types='yellow2'/>
                        <Label text='warning label' types='warning'/>
                        <Label text='color label' types='orange2'/>
                        <Label text='alert label' types='alert'/>
                        <Label text='color label' types='red2'/>
                        <Label text='highlight label' types='highlight'/>
                        <Label text='color label' types='highlight2'/>
                        <Label text='color label' types='highlight3'/>
                        <Label text='color label' types='highlight4'/>
                        <Label text='color label' types='darkBlue2'/>
                        
                    </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>
                       
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">Hollow style</h3>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                    <div className='docs-page__content-row'>
                        <Label text='default label' hollow={true}/>
                        <Label text='primary label' types='primary' hollow={true}/>
                        <Label text='success label' types='success' hollow={true}/>
                        <Label text='color label' types='yellow2' hollow={true}/>
                        <Label text='warning label' types='warning' hollow={true}/>
                        <Label text='color label' types='orange2' hollow={true}/>
                        <Label text='alert label' types='alert' hollow={true}/>
                        <Label text='color label' types='red2' hollow={true}/>
                        <Label text='highlight label' types='highlight' hollow={true}/>
                        <Label text='color label' types='highlight2' hollow={true}/>
                        <Label text='color label' types='highlight3' hollow={true}/>
                        <Label text='color label' types='highlight4' hollow={true}/>
                        <Label text='color label' types='darkBlue2' hollow={true}/>  
                    </div>
                    <div className='docs-page__content-row'>
                        <Label text='hollow large' sizes='large' hollow={true}/>
                        <Label text='hollow large' sizes='large' types='primary' hollow={true}/>
                        <Label text='Hollow, large & no text transformation' types='highlight2' sizes='large' hollow={true} noTransform={true}/>
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
                        <Label text='default label' link='#'/>
                        <Label text='primary label' types='primary' link='#'/>
                        <Label text='success label' types='success' link='#'/>
                        <Label text='alert label' types='alert' link='#'/>
                    </div>
                    <div className='docs-page__content-row'>
                        <Label text='default label' hollow={true} link='#'/>
                        <Label text='primary label' types='primary' hollow={true} link='#'/>
                        <Label text='success label' types='success' hollow={true} link='#'/>
                        <Label text='alert label' types='alert' hollow={true} link='#'/>
                    </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>
                       
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h2 className="docs-page__h2">Icon Labels</h2>
                <p className="docs-page__paragraph">Icon labels are inline styles for displaying icon with text label. Use color classes to change label's color.</p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                    <div className='docs-page__content-row'>
                        <Label text='Default label' iconLabel={true} icon='photo'/>
                        <Label text='Label primary'  iconLabel={true} icon='facebook' typesLabelIcon='primary'/>
                        <Label text='Label success' iconLabel={true} icon='text' typesLabelIcon='success'/>
                        <Label text='Label warning' iconLabel={true} icon='paywall' typesLabelIcon='warning'/>
                        <Label text='Label alert'  iconLabel={true} icon='trash' typesLabelIcon='alert'/>
                        <Label text='Label highlight' iconLabel={true} icon='composite' typesLabelIcon='highlight'/>
                        <Label text='Label sd-green' iconLabel={true} icon='video' typesLabelIcon='sd-green'/>
                    </div>

                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>
                       
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>
            </section>
        )
    }
}
