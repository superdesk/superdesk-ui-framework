import * as React from 'react';
import * as Markup from '../../js/react';
import {
    PropsList,
    Prop,
    SubNav,
    SearchBar,
    ButtonGroup,
    Button,
    IconButton,
    ContentDivider,
    CreateButton,
    BoxedList,
    BoxedListItem,
    Tag,
} from '../../../app-typescript';

interface IProps {
    children?: React.ReactNode;
}

interface IState {
    searchResult: string;
    searchResult1: string;
    searchResult2: string;
    searchResult3: string;
    fruitSearchQuery: string;
}

export default class SearchBarDoc extends React.Component<IProps, IState> {
    private searchBarRef: React.RefObject<SearchBar>;

    constructor(props: IProps) {
        super(props);
        this.state = {
            searchResult: '',
            searchResult1: '',
            searchResult2: '',
            searchResult3: '',
            fruitSearchQuery: '',
        };
        this.searchBarRef = React.createRef();
    }

    render() {
        return (
            <section className="docs-page__container">
                <h2 className="docs-page__h2">SearchBar</h2>

                <Markup.ReactMarkupCodePreview>
                    {`
                    <SearchBar placeholder='Search for something...' />
                    `}
                </Markup.ReactMarkupCodePreview>

                <p className="docs-page__paragraph">
                    The SearchBar is a component that allows the user to search for something. It can be used as a
                    standalone component or as a part of a SubNav.
                </p>

                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <p className="docs-page__paragraph">// Flat (default; for use within a SubNav component)</p>
                        <div className="docs-page__content-row mb-1">
                            <SubNav color="darker" className="ps-1">
                                <ButtonGroup align="start" className="me-1">
                                    <IconButton icon="filter-large" onClick={() => false} ariaValue="Filter" />
                                </ButtonGroup>
                                <ContentDivider margin="none" orientation="vertical" border={true} />
                                <SearchBar
                                    placeholder="Search for something..."
                                    onSubmit={(value) =>
                                        this.setState({
                                            searchResult2: value ?? '',
                                        })
                                    }
                                />
                                <CreateButton ariaValue="Create" onClick={() => false} />
                            </SubNav>
                        </div>
                        {this.state.searchResult2 && (
                            <div className="docs-page__content-row d-flex gap-1">
                                <Tag text={this.state.searchResult2} label="Searched for" />
                            </div>
                        )}

                        <p className="docs-page__paragraph">// Boxed (for standalone use)</p>
                        <div className="docs-page__content-row mb-1">
                            <SearchBar
                                boxed
                                placeholder="Search for something..."
                                onSubmit={(value) =>
                                    this.setState({
                                        searchResult1: value ?? '',
                                    })
                                }
                            />
                        </div>
                        {this.state.searchResult1 && (
                            <div className="docs-page__content-row d-flex gap-1">
                                <Tag text={this.state.searchResult1} label="Searched for" />
                            </div>
                        )}
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>
                        {`
                        // Flat (default; for use within a SubNav component)
                        <SubNav color='darker' className='ps-1'>
                            <ButtonGroup align='start' className='me-1'>
                                <IconButton icon='filter-large' onClick={()=> false} ariaValue='Filter' />
                            </ButtonGroup>
                            <ContentDivider margin='none' orientation='vertical' border={true} />
                            <SearchBar
                                placeholder='Search for something...'
                                onSubmit={(value) => console.log('Search:', value)}
                            />
                            <CreateButton ariaValue='Create' onClick={()=> false} />
                        </SubNav>

                        // Boxed (for standalone use)
                        <SearchBar
                            boxed
                            placeholder='Search for something...'
                            onSubmit={(value) => console.log('Search:', value)}
                        />
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3 docs-page__h3--small-top-m">External Triggering</h3>
                <p className="docs-page__paragraph">
                    Useful when you need to trigger the search from a different component, such as a button or a link.
                    You can also hide the internal search button is hidden when this is used.
                </p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <div className="docs-page__content-row docs-page__content-row--no-margin">
                            <SearchBar
                                ref={this.searchBarRef}
                                placeholder="Search externally..."
                                onSubmit={(value) =>
                                    this.setState({
                                        searchResult: value ?? '',
                                    })
                                }
                                hideSearchButton
                                boxed
                            />
                        </div>
                        <div className="docs-page__content-row">
                            <ButtonGroup align="start" className="mt-2">
                                <Button
                                    text="Search"
                                    type="primary"
                                    onClick={() => this.searchBarRef.current?.search()}
                                />
                                <Button
                                    text="Focus Input"
                                    type="primary"
                                    onClick={() => this.searchBarRef.current?.focus()}
                                />
                            </ButtonGroup>
                        </div>
                        {this.state.searchResult && (
                            <div className="docs-page__content-row d-flex gap-1">
                                <Tag text={this.state.searchResult} label="Searched for" />
                            </div>
                        )}
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>
                        {`
                        class MyComponent extends React.Component {
                            constructor(props) {
                                super(props);
                                this.searchBarRef = React.createRef();
                                this.state = { searchResult: '' };
                            }

                            render() {
                                return (
                                    <>
                                        <SearchBar
                                            ref={this.searchBarRef}
                                            placeholder='Search externally...'
                                            onSubmit={(value) => {
                                                console.log('Search:', value);
                                                this.setState({ searchResult: value ?? '' });
                                            }}
                                            hideSearchButton  // Hide internal search button when using external trigger
                                            boxed
                                        />
                                        <ButtonGroup align='start' className='mt-2'>
                                            <Button
                                                text="Focus Input"
                                                type="primary"
                                                onClick={() => this.searchBarRef.current?.focus()}
                                            />
                                        </ButtonGroup>
                                        {this.state.searchResult && (
                                            <Tag text={this.state.searchResult} label="Searched for" />
                                        )}
                                    </>
                                );
                            }
                        }
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3 docs-page__h3--small-top-m">Search while typing</h3>
                <p className="docs-page__paragraph">
                    Debounced automatic search, requires min 3 characters. The search is debounced and will only trigger
                    after the user has stopped typing for the specified delay.
                </p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <div className="docs-page__content-row mb-1">
                            <SearchBar
                                boxed
                                placeholder="Type at least 3 characters to search..."
                                searchOptions={{
                                    searchOnType: true,
                                    searchDelay: 500,
                                }}
                                onSubmit={(value) => {
                                    this.setState({
                                        searchResult3: value,
                                        fruitSearchQuery: value,
                                    });
                                }}
                            />
                        </div>
                        {this.state.searchResult3 && (
                            <div className="docs-page__content-row d-flex gap-1">
                                <Tag text={this.state.searchResult3} label="Searching for" />
                            </div>
                        )}
                        <div className="docs-page__content-row">
                            <BoxedList>
                                {(
                                    [
                                        'Apple',
                                        'Banana',
                                        'Cherry',
                                        'Date',
                                        'Elderberry',
                                        'Fig',
                                        'Grape',
                                        'Honeydew',
                                    ] as string[]
                                )
                                    .filter((fruit) => {
                                        const query = this.state.fruitSearchQuery.toLowerCase();
                                        // Show all fruits if no search query or query is less than 3 characters
                                        if (query.length === 0 || query.length < 3) {
                                            return true;
                                        }
                                        // Filter fruits when query is 3+ characters
                                        return fruit.toLowerCase().includes(query);
                                    })
                                    .map((fruit, index) => (
                                        <BoxedListItem key={index}>{fruit}</BoxedListItem>
                                    ))}
                            </BoxedList>
                        </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>
                        {`
                        // Search while typing (debounced automatic search, requires min 3 characters)
                        const fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Grape', 'Honeydew'];

                        <SearchBar
                            boxed
                            placeholder='Type at least 3 characters to search...'
                            searchOptions={{
                                searchOnType: true,
                                searchDelay: 500
                            }}
                            onSubmit={(value) => {
                                setState({
                                    searchResult: value ?? '',
                                    fruitSearchQuery: value ?? ''
                                });
                            }}
                        />
                        {searchResult && (
                            <Tag text={searchResult} label="Searching for" />
                        )}
                        <BoxedList>
                            {fruits
                                .filter((fruit) => {
                                    const query = fruitSearchQuery.toLowerCase();
                                    // Show all fruits if no search query or query is less than 3 characters
                                    if (query.length === 0 || query.length < 3) {
                                        return true;
                                    }
                                    // Filter fruits when query is 3+ characters
                                    return fruit.toLowerCase().includes(query);
                                })
                                .map((fruit, index) => (
                                    <BoxedListItem key={index}>{fruit}</BoxedListItem>
                                ))}
                        </BoxedList>

                        // The searchOnType prop enables automatic search while typing.
                        // Requires at least 3 characters before triggering search.
                        // The search button is automatically hidden when searchOnType is enabled.
                        // The searchDelay prop (optional, default: 300ms) controls the debounce delay.
                        // You can still manually trigger search with Enter key.
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">Props</h3>
                <PropsList>
                    <Prop
                        name="placeholder"
                        isRequired={true}
                        type="string"
                        default="/"
                        description="Placeholder text displayed in the search input."
                    />
                    <Prop
                        name="value"
                        isRequired={false}
                        type="string"
                        default="/"
                        description="Initial value for the search input. The component manages its own state internally, so this prop is typically not needed."
                    />
                    <Prop
                        name="type"
                        isRequired={false}
                        type="'expanded' | 'collapsed'"
                        default="'expanded'"
                        description="Display mode of the search bar."
                    />
                    <Prop
                        name="focused"
                        isRequired={false}
                        type="boolean"
                        default="false"
                        description="Auto-focus the input on mount."
                    />
                    <Prop
                        name="boxed"
                        isRequired={false}
                        type="boolean"
                        default="false"
                        description="Adds a boxed style for standalone use outside of SubNav."
                    />
                    <Prop
                        name="hideSearchButton"
                        isRequired={false}
                        type="boolean"
                        default="false"
                        description="Hides the internal search button (chevron icon). Useful when triggering search externally via ref methods. Note: The search button is automatically hidden when searchOnType is enabled. The cancel button remains visible."
                    />
                    <Prop
                        name="onSubmit"
                        isRequired={true}
                        type="(value?: string) => void"
                        default="/"
                        description="Callback function triggered when search is submitted (Enter key, search button click, via search() method, or automatically when searchOnType is enabled). Receives the current search value as a parameter."
                    />
                    <Prop
                        name="searchOnType"
                        isRequired={false}
                        type="boolean"
                        default="false"
                        description="Enables automatic search while typing. When enabled, the onSubmit callback is triggered automatically after the user stops typing (debounced). Requires at least 3 characters before triggering search. The search button is automatically hidden when this option is enabled. Manual search via Enter key still works."
                    />
                    <Prop
                        name="searchDelay"
                        isRequired={false}
                        type="number"
                        default="300"
                        description="Delay in milliseconds for debouncing the automatic search when searchOnType is enabled. Lower values trigger search more frequently, higher values wait longer after typing stops."
                    />
                </PropsList>

                <h3 className="docs-page__h3">Public Methods (via Ref)</h3>
                <PropsList>
                    <Prop
                        name="focus()"
                        isRequired={false}
                        type="() => void"
                        default="/"
                        description="Focuses the search input programmatically."
                    />
                </PropsList>
            </section>
        );
    }
}
