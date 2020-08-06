import * as React from 'react';
import classNames from 'classnames';

interface IMenuItem {
    id: string;
    label: string;
    route?: string;
}

interface IMenuGroup {
    label: string;
    items: Array<IMenuItem>;
}

interface IMenu {
    navClass?: string;
    groups: Array<IMenuGroup>;
    activeItemId: string;
    ariaLabel?: string;
    onSelect(id: string, route: string): void;
}

export class LeftMenu extends React.PureComponent<IMenu> {
    render() {
        let classes = classNames('sd-left-nav', {
            [`${this.props.navClass}`]: this.props.navClass,
        });

        return (
            <nav className={classes} aria-label={this.props.ariaLabel}>
                {this.props.groups.map((group, i) => {
                    return (
                        <React.Fragment key={i}>
                            <span className='sd-left-nav__group-header'>{group.label}</span>
                            {group.items.map((item, j) => {
                                return (
                                    <button key={j}
                                        onClick={() => {
                                            this.props.onSelect(item.id, item.route ? item.route : '');
                                        }} className="sd-left-nav__btn">{item.label}</button>

                                );
                            })}
                        </React.Fragment>
                    );
                })}
            </nav>
        );
    }
}
