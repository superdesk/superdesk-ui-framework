import * as React from 'react';
import * as Markup from '../../js/react';

import { Radio, RadioButton, CheckGroup, CheckButtonGroup } from '../../../app-typescript';

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
                <p className="docs-page__paragraph"></p>
                <Markup.ReactMarkupCodePreview>{`
                    <CheckGroup>
                        <Radio value={this.state.value1} 
                               options="{[{value:'test1', label:'Default label'}, {value:'test2', label:'Default label'}]}"/>
                    </CheckGroup>
                `}
                </Markup.ReactMarkupCodePreview>
                <h3 className="docs-page__h3">Basic Radio button</h3>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <p className="docs-page__paragraph">// Label on the right (default)</p>
                        <div className='form__group'>
                            <CheckGroup>
                                <Radio value={this.state.value1} options={[{value:'test1', label:'Default label'}, {value:'test2', label:'Default label'}, {value:'test3', label:'Default label'}, {value:'test4', label:'Disabled state', disabled: true}]} onChange={(value) => this.setState(() => ({ value1: value }))}/>
                            </CheckGroup>
                        </div>
                        <p className="docs-page__paragraph docs-page__paragraph--topMarginL">// Labels on the left</p>
                        <p className="" style= {{margin: '-10px 0 20px', color: '#747474'}}>This option should be avoided in general use.</p>
                        <div className='form__group'>
                            <CheckGroup>
                                <Radio value={this.state.value2} options={[{value:'test5', label:'Label on the left'}, {value:'test6', label:'Label on the left'}, {value:'test7', label:'Label on the left'}]} labelSide='left' onChange={(value) => this.setState(() => ({ value2: value }))}/>
                            </CheckGroup>
                        </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        // Label on the right (default)
                        <CheckGroup>
                            <Radio value={this.state.value1} options="{[{value:'test1', label:'Default label'}, {value:'test2', label:'Default label'}, {value:'test3', label:'Default label'}, {value:'test4', label:'Disabled state', disabled: true}]}"/>
                        </CheckGroup>

                        // Labels on the left
                        <CheckGroup>
                            <Radio value={this.state.value2} options="{[{value:'test5', label:'Label on the left'}, {value:'test6', label:'Label on the left'}, {value:'test7', label:'Label on the left'}]}" labelSide='left'/>
                        </CheckGroup>
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">Button style radio</h3>

                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>

                        <p className="docs-page__paragraph docs-page__paragraph--topMarginL">// Button styled radio buttons</p>
                        <div className='form__group'>
                            <CheckButtonGroup>
                                <RadioButton value={this.state.value3} options={[{value:'test6', label:'Button style radio'}, {value:'test7', label:'Button style'}, {value:'test8', label:'Button style'}, {value:'test9', label:'Button style disabled', disabled:true}]} onChange={(value) => this.setState(() => ({ value3: value }))}/>
                            </CheckButtonGroup>
                        </div>
                        <p className="docs-page__paragraph docs-page__paragraph--topMarginL">// Button style radio with icon</p>
                        <div className='form__group'>
                            <CheckButtonGroup>
                                <RadioButton value={this.state.value4} options={[{value:'test10', label:'Radio button with icon', icon:'list-view'}, {value:'test11', label:'I have an icon!', icon:'grid-view'}, {value:'test12', label:'Yeah, me too!', icon:'kanban-view'}]} onChange={(value) => this.setState(() => ({ value4: value }))}/>
                            </CheckButtonGroup>
                        </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        // Button styled radio buttons
                            <CheckButtonGroup>
                                <RadioButton value={this.state.value3} options="{[{value:'test6', label:'Button style radio'}, {value:'test7', label:'Button style'}, {value:'test8', label:'Button style'}, {value:'test9', label:'Button style disabled', disabled:true}]}"/>
                            </CheckButtonGroup>

                        // Button styled radio with icon
                            <CheckButtonGroup>
                                <RadioButton value={this.state.value4} options="{[{value:'test10', label:'Radio button with icon', icon:'list-view'}, {value:'test11', label:'I have an icon!', icon:'grid-view'}, {value:'test12', label:'Yeah, me too!', icon:'kanban-view'}]}"/>
                            </CheckButtonGroup>
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>
            </section>
        )
    }
}
