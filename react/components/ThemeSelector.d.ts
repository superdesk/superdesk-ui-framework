import * as React from 'react';
interface IProps {
    value?: string;
    size?: 'small' | 'medium' | 'large';
    options: Array<{
        label: string;
        value: string;
        theme: 'light' | 'dark' | 'contrast-light';
        disabled?: boolean;
        checked?: boolean;
    }>;
    required?: boolean;
    onChange(nextValue: string): void;
}
export declare class ThemeSelector extends React.Component<IProps> {
    htmlId: string;
    constructor(props: IProps);
    handleChange(item: any): void;
    render(): JSX.Element;
}
export {};
