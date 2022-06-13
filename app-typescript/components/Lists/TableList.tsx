import * as React from 'react';
import classNames from 'classnames';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Tooltip } from '../Tooltip';
import { Button } from '../Button';
import { Dropdown } from '../Dropdown';

interface IPropsItem {
    start?: any;
    center?: any;
    end?: any;
    action?: any;
    onClick?(): any;
    addItem?: boolean;
    selectComponent?: any;
    itemsDropdown?: any;
}

class TableListItem extends React.PureComponent<IPropsItem> {
    render() {
        return (
            this.props.addItem ?
            <li className='table-list__item-container'>
                <div className='table-list__item table-list__item--clickable table-list__item--draggable'>
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
                            <div>{this.props.selectComponent}</div>
                        </div>
                    </Tooltip>
                </div>
            </li>
            : <li className='table-list__item table-list__item--clickable table-list__item--draggable table-list__item--margin'>
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

interface IProps {
    children?: React.ReactNode;
    array?: any;
    addItem?: boolean;
    dragAndDrop?: boolean;
    itemsDropdown?: any;
    onClick?: any;
}

interface IPropsArray {
    start?: any;
    center?: any;
    end?: any;
    action?: any;
}

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

class TableList extends React.PureComponent<IProps, {items: any}> {
    constructor(props) {
        super(props);
        this.state = {
          items: [],
        };

        this.onDragEnd = this.onDragEnd.bind(this);
    }

    componentDidMount(): void {
        this.setState({items: this.props.array});
    }

    componentDidUpdate(prevProps: Readonly<IProps>, prevState: Readonly<{ items: any; }>, snapshot?: any): void {
        if (prevProps.array !== this.props.array) {
            this.setState({
                items: this.props.array,
            });
        }
    }

    onDragEnd(result) {
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
    }

    render() {
        let classes = classNames({
            'table-list' : !this.props.addItem,
        });

        return (
            this.props.array ?
                this.props.dragAndDrop ?
                <DragDropContext onDragEnd={this.onDragEnd}>
                    <Droppable droppableId="droppable">
                    {(provided, snapshot) => (
                        <ul
                        className={classes}
                        ref={provided.innerRef}
                        {...provided.droppableProps} >
                            {this.state.items.map((item, index) => (
                                <Draggable key={index} draggableId={`${index}`} index={index}>
                                    {(provided2, snapshot2) => (
                                        <div
                                        ref={provided2.innerRef}
                                        {...provided2.draggableProps}
                                        {...provided2.dragHandleProps} >
                                            <TableListItem
                                            start={item.start}
                                            center={item.center}
                                            end={item.end}
                                            action={item.action}
                                            onClick={item.onClick ? item.onClick : false}
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
                    {this.state.items.map((item, index) => (
                        <TableListItem
                        start={item.start}
                        center={item.center}
                        end={item.end}
                        action={item.action}
                        onClick={item.onClick ? item.onClick : false}
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

export {
    TableList, TableListItem
};
