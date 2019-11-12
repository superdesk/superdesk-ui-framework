import * as React from 'react';
import classNames from 'classnames';

interface IButtonBase {
    theme?: 'light' | 'dark';
    icon?: string;
    disabled?: boolean;
    type?: 'default' | 'primary' | 'success' | 'warning' | 'alert' | 'highlight' | 'sd-green';
    size?: 'small' | 'normal' | 'large';
    children?: never;
}

interface IPropsButton extends IButtonBase {
    text?: string;
    expand?: boolean;
    style?: 'filled' | 'hollow' | 'text-only';
}

interface IPropsIconButton extends IButtonBase {
    shape?: 'square' | 'round';
}

export class Button extends React.Component<IButtonBase & IPropsButton & IPropsIconButton> {
    render() {
        let classes = classNames('btn', {
            'btn--expanded': this.props.expand,
            [`btn--${this.props.size}`]: this.props.size !== 'normal',
            [`btn--${this.props.type}`]: this.props.type !== 'default',
            [`btn--${this.props.style}`]: this.props.style !== 'filled',
            'btn--disabled': this.props.disabled,
            'btn--icon-only': !this.props.text,
            'btn--ui-dark': this.props.theme === 'dark',
            'btn--icon-only-circle': this.props.shape === 'round',
        });

        return (
            <React.Fragment>
                <button className={classes}>
                    {this.props.icon ? <i className={'icon-' + this.props.icon}></i> : null}
                    {this.props.text}
                </button>
            </React.Fragment>
        );
    }
}
