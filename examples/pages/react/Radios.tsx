import * as React from 'react';
import * as Markup from '../../js/react';

import { Radio, RadioButton } from '../../../app-typescript';

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
                            <Radio value={this.state.value2} options={[{value:'test5', label:'Label on the left'}, {value:'test6', label:'Label on the left'}, {value:'test7', label:'Label on the left'}]} labelSide='left' onChange={(value) => this.setState(() => ({ value2: value }))}/>
                        </div>
                        <p className="docs-page__paragraph docs-page__paragraph--topMarginL">// Button styled radio buttons</p>
                        <div className='form__row'>
                            <RadioButton value={this.state.value3} options={[{value:'test6', label:'Button style radio'}, {value:'test7', label:'Button style'}, {value:'test8', label:'Button style'}, {value:'test9', label:'Button style disabled', disabled:true}]} onChange={(value) => this.setState(() => ({ value3: value }))}/>
                        </div>
                        <p className="docs-page__paragraph docs-page__paragraph--topMarginL">// Button style radio with icon</p>
                        <div className='form__row'>
                            <RadioButton value={this.state.value4} options={[{value:'test10', label:'Radio button with icon', icon:'list-view'}, {value:'test11', label:'I have an icon!', icon:'grid-view'}, {value:'test12', label:'Yeah, me too!', icon:'kanban-view'}]} onChange={(value) => this.setState(() => ({ value4: value }))}/>
                        </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>
                       
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>
            </section>
        )
    }
}
