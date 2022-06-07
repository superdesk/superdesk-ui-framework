import * as React from 'react';
import classNames from 'classnames';
import {Icon} from './Icon';
interface IProps {
    text: string;
    innerLabel?: string;
    type?: 'default' | 'primary' | 'success' | 'warning' | 'alert' | 'highlight' | 'sd-green';
    size?: 'default' | 'large' | 'small';
    icon?: string;
    style?: 'basic' | 'translucent'; // defaults to 'basic'
}

export class IconLabel extends React.PureComponent<IProps> {
    render() {
        let classes = classNames('label-icon', {
            [`label-icon--${this.props.type}`]: this.props.type !== undefined,
            [`label-icon--${this.props.size}`]: this.props.size !== undefined,
            'label-icon--translucent': this.props.style === 'translucent',
        });

        return (
            <span className={classes}>
                {this.props.icon ?
                    <Icon name={this.props.icon}/> : null}
                {this.props.innerLabel ?
                    <span className='label-icon--inner-label'>{this.props.innerLabel}</span> : null}
                <span className='label-icon__value'>{this.props.text}</span>
            </span>
        );
    }
}
