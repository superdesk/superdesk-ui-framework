import * as React from 'react';
import { ITimeUnit } from '../utils/time';
interface IProps {
    closePopup: () => void;
    headerTemplate?: React.ReactNode;
    footerTemplate?: React.ReactNode;
    allowSeconds?: boolean;
    onChange: (nextValue: string) => void;
    value: string | null;
}
export declare class TimePickerPopover extends React.PureComponent<IProps> {
    private is12HourFormat;
    private inputRefs;
    constructor(props: IProps);
    handleChange(unit: ITimeUnit, value: string): void;
    componentDidMount(): void;
    render(): React.ReactNode;
}
export {};
