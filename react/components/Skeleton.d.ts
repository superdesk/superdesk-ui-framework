import * as React from 'react';
interface IProps {
    shape: string;
    size: string;
    width: string;
    height: string;
    borderRadius: string;
    animation: string;
    style: object;
    className: string;
}
export declare class Skeleton extends React.Component<IProps> {
    static defaultProps: {
        shape: string;
        size: null;
        width: string;
        height: string;
        borderRadius: null;
        animation: string;
        style: null;
        className: null;
    };
    skeletonStyle(): {
        width: string;
        height: string;
        borderRadius: string;
    };
    render(): JSX.Element;
}
export {};
