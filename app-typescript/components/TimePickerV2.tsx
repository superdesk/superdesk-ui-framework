import * as React from 'react';
import nextId from "react-id-generator";
import { InputWrapper } from './Form';
import {IInputWrapper} from './Form/InputWrapper';
import {range} from 'lodash';

interface IProps extends IInputWrapper {
    value: string;
    onChange(valueNext: string): void;
    allowSeconds?: boolean;
    disabledOptions: {
        hours?: Array<number>;
        minutes?: Array<number>;
        seconds?: Array<number>;
    };
    'data-test-id'?: string;
}

type ITimeUnit = 'hours' | 'minutes' | 'seconds';

export class TimePickerV2 extends React.PureComponent<IProps> {
    private htmlId = nextId();
    private hoursStringified = this.stringifyArray(range(25), 'hours');
    private minutesStringified = this.stringifyArray(range(60), 'minutes');
    private secondsStringified = this.stringifyArray(range(60), 'seconds');

    constructor(props: IProps) {
        super(props);

        this.handleChangeForTimeUnit = this.handleChangeForTimeUnit.bind(this);
        this.stringifyArray = this.stringifyArray.bind(this);
        this.numberToTimeString = this.numberToTimeString.bind(this);
    }

    stringifyArray(array: Array<number>, timeUnit: ITimeUnit): Array<string> {
        return array
            .filter((item) => !(this.props.disabledOptions[timeUnit] ?? []).includes(item))
            .map((value) => this.numberToTimeString(value));
    }

    numberToTimeString(value: number) {
        if (value.toString().length === 1 || value === 0) {
            return `0${value}`;
        } else if (!value) {
            return '00';
        } else {
            return value.toString();
        }
    }

    handleChangeForTimeUnit(value: string, timeUnit: ITimeUnit) {
        const timeUnitValuesArray = this.props.value.split(':')

        switch (timeUnit) {
            case 'hours':
                this.props.onChange(
                    this.props.allowSeconds
                        ? `${value}:${timeUnitValuesArray[1]}:${timeUnitValuesArray[2]}`
                        : `${value}:${timeUnitValuesArray[1]}`
                )
                break;
            case 'minutes':
                this.props.onChange(
                    this.props.allowSeconds
                        ? `${timeUnitValuesArray[0]}:${value}:${timeUnitValuesArray[2]}`
                        : `${timeUnitValuesArray[0]}:${value}`
                )
                break;
            case 'seconds':
                this.props.onChange(`${timeUnitValuesArray[0]}:${timeUnitValuesArray[1]}:${value}`)
                break;
        }
    }

    render() {
        const timeUnitValuesArray = this.props.value.split(':')

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
                htmlId={this.htmlId}
                tabindex={this.props.tabindex}
            >
                <div className='sd__input__time-picker-v2' data-test-id={this.props['data-test-id']}>
                    <div className='input-wrapper__time-picker-v2'>
                        <select
                            className='sd-input__select'
                            value={timeUnitValuesArray[0]}
                            onChange={({target}) => {
                                this.handleChangeForTimeUnit(target.value, 'hours');
                            }}
                        >
                            {this.hoursStringified.map((hour) => <option value={hour} label={hour} key={hour} />)}
                        </select>
                        <span className='time-picker-v2-suffix'>:</span>
                    </div>
                    <div className='input-wrapper__time-picker-v2'>
                        <select
                            className='sd-input__select'
                            value={timeUnitValuesArray[1]}
                            onChange={({target}) => {
                                this.handleChangeForTimeUnit(target.value, 'minutes');
                            }}
                        >
                            {this.minutesStringified.map((minute) => <option value={minute} label={minute} key={minute} />)}
                        </select>
                        <span className='time-picker-v2-suffix'>:</span>
                    </div>
                    {this.props.allowSeconds && (
                        <div className='input-wrapper__time-picker-v2'>
                            <select
                                className='sd-input__select'
                                value={timeUnitValuesArray[2]}
                                onChange={({target}) => {
                                    this.handleChangeForTimeUnit(target.value, 'seconds');
                                }}
                            >
                                {this.secondsStringified.map((second) => <option value={second} label={second} key={second} />)}
                            </select>
                        </div>
                    )}
                </div>
            </InputWrapper>
        );
    }
}
