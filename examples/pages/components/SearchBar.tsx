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
                                            searchResult2: typeof value === 'string' ? value : String(value || ''),
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
                                        searchResult1: typeof value === 'string' ? value : String(value || ''),
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
                    The SearchBar can be triggered externally via ref methods. This is useful when you need to trigger
                    the search from a different component, such as a button or a link. The internal search button is
                    hidden when this is used.
                </p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <div className="docs-page__content-row docs-page__content-row--no-margin">
                            <SearchBar
                                ref={this.searchBarRef}
                                placeholder="Search externally..."
                                onSubmit={(value) =>
                                    this.setState({
                                        searchResult: typeof value === 'string' ? value : String(value || ''),
                                    })
                                }
                                hideSearchButton
                                boxed
                            />
                        </div>
                        <div className="docs-page__content-row">
                            <ButtonGroup align="start" className="mt-2">
                                <Button
                                    text="Trigger Search"
                                    type="primary"
                                    onClick={() => this.searchBarRef.current?.triggerSearch()}
                                />
                                <Button
                                    text="Clear Search"
                                    type="tertiary"
                                    onClick={() => this.searchBarRef.current?.clearSearch()}
                                />
                                <Button
                                    text="Focus Input"
                                    type="tertiary"
                                    onClick={() => this.searchBarRef.current?.focus()}
                                />
                                <Button
                                    text="Set Value"
                                    type="tertiary"
                                    onClick={() => this.searchBarRef.current?.setValue('Pre-filled text')}
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
                            }

                            render() {
                                return (
                                    <>
                                        <SearchBar 
                                            ref={this.searchBarRef} 
                                            placeholder='Search externally...' 
                                            onSubmit={(value) => console.log('Search:', value)}
                                            hideSearchButton  // Hide internal search button when using external trigger
                                            boxed
                                        />
                                        <ButtonGroup align='start' className='mt-2'>
                                            <Button 
                                                text="Trigger Search" 
                                                type="primary"
                                                onClick={() => this.searchBarRef.current?.triggerSearch()} 
                                            />
                                            <Button 
                                                text="Clear Search" 
                                                type="tertiary"
                                                onClick={() => this.searchBarRef.current?.clearSearch()} 
                                            />
                                            <Button 
                                                text="Focus Input" 
                                                type="tertiary"
                                                onClick={() => this.searchBarRef.current?.focus()} 
                                            />
                                            <Button 
                                                text="Set Value" 
                                                type="tertiary"
                                                onClick={() => this.searchBarRef.current?.setValue('Pre-filled text')} 
                                            />
                                        </ButtonGroup>
                                        {searchResult && (
                                            <Tag text={searchResult} label="Searched for" />
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
                                searchOnType
                                searchDelay={500}
                                onSubmit={(value) => {
                                    const query = typeof value === 'string' ? value : String(value || '');
                                    this.setState({
                                        searchResult3: query,
                                        fruitSearchQuery: query,
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
                            searchOnType
                            searchDelay={500}
                            onSubmit={(value) => {
                                const query = typeof value === 'string' ? value : String(value || '');
                                setState({
                                    searchResult: query,
                                    fruitSearchQuery: query
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
                        description="Initial or controlled value for the search input."
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
                        isRequired={false}
                        type="(value: string | number) => void"
                        default="/"
                        description="Callback function triggered when search is submitted (Enter key, search button click, via triggerSearch() method, or automatically when searchOnType is enabled)."
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
                        name="triggerSearch()"
                        isRequired={false}
                        type="() => void"
                        default="/"
                        description="Programmatically triggers the search submission with the current input value."
                    />
                    <Prop
                        name="clearSearch()"
                        isRequired={false}
                        type="() => void"
                        default="/"
                        description="Clears the search input and triggers onSubmit with an empty string."
                    />
                    <Prop
                        name="focus()"
                        isRequired={false}
                        type="() => void"
                        default="/"
                        description="Focuses the search input programmatically."
                    />
                    <Prop
                        name="setValue(value: string)"
                        isRequired={false}
                        type="(value: string) => void"
                        default="/"
                        description="Sets the value of the search input programmatically."
                    />
                </PropsList>
            </section>
        );
    }
}
