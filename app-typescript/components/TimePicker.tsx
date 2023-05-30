import * as React from 'react';
import nextId from "react-id-generator";
import { InputWrapper } from './Form';

interface IProps {
    value: string; // will output time as ISO8601 time string(e.g. 16:55) or an empty string if there's no value
    onChange(valueNext: string): void;
    allowSeconds?: boolean;
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

export class TimePicker extends React.PureComponent<IProps> {
    private htmlId = nextId();

    render() {
        return (
            <InputWrapper
                label={this.props.label}
                error={this.props.error}
                required={this.props.required}
                disabled={this.props.disabled}
                invalid={this.props.invalid}
                info={this.props.info}
                inlineLabel={this.props.inlineLabel}
                labelHidden={this.props.labelHidden}
                fullWidth={this.props.fullWidth}
                htmlId={this.htmlId}
                tabindex={this.props.tabindex}
            >
                <input
                    id={this.htmlId}
                    aria-labelledby={this.htmlId + 'label'}
                    type="time"
                    step={this.props.allowSeconds ? 1 : undefined}
                    className="sd-input__input"
                    value={this.props.value}
                    required={this.props.required}
                    disabled={this.props.disabled}
                    onChange={(event) => {
                        this.props.onChange(event.target.value);
                    }}
                />
            </InputWrapper>
        );
    }
}
