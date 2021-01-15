import * as React from 'react';
import classNames from 'classnames';
import {Icon} from './Icon';
interface IProps {
    text: string;
    type?: 'default' | 'primary' | 'success' | 'warning' | 'alert' | 'highlight' | 'sd-green';
    icon?: string;
    style?: 'basic' | 'translucent'; // defaults to 'basic'
}

export class IconLabel extends React.PureComponent<IProps> {
    render() {
        let classes = classNames('label-icon', {
            [`label-icon--${this.props.type}`]: this.props.type !== undefined,
            'label-icon--translucent': this.props.style === 'translucent'
        });

        return (
            <span className={classes}>
                <Icon name={this.props.icon}/> {this.props.text}
            </span>
        );
    }
}
