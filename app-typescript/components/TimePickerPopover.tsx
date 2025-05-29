import * as React from 'react';
import {classnames, Spacer} from '@sourcefabric/common';
import {ContentDivider} from './ContentDivider';
import {RadioButtonGroup} from './RadioButtonGroup';
import {getOptionsForTimeUnit, ITimeUnit, padValue} from '../utils/time';
import {assertNever} from '../helpers';

interface IProps {
    closePopup: () => void;
    headerTemplate?: React.ReactNode;
    footerTemplate?: React.ReactNode;
    allowSeconds?: boolean;
    onChange: (nextValue: string) => void;
    value: string | null;
}

interface IPropsTimeValueHolder {
    isActive?: boolean;
    value: string;
    onClick(event: React.MouseEvent<HTMLSpanElement>): void;
}

class TimeValueHolder extends React.PureComponent<IPropsTimeValueHolder> {
    spanEl: React.RefObject<HTMLSpanElement>;

    constructor(props: IPropsTimeValueHolder) {
        super(props);

        this.spanEl = React.createRef();
    }

    public scrollToValue() {
        this.spanEl.current?.scrollIntoView();
    }

    render() {
        return (
            <span
                ref={this.props.isActive ? this.spanEl : undefined}
                onClick={this.props.onClick}
                className={classnames('p-1 time-unit', {
                    'time-unit-highlight': this.props.isActive ?? false,
                })}
            >
                {this.props.value}
            </span>
        );
    }
}

function parseUnitOfTime(unit: ITimeUnit, value: string | null, is12HourFormat?: boolean): string {
    const [hour, minutes, seconds] = (value ?? '').split(':');
    const valueForUnit = (() => {
        if (unit === 'hours') {
            /**
             * Hour value is always in 24-hour format, so we need to adjust it
             * to 12-hour if needed.
             */
            if (is12HourFormat) {
                return hour === '00' ? '12' : hour;
            } else {
                return hour;
            }
        } else if (unit === 'minutes') {
            return minutes;
        } else if (unit === 'seconds') {
            return seconds;
        } else {
            assertNever(unit);
        }
    })();

    const valueParsed =
        is12HourFormat && unit === 'hours' && valueForUnit !== '12'
            ? parseInt(valueForUnit, 10) % 12
            : parseInt(valueForUnit, 10);

    return padValue(valueParsed);
}

export class TimePickerPopover extends React.PureComponent<IProps> {
    private is12HourFormat: boolean;

    // hour, minutes, seconds
    private inputRefs: Array<React.RefObject<TimeValueHolder>>;

    constructor(props: IProps) {
        super(props);

        this.inputRefs = [React.createRef(), React.createRef(), React.createRef()];
        this.handleChange = this.handleChange.bind(this);

        const hour = new Date().toLocaleTimeString([]);
        this.is12HourFormat = hour.includes('AM') || hour.includes('PM');
    }

    handleChange(unit: ITimeUnit, value: string) {
        const fallbackDate = new Date();
        const [hour, minutes, seconds] =
            this.props.value == null
                ? [
                      padValue(fallbackDate.getHours()),
                      padValue(fallbackDate.getMinutes()),
                      padValue(fallbackDate.getSeconds()),
                  ]
                : this.props.value.split(':');
        let nextValue = '';

        if (unit === 'hours') {
            nextValue = `${value}:${minutes}`;
        } else if (unit === 'minutes') {
            nextValue = `${hour}:${value}`;
        } else if (unit === 'seconds') {
            nextValue = `${hour}:${minutes}:${value}`;
        } else {
            assertNever(unit);
        }

        if (this.props.allowSeconds && unit !== 'seconds') {
            nextValue += `:${seconds}`;
        }

        this.props.onChange(nextValue);
    }

    componentDidMount(): void {
        this.inputRefs.forEach((unitOfTime) => unitOfTime?.current?.scrollToValue?.());
    }

    render(): React.ReactNode {
        const styleForColumnOfUnit: React.CSSProperties = {
            maxHeight: 190,
            overflowY: 'auto',
            scrollbarWidth: 'none',
            marginTop: 'var(--gap-1)',
        };

        return (
            <div className="sd-shadow--z2 radius-md" onBlur={this.props.closePopup}>
                <Spacer
                    v
                    gap="0"
                    style={{
                        width: 200,
                        padding: 'var(--gap-1)',
                        backgroundColor: 'var(--color-bg-00)',
                        borderRadius: 'var(--b-radius--small)',
                    }}
                >
                    {this.props.headerTemplate && (
                        <>
                            {this.props.headerTemplate}
                            <ContentDivider border type="solid" orientation="horizontal" margin="none" />
                        </>
                    )}
                    <Spacer h gap="4" noWrap justifyContent="center" alignItems="start">
                        <Spacer v gap="4" style={styleForColumnOfUnit} alignItems="center" noWrap>
                            {getOptionsForTimeUnit('hours', this.is12HourFormat).map((hour) => {
                                const isActiveHour =
                                    hour === parseUnitOfTime('hours', this.props.value, this.is12HourFormat);

                                return (
                                    <TimeValueHolder
                                        ref={isActiveHour ? this.inputRefs[0] : undefined}
                                        onClick={() => {
                                            this.handleChange('hours', hour);
                                        }}
                                        isActive={isActiveHour}
                                        value={hour}
                                    />
                                );
                            })}
                        </Spacer>
                        <ContentDivider align="center" border type="solid" orientation="vertical" margin="none" />
                        <Spacer v gap="4" style={styleForColumnOfUnit} alignItems="center" noWrap>
                            {getOptionsForTimeUnit('minutes', this.is12HourFormat).map((minute) => {
                                const isActiveMinute =
                                    minute === parseUnitOfTime('minutes', this.props.value, this.is12HourFormat);

                                return (
                                    <TimeValueHolder
                                        ref={isActiveMinute ? this.inputRefs[1] : undefined}
                                        isActive={isActiveMinute}
                                        value={minute}
                                        onClick={() => {
                                            this.handleChange('minutes', minute);
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
                                    {getOptionsForTimeUnit('seconds', this.is12HourFormat).map((second) => {
                                        const isActiveMinute =
                                            second ===
                                            parseUnitOfTime('seconds', this.props.value, this.is12HourFormat);

                                        return (
                                            <TimeValueHolder
                                                ref={isActiveMinute ? this.inputRefs[2] : undefined}
                                                onClick={() => {
                                                    this.handleChange('seconds', second);
                                                }}
                                                isActive={isActiveMinute}
                                                value={second}
                                            />
                                        );
                                    })}
                                </Spacer>
                            </>
                        )}
                        {this.is12HourFormat && (
                            <div
                                style={{
                                    marginTop: 'var(--gap-1)',
                                }}
                            >
                                <RadioButtonGroup
                                    onChange={(nextValue) => {
                                        const [hour, minutes, seconds] = (this.props.value ?? '').split(':');

                                        if (nextValue === 'PM') {
                                            let newValue = `${padValue(parseInt(hour, 10) + 12)}:${minutes}`;

                                            if (this.props.allowSeconds) {
                                                newValue += `:${seconds}`;
                                            }

                                            this.props.onChange(newValue);
                                        } else {
                                            let newValue = `${padValue(parseInt(hour, 10) - 12)}:${minutes}`;

                                            if (this.props.allowSeconds) {
                                                newValue += `:${seconds}`;
                                            }

                                            this.props.onChange(newValue);
                                        }
                                    }}
                                    options={[
                                        {
                                            label: 'AM',
                                            value: 'AM',
                                        },
                                        {
                                            label: 'PM',
                                            value: 'PM',
                                        },
                                    ]}
                                    value={parseInt((this.props.value ?? '').split(':')[0], 10) < 12 ? 'AM' : 'PM'}
                                />
                            </div>
                        )}
                    </Spacer>
                    {this.props.footerTemplate && (
                        <>
                            <ContentDivider border type="solid" orientation="horizontal" margin="none" />
                            {this.props.footerTemplate}
                        </>
                    )}
                </Spacer>
            </div>
        );
    }
}
