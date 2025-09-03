import * as React from 'react';
import {PopperOptions} from 'popper.js';
type ICloseOthersEvent = CustomEvent<{
    triggerElement: HTMLElement;
}>;
interface IPropsPositioner {
    triggerSelector: string;
    placement: PopperOptions['placement'];
    className?: string;
}
interface IStatePositioner {
    open: boolean;
}
export declare class Positioner extends React.Component<IPropsPositioner, IStatePositioner> {
    elementForPositioner: HTMLDivElement;
    triggerElement: HTMLElement;
    constructor(props: IPropsPositioner);
    handleCloseOthers(event: ICloseOthersEvent): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    toggleDropdown(e: MouseEvent): void;
    closeDropdownOnOutsideClick(wrapper: HTMLElement, event: MouseEvent): void;
    componentDidUpdate(): void;
    render(): null;
}
export {};
