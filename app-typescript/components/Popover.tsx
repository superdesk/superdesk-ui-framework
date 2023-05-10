import {PopperOptions} from 'popper.js';
import * as React from 'react';
import {Positioner} from './_Positioner';

interface IPropsPopover {
    title: string;
    triggerSelector: string; // CSS selector for an element that will be used to toggle the popover.
    displayCloseButton?: boolean; // defaults to true
    placement?: PopperOptions['placement']; // defaults to auto
    zIndex?: number;
}

export class Popover extends React.Component<IPropsPopover> {
    render() {
        return (
            <Positioner
                triggerSelector={this.props.triggerSelector}
                placement={this.props.placement ?? 'auto'}
                className="sd-popover"
                zIndex={this.props.zIndex}
            >
                <div className="sd-popover__header">
                    <h4 className="sd-popover__title" tabIndex={0} id='popoverTitle'>{this.props.title}</h4>

                    {
                        (this.props.displayCloseButton ?? true) && (
                            <button
                                className="icn-btn icn-btn--small sd-popover__close"
                                tabIndex={0}
                                aria-label={'Close dialog'}
                                onClick={() => {
                                    const el = document.querySelector(this.props.triggerSelector);

                                    if (el instanceof HTMLElement) {
                                        el.click();
                                    }
                                }}
                            >
                                <i className="icon-close-small" />
                            </button>
                        )
                    }
                </div>

                <div className="sd-popover__content">
                    {this.props.children}
                </div>
            </Positioner>
        );
    }
}

/////////////////////////////////////////////////////////////////////////////////////////////

interface IPropsWithPopover {
    children(toggle: (referenceElement: HTMLElement) => void): React.ReactNode;
    placement: Placement;
    component: React.ComponentType<{closePopup(): void}>;
    zIndex?: number;
    closeOnHoverEnd?: boolean;
    onClose?: () => void;
}

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
                this.props.zIndex,
                this.props.closeOnHoverEnd,
                this.props.onClose,
            ).close;
        }
    }

    render(): React.ReactNode {
        return this.props.children(this.togglePopup);
    }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////

import {throttle} from 'lodash';
import {createPopper, Instance as PopperInstance, Placement} from '@popperjs/core/';
import maxSize from 'popper-max-size-modifier';
import ReactDOM from 'react-dom';

export interface IPropsPositioner {
    referenceElement: HTMLElement;
    placement: Placement;
    zIndex?: number;
    onClose(): void;
    closeOnHoverEnd?: boolean;
}

export class PopupPositioner extends React.PureComponent<IPropsPositioner> {
    private wrapperEl: HTMLDivElement | null;
    private popper: PopperInstance | null;

    constructor(props: IPropsPositioner) {
        super(props);

        this.closeOnClick = this.closeOnClick.bind(this);
        this.closeOnScroll = throttle(this.closeOnScroll.bind(this), 200);
        this.closeOnMouseLeave = this.closeOnMouseLeave.bind(this);
        this.wrapperEl = null;
        this.popper = null;
    }

    closeOnClick(event: MouseEvent) {
        if (this.wrapperEl == null) {
            return;
        }

        if (
            this.props.referenceElement.contains(event.target as Node) !== true
            && this.wrapperEl.contains(event.target as Node) !== true
        ) {
            this.props.onClose();
        }
    }

    closeOnScroll(event: Event) {
        if (this.wrapperEl == null) {
            return;
        }

        if (this.wrapperEl.contains(event.target as Node) !== true) {
            this.props.onClose();
        }
    }

    closeOnMouseLeave(event: MouseEvent) {
        if (this.wrapperEl == null) {
            return;
        }

        if (this.wrapperEl.contains(event.target as Node) !== true) {
            this.props.onClose();
        }
    }

    componentDidMount() {
        window.addEventListener('click', this.closeOnClick, {capture: true});
        window.addEventListener('scroll', this.closeOnScroll, true);

        if (this.props.closeOnHoverEnd && this.wrapperEl != null) {
            this.props.referenceElement.addEventListener('mouseleave', this.closeOnMouseLeave);
            this.wrapperEl.addEventListener('mouseleave', this.closeOnMouseLeave);
        }

        if (this.wrapperEl != null) {
            /**
             * Wait until referenceElement renders so createPopper
             * can take its dimensions into account.
             */
            setTimeout(() => {
                if (this.wrapperEl != null) {
                    this.popper = createPopper(
                        this.props.referenceElement,
                        this.wrapperEl,
                        {
                            placement: this.props.placement,
                            modifiers: [
                                maxSize,
                                applyMaxSize,
                            ],
                        },
                    );
                }
            }, 50);
        }
    }

    componentWillUnmount() {
        window.removeEventListener('click', this.closeOnClick);
        window.removeEventListener('scroll', this.closeOnScroll, true);

        if (this.props.closeOnHoverEnd && this.wrapperEl != null) {
            this.props.referenceElement.removeEventListener('mouseleave', this.closeOnMouseLeave);
            this.wrapperEl.removeEventListener('mouseleave', this.closeOnMouseLeave);
        }

        this.popper?.destroy?.();
    }

    render() {
        return (
            <div
                ref={(el) => {
                    this.wrapperEl = el;
                }}
                style={{zIndex: this.props.zIndex ?? 1, position: 'absolute', left: '-100vw'}}
            >
                {this.props.children}
            </div>
        );
    }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * The popup will remove itself if click/scroll events are detected outside the popup.
 */
export function showPopup(
    referenceElement: HTMLElement,
    placement: Placement,
    Component: React.ComponentType<{closePopup(): void}>,
    zIndex?: number,
    closeOnHoverEnd?: boolean,
    onClose?: () => void,
): {close: () => void} {
    const el = document.createElement('div');

    document.body.appendChild(el);

    const closeFn = () => {
        ReactDOM.unmountComponentAtNode(el);
        el.remove();
        onClose?.();
    };

    ReactDOM.render(
        (
            <PopupPositioner
                referenceElement={referenceElement}
                placement={placement}
                onClose={closeFn}
                zIndex={zIndex}
                closeOnHoverEnd={closeOnHoverEnd || false}
            >
                <Component
                    closePopup={closeFn}
                />
            </PopupPositioner>
        ),
        el,
    );

    return {close: closeFn};
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////

import {Modifier} from '@popperjs/core/';

export const applyMaxSize: Modifier<any, any> = {
    name: 'applyMaxSize',
    enabled: true,
    phase: 'beforeWrite',
    requires: ['maxSize'],
    fn: ({state}) => {
        const {height} = state.modifiersData.maxSize;

        // subtracting 10 in order to make a gap between the edge of the viewport
        state.styles.popper.maxHeight = `${height - 10}px`;
    },
};
