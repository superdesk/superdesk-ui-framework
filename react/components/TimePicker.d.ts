import * as React from 'react';
import { IInputWrapper } from './Form/InputWrapper';
interface IProps extends IInputWrapper {
    value: string | null;
    onChange(valueNext: string): void;
    allowSeconds?: boolean;
    headerTemplate?: React.ReactNode;
    footerTemplate?: React.ReactNode;
    'data-test-id'?: string;
}
interface IState {
    popupOpen: boolean;
}
export declare class TimePicker extends React.PureComponent<IProps, IState> {
    private htmlId;
    private timeInputRef;
    constructor(props: IProps);
    render(): JSX.Element;
}
export {};
