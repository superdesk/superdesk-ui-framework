import * as React from 'react';
import classNames from 'classnames';

interface IProps {
    name?: string;
    size?: 'small' | 'big'; // defaults to 'small'
    type?: 'default' | 'primary' | 'success' | 'warning' | 'alert' | 'highlight' | 'light';
}

export class Icon extends React.PureComponent<IProps> {
    render() {
        let classes = classNames({
            [`icon-${this.props.name}`]: (this.props.name && !this.props.size) || (this.props.name && this.props.size === 'small'),
            [`big-icon--${this.props.name}`]: this.props.name && this.props.size === 'big',
            [`${this.props.type}`]: this.props.type,
        })
        return (
            <i className={classes}></i>
        );
    }
}
