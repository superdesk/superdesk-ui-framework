import * as React from 'react';
import {IInputWrapper} from './Form/InputWrapper';
interface IProps extends IInputWrapper {
    value: Array<string>;
    onChange(value: Array<string>): void;
    placeholder?: string;
}
export declare class TagInput extends React.Component<IProps> {
    private htmlId;
    render(): JSX.Element;
}
export {};
