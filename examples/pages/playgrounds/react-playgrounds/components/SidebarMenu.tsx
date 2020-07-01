import * as React from 'react';
import { Icon } from '../../../../../app-typescript/components/Icon';

interface IProps {
    items: Array<IItem | 'divider'>;
}

interface IItem {
    icon: string,
    size: 'small' | 'big'; // defaults to 'small'
    tooltip?: string;
    active?: boolean;
}

interface IState {
    index: number;
    closeIndex: number;
}

export class SidebarMenu extends React.PureComponent<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            index: -1,
            closeIndex: -1,
        }
        this.handleClick = this.handleClick.bind(this);
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

    render() {
        return (
            <div className='sd-sidebar-menu sd-content-wrapper__left-tabs'>
                <ul className='authoring-active'>
                    {this.props.items.map((item, index) => {
                        if (item === 'divider') {
                            return (
                                <li key={index} className='sd-sidebar-menu__spacer'></li>
                            )
                        } else {
                            return (
                                <li key={index} data-sd-tooltip={item['tooltip']} data-flow='right'>
                                    <a className={'sd-sidebar-menu__btn' + (index === this.state.closeIndex ? ' sd-sidebar-menu__btn--closed ' : '') + (item['active'] ? ' sd-sidebar-menu__btn--active' : (index === this.state.index ? ' sd-sidebar-menu__btn--active' : ''))}
                                        onClick={() => this.handleClick(index)}>
                                        <span className='sd-sidebar-menu__main-icon '>
                                            <Icon size={item['size']} name={item['icon']} />
                                        </span>
                                        <i className='sd-sidebar-menu__helper-icon big-icon--chevron-left'></i>
                                    </a>
                                </li>)
                        }
                    })}
                </ul>
            </div>
        );
    }
}
