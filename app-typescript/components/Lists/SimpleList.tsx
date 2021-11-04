import * as React from 'react';
import classNames from 'classnames';

interface IProps {
    children?: React.ReactNode;
    density?: 'compact' | 'comfortable'; // defaults to 'compact'
    border?: boolean;
}

interface IPropsItem {
    stacked?: boolean;
    justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between';
}

class SimpleListItem extends React.PureComponent<IPropsItem> {
    render() {
        let classes = classNames('simple-list__item', {
            'simple-list__item--stacked': this.props.stacked,
            'simple-list__item--justify-flex-start': this.props.justify === undefined,
            [`simple-list__item--justify-${this.props.justify}`]: this.props.justify || this.props.justify !== undefined,
        });
        return (
            <li className={classes}>
                {this.props.children}
            </li>
        );
    }
}

class SimpleList extends React.PureComponent<IProps> {
    render() {
        let classes = classNames('simple-list', {
            'simple-list--compact': this.props.density === undefined,
            'simple-list--dotted': this.props.border === true,
            [`simple-list--${this.props.density}`]: this.props.density || this.props.density !== undefined,
        });
        return (
            <ul className={classes}>
                {this.props.children}
            </ul>
        );
    }
}

export {
    SimpleList, SimpleListItem
};