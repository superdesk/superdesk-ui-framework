import * as React from 'react';
import classNames from 'classnames';

interface IProps {
    children?: React.ReactNode;
    density?: 'compact' | 'comfortable' | 'loose'; // defaults to 'compact'
    border?: boolean;
    className?: string;
    width?: 'none' | 'x-small' | 'small' | 'medium' | 'large';
    id?: string;
}

interface IPropsItem {
    stacked?: boolean;
    justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between';
    id?: string;
}

class SimpleListItem extends React.PureComponent<IPropsItem> {
    render() {
        let classes = classNames('simple-list__item', {
            'simple-list__item--stacked': this.props.stacked,
            'simple-list__item--justify-flex-start': this.props.justify === undefined,
            [`simple-list__item--justify-${this.props.justify}`]:
                this.props.justify || this.props.justify !== undefined,
        });
        return (
            <li className={classes} id={this.props.id || undefined}>
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
            '': this.props.width === undefined,
            [`simple-list--fixedW-${this.props.width}`]: this.props.width || this.props.width !== undefined,
        }, this.props.className);
        return (
            <ul className={classes} id={this.props.id || undefined}>
                {this.props.children}
            </ul>
        );
    }
}

export {
    SimpleList, SimpleListItem
};
