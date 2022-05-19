import * as React from 'react';
import * as Markup from '../../js/react';
import { PropsList, Prop } from '../../../app-typescript';
import { MultiSelect } from '../../../app-typescript/components/MultiSelect';
import { TreeSelect } from '../../../app-typescript/components/TreeSelect';

interface IState {
    value: any;
    value2: any;
    options: any;
    options2: any;
}

let itemArr = [
    {
        value: 'Item1',
        children: [
            {
                value: 'Item4',
                children: [
                    {value: 'Item10'}
                ]
            },
            {
                value: 'Item5',
                children: [
                    {value: 'Item11'}
                ]
            }
        ]
    },
    {
        value: 'Item2',
        children: [
            {
                value: 'Item6'
            },
            {
                value: 'Item7'
            }
        ]
    },
    {
        value: 'Item3',
        children: [
            {
                value: 'Item8'
            },
            {
                value: 'Item9'
            }
        ]
    },
]

export class TreeSelectDocs extends React.Component<{}, IState> {
    constructor(props) {
        super(props);
        this.state = {
            value: [],
            value2: [],
            options: itemArr,
            options2: itemArr
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e, option) {

        if(option.item) {
            e.stopPropagation();
            e.preventDefault();
            
            this.setState({
                options: option.item
            })
        }  
    }

    render() {
        return (
            <section className='docs-page__container'>
                <h2 className='docs-page__h2'>TreeSelect</h2>

                <Markup.ReactMarkupCodePreview>{`
                    <TreeSelect
                        options={this.state.options2}
                        getLabel={'label'}
                        getMultilevelArray={'items'}
                        selectBranchWithChildren={true}
                        onChange={() => false}
                    />
                `}
                </Markup.ReactMarkupCodePreview>
                
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <div className='docs-page__content-row docs-page__content-row--no-margin'>
                            <div className='form__row'>
                                <TreeSelect
                                    getOptions={() => {
                                        return itemArr
                                    }}
                                    selectBranchWithChildren={true}
                                    onChange={() => false}
                                    //allowMultiple={true}
                                />
                            </div>
                        </div>
                    </Markup.ReactMarkupPreview>

                    <Markup.ReactMarkupCode>{`
                        <TreeSelect
                            options={this.state.options}
                            getLabel={'label'}
                            getMultilevelArray={'items'}
                            selectBranchWithChildren={true}
                            onChange={() => false}
                        />
                    `}</Markup.ReactMarkupCode>
                    
                </Markup.ReactMarkup>
                <p className='docs-page__paragraph'>TreeSelect with custom template.</p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <div className='docs-page__content-row docs-page__content-row--no-margin'>
                            <div className='form__row'>
                                <TreeSelect
                                    getOptions={() => this.state.options}
                                    
                                    
                                    onChange={() => false}
                                    optionTemplate={(item: any) => {
                                        return <div>Label: {item.value}</div>
                                    }}
                                    valueTemplate={(item: any) => {
                                        return <span>Label: {item.value}</span>
                                    }}
                                />
                            </div>
                        </div>
                    </Markup.ReactMarkupPreview>

                    <Markup.ReactMarkupCode>{`
                        <TreeSelect
                            options={this.state.options2}
                            getMultilevelArray={'items'}
                            getLabel={'label'}
                            onChange={() => false}
                            optionTemplate={(item: any) => {
                                return <div>Label: {item.label}</div>
                            }}
                            valueTemplate={(item: any) => {
                                return <span>Label: {item.label}</span>
                            }}   
                        />
                    `}</Markup.ReactMarkupCode>

                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">Props</h3>
                <PropsList>
                    <Prop name='value' isRequired={false} type='Array<T>' default='/' description='Value of the component.'/>
                    <Prop name='options' isRequired={true} type='Array<T>' default='/' description='An array of selectitems to display as the available options.'/>
                    <Prop name='getLabel' isRequired={true} type='string' default='/' description='Name of the label field of an option and decides which field or fields to search against.'/>
                    <Prop name='getMultilevelArray' isRequired={true} type='string' default='/' description='Name of the children array of an option.'/>
                    <Prop name='width' isRequired={false} type='medium | full-width (100%)' default='100%' description='Dropdown width.'/>
                    <Prop name='selectBranchWithChildren' isRequired={false} type='boolean' default='false' description='When specified, select branch with children is enabled.'/>
                    <Prop name='readonly' isRequired={false} type='boolean' default='false' description='When specified, component changes are not enabled.'/>
                    <Prop name='valueTemplate' isRequired={false} type='function' default='/' description='Function that gets an item in the value and returns the content for it.'/>
                    <Prop name='optionTemplate' isRequired={false} type='function' default='/' description='Function that gets the option and returns the content for it.'/>
                    <Prop name='onChange' isRequired={true} type='function' default='/' description='Callback to invoke when value changes.'/>
                </PropsList>
  
            </section>
        )
    }
}
