import * as React from 'react';
import classNames from 'classnames';

interface IProps {
    text: string;
    color?: string;  //  https://ui-framework.superdesk.org/#/components/colors
    icon?: string;
}

export class IconLabel extends React.Component<IProps> {
    render() {
        let classes = classNames('label-icon', {
            [`label-icon--${this.props.color}`]: this.props.color,
        });

        return (
            <span className={classes}>
                <i className={'icon-' + this.props.icon}></i> {this.props.text}
            </span>
        );
    }
}
