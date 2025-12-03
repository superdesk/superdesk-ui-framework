import * as React from 'react';
import classNames from 'classnames';
import debounce from 'lodash/debounce';
import {WithPopover} from '../WithPopover';
import {HeadlessButton} from '../HeadlessButton';
import {IconButton} from '../IconButton';
import {OverflowStackPopover} from './OverflowStackPopover';
import {defaultIndicator, HIDDEN_ITEM_STYLE} from './utils';

interface IPropsOverflowStackBase {
    /**
     * Default: {type: `fixed`, max: 4}
     */
    overflow?:
        | {
              type: 'fixed';
              max?: number | 'show-all';
          }
        | {
              type: 'auto';
          };

    /**
     * Defaults to `compact`
     */
    gap?: 'compact' | 'loose' | 'none';

    /**
     * When `true`, items will have negative margin and expand on hover
     */
    overlap?: boolean;

    showOnlyHiddenInPopover?: boolean;

    /**
     * Defaults to `count`
     * `count`: Shows "+N" with the number of hidden items
     * `dots`: Shows a three dots icon without the count
     */
    indicatorStyle?: 'count' | 'dots';

    renderIndicator?: (count: number) => React.ReactNode;
    onIndicatorClick?: () => void;

    /**
     * Defaults to `full`
     * Border radius for the indicator button
     */
    indicatorRadius?: 'x-small' | 'small' | 'medium' | 'full';

    containerClassName?: string;
}

interface IPropsOverflowStackSimple extends IPropsOverflowStackBase {
    type: 'simple';
    items: Array<React.ReactNode>;

    /**
     * Custom render function for items in the popover.
     * Useful if you just want to wrap children, but still keep everything else default.
     * If not provided, items will be rendered as-is
     */
    renderPopoverItem?: (item: React.ReactNode, index: number) => React.ReactNode;
}

interface IPropsOverflowStackData<T> extends IPropsOverflowStackBase {
    type: 'data';
    items: Array<T>;

    renderVisibleItem: (data: T, index: number) => React.ReactNode;

    /**
     * If not provided, `renderVisibleItem` will be used
     */
    renderHiddenItem?: (data: T, index: number) => React.ReactNode;
}

export type IPropsOverflowStack<T> = IPropsOverflowStackSimple | IPropsOverflowStackData<T>;

interface IStateOverflowStack {
    /**
     * Number of visible items when using auto overflow
     */
    visibleCount: number;
}

export class OverflowStack<T> extends React.PureComponent<IPropsOverflowStack<T>, IStateOverflowStack> {
    private containerRef = React.createRef<HTMLDivElement>();
    private itemRefs: Array<React.RefObject<HTMLDivElement>> = [];
    private indicatorRef = React.createRef<HTMLDivElement>();
    private resizeObserver: ResizeObserver | null = null;
    private popoverContentRef = React.createRef<OverflowStackPopover<T>>();

    /**
     * Use a ref to avoid closure when passing props.
     */
    private currentPropsRef: {current: IPropsOverflowStack<T> | null} = {current: null};

    /**
     * Debounced calculation to avoid excessive updates during resize
     */
    private debouncedCalculate = debounce(() => {
        this.calculateVisibleItems();
    }, 50);

    constructor(props: IPropsOverflowStack<T>) {
        super(props);
        const itemCount = this.getItemCount(props);
        this.state = {
            visibleCount: itemCount,
        };

        this.itemRefs = Array.from({length: itemCount}, () => React.createRef<HTMLDivElement>());
        this.currentPropsRef.current = props;
    }

    private getItemCount(props: IPropsOverflowStack<T>): number {
        if (props.type === 'data') {
            return props.items.length;
        }

        return props.items?.length ?? 0;
    }

    componentDidMount() {
        if (this.props.overflow?.type === 'auto') {
            this.setupResizeObserver();

            requestAnimationFrame(() => {
                this.calculateVisibleItems();
            });
        }
    }

    componentDidUpdate(prevProps: IPropsOverflowStack<T>) {
        // Update the props ref for the popover
        this.currentPropsRef.current = this.props;
        this.popoverContentRef.current?.forceUpdate?.();

        const isAutoMode = this.props.overflow?.type === 'auto';

        if (prevProps.overflow !== this.props.overflow) {
            if (isAutoMode) {
                this.setupResizeObserver();
            } else {
                this.cleanupResizeObserver();
            }
        }

        if (isAutoMode) {
            const prevItemCount = this.getItemCount(prevProps);
            const currentItemCount = this.getItemCount(this.props);

            if (prevItemCount !== currentItemCount) {
                // Recreate refs if item count changed
                this.itemRefs = Array.from({length: currentItemCount}, () => React.createRef<HTMLDivElement>());

                this.setState({visibleCount: currentItemCount}, () => {
                    requestAnimationFrame(() => this.calculateVisibleItems());
                });
            } else {
                requestAnimationFrame(() => this.calculateVisibleItems());
            }
        }
    }

    componentWillUnmount() {
        this.cleanupResizeObserver();
        this.debouncedCalculate.cancel();
    }

    private setupResizeObserver() {
        if (this.resizeObserver) {
            return;
        }

        this.resizeObserver = new ResizeObserver(() => {
            this.debouncedCalculate();
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
        if (!this.containerRef.current || this.props.overflow?.type !== 'auto') {
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
            overflow = {
                type: 'fixed',
                max: 4,
            },
            showOnlyHiddenInPopover = false,
            indicatorStyle = 'count',
            renderIndicator,
            onIndicatorClick,
            indicatorRadius = 'full',
            containerClassName: className,
        } = this.props;

        const itemCount = this.getItemCount(this.props);

        let max: number;

        if (overflow.type === 'auto') {
            max = this.state.visibleCount;
        } else if (overflow.max === 'show-all') {
            max = itemCount;
        } else {
            max = overflow.max ?? 4;
        }

        const itemsOverLimit = itemCount - max;

        const renderVisibleItems = () => {
            const renderItemWrapper = (content: React.ReactNode, index: number) => {
                const isVisible = index < max;

                return (
                    <div
                        key={index}
                        ref={overflow.type === 'auto' ? this.itemRefs[index] : undefined}
                        className="overflow-stack__item"
                        style={overflow.type === 'auto' && !isVisible ? HIDDEN_ITEM_STYLE : undefined}
                    >
                        {content}
                    </div>
                );
            };

            const {props} = this;

            if (props.type === 'data') {
                const itemsToRender = overflow.type === 'auto' ? props.items : props.items.slice(0, max);

                return itemsToRender.map((data, index) =>
                    renderItemWrapper(props.renderVisibleItem(data, index), index),
                );
            } else {
                const itemsToRender = overflow.type === 'auto' ? props.items : props.items.slice(0, max);

                return itemsToRender.map((item, index) => renderItemWrapper(item, index));
            }
        };

        const ariaLabel = showOnlyHiddenInPopover
            ? `Show ${itemsOverLimit} hidden items`
            : `Show ${itemsOverLimit} more items`;

        const renderIndicatorButton = (onToggle: (ref: HTMLElement) => void) => {
            const handleClick = (e: React.MouseEvent<HTMLElement>) => {
                e.stopPropagation();

                if (onIndicatorClick == null) {
                    onToggle(e.currentTarget);
                } else {
                    onIndicatorClick();
                }
            };

            let indicator: React.ReactNode;

            if (indicatorStyle === 'dots') {
                indicator = <IconButton size="small" icon="dots" ariaValue={ariaLabel} onClick={handleClick} />;
            } else {
                const content = renderIndicator?.(itemsOverLimit) ?? defaultIndicator(itemsOverLimit);

                indicator = (
                    <HeadlessButton
                        radius={indicatorRadius}
                        onClick={handleClick}
                        ariaLabel={ariaLabel}
                        tooltip={ariaLabel}
                    >
                        {content}
                    </HeadlessButton>
                );
            }

            // Wrap in a div with ref for auto mode (needed for width measurement)
            if (overflow.type === 'auto') {
                return (
                    <div ref={this.indicatorRef} style={{display: 'inline-flex'}}>
                        {indicator}
                    </div>
                );
            }

            return indicator;
        };

        const classes = classNames(
            'overflow-stack',
            {
                'overflow-stack--overlap': overlap,
                [`overflow-stack--gap-${gap}`]: !overlap,
            },
            className,
        );

        return (
            <WithPopover
                component={({closePopup}) => (
                    <OverflowStackPopover
                        ref={this.popoverContentRef}
                        propsRef={this.currentPropsRef}
                        max={max}
                        showOnlyHiddenInPopover={showOnlyHiddenInPopover}
                        closePopup={closePopup}
                    />
                )}
            >
                {(onToggle) => {
                    const stackContent = (
                        <div
                            ref={this.containerRef}
                            className={classes}
                            role="group"
                            style={overflow.type === 'auto' ? {width: '100%'} : undefined}
                        >
                            {renderVisibleItems()}
                            {itemsOverLimit > 0 && renderIndicatorButton(onToggle)}
                        </div>
                    );

                    if (overflow.type === 'auto') {
                        return <div style={{display: 'flex', width: '100%', minWidth: 0}}>{stackContent}</div>;
                    }

                    return stackContent;
                }}
            </WithPopover>
        );
    }
}
