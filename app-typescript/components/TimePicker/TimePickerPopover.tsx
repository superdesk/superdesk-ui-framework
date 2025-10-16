import * as React from 'react';
import {Spacer} from '@sourcefabric/common';
import {ContentDivider} from '../ContentDivider';
import {RadioButtonGroup} from '../RadioButtonGroup';
import {getOptionsForTimeUnit} from '../../utils/time';
import {TimeValueHolder} from './TimeValueHolder';

export function convert12HourTo24Hour(hour: number, period: 'am' | 'pm'): number {
    if (period === 'am' && hour === 12) {
        return 0; // midnight
    }

    if (period === 'pm' && hour !== 12) {
        return hour + 12; // PM and not 12
    }

    return hour; // For 12PM, 1-11AM
}

export function convert24HourTo12Hour(hour: number) {
    const remainder = hour % 12;

    return remainder === 0 ? 12 : remainder;
}

function isAm(hours: number) {
    return hours < 12;
}

export function toInternalState(
    timeStr: string | undefined | null, // will always be in 24h format
): IState {
    if (timeStr == null || (timeStr ?? '').trim().length < 1) {
        return {
            hours: null,
            minutes: null,
            seconds: null,
            period: null,
        };
    }

    const [hours, minutes, seconds] = timeStr.split(':');
    const secondsDefault = hours != null && minutes != null ? '00' : null;

    return {
        hours: (() => {
            if (hours == null) {
                return null;
            }

            if (is12HourFormat) {
                return convert24HourTo12Hour(parseInt(hours, 10)).toString().padStart(2, '0');
            } else {
                return hours;
            }
        })(),
        minutes: minutes ?? null,
        seconds: seconds ?? secondsDefault,
        period: hours == null ? null : isAm(parseInt(hours, 10)) ? 'am' : 'pm',
    };
}

const is12HourFormat: boolean = (() => {
    const hour = new Date().toLocaleTimeString([]);

    return hour.includes('AM') || hour.includes('PM');
})();

interface IProps {
    headerTemplate?: React.ReactNode;
    footerTemplate?: React.ReactNode;
    allowSeconds?: boolean;
    onChange: (nextValue: string) => void;
    value: string | null;
}

// internal state is needed in order to be able to wait for all inputs to be filled before triggering `props.onChange`
interface IState {
    hours: string | null;
    minutes: string | null;
    seconds: string | null;
    period: 'am' | 'pm' | null;
}

export class TimePickerPopover extends React.PureComponent<IProps, IState> {
    // hour, minutes, seconds
    private inputRefs: Array<React.RefObject<TimeValueHolder>>;

    constructor(props: IProps) {
        super(props);

        this.inputRefs = [React.createRef(), React.createRef(), React.createRef()];
        this.handleChange = this.handleChange.bind(this);
        this.scrollToValues = this.scrollToValues.bind(this);

        this.state = toInternalState(props.value);
    }

    private handleChange(nextState: IState) {
        this.setState(nextState, () => {
            let timeParts: Array<string> = [];

            if (this.state.hours == null) {
                return;
            }

            if (is12HourFormat) {
                if (this.state.period == null) {
                    return;
                }

                timeParts.push(
                    convert12HourTo24Hour(parseInt(this.state.hours, 10), this.state.period)
                        .toString()
                        .padStart(2, '0'),
                );
            } else {
                timeParts.push(this.state.hours);
            }

            if (this.state.minutes == null) {
                return;
            } else {
                timeParts.push(this.state.minutes);
            }

            if (this.props.allowSeconds) {
                if (this.state.seconds == null) {
                    return;
                } else {
                    timeParts.push(this.state.seconds);
                }
            }

            this.props.onChange(timeParts.join(':'));
        });
    }

    scrollToValues() {
        this.inputRefs.forEach((unitOfTime) => unitOfTime?.current?.scrollToValue?.());
    }

    componentDidMount(): void {
        this.scrollToValues();
    }

    componentDidUpdate(prevProps: Readonly<IProps>): void {
        if (this.props.value !== prevProps.value) {
            this.setState(toInternalState(this.props.value), () => {
                this.scrollToValues();
            });
        }
    }

    render(): React.ReactNode {
        const styleForColumnOfUnit: React.CSSProperties = {
            maxHeight: 190,
            overflowY: 'auto',
            scrollbarWidth: 'thin',
            marginTop: 'var(--gap-1)',
            scrollBehavior: 'smooth',
        };

        return (
            <div className="sd-shadow--z2 radius-md">
                <Spacer
                    v
                    gap="0"
                    style={{
                        minWidth: 200,
                        maxWidth: 'max-content',
                        backgroundColor: 'var(--color-dropdown-menu-Bg)',
                        borderRadius: 'var(--b-radius--small)',
                    }}
                >
                    {this.props.headerTemplate && (
                        <div className="px-1-5 py-1" style={{borderBottom: '1px solid var(--color-line-x-light)'}}>
                            {this.props.headerTemplate}
                        </div>
                    )}

                    <Spacer
                        h
                        gap="4"
                        noWrap
                        justifyContent="center"
                        alignItems="start"
                        style={{paddingInline: 'var(--gap-1)'}}
                    >
                        <Spacer v gap="4" style={styleForColumnOfUnit} alignItems="center" noWrap>
                            {getOptionsForTimeUnit('hours', is12HourFormat).map((hour) => {
                                const isActiveHour = hour === this.state.hours;

                                return (
                                    <TimeValueHolder
                                        key={hour}
                                        ref={isActiveHour ? this.inputRefs[0] : undefined}
                                        onClick={() => {
                                            this.handleChange({...this.state, hours: hour});
                                        }}
                                        isActive={isActiveHour}
                                        value={hour}
                                    />
                                );
                            })}
                        </Spacer>

                        <ContentDivider align="center" border type="solid" orientation="vertical" margin="none" />

                        <Spacer v gap="4" style={styleForColumnOfUnit} alignItems="center" noWrap>
                            {getOptionsForTimeUnit('minutes', is12HourFormat).map((minute) => {
                                const isActiveMinute = minute === this.state.minutes;

                                return (
                                    <TimeValueHolder
                                        key={minute}
                                        ref={isActiveMinute ? this.inputRefs[1] : undefined}
                                        isActive={isActiveMinute}
                                        value={minute}
                                        onClick={() => {
                                            this.handleChange({...this.state, minutes: minute});
                                        }}
                                    />
                                );
                            })}
                        </Spacer>

                        {this.props.allowSeconds && (
                            <>
                                <ContentDivider
                                    align="center"
                                    border
                                    type="solid"
                                    orientation="vertical"
                                    margin="none"
                                />
                                <Spacer v gap="4" style={styleForColumnOfUnit} alignItems="center" noWrap>
                                    {getOptionsForTimeUnit('seconds', is12HourFormat).map((second) => {
                                        const isActiveSecond = second === this.state.seconds;

                                        return (
                                            <TimeValueHolder
                                                key={second}
                                                ref={isActiveSecond ? this.inputRefs[2] : undefined}
                                                onClick={() => {
                                                    this.handleChange({...this.state, seconds: second});
                                                }}
                                                isActive={isActiveSecond}
                                                value={second}
                                            />
                                        );
                                    })}
                                </Spacer>
                            </>
                        )}

                        {is12HourFormat && (
                            <div
                                style={{
                                    marginTop: 'var(--gap-1)',
                                }}
                            >
                                <RadioButtonGroup
                                    onChange={(nextValue) => {
                                        this.handleChange({...this.state, period: nextValue as 'am' | 'pm'});
                                    }}
                                    options={[
                                        {label: 'AM', value: 'am'},
                                        {label: 'PM', value: 'pm'},
                                    ]}
                                    value={this.state.period == null ? '' : this.state.period}
                                />
                            </div>
                        )}
                    </Spacer>

                    {this.props.footerTemplate && (
                        <div className="px-1-5 py-1" style={{borderTop: '1px solid var(--color-line-x-light)'}}>
                            {this.props.footerTemplate}
                        </div>
                    )}
                </Spacer>
            </div>
        );
    }
}
