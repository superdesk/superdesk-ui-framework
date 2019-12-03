import * as React from 'react';


interface IProps {
    children?: React.ReactNode;
}

export class SidebarMenu extends React.PureComponent<IProps> {
    render() {
        return (
            <div className='sd-sidebar-menu sd-content-wrapper__left-tabs'>
                <ul className='authoring-active'>
                    <li>
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
                        <a className='sd-sidebar-menu__btn'>
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
                    </li>
                </ul>
            </div>
        );
    }
}
