import * as React from 'react';

import * as Markup from '../../js/react';

import { CheckGroup, Checkbox, Autocomplete, PropsList, Prop } from '../../../app-typescript';

interface IState {
    items: Array<any>;
    inlineLabel: boolean;
    required: boolean;
    disabled: boolean;
    invalid: boolean;
}

export default class AutocompleteDoc extends React.Component<{}, IState> {
    constructor(props) {
        super(props);
        this.state = {
            items: ['Item 1', 'Item 2', 'Item 3'],
            inlineLabel: false,
            required: true,
            disabled: false,
            invalid: false
        }
    }

    render() {
        return (
            <section className='docs-page__container'>
                <h2 className='docs-page__h2'>Autocomplete</h2>
                <Markup.ReactMarkupCodePreview>{`
                    <Autocomplete text="Name" items={this.props.items} maxLength={30} />
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
                                <Autocomplete
                                    label='Autocomplete label'
                                    items={this.state.items}
                                    inlineLabel={this.state.inlineLabel}
                                    required={this.state.required}
                                    disabled={this.state.disabled}
                                    invalid={this.state.invalid}
                                    onChange={(value) => { }} />
                            </div>
                        </div>

                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        <Autocomplete items={this.state.items} />
                    `}</Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className='docs-page__h3'>Props</h3>
                <PropsList>
                    <Prop name='items' isRequered={true} type='array' default='/' description='Array of values for autocomplete' />
                    <Prop name='keyValue' isRequered={true} type='string' default='/' description='Key value if array is combined of objects' />
                    <Prop name='minLength' isRequered={true} type='number' default='1' description='Minimum number of characters to initiate a search' />
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
