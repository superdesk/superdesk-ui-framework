import * as React from 'react';
import * as Markup from '../../js/react';

import { Checkbox } from '../../../app-typescript';

interface IState {
    value1: boolean;
    value2: boolean;
    value3: boolean;
    value4: boolean;
    value5: boolean;
    value6: boolean;
    value7: boolean;
}


export default class CheckboxsDoc extends React.Component<{}, IState> {
    constructor(props) {
        super(props);

        this.state = {
            value1: false,
            value2: false,
            value3: false,
            value4: false,
            value5: true,
            value6: false,
            value7: false,
        };
    }

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
                            <Checkbox value= {this.state.value1} label={{text:'Checkbox label right'}} onChange={(value) => this.setState(() => ({ value1: value }))}/>
                            <Checkbox value= {this.state.value2} label={{text:'Check me!'}} onChange={(value) => this.setState(() => ({ value2: value }))}/>
                            <Checkbox value= {this.state.value3} label={{text:'Check me too!'}} onChange={(value) => this.setState(() => ({ value3: value }))}/>
                            <Checkbox value= {this.state.value4} label={{text:"I'm disabled:("}} disabled= {true} onChange={(value) => this.setState(() => ({ value4: value }))}/>
                            <Checkbox value= {this.state.value5} label={{text:"I'm disabled and checked :("}} disabled= {true} onChange={(value) => this.setState(() => ({ value5: value }))}/>
                        </div>
                        <div className='form__row'>
                            <Checkbox value= {this.state.value6} label={{text:'Checkbox label left', side:'left'}} onChange={(value) => this.setState(() => ({ value6: value }))}/>
                        </div>
                        <div className='form__row'>
                            <Checkbox value= {this.state.value7} label={{text:'Checkbox with custom values'}} onChange={(value) => this.setState(() => ({ value7: value }))}/>
                        </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>
                       
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>
            </section>
        )
    }
}
