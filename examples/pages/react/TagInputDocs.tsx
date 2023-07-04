import * as React from 'react';
import {Prop, PropsList} from '../../../app-typescript';
import {TagInput} from '../../../app-typescript/components/TagInput';
import * as Markup from '../../js/react';

export default class TagInputDocs extends React.Component<{}, {value: Array<string>}> {
    constructor(props) {
        super(props);

        this.state = {
            value: ['Item 1', 'item 2'],
        }
    }

    render() {
        return (
            <section className="docs-page__container">
                <h2 className="docs-page__h2">Tag Input</h2>
                <Markup.ReactMarkupCodePreview>{`
                    <TagInput
                        value={this.state.value}
                        placeholder="Type Here"
                        onChange={(value) => false}
                    />
                `}
                </Markup.ReactMarkupCodePreview>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <div className='docs-page__content-row'>
                            <TagInput
                                value={this.state.value}
                                placeholder="Type Here"
                                label={'Tag-input Label'}
                                info={'Info Message'}
                                error={'Error Message'}
                                onChange={(value) => {
                                    this.setState({
                                        value: value,
                                    });
                                }}
                            />
                        </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        <TagInput
                            value={this.state.value}
                            placeholder="Type Here"
                            label={'Tag-input Label'}
                            info={'Info Message'}
                            error={'Error Message'}
                            onChange={(value) => {
                                this.setState({
                                    value: value,
                                });
                            }}
                        />
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>
                <h3 className="docs-page__h3">Props</h3>
                <PropsList>
                    <Prop name='value' isRequired={false} type='Array<T>' default='/' description='Value of the component.'/>
                    <Prop name='placeholder' isRequired={false} type='string' default='/' description='Input placeholder.'/>
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
