import * as React from 'react';
interface IProps {
    text?: string;
    type?: 'default' | 'primary' | 'success' | 'warning' | 'alert' | 'highlight' | 'light';
    color?: string;
    shape?: 'round' | 'square';
    children?: React.ReactNode;
    hexColor?: string;
    'data-test-id'?: string;
}
export declare class Badge extends React.PureComponent<IProps> {
    render(): JSX.Element;
}
export {};
