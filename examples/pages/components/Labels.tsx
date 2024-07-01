import * as React from 'react';

import * as Markup from '../../js/react';

import { Label, Prop, PropsList } from '../../../app-typescript';

export default class LabelsDoc extends React.Component {
    render() {
        return (
            <section className="docs-page__container">
                <h2 className="docs-page__h2">Labels</h2>
                <Markup.ReactMarkupCodePreview>{`
                    <Label text='default label'/>
                `}
                </Markup.ReactMarkupCodePreview>
                <p className="docs-page__paragraph">Labels are inline styles that can be dropped into body text. For example, labels are used to show the state of items in Superdesk.</p>
                <h3 className="docs-page__h3 docs-page__h3--small-top-m">Sizing</h3>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                    <div className='docs-page__content-row'>
                        <Label text='default label'/>
                        <Label text='large label' size='large'/>
                    </div>
                    <div className='docs-page__content-row'>
                        <p className="docs-page__paragraph">// No text transformation</p>
                        <p className="docs-page__paragraph--small">This version should be used only in combination with <code>label--large</code></p>
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
                
                <h3 className="docs-page__h3">Colors</h3>
                <p className="docs-page__paragraph">By default, labels use the standard semantic colour palette (e.g. primary, success, warning etc.). Due to the substantial use of the label component in Superdesk this standard palette is often very limiting. In such cases, the colours can be extended by adding the <code>color</code> prop with a value of any of the colours from the <a className='link' href='https://ui-framework.superdesk.org/#/components/colors' target='blank'>extended colour palette</a>.</p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <p className="docs-page__paragraph">// Basic colour palette</p>
                        <div className='docs-page__content-row'>
                            <Label text='default label'/>
                            <Label text='primary label' type='primary'/>
                            <Label text='success label' type='success'/>
                            <Label text='warning label' type='warning'/>
                            <Label text='alert label' type='alert'/>
                            <Label text='highlight label' type='highlight'/>
                            <Label text='sd-green label' type='sd-green'/>  
                        </div>
                        <p className="docs-page__paragraph">// Extended colour examples</p>
                        <div className='docs-page__content-row'>
                            <Label text='indigo--700' color='indigo--700'/>
                            <Label text='pink--400' color='pink--400'/>
                            <Label text='cyan--600' color='cyan--600'/>
                            <Label text='light-green--700' color='light-green--700'/>
                            <Label text='deep-orange--700' color='deep-orange--700'/>
                            <Label text='lime--700' color='lime--700'/>  
                        </div>
                        <p className="docs-page__paragraph">// Custom Hex colors</p>
                        <div className='docs-page__content-row'>
                            <Label text='Hex: #008773' hexColor='#008773'/>
                            <Label text='Hex: #000FB5' hexColor='#000FB5'/>
                            <Label text='Hex: #696B00' hexColor='#696B00'/>
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
                        // Extended colour examples
                        <Label text='indigo--700' color='indigo--700'/>
                        <Label text='pink--400' color='pink--400'/>
                        <Label text='cyan--600' color='cyan--600'/>
                        <Label text='light-green--700' color='light-green--700'/>
                        <Label text='deep-orange--700' color='deep-orange--700'/>
                        <Label text='lime--700' color='lime--700'/> 
                        // Custom Hex colors
                        <Label text='Hex: #008773' hexColor='#008773'/>
                        <Label text='Hex: #000FB5' hexColor='#000FB5'/>
                        <Label text='Hex: #696B00' hexColor='#696B00'/>
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">Hollow style</h3>
                <p className="docs-page__paragraph">Add prop<code>style='hollow'</code>.</p>
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
                        <p className="docs-page__paragraph">// Hollow style with extended colour palette</p>
                        <div className='docs-page__content-row'>
                            <Label text='blue--800 label' style='hollow' color='blue--800'/>
                            <Label text='purple--400 label' style='hollow' color='purple--400'/>
                            <Label text='blue-grey--600 label' style='hollow' color='blue-grey--600'/>
                            <Label text='light-green--700 label' style='hollow' color='light-green--700'/>
                            <Label text='deep-purple--600 label' style='hollow' color='deep-purple--600'/>
                        </div>
                        <p className="docs-page__paragraph">// Custom Hex colours</p>
                        <div className='docs-page__content-row'>
                            <Label text='Hex: #008773' style='hollow' hexColor='#008773'/>
                            <Label text='Hex: #000FB5' style='hollow' hexColor='#000FB5'/>
                            <Label text='Hex: #696B00' style='hollow' hexColor='#696B00'/>
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

                        // Hollow style with extended colour palette
                        <Label text='blue--800 label' style='hollow' color='blue--800'/>
                        <Label text='purple--400 label' style='hollow' color='purple--400'/>
                        <Label text='blue-grey--600 label' style='hollow' color='blue-grey--600'/>
                        <Label text='light-green--700 label' style='hollow' color='light-green--700'/>
                        <Label text='deep-purple--600 label' style='hollow' color='deep-purple--600'/>

                        // Custom Hex colours
                        <Label text='Hex: #008773' style='hollow' hexColor='#008773'/>
                        <Label text='Hex: #000FB5' style='hollow' hexColor='#000FB5'/>
                        <Label text='Hex: #696B00' style='hollow' hexColor='#696B00'/>
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">Translucent style</h3>
                <p className="docs-page__paragraph">Add prop<code>style='translucent'</code>. <br />
                <strong>Note:</strong> The translucent style does't support the extended colour palette yet.</p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <div className='docs-page__content-row'>
                            <Label text='default label' style='translucent'/>
                            <Label text='primary label' type='primary' style='translucent'/>
                            <Label text='success label' type='success' style='translucent'/>
                            <Label text='warning label' type='warning' style='translucent'/>
                            <Label text='alert label' type='alert' style='translucent'/>
                            <Label text='highlight label' type='highlight' style='translucent'/>
                            <Label text='sd-gren label' type='sd-green' style='translucent'/>
                        </div>
                        <div className='docs-page__content-row'>
                            <Label text='Translucent large' size='large' style='translucent'/>
                            <Label text='Translucent large' size='large' type='primary' style='translucent'/>
                            <Label text='Translucent, large & no text transformation' type='highlight' size='large' style='translucent' noTransform={true}/>
                        </div>
                        <p className="docs-page__paragraph">// Custom Hex colours</p>
                        <div className='docs-page__content-row'>
                            <Label text='Hex: #008773' style='translucent' hexColor='#008773'/>
                            <Label text='Hex: #000FB5' style='translucent' hexColor='#000FB5'/>
                            <Label text='Hex: #696B00' style='translucent' hexColor='#696B00'/>
                        </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        <Label text='default label' style='hollow'/>
                        <Label text='primary label' type='primary' style='translucent'/>
                        <Label text='success label' type='success' style='translucent'/>
                        <Label text='warning label' type='warning' style='translucent'/>
                        <Label text='alert label' type='alert' style='translucent'/>
                        <Label text='highlight label' type='highlight' style='translucent'/>
                        <Label text='sd-gren label' type='sd-green' style='translucent'/>

                        <Label text='Translucent large' size='large' style='translucent'/>
                        <Label text='Translucent large' size='large' type='primary' style='translucent'/>
                        <Label text='Translucent, large & no text transformation' type='highlight' size='large' style='translucent' noTransform={true}/>

                        // Custom Hex colours
                        <Label text='Hex: #008773' style='translucent' hexColor='#008773'/>
                        <Label text='Hex: #000FB5' style='translucent' hexColor='#000FB5'/>
                        <Label text='Hex: #696B00' style='translucent' hexColor='#696B00'/>
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">Link label</h3>
                <p className="docs-page__paragraph">This type of label should be used only in highly specific cases (for instance inline with other regular labels inside a list item). For most other scenarios, use of the button component is strongly suggested.</p>
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
                        <div className='docs-page__content-row'>
                            <Label text='default label' style='translucent' onClick={()=> false}/>
                            <Label text='primary label' type='primary' style='translucent' onClick={()=> false}/>
                            <Label text='success label' type='success' style='translucent' onClick={()=> false}/>
                            <Label text='alert label' type='alert' style='translucent' onClick={()=> false}/>
                        </div>
                        <p className="docs-page__paragraph">// Custom Hex colours</p>
                        <div className='docs-page__content-row'>
                            <Label text='Hex: #008773' hexColor='#008773' onClick={()=> false}/>
                            <Label text='Hex: #000FB5' hexColor='#000FB5' onClick={()=> false}/>
                            <Label style='hollow' text='Hex: #008773' hexColor='#008773' onClick={()=> false}/>
                            <Label style='hollow' text='Hex: #000FB5' hexColor='#000FB5' onClick={()=> false}/>
                            <Label style='translucent' text='Hex: #008773' hexColor='#008773' onClick={()=> false}/>
                            <Label style='translucent' text='Hex: #000FB5' hexColor='#000FB5' onClick={()=> false}/>
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

                        <Label text='default label' style='translucent' onClick={()=> false}/>
                        <Label text='primary label' type='primary' style='translucent' onClick={()=> false}/>
                        <Label text='success label' type='success' style='translucent' onClick={()=> false}/>
                        <Label text='alert label' type='alert' style='translucent' onClick={()=> false}/>

                        // Custom Hex colours
                        <Label text='Hex: #008773' hexColor='#008773' onClick={()=> false}/>
                        <Label text='Hex: #000FB5' hexColor='#000FB5' onClick={()=> false}/>
                        <Label style='hollow' text='Hex: #008773' hexColor='#008773' onClick={()=> false}/>
                        <Label style='hollow' text='Hex: #000FB5' hexColor='#000FB5' onClick={()=> false}/>
                        <Label style='translucent' text='Hex: #008773' hexColor='#008773' onClick={()=> false}/>
                        <Label style='translucent' text='Hex: #000FB5' hexColor='#000FB5' onClick={()=> false}/>
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>
                
                <h3 className="docs-page__h3">Props</h3>
                <PropsList>
                    <Prop name='text' isRequired={true} type='string' default='/' description='Label text value'/>
                    <Prop name='type' isRequired={false} type='default | primary | success | warning | alert | highlight | sd-green' default='default' description='Default + semantic colour variations (e.g. primary, success etc.).'/>
                    <Prop name='color' isRequired={false} type='string' default='/' description='Extended color palette from the framework (e.g. red--500);  NOTE: The label can have either a Type or Color defined, not both at the same time.'/>
                    <Prop name='size' isRequired={false} type='small | normal | large' default='normal' description='Specifies a small, normal or large label.'/>
                    <Prop name='noTransform' isRequired={false} type='boolean' default='false' description='Transforms text to uppercase.'/>
                    <Prop name='style' isRequired={false} type='filled | hollow | translucent' default='filled' description='Label may have one of these styles - filled (default), hollow or translucent.'/>
                    <Prop name='hexColor' isRequired={false} type='string' default='/' description='Define a custom Hex colour for the label.'/>
                </PropsList>
            </section>
        )
    }
}
