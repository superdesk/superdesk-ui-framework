import * as React from 'react';

interface IMenuItem {
    id: string;
    label: string;
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
    onSelect(id: string): void;
}

export class LeftMenu extends React.PureComponent<IMenu> {
    render() {
        return (
            <nav className={this.props.navClass} aria-label={this.props.ariaLabel}>
                {this.props.groups.map((group, i) => {
                    return (
                        <ul key={i}>
                            <li className='sd-left-nav__group-header'>{group.label}</li>
                            {group.items.map((item, j) => {
                                return (
                                    <li
                                        key={j}
                                        onClick={() => {
                                            this.props.onSelect(item.id);
                                        }}
                                    >
                                        <a href='#' className="sd-left-nav__btn">{item.label}</a>
                                    </li>
                                );
                            })}
                        </ul>
                    );
                })}
            </nav>
        );
    }
}
