import React from 'react';
interface IDimensions {
    width: number;
}
interface IProps {
    children: (props: IDimensions) => JSX.Element;
}
interface IState {
    dimensions: IDimensions | 'not-initialized';
}
export declare class ResizeObserverComponent extends React.PureComponent<IProps, IState> {
    el: HTMLDivElement | null | undefined;
    observerInstance: any;
    constructor(props: IProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
export {};
