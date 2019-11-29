import * as React from 'react';
import * as Markup from '../../js/react';

import { Checkbox, CheckboxButton } from '../../../app-typescript';

interface IState {
    value1: boolean;
    value2: boolean;
    value3: boolean;
    value4: boolean;
    value5: boolean;
    value6: boolean;
    value7: boolean;
    value8: boolean;
    value9: boolean;
    value10: boolean;
    value11: boolean;
    value12: boolean;
    value13: boolean;
    value14: boolean;
    value15: boolean;
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
            value8: false,
            value9: false,
            value10: false,
            value11: false,
            value12: false,
            value13: false,
            value14: false,
            value15: false,
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
                            <Checkbox checked= {this.state.value1} label={{text:'Checkbox label right'}} onChange={(value) => this.setState(() => ({ value1: value }))}/>
                            <Checkbox checked= {this.state.value2} label={{text:'Check me!'}} onChange={(value) => this.setState(() => ({ value2: value }))}/>
                            <Checkbox checked= {this.state.value3} label={{text:'Check me too!'}} onChange={(value) => this.setState(() => ({ value3: value }))}/>
                            <Checkbox checked= {this.state.value4} label={{text:"I'm disabled:("}} disabled= {true} onChange={(value) => this.setState(() => ({ value4: value }))}/>
                            <Checkbox checked= {this.state.value5} label={{text:"I'm disabled and checked :("}} disabled= {true} onChange={(value) => this.setState(() => ({ value5: value }))}/>
                        </div>
                        <div className='form__row'>
                            <Checkbox checked= {this.state.value6} label={{text:'Checkbox label left', side:'left'}} onChange={(value) => this.setState(() => ({ value6: value }))}/>
                        </div>
                        <div className='form__row'>
                            <Checkbox checked= {this.state.value7} label={{text:'Checkbox with custom values'}} onChange={(value) => this.setState(() => ({ value7: value }))}/>
                        </div>
                        <p className="docs-page__paragraph docs-page__paragraph--topMarginL">// Button style checkbox</p>
                        <div className='form__row'>
                            <CheckboxButton checked= {this.state.value8} label={{text:'Button style checkbox'}} onChange={(value) => this.setState(() => ({ value8: value }))}/>
                            <CheckboxButton checked= {this.state.value9} label={{text:'Check this out'}} onChange={(value) => this.setState(() => ({ value9: value }))}/>
                            <CheckboxButton checked= {this.state.value10} label={{text:'Check this too!'}} onChange={(value) => this.setState(() => ({ value10: value }))}/>
                            <CheckboxButton checked= {this.state.value11} label={{text:"U can't touch this"}} disabled={true} onChange={(value) => this.setState(() => ({ value11: value }))}/>
                        </div>
                        <p className="docs-page__paragraph docs-page__paragraph--topMarginL">// Button style with icon</p>
                        <div className='form__row'>
                            <CheckboxButton checked= {this.state.value12} label={{text:'Button style with icon'}} icon='th-list' onChange={(value) => this.setState(() => ({ value12: value }))}/>
                            <CheckboxButton checked= {this.state.value13} label={{text:'I have an icon!'}} icon='th' onChange={(value) => this.setState(() => ({ value13: value }))}/>
                            <CheckboxButton checked= {this.state.value14} label={{text:'Yeah, me too!'}} icon='th-large' onChange={(value) => this.setState(() => ({ value14: value }))}/>
                            <CheckboxButton checked= {this.state.value15} label={{text:'I have an icon :)'}} icon='star' onChange={(value) => this.setState(() => ({ value15: value }))}/>
                        </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>
                       
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>
            </section>
        )
    }
}
