import * as React from 'react';
import {Icon} from '../components/Icon';

interface IProps<T> {
    getItems(pageNo: number, pageSize: number, signal: AbortSignal): Promise<{items: Array<T>, itemCount: number}>;
    children: (items: Array<T>) => JSX.Element;
    pageSize?: number;
}

interface IState<T> {
    currentPage: number;
    items: Array<T> | null;
}

export function getPagination(currentPage: number, totalPages: number): Array<number | 'dots'> {
    if (currentPage <= 0 || totalPages <= 0 || currentPage > totalPages) {
        return [];
    }

    let basePages: ReturnType<typeof getPagination> = [
        currentPage - 2,
        currentPage - 1,
        currentPage,
        currentPage + 1,
        currentPage + 2,
    ].filter((page) => page >= 1 && page <= totalPages);

    if (!basePages.includes(1)) { // include first and maybe dots
        const firstInCurrentList = basePages[0];

        if (firstInCurrentList !== 1) {
            basePages = [
                'dots',
                ...basePages,
            ];
        }

        basePages = [
            1,
            ...basePages,
        ];
    }

    if (!basePages.includes(totalPages)) { // include last and maybe dots
        const lastInCurrentList = basePages[basePages.length - 1];

        if (lastInCurrentList !== totalPages - 1) { // add dots if we're skipping some numbers
            basePages = basePages.concat('dots');
        }

        basePages = [
            ...basePages,
            totalPages,
        ];
    }

    return basePages;
}

function getScrollParent(element: HTMLElement | null): HTMLElement | null {
    if (element == null) {
        return null;
    }

    let parentElement: HTMLElement | null = element;

    const overflowY = window.getComputedStyle(parentElement).overflowY;
    const hasScrollbar = overflowY === 'auto' || overflowY === 'scroll';

    while (parentElement !== null && !hasScrollbar) {
        parentElement = parentElement.parentElement ?? null;
    }

    return parentElement;
}

export class WithPagination<T> extends React.PureComponent<IProps<T>, IState<T>> {
    private pageCount: number;
    private abortController: AbortController;
    private ref: HTMLDivElement | null;
    private inProgress: boolean;

    constructor(props: IProps<T>) {
        super(props);

        this.state = {
            currentPage: 1,
            items: null,
        };

        this.switchPage = this.switchPage.bind(this);
        this.getPageSize = this.getPageSize.bind(this);

        this.pageCount = 0;
        this.abortController = new window.AbortController(); // window. needed for unit tests
        this.ref = null;
        this.inProgress = false;
    }

    getPageSize() {
        return this.props.pageSize ?? 100;
    }

    switchPage(page: number) {
        if (this.inProgress) {
            this.abortController.abort();
        }

        this.inProgress = true;
        this.props.getItems(page, this.getPageSize(), this.abortController.signal).then((res) => {
            this.inProgress = false;
            this.setState({items: res.items, currentPage: page}, () => {
                const scrollableEl = getScrollParent(this.ref);
                const diff = scrollableEl != null && this.ref?.scrollHeight != null
                    ? scrollableEl.offsetHeight - this.ref.scrollHeight
                    : null;

                if (scrollableEl != null) {
                    scrollableEl.scrollTop = diff != null ? diff : 0;
                }
            });
        });
    }

    componentDidMount(): void {
        this.props.getItems(1, this.getPageSize(), this.abortController.signal).then((res) => {
            this.pageCount = Math.ceil(res.itemCount / this.getPageSize());
            this.setState({items: res.items});
        });
    }

    render() {
        if (this.state.items == null) {
            return null;
        }

        const pageElements = getPagination(this.state.currentPage, this.pageCount).map((el, i) => {
            if (el === 'dots') {
                return (
                    <span data-test-id="more-pages" className='sd-pagination__item sd-pagination__item--more'>...</span>
                );
            } else {
                return (
                    <button
                        data-test-id={`page-button-${i}`}
                        className={
                            this.state.currentPage === el
                                ? 'sd-pagination__item sd-pagination__item--active'
                                : 'sd-pagination__item'
                        }
                        onClick={() => this.switchPage(el)}
                    >
                        {el}
                    </button>
                );
            }
        });

        pageElements.unshift(
            <>
                <button
                    data-test-id="btn-1"
                    className='sd-pagination__item sd-pagination__item--start'
                    disabled={this.state.currentPage === 1}
                    onClick={() => this.switchPage(1)}
                >
                    <Icon name='backward-thin' />
                </button>
                <button
                    data-test-id="btn-2"
                    className='sd-pagination__item sd-pagination__item--start'
                    disabled={this.state.currentPage <= 1}
                    onClick={() => this.switchPage(this.state.currentPage - 1)}
                >
                    <Icon name='chevron-left-thin' />
                </button>
            </>,
        );

        pageElements.push(
            <>
                <button
                    data-test-id="btn-3"
                    className='sd-pagination__item sd-pagination__item--forward'
                    onClick={() => this.switchPage(this.state.currentPage + 1)}
                    disabled={this.state.currentPage === this.pageCount}
                >
                    <Icon name='chevron-right-thin' />
                </button>
                <button
                    data-test-id="btn-4"
                    className='sd-pagination__item sd-pagination__item--end'
                    onClick={() => this.switchPage(this.pageCount)}
                    disabled={this.state.currentPage === this.pageCount}
                >
                    <Icon name='forward-thin' />
                </button>
            </>,
        );

        const StyledPagination: React.ComponentType = () => (
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                }}
            >
                {pageElements}
            </div>
        );

        return (
            <div
                style={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                }}
                ref={(element) => {
                    this.ref = element;
                }}
            >
                {
                    this.pageCount > 1 ? (
                        <>
                            <StyledPagination />
                            {this.props.children(this.state.items)}
                            <StyledPagination />
                        </>
                    ) : (
                        this.props.children(this.state.items)
                    )
                }
            </div>
        );
    }
}
