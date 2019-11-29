import * as React from 'react';
import classNames from 'classnames';

interface IProps {
    text: string;
    type?: 'default' | 'primary' | 'success' | 'warning' | 'alert' | 'highlight' | 'sd-green';
    icon?: string;
}

export class IconLabel extends React.PureComponent<IProps> {
    render() {
        let classes = classNames('label-icon', {
            [`label-icon--${this.props.type}`]: this.props.type !== undefined,

        });

        return (
            <span className={classes}>
                <i className={'icon-' + this.props.icon}></i> {this.props.text}
            </span>
        );
    }
}
