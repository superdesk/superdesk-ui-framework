import * as React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import { DragDropContext, Droppable, Draggable, DropResult } from "react-beautiful-dnd";
import { Tooltip } from '../Tooltip';
import { Button } from '../Button';
import { Dropdown, IMenuItem, ISubmenu, IMenuGroup } from '../Dropdown';
import {setupSingleAndDoubleClick} from './../SingleAndDoubleClickFunction';

export interface IProps {
    array: Array<IPropsArrayItem>;
    addItem?: boolean;
    dragAndDrop?: boolean;
    className?: string;
    readOnly?: boolean;
    showDragHandle?: 'always' | 'onHover' | 'none'; // always default
    append?: boolean;
    onDrag?(start: number, end: number): void;
    onAddItem?(index: number, item?: IPropsArrayItem): void;
    itemsDropdown?(index?: number): Array<IMenuItem | ISubmenu | IMenuGroup | 'divider'>;
}

export interface IPropsArrayItem {
    start?: React.ReactNode;
    center?: React.ReactNode;
    end?: React.ReactNode;
    action?: React.ReactNode;
    hexColor?: string;
    locked?: boolean;
    positionLocked?: boolean;
    selected?: boolean;
    onClick?(): void;
    onDoubleClick?(): void;
}

interface IState {
    items: Array<IPropsArrayItem>;
}

const reorder = (list: Array<IPropsArrayItem>, startIndex: number, endIndex: number) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

class TableList extends React.PureComponent<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            items: [],
        };

        this.onDragEnd = this.onDragEnd.bind(this);
        this.dropDown = this.dropDown.bind(this);
    }

    componentDidMount(): void {
        if (this.props.array) {
            this.setState({ items: this.props.array });
        }
    }

    componentDidUpdate(prevProps: IProps): void {
        if (this.props.array) {
            if (prevProps.array !== this.props.array) {
                this.setState({
                    items: this.props.array,
                });
            }
        }
    }

    onDragEnd(result: DropResult) {
        if (!result.destination) {
            return;
        }
        const items = reorder(
            this.state.items,
            result.source.index,
            result.destination.index,
        );
        this.setState({
            items: items,
        });

        return this.props.onDrag ?
            this.props.onDrag(result.source.index, result.destination.index) : null;
    }

    dropDown() {
        return (
            <Dropdown
                items={this.props.itemsDropdown ? this.props.itemsDropdown() : []}>
                <Button
                    type="primary"
                    icon="plus-large"
                    text="Add item"
                    size="small"
                    shape="round"
                    iconOnly={true}
                    onClick={() => false}
                />
            </Dropdown>
        );
    }

    render() {
        let classes = classNames('', {
            'table-list': !this.props.addItem,
            'table-list--read-only': this.props.readOnly,
            [`${this.props.className}`]: this.props.className,
        });

        return (
            this.state.items.length > 0
                ? this.props.dragAndDrop
                    ? <DragDropContext onDragEnd={this.onDragEnd}>
                        <Droppable droppableId="droppable">
                            {(provided, _snapshot) => (
                                <div
                                    role='list'
                                    className={classes}
                                    ref={provided.innerRef}
                                    {...provided.droppableProps}
                                >
                                    {this.state.items.map((item: IPropsArrayItem, index: number) => (
                                        <Draggable key={index} draggableId={`${index}`} index={index}>
                                            {(provided2, snapshot) => (
                                                this.props.append
                                                    ? <PortalItem
                                                        provided={provided2}
                                                        snapshot={snapshot}
                                                        item={item}
                                                        index={index}
                                                        dragAndDrop={this.props.dragAndDrop}
                                                        showDragHandle={this.props.showDragHandle}
                                                        addItem={this.props.addItem}
                                                        onAddItem={() => this.props.onAddItem
                                                            && this.props.onAddItem(index, item)
                                                        }
                                                        itemsDropdown={() => this.props.itemsDropdown
                                                            ? this.props.itemsDropdown(index)
                                                            : []
                                                        }
                                                    />
                                                    : <div
                                                        ref={provided2.innerRef}
                                                        {...provided2.draggableProps}
                                                        {...provided2.dragHandleProps} >
                                                        <TableListItem
                                                            dragAndDrop={this.props.dragAndDrop}
                                                            start={item.start}
                                                            center={item.center}
                                                            end={item.end}
                                                            action={item.action}
                                                            selected={item.selected}
                                                            onClick={
                                                                item.onClick
                                                                    ? item.onClick
                                                                    : undefined
                                                            }
                                                            onDoubleClick={
                                                                item.onDoubleClick
                                                                    ? item.onDoubleClick
                                                                    : undefined
                                                            }
                                                            addItem={this.props.addItem}
                                                            itemsDropdown={() => this.props.itemsDropdown
                                                                ? this.props.itemsDropdown(index)
                                                                : []
                                                            }
                                                            hexColor={item.hexColor}
                                                            locked={item.locked}
                                                            positionLocked={item.positionLocked}
                                                            onAddItem={() => this.props.onAddItem
                                                                && this.props.onAddItem(index, item)
                                                            }
                                                            showDragHandle={this.props.showDragHandle}
                                                        />
                                                    </div>
                                            )}
                                        </Draggable>
                                    ))}
                                    {provided.placeholder}
                                    {
                                        (this.props.addItem && !this.props.readOnly)
                                            && <div className={`table-list__add-item table-list__item--margin`}>
                                                <Tooltip text='Add item' flow='top'>
                                                    <div className='table-list__add-item--container sd-margin-x--auto'>
                                                        {this.dropDown()}
                                                    </div>
                                                </Tooltip>
                                            </div>
                                    }
                                </div>
                            )}
                        </Droppable>
                    </DragDropContext>
                    : <div role='list' className={classes}>
                        {this.state.items.map((item: IPropsArrayItem, index: number) => (
                            <TableListItem
                                key={index}
                                start={item.start}
                                center={item.center}
                                end={item.end}
                                action={item.action}
                                selected={item.selected}
                                onClick={
                                    item.onClick
                                        ? item.onClick
                                        : undefined
                                }
                                onDoubleClick={
                                    item.onDoubleClick
                                        ? item.onDoubleClick
                                        : undefined
                                }
                                addItem={this.props.addItem}
                                itemsDropdown={() => this.props.itemsDropdown
                                    ? this.props.itemsDropdown(index)
                                    : []
                                }
                                hexColor={item.hexColor}
                                locked={item.locked}
                                positionLocked={item.positionLocked}
                                onAddItem={() => this.props.onAddItem
                                    && this.props.onAddItem(index, item)
                                }
                            />
                        ))}
                        {
                            (this.props.addItem && !this.props.readOnly)
                                && <div className={`table-list__add-item table-list__item--margin`}>
                                    <Tooltip text='Add item' flow='top'>
                                        <div className='table-list__add-item--container sd-margin-x--auto'>
                                            {this.dropDown()}
                                        </div>
                                    </Tooltip>
                                </div>
                        }
                    </div>
                : (this.props.addItem && !this.props.readOnly)
                    ? <div role='list' className={classes}>
                        <div className={`table-list__add-item table-list__item--margin`}>
                            <Tooltip text='Add item' flow='top'>
                                <div className='table-list__add-item--container sd-margin-x--auto'>
                                    {this.dropDown()}
                                </div>
                            </Tooltip>
                        </div>
                    </div>
                    : null
        );
    }
}

export interface IPropsItem {
    start?: React.ReactNode;
    center?: React.ReactNode;
    end?: React.ReactNode;
    action?: React.ReactNode;
    addItem?: boolean;
    dragAndDrop?: boolean;
    hexColor?: string;
    showDragHandle?: 'always' | 'onHover' | 'none';
    locked?: boolean;
    positionLocked?: boolean;
    selected?: boolean;
    onClick?(): void;
    onDoubleClick?(): void;
    onSelect?(): void;
    onAddItem?(e: number): void;
    itemsDropdown?(index?: number): Array<IMenuItem | ISubmenu | IMenuGroup | 'divider'>;
}

class TableListItem extends React.PureComponent<IPropsItem> {
    private multiClickHandler;

    constructor(props: IPropsItem) {
        super(props);

        this.multiClickHandler = setupSingleAndDoubleClick();
    }

    onActionMenuClick = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault();
        event.stopPropagation();
    }

    render() {
        let classes = classNames('table-list__item', {
            'table-list__item--selected': this.props.selected,
            'table-list__item--clickable': this.props.onClick,
            'table-list__item--draggable': this.props.dragAndDrop,
            'table-list__item--locked': this.props.locked,
            'table-list__item--position-locked': this.props.positionLocked,
            'table-list__item--drag-handles-always': !this.props.showDragHandle,
            'table-list__item--drag-handles-none': this.props.showDragHandle === 'none',
            'table-list__item--margin': !this.props.addItem,
        });

        const Wrapper: React.ComponentType<{children: JSX.Element}> = this.props.addItem
            ? ({children}) => (<div className='table-list__item-container'>{children}</div>)
            : ({children}) => children;

        return (
            <Wrapper>
                <>
                    <div
                        role='listitem'
                        className={classes}
                        onClick={(e) => this.multiClickHandler(e, {
                            onSingleClick: () => {
                                let selection = window.getSelection();
                                if (this.props.onClick && selection) {
                                    if (this.props.dragAndDrop) {
                                        this.props.onClick();
                                    } else {
                                        if (selection.toString().length < 1) {
                                            this.props.onClick();
                                        }
                                    }
                                }
                            },
                            onDoubleClick: () => {
                                if (this.props.onDoubleClick) {
                                    this.props.onDoubleClick();
                                }
                            },
                        })}
                    >
                        <div className='table-list__item-border' style={{ backgroundColor: this.props.hexColor }}></div>
                        <div className='table-list__item-content'>
                            <div className='table-list__item-content-block'>
                                {this.props.start && this.props.start}
                            </div>
                            <div className='table-list__item-content-block table-list__item-content-block--center'>
                                {this.props.center && this.props.center}
                            </div>
                            <div className='table-list__item-content-block'>
                                {this.props.end && this.props.end}
                            </div>
                            </div>
                        {
                            this.props.action
                                && <div className='table-list__slide-in-actions'
                                    onClick={this.onActionMenuClick}>
                                    {this.props.action}
                                </div>
                        }
                    </div>
                    {
                        this.props.addItem
                            && <div className='table-list__add-bar-container'>
                                <Tooltip text='Add item' flow='top'>
                                    <div className='table-list__add-bar'>
                                        <Dropdown
                                            onChange={this.props.onAddItem}
                                            items={this.props.itemsDropdown ? this.props.itemsDropdown() : []}>
                                            <Button
                                                type="primary"
                                                icon="plus-large"
                                                text="Add item"
                                                size="small"
                                                shape="round"
                                                iconOnly={true}
                                                onClick={() => false}
                                            />
                                        </Dropdown>
                                    </div>
                                </Tooltip>
                            </div>
                    }
                </>
            </Wrapper>
        );
    }
}

class PortalItem extends React.PureComponent {
    props: any;
    render() {
        const provided = this.props.provided;
        const snapshot = this.props.snapshot;

        const usePortal: boolean = snapshot.isDragging;

        const child = (
            <div
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}>
                <TableListItem
                    dragAndDrop={this.props.dragAndDrop}
                    start={this.props.item.start}
                    center={this.props.item.center}
                    end={this.props.item.end}
                    action={this.props.item.action}
                    onClick={
                        this.props.item.onClick
                            ? this.props.item.onClick
                            : undefined
                    }
                    onDoubleClick={
                        this.props.item.onDoubleClick
                            ? this.props.item.onDoubleClick
                            : undefined
                    }
                    addItem={this.props.addItem}
                    itemsDropdown={this.props.itemsDropdown}
                    hexColor={this.props.item.hexColor}
                    locked={this.props.item.locked}
                    positionLocked={this.props.item.positionLocked}
                    onAddItem={() => this.props.onAddItem}
                    showDragHandle={this.props.showDragHandle}
                />
            </div>
        );

        if (!usePortal) {
            return child;
        }

        // if dragging - put the item in a portal
        return ReactDOM.createPortal(child, document.body);
    }
}

export {
    TableList, TableListItem
};
