import * as React from 'react';
import classNames from 'classnames';

interface IProps {
    size?: 'mini' |'small' | 'medium' | 'large' | 'x-large'; // defaults to 'small'
    border?: boolean;
}

export class Divider extends React.PureComponent<IProps> {
    render() {
        let classes = classNames('button-group__divider', {
            'button-group__divider--small': this.props.size === undefined,
            'button-group__divider--border': this.props.border === true,
            [`button-group__divider--${this.props.size}`]: this.props.size || this.props.size !== undefined,
        });
        return (
            <div className={classes} />
        );
    }
}
