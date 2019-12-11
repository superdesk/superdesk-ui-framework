import * as React from 'react';

interface INavigationList {
    header: string;
}

interface INavigationItems {
    text: string;
}

class NavigationList extends React.PureComponent<INavigationList> {
    render() {
        return (
            <React.Fragment>
                <li className='sd-left-nav__group-header'>{this.props.header}</li>
                {this.props.children}
            </React.Fragment>
        );
    }
}
class NavigationItem extends React.PureComponent<INavigationItems> {
    render() {
        return (
            <li>
                <a href='#' className="sd-left-nav__btn">{this.props.text}</a>
            </li>
        );
    }
}

class LeftNavigation extends React.PureComponent {
    render() {

        return (
            <nav className='sd-left-nav sd-left-nav--absolute' style={{ top: '48px' }}>
                <ul>
                    {this.props.children}
                </ul>
            </nav>
        );
    }
}

export { NavigationItem, NavigationList, LeftNavigation };
