import * as React from 'react';
import { Placement } from '@popperjs/core';
interface IPropsPopupPositioner {
    getReferenceElement(): HTMLElement;
    placement: Placement;
    onClose(): void;
    closeOnHoverEnd?: boolean;
    'data-test-id'?: string;
}
export declare class PopupPositioner extends React.PureComponent<IPropsPopupPositioner> {
    private wrapperEl;
    private popper;
    private zIndex;
    constructor(props: IPropsPopupPositioner);
    closeOnClick(event: MouseEvent): void;
    closeOnScroll(event: Event): void;
    closeOnMouseLeave(event: MouseEvent): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
/**
 * The popup will remove itself if click/scroll events are detected outside the popup.
 */
export declare function showPopup(referenceElement: HTMLElement, placement: Placement, Component: React.ComponentType<{
    closePopup(): void;
}>, closeOnHoverEnd?: boolean, onClose?: () => void): {
    close: () => void;
};
export {};
