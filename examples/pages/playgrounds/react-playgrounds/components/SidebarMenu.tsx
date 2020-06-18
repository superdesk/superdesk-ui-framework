import * as React from 'react';
import { Icon } from '../../../../../app-typescript/components/Icon';

interface IProps {
    children?: React.ReactNode;
    items?: Array<{
        icon: string,
        size: 'small' | 'big'; // defaults to 'small',
    }>;
}

interface IState {
    index: number;
}

export class SidebarMenu extends React.PureComponent<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            index: -1,
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(indexNumber: number) {
        this.setState(({
            index: indexNumber,
        }));
    }

    render() {
        return (
            <div className='sd-sidebar-menu sd-content-wrapper__left-tabs'>
                <ul className='authoring-active'>
                    {this.props.items.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={'sd-sidebar-menu__btn' + (index === this.state.index ? ' sd-sidebar-menu__btn--active' : '')} onClick={() => this.handleClick(index)}>
                                    <span className='sd-sidebar-menu__main-icon '>
                                        <Icon size={item['size']} name={item['icon']} />
                                    </span>
                                    <i className='sd-sidebar-menu__helper-icon big-icon--chevron-left'></i>
                                </a>
                            </li>)
                    })}

                </ul>
            </div>
        );
    }
}
