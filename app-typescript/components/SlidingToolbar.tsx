import * as React from 'react';
import classNames from 'classnames';

interface IProps {
    side?: 'start' | 'end';
}

export class SlidingToolbar extends React.PureComponent<IProps> {
    render() {
        let classes = classNames('sliding-toolbar', {
            'sliding-toolbar--right': this.props.side === undefined,
            [`sliding-toolbar--${this.props.side}`]: this.props.side || this.props.side !== undefined,

        });
        return (
            <div className={classes}>
                {this.props.children}
            </div>
        );
    }
}
