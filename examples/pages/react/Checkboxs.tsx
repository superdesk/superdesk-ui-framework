import * as React from 'react';
import * as Markup from '../../js/react';

import { Checkbox, CheckboxButton, CheckGroup, CheckButtonGroup } from '../../../app-typescript';

interface IState {
    value1: boolean;
    value2: boolean;
    value3: boolean;
    value4: boolean;
    value5: boolean;
    value6: boolean;
    value7: boolean;
    value8: boolean;
    value9: boolean;
    value10: boolean;
    value11: boolean;
    value12: boolean;
    value13: boolean;
    value14: boolean;
    value15: boolean;
}


export default class CheckboxsDoc extends React.Component<{}, IState> {
    constructor(props) {
        super(props);

        this.state = {
            value1: false,
            value2: false,
            value3: false,
            value4: false,
            value5: true,
            value6: false,
            value7: false,
            value8: false,
            value9: false,
            value10: false,
            value11: false,
            value12: false,
            value13: false,
            value14: false,
            value15: false,
        };
    }

    render() {
        return (
            <section className="docs-page__container">
                <h2 className="docs-page__h2">Checkbox</h2>
                <p className="docs-page__paragraph"></p>
                <Markup.ReactMarkupCodePreview>{`
                    <CheckGroup>
                        <Checkbox checked={this.state.value1} label={{text:'Checkbox label right'}} 
                                  onChange={(value) => this.setState(() => ({ value1: value }))}/>
                    </CheckGroup>
                `}
                </Markup.ReactMarkupCodePreview>
                <h3 className="docs-page__h3">Basic Checkbox</h3>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <p className="docs-page__paragraph">// Basic SD checkbox</p>
                        <div className='form__row'>
                            <CheckGroup>
                                <Checkbox checked={this.state.value1} label={{text:'Checkbox label right'}} onChange={(value) => this.setState(() => ({ value1: value }))}/>
                                <Checkbox checked={this.state.value2} label={{text:'Check me!'}} onChange={(value) => this.setState(() => ({ value2: value }))}/>
                                <Checkbox checked={this.state.value3} label={{text:'Check me too!'}} onChange={(value) => this.setState(() => ({ value3: value }))}/>
                                <Checkbox checked={this.state.value4} label={{text:'I"m disabled:('}} disabled= {true} onChange={(value) => this.setState(() => ({ value4: value }))}/>
                                <Checkbox checked={this.state.value5} label={{text:"I'm disabled and checked :("}} disabled= {true} onChange={(value) => this.setState(() => ({ value5: value }))}/>
                            </CheckGroup>
                        </div>
                        <p className="docs-page__paragraph docs-page__paragraph--topMarginL">// Label on the left</p>
                        <p className="" style= {{margin: '-10px 0 20px', color: '#747474'}}>This option should be avoided in general use.</p>
                        <div className='form__row'>
                            <CheckGroup>
                                <Checkbox checked={this.state.value6} label={{text:'Checkbox label left', side:'left'}} onChange={(value) => this.setState(() => ({ value6: value }))}/>
                            </CheckGroup>
                        </div>
                        <p className="docs-page__paragraph docs-page__paragraph--topMarginL">// Checkbox with custom values</p>
                        <div className='form__row'>
                            <CheckGroup>
                                <Checkbox checked={this.state.value7} label={{text:'Checkbox with custom values'}} onChange={(value) => this.setState(() => ({ value7: value }))}/>
                            </CheckGroup>
                        </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        // Basic SD checkbox
                        <CheckGroup>
                            <Checkbox checked={this.state.value1} label={{text:'Checkbox label right'}}
                                      onChange={(value) => this.setState(() => ({ value1: value }))}/>
                            <Checkbox checked={this.state.value2} label={{text:'Check me!'}}
                                      onChange={(value) => this.setState(() => ({ value2: value }))}/>
                            <Checkbox checked={this.state.value3} label={{text:'Check me too!'}}
                                      onChange={(value) => this.setState(() => ({ value3: value }))}/>
                            <Checkbox checked={this.state.value4} label={{text:'I"m disabled:('}} disabled= {true}
                                      onChange={(value) => this.setState(() => ({ value4: value }))}/>
                            <Checkbox checked={this.state.value5} label={{text:"I'm disabled and checked :("}} disabled= {true}
                                      onChange={(value) => this.setState(() => ({ value5: value }))}/>
                        </CheckGroup>

                        // Label on the left
                        <CheckGroup>
                            <Checkbox checked={this.state.value6} label={{text:'Checkbox label left', side:'left'}}
                                      onChange={(value) => this.setState(() => ({ value6: value }))}/>
                        </CheckGroup>

                        // Checkbox with custom values
                        <CheckGroup>
                            <Checkbox checked={this.state.value7} label={{text:'Checkbox with custom values'}}
                                      onChange={(value) => this.setState(() => ({ value7: value }))}/>
                        </CheckGroup>
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>


                <h3 className="docs-page__h3">Button style checkbox</h3>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <p className="docs-page__paragraph docs-page__paragraph--topMarginL">// Button style checkbox</p>
                        <div className='form__group'>
                            <CheckButtonGroup>
                                <CheckboxButton checked={this.state.value8} label={{text:'Button style checkbox'}} onChange={(value) => this.setState(() => ({ value8: value }))}/>
                                <CheckboxButton checked={this.state.value9} label={{text:'Check this out'}} onChange={(value) => this.setState(() => ({ value9: value }))}/>
                                <CheckboxButton checked={this.state.value10} label={{text:'Check this too!'}} onChange={(value) => this.setState(() => ({ value10: value }))}/>
                                <CheckboxButton checked={this.state.value11} label={{text:"U can't touch this"}} disabled={true} onChange={(value) => this.setState(() => ({ value11: value }))}/>
                            </CheckButtonGroup>
                        </div>
                        <p className="docs-page__paragraph docs-page__paragraph--topMarginL">// Button style with icon</p>
                        <div className='form__group'>
                            <CheckButtonGroup>
                                <CheckboxButton checked={this.state.value12} label={{text:'Button style with icon'}} icon='th-list' onChange={(value) => this.setState(() => ({ value12: value }))}/>
                                <CheckboxButton checked={this.state.value13} label={{text:'I have an icon!'}} icon='th' onChange={(value) => this.setState(() => ({ value13: value }))}/>
                                <CheckboxButton checked={this.state.value14} label={{text:'Yeah, me too!'}} icon='th-large' onChange={(value) => this.setState(() => ({ value14: value }))}/>
                                <CheckboxButton checked={this.state.value15} label={{text:'I have an icon :)'}} icon='star' onChange={(value) => this.setState(() => ({ value15: value }))}/>
                            </CheckButtonGroup>
                        </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        // Button style checkbox
                        <CheckButtonGroup>
                            <CheckboxButton checked={this.state.value8} label={{text:'Button style checkbox'}}
                                            onChange={(value) => this.setState(() => ({ value8: value }))}/>
                            <CheckboxButton checked={this.state.value9} label={{text:'Check this out'}}
                                            onChange={(value) => this.setState(() => ({ value9: value }))}/>
                            <CheckboxButton checked={this.state.value10} label={{text:'Check this too!'}}
                                            onChange={(value) => this.setState(() => ({ value10: value }))}/>
                            <CheckboxButton checked={this.state.value11} label={{text:"U can't touch this"}}
                                            onChange={(value) => this.setState(() => ({ value11: value }))}/>
                        </CheckButtonGroup>

                        // Button style with icon
                        <CheckButtonGroup>
                            <CheckboxButton checked={this.state.value12} label={{text:'Button style with icon'}} icon='th-list'
                                            onChange={(value) => this.setState(() => ({ value12: value }))}/>
                            <CheckboxButton checked={this.state.value13} label={{text:'I have an icon!'}} icon='th'
                                            onChange={(value) => this.setState(() => ({ value13: value }))}/>
                            <CheckboxButton checked={this.state.value14} label={{text:'Yeah, me too!'}} icon='th-large'
                                            onChange={(value) => this.setState(() => ({ value14: value }))}/>
                            <CheckboxButton checked={this.state.value15} label={{text:'I have an icon :)'}} icon='star'
                                            onChange={(value) => this.setState(() => ({ value15: value }))}/>
                        </CheckButtonGroup>
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>
            </section>
        )
    }
}
