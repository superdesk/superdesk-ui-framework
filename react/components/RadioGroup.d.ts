import * as React from 'react';
interface IOption {
    label: string;
    value: string;
    disabled?: boolean;
}
interface IProps {
    value?: IOption['value'];
    options: Array<IOption>;
    labelSide?: 'start' | 'end';
    required?: boolean;
    buttonStyle?: boolean;
    orientation?: 'horizontal' | 'vertical';
    groupLabelledBy?: string;
    tabindex?: number;
    onChange(nextValue: IOption['value']): void;
}
export declare class RadioGroup extends React.Component<IProps> {
    htmlId: string;
    constructor(props: IProps);
    handleChange(item: any): void;
    render(): JSX.Element;
}
export {};
