import * as React from 'react';
interface IProps {
    orientation?: 'horizontal' | 'vertical';
    spaces?: 'comfort' | 'compact' | 'loose' | 'no-space';
    align?: 'start' | 'end' | 'center' | 'inline' | 'sub';
    padded?: boolean;
    subgroup?: boolean;
    children: React.ReactNode;
    className?: string;
}
export declare class ButtonGroup extends React.PureComponent<IProps> {
    render(): JSX.Element;
}
export {};
