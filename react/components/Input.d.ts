import * as React from 'react';
import {IInputCommon, IInputWrapper} from './Form/InputWrapper';
interface IPropsBase extends IInputCommon {
    maxLength?: number;
    placeholder?: string;
    size?: 'medium' | 'large' | 'x-large';
    'data-test-id'?: string;
    inputWrapper?: IInputWrapper['inputWrapper'];
}
interface IPropsText extends IPropsBase {
    type: 'text';
    value?: string;
    onChange(newValue: string): void;
}
interface IPropsPassword extends IPropsBase {
    type: 'password';
    value?: string;
    onChange(newValue: string): void;
}
interface IPropsNumber extends IPropsBase {
    type: 'number';
    value?: number;
    onChange(newValue: number): void;
}
type IProps = IPropsText | IPropsNumber | IPropsPassword;
export declare class Input extends React.Component<IProps> {
    constructor(props: IProps);
    htmlId: string;
    handleChange(event: React.ChangeEvent<HTMLInputElement>): void;
    render(): JSX.Element;
}
export {};
