import * as React from 'react';
import classNames from 'classnames';

interface IProps {
    color?: 'light' | 'dark';
    style?: any;
}

export class DragHandleDots extends React.PureComponent<IProps> {
    render() {
        let classes = classNames('drag-handle-dots', {
            [`drag-handle-dots--${this.props.color}`]: this.props.color,
        });
        return (
            <div style={this.props.style} className={classes}></div>
        );
    }
}
