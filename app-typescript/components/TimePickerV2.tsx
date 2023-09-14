import {setSeconds} from 'date-fns/esm';
import * as React from 'react';
import nextId from "react-id-generator";
import { InputWrapper } from './Form';
import {IInputWrapper} from './Form/InputWrapper';

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

let hours = Array.from(Array(25).keys());
let minutes = Array.from(Array(60).keys());
let seconds = Array.from(Array(60).keys());

export class TimePickerV2 extends React.PureComponent<IProps, IState> {
    private htmlId = nextId();

    constructor(props) {
        super(props);
        this.state = {
            hoursOption: this.stringifyArray(hours, this.props.disableOptions.hours ?? []),
            minutesOptions: this.stringifyArray(minutes, this.props.disableOptions.minutes ?? []),
            secondsOptions: this.stringifyArray(seconds, this.props.disableOptions.seconds ?? []),
            hours: this.stateUpdate('hours', this.props.disableOptions.hours ?? []),
            minutes: this.stateUpdate('minutes', this.props.disableOptions.minutes ?? []),
            seconds: this.stateUpdate('seconds', this.props.disableOptions.seconds ?? []),
            value: '',
        };

        this.zeroPad = this.zeroPad.bind(this);
        this.stateUpdate = this.stateUpdate.bind(this);
        this.stringifyArray = this.stringifyArray.bind(this);
    }

    stringifyArray(arr: Array<number>, disabledOptions: Array<number>): Array<string> {
        let filteredArrWithDisabledOptions = arr.filter((item) => !disabledOptions?.includes(item));
        return filteredArrWithDisabledOptions.map((value) => {
            return this.zeroPad(value);
        });
    }

    stateUpdate(state: string, disabledOption: Array<number>): string {
        let niz = this.props.value.split(':');
        let value;

        if (state === 'hours') {
            value = niz[0];
        } else if (state === 'minutes') {
            value = niz[1];
        } else {
            value = niz[2];
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

    componentDidUpdate(_prevProps: Readonly<IProps>, prevState: Readonly<IState>): void {
        if (
            prevState.hours !== this.state.hours
            || prevState.minutes !== this.state.minutes
            || prevState.seconds !== this.state.seconds
        ) {
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
    }

    valueUpdate() {
        setTimeout(() => this.props.onChange(this.state.value));
    }

    handleChange(event, state: 'hours' | 'minutes' | 'seconds') {
        let stateClone = {};
        stateClone[state] = event.target.value;
        this.setState(stateClone);
        this.valueUpdate();
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
                            {this.state.hoursOption.map((hour, index) => {
                                return <option value={hour} key={index}>{hour}</option>;
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
                            {this.state.minutesOptions.map((minute, index) => {
                                return <option value={minute} key={index}>{minute}</option>;
                            })}
                        </select>

                        <span className='time-picker-v2-suffix'>m</span>
                    </div>

                    {this.props.allowSeconds
                        && (
                            <div className='input-wrapper__time-picker-v2'>
                                <select
                                    className='sd-input__select'
                                    value={this.state.seconds}
                                    onChange={(event) => {
                                        this.handleChange(event, 'seconds');
                                    }}
                                >
                                    {this.state.secondsOptions.map((second, index) => {
                                        return <option value={second} key={index}>{second}</option>;
                                    })}
                                </select>

                                <span className='time-picker-v2-suffix'>s</span>
                            </div>
                        )
                    }
                </div>
            </InputWrapper>
        );
    }
}
