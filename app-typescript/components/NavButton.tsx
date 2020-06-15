import * as React from 'react';
import classNames from 'classnames';
import { Icon } from './Icon';
interface IProps {
    id?: string;
    icon?: string;
    iconSize?: 'small' | 'big'; // defaults to 'small'
    theme?: 'light' | 'dark'; // defaults to 'light'
    type?: 'default' | 'primary' | 'highlight' | 'darker';
    value?: 'button' | 'submit' | 'reset'; // defaults to 'button'
    onClick(): void;
}

export class NavButton extends React.PureComponent<IProps> {
    render() {
        let classes = classNames('sd-navbtn', {
            'sd-navbtn-dark': this.props.theme === 'dark',
            [`sd-navbtn--${this.props.type}`]: this.props.type,
        });
        const value = this.props.value === undefined ? 'button' : this.props.value;

        return (
            <button className={classes} onClick={this.props.onClick} aria-label={value} id={this.props.id}>
                {this.props.icon ? <Icon name={this.props.icon} size={this.props.iconSize} /> : null}
            </button>
        );
    }
}
