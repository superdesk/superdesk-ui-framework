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
                            <Radio value={this.state.value1} options={[{value:'test1', label:'Default label'}, {value:'test2', label:'Default label'}, {value:'test3', label:'Default label'}, {value:'test4', label:'Disabled state', disabled: true}]} onChange={(value) => this.setState(() => ({ value1: value }))}/>
                        </div>
                        <p className="docs-page__paragraph">// Basic - labels on the left</p>
                        <div className='form__row'>
                            <Radio value={this.state.value2} options={[{value:'test5', label:'Label on the left'}, {value:'test6', label:'Label on the left'}, {value:'test7', label:'Label on the left'}]} side='left' onChange={(value) => this.setState(() => ({ value2: value }))}/>
                        </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>
                       
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>
            </section>
        )
    }
}
