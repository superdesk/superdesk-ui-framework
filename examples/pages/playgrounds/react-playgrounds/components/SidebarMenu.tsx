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
                    {/* <li>
                        <a className='sd-sidebar-menu__btn'>
                            <i className='sd-sidebar-menu__main-icon big-icon--dashboard'></i>
                            <i className='sd-sidebar-menu__helper-icon big-icon--chevron-left'></i>
                        </a>
                    </li>
                    <li>
                        <a className='sd-sidebar-menu__btn sd-sidebar-menu__btn--active'>
                            <i className='sd-sidebar-menu__main-icon big-icon--view'></i>
                            <i className='sd-sidebar-menu__helper-icon big-icon--chevron-left'></i>
                        </a>
                    </li>
                    <li>
                        <a className='sd-sidebar-menu__btn '>
                            <i className='sd-sidebar-menu__main-icon big-icon--marked-star'></i>
                            <i className='sd-sidebar-menu__helper-icon big-icon--chevron-left'></i>
                        </a>
                    </li>
                    <li>
                        <a className='sd-sidebar-menu__btn'>
                            <i className='sd-sidebar-menu__main-icon big-icon--spike'></i>
                            <i className='sd-sidebar-menu__helper-icon big-icon--chevron-left'></i>
                        </a>
                    </li>
                    <li className='sd-sidebar-menu__spacer'></li>
                    <li>
                        <a className='sd-sidebar-menu__btn'>
                            <i className='sd-sidebar-menu__main-icon big-icon--personal'></i>
                            <i className='sd-sidebar-menu__helper-icon big-icon--chevron-left'></i>
                        </a>
                    </li>
                    <li>
                        <a className='sd-sidebar-menu__btn'>
                            <i className='sd-sidebar-menu__main-icon big-icon--global-search'></i>
                            <i className='sd-sidebar-menu__helper-icon big-icon--chevron-left'></i>
                        </a>
                    </li>
                    <li>
                        <a className='sd-sidebar-menu__btn'>
                            <i className='sd-sidebar-menu__main-icon big-icon--picture'></i>
                            <i className='sd-sidebar-menu__helper-icon big-icon--chevron-left'></i>
                        </a>
                    </li> */}
                </ul>
            </div>
        );
    }
}
