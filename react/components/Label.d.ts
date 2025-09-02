import * as React from 'react';
interface IProps {
    text: string;
    link?: string;
    type?: 'default' | 'primary' | 'success' | 'warning' | 'alert' | 'highlight' | 'sd-green';
    color?: string;
    size?: 'small' | 'normal' | 'large';
    onClick?(): void;
    noTransform?: boolean;
    hexColor?: string;
    style?: 'filled' | 'hollow' | 'translucent';
    'data-test-id'?: string;
}
export declare class Label extends React.PureComponent<IProps> {
    render(): JSX.Element;
}
export {};
