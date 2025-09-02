import * as React from 'react';
interface ILabel {
    content: string | ((id: string) => React.ReactNode);
    side?: 'left' | 'right';
    hidden?: boolean;
}
interface IProps {
    label: ILabel;
    value: boolean;
    disabled?: boolean;
    toolTipFlow?: 'top' | 'left' | 'right' | 'down';
    toolTipAppend?: boolean;
    onChange(nextValue: boolean): void;
}
export declare class Switch extends React.PureComponent<IProps> {
    constructor(props: IProps);
    htmlId: string;
    onClick(): void;
    render(): JSX.Element;
}
export {};
