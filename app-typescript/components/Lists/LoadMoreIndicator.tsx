import * as React from 'react';

interface IProps {
    /**
     * Whether the loading indicator should be visible
     */
    loading: boolean;

    /**
     * Current number of loaded items
     */
    currentCount: number;

    /**
     * Total number of items available
     */
    totalCount: number;

    /**
     * Custom loading text. If not provided, defaults to "Loading more..."
     */
    loadingText?: string;

    /**
     * Whether to show the progress counter (e.g., "25 of 100")
     * @default true
     */
    showProgress?: boolean;

    /**
     * Size of the loader
     * @default 'small'
     */
    size?: 'small' | 'medium' | 'large';

    /**
     * Custom className for the container
     */
    className?: string;

    /**
     * Test ID for testing purposes
     */
    'data-test-id'?: string;
}

/**
 * A loading indicator component designed to be appended at the end of scrollable lists
 * during infinite scroll/pagination. Shows a spinner with optional progress counter.
 *
 * @example
 * ```tsx
 * <ul>
 *   {items.map(item => <li key={item.id}>{item.name}</li>)}
 *   <LoadMoreIndicator
 *     loading={isLoadingMore}
 *     currentCount={items.length}
 *     totalCount={totalAvailableItems}
 *   />
 * </ul>
 * ```
 */
export const LoadMoreIndicator: React.FC<IProps> = ({
    loading,
    currentCount,
    totalCount,
    loadingText = 'Loading more...',
    showProgress = true,
    size = 'small',
    className,
    'data-test-id': testId = 'load-more-indicator',
}) => {
    if (!loading) {
        return null;
    }

    let loaderClassName = 'sd-loader';

    if (size === 'small') {
        loaderClassName = 'sd-loader sd-loader--small';
    } else if (size === 'large') {
        loaderClassName = 'sd-loader sd-loader--large';
    }

    return (
        <li
            className={`sd-list-item sd-list-item--no-hover ${className || ''}`.trim()}
            style={{padding: '1rem', textAlign: 'center'}}
            data-test-id={testId}
            role="status"
            aria-live="polite"
            aria-busy="true"
        >
            <div className="sd-flex-no-grow sd-flex-v-center sd-flex-h-center sd-padding-x--1">
                <div className={`${loaderClassName}`} />
                <span className="sd-text__normal">
                    {loadingText}
                    {showProgress && currentCount != null && totalCount != null && (
                        <>
                            {' '}
                            ({currentCount} of {totalCount})
                        </>
                    )}
                </span>
            </div>
        </li>
    );
};
