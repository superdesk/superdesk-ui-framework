import * as React from 'react';
interface IProps {
    children: React.ReactNode;
    spaces?: 'default' | 'condensed' | 'relaxed';
    marginBottom?: '0' | '1' | '2' | '3' | '4';
    inlineLabels?: boolean;
    rowLabel?: string;
}
export declare class FormRowNew extends React.PureComponent<IProps> {
    render(): JSX.Element;
}
export {};
