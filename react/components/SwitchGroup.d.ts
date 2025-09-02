import * as React from 'react';
interface IProps {
    orientation?: 'vertical' | 'horizontal';
    align?: 'left' | 'right';
    children: React.ReactNode;
    className?: string;
}
export declare class SwitchGroup extends React.PureComponent<IProps> {
    render(): JSX.Element;
}
export {};
