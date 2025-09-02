import * as React from 'react';
import { DatePicker } from '../components/DatePicker';
import { InputWrapper } from './Form';
import { IInputWrapper } from './Form/InputWrapper';
interface IBaseProps extends IInputWrapper {
    dateFormat: string;
    preview?: boolean;
    fullWidth?: boolean;
    allowSeconds?: boolean;
    required?: boolean;
    disabled?: boolean;
    ref?: React.LegacyRef<InputWrapper>;
    'data-test-id'?: string;
    timeHeaderTemplate?: React.ReactNode;
    timeFooterTemplate?: React.ReactNode;
    locale?: DatePicker['props']['locale'];
}
interface IPropsValueDate {
    valueType: 'date';
    value: Date | null;
    onChange: (value: Date | null) => void;
}
type IValue = {
    date?: string;
    time?: string;
};
interface IPropsValueObject {
    valueType: 'object';
    timeRequiresDate?: boolean;
    value: IValue;
    onChange: (value: IValue) => void;
}
type IProps = (IPropsValueDate | IPropsValueObject) & IBaseProps;
export declare class DateTimePicker extends React.PureComponent<IProps> {
    private htmlId;
    handleTimeChange: (time: string) => void;
    handleDateChange: (date: Date | null) => void;
    prepareFormat(unitOfTime: number): string;
    getTimeValue(): string | null;
    getDateValue(): Date | null;
    handleClear: () => void;
    render(): JSX.Element;
}
export {};
