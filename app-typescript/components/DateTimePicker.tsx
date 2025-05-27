import * as React from "react";
import { DatePicker } from "../components/DatePicker";
import { Spacer } from "@superdesk/common";
import { defaultTo } from "lodash";
import { TimePicker } from "./TimePicker";
import { IconButton } from "./IconButton";
import { InputWrapper } from "./Form";
import { IInputWrapper } from "./Form/InputWrapper";
import nextId from "react-id-generator";

interface IProps extends IInputWrapper {
  value: Date | null;
  dateFormat: string;
  onChange: (value: Date | null) => void;
  preview?: boolean;
  fullWidth?: boolean;
  allowSeconds?: boolean;
  required?: boolean;
  disabled?: boolean;
  ref?: React.LegacyRef<InputWrapper>;
  "data-test-id"?: string;
}

export class DateTimePicker extends React.PureComponent<IProps> {
  private htmlId: string = nextId();

  handleTimeChange = (time: string) => {
    const [hours, minutes, seconds] = time
      .split(":")
      .map((x) => defaultTo(parseInt(x, 10), 0)); // handle NaN value
    const origDate = this.props.value ? new Date(this.props.value) : new Date();

    origDate.setHours(hours, minutes);

    if (this.props.allowSeconds) {
      origDate.setSeconds(seconds)
    }

    this.props.onChange(origDate);
  };

  handleDateChange = (date: Date | null) => {
    if (date == null) {
      this.props.onChange(null);

      return;
    }

    const origDate = this.props.value ?? new Date();
    const selectedDate = new Date(date);

    selectedDate.setHours(origDate.getHours(), origDate.getMinutes());

    this.props.onChange(selectedDate);
  };

  prepareFormat(unitOfTime: number) {
    return unitOfTime.toString().padStart(2, "0");
  }

  render() {
    const convertedTimeValue = (() => {
      if (this.props.value == null) {
        return undefined;
      } else {
        const baseTimeValue = `${this.prepareFormat(this.props.value.getHours())}:${this.prepareFormat(this.props.value.getMinutes())}`;

        if (this.props.allowSeconds) {
          return (
            baseTimeValue + `:${this.prepareFormat(this.props.value.getSeconds())}`
          );
        } else {
          return baseTimeValue;
        }
      }
    })();

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
        fullWidth={this.props.fullWidth}
        data-test-id={this.props["data-test-id"]}
        ref={this.props.ref}
      >
        <Spacer h gap="8" alignItems="end" noWrap>
          <div style={{ flexGrow: 1 }}>
            <DatePicker
              disabled={this.props.disabled}
              preview={this.props.preview}
              required={this.props.required}
              hideClearButton={true}
              value={this.props.value}
              onChange={(val) => {
                this.handleDateChange(val);
              }}
              dateFormat={this.props.dateFormat}
              inlineLabel
              labelHidden
              fullWidth={this.props.fullWidth}
            />
          </div>
          <div style={{ flexGrow: 1 }}>
            <TimePicker
              disabled={this.props.disabled}
              preview={this.props.preview}
              value={convertedTimeValue}
              onChange={this.handleTimeChange}
              inlineLabel
              labelHidden
              allowSeconds={this.props.allowSeconds}
              fullWidth={this.props.fullWidth}
              required={this.props.required}
              headerTemplate={<div>header template</div>}
              footerTemplate={<div>footer template</div>}
            />
          </div>
          {this.props.preview !== true && (
            <IconButton
              disabled={this.props.disabled}
              icon="remove-sign"
              onClick={() => {
                this.props.onChange(null);
              }}
              ariaValue="Clear"
            />
          )}
        </Spacer>
      </InputWrapper>
    );
  }
}
