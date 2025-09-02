import * as React from 'react';
interface IPropsBase {
    label: string;
    maxLength?: number;
    info?: string;
    inlineLabel?: boolean;
    labelHidden?: boolean;
    error?: string;
    required?: boolean;
    disabled?: boolean;
    invalid?: boolean;
    tabindex?: number;
    fullWidth?: boolean;
    boxedStyle?: boolean;
    boxedLable?: boolean;
    placeholder?: string;
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
    value: string;
    onChange(newValue: string): void;
}
type IProps = IPropsText | IPropsNumber | IPropsPassword;
interface IState {
    value: string;
    invalid: boolean;
}
export declare class InputNew extends React.PureComponent<IProps, IState> {
    constructor(props: IProps);
    componentDidUpdate(prevProps: any): void;
    htmlId: string;
    render(): JSX.Element;
}
export {};
