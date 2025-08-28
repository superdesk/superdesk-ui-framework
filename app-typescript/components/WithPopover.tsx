import * as React from 'react';
import {Placement} from '@popperjs/core';
import {showPopup} from './ShowPopup';

export interface IPropsWithPopover {
    children(toggle: (referenceElement: HTMLElement) => void): React.ReactNode;
    placement: Placement;
    component: React.ComponentType<{closePopup(): void}>;
    closeOnHoverEnd?: boolean;
    onClose?: () => void;
    shouldClose?(event: MouseEvent | Event): boolean;
}

/**
 * Wraps `PopupPositioner`
 * Quicker to use for simple use cases.
 */
export class WithPopover extends React.PureComponent<IPropsWithPopover> {
    private closePopup?: () => void;

    constructor(props: IPropsWithPopover) {
        super(props);

        this.togglePopup = this.togglePopup.bind(this);
    }

    togglePopup(referenceElement: HTMLElement) {
        if (this.closePopup != null) {
            this.closePopup();
            this.closePopup = undefined;
        } else {
            this.closePopup = showPopup(
                referenceElement,
                this.props.placement,
                this.props.component,
                this.props.closeOnHoverEnd,
                () => {
                    this.closePopup = undefined;
                    this.props.onClose?.();
                },
                this.props.shouldClose,
            ).close;
        }
    }

    render(): React.ReactNode {
        return this.props.children(this.togglePopup);
    }
}
