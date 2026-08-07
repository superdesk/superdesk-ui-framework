import * as React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import {Droppable, Draggable, DraggableProvidedDragHandleProps} from '@hello-pangea/dnd';
import {ILayoutRow, ILayoutItem, IItemWidth, widthToFraction} from './FormLayoutEditor';
import {FormLayoutItem} from './FormLayoutItem';
import {Button} from '../Button';
import {DragHandle} from '../DragHandle';
import {WithPopover} from '../WithPopover';

interface IProps {
    row: ILayoutRow;
    isPhantom: boolean;
    isDragging: boolean;
    isDraggingAny: boolean;
    activeItemDragSourceRowId: string | null;
    dragHandleProps: DraggableProvidedDragHandleProps | null | undefined;
    rowRef: React.RefObject<HTMLDivElement>;
    renderItem: (item: ILayoutItem) => React.ReactNode;
    onEditItem: (itemId: string) => void;
    onRemoveItem: (itemId: string) => void;
    onAddItem: (rowId: string) => void;
    onResizeStart: (
        rowId: string,
        leftItemId: string,
        rightItemId: string | null,
        startX: number,
        leftStartWidth: IItemWidth,
        rightStartWidth: IItemWidth | null,
    ) => void;
    activeResizeLeftId: string | null;
    activeItemId: string | null;
    renderAddItemContent?: (rowId: string, closePopover: () => void) => React.ReactNode;
    phantomIsDraggingOver: boolean;
}

interface IState {
    /**
     * Pixel-based left offsets for each internal resize handle (between item[i] and item[i+1]),
     * measured relative to the .form-layout-editor__droppable-area left edge.
     */
    internalHandleLeftPx: Array<number>;
    /**
     * Pixel-based left offset for the right-edge handle (after the last item), or null when
     * there are fewer than two items.
     */
    rightEdgeLeftPx: number | null;
}

export class FormLayoutRow extends React.PureComponent<IProps, IState> {
    state: IState = {
        internalHandleLeftPx: [],
        rightEdgeLeftPx: null,
    };

    componentDidMount() {
        window.addEventListener('resize', this.handleWindowResize);
        this.updateHandlePositions();
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowResize);
    }

    componentDidUpdate(prevProps: IProps) {
        if (
            prevProps.isPhantom !== this.props.isPhantom ||
            prevProps.row.items.length !== this.props.row.items.length ||
            prevProps.row.items.some((item, index) => item.width !== this.props.row.items[index]?.width)
        ) {
            this.updateHandlePositions();
        }
    }

    private handleWindowResize = () => {
        this.updateHandlePositions();
    };

    /**
     * Measure the visual centers of the gaps between items (and the right edge of the last item)
     * so resize handles are evenly spaced, taking the flex gap into account.
     */
    private updateHandlePositions() {
        const {isPhantom, rowRef, row} = this.props;

        if (isPhantom) {
            // No real items rendered for phantom rows.
            if (this.state.internalHandleLeftPx.length || this.state.rightEdgeLeftPx !== null) {
                this.setState({internalHandleLeftPx: [], rightEdgeLeftPx: null});
            }
            return;
        }

        const container = rowRef.current;
        if (!container) {
            return;
        }

        // Defer to the next frame so hello-pangea/dnd has applied layout changes.
        window.requestAnimationFrame(() => {
            const liveContainer = rowRef.current;
            if (!liveContainer) {
                return;
            }

            const itemSlots = liveContainer.querySelectorAll<HTMLDivElement>('.form-layout-editor__item-slot');

            if (itemSlots.length === 0 || itemSlots.length !== row.items.length) {
                // Either nothing rendered yet or DnD is in a transient state.
                return;
            }

            const containerRect = liveContainer.getBoundingClientRect();
            const internalHandleLeftPx: Array<number> = [];

            for (let i = 0; i < itemSlots.length - 1; i++) {
                const leftRect = itemSlots[i].getBoundingClientRect();
                const rightRect = itemSlots[i + 1].getBoundingClientRect();
                const gapCenter = (leftRect.right + rightRect.left) / 2 - containerRect.left;
                internalHandleLeftPx.push(gapCenter);
            }

            let rightEdgeLeftPx: number | null = null;
            if (itemSlots.length >= 2) {
                const lastRect = itemSlots[itemSlots.length - 1].getBoundingClientRect();
                rightEdgeLeftPx = lastRect.right - containerRect.left;
            }

            this.setState({internalHandleLeftPx, rightEdgeLeftPx});
        });
    }

    render() {
        const {
            row,
            isPhantom,
            isDragging,
            isDraggingAny,
            activeItemDragSourceRowId,
            dragHandleProps,
            rowRef,
            renderItem,
            onEditItem,
            onRemoveItem,
            onAddItem,
            onResizeStart,
            activeResizeLeftId,
            activeItemId,
            renderAddItemContent,
            phantomIsDraggingOver,
        } = this.props;

        const rowClasses = classNames('form-layout-editor__row', {
            'form-layout-editor__row--phantom': isPhantom,
            'form-layout-editor__row--is-dragging': isDragging,
        });

        const canAddMore = row.items.length < 4;

        // Cumulative left-edge % for each internal resize handle (boundary after item[i]).
        const resizeHandlePositions: Array<number> = [];
        let cumPct = 0;
        for (let i = 0; i < row.items.length - 1; i++) {
            cumPct += widthToFraction(row.items[i].width) * 100;
            resizeHandlePositions.push(cumPct);
        }

        // Right-edge handle position (after the last item, when >= 2 items).
        const hasRightEdgeHandle = row.items.length >= 2;
        const rightEdgePct = row.items.reduce((sum, item) => sum + widthToFraction(item.width) * 100, 0);

        // Render the add-item button, optionally wrapped in WithPopover.
        const renderAddButton = (rowId: string) => {
            if (renderAddItemContent != null) {
                return (
                    <WithPopover component={({closePopup}) => <>{renderAddItemContent!(rowId, closePopup)}</>}>
                        {(toggle) => (
                            <Button
                                text="Add item"
                                iconOnly={true}
                                shape="round"
                                type="tertiary"
                                tooltip="Add item"
                                icon="plus-large"
                                noMargin={true}
                                size="small"
                                onClick={(e) => toggle(e.currentTarget as HTMLElement)}
                            />
                        )}
                    </WithPopover>
                );
            }
            return (
                <Button
                    text="Add item"
                    iconOnly={true}
                    shape="round"
                    type="primary"
                    tooltip="Add item"
                    icon="plus-large"
                    noMargin={true}
                    size="small"
                    onClick={() => onAddItem(rowId)}
                />
            );
        };

        return (
            <div className={rowClasses}>
                {!isPhantom && (
                    <div className="form-layout-editor__row-handle" {...dragHandleProps}>
                        <DragHandle dotRows="7" dotsInRow="2" blank={true} />
                    </div>
                )}

                <div className="form-layout-editor__row-body">
                    {/*
                     * form-layout-editor__droppable-area is position:relative so the Droppable fills it
                     * and absolutely-positioned resize handles key off the same coordinate
                     * space as the item flex-basis percentages.
                     */}
                    <div className="form-layout-editor__droppable-area" ref={rowRef}>
                        <Droppable
                            droppableId={row.id}
                            direction="horizontal"
                            type="ITEM"
                            isDropDisabled={
                                !isPhantom &&
                                row.items.length >= 4 &&
                                activeItemDragSourceRowId !== null &&
                                activeItemDragSourceRowId !== row.id
                            }
                        >
                            {(provided, snapshot) => {
                                return (
                                    <div
                                        ref={provided.innerRef}
                                        {...provided.droppableProps}
                                        className={classNames(
                                            'form-layout-editor__row-items',
                                            `form-layout-editor__row-items--count-${row.items.length}`,
                                            {
                                                'form-layout-editor__row-items--drag-over': snapshot.isDraggingOver,
                                            },
                                        )}
                                    >
                                        {!isPhantom &&
                                            row.items.map((item, itemIndex) => (
                                                <Draggable key={item.id} draggableId={item.id} index={itemIndex}>
                                                    {(provided2, snapshot2) => {
                                                        const child = (
                                                            <div
                                                                ref={provided2.innerRef}
                                                                {...provided2.draggableProps}
                                                                className={`form-layout-editor__item-slot form-layout-editor__item-slot--width-${item.width}`}
                                                                style={provided2.draggableProps.style}
                                                            >
                                                                <FormLayoutItem
                                                                    item={item}
                                                                    isDragging={snapshot2.isDragging}
                                                                    isDraggingAny={isDraggingAny}
                                                                    isActive={item.id === activeItemId}
                                                                    dragHandleProps={provided2.dragHandleProps}
                                                                    renderItem={renderItem}
                                                                    onEditItem={onEditItem}
                                                                    onRemoveItem={onRemoveItem}
                                                                />
                                                            </div>
                                                        );
                                                        return snapshot2.isDragging
                                                            ? ReactDOM.createPortal(child, document.body)
                                                            : child;
                                                    }}
                                                </Draggable>
                                            ))}
                                        {provided.placeholder}
                                    </div>
                                );
                            }}
                        </Droppable>

                        {/*
                         * phantom-inner lives OUTSIDE the Droppable's innerRef so DnD
                         * never sees it as a non-Draggable child.  position:absolute
                         * (inset:0) means it visually covers the droppable area without
                         * affecting the flex layout DnD measures.
                         * Visibility is driven by phantomIsDraggingOver (from onDragUpdate
                         * in FormLayoutEditor) rather than snapshot.isDraggingOver to avoid
                         * keeping non-Draggable content inside the innerRef subtree.
                         */}
                        {isPhantom && (
                            <div
                                className={classNames('form-layout-editor__phantom-inner', {
                                    'form-layout-editor__phantom-inner--drag-over': phantomIsDraggingOver,
                                })}
                            >
                                <span className="form-layout-editor__empty-prompt">
                                    Drag an item here to create a new row
                                </span>
                                {renderAddButton(row.id)}
                            </div>
                        )}

                        {/*
                         * Resize handles live OUTSIDE the Droppable DOM subtree.
                         * In-flow siblings (even non-Draggable ones) inflate the measured
                         * container size and shift item positions, causing the ghost to
                         * appear far from the cursor.  Absolutely-positioned overlays
                         * avoid this completely.
                         */}
                        {!isPhantom && canAddMore && (resizeHandlePositions.length > 0 || hasRightEdgeHandle) && (
                            <div className="form-layout-editor__resize-overlays">
                                {resizeHandlePositions.map((leftPct, i) => {
                                    const leftItem = row.items[i];
                                    const rightItem = row.items[i + 1];
                                    const measuredLeft = this.state.internalHandleLeftPx[i] ?? null;
                                    const style =
                                        measuredLeft != null ? {left: `${measuredLeft}px`} : {left: `${leftPct}%`};

                                    return (
                                        <div
                                            key={leftItem.id}
                                            className={classNames('form-layout-editor__resize-handle', {
                                                'form-layout-editor__resize-handle--active':
                                                    activeResizeLeftId === leftItem.id,
                                            })}
                                            style={style}
                                            onMouseDown={(e) => {
                                                e.preventDefault();
                                                onResizeStart(
                                                    row.id,
                                                    leftItem.id,
                                                    rightItem.id,
                                                    e.clientX,
                                                    leftItem.width,
                                                    rightItem.width,
                                                );
                                            }}
                                        />
                                    );
                                })}
                                {hasRightEdgeHandle &&
                                    (() => {
                                        const lastItem = row.items[row.items.length - 1];
                                        const measuredRight = this.state.rightEdgeLeftPx;
                                        const style =
                                            measuredRight != null
                                                ? {left: `${measuredRight}px`}
                                                : {left: `${rightEdgePct}%`};

                                        return (
                                            <div
                                                key={`${lastItem.id}-right-edge`}
                                                className={classNames('form-layout-editor__resize-handle', {
                                                    'form-layout-editor__resize-handle--active':
                                                        activeResizeLeftId === lastItem.id,
                                                })}
                                                style={style}
                                                onMouseDown={(e) => {
                                                    e.preventDefault();
                                                    onResizeStart(
                                                        row.id,
                                                        lastItem.id,
                                                        null,
                                                        e.clientX,
                                                        lastItem.width,
                                                        null,
                                                    );
                                                }}
                                            />
                                        );
                                    })()}
                            </div>
                        )}
                    </div>

                    {/* Add button slot — always rendered to keep row width consistent across item counts */}
                    {!isPhantom && (
                        <div className="form-layout-editor__add-button-slot">
                            {canAddMore ? renderAddButton(row.id) : null}
                        </div>
                    )}
                </div>
            </div>
        );
    }
}
