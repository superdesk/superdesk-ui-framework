import * as React from 'react';
import * as Markup from '../../js/react';
import { PropsList, Prop } from '../../../app-typescript';
import { TreeSelect } from '../../../app-typescript/components/TreeSelect/TreeSelect';

interface IState {
    value: any;
    value2: any;
    options: any;
    options2: any;
    inputValue: string;
    arr: any;
}

const multiSelectOptions = [
    {
        value: {name: 'Category1'},
        children: [
            {
                value: {name: 'Sub-category1'},
                children: [
                    {value: {name: 'Item5'}},
                    {value: {name: 'Item6'}},
                    {value: {name: 'Item7'}},
                    {value: {name: 'Item8'}},

                ]
            },
            {
                value: {name: 'Sub-category2'},
                children: [
                    {value: {name: 'Item9'}},
                    {value: {name: 'Item10'}},
                    {value: {name: 'Item11'}},
                    {value: {name: 'Item12'}},
                ]
            },
            {
                value: {name: 'Sub-category3'},
                children: [
                    {value: {name: 'Item13'}},
                    {value: {name: 'Item14'}},
                ]
            },
            {
                value: {name: 'Sub-category4'},
                children: [
                    {value: {name: 'Item15'}},
                    {value: {name: 'Item16'}},
                ]
            },
            {
                value: {name: 'Sub-category5'},
                children: [
                    {value: {name: 'Item17'}},
                    {value: {name: 'Item18'}},
                    {value: {name: 'Item19'}},
                    {value: {name: 'Item20'}},
                ]
            },
            {
                value: {name: 'Sub-category6'},
                children: [
                    {value: {name: 'Item21'}},
                    {value: {name: 'Item22'}},
                    {value: {name: 'Item23'}},
                    {value: {name: 'Item24'}},
                ]
            }
        ]
    },
    {
        value: {name: 'Category2'},
        children: [
            {
                value: {name: 'Item1'}
            },
            {
                value: {name: 'Item2'}
            }
        ]
    },
    {
        value: {name: 'Category3', bgColor: 'red'},
        children: [
            {
                value: {name: 'Item3'}
            },
            {
                value: {name: 'Item4'}
            }
        ]
    },
]

const singleSelectOptions = [
    {
        value: {name: 'Category1', border: 'red'},
        children: [
            {
                value: {name: 'Sub-category1'},
                children: [
                    {value: {name: 'Item5'}},
                    {value: {name: 'Item6'}},
                ]
            },
            {
                value: {name: 'Sub-category2'},
                children: [
                    {value: {name: 'Item7'}},
                    {value: {name: 'Item8'}},
                ]
            }
            ,
            {
                value: {name: 'Sub-category3'},
                children: [
                    {value: {name: 'Item9'}},
                    {value: {name: 'Item10'}},
                ]
            }
            ,
            {
                value: {name: 'Sub-category4'},
                children: [
                    {value: {name: 'Item11'}},
                    {value: {name: 'Item12'}},
                ]
            }
            ,
            {
                value: {name: 'Sub-category5'},
                children: [
                    {value: {name: 'Item13'}},
                    {value: {name: 'Item14'}},
                ]
            }
            ,
            {
                value: {name: 'Sub-category6'},
                children: [
                    {value: {name: 'Item15'}},
                    {value: {name: 'Item16'}},
                ]
            }
        ]
    },
    {
        value: {name: 'Category2', border: 'green'},
        children: [
            {
                value: {name: 'Item1'}
            },
            {
                value: {name: 'Item2'}
            }
        ]
    },
    {
        value: {name: 'Category3', border: 'yellow'},
        children: [
            {
                value: {name: 'Item3'}
            },
            {
                value: {name: 'Item4'}
            }
        ]
    },
]

type ICancelFn = () => void;

function searchOptions(
    term: string,
    callback: (res: any) => void,
): ICancelFn {
    let timeout = setTimeout(() => {

        callback(
            multiSelectOptions.filter((item: any) => item.value.name.toLocaleLowerCase().includes(term.toLocaleLowerCase()))
        );
    }, 1000);

    return () => {
        clearTimeout(timeout);
    }
}

export class TreeSelectDocs extends React.Component<{}, IState> {
    constructor(props) {
        super(props);
        this.state = {
            value: [],
            value2: [],
            options: multiSelectOptions,
            options2: multiSelectOptions,
            inputValue: '',
            arr: []
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
                        kind={'synchronous' | 'asynchronous'}
                        value={this.state.value}
                        getOptions={() => this.state.options}
                        getLabel={(item) => item.label}
                        getId={(item) => item.id}
                        allowMultiple
                        selectBranchWithChildren
                        onChange={() => false}
                    />
                `}
                </Markup.ReactMarkupCodePreview>

                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <div className='docs-page__content-row docs-page__content-row--no-margin'>
                            <div className='form__row'>
                                <TreeSelect
                                    kind='synchronous'
                                    value={[{name: 'Category1'}]}
                                    getOptions={() => multiSelectOptions}
                                    getId={(item) => item.name}
                                    getLabel={(item) => item.name}
                                    selectBranchWithChildren
                                    allowMultiple
                                    label='TreeSelect Label'
                                    info='Info Message'
                                    searchPlaceholder='Search...'
                                    getBackgroundColor={(item: any) => item.bgColor}
                                    valueTemplate={(item, Wrapper) => {
                                        return (
                                            <Wrapper backgroundColor={item.bgColor}>
                                                <span>{item.name}</span>
                                            </Wrapper>
                                        );
                                    }}
                                    onChange={(e) => false}
                                />
                            </div>
                        </div>
                    </Markup.ReactMarkupPreview>

                    <Markup.ReactMarkupCode>{`
                        <TreeSelect
                            kind='synchronous'
                            value={[{name: 'Category1'}]}
                            getOptions={() => options}
                            getId={(item) => item.name}
                            getLabel={(item) => item.name}
                            selectBranchWithChildren
                            allowMultiple
                            label='TreeSelect Label'
                            info='Info Message'
                            searchPlaceholder='Search...'
                            getBackgroundColor={(item: any) => item.bgColor}
                            valueTemplate={(item, Wrapper) => {
                                return (
                                    <Wrapper backgroundColor={item.bgColor}>
                                        <span>{item.name}</span>
                                    </Wrapper>
                                );
                            }}
                            onChange={(e) => false}
                        />
                    `}</Markup.ReactMarkupCode>

                </Markup.ReactMarkup>

                <p className='docs-page__paragraph'>Sortable mode in TreeSelect.</p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <div className='docs-page__content-row docs-page__content-row--no-margin'>
                            <div className='form__row'>
                                <TreeSelect
                                    kind='synchronous'
                                    value={[{name: 'Category1'}, {name: 'Category2'}, {name: 'Category3'}]}
                                    getOptions={() => multiSelectOptions}
                                    getId={(item) => item.name}
                                    getLabel={(item) => item.name}
                                    selectBranchWithChildren
                                    allowMultiple
                                    sortable
                                    label='TreeSelect Label'
                                    info='Info Message'
                                    searchPlaceholder='Search...'
                                    getBackgroundColor={(item: any) => item.bgColor}
                                    valueTemplate={(item, Wrapper) => {
                                        return (
                                            <Wrapper backgroundColor={item.bgColor}>
                                                <span>{item.name}</span>
                                            </Wrapper>
                                        );
                                    }}
                                    onChange={(e) => false}
                                />
                            </div>
                        </div>
                    </Markup.ReactMarkupPreview>

                    <Markup.ReactMarkupCode>{`
                        <TreeSelect
                            kind='synchronous'
                            value={[{name: 'Category1'}]}
                            getOptions={() => options}
                            getId={(item) => item.name}
                            getLabel={(item) => item.name}
                            selectBranchWithChildren
                            allowMultiple
                            sortable
                            label='TreeSelect Label'
                            info='Info Message'
                            searchPlaceholder='Search...'
                            getBackgroundColor={(item: any) => item.bgColor}
                            valueTemplate={(item, Wrapper) => {
                                return (
                                    <Wrapper backgroundColor={item.bgColor}>
                                        <span>{item.name}</span>
                                    </Wrapper>
                                );
                            }}
                            onChange={(e) => false}
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
                                value={this.state.value}
                                getLabel={({name}) => name}
                                getId={({name}) => name}
                                selectBranchWithChildren
                                allowMultiple
                                searchOptions={searchOptions}
                                label='TreeSelect Label'
                                info='Info Message'
                                onChange={(val) => {
                                    this.setState({value: val});
                                }}
                            />
                            </div>
                        </div>
                    </Markup.ReactMarkupPreview>

                    <Markup.ReactMarkupCode>{`
                        <TreeSelect
                            kind="asynchronous"
                            value={this.state.value}
                            getLabel={({display_name}) => display_name}
                            getId={({display_name}) => display_name}
                            selectBranchWithChildren
                            allowMultiple
                            searchOptions={searchOptions}
                            label='TreeSelect Label'
                            info='Info Message'
                            onChange={(val) => {
                                this.setState({value: val});
                            }}
                        />
                    `}</Markup.ReactMarkupCode>

                </Markup.ReactMarkup>

                <p className='docs-page__paragraph'>SingleSelect mode with custom template.</p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <div className='docs-page__content-row docs-page__content-row--no-margin'>
                            <div className='form__row'>
                                <TreeSelect
                                    kind='synchronous'
                                    value={[]}
                                    getOptions={() => singleSelectOptions}
                                    getLabel={(item) => item.name}
                                    getId={(item) => item.name}
                                    getBorderColor={(item) => item.border}
                                    selectBranchWithChildren
                                    label='TreeSelect Label'
                                    info='Info Message'
                                    placeholder='Select one'
                                    optionTemplate={(item: any) => {
                                        return <div>Label: {item.name}</div>
                                    }}
                                    valueTemplate={(item: any, Wrapper) => {
                                        return <Wrapper borderColor={item.border}>
                                            <span>{item.name}</span>
                                        </Wrapper>
                                    }}
                                    onChange={(e) => false}
                                />
                            </div>
                        </div>
                    </Markup.ReactMarkupPreview>

                    <Markup.ReactMarkupCode>{`
                        <TreeSelect
                            kind='synchronous'
                            value={[]}
                            getOptions={() => options2}
                            getLabel={(item) => item.name}
                            getId={(item) => item.name}
                            getBorderColor={(item) => item.border}
                            selectBranchWithChildren
                            label='TreeSelect Label'
                            info='Info Message'
                            placeholder='Select one'
                            optionTemplate={(item: any) => {
                                return <div>Label: {item.name}</div>
                            }}
                            valueTemplate={(item: any, Wrapper) => {
                                return <Wrapper borderColor={item.border}>
                                    <span>{item.name}</span>
                                </Wrapper>
                            }}
                            onChange={(e) => false}
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
                    <Prop name='sortable' isRequired={false} type='boolean' default='/' description='Enable drag & drop functionality.'/>
                    <Prop name='placeholder' isRequired={false} type='string' default='/' description='Placeholder of component in single select mode.'/>
                    <Prop name='searchPlaceholder' isRequired={false} type='string' default='/' description='Filter input placeholder.'/>
                    <Prop name='getLabel' isRequired={true} type='Function' default='/' description='Callback to invoke when value changes.'/>
                    <Prop name='getId' isRequired={true} type='Function' default='/' description='Callback to invoke when value changes.'/>
                    <Prop name='getBackgroundColor' isRequired={true} type='Function' default='/' description='Function to return background color of individual item in options.'/>
                    <Prop name='getBorderColor' isRequired={true} type='Function' default='/' description='Function to return border color of individual item in options in single-select mode.'/>
                    <Prop name='valueTemplate' isRequired={false} type='Function(item, Wrapper)' default='/' description='Function that gets an item in the value and returns the content for it.'/>
                    <Prop name='optionTemplate' isRequired={false} type='Function(item)' default='/' description='Function that gets the option and returns the content for it.'/>
                    <Prop name='onChange' isRequired={true} type='Function' default='/' description='Callback to invoke when value changes.'/>
                    <Prop name='label' isRequired={false} type='string' default='/' description='Label of component.' />
                    <Prop name='inlineLabel' isRequired={false} type='boolean' default='false' description='Position labels as inline.' />
                    <Prop name='tabindex' isRequired={false} type='number' default='/' description='Indicates an element can be focused on, and determines how that focus is handled.'/>
                    <Prop name='info' isRequired={false} type='string' default='/' description='Info message of component.' />
                    <Prop name='error' isRequired={false} type='string' default='/' description='Error message of component.' />
                    <Prop name='required' isRequired={false} type='boolean' default='false' description='Mark field as required.' />
                    <Prop name='disabled' isRequired={false} type='boolean' default='false' description='Mark field as disabled.' />
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
