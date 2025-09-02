import * as React from 'react';
interface IProps {
    children: React.ReactNode;
    className?: string;
    weight?: 'normal' | 'medium' | 'strong';
    style?: 'normal' | 'italic';
    align?: 'start' | 'end' | 'center' | 'justify';
    fontStyle?: 'sans' | 'serif';
    color?: 'normal' | 'light' | 'lighter';
    type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}
export declare class Heading extends React.PureComponent<IProps> {
    render(): JSX.Element;
}
export {};
