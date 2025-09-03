import * as React from 'react';
import {Placement} from '@popperjs/core';
export interface IPropsWithPopover {
    children(toggle: (referenceElement: HTMLElement) => void): React.ReactNode;
    placement: Placement;
    component: React.ComponentType<{
        closePopup(): void;
    }>;
    closeOnHoverEnd?: boolean;
    onClose?: () => void;
}
/**
 * Wraps `PopupPositioner`
 * Quicker to use for simple use cases.
 */
export declare class WithPopover extends React.PureComponent<IPropsWithPopover> {
    private closePopup?;
    constructor(props: IPropsWithPopover);
    togglePopup(referenceElement: HTMLElement): void;
    render(): React.ReactNode;
}
