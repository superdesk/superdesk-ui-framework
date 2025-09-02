import * as React from 'react';
interface IProps {
    name?: string;
    size?: 'small' | 'big';
    type?: 'default' | 'primary' | 'success' | 'warning' | 'alert' | 'highlight' | 'light' | 'white';
    className?: string;
    scale?: '1.5x' | '2x' | '3x' | '4x';
    ariaHidden?: boolean;
    color?: string;
}
export declare class Icon extends React.PureComponent<IProps> {
    render(): JSX.Element;
}
export {};
