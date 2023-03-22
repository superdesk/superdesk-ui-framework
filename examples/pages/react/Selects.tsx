import * as React from 'react';

import * as Markup from '../../js/react';

import { Select, Option, CheckGroup, Checkbox, PropsList, Prop } from '../../../app-typescript';

interface IState {
    inlineLabel: boolean;
    required: boolean;
    disabled: boolean;
    invalid: boolean;
    value: string;
    value2: string;
}

export default class InputsDoc extends React.Component<{}, IState> {
    constructor(props) {
        super(props);
        this.state = {
            inlineLabel: false,
            required: true,
            disabled: false,
            invalid: false,
            value: '',
            value2: '',
        }
    }

    render() {
        return (
            <section className='docs-page__container'>

                <h2 className='docs-page__h2'>Select</h2>
                <Markup.ReactMarkupCodePreview>{`
                    <Select
                        value={this.state.value}
                        onChange={(value) => {
                            this.setState({
                                value: value,
                            })
                        }}
                    >
                        <Option>Option 1</Option>
                        <Option>Option 2</Option>
                    </Select>
                `}
                </Markup.ReactMarkupCodePreview>
                <p className='docs-page__paragraph'></p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <div className='docs-page__content-row docs-page__content-row--no-margin'>
                            <div className='form__row'>
                                <CheckGroup>
                                    <Checkbox checked={this.state.required} label={{ text: 'Required input' }} onChange={(value) => { this.setState({ required: value }) }} />
                                    <Checkbox checked={this.state.disabled} label={{ text: 'Disabled input' }} onChange={(value) => { this.setState({ disabled: value }) }} />
                                    <Checkbox checked={this.state.invalid} label={{ text: 'Invalid input' }} onChange={(value) => { this.setState({ invalid: value }) }} />
                                    <Checkbox checked={this.state.inlineLabel} label={{ text: 'Label positioned inline' }} onChange={(value) => { this.setState({ inlineLabel: value }) }} />
                                </CheckGroup>
                            </div>

                            <div className='form__row'>
                                <Select
                                    value={this.state.value}
                                    label='Select label'
                                    error='This is error message'
                                    info='This is some hint message'
                                    inlineLabel={this.state.inlineLabel}
                                    required={this.state.required}
                                    disabled={this.state.disabled}
                                    invalid={this.state.invalid}
                                    tabindex={0}
                                    onChange={(value) => {
                                        this.setState({
                                            value: value,
                                        })
                                    }}
                                >
                                    <Option>Option 1</Option>
                                    <Option>Option 2</Option>
                                </Select>
                            </div>

                            <p className="docs-page__paragraph">// Boxed with hidden label</p>
                            <div className='form__row'>
                                <Select
                                    value={this.state.value2}
                                    label='Select label'
                                    labelHidden
                                    error='This is error message'
                                    info='This is some hint message'
                                    tabindex={0}
                                    onChange={(value) => {
                                        this.setState({
                                            value2: value,
                                        })
                                    }}
                                >
                                        <Option>Option 1</Option>
                                        <Option>Option 2</Option>
                                </Select>
                            </div>  
                        </div>

                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        <Select
                            value={this.state.value}
                            label='Select label'
                            error='This is error message'
                            info='This is some hint message'
                            inlineLabel={this.state.inlineLabel}
                            required={this.state.required}
                            disabled={this.state.disabled}
                            invalid={this.state.invalid}
                            tabindex={0}
                            onChange={(value) => {
                                this.setState({
                                    value: value,
                                })
                            }}
                        >
                            <Option>Option 1</Option>
                            <Option>Option 2</Option>
                        </Select>
                    `}</Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className='docs-page__h3'>Props</h3>
                <PropsList>
                    <Prop name='value' isRequired={false} type='string' default='/' description='Item value' />
                    <Prop name='label' isRequired={false} type='string' default='/' description='Label of component' />
                    <Prop name='info' isRequired={false} type='string' default='/' description='Info message of component' />
                    <Prop name='error' isRequired={false} type='string' default='/' description='Error message of component' />
                    <Prop name='inlineLabel' isRequired={false} type='boolean' default='false' description='Position labels as inline' />
                    <Prop name='required' isRequired={false} type='boolean' default='false' description='Mark field as required' />
                    <Prop name='disabled' isRequired={false} type='boolean' default='false' description='Mark field as disabled' />
                    <Prop name='invalid' isRequired={false} type='boolean' default='false' description='Mark field as invalid' />
                    <Prop name='tabindex' isRequired={false} type='number' default='/' description='Indicates an element can be focused on, and determines how that focus is handled.' />
                    <Prop name='onChange' isRequired={true} type='Function' default='/' description='Callback to invoke when value changes.'/>
                </PropsList>
            </section>
        )
    }
}
