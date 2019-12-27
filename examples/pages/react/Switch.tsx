import * as React from 'react';
import * as Markup from '../../js/react';
import * as Components from '../playgrounds/react-playgrounds/components/Index';

import { Switch } from '../../../app-typescript';

interface IState {
    value1: boolean;
    value2: boolean;
    value3: boolean;
}

export default class SwitchDoc extends React.Component<{}, IState> {
    constructor(props) {
        super(props);

        this.state = {
            value1: false,
            value2: true,
            value3: false,
        };
    }

    render() {
        return (
            <section className="docs-page__container">
                <h2 className="docs-page__h2">Switch</h2>
                <p></p>
                <Markup.ReactMarkupCodePreview>{`
                    <Switch value={value1} onChange={(value) => this.setState(() => ({ value1: value }))} />
                `}
                </Markup.ReactMarkupCodePreview>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                    <p className="docs-page__paragraph docs-page__paragraph--topMarginL">// Label on the right (default)</p>
                        <div className="form__row">
                            <Switch value={this.state.value1} onChange={(value) => this.setState(() => ({ value1: value }))} />
                            <label>Label on right {this.state.value1}</label>
                        </div>
                        <p className="docs-page__paragraph docs-page__paragraph--topMarginL">// Labels on the left</p>
                        <p className="docs-page__paragraph--small">This option should be used only in cases when the switch is aligned to the right.</p>
                        <div className="form__row">
                            <label>Label on left {this.state.value2}</label>
                            <Switch value={this.state.value2} onChange={(value) => this.setState(() => ({ value2: value }))} />
                        </div>
                        <p className="docs-page__paragraph docs-page__paragraph--topMarginL">// Disabled</p>
                        <div className="form__row">
                            <Switch value={this.state.value3} onChange={(value) => this.setState(() => ({ value3: value }))} disabled={true} />
                            <label>Label on right with disabled state</label>
                        </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        // Label on the right (default)
                            <Switch value={value1} onChange={(value) => this.setState(() => ({ value1: value }))}/>
                            
                        // Labels on the left
                            <Switch value={value2} onChange={(value) => this.setState(() => ({ value2: value }))}/>

                        // Disabled
                            <Switch value={value3} onChange={(value) => this.setState(() => ({ value3: value }))} disabled={true}/>
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>
                <Components.GraphicButtonsGroup>
                    <Components.GraphicButton graphic='design' text='Switch usage guidelines' smallText='Design guidelines' link='#/design/switch' />
                </Components.GraphicButtonsGroup>
            </section>
        )
    }
}
