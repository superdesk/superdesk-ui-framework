import * as React from 'react';
import classNames from 'classnames';
import nextId from "react-id-generator";

interface ISelect {
    value?: string;
    label: string;
    info?: string;
    error?: string;
    required?: boolean;
    disabled?: boolean;
    invalid?: boolean;
    inlineLabel?: boolean;
    labelHidden?: boolean;
    tabindex?: number;
    fullWidth?: boolean;
    onChange(newValue: string): void;
    boxedStyle?: boolean;
    boxedLable?: boolean;
    placeholder?: string;
    size?: 'medium' | 'large' | 'x-large';
}

interface IState {
    value: string;
    invalid: boolean;
}

class Select extends React.Component<ISelect, IState> {
    constructor(props: ISelect) {
        super(props);

        this.state = {
            value: this.props.value ?? '',
            invalid: this.props.invalid ?? false,
        };

        this.handleChange = this.handleChange.bind(this);
    }

    htmlId = nextId();

    handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
        this.setState({ value: event.target.value });
        this.props.onChange(event.target.value);
    }

    render() {
        const classes = classNames('sd-input sd-input--is-select', {
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
        });

        return (
            <div className={classes}>
                <label className={labelClasses}
                htmlFor={this.htmlId}
                tabIndex={this.props.tabindex === undefined ? undefined : -1}>
                    {this.props.label}
                </label>

                <select className='sd-input__select'
                    id={this.htmlId}
                    value={this.state.value}
                    aria-describedby={this.htmlId}
                    tabIndex={this.props.tabindex}
                    onChange={this.handleChange}
                    disabled={this.props.disabled}>
                    {this.props.children}
                </select>

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

interface IOption {
    value?: string;
}

class Option extends React.PureComponent<IOption> {
    render() {
        return (
            <option value={this.props.value}>{this.props.children}</option>
        );
    }
}

export { Select, Option };
