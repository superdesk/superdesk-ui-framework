import * as React from 'react';
interface IProps {
    id?: string;
    children?: React.ReactNode;
    className?: string;
    display?: 'flex' | 'inline-flex' | 'block';
    direction?: 'row' | 'column';
    gap?: 'none' | 'x-small' | 'small' | 'medium' | 'large';
    theme?: 'light' | 'dark';
}
export declare class Container extends React.PureComponent<IProps> {
    render(): JSX.Element;
}
export {};
