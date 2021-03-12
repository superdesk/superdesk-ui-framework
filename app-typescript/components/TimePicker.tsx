import * as React from 'react';

interface IProps {
    value: string; // will output time as ISO8601 time string(e.g. 16:55) or an empty string if there's no value
    onChange(valueNext: string): void;
    required?: boolean; // displays a button to reset time input
    disabled?: boolean;
}

export class TimePicker extends React.PureComponent<IProps> {
    render() {
        return (
            <div
                className="sd-input sd-input--no-label sd-input--no-margin"
                style={{display: 'inline-flex'}}
            >
                <input
                    type="time"
                    className="sd-input__input"
                    value={this.props.value}
                    required={this.props.required}
                    disabled={this.props.disabled}
                    onChange={(event) => {
                        this.props.onChange(event.target.value);
                    }}
                />
            </div>
        );
    }
}
