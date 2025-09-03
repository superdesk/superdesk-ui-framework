import * as React from 'react';
import {IPropsCustomHeader} from '../ToggleBox/index';
interface IState {
    isOpen: boolean;
    wasOpened: boolean;
    isAnimating: boolean;
}
export declare class CustomHeaderToggleBox extends React.PureComponent<IPropsCustomHeader, IState> {
    private htmlId;
    private contentRef;
    constructor(props: IPropsCustomHeader);
    /**
     * Called via ref
     */
    isOpen: () => boolean;
    toggle: () => Promise<boolean>;
    componentDidUpdate(_prevProps: IPropsCustomHeader, prevState: IState): void;
    handleAnimationEnd: () => void;
    render(): JSX.Element;
}
export {};
