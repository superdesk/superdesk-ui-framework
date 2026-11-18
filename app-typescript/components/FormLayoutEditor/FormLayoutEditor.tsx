import * as React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import {DragDropContext, Droppable, Draggable, DropResult, DragUpdate, DragStart} from '@hello-pangea/dnd';
import {FormLayoutRow} from './FormLayoutRow';

export type IItemWidth = 'full' | 'three-quarter' | 'half' | 'third' | 'quarter';

export interface ILayoutItem {
    id: string;
    width: IItemWidth;
}

export interface ILayoutRow {
    id: string;
    items: Array<ILayoutItem>;
}

export type ILayoutValue = Array<ILayoutRow>;

export interface IFormLayoutEditorProps {
    value: ILayoutValue;
    onChange: (value: ILayoutValue) => void;
    renderItem: (item: ILayoutItem) => React.ReactNode;
    onEditItem: (itemId: string) => void;
    onRemoveItem: (itemId: string) => void;
    onAddItem: (rowId: string) => void;
    /** When set, the editor is inert and the matching item is highlighted. */
    activeItemId?: string | null;
    /** When provided, the (+) button opens a WithPopover containing this content. */
    renderAddItemContent?: (rowId: string, closePopover: () => void) => React.ReactNode;
}

interface IState {
    rows: ILayoutValue;
    isDraggingAny: boolean;
    activeItemDragSourceRowId: string | null;
    phantomIsDraggingOver: boolean;
    resizeDrag: {
        rowId: string;
        leftItemId: string;
        /** null = solo resize (right-edge handle: only leftItem changes, uses row slack) */
        rightItemId: string | null;
        startX: number;
        rowWidthPx: number;
        leftStartWidth: IItemWidth;
        rightStartWidth: IItemWidth | null;
        /** Maximum fraction the left item can reach; used for solo resize. */
        soloMaxFraction: number;
    } | null;
}

export const FLE_PHANTOM_ROW_ID = 'fle-phantom';
const PHANTOM_ROW: ILayoutRow = {id: FLE_PHANTOM_ROW_ID, items: []};

export function widthToFraction(width: IItemWidth): number {
    switch (width) {
        case 'full':
            return 1.0;
        case 'three-quarter':
            return 0.75;
        case 'half':
            return 0.5;
        case 'third':
            return 1 / 3;
        case 'quarter':
            return 0.25;
    }
}

export function fractionToWidth(fraction: number): IItemWidth {
    // Snap to nearest legal width
    const legal: Array<{f: number; w: IItemWidth}> = [
        {f: 0.25, w: 'quarter'},
        {f: 1 / 3, w: 'third'},
        {f: 0.5, w: 'half'},
        {f: 0.75, w: 'three-quarter'},
        {f: 1.0, w: 'full'},
    ];
    let best = legal[0];
    for (const entry of legal) {
        if (Math.abs(entry.f - fraction) < Math.abs(best.f - fraction)) {
            best = entry;
        }
    }
    return best.w;
}

function getResizeLegalFractions(rowItemCount: number): Array<number> {
    if (rowItemCount === 3) {
        return [0.25, 1 / 3, 0.5, 0.75, 1.0];
    }

    return [0.25, 0.5, 0.75, 1.0];
}

export function distributeWidths(items: Array<ILayoutItem>): Array<ILayoutItem> {
    const count = items.length;
    let width: IItemWidth;
    switch (count) {
        case 1:
            width = 'full';
            break;
        case 2:
            width = 'half';
            break;
        case 3:
            width = 'third';
            break;
        default:
            width = 'quarter';
            break;
    }
    return items.map((item) => ({...item, width}));
}

function normalizeRows(rows: ILayoutValue): ILayoutValue {
    return rows.map((row) => {
        if (row.items.length === 0) {
            return row;
        }
        const totalFraction = row.items.reduce((sum, item) => sum + widthToFraction(item.width), 0);
        // Only redistribute on overflow (> 100%) — allow underflow so that
        // resize-snapped rows with slack (< 100%) are not immediately reset.
        // distributeWidths is still called explicitly on add/remove operations.
        if (totalFraction > 1.01) {
            return {...row, items: distributeWidths(row.items)};
        }
        return row;
    });
}

function applyThreeItemResizeRule(
    items: Array<ILayoutItem>,
    primaryItemId: string,
    neighborItemId: string | null,
    primaryWidth: IItemWidth,
): Array<ILayoutItem> | null {
    if (items.length !== 3) {
        return null;
    }

    if (primaryWidth === 'third') {
        return items.map((item) => ({...item, width: 'third'}));
    }

    if (primaryWidth !== 'quarter' && primaryWidth !== 'half') {
        return null;
    }

    const primaryItem = items.find((item) => item.id === primaryItemId);
    if (!primaryItem) {
        return null;
    }

    const otherItems = items.filter((item) => item.id !== primaryItemId);
    if (otherItems.length !== 2) {
        return null;
    }

    // "Closer" means the item on the opposite side of the dragged handle.
    let closerItem = otherItems.find((item) => item.id === neighborItemId) ?? null;

    // For solo right-edge resize there is no explicit neighbor; use the adjacent item.
    if (closerItem == null) {
        const primaryIndex = items.findIndex((item) => item.id === primaryItemId);
        const adjacentItem = items[primaryIndex - 1] ?? items[primaryIndex + 1] ?? null;
        closerItem = adjacentItem != null && adjacentItem.id !== primaryItemId ? adjacentItem : otherItems[0];
    }

    if (primaryWidth === 'half') {
        return items.map((item) => {
            if (item.id === primaryItemId) {
                return {...item, width: 'half'};
            }
            return {...item, width: 'quarter'};
        });
    }

    return items.map((item) => {
        if (item.id === primaryItemId || item.id === closerItem.id) {
            return {...item, width: 'quarter'};
        }
        return {...item, width: 'half'};
    });
}

function moveItem(
    rows: ILayoutValue,
    srcRowId: string,
    srcIndex: number,
    dstRowId: string,
    dstIndex: number,
): ILayoutValue {
    if (dstRowId === srcRowId) {
        return rows.map((row) => {
            if (row.id !== srcRowId) {
                return row;
            }
            const newItems = [...row.items];
            const [movedItem] = newItems.splice(srcIndex, 1);
            newItems.splice(dstIndex, 0, movedItem);
            // Preserve user-set widths when reordering inside the same row.
            return {...row, items: newItems};
        });
    }

    const srcRow = rows.find((r) => r.id === srcRowId)!;
    const item = srcRow.items[srcIndex];

    let result = rows.map((row) => {
        if (row.id === srcRowId) {
            const newItems = [...row.items];
            newItems.splice(srcIndex, 1);
            return {...row, items: distributeWidths(newItems)};
        }
        return row;
    });

    result = result.map((row) => {
        if (row.id === dstRowId) {
            const newItems = [...row.items];
            newItems.splice(dstIndex, 0, item);
            return {...row, items: distributeWidths(newItems)};
        }
        return row;
    });

    return result;
}

function reorderRows(rows: ILayoutValue, startIndex: number, endIndex: number): ILayoutValue {
    const result = Array.from(rows);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
}

export class FormLayoutEditor extends React.PureComponent<IFormLayoutEditorProps, IState> {
    private rowRefs: Map<string, React.RefObject<HTMLDivElement>>;

    constructor(props: IFormLayoutEditorProps) {
        super(props);
        this.state = {
            rows: [],
            isDraggingAny: false,
            activeItemDragSourceRowId: null,
            phantomIsDraggingOver: false,
            resizeDrag: null,
        };
        this.rowRefs = new Map();
        this.onDragStart = this.onDragStart.bind(this);
        this.onDragUpdate = this.onDragUpdate.bind(this);
        this.onDragEnd = this.onDragEnd.bind(this);
        this.onResizeStart = this.onResizeStart.bind(this);
        this.onResizeMove = this.onResizeMove.bind(this);
        this.onResizeUp = this.onResizeUp.bind(this);
    }

    componentDidMount() {
        this.setState({rows: normalizeRows(this.props.value)});
        document.addEventListener('mousemove', this.onResizeMove);
        document.addEventListener('mouseup', this.onResizeUp);
    }

    componentDidUpdate(prevProps: IFormLayoutEditorProps) {
        if (prevProps.value !== this.props.value) {
            this.setState({rows: normalizeRows(this.props.value)});
        }
    }

    componentWillUnmount() {
        document.removeEventListener('mousemove', this.onResizeMove);
        document.removeEventListener('mouseup', this.onResizeUp);
    }

    getRowRef(rowId: string): React.RefObject<HTMLDivElement> {
        if (!this.rowRefs.has(rowId)) {
            this.rowRefs.set(rowId, React.createRef<HTMLDivElement>());
        }
        return this.rowRefs.get(rowId)!;
    }

    onDragStart(result: DragStart) {
        this.setState({
            isDraggingAny: true,
            activeItemDragSourceRowId: result.type === 'ITEM' ? result.source.droppableId : null,
        });
    }

    onDragUpdate(result: DragUpdate) {
        this.setState({
            phantomIsDraggingOver: result.destination?.droppableId === FLE_PHANTOM_ROW_ID,
        });
    }

    onDragEnd(result: DropResult) {
        this.setState({
            isDraggingAny: false,
            activeItemDragSourceRowId: null,
            phantomIsDraggingOver: false,
        });

        if (!result.destination) {
            return;
        }

        const {source, destination, type} = result;

        if (type === 'ROW') {
            const newRows = reorderRows(this.state.rows, source.index, destination.index);
            this.setState({rows: newRows});
            this.props.onChange(newRows.filter((r) => r.id !== PHANTOM_ROW.id));
            return;
        }

        if (type === 'ITEM') {
            const srcRowId = source.droppableId;
            const dstRowId = destination.droppableId;

            // Handle drop onto phantom row — create new row
            if (dstRowId === PHANTOM_ROW.id) {
                const srcRow = this.state.rows.find((r) => r.id === srcRowId)!;
                const item = srcRow.items[source.index];
                const newRow: ILayoutRow = {
                    id: `fle-row-${Date.now()}`,
                    items: [{...item, width: 'full'}],
                };

                let phantomRows = this.state.rows.map((row) => {
                    if (row.id === srcRowId) {
                        const newItems = [...row.items];
                        newItems.splice(source.index, 1);
                        return {...row, items: distributeWidths(newItems)};
                    }
                    return row;
                });

                // Remove empty source rows
                phantomRows = phantomRows.filter((r) => r.items.length > 0);
                phantomRows = [...phantomRows, newRow];

                this.setState({rows: phantomRows});
                this.props.onChange(phantomRows);
                return;
            }

            let newRows = moveItem(this.state.rows, srcRowId, source.index, dstRowId, destination.index);

            // Remove empty rows
            newRows = newRows.filter((r) => r.items.length > 0);

            this.setState({rows: newRows});
            this.props.onChange(newRows);
        }
    }

    onResizeStart(
        rowId: string,
        leftItemId: string,
        rightItemId: string | null,
        startX: number,
        leftStartWidth: IItemWidth,
        rightStartWidth: IItemWidth | null,
    ) {
        const rowRef = this.rowRefs.get(rowId);
        const rowWidthPx = rowRef?.current?.getBoundingClientRect().width ?? 600;

        // For solo (right-edge) resize, compute how much room the last item has.
        let soloMaxFraction = 1.0;
        if (rightItemId === null) {
            const row = this.state.rows.find((r) => r.id === rowId)!;
            const otherFraction = row.items
                .filter((item) => item.id !== leftItemId)
                .reduce((sum, item) => sum + widthToFraction(item.width), 0);
            soloMaxFraction = 1.0 - otherFraction;
        }

        this.setState({
            resizeDrag: {
                rowId,
                leftItemId,
                rightItemId,
                startX,
                rowWidthPx,
                leftStartWidth,
                rightStartWidth,
                soloMaxFraction,
            },
        });
    }

    onResizeMove(e: MouseEvent) {
        const drag = this.state.resizeDrag;
        if (!drag) {
            return;
        }

        const activeRow = this.state.rows.find((row) => row.id === drag.rowId);
        if (!activeRow) {
            return;
        }

        const leftStartFraction = widthToFraction(drag.leftStartWidth);
        const delta = (e.clientX - drag.startX) / drag.rowWidthPx;
        const legalFractions = getResizeLegalFractions(activeRow.items.length);

        if (drag.rightItemId === null) {
            // Solo resize: grow/shrink the last item using row slack, no other item changes.
            const maxFraction = drag.soloMaxFraction;
            let soloFraction = leftStartFraction + delta;
            soloFraction = Math.max(0.25, Math.min(maxFraction, soloFraction));

            const soloValid = legalFractions.filter((f) => f <= maxFraction + 0.001);
            let snapped = soloValid[0];
            for (const f of soloValid) {
                if (Math.abs(f - soloFraction) < Math.abs(snapped - soloFraction)) {
                    snapped = f;
                }
            }
            const snappedWidth = fractionToWidth(snapped);

            if (activeRow.items.length === 3) {
                const specialItems = applyThreeItemResizeRule(activeRow.items, drag.leftItemId, null, snappedWidth);

                if (specialItems != null) {
                    this.setState((state) => ({
                        rows: state.rows.map((row) => {
                            if (row.id !== drag.rowId) {
                                return row;
                            }
                            return {...row, items: specialItems};
                        }),
                    }));
                    return;
                }
            }

            this.setState((state) => ({
                rows: state.rows.map((row) => {
                    if (row.id !== drag.rowId) {
                        return row;
                    }
                    return {
                        ...row,
                        items: row.items.map((item) => {
                            if (item.id === drag.leftItemId) {
                                return {...item, width: snappedWidth};
                            }
                            return item;
                        }),
                    };
                }),
            }));
            return;
        }

        if (activeRow.items.length === 3) {
            // In 3-item rows, drag one item and rebalance all 3 according to
            // the quarter/third/half rule set.
            let primaryFraction = leftStartFraction + delta;
            primaryFraction = Math.max(0.25, Math.min(0.5, primaryFraction));

            const legalPrimaryFractions = [0.25, 1 / 3, 0.5];
            let snappedPrimary = legalPrimaryFractions[0];
            for (const f of legalPrimaryFractions) {
                if (Math.abs(f - primaryFraction) < Math.abs(snappedPrimary - primaryFraction)) {
                    snappedPrimary = f;
                }
            }

            const snappedPrimaryWidth = fractionToWidth(snappedPrimary);
            const specialItems = applyThreeItemResizeRule(
                activeRow.items,
                drag.leftItemId,
                drag.rightItemId,
                snappedPrimaryWidth,
            );

            if (specialItems != null) {
                this.setState((state) => ({
                    rows: state.rows.map((row) => {
                        if (row.id !== drag.rowId) {
                            return row;
                        }
                        return {...row, items: specialItems};
                    }),
                }));
                return;
            }
        }

        // Paired resize: redistribute between left and right items.
        const rightStartFraction = widthToFraction(drag.rightStartWidth!);
        const combinedFraction = leftStartFraction + rightStartFraction;

        let newLeftFraction = leftStartFraction + delta;

        // Clamp
        const minFraction = 0.25;
        newLeftFraction = Math.max(minFraction, Math.min(combinedFraction - minFraction, newLeftFraction));

        // Snap left to nearest legal value <= combinedFraction - 0.25
        const maxLeft = combinedFraction - minFraction;
        const validLeft = legalFractions.filter((f) => f <= maxLeft + 0.001);
        let snappedLeft = validLeft[0];
        for (const f of validLeft) {
            if (Math.abs(f - newLeftFraction) < Math.abs(snappedLeft - newLeftFraction)) {
                snappedLeft = f;
            }
        }

        const newRightFraction = combinedFraction - snappedLeft;
        const snappedRight = fractionToWidth(newRightFraction);
        const snappedLeftWidth = fractionToWidth(snappedLeft);

        this.setState((state) => ({
            rows: state.rows.map((row) => {
                if (row.id !== drag.rowId) {
                    return row;
                }
                return {
                    ...row,
                    items: row.items.map((item) => {
                        if (item.id === drag.leftItemId) {
                            return {...item, width: snappedLeftWidth};
                        }
                        if (item.id === drag.rightItemId) {
                            return {...item, width: snappedRight};
                        }
                        return item;
                    }),
                };
            }),
        }));
    }

    onResizeUp() {
        if (!this.state.resizeDrag) {
            return;
        }
        this.setState({resizeDrag: null});
        this.props.onChange(this.state.rows.filter((r) => r.id !== PHANTOM_ROW.id));
    }

    render() {
        const {renderItem, onEditItem, onRemoveItem, onAddItem, activeItemId, renderAddItemContent} = this.props;
        const {rows, isDraggingAny, activeItemDragSourceRowId, phantomIsDraggingOver, resizeDrag} = this.state;
        const allRows = [...rows, PHANTOM_ROW];

        return (
            <div className={classNames('form-layout-editor', {'form-layout-editor--is-inert': activeItemId != null})}>
                <DragDropContext
                    onDragStart={this.onDragStart}
                    onDragUpdate={this.onDragUpdate}
                    onDragEnd={this.onDragEnd}
                >
                    <Droppable droppableId="fle-rows" type="ROW">
                        {(provided) => (
                            <div
                                className="form-layout-editor__rows"
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                            >
                                {allRows.map((row, index) => {
                                    const isPhantom = row.id === PHANTOM_ROW.id;
                                    const rowRef = this.getRowRef(row.id);

                                    return (
                                        <Draggable
                                            key={row.id}
                                            draggableId={row.id}
                                            index={index}
                                            isDragDisabled={isPhantom}
                                        >
                                            {(provided2, snapshot2) => {
                                                const rowNode = (
                                                    <div
                                                        className="form-layout-editor__row-wrap"
                                                        ref={provided2.innerRef}
                                                        {...provided2.draggableProps}
                                                        style={provided2.draggableProps.style}
                                                    >
                                                        <FormLayoutRow
                                                            row={row}
                                                            isPhantom={isPhantom}
                                                            isDragging={snapshot2.isDragging}
                                                            isDraggingAny={isDraggingAny}
                                                            activeItemDragSourceRowId={activeItemDragSourceRowId}
                                                            dragHandleProps={provided2.dragHandleProps}
                                                            rowRef={rowRef}
                                                            renderItem={renderItem}
                                                            onEditItem={onEditItem}
                                                            onRemoveItem={onRemoveItem}
                                                            onAddItem={onAddItem}
                                                            onResizeStart={this.onResizeStart}
                                                            activeResizeLeftId={resizeDrag?.leftItemId ?? null}
                                                            activeItemId={activeItemId ?? null}
                                                            renderAddItemContent={renderAddItemContent}
                                                            phantomIsDraggingOver={
                                                                isPhantom ? phantomIsDraggingOver : false
                                                            }
                                                        />
                                                    </div>
                                                );

                                                return snapshot2.isDragging
                                                    ? ReactDOM.createPortal(rowNode, document.body)
                                                    : rowNode;
                                            }}
                                        </Draggable>
                                    );
                                })}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>
            </div>
        );
    }
}
