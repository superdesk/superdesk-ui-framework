import * as React from 'react';
import {Prop, PropsList} from '../../../app-typescript';
import {TagInput} from '../../../app-typescript/components/TagInput';
import * as Markup from '../../js/react';

export default class TagInputDocs extends React.Component<{}, {value: Array<string>}> {
    constructor(props) {
        super(props);

        this.state = {
            value: ['Item'],
        }
    }

    render() {
        return (
            <section className="docs-page__container">
                <h2 className="docs-page__h2">Tag Input</h2>
                <Markup.ReactMarkupCodePreview>{`
                    <TagInput
                        onChange={(value) => {
                            this.setState({
                                value: value,
                            });
                        }}
                        value={this.state.value}
                        placeholder="Type Here"
                    />
                `}
                </Markup.ReactMarkupCodePreview>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <div className='docs-page__content-row'>
                            <TagInput
                                required
                                info={'Info Message'}
                                error={'Error Message'}
                                label={'Tag-input Label'}
                                onChange={(value) => {
                                    this.setState({
                                        value: value,
                                    });
                                }}
                                value={this.state.value}
                                placeholder="Type Here"
                            />
                        </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        <TagInput
                            required
                            info={'Info Message'}
                            error={'Error Message'}
                            label={'TreeSelect Label'}
                            onChange={(value) => {
                                this.setState({
                                    value: value,
                                });
                            }}
                            value={this.state.value}
                            placeholder="Type Here"
                        />
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>
                <h3 className="docs-page__h3">Props</h3>
                <PropsList>
                    <Prop name='value' isRequired={false} type='Array<T>' default='/' description='Value of the component.'/>
                    <Prop name='placeholder' isRequired={false} type='string' default='/' description='Input placeholder.'/>
                    <Prop name='onChange' isRequired={true} type='Function' default='/' description='Callback to invoke when value changes.'/>
                    <Prop name='label' isRequired={false} type='string' default='/' description='Input label.'/>
                    <Prop name='info' isRequired={false} type='string' default='/' description='Hint text.'/>
                    <Prop name='error' isRequired={false} type='string' default='/' description='Error text.'/>
                    <Prop name='inlineLabel' isRequired={false} type='boolean' default='false' description='Position labels as inline.'/>
                    <Prop name='required' isRequired={false} type='boolean' default='false' description='Mark field as required.'/>
                    <Prop name='disabled' isRequired={false} type='boolean' default='false' description='Mark field as disabled.'/>
                    <Prop name='invalid' isRequired={false} type='boolean' default='false' description='Mark field as invalid.'/>
                </PropsList>
            </section>
        )
    }
}
