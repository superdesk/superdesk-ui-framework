import * as React from 'react';
import classNames from 'classnames';

interface IPropsBase {
    label?: string;
    children: React.ReactNode;
    maxLength?: number;
    info?: string;
    error?: string;
    required?: boolean;
    disabled?: boolean;
    invalid?: boolean;
    inlineLabel?: boolean;
    labelHidden?: boolean;
    tabindex?: number;
    fullWidth?: boolean;
    boxedStyle?: boolean;
    boxedLable?: boolean;
    placeholder?: string;
    value?: string | number;
    htmlId?: string;
    size?: 'medium' | 'large' | 'x-large'; // default: 'medium'
}

interface IState {
    value: string | number;
    invalid: boolean;
}

export class InputWrapper extends React.Component<IPropsBase, IState> {
    constructor(props: IPropsBase) {
        super(props);

        this.state = {
            value: this.props.value ?? '',
            invalid: this.props.invalid ?? false,
        };
    }

    render() {
        const classes = classNames('sd-input', {
            'sd-input--inline-label': this.props.inlineLabel,
            'sd-input--required': this.props.required,
            'sd-input--disabled': this.props.disabled,
            'sd-input--full-width': this.props.fullWidth,
            'sd-input--invalid': this.props.invalid || this.state.invalid,
            'sd-input--medium': this.props.size === undefined,
            [`sd-input--${this.props.size}`]: this.props.size || this.props.size !== undefined,
            'sd-input--boxed-style': this.props.boxedStyle,
            'sd-input--boxed-label': this.props.boxedLable,
        });
        const labelClasses = classNames('sd-input__label', {
            'a11y-only': this.props.labelHidden,
            'sd-input__label--boxed': this.props.boxedLable,
        });

        return (
            <div className={classes}>
                <label className={labelClasses} htmlFor={this.props.htmlId} id={this.props.htmlId + 'label'}
                        tabIndex={this.props.tabindex === undefined ? undefined : -1}>
                    {this.props.label}
                </label>
                <div className="sd-input__input-container">
                    {this.props.children}
                </div>
                {this.props.maxLength ?
                    <div className='sd-input__char-count'>
                        {this.state.value.toString().length} / {this.props.maxLength}
                    </div>
                    : null}
                <div className='sd-input__message-box'>
                    {this.props.info && !this.props.invalid && !this.state.invalid ?
                        <div className='sd-input__hint'>{this.props.info}</div> : null}
                    {this.props.invalid || this.state.invalid ?
                        <div className='sd-input__message'>{this.props.error}</div>
                        : null}
                </div>
            </div>
        );
    }
}
