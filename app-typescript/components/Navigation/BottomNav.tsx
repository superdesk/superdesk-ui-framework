import * as React from 'react';
import { Icon } from '../Icon';
import { IconButton } from '../IconButton';
import { clone } from 'lodash';

interface IProps {
    items: Array<IItem>;
    side?: 'none' | 'left' | 'right';
}

interface IItem {
    icon?: string;
    active?: boolean;
    title: string;
    onClick(event: any): void;
    onRemove(event: any): void;
}

interface IState {
    index: number;
    closeIndex: number;
    items: Array<IItem>;
}

export class BottomNav extends React.PureComponent<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            index: -1,
            closeIndex: -1,
            items: this.props.items,
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleClick(indexNumber: number) {
        this.setState({
            index: indexNumber,
        });
        if (this.state.index === indexNumber) {
            this.setState({
                closeIndex: indexNumber,
            });
        }
    }
    handleDelete(indexNumber: number) {
        const newItems = clone(this.state.items);
        newItems.splice(indexNumber, 1);

        this.setState({
            items: newItems,
        });
    }

    render() {
        return (
            <ul className='sd-bottom-nav-list'>
                {this.props.items.map((item, index) => {
                    return (
                        <li
                            key={index}
                            className={
                                'sd-bottom-nav-list__item'
                                + (item['active']
                                    ? ' sd-bottom-nav-list__item--active'
                                    : (index === this.state.index ? ' sd-bottom-nav-list__item--active' : ''))
                            }
                        >
                            <a className='sd-bottom-nav-list__item-title' onClick={(event) => {
                                this.handleClick(index);
                                item.onClick(event);
                            }}>
                                {item['icon'] &&
                                    <Icon name={item['icon']} />
                                }
                                <span>{item.title}</span>
                            </a>
                            <IconButton
                                size='small'
                                icon="close-small"
                                ariaValue='Delete'
                                onClick={() => item.onRemove(index)} />
                        </li>
                    );
                })}
            </ul>
        );
    }
}
