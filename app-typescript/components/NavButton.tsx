import * as React from 'react';
import classNames from 'classnames';
import {Icon} from './Icon';
interface IProps {
    icon?: string;
    iconSize?: 'small' | 'big'; // defaults to 'small'
    theme?: 'light' | 'dark'; // defaults to 'light'
    type?: 'default' | 'primary' | 'highlight' | 'darker';
    onClick(): void;
}

export class NavButton extends React.PureComponent<IProps> {
    render() {
        let classes = classNames('sd-navbtn', {
            'sd-navbtn-dark': this.props.theme === 'dark',
            [`sd-navbtn--${this.props.type}`]: this.props.type,
        });

        return (
            <button className={classes} onClick={this.props.onClick}>
                {this.props.icon ? <Icon name={this.props.icon} size={this.props.iconSize} /> : null}
            </button>
        );
    }
}
