import * as React from 'react';
interface IProps {
    value: string;
    onChange(nextValue: string): void;
    disabled?: boolean;
    group?: {
        orientation?: 'horizontal' | 'vertical';
        grid?: boolean;
        align?: 'start' | 'end' | 'center' | 'inline';
        padded?: boolean;
        groupLabel?: string;
        groupLabelledBy?: string;
    };
    options: Array<{
        label: string;
        value: string;
        icon?: string;
        labelHidden?: boolean;
        disabled?: boolean;
    }>;
    required?: boolean;
    tabindex?: number;
    'data-test-id'?: string;
}
export declare class RadioButtonGroup extends React.Component<IProps> {
    htmlId: string;
    constructor(props: IProps);
    handleChange(item: any): void;
    render(): JSX.Element;
}
export {};
