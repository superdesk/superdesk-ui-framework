import * as React from 'react';
import {IInputWrapper} from './Form/InputWrapper';
interface ISelect extends IInputWrapper {
    value?: string;
    onChange(newValue: string): void;
    'data-test-id'?: string;
}
declare class Select extends React.Component<ISelect> {
    private htmlId;
    constructor(props: ISelect);
    handleChange(event: React.ChangeEvent<HTMLSelectElement>): void;
    render(): JSX.Element;
}
interface IOption {
    value?: string;
}
declare class Option extends React.PureComponent<IOption> {
    render(): JSX.Element;
}
export {Select, Option};
