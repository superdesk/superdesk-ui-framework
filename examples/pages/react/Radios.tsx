import * as React from 'react';
import * as Markup from '../../js/react';

import { Radio } from '../../../app-typescript';

interface IState {
    value1: any;
    value2: any;
    value3: any;
    value4: any;
}

export default class RadiosDoc extends React.Component<{}, IState> {
    constructor(props) {
        super(props);

        this.state = {
            value1: true,
            value2: true,
            value3: true,
            value4: true,
        };
    }
    render() {
        return (
            <section className="docs-page__container">
                <h2 className="docs-page__h2">Radio button</h2>
                <p className="docs-page__paragraph">Radio buttons are created the same way the SD checkboxes with the addition of the property <code>type="radio"</code>.</p>

                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <p className="docs-page__paragraph">// Basic SD Radio buttons</p>
                        <div className='form__row'>
                            <Radio model={this.state.value1} values={[{value:'test1', text:'Default label'}, {value:'test2', text:'Default label'}, {value:'test3', text:'Default label'}, {value:'test4', text:'Disabled state', disabled: true}]} onClick={(value) => this.setState(() => ({ value1: value }))}/>
                        </div>
                        <p className="docs-page__paragraph">// Basic - labels on the left</p>
                        <div className='form__row'>
                            <Radio model={this.state.value2} values={[{value:'test5', text:'Label on the left'}, {value:'test6', text:'Label on the left'}, {value:'test7', text:'Label on the left'}]} side='left' onClick={(value) => this.setState(() => ({ value2: value }))}/>
                        </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>
                       
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>
            </section>
        )
    }
}
