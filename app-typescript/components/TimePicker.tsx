import * as React from "react";
import nextId from "react-id-generator";
import { InputWrapper } from "./Form";
import { IInputWrapper } from "./Form/InputWrapper";
import { WithPopover } from "./WithPopover";
import { TimePickerPopover } from "./TimePickerPopover";

interface IProps extends IInputWrapper {
  value?: string; // will output time as ISO8601 time string(e.g. 16:55) or an empty string if there's no value
  onChange(valueNext: string): void;
  allowSeconds?: boolean;
  headerTemplate?: React.ReactNode;
  footerTemplate?: React.ReactNode;
  "data-test-id"?: string;
}

export class TimePicker extends React.PureComponent<IProps> {
  private htmlId = nextId();

  render() {
    if (this.props.preview) {
      return (
        <div>
          <span>{this.props.value}</span>
        </div>
      );
    }

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
        <WithPopover
          component={({ closePopup }) => (
            <TimePickerPopover
              value={this.props.value}
              onChange={this.props.onChange}
              closePopup={closePopup}
              allowSeconds={this.props.allowSeconds}
              headerTemplate={this.props.headerTemplate}
              footerTemplate={this.props.footerTemplate}
            />
          )}
          key={this.props.value}
          placement="bottom-start"
        >
          {(togglePopup) => (
            <input
              key={this.props.value}
              value={this.props.value}
              type="time"
              onClick={(e) => {
                // don't show default popup
                e.preventDefault();

                togglePopup(e.target as HTMLElement);
              }}
              className="sd-input__input"
              id={this.htmlId}
              aria-labelledby={this.htmlId + "label"}
              step={this.props.allowSeconds ? 1 : undefined}
              required={this.props.required}
              disabled={this.props.disabled}
              onChange={(event) => {
                this.props.onChange(event.target.value);
              }}
              style={{
                cursor: "pointer",
              }}
              data-test-id={this.props["data-test-id"]}
            />
          )}
        </WithPopover>
      </InputWrapper>
    );
  }
}
