import * as React from 'react';

import * as Markup from '../../js/react';

import { CheckGroup, Checkbox, Autocomplete, PropsList, Prop } from '../../../app-typescript';

interface IState {
    items: Array<any>;
    inlineLabel: boolean;
    required: boolean;
    disabled: boolean;
    invalid: boolean;
}

export default class AutocompleteDoc extends React.Component<{}, IState> {
    constructor(props: Readonly<{}>) {
        super(props);
        this.state = {
            items: [
                { name: 'Item 1', value: 'item-1', description: 'Some description for item 1' },
                { name: 'Item 2', value: 'item-2', description: 'Some description for item 2' },
                { name: 'Item 3', value: 'item-3', description: 'Some description for item 3' },
                { name: 'Item 4', value: 'item-4', description: 'Some description for item 4'}
            ],
            inlineLabel: false,
            required: true,
            disabled: false,
            invalid: false,
        }
    }

    searchFunction(searchString: string: string, callback: (arg0: { name: string; value: string; }[]) => void: (arg0: { name: string; value: string; }[]) => void) {

        let items = [
            { name: 'Item Custom Search 1', value: 'item-1' },
            { name: 'Item Custom Search 2', value: 'item-2' },
            { name: 'Item Custom Search 3', value: 'item-3' }
        ]

        let filteredItems = items.filter((item) =>
            item.name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1 ? item : false);

        callback(filteredItems);

        return {
            cancel: () => {
            },
        };
    }

    customListTemplate(item: any) {
        return (
            <div className="list-item">
                <b>{item.name}</b>
                <p>{item.description}</p>
            </div>
        )
    }

    render() {
        return (
            <section className='docs-page__container'>
                <h2 className='docs-page__h2'>Autocomplete</h2>
                <p className='docs-page__paragraph'></p>
                <Markup.ReactMarkupCodePreview>{`
                    import {Autocomplete} from 'superdesk-ui-framework/react'
                    `}
                </Markup.ReactMarkupCodePreview>

                <h3 className="docs-page__h3 docs-page__h3--small-top-m">Basic Autocomplete</h3>
                <p className="docs-page__paragraph">For basic usage of autocomplete, you need to pass value for prop <code>text</code> and <code>items</code>. Items can be passed as array of strings or array of objects. 
                If you pass array of objects, you need to define prop <code>keyValue</code> as object key, so autocomplete can know which propery to use as display option.</p>
                <Markup.ReactMarkupCodePreview>{`
                    <Autocomplete label='Autocomplete label' keyValue="name" items={items} />
                `}
                </Markup.ReactMarkupCodePreview>
                <p className='docs-page__paragraph'></p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <div className='docs-page__content-row docs-page__content-row--no-margin'>
                            <div className='form__row'>
                                <CheckGroup>
                                    <Checkbox checked={this.state.required} label={{ text: 'Required input' }} onChange={(value) => { this.setState({ required: value }) }} />
                                    <Checkbox checked={this.state.disabled} label={{ text: 'Disabled input' }} onChange={(value) => { this.setState({ disabled: value }) }} />
                                    <Checkbox checked={this.state.invalid} label={{ text: 'Invalid input' }} onChange={(value) => { this.setState({ invalid: value }) }} />
                                    <Checkbox checked={this.state.inlineLabel} label={{ text: 'Label positioned inline' }} onChange={(value) => { this.setState({ inlineLabel: value }) }} />
                                </CheckGroup>
                            </div>

                            <div className='form__row'>
                                <Autocomplete
                                    label='Autocomplete label'
                                    items={this.state.items}
                                    keyValue="name"
                                    info='Try typing `item`...'
                                    error='This is an error message'
                                    inlineLabel={this.state.inlineLabel}
                                    required={this.state.required}
                                    disabled={this.state.disabled}
                                    invalid={this.state.invalid}
                                    onChange={() => { }}
                                    onSelect={() => { }} />
                            </div>
                        </div>

                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        let items = [
                            { name: 'Item 1', value: 'item-1' },
                            { name: 'Item 2', value: 'item-2' },
                            { name: 'Item 3', value: 'item-3' },
                            { name: 'Item 4', value: 'item-4' }
                        ];

                        <Autocomplete
                            label='Autocomplete label'
                            items={this.state.items}
                            keyValue="name"
                            info='Type item...'
                            inlineLabel="Autocomplete label
                            required={this.state.required}
                            disabled={this.state.disabled}
                            invalid={this.state.invalid}
                            onChange={() => { }}
                            onSelect={() => { }} />
                    `}</Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3 docs-page__h3--small-top-m">Autocomplete with Search field</h3>
                <p className="docs-page__paragraph">Set prop <code>isSearchField</code> to <code>{true}</code> to enable this option.
                The search field does't have a visible lable. The value of the label prop will be used for the aria-label.</p>
                <Markup.ReactMarkupCodePreview>{`
                    <Autocomplete label='Search' keyValue="name" items={items} isSearchField={true} />
                `}
                </Markup.ReactMarkupCodePreview>
                <p className='docs-page__paragraph'></p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <div className='docs-page__content-row docs-page__content-row--no-margin'>
                            <div className='form__row'>
                                <Autocomplete
                                    label='Search items'
                                    items={this.state.items}
                                    keyValue="name"
                                    error='There was an error using the search'
                                    isSearchField={true}
                                    placeholder='Search'
                                    required={this.state.required}
                                    disabled={this.state.disabled}
                                    invalid={this.state.invalid}
                                    onChange={() => { }}
                                    onSelect={() => { }} />
                            </div>
                        </div>

                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        let items = [
                            { name: 'Item 1', value: 'item-1' },
                            { name: 'Item 2', value: 'item-2' },
                            { name: 'Item 3', value: 'item-3' },
                            { name: 'Item 4', value: 'item-4' }
                        ];

                        <Autocomplete
                            label='Search items'
                            items={this.state.items}
                            keyValue="name"
                            error='There was an error using the search'
                            isSearchField={true}
                            placeholder='Search'
                            required={this.state.required}
                            disabled={this.state.disabled}
                            invalid={this.state.invalid}
                            onChange={() => { }}
                            onSelect={() => { }} />
                    `}</Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3 docs-page__h3--small-top-m">Autocomplete with custom search function</h3>
                <p className="docs-page__paragraph">Define prop <code>search</code> with custom function.</p>
                <Markup.ReactMarkupCodePreview>{`
                    <Autocomplete label="Autocomplete label" items={this.props.items} search={this.search} />
                `}
                </Markup.ReactMarkupCodePreview>
                <p className='docs-page__paragraph'></p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <div className='docs-page__content-row docs-page__content-row--no-margin'>
                            <div className='form__row'>
                                <Autocomplete
                                    label='Autocomplete label'
                                    items={this.state.items}
                                    keyValue="name"
                                    info="Try typing `item custom`...'"
                                    search={this.searchFunction}
                                    inlineLabel={this.state.inlineLabel}
                                    required={this.state.required}
                                    disabled={this.state.disabled}
                                    invalid={this.state.invalid}
                                    onChange={() => { this.setState({ }) }}
                                    onSelect={() => { this.setState({ }) }} />
                            </div>
                        </div>

                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        searchFunction(searchString, callback) {
                            let cancelled = false;

                            let items = [
                                { name: 'Item Custom Search 1', value: 'item-1' },
                                { name: 'Item Custom Search 2', value: 'item-2' },
                                { name: 'Item Custom Search 3', value: 'item-3' }
                            ]

                            let filteredItems = items.filter((item) =>
                                item.name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1 ? item : false);

                            callback(filteredItems);

                            return {
                                cancel: () => {
                                    cancelled = true;
                                },
                            };
                        }

                        <Autocomplete
                            label='Autocomplete label'
                            items={this.state.items}
                            keyValue="name"
                            search={this.searchFunction}
                            inlineLabel={this.state.inlineLabel}
                            required={this.state.required}
                            disabled={this.state.disabled}
                            invalid={this.state.invalid}
                            onChange={(value) => { this.setState({ }) }}
                            onSelect={(value) => { this.setState({ }) }} />
                    `}</Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3 docs-page__h3--small-top-m">Autocomplete with custom list template</h3>
                <p className="docs-page__paragraph">Define prop <code>listItemTemplate</code> with function that returns structure for list item. Function returns item, string or object.</p>
                <Markup.ReactMarkupCodePreview>{`
                    <Autocomplete label="Autocomplete label" items={this.props.items} listItemTemplate={this.customListTemplate} />
                `}
                </Markup.ReactMarkupCodePreview>
                <p className='docs-page__paragraph'></p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <div className='docs-page__content-row docs-page__content-row--no-margin'>
                            <div className='form__row'>
                                <Autocomplete
                                    label='Autocomplete label'
                                    items={this.state.items}
                                    keyValue='name'
                                    listItemTemplate={this.customListTemplate}
                                    info="Try typing `item custom`...'"
                                    inlineLabel={this.state.inlineLabel}
                                    required={this.state.required}
                                    disabled={this.state.disabled}
                                    invalid={this.state.invalid}
                                    onChange={() => { this.setState({ }) }}
                                    onSelect={() => { this.setState({ }) }} />
                            </div>
                        </div>

                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        customListTemplate(item: any) {
                            return (
                                <div className="list-item">
                                    <b>{item.name}</b>
                                    <p>{item.description}</p>
                                </div>
                            )
                        }

                        <Autocomplete
                            label='Autocomplete label'
                            items={this.state.items}
                            listItemTemplate={this.customListTemplate}
                            inlineLabel={this.state.inlineLabel}
                            required={this.state.required}
                            disabled={this.state.disabled}
                            invalid={this.state.invalid}
                            onChange={(value) => { this.setState({ }) }}
                            onSelect={(value) => { this.setState({ }) }} />
                    `}</Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className='docs-page__h3'>Props</h3>
                <PropsList>
                    <Prop name='items' isRequired={true} type='array' default='/' description='Array of values for autocomplete' />
                    <Prop name='value' isRequired={false} type='any' default='/' description='Value to be predefined on component load' />
                    <Prop name='keyValue' isRequired={false} type='string' default='/' description='Key value if array is combined of objects' />
                    <Prop name='minLength' isRequired={false} type='number' default='1' description='Minimum number of characters to initiate a search' />
                    <Prop name='listItemTemplate' isRequired={false} type='function' default='/' description='Create custom view of list item' />
                    <Prop name='label' isRequired={false} type='string' default='/' description='Input label' />
                    <Prop name='info' isRequired={false} type='string' default='/' description='Hint text' />
                    <Prop name='error' isRequired={false} type='string' default='/' description='Error text' />
                    <Prop name='placeholder' isRequired={false} type='string' default='/' description='Placeholder text for the input field.' />
                    <Prop name='isSearchField' isRequired={false} type='boolean' default='false' 
                          description='Styles the input as a search field, adds a search icon and the option to clear the field. No visible 
                                       lable is present in this option.' />
                    <Prop name='inlineLabel' isRequired={false} type='boolean' default='false' description='Position labels as inline' />
                    <Prop name='required' isRequired={false} type='boolean' default='false' description='Mark field as required' />
                    <Prop name='disabled' isRequired={false} type='boolean' default='false' description='Mark field as disabled' />
                    <Prop name='invalid' isRequired={false} type='boolean' default='false' description='Mark field as invalid' />
                </PropsList>

                <h3 className='docs-page__h3'>Events</h3>
                <PropsList>
                    <Prop name='search' isRequired={false} type='function' default='/' description='Custom function for filtering items' />
                    <Prop name='onChange' isRequired={true} type='function' default='/' description='Returns value of text input' />
                    <Prop name='onSelect' isRequired={false} type='function' default='/' description='Returns selected value' />
                </PropsList>
            </section>
        )
    }
}
