import * as React from 'react';
import * as Markup from '../../js/react';
import { PropsList, Prop } from '../../../app-typescript';
import { MultiSelect } from '../../../app-typescript';
import { Label } from '../../../app-typescript';

interface IColor {
    name: string;
    colorCode?: string;
    itemLabel?: string;
}

interface IState {
    value: any;
    value2: any;
}

const ItemArr: Array<IColor> = [
    {name: 'Protect, restore and promote sustainable use of terrestrial ecosystems, sustainably manage forests, combat desertification, and halt and reverse land degradation and halt biodiversity loss', colorCode: '#FF0000', itemLabel:'SDG001'},
    {name: 'Cyan', colorCode: '#00FFFF', itemLabel:'SDG002'},
    {name: 'Blue', colorCode: '#0000FF', itemLabel:'SDG003'},
    {name: 'DarkBlue', colorCode: '#0000A0', itemLabel:'SDG004'},
    {name: 'Purple', colorCode: '#800080', itemLabel:'SDG005'},
    {name: 'Yellow', colorCode: '#FFFF00', itemLabel:'SDG006'},
    {name: 'Lime', colorCode: '#00FF00', itemLabel:'SDG007'},
    {name: 'Magenta', colorCode: '#FF00FF', itemLabel:'SDG008'},
    {name: 'Silver', colorCode: '#C0C0C0', itemLabel:'SDG009'},
    {name: 'Gray', colorCode: '#808080', itemLabel:'SDG010'},
    {name: 'Black', colorCode: '#000000', itemLabel:'SDG011'},
    {name: 'Orange', colorCode: '#FFA500', itemLabel:'SDG012'},
    {name: 'Brown', colorCode: '#A52A2A', itemLabel:'SDG013'},
    {name: 'Maroon', colorCode: '#800000', itemLabel:'SDG014'},
    {name: 'Green', colorCode: '#008000', itemLabel:'SDG015'},
    {name: 'Olive', colorCode: '#808000', itemLabel:'SDG016'},
];

export class MultiselectDocs extends React.Component<{}, IState> {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
            value2: null,
        }
    }

    render() {
        return (
            <section className='docs-page__container'>
                <h2 className='docs-page__h2'>MultiSelect</h2>

                <Markup.ReactMarkupCodePreview>{`
                    <MultiSelect
                        value={this.state.value2}
                        options={ItemArr}
                        onChange={(e: any) => this.setState({value2: e.value})}
                        placeholder='Select Item'
                        optionLabel='name'
                    />
                `}
                </Markup.ReactMarkupCodePreview>

                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <div className='docs-page__content-row docs-page__content-row--no-margin'>
                            <div className='form__row'>
                                <MultiSelect
                                    value={this.state.value}
                                    options={ItemArr}
                                    onChange={(e: any) => this.setState({value: e})}
                                    filter
                                    showSelectAll
                                    zIndex={2000}
                                    placeholder='Select a color'
                                    optionLabel={(option) => `${option.name} :: ${option.colorCode}`}
                                    required
                                    tabindex={1}
                                    label={'This is Label'}
                                    info={'This is info'}
                                />
                            </div>
                        </div>
                    </Markup.ReactMarkupPreview>

                    <Markup.ReactMarkupCode>{`
                        <MultiSelect
                            value={this.state.value}
                            options={ItemArr}
                            onChange={(e: any) => this.setState({value: e.value})}
                            filter
                            showSelectAll
                            placeholder='Select a color'
                            optionLabel='name'
                            required
                            tabindex={1}
                            label={'This is Label'}
                            info={'This is info'}
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
                                    onChange={(e: any) => this.setState({value2: e})}
                                    filter
                                    showSelectAll
                                    itemTemplate={(option) => {
                                        if (option) {
                                            return (
                                                <div style={{display: 'flex', alignItems: 'center', maxWidth: '720px'}}>
                                                    {/* <div style={{width: 10, height: 10, marginInlineEnd: 10, backgroundColor: option.colorCode}} /> */}
                                                    <Label text={option.itemLabel} style="translucent" />
                                                    <span className='sd-text__normal sd-padding-l--1 sd-whitespace--normal'>{option.name}</span>
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
                    <Prop name='tabIndex' isRequired={false} type='string' default="'0'" description='Index of the element in tabbing order.'/>
                    <Prop name='showClear' isRequired={false} type='boolean' default='false' description='When enabled, a clear icon is displayed to clear the value.'/>
                    <Prop name='showSelectAll' isRequired={false} type='boolean' default='false' description='Whether to show the select all checkbox inside the panel header.'/>
                    <Prop name='itemTemplate' isRequired={false} type='function' default='/' description='Function that gets the option and returns the content for it.'/>
                    <Prop name='selectedItemTemplate' isRequired={false} type='function' default='/' description='Function that gets an item in the value and returns the content for it.'/>
                    <Prop name='onChange' isRequired={true} type='function' default='/' description='Callback to invoke when value changes.'/>
                </PropsList>

            </section>
        )
    }
}
