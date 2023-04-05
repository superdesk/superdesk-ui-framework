import * as React from 'react';
import * as Markup from '../../js/react';
import { PropsList, Prop } from '../../../app-typescript';
import { TreeSelect } from '../../../app-typescript/components/TreeSelect';

interface IState {
    value: any;
    value2: any;
    options: any;
    options2: any;
    inputValue: string;
    arr: any;
}

let options = [
    {
        value: {name: 'Category1'},
        children: [
            {
                value: {name: 'Sub-category1'},
                children: [
                    {value: {name: 'Item31'}},
                    // {value: {name: 'Item32'}},
                    // {value: {name: 'Item33'}},
                    // {value: {name: 'Item34'}},

                ]
            },
            {
                value: {name: 'Sub-category2'},
                children: [
                    {value: {name: 'Item41'}},
                    {value: {name: 'Item42'}},
                    {value: {name: 'Item43'}}
                ]
            },
            {
                value: {name: 'Sub-category3'},
                children: [
                    {value: {name: 'Item50'}},
                    {value: {name: 'Item51'}},
                    {value: {name: 'Item53'}}
                ]
            },
            {
                value: {name: 'Sub-category4'},
                children: [
                    {value: {name: 'Item23'}},
                    {value: {name: 'Item41'}},
                    {value: {name: 'Item42'}},
                    {value: {name: 'Item43'}}
                ]
            },
            {
                value: {name: 'Sub-category5'},
                children: [
                    {value: {name: 'Item24'}},
                    {value: {name: 'Item41'}},
                    {value: {name: 'Item42'}},
                    {value: {name: 'Item43'}}
                ]
            },
            {
                value: {name: 'Sub-category6'},
                children: [
                    {value: {name: 'Item50'}},
                    {value: {name: 'Item51'}},
                    {value: {name: 'Item52'}}
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
            // {
            //     value: {name: 'Item9'}
            // }
        ]
    },
    {
        value: {name: 'Category3', bgColor: 'red'},
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

let options2 = [
    {
        value: {name: 'Category1', border: 'red'},
        children: [
            {
                value: {name: 'Sub-category1'},
                children: [
                    {value: {name: 'Item20'}}
                ]
            },
            {
                value: {name: 'Sub-category2'},
                children: [
                    {value: {name: 'Item21'}}
                ]
            }
            ,
            {
                value: {name: 'Sub-category3'},
                children: [
                    {value: {name: 'Item22'}}
                ]
            }
            ,
            {
                value: {name: 'Sub-category4'},
                children: [
                    {value: {name: 'Item23'}}
                ]
            }
            ,
            {
                value: {name: 'Sub-category5'},
                children: [
                    {value: {name: 'Item24'}}
                ]
            }
            ,
            {
                value: {name: 'Sub-category6'},
                children: [
                    {value: {name: 'Item25'}}
                ]
            }
        ]
    },
    {
        value: {name: 'Category2', border: 'green'},
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
        value: {name: 'Category3', border: 'yellow'},
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

let fetchedArr: any[]: any[] = [];
fetch('https://nominatim.openstreetmap.org/search/berlin?format=json&addressdetails=1&limit=20').then(response => response.json()).then(data => fetchedArr = data
);

type ICancelFn = () => void;

function searchOptions(
    term: string,
    callback: (res: any) => void,
): ICancelFn {
    let timeout = setTimeout(() => {

        callback(
            fetchedArr
                .filter((item: any) => item.display_name.toLocaleLowerCase().includes(term.toLocaleLowerCase()))
                .map((item) => ({value: item})),
        );
    }, 1000);

    return () => {
        clearTimeout(timeout);
    }
}

export class TreeSelectDocs extends React.Component<{}, IState> {
    constructor(props: Readonly<{}>) {
        super(props);
        this.state = {
            value: [],
            value2: [],
            options: options,
            options2: options,
            inputValue: '',
            arr: []
        }


        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e: { stopPropagation: () => void; preventDefault: () => void; }: { stopPropagation: () => void; preventDefault: () => void; }, option: { item: any; }: { item: any; }) {
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
                                    value={[{name: 'Item1'}, {name: 'Item2'}]}
                                    getOptions={() => options}
                                    kind={'synchronous'}
                                    getId={(item) => item.name}
                                    getLabel={(item) => item.name}
                                    getBackgroundColor={(item: any) => item.bgColor}
                                    selectBranchWithChildren={true}
                                    allowMultiple
                                    fullWidth
                                    //singleLevelSearch
                                    required
                                    info={'Info Message'}
                                    error={'Error Message'}
                                    label={'TreeSelect Label'}
                                    searchPlaceholder='Search...'
                                    onChange={() => false}
                                    valueTemplate={(item, Wrapper) => {
                                        return (
                                            <Wrapper backgroundColor={item.bgColor}>
                                                <span>{item.name}</span>
                                            </Wrapper>
                                        );
                                    }}
                                />
                            </div>
                        </div>
                    </Markup.ReactMarkupPreview>

                    <Markup.ReactMarkupCode>{`
                        <TreeSelect
                            value={[{name: 'Item1'}, {name: 'Item2'}]}
                            getOptions={() => options}
                            kind={'synchronous'}
                            getId={(item) => item.name}
                            getLabel={(item) => item.name}
                            getBackgroundColor={(item: any) => item.bgColor}
                            selectBranchWithChildren={true}
                            allowMultiple
                            fullWidth
                            singleLevelSearch
                            required
                            info={'Info Message'}
                            error={'Error Message'}
                            label={'TreeSelect Label'}
                            searchPlaceholder='Search...'
                            onChange={(e) => false}
                            valueTemplate={(item, Wrapper) => {
                                return (
                                    <Wrapper backgroundColor={item.bgColor}>
                                        <span>{item.name}</span>
                                    </Wrapper>
                                );
                            }}
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
                                getLabel={({display_name}) => display_name
                                }
                                getId={({qcode}) => qcode.display_name}
                                selectBranchWithChildren={false}
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
                                    getOptions={() => options2}
                                    kind={'synchronous'}
                                    getId={(item) => item.name}
                                    getLabel={(item) => item.name}
                                    getBackgroundColor={(item) => item.bgColor}
                                    getBorderColor={(item) => item.border}
                                    placeholder='Select one'
                                    selectBranchWithChildren={true}
                                    onChange={() => false}
                                    optionTemplate={(item: any) => {
                                        return <div>Label: {item.name}</div>
                                    }}
                                    valueTemplate={(item: any, Wrapper) => {
                                        return <Wrapper borderColor={item.border}>
                                            <span>{item.name}</span>
                                        </Wrapper>
                                    }}
                                />
                            </div>
                        </div>
                    </Markup.ReactMarkupPreview>

                    <Markup.ReactMarkupCode>{`
                        <TreeSelect
                            getOptions={() => options2}
                            kind={'synchronous'}
                            getId={(item) => item.name}
                            getLabel={(item) => item.name}
                            getBackgroundColor={(item) => item.bgColor}
                            getBorderColor={(item) => item.border}
                            placeholder='Select one'
                            selectBranchWithChildren={true}
                            onChange={(e) => false}
                            optionTemplate={(item: any) => {
                                return <div>Label: {item.name}</div>
                            }}
                            valueTemplate={(item: any, Wrapper) => {
                                return <Wrapper borderColor={item.border}>
                                    <span>{item.name}</span>
                                </Wrapper>
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
                    <Prop name='getBackgroundColor' isRequired={true} type='Function' default='/' description='Function to return background color of individual item in options.'/>
                    <Prop name='getBorderColor' isRequired={true} type='Function' default='/' description='Function to return border color of individual item in options in single-select mode.'/>
                    <Prop name='valueTemplate' isRequired={false} type='Function(item, Wrapper)' default='/' description='Function that gets an item in the value and returns the content for it.'/>
                    <Prop name='optionTemplate' isRequired={false} type='Function(item)' default='/' description='Function that gets the option and returns the content for it.'/>
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
