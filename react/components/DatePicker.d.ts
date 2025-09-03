import * as React from 'react';
import {LocaleSettings, CalendarProps} from '@superdesk/primereact/calendar';
import {IInputWrapper} from './Form/InputWrapper';
interface IDatePickerBase extends IInputWrapper {
    dateFormat: string;
    headerButtonBar?: Array<{
        days: number;
        label: string;
    }>;
    locale?:
        | {
              type: 'code-only';
              code: string;
          }
        | {
              type: 'full';
              payload: Omit<LocaleSettings, 'today' | 'clear'>;
          };
    hideClearButton?: boolean;
}
interface IDatePicker extends IDatePickerBase {
    value: Date | null;
    onChange(valueNext: Date | null): void;
    maxDate?: Date;
    minDate?: Date;
    'data-test-id'?: string;
}
interface IState {
    value: CalendarProps['value'];
    valid: boolean;
}
export declare class DatePicker extends React.PureComponent<IDatePicker, IState> {
    private instance;
    hidePopupOnScroll: () => void;
    private htmlId;
    constructor(props: IDatePicker);
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentDidUpdate(prevProps: IDatePicker): void;
    render(): JSX.Element;
}
interface IDatePickerISO extends IDatePickerBase {
    value: string;
    onChange(value: string): void;
}
export declare class DatePickerISO extends React.PureComponent<IDatePickerISO> {
    render(): JSX.Element;
}
export {};
