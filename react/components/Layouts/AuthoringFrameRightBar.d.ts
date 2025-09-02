import * as React from 'react';
interface IProps {
    children?: React.ReactNode;
    closed?: boolean;
}
interface IState {
    children?: React.ReactNode;
    closed?: boolean;
}
export declare class AuthoringFrameRightBar extends React.PureComponent<IProps, IState> {
    constructor(props: IProps);
    componentDidUpdate(prevProps: Readonly<IProps>): void;
    render(): false | JSX.Element;
}
export {};
