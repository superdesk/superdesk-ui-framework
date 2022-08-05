import * as React from 'react';
import classNames from 'classnames';
import nextId from "react-id-generator";

interface IProps {
    value: string; // will output time as ISO8601 time string(e.g. 16:55) or an empty string if there's no value
    onChange(valueNext: string): void;
    disabled?: boolean;
    inlineLabel?: boolean;
    required?: boolean;
    fullWidth?: boolean;
    invalid?: boolean;
    labelHidden?: boolean;
    tabindex?: number;
    label?: string;
    info?: string;
    error?: string;
}

interface IState {
    invalid: boolean;
}

export class TimePicker extends React.PureComponent<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            invalid: this.props.invalid ? this.props.invalid : false,
        };
    }
    render() {
        const classes = classNames('sd-input', {
            'sd-input--inline-label': this.props.inlineLabel,
            'sd-input--required': this.props.required,
            'sd-input--disabled': this.props.disabled,
            'sd-input--full-width': this.props.fullWidth,
            'sd-input--invalid': this.props.invalid || this.state.invalid,
        });
        const labelClasses = classNames('sd-input__label', {
            'a11y-only': this.props.labelHidden,
        });

        let htmlId = nextId();
        return (
            <div className={classes}>
                <label className={labelClasses} htmlFor={htmlId} id={htmlId + 'label'}
                tabIndex={this.props.tabindex === undefined ? undefined : -1}>
                    {this.props.label}
                </label>
                <input
                type="time"
                className="sd-input__input"
                value={this.props.value}
                required={this.props.required}
                disabled={this.props.disabled}
                onChange={(event) => {
                    this.props.onChange(event.target.value);
                }}/>
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
