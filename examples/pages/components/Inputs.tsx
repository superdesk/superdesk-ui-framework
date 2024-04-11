import * as React from 'react';
import * as Markup from '../../js/react';
import { Input, CheckGroup, Checkbox, PropsList, Prop, InputNew } from '../../../app-typescript';

interface IState {
    inlineLabel: boolean;
    required: boolean;
    disabled: boolean;
    invalid: boolean;
    value: any;
    value2: any;
    value3: any;
    value4: any;
    value5: any;
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
            value2: null,
            value3: '',
            value4: '',
            value5: '',
        }
    }

    render() {
        return (
            <section className='docs-page__container'>
                <h2 className='docs-page__h2'>Input</h2>
                <Markup.ReactMarkupCodePreview>{`
                    <Input type='text' onChange={(value) => this.setState({value: value})} />
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
                                <Input
                                    label='Input label'
                                    value={this.state.value}
                                    type='text'
                                    info='This is some hint message'
                                    inlineLabel={this.state.inlineLabel}
                                    required={this.state.required}
                                    disabled={this.state.disabled}
                                    maxLength={30}
                                    tabindex={0}
                                    onChange={(value) => this.setState({value: value})}
                                />
                            </div>

                            <div className='form__row'>
                                <Input
                                    label='Number Input'
                                    value={this.state.value2}
                                    type='number'
                                    info='Morbi leo risus porta ac consectetur ac.'
                                    tabindex={0}
                                    onChange={(value) => this.setState({value2: value})}
                                />
                            </div>

                            <p className="docs-page__paragraph">// Hidden label</p>
                            <div className='form__row'>
                                <Input
                                    label='Input label'
                                    value={this.state.value3}
                                    type='text'
                                    placeholder='Placeholder'
                                    info='Donec id elit non mi porta gravida at eget metus.'
                                    inlineLabel={true}
                                    labelHidden={true}
                                    tabindex={0}
                                    onChange={(value) => this.setState({value3: value})}
                                />
                            </div>

                            <p className="docs-page__paragraph">// Boxed input</p>
                            <div className='form__row'>
                                <Input
                                    label='Input label'
                                    value={this.state.value4}
                                    boxedStyle={true}
                                    maxLength={30}
                                    placeholder='Placeholder'
                                    type='text'
                                    tabindex={0}
                                    onChange={(value) => this.setState({value4: value})}
                                />
                            </div>

                            <p className="docs-page__paragraph">// Boxed input with boxed label</p>
                            <div className='form__row'>
                                <Input
                                    label='Input label'
                                    value={this.state.value5}
                                    boxedStyle={true}
                                    boxedLable={true}
                                    maxLength={30}
                                    placeholder='Placeholder'
                                    type='text'
                                    tabindex={0}
                                    onChange={(value) => this.setState({value5: value})}
                                />
                            </div>
                        </div>

                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        <Input
                            label='Input label'
                            value={''}
                            type='text'
                            info='This is some hint message'
                            inlineLabel={this.state.inlineLabel}
                            required={this.state.required}
                            disabled={this.state.disabled}
                            maxLength={30}
                            tabindex={0}
                            onChange={(value) => this.setState({value: value})}
                        />

                        <Input
                            label='Number Input'
                            value={this.state.value}
                            type='number'
                            info='Morbi leo risus porta ac consectetur ac.'
                            tabindex={0}
                            onChange={(value) => this.setState({value2: value})}
                        />

                        // Hidden label
                        <Input
                            label='Input label'
                            value={''}
                            type='text'
                            placeholder='Placeholder'
                            info='Donec id elit non mi porta gravida at eget metus.'
                            inlineLabel={true}
                            labelHidden={true}
                            tabindex={0}
                            onChange={(value) => this.setState({value2: value})}
                        />

                        // Boxed input
                        <Input
                            label='Input label'
                            value={''}
                            boxedStyle={true}
                            boxedLable={true}
                            maxLength={25}
                            placeholder='Placeholder'
                            type='text'
                            tabindex={0}
                            onChange={(value) => this.setState({value2: value})}
                        />

                        // Boxed input with boxed label
                        <Input
                            label='Input label'
                            value={''}
                            boxedStyle={true}
                            boxedLable={true}
                            maxLength={25}
                            placeholder='Placeholder'
                            type='text'
                            tabindex={0}
                            onChange={(value) => this.setState({value2: value})}
                        />
                    `}</Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className='docs-page__h3'>Props</h3>
                <PropsList>
                    <Prop name='value' isRequired={false} type='string' default='/' description='Input value.'/>
                    <Prop name='type' isRequired={false} type='text | number | password' default='text' description='Input type. Defaults to type text.'/>
                    <Prop name='maxLength' isRequired={false} type='number' default='/' description='Sets max length for input text.'/>
                    <Prop name='placeholder' isRequired={false} type='string' default='/' description='Defines the text for the placeholder pseudo-element.'/>
                    <Prop name='fullWidth' isRequired={false} type='boolean' default='false' description='Forces the input to take 100% of the container width.'/>
                    <Prop name='boxedStyle' isRequired={false} type='boolean' default='false' description='Applies a boxed style to the input. This style should be used only in the authoring enviroment and similar.'/>
                    <Prop name='boxedLable' isRequired={false} type='boolean' default='false' description='Applies a boxed style to the input label. This label style should be used only in combination with the boxedStyle input inside the authoring enviroment.'/>
                    <Prop name='size' isRequired={false} type='medium | large | x-large' default='medium' description='Specifies the size of the input. Defaults to medium and should be changed only in special cases (e.g. titles, headlines etc.).'/>
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
