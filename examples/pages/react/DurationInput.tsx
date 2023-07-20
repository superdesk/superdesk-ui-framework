import * as React from 'react';
import * as Markup from '../../js/react';
import { CheckGroup, Checkbox, PropsList, Prop } from '../../../app-typescript';
import { DurationInput } from '../../../app-typescript/components/DurationInput';

interface IState {
    inlineLabel: boolean;
    required: boolean;
    disabled: boolean;
    value: any
}

export default class DurationInputDoc extends React.Component<{}, IState> {
    constructor(props) {
        super(props);
        this.state = {
            inlineLabel: false,
            required: false,
            disabled: false,
            value: 3661,
        }
    }
    
    render() {
        return (
            <section className='docs-page__container'>
                <h2 className='docs-page__h2'>Duration Input</h2>
                <Markup.ReactMarkupCodePreview>{`
                    <DurationInput
                        seconds={this.state.value}
                        onChange={(e) => {
                            this.setState({value: e})
                        }}
                    />
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
                                    <Checkbox checked={this.state.inlineLabel} label={{text:'Label positioned inline'}} onChange={(value) => {this.setState({inlineLabel: value})}} />
                                </CheckGroup>
                            </div>

                            <div className='form__row'>
                                <DurationInput
                                    seconds={this.state.value}
                                    label='Label'
                                    info='info message'
                                    disabled={this.state.disabled}
                                    required={this.state.required}
                                    inlineLabel={this.state.inlineLabel}
                                    onChange={(value) => {
                                        this.setState({value})
                                    }}
                                />
                            </div>
                        </div>

                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        <DurationInput
                            seconds={this.state.value}
                            label='Label'
                            info='info message'
                            disabled={this.state.disabled}
                            required={this.state.required}
                            inlineLabel={this.state.inlineLabel}
                            onChange={(value) => {
                                this.setState({value})
                            }}
                        />
                    `}</Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className='docs-page__h3'>Props</h3>
                <PropsList>
                    <Prop name='hours' isRequired={false} type='number' default='00' description='Hours value.'/>
                    <Prop name='minutes' isRequired={false} type='number' default='00' description='Minutes value.'/>
                    <Prop name='seconds' isRequired={false} type='number' default='00' description='Seconds value.'/>
                    <Prop name='onChange' isRequired={true} type='Function' default='/' description='Callback to invoke when value changes.'/>
                    <Prop name='label' isRequired={false} type='string' default='/' description='Label of component.' />
                    <Prop name='inlineLabel' isRequired={false} type='boolean' default='false' description='Position labels as inline.' />
                    <Prop name='tabindex' isRequired={false} type='number' default='/' description='Indicates an element can be focused on, and determines how that focus is handled.'/>
                    <Prop name='info' isRequired={false} type='string' default='/' description='Info message of component.' />
                    <Prop name='error' isRequired={false} type='string' default='/' description='Error message of component.' />
                    <Prop name='required' isRequired={false} type='boolean' default='false' description='Mark field as required.' />
                    <Prop name='disabled' isRequired={false} type='boolean' default='false' description='Mark field as disabled.' />
                </PropsList>
            </section>
        )
    }
}
