import * as React from 'react';
interface IProps {
    blank?: boolean;
    dotRows?: '4' | '5' | '6' | '7' | '8' | '10';
    dotsInRow?: '2' | '3' | '4' | '5';
    dotColor?: 'light' | 'dark';
    className?: string;
}
export declare class DragHandle extends React.PureComponent<IProps> {
    render(): JSX.Element;
}
export {};
