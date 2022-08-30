import * as React from 'react';
import * as Markup from '../../js/react';
import { PropsList, Prop } from '../../../app-typescript';
import { MultiSelect } from '../../../app-typescript/components/MultiSelect';
import { ITreeNode, TreeSelect } from '../../../app-typescript/components/TreeSelect';

interface IState {
    value: any;
    value2: any;
    options: any;
    options2: any;
    inputValue: string;
}

let itemArr = [
    {
        value: 'Category1',
        children: [
            {
                value: 'Sub-Category1',
                children: [
                    {value: 'Item10'}
                ]
            },
            {
                value: 'Sub-Category2',
                children: [
                    {value: 'Item11'}
                ]
            }
        ]
    },
    {
        value: 'Category2',
        children: [
            {
                value: 'Sub-Category3'
            },
            {
                value: 'Sub-Category4'
            }
        ]
    },
    {
        value: 'Category3',
        children: [
            {
                value: 'Sub-Category5'
            },
            {
                value: 'Sub-Category6'
            }
        ]
    },
]

let itemArr2 = [
    {
        value: {name: 'Category1'},
        children: [
            {
                value: {name: 'Sub-category1'},
                children: [
                    {value: {name: 'Item5'}}
                ]
            },
            {
                value: {name: 'Sub-category2'},
                children: [
                    {value: {name: 'Item7'}}
                ]
            }
        ]
    },
    {
        value: {name: 'Category2'},
        children: [
            {
                value: {name: 'Item8'}
            },
            {
                value: {name: 'Item9'}
            }
        ]
    },
    {
        value: {name: 'Category3'},
        children: [
            {
                value: {name: 'Item10'}
            },
            {
                value: {name: 'Item11'}
            }
        ]
    },
]

const source = [
    {
        'name': 'Article (news)',
        'qcode': 'Article',
    },
    {
        'name': 'Sidebar',
        'qcode': 'Sidebar',
    },
    {
        'name': 'Factbox',
        'qcode': 'Factbox',
    },
];

function searchOptions(
    term: string,
    callback: (res: Array<ITreeNode<{name: string; qcode: string;}>>) => void,
): void {
    setTimeout(() => {
        callback(
            source
                .filter((item) => item.name.toLocaleLowerCase().includes(term.toLocaleLowerCase()))
                .map((item) => ({value: item})),
        ); 
    }, 1000);
}

export class TreeSelectDocs extends React.Component<{}, IState> {
    constructor(props) {
        super(props);
        this.state = {
            value: [],
            value2: [],
            options: itemArr2,
            options2: itemArr2,
            inputValue: ''
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
                <h2 className='docs-page__h2'>TreeSelect (in progress)</h2>

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
                                    getId={(item) => item.name}
                                    getLabel={(item) => item.name}
                                    getOptions={() => itemArr2}
                                    value={[{name: 'Item1'}, {name: 'Item2'}]}
                                    selectBranchWithChildren={true}
                                    onChange={(e) => console.log(e)}
                                    allowMultiple
                                    kind={'synchronous'}
                                    fullWidth
                                    info={'Info Message'}
                                    error={'Error Message'}
                                    required
                                    label={'TreeSelect Label'}
                                    //singleLevelSearch
                                    searchPlaceholder='Search...'
                                />
                            </div>
                        </div>
                    </Markup.ReactMarkupPreview>

                    <Markup.ReactMarkupCode>{`
                        <TreeSelect
                            getId={(item) => item.name}
                            getLabel={(item) => item.name}
                            getOptions={() => {
                                return itemArr2
                            }}
                            value={[{name: 'Item1'}, {name: 'Item2'}]}
                            selectBranchWithChildren={true}
                            onChange={(e) => console.log(e)}
                            allowMultiple
                            kind={'synchronous'}
                            fullWidth
                            info={'Info Message'}
                            error={'Error Message'}
                            required
                            label={'TreeSelect Label'}
                        />
                    `}</Markup.ReactMarkupCode>
                    
                </Markup.ReactMarkup>

                <p className='docs-page__paragraph'>Asynchronous mode in TreeSelect component.</p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <div className='docs-page__content-row docs-page__content-row--no-margin'>
                            <div className='form__row'>
                            <TreeSelect
                                kind="asynchronous"
                                searchOptions={searchOptions}
                                value={this.state.value}
                                onChange={(val) => {
                                    this.setState({value: val});
                                }}
                                getLabel={({name}) => name}
                                getId={({qcode}) => qcode}
                                selectBranchWithChildren={false}
                                optionTemplate={(item) => <span style={{color: 'blue'}}>{item.name}</span>}
                                allowMultiple={true}
                            />
                            </div>
                        </div>
                    </Markup.ReactMarkupPreview>

                    <Markup.ReactMarkupCode>{`
                        <TreeSelect
                            kind="asynchronous"
                            searchOptions={searchOptions}
                            value={this.state.value}
                            onChange={(val) => {
                                this.setState({value: val});
                            }}
                            getLabel={({name}) => name}
                            getId={({qcode}) => qcode}
                            selectBranchWithChildren={false}
                            optionTemplate={(item) => <span style={{color: 'blue'}}>{item.name}</span>}
                            allowMultiple={true}
                        />
                    `}</Markup.ReactMarkupCode>
                    
                </Markup.ReactMarkup>

                <p className='docs-page__paragraph'>TreeSelect with custom template.</p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <div className='docs-page__content-row docs-page__content-row--no-margin'>
                            <div className='form__row'>
                                <TreeSelect
                                    getId={(item) => item.name}
                                    getLabel={(item) => item.name}
                                    placeholder='Select one'
                                    getOptions={() => this.state.options}
                                    kind={'synchronous'}
                                    onChange={(e) => console.log(e)}
                                    optionTemplate={(item: any) => {
                                        return <div>Label: {item.name}</div>
                                    }}
                                    valueTemplate={(item: any) => {
                                        return <span>Label: {item.name}</span>
                                    }}
                                    //allowMultiple
                                />
                            </div>
                        </div>
                    </Markup.ReactMarkupPreview>

                    <Markup.ReactMarkupCode>{`
                        <TreeSelect
                            getId={(item) => item.name}
                            getLabel={(item) => item.name}
                            value={[{name: 'Item4'}, {name: 'Item10'}]}
                            getOptions={() => this.state.options}
                            kind={'synchronous'}
                            onChange={(e) => console.log(e)}
                            optionTemplate={(item: any) => {
                                return <div>Label: {item.name}</div>
                            }}
                            valueTemplate={(item: any) => {
                                return <span>Label: {item.name}</span>
                            }}
                        />
                    `}</Markup.ReactMarkupCode>

                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">Props</h3>
                <PropsList>
                    <Prop name='value' isRequired={false} type='Array<T>' default='/' description='Value of the component.'/>
                    <Prop name='getOptions' isRequired={true} type='Function' default='/' description='An array of selectitems to display as the available options.'/>
                    <Prop name='kind' isRequired={true} type='synchronous | asynchronous' default='/' description='Type of TreeSelect component.'/>
                    <Prop name='width' isRequired={false} type='medium | full-width (100%)' default='100%' description='Dropdown width.'/>
                    <Prop name='selectBranchWithChildren' isRequired={false} type='boolean' default='false' description='When specified, select branch with children is enabled.'/>
                    <Prop name='readonly' isRequired={false} type='boolean' default='false' description='When specified, component changes are not enabled.'/>
                    <Prop name='loading' isRequired={false} type='boolean' default='false' description='Adds a loading indicator in dropdown.'/>
                    <Prop name='allowMultiple' isRequired={false} type='boolean' default='/' description='Enable multi-select mode.'/>
                    <Prop name='singleLevelSearch' isRequired={false} type='boolean' default='/' description='Limit search to only the level that is displayed.'/>
                    <Prop name='placeholder' isRequired={false} type='string' default='/' description='Placeholder of component in single select mode.'/>
                    <Prop name='searchPlaceholder' isRequired={false} type='string' default='/' description='Filter input placeholder.'/>
                    <Prop name='getLabel' isRequired={true} type='Function' default='/' description='Callback to invoke when value changes.'/>
                    <Prop name='getId' isRequired={true} type='Function' default='/' description='Callback to invoke when value changes.'/>
                    <Prop name='valueTemplate' isRequired={false} type='Function' default='/' description='Function that gets an item in the value and returns the content for it.'/>
                    <Prop name='optionTemplate' isRequired={false} type='Function' default='/' description='Function that gets the option and returns the content for it.'/>
                    <Prop name='searchOptions' isRequired={false} type='Function' default='/' description='The function will be called when a search is initiated from UI in asynchronous mode.'/>
                    <Prop name='onChange' isRequired={true} type='Function' default='/' description='Callback to invoke when value changes.'/>
                    <Prop name='label' isRequired={false} type='string' default='/' description='Input label'/>
                    <Prop name='info' isRequired={false} type='string' default='/' description='Hint text'/>
                    <Prop name='error' isRequired={false} type='string' default='/' description='Error text'/>
                    <Prop name='inlineLabel' isRequired={false} type='boolean' default='false' description='Position labels as inline'/>
                    <Prop name='required' isRequired={false} type='boolean' default='false' description='Mark field as required'/>
                    <Prop name='disabled' isRequired={false} type='boolean' default='false' description='Mark field as disabled'/>
                    <Prop name='invalid' isRequired={false} type='boolean' default='false' description='Mark field as invalid'/>
                </PropsList>

                <p className='docs-page__paragraph'>synchronous:</p>
                <PropsList>
                    <Prop name='getOptions' isRequired={false} type='Function' default='/' description='An array of selectitems to display as the available options.'/>
                </PropsList>

                <p className='docs-page__paragraph'>asynchronous:</p>
                <PropsList>
                    <Prop name='getOptions' isRequired={false} type='Function' default='/' description='An array of selectitems to display as the available options.'/>
                    <Prop name='searchOptions' isRequired={false} type='Function' default='/' description='function will be called when a search is initiated from UI.'/>
                </PropsList>
  
            </section>
        )
    }
}
