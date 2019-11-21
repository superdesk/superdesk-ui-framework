import * as React from 'react';
import * as Markup from '../../js/react';

import { Switch } from '../../../app-typescript';

interface IState {
    value1: boolean;
    value2: boolean;
}

export default class SwitchDoc extends React.Component<{}, IState> {
    constructor(props) {
        super(props);

        this.state = {
            value1: false,
            value2: true,
        };
    }

    render() {
        return (
            <section className="docs-page__container">
                <h2 className="docs-page__h2">Switch</h2>
                <p></p>

                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <div className="form__row">
                            <label>Label on left {this.state.value1}</label>
                            <Switch value={this.state.value1} onChange={(value) => this.setState(() => ({ value1: value }))} />
                        </div>
                        <div className="form__row">
                            <Switch value={this.state.value2} onChange={(value) => this.setState(() => ({ value2: value }))} disabled={true} />
                            <label>Label on right with disabled state</label>
                        </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>
                        This is also some test content
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>
            </section>
        )
    }
}
