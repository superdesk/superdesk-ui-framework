import * as React from 'react';
import {DatePicker} from '../components/DatePicker';
import {Spacer} from '@superdesk/common';
import {defaultTo} from 'lodash';
import {TimePicker} from './TimePicker';
import {IconButton} from './IconButton';
import moment from 'moment';

interface IProps {
    value: moment.Moment | null;
    label: {
        text: string;
        hidden?: boolean;
    };
    dateFormat: string;
    onChange: (value: string | null) => void;
    preview?: boolean;
    fullWidth?: boolean;
    allowSeconds?: boolean;
    required?: boolean;
    width?: React.CSSProperties['width'];
    disabled?: boolean;
}

const MIN_WIDTH = 348;

export class DateTimePicker extends React.PureComponent<IProps> {
    handleTimeChange = (time: string) => {
        const [hours, minutes] = time.split(':').map((x) => defaultTo(parseInt(x, 10), 0)); // handle NaN value
        const origDate = this.props.value ?? moment();

        origDate.hour(hours);
        origDate.minute(minutes);

        this.props.onChange(origDate.toISOString());
    }

    handleDateChange = (date: Date | null) => {
        if (date == null) {
            this.props.onChange(null);

            return;
        }

        const selectedDate = moment(date);
        const origDate = this.props.value ?? moment();

        selectedDate.hour(origDate.hours());
        selectedDate.minute(origDate.minutes());

        this.props.onChange(selectedDate.toISOString());
    }

    prepareFormat(unitOfTime: number) {
        return unitOfTime.toString().padStart(2, '0');
    }

    render() {
        const convertedValue = this.props.value ? moment(this.props.value) : null;
        const convertedTimeValue = convertedValue
            ? `${this.prepareFormat(convertedValue.hours())}:${this.prepareFormat(convertedValue.minutes())}`
            : '';

        return (
            <div style={{width: Number(this.props.width) > MIN_WIDTH ? this.props.width : MIN_WIDTH}}>
                <Spacer h gap="0" noGrow alignItems='end'>
                    <DatePicker
                        disabled={this.props.disabled}
                        preview={this.props.preview}
                        required={this.props.required}
                        hideClearButton={true}
                        value={convertedValue?.toDate() ?? null}
                        onChange={(val) => {
                            this.handleDateChange(val);
                        }}
                        dateFormat={this.props.dateFormat}
                        label={this.props.label.text}
                        inlineLabel={this.props.label.hidden ?? false}
                        labelHidden={this.props.label.hidden ?? false}
                        fullWidth={this.props.fullWidth}
                    />
                    <TimePicker
                        disabled={this.props.disabled}
                        preview={this.props.preview}
                        value={convertedTimeValue}
                        onChange={(val) => {
                            this.handleTimeChange(val);
                        }}
                        inlineLabel
                        labelHidden
                        allowSeconds={this.props.allowSeconds}
                        fullWidth={this.props.fullWidth}
                        required={this.props.required}
                    />
                    {this.props.preview !== true && (
                        <IconButton
                            disabled={this.props.disabled}
                            icon='close-small'
                            onClick={() => {
                                this.props.onChange(null);
                            }}
                            ariaValue='Clear'
                        />
                    )}
                </Spacer>
            </div>
        );
    }
}
