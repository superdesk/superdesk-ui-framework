import * as React from 'react';
import classNames from 'classnames';
import {WithPopover} from './WithPopover';
import {HeadlessButton} from './HeadlessButton';
import {IconButton} from './IconButton';

// Base props shared by both simple and data-driven APIs
interface IPropsOverflowStackBase {
    /**
     * Maximum number of items to show inline; defaults to 4
     * If exceeded, "+1"/"+2"/"+n" button will be shown
     * Only used when overflow='fixed'
     */
    max?: number | 'show-all';

    /**
     * Overflow behavior
     * 'fixed': Uses the max prop to determine visible items (default)
     * 'auto': Dynamically calculates how many items fit based on available space
     */
    overflow?: 'fixed' | 'auto';

    /**
     * Gap between items; defaults to 'small' (var(--gap-0-5))
     * small: 4px, medium: 8px, large: 12px
     */
    gap?: 'compact' | 'loose' | 'none';

    /**
     * Whether items should overlap (like avatars)
     * When true, items will have negative margin and expand on hover
     */
    overlap?: boolean;

    /**
     * Show only hidden items in popover (true) or all items (false)
     * Defaults to false (shows all items)
     */
    showOnlyHiddenInPopover?: boolean;

    /**
     * Style of the overflow indicator
     * 'count': Shows "+N" with the number of hidden items (default)
     * 'dots': Shows a dots icon without the count
     */
    indicatorStyle?: 'count' | 'dots';

    /**
     * Custom render function for the "+N" indicator button
     * If not provided, a default button will be rendered
     */
    renderIndicator?: (count: number) => React.ReactNode;

    /**
     * Custom onClick handler for the "+N" button
     * If provided, popover will not be shown automatically
     */
    onIndicatorClick?: () => void;

    /**
     * Border radius for the indicator button
     * Defaults to 'full'
     */
    indicatorRadius?: 'x-small' | 'small' | 'medium' | 'full';

    /**
     * Additional className for the container
     */
    className?: string;
}

// Simple API: Pre-rendered React nodes
interface IPropsOverflowStackSimple extends IPropsOverflowStackBase {
    /**
     * Array of items to display in the stack
     */
    items: Array<React.ReactNode>;

    /**
     * Custom render function for items in the popover
     * If not provided, items will be rendered as-is
     */
    renderPopoverItem?: (item: React.ReactNode, index: number) => React.ReactNode;

    // Data-driven props should not be used with simple API
    itemsData?: never;
    renderVisibleItem?: never;
    renderHiddenItem?: never;
}

// Data-driven API: Separate render functions for visible and popover items
interface IPropsOverflowStackData<T> extends IPropsOverflowStackBase {
    /**
     * Array of data objects to render
     * Use this with renderVisibleItem and renderHiddenItem for different rendering in stack vs popover
     */
    itemsData: Array<T>;

    /**
     * Render function for items visible in the stack
     */
    renderVisibleItem: (data: T, index: number) => React.ReactNode;

    /**
     * Render function for items in the popover
     * If not provided, renderVisibleItem will be used
     */
    renderHiddenItem?: (data: T, index: number) => React.ReactNode;

    // Simple API props should not be used with data-driven API
    items?: never;
    renderPopoverItem?: never;
}

export type IPropsOverflowStack<T = any> = IPropsOverflowStackSimple | IPropsOverflowStackData<T>;

interface IStateOverflowStack {
    /**
     * Number of visible items when using auto overflow
     */
    visibleCount: number;
}

interface IPopoverContentProps<T> {
    isDataDriven: boolean;
    propsRef: {current: IPropsOverflowStack<T> | null};
    max: number;
    showOnlyHiddenInPopover: boolean;
    closePopup(): void;
}

class PopoverContent<T> extends React.Component<IPopoverContentProps<T>> {
    render() {
        const {isDataDriven, propsRef, max, showOnlyHiddenInPopover} = this.props;
        const props = propsRef.current;

        if (!props) {
            return null;
        }

        const defaultPopoverItem = (item: React.ReactNode, index: number) => (
            <div key={index} className="overflow-stack__popover-item">
                {item}
            </div>
        );

        if (isDataDriven) {
            const dataProps = props as IPropsOverflowStackData<T>;
            const dataToShow = showOnlyHiddenInPopover ? dataProps.itemsData.slice(max) : dataProps.itemsData;
            const renderFn = dataProps.renderHiddenItem || dataProps.renderVisibleItem;

            return (
                <div className="overflow-stack__popover">
                    {dataToShow.map((data, index) => (
                        <div key={index} className="overflow-stack__popover-item">
                            {renderFn(data, showOnlyHiddenInPopover ? index + max : index)}
                        </div>
                    ))}
                </div>
            );
        } else {
            const simpleProps = props as IPropsOverflowStackSimple;
            const itemsToShow = showOnlyHiddenInPopover ? simpleProps.items.slice(max) : simpleProps.items;

            return (
                <div className="overflow-stack__popover">
                    {itemsToShow.map((item, index) =>
                        simpleProps.renderPopoverItem
                            ? simpleProps.renderPopoverItem(item, showOnlyHiddenInPopover ? index + max : index)
                            : defaultPopoverItem(item, showOnlyHiddenInPopover ? index + max : index),
                    )}
                </div>
            );
        }
    }
}

// Constant styles to avoid recreation
const HIDDEN_ITEM_STYLE: React.CSSProperties = {
    position: 'absolute',
    visibility: 'hidden',
    pointerEvents: 'none',
    whiteSpace: 'nowrap',
};

export class OverflowStack<T = any> extends React.PureComponent<IPropsOverflowStack<T>, IStateOverflowStack> {
    private containerRef = React.createRef<HTMLDivElement>();
    private itemRefs: Array<React.RefObject<HTMLDivElement>> = [];
    private indicatorRef = React.createRef<HTMLDivElement>();
    private resizeObserver: ResizeObserver | null = null;
    private resizeTimeout: number | null = null;
    private popoverContentRef = React.createRef<PopoverContent<T>>();
    private currentPropsRef: {current: IPropsOverflowStack<T> | null} = {current: null};

    constructor(props: IPropsOverflowStack<T>) {
        super(props);
        const itemCount = this.getItemCount(props);
        this.state = {
            visibleCount: itemCount,
        };
        // Initialize refs for all items
        this.itemRefs = Array.from({length: itemCount}, () => React.createRef<HTMLDivElement>());
        // Initialize props ref with current props
        this.currentPropsRef.current = props;
    }

    private getItemCount(props: IPropsOverflowStack<T>): number {
        if ('itemsData' in props && props.itemsData) {
            return props.itemsData.length;
        }
        return props.items?.length || 0;
    }

    componentDidMount() {
        if (this.props.overflow === 'auto') {
            this.setupResizeObserver();
            // Use requestAnimationFrame to ensure DOM is painted before measuring
            requestAnimationFrame(() => {
                this.calculateVisibleItems();
            });
        }
    }

    componentDidUpdate(prevProps: IPropsOverflowStack<T>) {
        const prevItemCount = this.getItemCount(prevProps);
        const currentItemCount = this.getItemCount(this.props);

        // Update the ref with current props for popover access
        this.currentPropsRef.current = this.props;

        // Force popover to re-render with new data if it's open
        if (this.popoverContentRef.current) {
            this.popoverContentRef.current.forceUpdate();
        }

        if (this.props.overflow === 'auto') {
            // If items changed, recreate refs and recalculate
            if (prevItemCount !== currentItemCount) {
                this.itemRefs = Array.from({length: currentItemCount}, () => React.createRef<HTMLDivElement>());
                // Force re-render to apply new refs, then calculate
                this.setState({visibleCount: currentItemCount}, () => {
                    requestAnimationFrame(() => {
                        this.calculateVisibleItems();
                    });
                });
            } else {
                requestAnimationFrame(() => {
                    this.calculateVisibleItems();
                });
            }
        }

        // Setup or cleanup observer based on overflow mode
        if (prevProps.overflow !== this.props.overflow) {
            if (this.props.overflow === 'auto') {
                this.setupResizeObserver();
                requestAnimationFrame(() => {
                    this.calculateVisibleItems();
                });
            } else {
                this.cleanupResizeObserver();
            }
        }
    }

    componentWillUnmount() {
        this.cleanupResizeObserver();
        if (this.resizeTimeout) {
            window.clearTimeout(this.resizeTimeout);
        }
    }

    private setupResizeObserver() {
        if (this.resizeObserver || typeof ResizeObserver === 'undefined') {
            return;
        }

        this.resizeObserver = new ResizeObserver(() => {
            // Debounce the calculation to avoid excessive updates
            if (this.resizeTimeout) {
                window.clearTimeout(this.resizeTimeout);
            }
            this.resizeTimeout = window.setTimeout(() => {
                this.calculateVisibleItems();
            }, 50);
        });

        if (this.containerRef.current) {
            this.resizeObserver.observe(this.containerRef.current);
        }
    }

    private cleanupResizeObserver() {
        if (this.resizeObserver) {
            this.resizeObserver.disconnect();
            this.resizeObserver = null;
        }
    }

    private getGapSize(): number {
        const {gap = 'compact', overlap = false} = this.props;

        if (overlap) {
            return -8; // Overlapping items have negative margin
        }

        switch (gap) {
            case 'compact':
                return 4;
            case 'loose':
                return 8;
            case 'none':
                return 0;
            default:
                return 4;
        }
    }

    private calculateVisibleItems() {
        if (!this.containerRef.current || this.props.overflow !== 'auto') {
            return;
        }

        const containerWidth = this.containerRef.current.offsetWidth;

        // If container has no width yet, skip calculation
        if (containerWidth === 0) {
            return;
        }

        const gapSize = this.getGapSize();
        const indicatorWidth = this.indicatorRef.current?.offsetWidth || 40;
        const totalItemCount = this.getItemCount(this.props);

        let totalWidth = 0;
        let visibleCount = 0;

        // Calculate how many items fit
        for (let i = 0; i < this.itemRefs.length; i++) {
            const itemRef = this.itemRefs[i];
            if (!itemRef.current) {
                visibleCount = totalItemCount;
                break;
            }

            const itemWidth = itemRef.current.offsetWidth;
            if (itemWidth === 0) {
                visibleCount = totalItemCount;
                break;
            }

            const widthWithGap = itemWidth + (i > 0 ? gapSize : 0);
            const needsIndicator = i < totalItemCount - 1;
            const availableWidth = containerWidth - (needsIndicator ? indicatorWidth + gapSize : 0);

            if (totalWidth + widthWithGap <= availableWidth) {
                totalWidth += widthWithGap;
                visibleCount = i + 1;
            } else {
                break;
            }
        }

        // Ensure at least 1 item is visible if there are items
        if (visibleCount === 0 && totalItemCount > 0) {
            visibleCount = 1;
        }

        if (this.state.visibleCount !== visibleCount) {
            this.setState({visibleCount});
        }
    }

    render() {
        const {
            gap = 'compact',
            overlap = false,
            overflow = 'fixed',
            showOnlyHiddenInPopover = false,
            indicatorStyle = 'count',
            renderIndicator,
            onIndicatorClick,
            indicatorRadius = 'full',
            className,
        } = this.props;

        // Determine if using data-driven API or simple API
        const isDataDriven = 'itemsData' in this.props && this.props.itemsData !== undefined;
        const itemCount = this.getItemCount(this.props);

        // Determine max based on overflow mode
        const max: number = (() => {
            if (overflow === 'auto') {
                return this.state.visibleCount;
            } else if (this.props.max === 'show-all') {
                return itemCount;
            } else if (this.props.max == null) {
                return 4;
            } else {
                return this.props.max;
            }
        })();

        const itemsOverLimit = itemCount - max;
        const indicatorCount = itemsOverLimit;

        const defaultIndicator = (count: number) => <span className="overflow-stack__indicator-content">+{count}</span>;

        // Helper to render visible items (in stack)
        const renderVisibleItems = () => {
            const renderItemWrapper = (content: React.ReactNode, index: number) => {
                const isVisible = index < max;
                return (
                    <div
                        key={index}
                        ref={overflow === 'auto' ? this.itemRefs[index] : undefined}
                        className="overflow-stack__item"
                        style={overflow === 'auto' && !isVisible ? HIDDEN_ITEM_STYLE : undefined}
                    >
                        {content}
                    </div>
                );
            };

            if (isDataDriven) {
                const props = this.props as IPropsOverflowStackData<T>;
                const itemsToRender = overflow === 'auto' ? props.itemsData : props.itemsData.slice(0, max);
                return itemsToRender.map((data, index) =>
                    renderItemWrapper(props.renderVisibleItem(data, index), index),
                );
            } else {
                const props = this.props as IPropsOverflowStackSimple;
                const itemsToRender = overflow === 'auto' ? props.items : props.items.slice(0, max);
                return itemsToRender.map((item, index) => renderItemWrapper(item, index));
            }
        };

        const renderIndicatorButton = (onToggle: (ref: HTMLElement) => void) => {
            const ariaLabel = showOnlyHiddenInPopover
                ? `Show ${indicatorCount} hidden items`
                : `Show ${indicatorCount} more items`;

            const handleClick = (event: React.MouseEvent<HTMLElement>) => {
                event.stopPropagation();
                if (onIndicatorClick == null) {
                    onToggle(event.currentTarget as HTMLElement);
                } else {
                    onIndicatorClick();
                }
            };

            let indicator: React.ReactNode;

            if (renderIndicator) {
                indicator = (
                    <HeadlessButton
                        radius={indicatorRadius}
                        onClick={handleClick}
                        ariaLabel={ariaLabel}
                        tooltip={ariaLabel}
                    >
                        {renderIndicator(indicatorCount)}
                    </HeadlessButton>
                );
            } else if (indicatorStyle === 'dots') {
                indicator = <IconButton size="small" icon="dots" ariaValue={ariaLabel} onClick={handleClick} />;
            } else {
                indicator = (
                    <HeadlessButton
                        radius={indicatorRadius}
                        onClick={handleClick}
                        ariaLabel={ariaLabel}
                        tooltip={ariaLabel}
                    >
                        {defaultIndicator(indicatorCount)}
                    </HeadlessButton>
                );
            }

            // Only wrap in a div with ref for auto mode (needed for width measurement)
            return overflow === 'auto' ? (
                <div ref={this.indicatorRef} style={{display: 'inline-flex'}}>
                    {indicator}
                </div>
            ) : (
                indicator
            );
        };

        // Create a component that WithPopover will instantiate
        const PopoverComponent = (popoverProps: {closePopup(): void}) => (
            <PopoverContent<T>
                ref={this.popoverContentRef}
                isDataDriven={isDataDriven}
                propsRef={this.currentPropsRef}
                max={max}
                showOnlyHiddenInPopover={showOnlyHiddenInPopover}
                closePopup={popoverProps.closePopup}
            />
        );

        return (
            <WithPopover component={PopoverComponent}>
                {(onToggle) => {
                    const stackContent = (
                        <div
                            ref={this.containerRef}
                            className={classNames(
                                'overflow-stack',
                                {
                                    'overflow-stack--overlap': overlap,
                                    [`overflow-stack--gap-${gap}`]: !overlap,
                                },
                                className,
                            )}
                            role="group"
                            style={overflow === 'auto' ? {width: '100%'} : undefined}
                        >
                            {renderVisibleItems()}
                            {itemsOverLimit > 0 && renderIndicatorButton(onToggle)}
                        </div>
                    );

                    // Wrap in a full-width container for auto mode
                    if (overflow === 'auto') {
                        return <div style={{display: 'flex', width: '100%', minWidth: 0}}>{stackContent}</div>;
                    }

                    return stackContent;
                }}
            </WithPopover>
        );
    }
}
