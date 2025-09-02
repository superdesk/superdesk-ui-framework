import * as React from 'react';
interface IProps {
    header: string;
    children?: React.ReactNode;
    theme?: string;
}
export declare const Layout: ({ header, children, theme }: IProps) => JSX.Element;
export {};
