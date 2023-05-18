import * as React from 'react';
import classNames from 'classnames';
interface IProps {
    name?: string;
    size?: 'small' | 'big'; // defaults to 'small'
    type?: 'default' | 'primary' | 'success' | 'warning' | 'alert' | 'highlight' | 'light' | 'white';
    className?: string;
    scale?: '1.5x' | '2x' | '3x' | '4x';
    ariaHidden?: boolean;
    color?: string;
}

export class Icon extends React.PureComponent<IProps> {
    render() {
        let classes = classNames(this.props.className, {
            [`icon-${this.props.name}`]:
                (this.props.name && !this.props.size) || (this.props.name && this.props.size === 'small'),
            [`big-icon--${this.props.name}`]: this.props.name && this.props.size === 'big',
            [`color--${this.props.type}`]: this.props.type,
            [`scale--${this.props.scale}`]: this.props.scale,
        });
        return (
            <i
                className={classes}
                aria-label={this.props.name}
                aria-hidden={this.props.ariaHidden}
                style={{color: this.props.color}}
            />
        );
    }
}
