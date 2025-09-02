import * as React from 'react';
interface ISize {
    width: number;
    height: number;
}
interface IProps {
    children: (props: ISize) => JSX.Element;
    style?: React.CSSProperties;
}
interface IState {
    dimensions: ISize | 'not-initialized';
}
/**
 * Higher order component for dynamically retrieving dimensions of any element.
 * It uses `ResizeObserver` to listen for updates and re-render children efficiently.
 */
export declare class WithSizeObserver extends React.PureComponent<IProps, IState> {
    private el;
    private observerInstance?;
    constructor(props: IProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
export {};
