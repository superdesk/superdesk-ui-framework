import * as React from 'react';
import classNames from 'classnames';

interface IProps {
    color?: 'light' | 'medium' | 'dark'; // defaults to 'light'
    zIndex: number;
}

export class SubNav extends React.PureComponent<IProps> {
    render() {
        let classes = classNames('subnav', {
            'light': this.props.color === undefined,
            [`${this.props.color}`]: this.props.color || this.props.color !== undefined,
        });
        let style = {
            zIndex: 1000 + this.props.zIndex,
        };
        return (
            <div className={classes} style={style}>
                {this.props.children}
            </div>
        );
    }
}
