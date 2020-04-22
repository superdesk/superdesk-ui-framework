import * as React from 'react';

import * as Markup from '../../js/react';

import { Select, Option, CheckGroup, Checkbox, PropsList, Prop } from '../../../app-typescript';

interface IState {
    inlineLabel: boolean;
    required: boolean;
    disabled: boolean;
    invalid: boolean;
}

export default class InputsDoc extends React.Component<{}, IState> {
    constructor(props) {
        super(props);
        this.state = {
            inlineLabel: false,
            required: true,
            disabled: false,
            invalid: false
        }
    }

    render() {
        return (
            <section className='docs-page__container'>

                <h2 className='docs-page__h2'>Select</h2>
                <Markup.ReactMarkupCodePreview>{`
                    <Select value={value} required={true}>
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
                                <Select label='Select label'
                                    value='Option 2'
                                    error='This is error message'
                                    info='This is some hint message'
                                    inlineLabel={this.state.inlineLabel}
                                    required={this.state.required}
                                    disabled={this.state.disabled}
                                    invalid={this.state.invalid}
                                    onChange={(value) => { console.log(value) }}>
                                    <Option>Option 1</Option>
                                    <Option>Option 2</Option>
                                </Select>
                            </div>
                        </div>

                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        <Select label='Select label'
                            value='Option 2'
                            error='This is error message'
                            info='This is some hint message'
                            inlineLabel={false}
                            required={true}
                            disabled={false}
                            invalid={false}
                            onChange={(value) => {}}>
                            <Option value="option-1">Option 1</option>
                            <Option value="option-2">Option 2</option>
                        </Select>
                    `}</Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className='docs-page__h3'>Props</h3>
                <PropsList>
                    <Prop name='value' isRequered={false} type='string' default='/' description='Item value' />
                    <Prop name='label' isRequered={false} type='string' default='/' description='Input label' />
                    <Prop name='info' isRequered={false} type='string' default='/' description='Hint text' />
                    <Prop name='error' isRequered={false} type='string' default='/' description='Error text' />
                    <Prop name='inlineLabel' isRequered={false} type='boolean' default='false' description='Position labels as inline' />
                    <Prop name='required' isRequered={false} type='boolean' default='false' description='Mark field as required' />
                    <Prop name='disabled' isRequered={false} type='boolean' default='false' description='Mark field as disabled' />
                    <Prop name='invalid' isRequered={false} type='boolean' default='false' description='Mark field as invalid' />
                </PropsList>
            </section>
        )
    }
}
