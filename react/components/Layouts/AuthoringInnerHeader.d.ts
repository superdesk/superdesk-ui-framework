import * as React from 'react';
import {HeaderPadding} from './AuthoringMain';
interface IProps {
    children?: React.ReactNode;
    collapsed?: boolean;
    headerPadding?: HeaderPadding;
    hideCollapseButton?: boolean;
}
interface IState {
    collapsed: boolean;
}
export declare class AuthoringInnerHeader extends React.PureComponent<IProps, IState> {
    constructor(props: IProps);
    render(): JSX.Element;
}
export {};
