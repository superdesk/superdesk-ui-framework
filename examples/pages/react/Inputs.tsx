import * as React from 'react';

import * as Markup from '../../js/react';

import { Input, Select, CheckGroup, Checkbox, PropsList, Prop } from '../../../app-typescript';

interface IState {
    inlineLabel: boolean;
    required: boolean;
    disabled: boolean;
    invalid: boolean;
    val: string
}

export default class InputsDoc extends React.Component<{}, IState> {
    constructor(props) {
        super(props);
        this.state = {
            inlineLabel: false,
            required: true,
            disabled: false,
            invalid: false,
            val: 'This is some text'
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
                        <div className='docs-page__content-row'>
                            <div className='form__row'>
                                <CheckGroup>
                                    <Checkbox checked={this.state.required} label={{text:'Required input'}} onChange={(value) => {this.setState({required: value})}} />
                                    <Checkbox checked={this.state.disabled} label={{text:'Disabled input'}} onChange={(value) => {this.setState({disabled: value})}} />
                                    <Checkbox checked={this.state.invalid} label={{text:'Invalid input'}} onChange={(value) => {this.setState({invalid: value})}} />
                                    <Checkbox checked={this.state.inlineLabel} label={{text:'Label positioned inline'}} onChange={(value) => {this.setState({inlineLabel: value})}} />
                                </CheckGroup>
                            </div>

                            <div className='form__row'>
                                <Input label='Input label'
                                    value={this.state.val}
                                    maxLength={30}
                                    error='This is error message'
                                    info='This is some hint message'
                                    inlineLabel={this.state.inlineLabel}
                                    required={this.state.required}
                                    disabled={this.state.disabled}
                                    invalid={this.state.invalid}
                                    onChange={(value) => {this.setState({val: value})}} />
                            </div>

                        </div>

                        <div className='docs-page__content-row docs-page__content-row--no-margin'>
                            <p className="docs-page__paragraph">// Hidden label</p>
                            <div className='form__row'>
                                <Input label='Hidden input label'
                                    value='Lorem ipsum input'
                                    maxLength={30}
                                    error='This is an error message'
                                    info='This is a hint message'
                                    inlineLabel={true}
                                    labelHidden={true}
                                    required={false}
                                    disabled={false}
                                    invalid={false}
                                    onChange={(value) => {}} />
                            </div>
                        </div>

                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        <Input label='Input label'
                            value='This is some value'
                            maxLength={30}
                            error='This is error message'
                            info='This is some hint message'
                            inlineLabel={false}
                            required={true}
                            disabled={false}
                            invalid={false}
                            onChange={(value) => {}} />
                    `}</Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className='docs-page__h3'>Props</h3>
                <PropsList>
                    <Prop name='value' isRequired={false} type='string' default='/' description='Item value'/>
                    <Prop name='label' isRequired={false} type='string' default='/' description='Input label'/>
                    <Prop name='maxLength' isRequired={false} type='number' default='/' description='Sets max length for input text'/>
                    <Prop name='info' isRequired={false} type='string' default='/' description='Hint text'/>
                    <Prop name='error' isRequired={false} type='string' default='/' description='Error text'/>
                    <Prop name='inlineLabel' isRequired={false} type='boolean' default='false' description='Position labels as inline'/>
                    <Prop name='labelHidden' isRequired={false} type='boolean' default='false' description='Hide the label. The label will still be accessible to screen-readers.'/>
                    <Prop name='required' isRequired={false} type='boolean' default='false' description='Mark field as required'/>
                    <Prop name='disabled' isRequired={false} type='boolean' default='false' description='Mark field as disabled'/>
                    <Prop name='invalid' isRequired={false} type='boolean' default='false' description='Mark field as invalid'/>
                </PropsList>
            </section>
        )
    }
}
