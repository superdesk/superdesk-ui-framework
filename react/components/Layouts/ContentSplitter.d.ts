import * as React from 'react';
interface IProps {
    children?: React.ReactNode;
    background?: 'transparent' | 'light' | 'grey' | 'dark';
    visible?: boolean;
    disabled?: boolean;
}
export declare class ContentSplitter extends React.PureComponent<IProps> {
    render(): JSX.Element;
}
export {};
