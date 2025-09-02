import * as React from 'react';
interface IProps {
    children?: React.ReactNode;
    side?: 'left' | 'right';
    background?: 'transparent' | 'light' | 'grey' | 'dark';
    open?: boolean;
    large?: boolean;
}
export declare class AuthoringContainer extends React.PureComponent<IProps> {
    render(): JSX.Element;
}
export {};
