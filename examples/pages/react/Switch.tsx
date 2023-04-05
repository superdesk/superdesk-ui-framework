import * as React from 'react';
import * as Markup from '../../js/react';
import * as Components from '../playgrounds/react-playgrounds/components/Index';

import { Switch, SwitchGroup, Prop, PropsList } from '../../../app-typescript';

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
}

export default class SwitchDoc extends React.Component<{}, IState> {
    constructor(props: Readonly<{}>) {
        super(props);

        this.state = {
            value1: false,
            value2: true,
            value3: false,
            value4: true,
            value5: false,
            value6: true,
            value7: true,
            value8: false,
            value9: false,
            value10: true,
            value11: false,
            value12: false,
        };
    }

    render() {
        return (
            <section className="docs-page__container">
                <h2 className="docs-page__h2">Switch</h2>
                <p></p>
                <Markup.ReactMarkupCodePreview>{`
                    <Switch label={{text:'Switch label'}} value={value1} onChange={(value) => this.setState(() => ({ value1: value }))} />
                `}
                </Markup.ReactMarkupCodePreview>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                    <p className="docs-page__paragraph docs-page__paragraph--topMarginL">// Label on the right (default)</p>
                        <div className="form__row">
                            <Switch label={{content:'Switch label right'}} value={this.state.value1} onChange={(value) => this.setState(() => ({ value1: value }))} />
                        </div>
                        <p className="docs-page__paragraph docs-page__paragraph--topMarginL">// Labels on the left</p>
                        <p className="docs-page__paragraph--small">This option should be used only in cases when the switch is aligned to the right.</p>
                        <div className="form__row">
                            <Switch label={{content:'Label on left', side: 'left'}} value={this.state.value2} onChange={(value) => this.setState(() => ({ value2: value }))} />
                        </div>
                        <p className="docs-page__paragraph docs-page__paragraph--topMarginL">// Disabled</p>
                        <div className="form__row">
                            <Switch label={{content:'Label on right with disabled state'}} value={this.state.value3} onChange={(value) => this.setState(() => ({ value3: value }))} disabled />
                        </div>
                        <p className="docs-page__paragraph docs-page__paragraph--topMarginL">// External label</p>
                        <div className="form__row">
                            <Switch label={{content:() => <label>External label</label>}} value={this.state.value12} onChange={(value) => this.setState(() => ({ value12: value }))} />
                        </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        // Label on the right (default)
                            <Switch label={{text:'Switch label right'}} value={this.state.value1} onChange={(value) => this.setState(() => ({ value1: value }))} />
                            
                        // Labels on the left
                            <Switch label={{text:'Label on left', side: 'left'}} value={this.state.value2} onChange={(value) => this.setState(() => ({ value2: value }))} />

                        // Disabled
                            <Switch label={{text:'Label on right with disabled state'}} value={this.state.value3} onChange={(value) => this.setState(() => ({ value3: value }))} disabled={true} />

                        // External label
                            <Switch label={{content:() => <label>External label</label>}} value={this.state.value12} onChange={(value) => this.setState(() => ({ value12: value }))} />
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">Switch groups</h3>
                <p className="docs-page__paragraph"><code>SwitchGroup</code> is a helpful wrapper component used to group <code>Switch</code> components. 
                By default the switches are grouped horizontaly. To group them verticaly – in a list-like view – add the prop <code>orientation='vertical'</code> 
                to the <code>SwitchGroup</code> component.</p>

                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <p className="docs-page__paragraph">// Vertical group (default)</p>
                        <div className='form__row'>
                            <SwitchGroup>
                                <Switch label={{content:'Vertical Switch 1'}} value={this.state.value6} onChange={(value) => this.setState(() => ({ value6: value }))} />
                                <Switch label={{content:'Vertical Switch 2'}} value={this.state.value7} onChange={(value) => this.setState(() => ({ value7: value }))} />
                                <Switch label={{content:'Vertical Switch 3'}} value={this.state.value8} onChange={(value) => this.setState(() => ({ value8: value }))} />
                            </SwitchGroup>
                        </div>
                        <p className="docs-page__paragraph docs-page__paragraph--topMarginL">// Vertical group with labels on the left</p>
                        <p className="docs-page__paragraph--small">This option should be used only in special cases and inside containers not wider than 400 pixels <br />
                        (e.g. menus, narrow modals or dialouges etc.). It should be used only in the combination with the labels on th eleft.</p>
                        <div className='form__row docs-page__test-helper-2' style={{width: '320px'}}>
                            <SwitchGroup align='right'>
                                <Switch label={{content:'Vertical Switch 1', side: 'left'}} value={this.state.value9} onChange={(value) => this.setState(() => ({ value9: value }))} />
                                <Switch label={{content:'Vertical Switch 2', side: 'left'}} value={this.state.value10} onChange={(value) => this.setState(() => ({ value10: value }))} />
                                <Switch label={{content:'Vertical Switch 3', side: 'left'}} value={this.state.value11} onChange={(value) => this.setState(() => ({ value11: value }))} />
                            </SwitchGroup>
                        </div>
                        <p className="docs-page__paragraph docs-page__paragraph--topMarginL">// Horizontal group</p>
                        <p className="docs-page__paragraph--small">Use this option only if there are no more than two switches.</p>
                        <div className='form__row'>
                            <SwitchGroup orientation='horizontal'>
                                <Switch label={{content:'Horizontal Switch 1'}} value={this.state.value4} onChange={(value) => this.setState(() => ({ value4: value }))} />
                                <Switch label={{content:'Horizontal Switch 2'}} value={this.state.value5} onChange={(value) => this.setState(() => ({ value5: value }))} />
                            </SwitchGroup>
                        </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        // Vertical group (default)
                        <SwitchGroup>
                            <Switch label={{text:'Vertical Switch 1'}} value={this.state.value6} onChange={(value) => this.setState(() => ({ value6: value }))} />
                            <Switch label={{text:'Vertical Switch 2'}} value={this.state.value7} onChange={(value) => this.setState(() => ({ value7: value }))} />
                            <Switch label={{text:'Vertical Switch 3'}} value={this.state.value8} onChange={(value) => this.setState(() => ({ value8: value }))} />
                        </SwitchGroup>

                        // Vertical group with labels on the left
                        <SwitchGroup align='right'>
                            <Switch label={{text:'Vertical Switch 1', side: 'left'}} value={this.state.value9} onChange={(value) => this.setState(() => ({ value9: value }))} />
                            <Switch label={{text:'Vertical Switch 2', side: 'left'}} value={this.state.value10} onChange={(value) => this.setState(() => ({ value10: value }))} />
                            <Switch label={{text:'Vertical Switch 3', side: 'left'}} value={this.state.value11} onChange={(value) => this.setState(() => ({ value11: value }))} />
                        </SwitchGroup>

                        // Horizontal group
                        <SwitchGroup orientation='horizontal'>
                            <Switch label={{text:'Horizontal Switch 1'}} value={this.state.value4} onChange={(value) => this.setState(() => ({ value4: value }))} />
                            <Switch label={{text:'Horizontal Switch 2'}} value={this.state.value5} onChange={(value) => this.setState(() => ({ value5: value }))} />
                        </SwitchGroup>
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <Components.GraphicButtonsGroup>
                    <Components.GraphicButton graphic='design' text='Switch usage guidelines' smallText='Design guidelines' link='#/design/switch' />
                </Components.GraphicButtonsGroup>

                <h3 className="docs-page__h3">Props</h3>
                <p className="docs-page__paragraph">Switch</p>
                <PropsList>
                    <Prop name='label' isRequired={true} type='object' default='/' description='Label value.'/>
                    <Prop name='disabled' isRequired={false} type='boolean' default='false' description='If true field is disabled.'/>
                    <Prop name='toolTipFlow' isRequired={false} type="top | left | right | down" default='false' description='Position of tooltip.'/>
                    <Prop name='toolTipAppend' isRequired={false} type='boolean' default='false' description='Tooltip append.'/>
                    <Prop name='onChange' isRequired={false} type='function' default='false' description='Function onChange'/>
                </PropsList>
                <p className="docs-page__paragraph">Label props</p>
                <PropsList>
                    <Prop name='content' isRequired={true} type='string or function' default='/' description='Label value.'/>
                    <Prop name='side' isRequired={false} type='left | right' default='right' description='Position of label relative to the button.'/>
                    <Prop name='hidden' isRequired={false} type='boolean' default='false' description='If true label is not shown on display.'/>
                </PropsList>
                <p className="docs-page__paragraph">SwitchGroup</p>
                <PropsList>
                    <Prop name='orientation' isRequired={false} type='vertical | horizontal' default='vertical' description='Orientation of Switch components inside the group.'/>
                    <Prop name='align' isRequired={false} type='left | right' default='left' description='Alignment of Switch components inside the group.'/>
                </PropsList>
            </section>
        )
    }
}
