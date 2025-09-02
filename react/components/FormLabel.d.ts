import * as React from 'react';
interface IProps {
    text: string;
    style?: 'normal' | 'light';
    noMinHeight?: boolean;
    noMinWidth?: boolean;
}
export declare class FormLabel extends React.PureComponent<IProps> {
    render(): JSX.Element;
}
export {};
