import * as React from 'react';
import * as Markup from '../../js/react';
import * as Components from '../playgrounds/react-playgrounds/components/Index';

import { Checkbox, CheckboxButton, CheckGroup, CheckButtonGroup, Alert, Prop, PropsList } from '../../../app-typescript';

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
    value16: boolean;
    value17: boolean;
    value18: boolean;
    value19: boolean;
    value20: boolean;
    value21: boolean;
    value22: boolean;
    value23: boolean;
    value24: boolean;
    value25: boolean;
    value26: boolean;
    value27: boolean;
    value28: boolean;
    value29: boolean;
    value30: boolean;
    value31: boolean;
    value32: boolean;
    value33: boolean;
    value34: boolean;
    value35: boolean;
    value36: boolean;
    value37: boolean;
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
            value16: false,
            value17: false,
            value18: false,
            value19: false,
            value20: false,
            value21: false,
            value22: false,
            value23: false,
            value24: false,
            value25: false,
            value26: false,
            value27: false,
            value28: false,
            value29: false,
            value30: false,
            value31: false,
            value32: false,
            value33: false,
            value34: false,
            value35: false,
            value36: false,
            value37: false,
        };
    }

    render() {
        return (
            <section className="docs-page__container">
                <h2 className="docs-page__h2">Checkbox</h2>
                <p className="docs-page__paragraph"></p>
                <Markup.ReactMarkupCodePreview>{`
                    <Checkbox checked={value1} label={{text:'Checkbox label right'}} 
                              onChange={(value) => this.setState(() => ({ value1: value }))} />
                `}
                </Markup.ReactMarkupCodePreview>
                <h3 className="docs-page__h3">Basic Checkbox</h3>
                <p className="docs-page__paragraph">The label of the checkbox is by default always on the right. Although it's not in line with Superdesk design standards the label can also be placed to the left, by addind the prop <code>labelSide='left'</code>.</p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <p className="docs-page__paragraph">// Label on the right (default)</p>
                        <div className='form__row'>
                            <CheckGroup>
                                <Checkbox checked={this.state.value1} label={{text:'Checkbox label right'}} onChange={(value) => this.setState(() => ({ value1: value }))} />
                                <Checkbox checked={this.state.value2} label={{text:'Check me!'}} onChange={(value) => this.setState(() => ({ value2: value }))} />
                                <Checkbox checked={this.state.value3} label={{text:'Check me too!'}} onChange={(value) => this.setState(() => ({ value3: value }))} />
                                <Checkbox checked={this.state.value4} label={{text:'I"m disabled:('}} disabled= {true} onChange={(value) => this.setState(() => ({ value4: value }))} />
                                <Checkbox checked={this.state.value5} label={{text:"I'm disabled and checked :("}} disabled= {true} onChange={(value) => this.setState(() => ({ value5: value }))} />
                            </CheckGroup>
                        </div>
                        <p className="docs-page__paragraph docs-page__paragraph--topMarginL">// Label on the left</p>
                        <p className="docs-page__paragraph--small">This option should be avoided in Superdesk.</p>
                        <div className='form__row'>
                            <CheckGroup>
                                <Checkbox checked={this.state.value6} label={{text:'Checkbox label left', side:'left'}} onChange={(value) => this.setState(() => ({ value6: value }))} />
                            </CheckGroup>
                        </div>
                        <p className="docs-page__paragraph docs-page__paragraph--topMarginL">// Checkbox with custom values</p>
                        <div className='form__row'>
                            <CheckGroup>
                                <Checkbox checked={this.state.value7} label={{text:'Checkbox with custom values'}} onChange={(value) => this.setState(() => ({ value7: value }))} />
                            </CheckGroup>
                        </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        // Label on the right (default)
                        <CheckGroup>
                            <Checkbox checked={value1} label={{text:'Checkbox label right'}}
                                      onChange={(value) => this.setState(() => ({ value1: value }))} />
                            <Checkbox checked={value2} label={{text:'Check me!'}}
                                      onChange={(value) => this.setState(() => ({ value2: value }))} />
                            <Checkbox checked={value3} label={{text:'Check me too!'}}
                                      onChange={(value) => this.setState(() => ({ value3: value }))} />
                            <Checkbox checked={value4} label={{text:"I'm disabled:("}} disabled={true}
                                      onChange={(value) => this.setState(() => ({ value4: value }))} />
                            <Checkbox checked={value5} label={{text:"I'm disabled and checked :("}} disabled={true}
                                      onChange={(value) => this.setState(() => ({ value5: value }))} />
                        </CheckGroup>

                        // Label on the left
                        <CheckGroup>
                            <Checkbox checked={value6} label={{text:'Checkbox label left', side:'left'}}
                                      onChange={(value) => this.setState(() => ({ value6: value }))} />
                        </CheckGroup>

                        // Checkbox with custom values
                        <CheckGroup>
                            <Checkbox checked={value7} label={{text:'Checkbox with custom values'}}
                                      onChange={(value) => this.setState(() => ({ value7: value }))} />
                        </CheckGroup>
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <Components.GraphicButtonsGroup>
                    <Components.GraphicButton graphic='design' text='Checkbox usage guidelines' smallText='Design guidelines' link='#/design/checkbox-and-radio' />
                </Components.GraphicButtonsGroup>
                <h3 className="docs-page__h3">Checkbox groups</h3>
                <p className="docs-page__paragraph"><code>CheckGroup</code> is a helpful wrapper component used to group <code>Checkbox</code> components. By default the checkboxes are grouped horizontaly. To group them verticaly – in a list-like view – add the prop <code>orientation='vertical'</code> to the <code>CheckGroup</code> component.</p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <p className="docs-page__paragraph">// Horizontal group (default)</p>
                        <div className='form__group'>
                            <CheckGroup>
                                <Checkbox checked={this.state.value16} label={{text:'Checkbox one'}} onChange={(value) => this.setState(() => ({ value16: value }))} />
                                <Checkbox checked={this.state.value17} label={{text:'Checkbox two'}} onChange={(value) => this.setState(() => ({ value17: value }))} />
                                <Checkbox checked={this.state.value18} label={{text:'Checkbox three'}} onChange={(value) => this.setState(() => ({ value18: value }))} />
                            </CheckGroup>
                        </div>
                        <p className="docs-page__paragraph docs-page__paragraph--topMarginL">// Vertical group</p>
                        <div className='form__group'>
                            <CheckGroup orientation='vertical'>
                                <Checkbox checked={this.state.value19} label={{text:'Checkbox one'}} onChange={(value) => this.setState(() => ({ value19: value }))} />
                                <Checkbox checked={this.state.value20} label={{text:'Checkbox two'}} onChange={(value) => this.setState(() => ({ value20: value }))} />
                                <Checkbox checked={this.state.value21} label={{text:'Checkbox three'}} onChange={(value) => this.setState(() => ({ value21: value }))} />
                            </CheckGroup>
                        </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        // Horizontal group (default)
                        <CheckGroup>
                            <Checkbox checked={value16} label={{text:'Checkbox one'}}
                                      onChange={(value) => this.setState(() => ({ value16: value }))} />
                            <Checkbox checked={value17} label={{text:'Checkbox two'}}
                                      onChange={(value) => this.setState(() => ({ value17: value }))} />
                            <Checkbox checked={value18} label={{text:'Checkbox three'}}
                                      onChange={(value) => this.setState(() => ({ value18: value }))} />
                        </CheckGroup>

                        // Vertical group
                        <CheckGroup orientation='vertical'>
                            <Checkbox checked={value19} label={{text:'Checkbox one'}}
                                      onChange={(value) => this.setState(() => ({ value19: value }))} />
                            <Checkbox checked={value20} label={{text:'Checkbox two'}}
                                      onChange={(value) => this.setState(() => ({ value20: value }))} />
                            <Checkbox checked={value21} label={{text:'Checkbox three'}}
                                      onChange={(value) => this.setState(() => ({ value21: value }))} />
                        </CheckGroup>
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">Button style checkbox</h3>
                <Markup.ReactMarkupCodePreview>{`
                    <CheckButtonGroup>
                        <CheckboxButton checked={value1} label={{text:'Button Checkbox one'}} 
                                        onChange={(value) => this.setState(() => ({ value1: value }))} />
                        <CheckboxButton checked={value2} label={{text:'Button Checkbox two'}} 
                                        onChange={(value) => this.setState(() => ({ value2: value }))} />
                    </CheckButtonGroup>
                `}
                </Markup.ReactMarkupCodePreview>
                <p className="docs-page__paragraph">The <code>CheckboxButton</code> component shares the same functionality as the Checkbox component but has a different visual appearance. Any icon from the <a className='link' href='#/components/icons' target='blank'>icon font</a> can be added to the component by specifying a value (icon name without the <code>icon-</code> prefix) for the optional <code>icon</code> prop.</p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <p className="docs-page__paragraph docs-page__paragraph--topMarginL">// Button style checkbox</p>
                        <div className='form__group'>
                            <CheckButtonGroup>
                                <CheckboxButton checked={this.state.value8} label='Button style checkbox' onChange={(value) => this.setState(() => ({ value8: value }))} />
                                <CheckboxButton checked={this.state.value9} label='Check this out' onChange={(value) => this.setState(() => ({ value9: value }))} />
                                <CheckboxButton checked={this.state.value10} label='Check this too!' onChange={(value) => this.setState(() => ({ value10: value }))} />
                                <CheckboxButton checked={this.state.value11} label="U can't touch this" disabled={true} onChange={(value) => this.setState(() => ({ value11: value }))} />
                            </CheckButtonGroup>
                        </div>
                        <p className="docs-page__paragraph docs-page__paragraph--topMarginL">// Button style with icon</p>
                        <div className='form__group'>
                            <CheckButtonGroup>
                                <CheckboxButton checked={this.state.value12} label='Button style with icon' icon='th-list' onChange={(value) => this.setState(() => ({ value12: value }))} />
                                <CheckboxButton checked={this.state.value13} label='I have an icon!' icon='th' onChange={(value) => this.setState(() => ({ value13: value }))} />
                                <CheckboxButton checked={this.state.value14} label='Yeah, me too!' icon='th-large' onChange={(value) => this.setState(() => ({ value14: value }))} />
                                <CheckboxButton checked={this.state.value15} label='I have an icon :)' icon='star' onChange={(value) => this.setState(() => ({ value15: value }))} />
                            </CheckButtonGroup>
                        </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        // Button style checkbox
                        <CheckButtonGroup>
                            <CheckboxButton checked={value8} label='Button style checkbox'
                                            onChange={(value) => this.setState(() => ({ value8: value }))} />
                            <CheckboxButton checked={value9} label='Check this out'
                                            onChange={(value) => this.setState(() => ({ value9: value }))} />
                            <CheckboxButton checked={value10} label='Check this too!'
                                            onChange={(value) => this.setState(() => ({ value10: value }))} />
                            <CheckboxButton checked={value11} label="U can't touch this"
                                            onChange={(value) => this.setState(() => ({ value11: value }))} />
                        </CheckButtonGroup>

                        // Button style with icon
                        <CheckButtonGroup>
                            <CheckboxButton checked={value12} label='Button style with icon' icon='th-list'
                                            onChange={(value) => this.setState(() => ({ value12: value }))} />
                            <CheckboxButton checked={value13} label='I have an icon!' icon='th'
                                            onChange={(value) => this.setState(() => ({ value13: value }))} />
                            <CheckboxButton checked={value14} label='Yeah, me too!' icon='th-large'
                                            onChange={(value) => this.setState(() => ({ value14: value }))} />
                            <CheckboxButton checked={value15} label='I have an icon :)' icon='star'
                                            onChange={(value) => this.setState(() => ({ value15: value }))} />
                        </CheckButtonGroup>
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">Button style checkbox Groups</h3>          
                <p className="docs-page__paragraph"><code>CheckButtonGroup</code> is a helpful wrapper component used to group <code>CheckboxButton</code> components. By default the CheckboxButton components are grouped horizontaly. A few more options are available compared to the <code>CheckGroup</code> component – alignment (left, right and center) and grid layout. </p>
                <Alert style='hollow' size='small' type='primary'>
                    NOTE: Alignment will work only in parent elements with display: flex;
                </Alert>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <p className="docs-page__paragraph docs-page__paragraph--topMarginL">// Left (default)</p>
                        <div className='form__row form__row--flex docs-page__test-helper-2'>
                            <CheckButtonGroup>
                                <CheckboxButton checked={this.state.value22} label='Option one' onChange={(value) => this.setState(() => ({ value22: value }))} />
                                <CheckboxButton checked={this.state.value23} label='Option two' onChange={(value) => this.setState(() => ({ value23: value }))} />
                            </CheckButtonGroup>
                        </div>
                        <p className="docs-page__paragraph docs-page__paragraph--topMarginL">// Right</p>
                        <div className='form__row form__row--flex docs-page__test-helper-2'>
                            <CheckButtonGroup align='right'>
                                <CheckboxButton checked={this.state.value24} label='Option one' onChange={(value) => this.setState(() => ({ value24: value }))} />
                                <CheckboxButton checked={this.state.value25} label='Option two' onChange={(value) => this.setState(() => ({ value25: value }))} />
                            </CheckButtonGroup>
                        </div>
                        <p className="docs-page__paragraph docs-page__paragraph--topMarginL">// Center</p>
                        <div className='form__row form__row--flex docs-page__test-helper-2'>
                            <CheckButtonGroup align='center'>
                                <CheckboxButton checked={this.state.value26} label='Option one' onChange={(value) => this.setState(() => ({ value26: value }))} />
                                <CheckboxButton checked={this.state.value27} label='Option two' onChange={(value) => this.setState(() => ({ value27: value }))} />
                            </CheckButtonGroup>
                        </div>
                        <p className="docs-page__paragraph docs-page__paragraph--topMarginL">// Left + Center + Right</p>
                        <div className='form__row form__row--flex docs-page__test-helper-2'>
                            <CheckButtonGroup>
                                <CheckboxButton checked={this.state.value28} label='One' onChange={(value) => this.setState(() => ({ value28: value }))} />
                                <CheckboxButton checked={this.state.value29} label='Two' onChange={(value) => this.setState(() => ({ value29: value }))} />
                            </CheckButtonGroup>

                            <CheckButtonGroup align='center'>
                                <CheckboxButton checked={this.state.value30} label='Three' onChange={(value) => this.setState(() => ({ value30: value }))} />
                                <CheckboxButton checked={this.state.value31} label='Four' onChange={(value) => this.setState(() => ({ value31: value }))} />
                            </CheckButtonGroup>

                            <CheckButtonGroup align='right'>
                                <CheckboxButton checked={this.state.value32} label='Five' onChange={(value) => this.setState(() => ({ value32: value }))} />
                                <CheckboxButton checked={this.state.value33} label='Six' onChange={(value) => this.setState(() => ({ value33: value }))} />
                            </CheckButtonGroup>
                        </div>
                        <p className="docs-page__paragraph docs-page__paragraph--topMarginL">// Grid</p>
                        <div className='form__row form__row--flex docs-page__test-helper-2' style={{width:400}}>
                            <CheckButtonGroup grid={true}>
                                <CheckboxButton checked={this.state.value34} label='Option one' onChange={(value) => this.setState(() => ({ value34: value }))} />
                                <CheckboxButton checked={this.state.value35} label='Option two' onChange={(value) => this.setState(() => ({ value35: value }))} />
                                <CheckboxButton checked={this.state.value36} label='Option three' onChange={(value) => this.setState(() => ({ value36: value }))} />
                                <CheckboxButton checked={this.state.value37} label='Option four' onChange={(value) => this.setState(() => ({ value37: value }))} />
                            </CheckButtonGroup>
                        </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        // Left (default)
                        <CheckButtonGroup>
                            <CheckboxButton checked={value22} label='Option one'
                                            onChange={(value) => this.setState(() => ({ value22: value }))} />
                            <CheckboxButton checked={value23} label='Option two'
                                            onChange={(value) => this.setState(() => ({ value23: value }))} />
                        </CheckButtonGroup>

                        // Right
                        <CheckButtonGroup align='right'>
                            <CheckboxButton checked={value24} label='Option one'
                                            onChange={(value) => this.setState(() => ({ value24: value }))} />
                            <CheckboxButton checked={value25} label='Option two'
                                            onChange={(value) => this.setState(() => ({ value25: value }))} />
                        </CheckButtonGroup>
                        
                        // Center
                        <CheckButtonGroup align='center'>
                            <CheckboxButton checked={value26} label='Option one'
                                            onChange={(value) => this.setState(() => ({ value26: value }))} />
                            <CheckboxButton checked={value27} label='Option two'
                                            onChange={(value) => this.setState(() => ({ value27: value }))} />
                        </CheckButtonGroup>

                        // Left + Center + Right
                        <div className='form__row form__row--flex'>
                            <CheckButtonGroup>
                                <CheckboxButton checked={value28} label='One'
                                                onChange={(value) => this.setState(() => ({ value28: value }))} />
                                <CheckboxButton checked={value29} label='Two'
                                                onChange={(value) => this.setState(() => ({ value29: value }))} />
                            </CheckButtonGroup>

                            <CheckButtonGroup align='center'>
                                <CheckboxButton checked={value30} label='Three'
                                                onChange={(value) => this.setState(() => ({ value30: value }))} />
                                <CheckboxButton checked={value31} label='Four'
                                                onChange={(value) => this.setState(() => ({ value31: value }))} />
                            </CheckButtonGroup>

                            <CheckButtonGroup align='right'>
                                <CheckboxButton checked={value32} label='Five'
                                                onChange={(value) => this.setState(() => ({ value32: value }))} />
                                <CheckboxButton checked={value33} label='Six'
                                                onChange={(value) => this.setState(() => ({ value33: value }))} />
                            </CheckButtonGroup>
                        </div>
                        
                        // Grid
                        <CheckButtonGroup grid={true}>
                            <CheckboxButton checked={value34} label='Option one'
                                            onChange={(value) => this.setState(() => ({ value34: value }))} />
                            <CheckboxButton checked={value35} label='Option two'
                                            onChange={(value) => this.setState(() => ({ value35: value }))} />
                            <CheckboxButton checked={value36} label='Option three'
                                            onChange={(value) => this.setState(() => ({ value36: value }))} />
                            <CheckboxButton checked={value37} label='Option four'
                                            onChange={(value) => this.setState(() => ({ value37: value }))} />
                        </CheckButtonGroup>
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">Props</h3>
                <p className="docs-page__paragraph">Checkbox</p>
                <PropsList>
                    <Prop name='checked' isRequered={true} type='boolean' default='false' description='The checked state of the input.'/>
                    <Prop name='label text' isRequered={true} type='string' default='/' description='Label text value.'/>
                    <Prop name='label side' isRequered={false} type='left | right' default='right' description='Position of label relative to the button.'/>
                    <Prop name='disabled' isRequered={false} type='boolean' default='false' description='The disabled state of Checkbox.'/>
                </PropsList>
                <p className="docs-page__paragraph">Checkbox Button</p>
                <PropsList>
                    <Prop name='checked' isRequered={true} type='boolean' default='/' description='The checked state of the input'/>
                    <Prop name='label' isRequered={true} type='string' default='/' description='Label text value.'/>
                    <Prop name='icon' isRequered={false} type='string' default='/' description='Icon class name without the icon- part.'/>
                    <Prop name='iconOnly' isRequered={false} type='boolean' default='false' description='Just icon, no label.'/>
                    <Prop name='disabled' isRequered={false} type='boolean' default='false' description='The disabled state of CheckboxButton'/>
                </PropsList>
            </section>
        )
    }
}
