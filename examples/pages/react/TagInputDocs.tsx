import * as React from 'react';
import {TagInput} from '../../../app-typescript/components/TagInput';
import * as Markup from '../../js/react';

export default class TagInputDocs extends React.Component<{}, {value: Array<string>}> {
    constructor(props) {
        super(props);

        this.state = {
            value: ['asd'],
        }
    }

    render() {
        return (
            <section className="docs-page__container">
                <h2 className="docs-page__h2">Tag input</h2>
                <Markup.ReactMarkupCodePreview>{`
                    <TagInput
                        onChange={(value) => {
                            this.setState({
                                value: value
                            })
                        }}
                        value={this.state.value}
                        placeholder="Test"
                    />
                `}
                </Markup.ReactMarkupCodePreview>
                <h3 className="docs-page__h3">Tag input</h3>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <div className='docs-page__content-row'>
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
                                //placeholder="Test"
                            />
                        </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        <TagInput
                            onChange={(value) => {
                                this.setState({
                                    value: value
                                })
                            }}
                            value={this.state.value}
                            placeholder="Test"
                        />
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>
            </section>
        )
    }
}
