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
    onChange(newValue: string): void;
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
            'sd-input--invalid': this.props.invalid || this.state.invalid,
        });
        const labelClasses = classNames('sd-input__label', {
            'a11y-only': this.props.labelHidden,
        });

        return (
            <div className={classes}>
                <label className={labelClasses} htmlFor={this.htmlId}>{this.props.label}</label>

                <select className='sd-input__select'
                    id={this.htmlId}
                    value={this.state.value}
                    aria-describedby={this.htmlId}
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
