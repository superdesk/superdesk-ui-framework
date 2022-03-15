import * as React from 'react';
import * as Markup from '../../js/react';
import * as Components from '../playgrounds/react-playgrounds/components/Index';

import { RadioGroup, RadioButtonGroup, CheckGroup, CheckButtonGroup, Alert, Prop, PropsList } from '../../../app-typescript';

interface IState {
    value1?: string;
    value2?: string;
    value3?: string;
    value4?: string;
    value5?: string;
    value6?: string;
    value7?: string;
    value8?: string;
}

export default class RadioGroupDoc extends React.Component<{}, IState> {
    constructor(props) {
        super(props);

        this.state = {
            value1: undefined,
            value2: undefined,
            value3: undefined,
            value4: undefined,
            value5: undefined,
            value6: undefined,
            value7: undefined,
            value8: undefined,
        };
    }
    render() {
        return (
            <section className="docs-page__container">
                <h2 className="docs-page__h2">RadioGroup</h2>
                <p className="docs-page__paragraph"></p>
                <Markup.ReactMarkupCodePreview>{`
                    <RadioGroup options={[
                        {value:'test1', label:'Default label'},
                        {value:'test2', label:'Default label'},
                    ]} value={value1} />
                `}
                </Markup.ReactMarkupCodePreview>
                <h3 className="docs-page__h3">Basic RadioGroup</h3>
                <p className="docs-page__paragraph">The label of the RadioGroup is by default always on the right. Although it's not in line with Superdesk design standards the label can also be placed to the left, by addind the prop <code>labelSide='start'</code>.</p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <p className="docs-page__paragraph">// Horizontal - labels on the end/right (default)</p>
                        <div className='form__group'>
                            <RadioGroup options={[
                                {value:'test1', label:'Default label'},
                                {value:'test2', label:'Default label'},
                                {value:'test3', label:'Default label'},
                                {value:'test4', label:'Disabled state', disabled: true}
                            ]}
                            value={this.state.value1}
                            onChange={(value) => this.setState(() => ({ value1: value }))} />
                        </div>
                        <p className="docs-page__paragraph docs-page__paragraph--topMarginL">// Horizontal - labels on the start/left</p>
                        <p className="docs-page__paragraph--small">This option should be avoided in general use.</p>
                        <div className='form__group'>
                            <RadioGroup options={[
                                {value:'test5', label:'Label on the left'},
                                {value:'test6', label:'Label on the left'},
                                {value:'test7', label:'Label on the left'},
                            ]}
                            value={this.state.value2}
                            labelSide='start'
                            onChange={(value) => this.setState(() => ({ value2: value }))} />
                        </div>
                        <p className="docs-page__paragraph docs-page__paragraph--topMarginL">// Vertical RadioGroup</p>
                        <div className='form__group'>
                            <RadioGroup options={[
                                {value:'test105', label:'Radio vertical one'},
                                {value:'test106', label:'Radio vertical two'},
                                {value:'test107', label:'Radio vertical three'},
                            ]}
                            value={this.state.value2}
                            orientation='vertical'
                            onChange={(value) => this.setState(() => ({ value2: value }))} />
                        </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        // Label on the right (default)
                        <RadioGroup options={[
                            {value:'test1', label:'Default label'},
                            {value:'test2', label:'Default label'},
                            {value:'test3', label:'Default label'},
                            {value:'test4', label:'Disabled state', disabled: true}
                        ]}
                        value={this.state.value1}
                        onChange={(value) => this.setState(() => ({ value1: value }))} />

                        // Labels on the left
                        <RadioGroup options={[
                            {value:'test5', label:'Label on the left'},
                            {value:'test6', label:'Label on the left'},
                            {value:'test7', label:'Label on the left'},
                        ]}
                        value={this.state.value2}
                        labelSide='start' onChange={(value) => this.setState(() => ({ value2: value }))} />

                        // Vertical RadioGroup
                        <RadioGroup options={[
                            {value:'test105', label:'Radio vertical one'},
                            {value:'test106', label:'Radio vertical two'},
                            {value:'test107', label:'Radio vertical three'},
                        ]}
                        value={this.state.value2}
                        orientation='vertical'
                        onChange={(value) => this.setState(() => ({ value2: value }))} />

                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <Components.GraphicButtonsGroup>
                    <Components.GraphicButton graphic='design' text='Radio usage guidelines' smallText='Design guidelines' link='#/design/checkbox-and-radio' />
                </Components.GraphicButtonsGroup>

                <h3 className="docs-page__h3">RadioButtonGroup</h3>
                <Markup.ReactMarkupCodePreview>{`
                    <RadioButtonGroup options={[
                        {value:'test1', label:'Button style radio one'},
                        {value:'test2', label:'Button style radio two'},
                    ]} value={value1} />
                `}
                </Markup.ReactMarkupCodePreview>
                <p className="docs-page__paragraph">The <code>RadioButtonGroup</code> component shares the same functionality as the RadioGroup component but with a different visual appearance and some additional layout options. Any icon from the <a className='link' href='#/components/icons' target='blank'>icon font</a> can be added to the component by specifying a value (icon name without the <code>icon-</code> prefix) inside an options value e.g. <code>{'{value:"somevalue", label:"I have an icon", icon:"grid-view"}'}</code>.</p>

                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <p className="docs-page__paragraph docs-page__paragraph--topMarginL">// Basic</p>
                        <div className='form__group'>
                            <RadioButtonGroup options={[
                                {value:'test6', label:'Button style radio'},
                                {value:'test7', label:'Button style'},
                                {value:'test8', label:'Button style'},
                                {value:'test9', label:'Button style disabled', disabled:true},
                            ]} value={this.state.value3} onChange={(value) => this.setState(() => ({ value3: value }))} />
                        </div>
                        <p className="docs-page__paragraph docs-page__paragraph--topMarginL">// With icon</p>
                        <div className='form__group'>
                            <RadioButtonGroup options={[
                                {value:'test10', label:'Radio button with icon', icon:'list-view'},
                                {value:'test11', label:'I have an icon!', icon:'grid-view'},
                                {value:'test12', label:'Yeah, me too!', icon:'kanban-view'},
                            ]} value={this.state.value4} onChange={(value) => this.setState(() => ({ value4: value }))} />
                        </div>
                        <p className="docs-page__paragraph docs-page__paragraph--topMarginL">// With icon only (text label is hidden but still accessible to screenreaders)</p>
                        <div className='form__group'>
                            <RadioButtonGroup options={[
                                {value:'test10', label:'Radio button with icon', icon:'list-view', labelHidden: true},
                                {value:'test11', label:'I have an icon!', icon:'grid-view', labelHidden: true},
                                {value:'test12', label:'Yeah, me too!', icon:'kanban-view', labelHidden: true},
                            ]} value={this.state.value4} onChange={(value) => this.setState(() => ({ value4: value }))} />
                        </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        // Button styled radio buttons
                        <RadioButtonGroup options={[
                            {value:'test6', label:'Button style radio'},
                            {value:'test7', label:'Button style'},
                            {value:'test8', label:'Button style'},
                            {value:'test9', label:'Button style disabled', disabled:true},
                        ]} value={this.state.value3} onChange={(value) => this.setState(() => ({ value3: value }))} />

                        // Button styled radio with icon
                        <RadioButtonGroup options={[
                            {value:'test10', label:'Radio button with icon', icon:'list-view'},
                            {value:'test11', label:'I have an icon!', icon:'grid-view'},
                            {value:'test12', label:'Yeah, me too!', icon:'kanban-view'},
                        ]} value={this.state.value4} onChange={(value) => this.setState(() => ({ value4: value }))} />

                        // Button style radio with icon only (text label is hidden)
                        <RadioButtonGroup options={[
                            {value:'test10', label:'Radio button with icon', icon:'list-view', labelHidden: true},
                            {value:'test11', label:'I have an icon!', icon:'grid-view', labelHidden: true},
                            {value:'test12', label:'Yeah, me too!', icon:'kanban-view', labelHidden: true},
                        ]} value={this.state.value4} onChange={(value) => this.setState(() => ({ value4: value }))} />

                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">Layout and alignment options</h3>          
                <p className="docs-page__paragraph">By default the child elements are grouped horizontaly. A few more options are available – alignment (start, end and center) and grid layout. </p>
                <Alert style='hollow' size='small' type='primary'>
                    NOTE: Alignment will work only in parent elements with display: flex;
                </Alert>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <p className="docs-page__paragraph docs-page__paragraph--topMarginL">// Left (default)</p>
                        <div className='form__row form__row--flex docs-page__test-helper-2'>
                            <RadioButtonGroup value={this.state.value3} options={[
                                {value:'test301', label:'Option one'},
                                {value:'test302', label:'Option two'},
                                {value:'test303', label:'Option three'},
                            ]} onChange={(value) => this.setState(() => ({ value3: value }))} />
                        </div>
                        <p className="docs-page__paragraph docs-page__paragraph--topMarginL">// Right</p>
                        <div className='form__row form__row--flex docs-page__test-helper-2'>
                            <RadioButtonGroup group={{align:'end', groupLabel:'My group label'}} value={this.state.value4} options={[
                                {value:'test304', label:'Option one'},
                                {value:'test305', label:'Option two'},
                                {value:'test306', label:'Option three'},
                            ]} onChange={(value) => this.setState(() => ({ value4: value }))} />
                        </div>
                        <p className="docs-page__paragraph docs-page__paragraph--topMarginL">// Center</p>
                        <div className='form__row form__row--flex docs-page__test-helper-2'>
                            <RadioButtonGroup group={{align:'center', groupLabelledBy:'someID'}} value={this.state.value5} options={[
                                {value:'test307', label:'Option one'},
                                {value:'test308', label:'Option two'},
                                {value:'test309', label:'Option three'},
                            ]} onChange={(value) => this.setState(() => ({ value5: value }))} />
                        </div>
                        <p className="docs-page__paragraph docs-page__paragraph--topMarginL">// Left + Center + Right</p>
                        <div className='form__row form__row--flex docs-page__test-helper-2'>
                            <RadioButtonGroup value={this.state.value6} options={[
                                {value:'test310', label:'One'},
                                {value:'test311', label:'Two'},
                            ]} onChange={(value) => this.setState(() => ({ value6: value }))} />

                            <RadioButtonGroup group={{align:'center'}} value={this.state.value6} options={[
                                {value:'test312', label:'Three'},
                                {value:'test313', label:'Four'},
                            ]} onChange={(value) => this.setState(() => ({ value6: value }))} />

                            <RadioButtonGroup group={{align:'end'}} value={this.state.value6} options={[
                                {value:'test314', label:'Five'},
                                {value:'test315', label:'Six'},
                            ]} onChange={(value) => this.setState(() => ({ value6: value }))} />
                        </div>
                        <p className="docs-page__paragraph docs-page__paragraph--topMarginL">// Grid</p>
                        <div className='form__row form__row--flex docs-page__test-helper-2' style={{width:500}}>
                            <RadioButtonGroup group={{grid:true}} value={this.state.value7} options={[
                                {value:'test316', label:'One'},
                                {value:'test317', label:'Two'},
                                {value:'test318', label:'Three'},
                                {value:'test319', label:'Four'},
                                {value:'test320', label:'Five'},
                                {value:'test321', label:'Six'},
                            ]} onChange={(value) => this.setState(() => ({ value7: value }))} />
                        </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        // Left (default)
                        <RadioButtonGroup value={value3} options={[
                            {value:'test301', label:'Option one'},
                            {value:'test302', label:'Option two'},
                            {value:'test303', label:'Option three'},
                        ]} />

                        // Right
                        <RadioButtonGroup group={{align:'end'}} value={value4} options={[
                            {value:'test304', label:'Option one'},
                            {value:'test305', label:'Option two'},
                            {value:'test306', label:'Option three'},
                        ]} />

                        // Center
                        <RadioButtonGroup group={{align:'center'}} value={value5} options={[
                            {value:'test307', label:'Option one'},
                            {value:'test308', label:'Option two'},
                            {value:'test309', label:'Option three'},
                        ]} />

                        // Left + Center + Right
                        <div className='form__row form__row--flex'>
                            <RadioButtonGroup value={value6} options={[
                                {value:'test310', label:'One'},
                                {value:'test311', label:'Two'},
                            ]} />

                            <RadioButtonGroup group={{align:'center'}} value={value6} options={[
                                {value:'test312', label:'Three'},
                                {value:'test313', label:'Four'},
                            ]} />

                            <RadioButtonGroup group={{align:'end'}} value={value6} options={[
                                {value:'test314', label:'Five'},
                                {value:'test315', label:'Six'},
                            ]} />
                        </div>
                        
                        // Grid
                        <RadioButtonGroup group={{grid:true}} value={value7} options={[
                            {value:'test316', label:'One'},
                            {value:'test317', label:'Two'},
                            {value:'test318', label:'Three'},
                            {value:'test319', label:'Four'},
                            {value:'test320', label:'Five'},
                            {value:'test321', label:'Six'},
                        ]} />
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">Props</h3>
                <p className="docs-page__paragraph">RadioGroup</p>
                <PropsList>
                    <Prop name='value' isRequired={true} type='T' default='/' description='The value of the checked button.'/>
                    <Prop name='options' isRequired={true} type='Array' default='/' description='Array of Radio options.'/>
                    <Prop name='options label' isRequired={true} type='string' default='/' description='Label text value for Radio.'/>
                    <Prop name='options value' isRequired={true} type='T' default='/' description='Value of the Radio.'/>
                    <Prop name='options disabled' isRequired={false} type='boolean' default='false' description='Disables the Radio, preventing mouse events.'/>
                    <Prop name='labelSide' isRequired={false} type='start | end' default='end' description='Position of label relative to the button.'/>
                </PropsList>
                <p className="docs-page__paragraph">RadioButtonGroup</p>
                <PropsList>
                    <Prop name='value' isRequired={true} type='any' default='/' description='The value of the checked button.'/>
                    <Prop name='options' isRequired={true} type='Array<option>' default='/' description='Array of RadioButton options.'/>
                    <Prop name='option label' isRequired={true} type='string' default='/' description='Label text value for RadioButton.'/>
                    <Prop name='option value' isRequired={true} type='any' default='/' description='Value of the Radio.'/>
                    <Prop name='option disabled' isRequired={false} type='boolean' default='false' description='Disables the Radio, preventing mouse events.'/>
                    <Prop name='option labelHidden' isRequired={false} type='boolean' default='false' description='Hides visually the label and adds an aria-label for screen-reader support.'/>
                    <Prop name='option icon' isRequired={false} type='string' default='/' description='Icon class name without the icon- part.'/>
                    <Prop name='group orientation' isRequired={false} type='horizontal | vertical' default='horizontal' description='Orientation of the child elements.'/>
                    <Prop name='group align' isRequired={false} type='start | end | center | inline' default='start' description='Alignemnt of the whole group relative to the parent container. Container must be flex for this to work.'/>
                    <Prop name='group grid' isRequired={false} type='bolean' default='false' description='Lays out child elements in an uniform grid list.'/>
                    <Prop name='group padded' isRequired={false} type='bolean' default='false' description='Adds padding on the start and end (left and right) of the group.'/>

                </PropsList>
            </section>
        )
    }
}
