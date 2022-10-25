import * as React from 'react';
import * as Markup from '../../js/react';
import { Input, Select, CheckGroup, Checkbox, PropsList, Prop } from '../../../app-typescript';
import { DurationInput } from '../../../app-typescript/components/DurationInput';
import { getDurationString } from '../../../app-typescript/components/DurationInput';

interface IState {
    inlineLabel: boolean;
    required: boolean;
    disabled: boolean;
    invalid: boolean;
}

export default class DurationInputDoc extends React.Component<{}, IState> {
    constructor(props) {
        super(props);
        this.state = {
            inlineLabel: false,
            required: true,
            disabled: false,
            invalid: false,
        }
    }
    
    render() {
        
        return (
            <section className='docs-page__container'>
                <h2 className='docs-page__h2'>Duration Input</h2>
                <Markup.ReactMarkupCodePreview>{`
                    <DurationInput
                    label='Label'
                    info='info message'
                    disabled={this.state.disabled}
                    required={this.state.required}
                    invalid={this.state.invalid}
                    inlineLabel={this.state.inlineLabel}
                    onChange={(e) => {
                        console.log(e)
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
                                    <Checkbox checked={this.state.invalid} label={{text:'Invalid input'}} onChange={(value) => {this.setState({invalid: value})}} />
                                    <Checkbox checked={this.state.inlineLabel} label={{text:'Label positioned inline'}} onChange={(value) => {this.setState({inlineLabel: value})}} />
                                </CheckGroup>
                            </div>

                            <div className='form__row'>
                                <DurationInput
                                label='Label'
                                info='info message'
                                disabled={this.state.disabled}
                                required={this.state.required}
                                invalid={this.state.invalid}
                                inlineLabel={this.state.inlineLabel}
                                onChange={(e) => {
                                    console.log(e)
                                    console.log(getDurationString(e, 3));
                                }}
                                />
                            </div>
                        </div>

                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        <DurationInput
                        label='Label'
                        info='info message'
                        disabled={this.state.disabled}
                        required={this.state.required}
                        invalid={this.state.invalid}
                        inlineLabel={this.state.inlineLabel}
                        onChange={(e) => {
                            console.log(e)
                        }}
                        />
                    `}</Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className='docs-page__h3'>Props</h3>
                <PropsList>
                    <Prop name='hours' isRequired={false} type='number' default='00' description='Hours value'/>
                    <Prop name='minutes' isRequired={false} type='number' default='00' description='Minutes value'/>
                    <Prop name='seconds' isRequired={false} type='number' default='00' description='Seconds value'/>
                    <Prop name='label' isRequired={false} type='string' default='/' description='Input label'/>
                    <Prop name='info' isRequired={false} type='string' default='/' description='Hint text'/>
                    <Prop name='error' isRequired={false} type='string' default='/' description='Error text'/>
                    <Prop name='inlineLabel' isRequired={false} type='boolean' default='false' description='Position labels as inline'/>
                    <Prop name='required' isRequired={false} type='boolean' default='false' description='Mark field as required'/>
                    <Prop name='disabled' isRequired={false} type='boolean' default='false' description='Mark field as disabled'/>
                    <Prop name='invalid' isRequired={false} type='boolean' default='false' description='Mark field as invalid'/>
                </PropsList>
            </section>
        )
    }
}