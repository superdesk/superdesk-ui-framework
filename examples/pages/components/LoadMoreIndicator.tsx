import * as React from 'react';
import * as Markup from '../../js/react';
import {LoadMoreIndicator, PropsList, Prop} from '../../../app-typescript';

interface IState {
    showExample1: boolean;
    showExample2: boolean;
    showExample3: boolean;
}

export default class LoadMoreIndicatorDoc extends React.Component<{}, IState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            showExample1: true,
            showExample2: true,
            showExample3: true,
        };
    }

    render() {
        return (
            <section className="docs-page__container">
                <h2 className="docs-page__h2">LoadMoreIndicator</h2>
                <Markup.ReactMarkupCodePreview>
                    {`
                    <LoadMoreIndicator
                        loading={true}
                        currentCount={25}
                        totalCount={100}
                    />
                `}
                </Markup.ReactMarkupCodePreview>
                <p className="docs-page__paragraph">
                    A loading indicator component designed to be appended at the end of scrollable lists during infinite
                    scroll/pagination. Shows a spinner with optional progress counter.
                </p>

                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <p className="docs-page__paragraph">// Default with progress counter</p>
                        <div style={{border: '1px solid var(--sd-colour-line--light)', borderRadius: '4px'}}>
                            <ul className="sd-list-item-group">
                                <li className="sd-list-item">
                                    <div className="sd-list-item__column">Item 1</div>
                                </li>
                                <li className="sd-list-item">
                                    <div className="sd-list-item__column">Item 2</div>
                                </li>
                                <li className="sd-list-item">
                                    <div className="sd-list-item__column">Item 3</div>
                                </li>
                                <LoadMoreIndicator loading={this.state.showExample1} currentCount={3} totalCount={10} />
                            </ul>
                        </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>
                        {`
                        <ul className="sd-list-item-group">
                            <li className="sd-list-item">...</li>
                            <li className="sd-list-item">...</li>
                            <li className="sd-list-item">...</li>
                            <LoadMoreIndicator
                                loading={true}
                                currentCount={3}
                                totalCount={10}
                            />
                        </ul>
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <p className="docs-page__paragraph">// Without progress counter</p>
                        <div style={{border: '1px solid var(--sd-colour-line--light)', borderRadius: '4px'}}>
                            <ul className="sd-list-item-group">
                                <li className="sd-list-item">
                                    <div className="sd-list-item__column">Item 1</div>
                                </li>
                                <li className="sd-list-item">
                                    <div className="sd-list-item__column">Item 2</div>
                                </li>
                                <LoadMoreIndicator
                                    loading={this.state.showExample2}
                                    currentCount={2}
                                    totalCount={10}
                                    showProgress={false}
                                />
                            </ul>
                        </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>
                        {`
                        <LoadMoreIndicator
                            loading={true}
                            currentCount={2}
                            totalCount={10}
                            showProgress={false}
                        />
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <p className="docs-page__paragraph">// Custom text and loader size</p>
                        <div style={{border: '1px solid var(--sd-colour-line--light)', borderRadius: '4px'}}>
                            <ul className="sd-list-item-group">
                                <li className="sd-list-item">
                                    <div className="sd-list-item__column">Item 1</div>
                                </li>
                                <LoadMoreIndicator
                                    loading={this.state.showExample3}
                                    currentCount={1}
                                    totalCount={5}
                                    loadingText="Fetching more items..."
                                    loaderSize="medium"
                                />
                            </ul>
                        </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>
                        {`
                        <LoadMoreIndicator
                            loading={true}
                            currentCount={1}
                            totalCount={5}
                            loadingText="Fetching more items..."
                            loaderSize="medium"
                        />
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">Props</h3>
                <PropsList>
                    <Prop
                        name="loading"
                        isRequired={true}
                        type="boolean"
                        default="/"
                        description="Whether the loading indicator should be visible"
                    />
                    <Prop
                        name="currentCount"
                        isRequired={true}
                        type="number"
                        default="/"
                        description="Current number of loaded items"
                    />
                    <Prop
                        name="totalCount"
                        isRequired={true}
                        type="number"
                        default="/"
                        description="Total number of items available"
                    />
                    <Prop
                        name="loadingText"
                        isRequired={false}
                        type="string"
                        default="'Loading more...'"
                        description="Custom loading text"
                    />
                    <Prop
                        name="showProgress"
                        isRequired={false}
                        type="boolean"
                        default="true"
                        description="Whether to show the progress counter (e.g., '25 of 100')"
                    />
                    <Prop
                        name="loaderSize"
                        isRequired={false}
                        type="'small' | 'medium' | 'large'"
                        default="'small'"
                        description="Size of the loader spinner"
                    />
                    <Prop
                        name="className"
                        isRequired={false}
                        type="string"
                        default="/"
                        description="Custom className for the container"
                    />
                    <Prop
                        name="data-test-id"
                        isRequired={false}
                        type="string"
                        default="'load-more-indicator'"
                        description="Test ID for testing purposes"
                    />
                </PropsList>

                <h3 className="docs-page__h3">Usage with Infinite Scroll</h3>
                <p className="docs-page__paragraph">
                    This component is designed to work with infinite scroll patterns. Simply add it at the end of your
                    list and control its visibility with a loading state that tracks when you're fetching more items.
                </p>
                <Markup.ReactMarkupCode>
                    {`
                    class MyListComponent extends React.Component {
                        state = { isNextPageLoading: false };

                        handleScroll = (event) => {
                            if (this.state.isNextPageLoading) return;

                            const node = event.target;
                            if (node.scrollTop + node.offsetHeight + 200 >= node.scrollHeight) {
                                this.setState({ isNextPageLoading: true });
                                this.props.loadMore()
                                    .finally(() => this.setState({ isNextPageLoading: false }));
                            }
                        };

                        render() {
                            return (
                                <ul onScroll={this.handleScroll}>
                                    {this.props.items.map(item => <li key={item.id}>{item.name}</li>)}
                                    <LoadMoreIndicator
                                        loading={this.state.isNextPageLoading}
                                        currentCount={this.props.items.length}
                                        totalCount={this.props.totalCount}
                                    />
                                </ul>
                            );
                        }
                    }
                `}
                </Markup.ReactMarkupCode>

                <h3 className="docs-page__h3">Accessibility</h3>
                <p className="docs-page__paragraph">
                    The component includes proper ARIA attributes for screen readers:
                </p>
                <ul className="docs-page__ul">
                    <li>
                        <code>role="status"</code> - Indicates the element is a status message
                    </li>
                    <li>
                        <code>aria-live="polite"</code> - Screen readers will announce updates when convenient
                    </li>
                    <li>
                        <code>aria-busy="true"</code> - Indicates the section is being updated
                    </li>
                </ul>
            </section>
        );
    }
}
