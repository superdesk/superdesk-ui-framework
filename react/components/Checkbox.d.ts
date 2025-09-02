import * as React from 'react';
interface IProps {
    label: {
        text: string;
        side?: 'start' | 'end';
        hidden?: boolean;
    };
    checked?: boolean;
    disabled?: boolean;
    required?: boolean;
    tabindex?: number;
    onChange(nextValue: boolean): void;
}
export declare class Checkbox extends React.Component<IProps> {
    htmlId: string;
    constructor(props: IProps);
    handleChange(event: React.ChangeEvent<HTMLInputElement>): void;
    render(): JSX.Element;
}
export {};
