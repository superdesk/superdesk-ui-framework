import * as React from 'react';

import * as Markup from '../../js/react';

import { Input, Select, CheckGroup, Checkbox, PropsList, Prop } from '../../../app-typescript';
import { FrequencyInput } from '../../../app-typescript/components/FrequencyInput';

interface IState {
    inlineLabel: boolean;
    required: boolean;
    disabled: boolean;
    invalid: boolean;
    value: any;
    value2: any;
}

export default class FrequencyInputDoc extends React.Component<{}, IState> {
    constructor(props) {
        super(props);
        this.state = {
            inlineLabel: false,
            required: true,
            disabled: false,
            invalid: false,
            value: null,
            value2: '',
        }
    }
    
    render() {
        return (
            <section className='docs-page__container'>
                <h2 className='docs-page__h2'>Input</h2>
                <Markup.ReactMarkupCodePreview>{`
                    <Input value={value} maxLength={30} required={true} />
                `}
                </Markup.ReactMarkupCodePreview>
                <p className='docs-page__paragraph'></p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <div className='docs-page__content-row docs-page__content-row--no-margin'>
                            <FrequencyInput />

                            
                        </div>

                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`

                    `}</Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className='docs-page__h3'>Props</h3>
                <PropsList>
                    <Prop name='value' isRequired={false} type='string' default='/' description='Item value'/>
                    <Prop name='type' isRequired={false} type='text | number | password' default='text' description='Input type. Defaults to type text.'/>
                    <Prop name='label' isRequired={false} type='string' default='/' description='Input label'/>
                    <Prop name='maxLength' isRequired={false} type='number' default='/' description='Sets max length for input text'/>
                    <Prop name='info' isRequired={false} type='string' default='/' description='Hint text'/>
                    <Prop name='error' isRequired={false} type='string' default='/' description='Error text'/>
                    <Prop name='inlineLabel' isRequired={false} type='boolean' default='false' description='Position labels as inline'/>
                    <Prop name='required' isRequired={false} type='boolean' default='false' description='Mark field as required'/>
                    <Prop name='disabled' isRequired={false} type='boolean' default='false' description='Mark field as disabled'/>
                    <Prop name='invalid' isRequired={false} type='boolean' default='false' description='Mark field as invalid'/>
                    <Prop name='tabindex' isRequired={false} type='number' default='/' description='Indicates an element can be focused on, and determines how that focus is handled.'/>
                    <Prop name='placeholder' isRequired={false} type='string' default='/' description='Defines the text for the placeholder pseudo-element.'/>
                    <Prop name='fullWidth' isRequired={false} type='boolean' default='false' description='Forces the input to take 100% of the container width.'/>
                    <Prop name='boxedStyle' isRequired={false} type='boolean' default='false' description='Applies a boxed style to the input. This style should be used only in the authoring enviroment and similar.'/>
                    <Prop name='boxedLable' isRequired={false} type='boolean' default='false' description='Applies a boxed style to the input label. This label style should be used only in combination with the boxedStyle input inside the authoring enviroment.'/>
                    <Prop name='size' isRequired={false} type='medium | large | x-large' default='medium' description='Specifies the size of the input. Defaults to medium and should be changed only in special cases (e.g. titles, headlines etc.).'/>
                </PropsList>
            </section>
        )
    }
}