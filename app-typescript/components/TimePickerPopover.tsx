import * as React from "react";
import { classnames, Spacer } from "@superdesk/common";
import { ContentDivider } from "./ContentDivider";
import { RadioButtonGroup } from "./RadioButtonGroup";
import { getOptionsForTimeUnit, ITimeUnit, padValue } from "../utils/time";
import { assertNever } from "../helpers";

interface IProps {
  closePopup: () => void;
  headerTemplate?: React.ReactNode;
  footerTemplate?: React.ReactNode;
  allowSeconds?: boolean;
  onChange: (nextValue: string) => void;
  value?: string;
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
        className={classnames("p-1 time-unit", {
          "time-unit-highlight": this.props.isActive ?? false,
        })}
      >
        {this.props.value}
      </span>
    );
  }
}

export class TimePickerPopover extends React.PureComponent<IProps> {
  is12HourFormat: boolean;

  // hour, minutes, seconds
  activeTime: Array<React.RefObject<TimeValueHolder>>;

  constructor(props: IProps) {
    super(props);

    this.activeTime = [React.createRef(), React.createRef(), React.createRef()];

    this.parseUnitOfTime = this.parseUnitOfTime.bind(this);
    this.handleChange = this.handleChange.bind(this);

    const hour = new Date().toLocaleTimeString([], { hour: "numeric" });

    this.is12HourFormat = hour.includes("AM") || hour.includes("PM");
  }

  parseUnitOfTime(unit: ITimeUnit) {
    const [hour, minutes, seconds] = (this.props.value ?? "").split(":");
    const value = (() => {
      if (unit === "hours") {
        return hour;
      } else if (unit === "minutes") {
        return minutes;
      } else if (unit === "seconds") {
        return seconds;
      } else {
        assertNever(unit);
      }
    })();

    const valueParsed =
      this.is12HourFormat && unit === "hours"
        ? parseInt(value) % 12
        : parseInt(value);

    return padValue(valueParsed);
  }

  handleChange(unit: ITimeUnit, value: string) {
    const fallbackDate = new Date();
    const [
      hour,
      minutes,
      seconds,
    ] = this.props.value == null ? [
      padValue(fallbackDate.getHours()),
      padValue(fallbackDate.getMinutes()),
      padValue(fallbackDate.getSeconds()),
    ] : this.props.value.split(":");
    let nextValue = '';

    if (unit === 'hours') {
      nextValue = `${value}:${minutes}`;
    } else if (unit === 'minutes') {
      nextValue = `${hour}:${value}`;
    } else if (unit === 'seconds') {
      nextValue = `${hour}:${value}:${seconds}`;
    } else {
      assertNever(unit);
    }

    if (this.props.allowSeconds && unit !== 'seconds') {
      nextValue += `:${seconds}`;
    }

    this.props.onChange(nextValue);
  }

  componentDidMount(): void {
    this.activeTime.forEach((unitOfTime) =>
      unitOfTime?.current?.scrollToValue?.()
    );
  }

  render(): React.ReactNode {
    const styleForColumnOfUnit: React.CSSProperties = {
      overflowY: "auto",
      maxHeight: 190,
      scrollbarWidth: "none",
      marginTop: 8,
    };

    return (
      <div className="sd-shadow--z2 radius-md" onBlur={this.props.closePopup}>
        <Spacer
          v
          gap="0"
          style={{
            padding: 8,
            width: 200,
            backgroundColor: "white",
            borderRadius: 3,
          }}
        >
          {this.props.headerTemplate && (
            <>
              {this.props.headerTemplate}
              <ContentDivider
                border
                type="solid"
                orientation="horizontal"
                margin="none"
              />
            </>
          )}
          <Spacer h gap="4" noWrap justifyContent="center" alignItems="start">
            <Spacer
              v
              gap="4"
              style={styleForColumnOfUnit}
              alignItems="center"
              noWrap
            >
              {getOptionsForTimeUnit("hours", this.is12HourFormat).map(
                (hour) => {
                  const isActiveHour = hour === this.parseUnitOfTime("hours");

                  return (
                    <TimeValueHolder
                      ref={isActiveHour ? this.activeTime[0] : undefined}
                      onClick={() => {
                        this.handleChange('hours', hour);
                      }}
                      isActive={isActiveHour}
                      value={hour}
                    />
                  );
                }
              )}
            </Spacer>
            <ContentDivider
              align="center"
              border
              type="solid"
              orientation="vertical"
              margin="none"
            />
            <Spacer
              v
              gap="4"
              style={styleForColumnOfUnit}
              alignItems="center"
              noWrap
            >
              {getOptionsForTimeUnit("minutes", this.is12HourFormat).map(
                (minute) => {
                  const isActiveMinute =
                    minute === this.parseUnitOfTime("minutes");

                  return (
                    <TimeValueHolder
                      ref={isActiveMinute ? this.activeTime[1] : undefined}
                      isActive={isActiveMinute}
                      value={minute}
                      onClick={() => {
                        this.handleChange('minutes', minute);
                      }}
                    />
                  );
                }
              )}
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
                <Spacer
                  v
                  gap="4"
                  style={styleForColumnOfUnit}
                  alignItems="center"
                  noWrap
                >
                  {getOptionsForTimeUnit("seconds", this.is12HourFormat).map(
                    (second) => {
                      const isActiveMinute =
                        second === this.parseUnitOfTime("seconds");

                      return (
                        <TimeValueHolder
                          ref={isActiveMinute ? this.activeTime[2] : undefined}
                          onClick={() => {
                            this.handleChange('seconds', second);
                          }}
                          isActive={isActiveMinute}
                          value={second}
                        />
                      );
                    }
                  )}
                </Spacer>
              </>
            )}
            {this.is12HourFormat && (
              <div
                style={{
                  marginTop: 8,
                }}
              >
                <RadioButtonGroup
                  onChange={(nextValue) => {
                    const [hour, minutes, seconds] = (
                      this.props.value ?? ""
                    ).split(":");

                    if (nextValue === "PM") {
                      let newValue = `${parseInt(hour) + 12}:${minutes}`;

                      if (this.props.allowSeconds) {
                        newValue += `:${seconds}`;
                      }

                      this.props.onChange(newValue);
                    } else {
                      let newValue = `${parseInt(hour) % 12}:${minutes}`;

                      if (this.props.allowSeconds) {
                        newValue += `:${seconds}`;
                      }

                      this.props.onChange(newValue);
                    }
                  }}
                  options={[
                    {
                      label: "AM",
                      value: "AM",
                    },
                    {
                      label: "PM",
                      value: "PM",
                    },
                  ]}
                  value={
                    parseInt((this.props.value ?? "").split(":")[0]) < 12
                      ? "AM"
                      : "PM"
                  }
                />
              </div>
            )}
          </Spacer>
          {this.props.footerTemplate && (
            <>
              <ContentDivider
                border
                type="solid"
                orientation="horizontal"
                margin="none"
              />
              {this.props.footerTemplate}
            </>
          )}
        </Spacer>
      </div>
    );
  }
}
