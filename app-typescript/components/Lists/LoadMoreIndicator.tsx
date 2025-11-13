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
     * @default 'medium'
     */
    size?: 'small' | 'medium' | 'large';

    /**
     * Custom className for the container
     */
    className?: string;

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
    size = 'medium',
    className,
    'data-test-id': testId = 'load-more-indicator',
}) => {
    if (!loading) {
        return null;
    }

    const sizeClassMap: Record<'small' | 'medium' | 'large', string> = {
        small: 'sd-loader--small',
        medium: 'sd-loader--medium',
        large: 'sd-loader--large',
    };

    const loaderClassName = `sd-loader ${sizeClassMap[size]}`;
    const containerClassName = ['sd-list-item', 'sd-list-item--no-hover', 'px-1', 'items-center', className]
        .filter(Boolean)
        .join(' ');

    return (
        <li
            className={containerClassName}
            data-test-id={testId}
            role="status"
            aria-live="polite"
            aria-busy="true"
        >
            <div className="load-more-indicator">
                <span className="load-more-indicator__text">
                    {loadingText}
                    {showProgress && currentCount != null && totalCount != null && (
                        <> ({currentCount} of {totalCount})</>
                    )}
                </span>
                <div className={loaderClassName} />
            </div>
        </li>
    );
};
