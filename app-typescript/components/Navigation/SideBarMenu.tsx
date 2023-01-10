import * as React from 'react';
import { Icon } from '../Icon';

interface IProps {
    items: Array<IItem | 'divider'>;
    side?: 'none' | 'left' | 'right';
    hover?: boolean;
    onCLick?(): void;
}

interface IItem {
    icon: string;
    size: 'small' | 'big'; // defaults to 'small'
    tooltip?: string;
    active?: boolean;
    hover?: boolean;
    onCLick?(): void;
}

interface IState {
    index: number;
    closeIndex: number;
    hover: boolean;
}

export class SideBarMenu extends React.PureComponent<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            index: -1,
            closeIndex: -1,
            hover: this.props.hover ? this.props.hover : false,
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleArrows = this.handleArrows.bind(this);
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

    handleArrows() {
        this.setState({
            hover: !this.state.hover,
        });
    }

    render() {
        return (
            <div className='sd-sidebar-menu sd-content-wrapper__left-tabs'>
                <ul className={'authoring-active'}>
                    {this.props.items.map((item, index) => {
                        if (item === 'divider') {
                            return (
                                <li key={index} className='sd-sidebar-menu__spacer'></li>
                            );
                        } else {
                            return (
                                <li key={index}
                                data-sd-tooltip={item['tooltip']}
                                data-flow='right'
                                className={item.hover ? 'authoring-active__item' : ''}>
                                    <a className={'sd-sidebar-menu__btn'
                                    + (this.state.hover ? ' sd-sidebar-menu__btn--closed ' : '')
                                    + (item['active'] ? ' sd-sidebar-menu__btn--active' : (index === this.state.index ? ' sd-sidebar-menu__btn--active' : ''))}
                                        onClick={() => {
                                            this.handleClick(index);
                                            if (item.hover) {
                                                this.handleArrows();
                                                if (item.onCLick) {
                                                    item.onCLick();
                                                }
                                            }
                                        }}>
                                        <span className='sd-sidebar-menu__main-icon '>
                                            <Icon size={item['size']} name={item['icon']} />
                                        </span>
                                        <i className='sd-sidebar-menu__helper-icon big-icon--chevron-left'></i>
                                    </a>
                                </li>);
                        }
                    })}
                </ul>
            </div>
        );
    }
}
