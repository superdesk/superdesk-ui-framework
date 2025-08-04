import * as React from 'react';
import {DatePicker} from '../components/DatePicker';
import {Spacer} from '@sourcefabric/common';
import {defaultTo} from 'lodash';
import {TimePicker} from './TimePicker';
import {InputWrapper} from './Form';
import {IInputWrapper} from './Form/InputWrapper';
import nextId from 'react-id-generator';
import {format} from 'date-fns';
import {assertNever} from '../helpers';
import {Button} from './Button';

interface IPropsValueDate extends IInputWrapper {
    valueType: 'date';
    value: Date | null;
    dateFormat: string;
    onChange: (value: Date | null) => void;
    preview?: boolean;
    fullWidth?: boolean;
    allowSeconds?: boolean;
    required?: boolean;
    disabled?: boolean;
    ref?: React.LegacyRef<InputWrapper>;
    'data-test-id'?: string;
    timeHeaderTemplate?: React.ReactNode;
    timeFooterTemplate?: React.ReactNode;
}

type IValue = {date?: string; time?: string};

interface IPropsValueObject extends IInputWrapper {
    valueType: 'object';
    timeRequiresDate?: boolean;
    value: IValue;
    dateFormat: string;
    onChange: (value: IValue) => void; //
    preview?: boolean;
    fullWidth?: boolean;
    allowSeconds?: boolean;
    required?: boolean;
    disabled?: boolean;
    ref?: React.LegacyRef<InputWrapper>;
    'data-test-id'?: string;
    timeHeaderTemplate?: React.ReactNode;
    timeFooterTemplate?: React.ReactNode;
}

type IProps = IPropsValueDate | IPropsValueObject;

export class DateTimePicker extends React.PureComponent<IProps> {
    private htmlId: string = nextId();

    handleTimeChange = (time: string) => {
        if (this.props.valueType === 'date') {
            const [hours, minutes] = time.split(':').map((x) => defaultTo(parseInt(x, 10), 0));
            const origDate = this.props.value ?? new Date();

            origDate.setHours(hours, minutes);

            this.props.onChange(origDate);
        } else if (this.props.valueType === 'object') {
            this.props.onChange({
                ...this.props.value,
                time,
            });
        } else {
            assertNever(this.props);
        }
    };

    handleDateChange = (date: Date | null) => {
        if (this.props.valueType === 'date') {
            if (date == null) {
                this.props.onChange(null);
                return;
            }

            const origDate = this.props.value ?? new Date();
            const selectedDate = new Date(date);

            selectedDate.setHours(origDate.getHours(), origDate.getMinutes());

            this.props.onChange(selectedDate);
        } else if (this.props.valueType === 'object') {
            this.props.onChange({
                ...this.props.value,
                date: date ? format(date, 'yyyy-MM-dd') : undefined,
            });
        } else {
            assertNever(this.props);
        }
    };

    prepareFormat(unitOfTime: number) {
        return unitOfTime.toString().padStart(2, '0');
    }

    getTimeValue(): string | null {
        if (this.props.valueType === 'date') {
            return this.props.value != null
                ? `${this.prepareFormat(this.props.value.getHours())}:${this.prepareFormat(this.props.value.getMinutes())}`
                : null;
        } else if (this.props.valueType === 'object') {
            return this.props.value.time ?? null;
        } else {
            assertNever(this.props);
        }
    }

    getDateValue(): Date | null {
        if (this.props.valueType === 'date') {
            return this.props.value;
        } else if (this.props.valueType === 'object') {
            return this.props.value.date ? new Date(this.props.value.date) : null;
        } else {
            assertNever(this.props);
        }
    }

    handleClear = () => {
        if (this.props.valueType === 'date') {
            this.props.onChange(null);
        } else if (this.props.valueType === 'object') {
            this.props.onChange({date: undefined, time: undefined});
        } else {
            assertNever(this.props);
        }
    };

    render() {
        const timeValue = this.getTimeValue();
        const dateValue = this.getDateValue();
        const timeRequiresDate = (() => {
            if (this.props.valueType === 'object') {
                return this.props.timeRequiresDate === true;
            } else if (this.props.valueType === 'date') {
                return false;
            } else {
                return assertNever(this.props);
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
                inputWrapper={this.props.inputWrapper}
                data-test-id={this.props['data-test-id']}
                ref={this.props.ref}
            >
                <Spacer h gap="8" alignItems="center" noWrap>
                    <div style={{flexGrow: 1}}>
                        <DatePicker
                            disabled={this.props.disabled}
                            preview={this.props.preview}
                            required={this.props.required}
                            hideClearButton={true}
                            value={dateValue}
                            onChange={this.handleDateChange}
                            dateFormat={this.props.dateFormat}
                            inlineLabel
                            labelHidden
                            fullWidth={this.props.fullWidth}
                            data-test-id="date-input"
                        />
                    </div>
                    <div style={{flexGrow: 0, color: 'var(--color-text-muted)'}}>@</div>
                    <div className="time-picker--date-time" style={{flexGrow: 1}}>
                        <TimePicker
                            disabled={this.props.disabled || (timeRequiresDate && dateValue == null)}
                            preview={this.props.preview}
                            value={timeValue}
                            onChange={this.handleTimeChange}
                            inlineLabel
                            labelHidden
                            allowSeconds={this.props.allowSeconds}
                            fullWidth={this.props.fullWidth}
                            required={this.props.required}
                            headerTemplate={this.props.timeHeaderTemplate}
                            footerTemplate={this.props.timeFooterTemplate}
                            data-test-id="time-input"
                        />
                    </div>
                    {this.props.preview !== true && (
                        <Button
                            icon="remove-sign"
                            text="Clear"
                            tooltip="Clear"
                            onClick={this.handleClear}
                            type="default"
                            style="hollow"
                            iconOnly={true}
                            disabled={this.props.disabled}
                        />
                    )}
                </Spacer>
            </InputWrapper>
        );
    }
}
