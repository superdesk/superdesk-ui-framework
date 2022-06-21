import * as React from 'react';

import * as Markup from '../../js/react';

import { Input, Select, CheckGroup, Checkbox, PropsList, Prop } from '../../../app-typescript';

interface IState {
    inlineLabel: boolean;
    required: boolean;
    disabled: boolean;
    invalid: boolean;
    value: any;
    value2: any;
}

export default class InputsDoc extends React.Component<{}, IState> {
    constructor(props) {
        super(props);
        this.state = {
            inlineLabel: false,
            required: true,
            disabled: true,
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
                                    value={''}
                                    maxLength={30}
                                    type='text'
                                    error='This is error message'
                                    info='This is some hint message'
                                    inlineLabel={this.state.inlineLabel}
                                    required={this.state.required}
                                    disabled={this.state.disabled}
                                    invalid={this.state.invalid}
                                    tabindex={0}
                                    onChange={(value) => this.setState({value2: value})} />
                            </div>
                            <div className='form__row'>
                                <Input label='Number Input'
                                    value={this.state.value}
                                    type='number'
                                    error='This is error message'
                                    info='Morbi leo risus porta ac consectetur ac.'
                                    inlineLabel={this.state.inlineLabel}
                                    required={this.state.required}
                                    disabled={this.state.disabled}
                                    invalid={this.state.invalid}
                                    tabindex={0}
                                    onChange={(value) => this.setState({value: value})} />
                            </div>
                            <p className="docs-page__paragraph">// Hidden label</p>
                            <div className='form__row'>
                                <Input label='Input label'
                                    value={''}
                                    maxLength={25}
                                    type='text'
                                    error='This is error message'
                                    info='Donec id elit non mi porta gravida at eget metus.'
                                    inlineLabel={true}
                                    labelHidden={true}
                                    required={this.state.required}
                                    disabled={this.state.disabled}
                                    invalid={this.state.invalid}
                                    tabindex={0}
                                    onChange={(value) => this.setState({value2: value})} />
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
                </PropsList>
            </section>
        )
    }
}