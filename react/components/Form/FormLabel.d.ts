import * as React from 'react';
interface IProps {
    style?: 'normal' | 'light' | 'boxed';
    state?: 'default' | 'focused' | 'warning';
    text: string;
    forId?: string;
    required?: boolean;
    invalid?: boolean;
}
export declare class FormLabel extends React.PureComponent<IProps> {
    render(): JSX.Element;
}
export {};
