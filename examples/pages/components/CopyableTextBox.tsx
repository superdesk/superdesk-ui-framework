import * as React from 'react';
import * as Markup from '../../js/react';
import {CopyableTextBox, Prop, PropsList} from '../../../app-typescript';

interface IState {
    value: string;
}

export default class CopyableTextBoxDoc extends React.Component<{}, IState> {
    constructor(props) {
        super(props);
        this.state = {
            value: 'https://example.com/api/v1/resource/12345',
        };
    }

    render() {
        return (
            <section className="docs-page__container">
                <h2 className="docs-page__h2">Copyable Text Box</h2>
                <Markup.ReactMarkupCodePreview>
                    {`
                    <CopyableTextBox value="https://example.com/api/v1/resource/12345" />
                `}
                </Markup.ReactMarkupCodePreview>
                <p className="docs-page__paragraph">
                    A read-only text box with a bordered gray background and a copy button. Perfect for displaying URLs,
                    API keys, or other text that users need to copy.
                </p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <div className="docs-page__content-row">
                            <div className="form__row" style={{maxWidth: '60rem'}}>
                                <CopyableTextBox value={this.state.value} data-test-id="copyable-text-box-example" />
                            </div>
                        </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>
                        {`
                        <CopyableTextBox
                            value="${this.state.value}"
                            data-test-id="copyable-text-box-example"
                        />
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">Examples</h3>

                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <div className="docs-page__content-row">
                            <div className="form__row" style={{maxWidth: '60rem'}}>
                                <CopyableTextBox
                                    label="API Endpoint"
                                    value="https://api.example.com/v2/users"
                                    helperText="Use this endpoint to fetch user data from the API"
                                />
                            </div>
                            <div className="form__row" style={{maxWidth: '60rem', background: 'white'}}>
                                <CopyableTextBox
                                    label="Authentication Token"
                                    size="small"
                                    value="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIn0"
                                    helperText="Keep this token secure and do not share it with anyone"
                                />
                            </div>
                            <div className="form__row" style={{maxWidth: '60rem'}}>
                                <CopyableTextBox size="large" label="Short Text" value="Example" />
                            </div>
                        </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>
                        {`
                        <div className="docs-page__content-row">
                            <div className="form__row" style={{maxWidth: '60rem'}}>
                                <CopyableTextBox
                                    label='API Endpoint'
                                    value="https://api.example.com/v2/users"
                                    helperText="Use this endpoint to fetch user data from the API"
                                />
                            </div>
                            <div className="form__row" style={{maxWidth: '60rem'}}>
                                <CopyableTextBox
                                    label='Authentication Token'
                                    value="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIn0"
                                    helperText="Keep this token secure and do not share it with anyone"
                                />
                            </div>
                            <div className="form__row" style={{maxWidth: '60rem'}}>
                                <CopyableTextBox label='Short Text' value="Example" />
                            </div>
                        </div>
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">Props</h3>
                <PropsList>
                    <Prop
                        name="value"
                        isRequired={true}
                        type="string"
                        default="/"
                        description="The text content to display and copy."
                    />
                    <Prop name="label" isRequired={false} type="string" default="/" description="Label" />
                    <Prop name="helperText" isRequired={false} type="string" default="/" description="Helper text" />
                    <Prop
                        name="data-test-id"
                        isRequired={false}
                        type="string"
                        default="/"
                        description="Test identifier for automated testing."
                    />
                </PropsList>
            </section>
        );
    }
}
