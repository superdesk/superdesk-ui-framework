import * as React from 'react';
import { InputWrapper } from './Form';
import {IInputWrapper} from './Form/InputWrapper';
import {padStart, range} from 'lodash';

interface IProps extends IInputWrapper {
    value: string; // ISO 8601, 13:59:01
    allowSeconds?: boolean;
    disabledOptions: {
        hours?: Array<number>;
        minutes?: Array<number>;
        seconds?: Array<number>;
    };
    'data-test-id'?: string;
    onChange(valueNext: string): void;
}

type ITimeUnit = 'hours' | 'minutes' | 'seconds';

export class TimePickerV2 extends React.PureComponent<IProps> {
    private is12HourFormat: boolean;

    constructor(props: IProps) {
        super(props);

        this.handleTimeChange = this.handleTimeChange.bind(this);
        this.getCorrectedTime = this.getCorrectedTime.bind(this);
        this.getOptionsForTimeUnit = this.getOptionsForTimeUnit.bind(this);
        this.padValue = this.padValue.bind(this);

        const hour = new Date().toLocaleTimeString([], { hour: 'numeric' });
        this.is12HourFormat = hour.includes('AM') || hour.includes('PM');
    }

    /**
     * in case initial time is not valid according to disabled options, we return first valid option
     */
    private getCorrectedTime(timeUnit: ITimeUnit, timeStringArray: Array<string>): string {
        const dividedValue = this.props.value.split(':');
        const value = (() => {
            if (timeUnit === 'hours') {
                return dividedValue[0];
            } else if (timeUnit === 'minutes') {
                return dividedValue[1];
            }

            return dividedValue[2];
        })();

        if (!(this.props.disabledOptions[timeUnit] ?? []).includes(parseInt(value, 10)) && value != null) {
            return value;
        }

        return timeStringArray[0];
    }

    private getOptionsForTimeUnit(timeUnit: ITimeUnit): Array<string> {
        let format12HourArr = range(1, 13);
        format12HourArr.unshift(format12HourArr.pop() as number);

        const timeUnitArray = (() => {
            if (timeUnit === 'hours') {
                if (this.is12HourFormat) {
                    return format12HourArr;
                } else {
                    return range(24);
                }
            } else {
                return range(60);
            }
        })();

        return timeUnitArray
            .filter((item) => !(this.props.disabledOptions[timeUnit] ?? []).includes(item))
            .map((value) => padStart(value.toString(), 2, '0'));
    }

    private handleTimeChange(index: number, newValue: string) {
        let current = this.props.value.split(':');

        const updated12HourValue = (() => {
            if (parseInt(current[0], 10) >= 12) {
                if (newValue === '12') {
                    return newValue;
                } else {
                    return (parseInt(newValue, 10) + 12).toString();
                }
            } else {
                if (newValue === '12') {
                    return '00';
                } else {
                    return newValue;
                }
            }
        })();

        current[index] = this.is12HourFormat ? updated12HourValue : newValue;

        this.props.onChange(current.join(':'));
    }

    componentDidMount(): void {
        const correctedTime = [
            this.getCorrectedTime('hours', this.getOptionsForTimeUnit('hours')),
            ':',
            this.getCorrectedTime('minutes', this.getOptionsForTimeUnit('minutes')),
            this.props.allowSeconds
                ? `:${this.getCorrectedTime('seconds', this.getOptionsForTimeUnit('seconds'))}`
                : '',
        ].join('');

        if (this.props.value !== correctedTime) {
            this.props.onChange(correctedTime);
        }
    }

    padValue(value: number) {
        return padStart((value).toString(), 2, '0');
    }

    updatedTimeUnit() {
        const timeUnitValuesArray = this.props.value.split(':');

        /**
        * updating the initial value from props
        */
        if (this.is12HourFormat) {
            if (parseInt(timeUnitValuesArray[0], 10) > 12) {
                timeUnitValuesArray[0] = this.padValue(parseInt(timeUnitValuesArray[0], 10) - 12);
            }
        }

        return timeUnitValuesArray;
    }

    render() {
        const timeUnitValuesArray = this.updatedTimeUnit();

        return (
            <InputWrapper
                label={this.props.label}
                error={this.props.error}
                invalid={this.props.error != null}
                required={this.props.required}
                disabled={this.props.disabled}
                info={this.props.info}
                inlineLabel={this.props.inlineLabel}
                labelHidden={this.props.labelHidden}
                tabindex={this.props.tabindex}
            >
                <div className='sd__input__time-picker-v2' data-test-id={this.props['data-test-id']}>
                    <div className='input-wrapper__time-picker-v2'>
                        <select
                            className='sd-input__select'
                            value={timeUnitValuesArray[0]}
                            onChange={({target}) => {
                                this.handleTimeChange(0, target.value);
                            }}
                        >
                            {this.getOptionsForTimeUnit('hours').map((hour) => (
                                <option value={hour} label={hour} key={hour} />
                            ))}
                        </select>
                        <span className='time-picker-v2-suffix'>:</span>
                    </div>
                    <div className='input-wrapper__time-picker-v2'>
                        <select
                            className='sd-input__select'
                            value={timeUnitValuesArray[1]}
                            onChange={({target}) => {
                                this.handleTimeChange(1, target.value);
                            }}
                        >
                            {this.getOptionsForTimeUnit('minutes').map((minute) => (
                                <option value={minute} label={minute} key={minute} />
                            ))}
                        </select>
                        {this.props.allowSeconds && (<span className='time-picker-v2-suffix'>:</span>)}
                    </div>
                    {this.props.allowSeconds && (
                        <div className='input-wrapper__time-picker-v2'>
                            <select
                                className='sd-input__select'
                                value={timeUnitValuesArray[2]}
                                onChange={({target}) => {
                                    this.handleTimeChange(2, target.value);
                                }}
                            >
                                {this.getOptionsForTimeUnit('seconds').map((second) => (
                                    <option value={second} label={second} key={second} />
                                ))}
                            </select>
                        </div>
                    )}
                    {this.is12HourFormat && (
                        <div className='input-wrapper__time-picker-v2'>
                            <span className='time-picker-v2-suffix' />
                            <select
                                className='sd-input__select'
                                value={(parseInt(this.props.value.split(':')[0], 10) >= 12) ? 'PM' : 'AM'}
                                onChange={({target}) => {
                                    let splitValue = this.props.value.split(':');

                                    if (target.value === 'PM') {
                                        splitValue[0] = this.padValue(parseInt(splitValue[0], 10) + 12);
                                    } else {
                                        splitValue[0] = this.padValue(parseInt(splitValue[0], 10) - 12);
                                    }

                                    this.props.onChange(splitValue.join(':'));
                                }}
                            >
                                <option value='AM' label='AM' />
                                <option value='PM' label='PM' />
                            </select>
                        </div>
                    )}
                </div>
            </InputWrapper>
        );
    }
}
