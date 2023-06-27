import * as React from 'react';
import nextId from "react-id-generator";
import { InputWrapper } from './Form';
import {IInputWrapper} from './Form/InputWrapper';

interface IProps extends IInputWrapper {
    value: string; // will output time as ISO8601 time string(e.g. 16:55) or an empty string if there's no value
    onChange(valueNext: string): void;
    allowSeconds?: boolean;
}

export class TimePicker extends React.PureComponent<IProps> {
    private htmlId = nextId();

    render() {
        if (this.props.preview) {
            return (
                <div>
                    <span>{this.props.value}</span>
                </div>
            );
        }

        return (
            <InputWrapper
                label={this.props.label}
                error={this.props.error}
                required={this.props.required}
                disabled={this.props.disabled}
                info={this.props.info}
                inlineLabel={this.props.inlineLabel}
                labelHidden={this.props.labelHidden}
                htmlId={this.htmlId}
                tabindex={this.props.tabindex}
            >
                <input
                    value={this.props.value}
                    type="time"
                    className="sd-input__input"
                    id={this.htmlId}
                    aria-labelledby={this.htmlId + 'label'}
                    step={this.props.allowSeconds ? 1 : undefined}
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
