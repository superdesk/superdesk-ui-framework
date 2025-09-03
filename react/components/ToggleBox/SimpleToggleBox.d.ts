import * as React from 'react';
import {IPropsSimple} from '../ToggleBox/index';
interface IState {
    isOpen: boolean;
    isAnimating: boolean;
}
/**
 * @ngdoc react
 * @name ToggleBox
 * @description ToggleBox used to open/close a set of details
 */
export declare class SimpleToggleBox extends React.PureComponent<IPropsSimple, IState> {
    htmlId: string;
    contentRef: React.RefObject<HTMLDivElement>;
    constructor(props: IPropsSimple);
    handleKeyDown: (event: React.KeyboardEvent<HTMLAnchorElement>) => void;
    /**
     * Called via ref
     */
    isOpen: () => boolean;
    toggle: () => void;
    componentDidUpdate(_prevProps: IPropsSimple, prevState: IState): void;
    handleAnimationEnd: () => void;
    render(): JSX.Element;
}
export {};
