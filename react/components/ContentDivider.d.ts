import * as React from 'react';
interface IProps {
    type?: 'dashed' | 'dotted' | 'solid';
    orientation?: 'horizontal' | 'vertical';
    align?: 'center' | 'left' | 'right';
    border?: boolean;
    margin?: 'x-small' | 'small' | 'medium' | 'large' | 'none';
    children?: React.ReactNode;
}
export declare class ContentDivider extends React.PureComponent<IProps> {
    render(): JSX.Element;
}
export {};
