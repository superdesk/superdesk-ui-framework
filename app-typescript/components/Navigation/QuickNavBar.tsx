import * as React from 'react';
import { Icon } from '../Icon';

interface IProps {
    items: Array<IItem | 'divider'>;
    side?: 'none' | 'left' | 'right';
}

interface IItem {
    icon: string;
    tooltip?: string;
    active?: boolean;
    onClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
}

interface IState {
    index: number;
    closeIndex: number;
}

export class QuickNavBar extends React.PureComponent<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            index: -1,
            closeIndex: -1,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(item: IItem, indexNumber: number, event: any) {
        this.setState({
            index: indexNumber,
        });
        if (this.state.index === indexNumber) {
            this.setState({
                closeIndex: indexNumber,
                index: -1,
            });
        }

        item.active = !item.active;
        item.onClick(event);
    }

    render() {
        return (
            <div className='sd-quickbar-menu'>
                <ul>
                    {this.props.items.map((item, index) => {
                        if (item === 'divider') {
                            return (
                                <li key={index} className='sd-quickbar__spacer'></li>
                            );
                        } else {
                            return (
                                <li key={index} data-sd-tooltip={item['tooltip']} data-flow='right'>
                                    <a role='button' aria-label={item['tooltip']} className={'sd-quickbar__btn' + (item['active'] ? ' sd-quickbar__btn--active' : (index === this.state.index ? ' sd-quickbar__btn--active' : ''))}
                                        onClick={() => this.handleClick(item, index, event)}>
                                        <Icon size={'small'} name={item['icon']} />
                                    </a>
                                </li>);
                        }
                    })}
                </ul>
            </div>
        );
    }
}
