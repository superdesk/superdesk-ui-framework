import * as React from 'react';

import * as Markup from '../../js/react';

import { Input, Select, CheckGroup, Checkbox, PropsList, Prop } from '../../../app-typescript';
import { DurationInput } from '../../../app-typescript/components/DurationInput';

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
                                    placeholder='Placeholder'
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
                            <div className='form__row'>
                                <DurationInput
                                onChange={(e) => {
                                    console.log(e)
                                }}
                                />
                            <p className="docs-page__paragraph">// Boxed with hidden label</p>
                            <div className='form__row'>
                                <Input label='Input label'
                                    value={''}
                                    boxedStyle={true}
                                    maxLength={25}
                                    type='text'
                                    placeholder='Default boxed input'
                                    error='This is error message'
                                    inlineLabel={true}
                                    labelHidden={true}
                                    required={this.state.required}
                                    disabled={this.state.disabled}
                                    invalid={this.state.invalid}
                                    tabindex={0}
                                    onChange={(value) => this.setState({value2: value})} />
                            </div>
                            <div className='form__row'>
                                <Input label='Input label'
                                    value={''}
                                    boxedStyle={true}
                                    size='large'
                                    maxLength={25}
                                    type='text'
                                    placeholder='Large boxed input'
                                    error='This is error message'
                                    inlineLabel={true}
                                    labelHidden={true}
                                    required={this.state.required}
                                    disabled={this.state.disabled}
                                    invalid={this.state.invalid}
                                    tabindex={0}
                                    onChange={(value) => this.setState({value2: value})} />
                            </div>
                            <div className='form__row'>
                                <Input label='Input label'
                                    value={''}
                                    boxedStyle={true}
                                    size='x-large'
                                    maxLength={25}
                                    type='text'
                                    placeholder='Extra large boxed input'
                                    error='This is error message'
                                    inlineLabel={true}
                                    labelHidden={true}
                                    required={this.state.required}
                                    disabled={this.state.disabled}
                                    invalid={this.state.invalid}
                                    tabindex={0}
                                    onChange={(value) => this.setState({value2: value})} />
                            </div>
                            <p className="docs-page__paragraph">// Boxed with default label</p>
                            <div className='form__row'>
                                <Input label='Input label'
                                    value={''}
                                    boxedStyle={true}
                                    size='large'
                                    maxLength={25}
                                    placeholder='Placeholder'
                                    type='text'
                                    error='This is error message'
                                    required={this.state.required}
                                    disabled={this.state.disabled}
                                    invalid={this.state.invalid}
                                    tabindex={0}
                                    onChange={(value) => this.setState({value2: value})} />
                            </div>
                            <p className="docs-page__paragraph">// Boxed with boxed label</p>
                            <div className='form__row'>
                                <Input label='Input label'
                                    value={''}
                                    boxedStyle={true}
                                    boxedLable={true}
                                    size='large'
                                    maxLength={25}
                                    placeholder='Placeholder'
                                    type='text'
                                    error='This is error message'
                                    required={this.state.required}
                                    disabled={this.state.disabled}
                                    invalid={this.state.invalid}
                                    tabindex={0}
                                    onChange={(value) => this.setState({value2: value})} />
                            </div>
                            <div className='form__row'>
                                <Input label='Input label'
                                    value={''}
                                    boxedStyle={true}
                                    boxedLable={true}
                                    size='large'
                                    placeholder='Hide my label'
                                    labelHidden={true}
                                    type='text'
                                    error='This is error message'
                                    required={this.state.required}
                                    disabled={this.state.disabled}
                                    invalid={this.state.invalid}
                                    tabindex={0}
                                    onChange={(value) => this.setState({value2: value})} />
                            </div>
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
                            onChange={(value) => {}} />
                        
                        // Hidden label
                        <Input label='Input label'
                            value={''}
                            maxLength={25}
                            type='text'
                            placeholder='Placeholder'
                            error='This is error message'
                            info='Donec id elit non mi porta gravida at eget metus.'
                            inlineLabel={true}
                            labelHidden={true}
                            required={this.state.required}
                            disabled={this.state.disabled}
                            invalid={this.state.invalid}
                            tabindex={0}
                            onChange={(value) => {}} />

                        // Boxed with hidden label
                        <Input label='Input label'
                            value={''}
                            boxedStyle={true}
                            maxLength={25}
                            type='text'
                            placeholder='Default boxed input'
                            error='This is error message'
                            inlineLabel={true}
                            labelHidden={true}
                            required={this.state.required}
                            disabled={this.state.disabled}
                            invalid={this.state.invalid}
                            tabindex={0}
                            onChange={(value) => {}} />

                        <Input label='Input label'
                            value={''}
                            boxedStyle={true}
                            size='large'
                            maxLength={25}
                            type='text'
                            placeholder='Large boxed input'
                            error='This is error message'
                            inlineLabel={true}
                            labelHidden={true}
                            required={this.state.required}
                            disabled={this.state.disabled}
                            invalid={this.state.invalid}
                            tabindex={0}
                            onChange={(value) => {}} />

                        <Input label='Input label'
                            value={''}
                            boxedStyle={true}
                            size='x-large'
                            maxLength={25}
                            type='text'
                            placeholder='Extra large boxed input'
                            error='This is error message'
                            inlineLabel={true}
                            labelHidden={true}
                            required={this.state.required}
                            disabled={this.state.disabled}
                            invalid={this.state.invalid}
                            tabindex={0}
                            onChange={(value) => {}} />

                        // Boxed with default label
                        <Input label='Input label'
                            value={''}
                            boxedStyle={true}
                            size='large'
                            maxLength={25}
                            placeholder='Placeholder'
                            type='text'
                            error='This is error message'
                            required={this.state.required}
                            disabled={this.state.disabled}
                            invalid={this.state.invalid}
                            tabindex={0}
                            onChange={(value) => {}} />
                        
                        // Boxed with boxed label
                        <Input label='Input label'
                            value={''}
                            boxedStyle={true}
                            boxedLable={true}
                            size='large'
                            maxLength={25}
                            placeholder='Placeholder'
                            type='text'
                            error='This is error message'
                            required={this.state.required}
                            disabled={this.state.disabled}
                            invalid={this.state.invalid}
                            tabindex={0}
                            onChange={(value) => {}} />
                        
                        <Input label='Input label'
                            value={''}
                            boxedStyle={true}
                            boxedLable={true}
                            size='large'
                            placeholder='Hide my label'
                            labelHidden={true}
                            type='text'
                            error='This is error message'
                            required={this.state.required}
                            disabled={this.state.disabled}
                            invalid={this.state.invalid}
                            tabindex={0}
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