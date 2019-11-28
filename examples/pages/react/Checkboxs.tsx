import * as React from 'react';
import * as Markup from '../../js/react';

import { Checkbox } from '../../../app-typescript';

export default class CheckboxsDoc extends React.Component<{}> {
    
    render() {
        return (
            <section className="docs-page__container">
                <h2 className="docs-page__h2">Checkbox</h2>
                <p className="docs-page__paragraph">
                    For creating SD styled checkboxes use the custom <code>&lt;sd-check&gt;</code> tag.
                    The text inside the tag creates the label for the sd-checkbox.
                    By default the label will be placed on the right side of checkbox, to place it on the left add the property <code>label-position="left"</code>.
                    To create the button styled checkbox add <code>label-position="inside"</code> to the sd-check tag. <code>ng-model</code> must be defined for proper functionality.
                    To initially check item, add <code>ng-checked="true"</code>.
                </p>
                <p className="docs-page__paragraph docs-page__paragraph--small">
                    To include an icon to the button style checkboxes add the data attribute <code>data-icon</code> to <code>sd-check</code>. Use the desired icon name, without the "icon-" prefix, as the value.
                    If the data attribute <code>data-icon</code> is present the button style will be applied automatically, there is no need to add <code>label-position="inside"</code>, although it will work with it as well.
                    For all available icons options check out the Icon font.
                </p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <p className="docs-page__paragraph">// Basic SD checkbox</p>
                        <div className='form__row'>
                            <Checkbox value= 'value1' text='Checkbox label right'/>
                            <Checkbox value= 'value2' text='Check me!'/>
                            <Checkbox value= 'value3' text='Check me too!'/>
                            <Checkbox value= 'value4' text="I'm disabled:(" disabled= {true}/>
                            <Checkbox value= 'value4' text="I'm disabled and checked :(" active= {true} disabled= {true}/>
                        </div>
                        <div className='form__row'>
                            <Checkbox value= 'value5' text='Checkbox label left' side='left'/>
                        </div>
                        <div className='form__row'>
                            <Checkbox value= 'value6' text='Checkbox with custom values'/>
                        </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>
                       
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>
            </section>
        )
    }
}
