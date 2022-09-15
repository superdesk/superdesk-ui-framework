import * as React from 'react';
import classNames from 'classnames';
import { DragDropContext, Droppable, Draggable, DropResult } from "react-beautiful-dnd";
import { Tooltip } from '../Tooltip';
import { Button } from '../Button';
import { Dropdown, IMenuItem, ISubmenu, IMenuGroup } from '../Dropdown';

interface IProps {
    children?: React.ReactNode;
    array: Array<IPropsArrayItem>;
    addItem?: boolean;
    dragAndDrop?: boolean;
    itemsDropdown?: Array<IMenuItem | ISubmenu | IMenuGroup | 'divider'>;
    className?: string;
    onDrag?(start: number, end: number): void;
}

interface IPropsArrayItem {
    start?: React.ReactNode;
    center?: React.ReactNode;
    end?: React.ReactNode;
    action?: React.ReactNode;
    onClick?(): void;
}

const reorder = (list: Array<IPropsArrayItem>, startIndex: number, endIndex: number) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

class TableList extends React.PureComponent<IProps, { items: Array<IPropsArrayItem>}> {
    constructor(props: Readonly<IProps>) {
        super(props);
        this.state = {
            items: [],
        };

        this.onDragEnd = this.onDragEnd.bind(this);
    }

    componentDidMount(): void {
        this.setState({ items: this.props.array });
    }

    componentDidUpdate(prevProps: Readonly<IProps>): void {
        if (prevProps.array !== this.props.array) {
            this.setState({
                items: this.props.array,
            });
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
            items,
        });

        return this.props.onDrag ?
            this.props.onDrag(result.source.index, result.destination.index) : null;
    }

    render() {
        let classes = classNames({
            'table-list': !this.props.addItem,
            [`${this.props.className}`]: this.props.className,
        });

        return (
            this.props.array ?
                this.props.dragAndDrop ?
                    <DragDropContext onDragEnd={this.onDragEnd}>
                        <Droppable droppableId="droppable">
                            {(provided, _snapshot) => (
                                <ul
                                    className={classes}
                                    ref={provided.innerRef}
                                    {...provided.droppableProps} >
                                    {this.state.items.map((item: IPropsArrayItem, index: number) => (
                                        <Draggable key={index} draggableId={`${index}`} index={index}>
                                            {(provided2, _snapshot2) => (
                                                <div
                                                    ref={provided2.innerRef}
                                                    {...provided2.draggableProps}
                                                    {...provided2.dragHandleProps} >
                                                    <TableListItem
                                                        dragAndDrop={this.props.dragAndDrop}
                                                        start={item.start}
                                                        center={item.center}
                                                        end={item.end}
                                                        action={item.action}
                                                        onClick={item.onClick ? item.onClick : undefined}
                                                        addItem={this.props.addItem}
                                                        itemsDropdown={this.props.itemsDropdown} />
                                                </div>
                                            )}
                                        </Draggable>
                                    ))}
                                    {provided.placeholder}
                                </ul>
                            )}
                        </Droppable>
                    </DragDropContext>
                    : <ul className={classes}>
                        {this.state.items.map((item: IPropsArrayItem, index: number) => (
                            <TableListItem
                                key={index}
                                start={item.start}
                                center={item.center}
                                end={item.end}
                                action={item.action}
                                onClick={item.onClick ? item.onClick : undefined}
                                addItem={this.props.addItem}
                                itemsDropdown={this.props.itemsDropdown} />
                        ))}
                    </ul>
                : this.props.children &&
                <ul className={classes}>
                    {this.props.children}
                </ul>
        );
    }
}

interface IPropsItem {
    start?: React.ReactNode;
    center?: React.ReactNode;
    end?: React.ReactNode;
    action?: React.ReactNode;
    addItem?: boolean;
    itemsDropdown?: any;
    dragAndDrop?: boolean;
    onClick?(): void;
}

class TableListItem extends React.PureComponent<IPropsItem> {
    render() {
        return (
            this.props.addItem ?
                <li className='table-list__item-container'>
                    <div
                        onClick={this.props.onClick}
                        className={`table-list__item ${this.props.onClick && 'table-list__item--clickable'} ${this.props.dragAndDrop && 'table-list__item--draggable'}`}>
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
                        {this.props.action && <div className='table-list__slide-in-actions'>
                            {this.props.action}
                        </div>}
                    </div>
                    <div className='table-list__add-bar-container'>
                        <Tooltip text='Add item' flow='top' appendToBody={true}>
                            <div className='table-list__add-bar'>
                                <Dropdown
                                    items={this.props.itemsDropdown}>
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
                </li>
                : <li
                    className={`table-list__item ${this.props.onClick && 'table-list__item--clickable'} ${this.props.dragAndDrop && 'table-list__item--draggable'} table-list__item--margin`}
                    onClick={this.props.onClick}>
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
                    {this.props.action && <div className='table-list__slide-in-actions'>
                        {this.props.action}
                    </div>}
                </li>
        );
    }
}

export {
    TableList, TableListItem
};
