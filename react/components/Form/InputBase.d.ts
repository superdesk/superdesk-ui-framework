import * as React from 'react';
interface IPropsBase {
    error?: string;
    required?: boolean;
    disabled?: boolean;
    invalid?: boolean;
    tabIndex?: number;
    fullWidth?: boolean;
    boxedStyle?: boolean;
    placeholder?: string;
    htmlId?: string;
    id?: string;
    size?: 'medium' | 'large' | 'x-large';
}
interface IPropsText extends IPropsBase {
    type: 'text';
    value: string;
    onChange(newValue: string): void;
}
interface IPropsPassword extends IPropsBase {
    type: 'password';
    value: string;
    onChange(newValue: string): void;
}
interface IPropsNumber extends IPropsBase {
    type: 'number';
    value: number;
    onChange(newValue: number): void;
}
type IProps = IPropsText | IPropsNumber | IPropsPassword;
interface IState {
    value: string | number;
    invalid: boolean;
}
export declare class InputBase extends React.Component<IProps, IState> {
    constructor(props: IProps);
    handleChange(event: React.ChangeEvent<HTMLInputElement>): void;
    componentDidUpdate(prevProps: any): void;
    render(): JSX.Element;
}
export {};
