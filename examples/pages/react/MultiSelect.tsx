import * as React from 'react';
import * as Markup from '../../js/react';
import { PropsList, Prop } from '../../../app-typescript';
import { MultiSelect } from '../../../app-typescript';
import { Label } from '../../../app-typescript';

interface IColor {
    name: string;
    colorCode?: string;
}

interface IState {
    value: any;
    value2: any;
}

const ItemArr: Array<IColor> = [
    {name: 'Red', colorCode: '#FF0000'},
    {name: 'Cyan', colorCode: '#00FFFF'},
    {name: 'Blue', colorCode: '#0000FF'},
    {name: 'DarkBlue', colorCode: '#0000A0'},
    {name: 'Purple', colorCode: '#800080'},
    {name: 'Yellow', colorCode: '#FFFF00'},
    {name: 'Lime', colorCode: '#00FF00'},
    {name: 'Magenta', colorCode: '#FF00FF'},
    {name: 'Silver', colorCode: '#C0C0C0'},
    {name: 'Gray', colorCode: '#808080'},
    {name: 'Black', colorCode: '#000000'},
    {name: 'Orange', colorCode: '#FFA500'},
    {name: 'Brown', colorCode: '#A52A2A'},
    {name: 'Maroon', colorCode: '#800000'},
    {name: 'Green', colorCode: '#008000'},
    {name: 'Olive', colorCode: '#808000'},
];

export class MultiselectDocs extends React.Component<{}, IState> {
    constructor(props) {
        super(props);
        this.state = {
            value: [{name: 'Red', colorCode: '#FF0000'},],
            value2: [{name: 'Red', colorCode: '#FF0000'},],
        }
    }

    render() {
        return (
            <section className='docs-page__container'>
                <h2 className='docs-page__h2'>MultiSelect</h2>

                <Markup.ReactMarkupCodePreview>{`
                    <MultiSelect
                        value={this.state.value}
                        options={ItemArr}
                        optionLabel={(option) => option.name}
                        placeholder='Select a color'
                        onChange={(e: any) => false}
                    />
                `}
                </Markup.ReactMarkupCodePreview>

                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <div className='docs-page__content-row docs-page__content-row--no-margin'>
                            <div className='form__row'>
                                <MultiSelect
                                preview
                                    value={this.state.value}
                                    options={ItemArr}
                                    optionLabel={(option) => option.name}
                                    label='This is Label'
                                    info='This is info'
                                    placeholder='Select a color'
                                    filter
                                    showSelectAll
                                    zIndex={2000}
                                    onChange={(e: any) => this.setState({value: e})}
                                />
                            </div>
                        </div>
                    </Markup.ReactMarkupPreview>

                    <Markup.ReactMarkupCode>{`
                        <MultiSelect
                            value={this.state.value}
                            options={ItemArr}
                            optionLabel={(option) => option.name}
                            label='This is Label'
                            info='This is info'
                            placeholder='Select a color'
                            filter
                            showSelectAll
                            zIndex={2000}
                            onChange={(e: any) => this.setState({value: e})}
                        />
                    `}</Markup.ReactMarkupCode>

                </Markup.ReactMarkup>

                <p className='docs-page__paragraph'>MultiSelect with custom template.</p>

                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <div className='docs-page__content-row docs-page__content-row--no-margin'>
                            <div className='form__row'>
                                <MultiSelect
                                    value={this.state.value2}
                                    options={ItemArr}
                                    optionLabel={(option) => `${option.name} :: ${option.colorCode}`}
                                    filter
                                    showSelectAll
                                    label='This is Label'
                                    info='This is info'
                                    placeholder='Select a color'
                                    itemTemplate={(option) => {
                                        if (option) {
                                            return (
                                                <div style={{display: 'flex', alignItems: 'center'}}>
                                                    <div style={{width: 10, height: 10, marginInlineEnd: 10, backgroundColor: option.colorCode}} />
                                                    <span>{option.name}</span>
                                                </div>
                                            );
                                        }
                                    }}
                                    selectedItemTemplate={(option) => {
                                        if (option == null) {
                                            return (
                                                <div>Select a color</div>
                                            );
                                        } else {
                                            return (
                                                <div className='p-multiselect-token'>
                                                    <span style={{width: 10, height: 10, marginInlineEnd: 10, backgroundColor: option.colorCode}} />
                                                    <span className='p-multiselect-token-label'>{option.name}</span>
                                                </div>
                                            );
                                        }
                                    }}
                                    onChange={(e: any) => this.setState({value2: e})}
                                />
                            </div>
                        </div>
                    </Markup.ReactMarkupPreview>

                    <Markup.ReactMarkupCode>{`
                        <MultiSelect
                            value={this.state.value2}
                            options={ItemArr}
                            onChange={(e: any) => this.setState({value2: e.value})}
                            filter
                            showSelectAll
                            optionLabel='name'
                            itemTemplate={(option) => {
                                if (option) {
                                    return (
                                        <div style={{display: 'flex', alignItems: 'center'}}>
                                            <div style={{width: 10, height: 10, marginInlineEnd: 10, backgroundColor: option.colorCode}} />
                                            <div>{option.name}</div>
                                        </div>
                                    );
                                }
                            }}
                            selectedItemTemplate={(option) => {
                                if (option == null) {
                                    return (
                                        <div>Select a color</div>
                                    );
                                } else {
                                    return (
                                        <div className='p-multiselect-token'>
                                            <span style={{width: 10, height: 10, marginInlineEnd: 10, backgroundColor: option.colorCode}} />
                                            <span className='p-multiselect-token-label'>{option.name}</span>
                                        </div>
                                    );
                                }
                            }}
                        />
                    `}</Markup.ReactMarkupCode>

                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">Props</h3>
                <PropsList>
                    <Prop name='value' isRequired={true} type='Array<T>' default='/' description='Value of the component.'/>
                    <Prop name='options' isRequired={true} type='Array<T>' default='/' description='An array of selectitems to display as the available options.'/>
                    <Prop name='optionLabel' isRequired={true} type='string' default='/' description='Name of the label field of an option when an arbitrary objects instead of SelectItems are used as options and decides which field or fields to search against.'/>
                    <Prop name='placeholder' isRequired={false} type='string' default='/' description='Label to display when there are no selections.'/>
                    <Prop name='filter' isRequired={false} type='boolean' default='false' description='When specified, displays an input field to filter the items on keyup.'/>
                    <Prop name='filterPlaceholder' isRequired={false} type='string' default='/' description='Placeholder text to show when filter input is empty.'/>
                    <Prop name='emptyFilterMessage' isRequired={false} type='string' default='No results found' description='Template to display when filtering does not return any results.'/>
                    <Prop name='maxSelectedLabels' isRequired={false} type='number' default='/' description='Decides how many selected item labels to show at most. Its necessary to use selectedItemTemplate.'/>
                    <Prop name='selectedItemsLabel' isRequired={false} type='string' default='{0} items selected' description='Label to display after exceeding max selected labels.'/>
                    <Prop name='ariaLabelledBy' isRequired={false} type='string' default='/' description='Establishes relationships between the component and label(s) where its value should be one or more element IDs.'/>
                    <Prop name='showClear' isRequired={false} type='boolean' default='false' description='When enabled, a clear icon is displayed to clear the value.'/>
                    <Prop name='showSelectAll' isRequired={false} type='boolean' default='false' description='Whether to show the select all checkbox inside the panel header.'/>
                    <Prop name='itemTemplate' isRequired={false} type='function' default='/' description='Function that gets the option and returns the content for it.'/>
                    <Prop name='selectedItemTemplate' isRequired={false} type='function' default='/' description='Function that gets an item in the value and returns the content for it.'/>
                    <Prop name='onChange' isRequired={true} type='Function' default='/' description='Callback to invoke when value changes.'/>
                    <Prop name='label' isRequired={false} type='string' default='/' description='Label of component.' />
                    <Prop name='inlineLabel' isRequired={false} type='boolean' default='false' description='Position labels as inline.' />
                    <Prop name='tabindex' isRequired={false} type='number' default='/' description='Indicates an element can be focused on, and determines how that focus is handled.'/>
                    <Prop name='info' isRequired={false} type='string' default='/' description='Info message of component.' />
                    <Prop name='error' isRequired={false} type='string' default='/' description='Error message of component.' />
                    <Prop name='required' isRequired={false} type='boolean' default='false' description='Mark field as required.' />
                    <Prop name='disabled' isRequired={false} type='boolean' default='false' description='Mark field as disabled.' />
                </PropsList>

            </section>
        )
    }
}
