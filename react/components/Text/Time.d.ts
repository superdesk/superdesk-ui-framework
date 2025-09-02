import * as React from 'react';
interface IProps {
    children: React.ReactNode;
    className?: string;
    weight?: 'light' | 'normal' | 'medium' | 'strong';
    style?: 'normal' | 'italic';
    align?: 'start' | 'end' | 'center' | 'justify';
    size?: 'x-small' | 'small' | 'medium' | 'large';
    color?: 'normal' | 'light' | 'lighter';
    datetime?: string;
}
export declare class Time extends React.PureComponent<IProps> {
    render(): JSX.Element;
}
export {};
