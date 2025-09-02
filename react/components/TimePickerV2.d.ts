import * as React from 'react';
import { IInputWrapper } from './Form/InputWrapper';
interface IProps extends IInputWrapper {
    value: string;
    allowSeconds?: boolean;
    disabledOptions: {
        hours?: Array<number>;
        minutes?: Array<number>;
        seconds?: Array<number>;
    };
    'data-test-id'?: string;
    onChange(valueNext: string): void;
}
export declare class TimePickerV2 extends React.PureComponent<IProps> {
    private is12HourFormat;
    constructor(props: IProps);
    /**
     * in case initial time is not valid according to disabled options, we return first valid option
     */
    private getCorrectedTime;
    private getOptionsForTimeUnit;
    private handleTimeChange;
    componentDidMount(): void;
    padValue(value: number): string;
    updatedTimeUnit(): string[];
    render(): JSX.Element;
}
export {};
