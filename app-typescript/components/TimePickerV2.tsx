import * as React from 'react';
import nextId from "react-id-generator";
import { InputWrapper } from './Form';
import {IInputWrapper} from './Form/InputWrapper';
import {range} from 'lodash';

interface IProps extends IInputWrapper {
    value: string;
    onChange(valueNext: string): void;
    allowSeconds?: boolean;
    disableOptions: {
        hours?: Array<number>;
        minutes?: Array<number>;
        seconds?: Array<number>;
    };
    'data-test-id'?: string;
}

interface IState {
    hoursOption: Array<string>;
    minutesOptions: Array<string>;
    secondsOptions: Array<string>;
    hours: string;
    minutes: string;
    seconds: string;
    value: string;
}

export class TimePickerV2 extends React.PureComponent<IProps, IState> {
    private htmlId = nextId();
    private hours = range(25);
    private minutes = range(60);
    private seconds = range(60);

    constructor(props: IProps) {
        super(props);
        this.state = {
            hoursOption: this.stringifyArray(this.hours, this.props.disableOptions.hours ?? []),
            minutesOptions: this.stringifyArray(this.minutes, this.props.disableOptions.minutes ?? []),
            secondsOptions: this.stringifyArray(this.seconds, this.props.disableOptions.seconds ?? []),
            hours: this.stateUpdate('hours', this.props.disableOptions.hours ?? []),
            minutes: this.stateUpdate('minutes', this.props.disableOptions.minutes ?? []),
            seconds: this.stateUpdate('seconds', this.props.disableOptions.seconds ?? []),
            value: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.stateUpdate = this.stateUpdate.bind(this);
        this.stringifyArray = this.stringifyArray.bind(this);
        this.setValue = this.setValue.bind(this);
        this.zeroPad = this.zeroPad.bind(this);
    }

    stringifyArray(arr: Array<number>, disabledOptions: Array<number>): Array<string> {
        return arr
            .filter((item) => !disabledOptions?.includes(item))
            .map((value) => {
                return this.zeroPad(value);
            });
    }

    stateUpdate(state: string, disabledOption: Array<number>): string {
        const dividedValue = this.props.value.split(':');
        let value;

        if (state === 'hours') {
            value = dividedValue[0];
        } else if (state === 'minutes') {
            value = dividedValue[1];
        } else {
            value = dividedValue[2];
        }

        if (!disabledOption?.includes(Number(value)) && value != null) {
            return value;
        } else {
            return '00';
        }
    }

    zeroPad(value: number | string) {
        if (value.toString().length === 1 || value === 0) {
            return `0${value}`;
        } else if (!value) {
            return '00';
        } else {
            return value.toString();
        }
    }

    componentDidMount(): void {
        this.setValue();
    }

    componentDidUpdate(_prevProps: Readonly<IProps>, prevState: Readonly<IState>): void {
        if (
            prevState.hours !== this.state.hours
            || prevState.minutes !== this.state.minutes
            || prevState.seconds !== this.state.seconds
        ) {
            this.setValue();
        }
    }

    setValue() {
        if (this.props.allowSeconds) {
            this.setState({
                value: `${this.state.hours}:${this.state.minutes}:${this.state.seconds}`,
            });
        } else {
            this.setState({
                value: `${this.state.hours}:${this.state.minutes}`,
            });
        }
    }

    handleChange(event: React.ChangeEvent<HTMLSelectElement>, state: 'hours' | 'minutes' | 'seconds') {
        this.setState({[state]: event.target.value} as any);
        setTimeout(() => {
            this.props.onChange(this.state.value);
        });
    }

    render() {
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
                            value={this.state.hours}
                            onChange={(event) => {
                                this.handleChange(event, 'hours');
                            }}
                        >
                            {this.state.hoursOption.map((hour) => {
                                return <option value={hour} label={hour} key={hour} />;
                            })}
                        </select>

                        <span className='time-picker-v2-suffix'>h</span>
                    </div>

                    <div className='input-wrapper__time-picker-v2'>
                        <select
                            className='sd-input__select'
                            value={this.state.minutes}
                            onChange={(event) => {
                                this.handleChange(event, 'minutes');
                            }}
                        >
                            {this.state.minutesOptions.map((minute) => {
                                return <option value={minute} label={minute} key={minute} />;
                            })}
                        </select>

                        <span className='time-picker-v2-suffix'>m</span>
                    </div>

                    {this.props.allowSeconds && (
                        <div className='input-wrapper__time-picker-v2'>
                            <select
                                className='sd-input__select'
                                value={this.state.seconds}
                                onChange={(event) => {
                                    this.handleChange(event, 'seconds');
                                }}
                            >
                                {this.state.secondsOptions.map((second) => {
                                    return <option value={second} label={second} key={second} />;
                                })}
                            </select>

                            <span className='time-picker-v2-suffix'>s</span>
                        </div>
                    )}
                </div>
            </InputWrapper>
        );
    }
}
