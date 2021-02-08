import * as React from 'react';
import classNames from 'classnames';
import { Icon } from './Icon';
interface IProps {
    id?: string;
    icon?: string;
    text?: string;
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
            'sd-navbtn--textual': !this.props.icon && this.props.text,
        });
        const value = this.props.value === undefined ? 'button' : this.props.value;
        return (
            <button type={value} className={classes} onClick={this.props.onClick} aria-label={this.props.text}>
                {this.props.icon ? <Icon name={this.props.icon} size={this.props.iconSize} /> : null}
                {!this.props.icon && this.props.text ?
                    <span className="sd-navbtn__text">{this.props.text}</span> : null}
            </button>
        );
    }
}
