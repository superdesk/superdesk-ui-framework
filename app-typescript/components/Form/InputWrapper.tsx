import * as React from 'react';
import classNames from 'classnames';

export interface IInputCommon {
    label: string;
    info?: string;
    error?: string;
    required?: boolean;
    disabled?: boolean;
    readonly?: boolean;
    preview?: boolean;
    inlineLabel?: boolean;
    labelHidden?: boolean;
    tabindex?: number;
    fullWidth?: boolean;
    boxedStyle?: boolean;
    boxedLable?: boolean;
}

export interface IInputWrapper extends IInputCommon {
    invalid?: boolean;
}

interface IPropsBase extends IInputWrapper {
    children: React.ReactNode;
    maxLength?: number;
    value?: string | number;
    htmlId?: string;
    size?: 'medium' | 'large' | 'x-large'; // default: 'medium'
}

interface IState {
    value: string | number;
}

export class InputWrapper extends React.Component<IPropsBase, IState> {
    constructor(props: IPropsBase) {
        super(props);

        this.state = {
            value: this.props.value ?? '',
        };
    }

    render() {
        const classes = classNames('sd-input', {
            'sd-input--inline-label': this.props.inlineLabel,
            'sd-input--required': this.props.required,
            'sd-input--disabled': this.props.disabled,
            'sd-input--full-width': this.props.fullWidth,
            'sd-input--invalid': this.props.invalid,
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
                <label
                    className={labelClasses}
                    htmlFor={this.props.htmlId}
                    id={this.props.htmlId + 'label'}
                    tabIndex={this.props.tabindex === undefined ? undefined : -1}
                >
                    {this.props.label}
                </label>
                <div className="sd-input__input-container">
                    {this.props.children}
                </div>
                    {
                        this.props.maxLength
                            && <div className='sd-input__char-count'>
                                {this.props.value?.toString().length} / {this.props.maxLength}
                            </div>
                    }
                <div className='sd-input__message-box'>
                    {
                        this.props.info && !this.props.invalid
                            && <div className='sd-input__hint'>{this.props.info}</div>
                    }
                    {
                        this.props.invalid
                            && <div className='sd-input__message'>{this.props.error}</div>
                    }
                </div>
            </div>
        );
    }
}
