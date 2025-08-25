import * as React from 'react';
import ReactDOM from 'react-dom';
import {createPopper, Instance as PopperInstance, Placement, Modifier} from '@popperjs/core';
import {noop, throttle} from 'lodash';
import maxSize from 'popper-max-size-modifier';
import {getNextZIndex} from '../zIndex';

interface IPropsPopupPositioner {
    getReferenceElement(): HTMLElement;
    placement: Placement;
    onClose(): void;
    shouldCloseOnClick?: (event: MouseEvent) => boolean;
    closeOnHoverEnd?: boolean;
    'data-test-id'?: string;
}

const padding = 8;

export class PopupPositioner extends React.PureComponent<IPropsPopupPositioner> {
    private wrapperEl: HTMLDivElement | null;
    private popper: PopperInstance | null;
    private zIndex: number = getNextZIndex();

    constructor(props: IPropsPopupPositioner) {
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

        if (this.props.shouldCloseOnClick != null && this.props.shouldCloseOnClick(event) === false) {
            return;
        }

        if (
            this.props.getReferenceElement().contains(event.target as Node) !== true &&
            this.wrapperEl.contains(event.target as Node) !== true
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
            this.props.getReferenceElement().addEventListener('mouseleave', this.closeOnMouseLeave);
            this.wrapperEl.addEventListener('mouseleave', this.closeOnMouseLeave);
        }

        const applyMaxSize: Modifier<any, any> = {
            name: 'applyMaxSize',
            enabled: true,
            phase: 'beforeWrite',
            requires: ['maxSize'],
            fn: ({state}) => {
                const {height} = state.modifiersData.maxSize;

                // subtracting {padding} in order to make a gap between the edge of the viewport
                state.styles.popper.maxHeight = `${height - padding}px`;
            },
        };

        /**
         * If popover height is greater than viewport height,
         * popper will not flip it to direction that has more space available.
         * This modifier limits popover height to max available
         * so popper can position it in direction where more space is available.
         */
        const restrictHeightToMaxAvailable: Modifier<any, any> = {
            name: 'restrictHeightToMaxAvailable',
            enabled: true,
            phase: 'main',
            fn: noop,

            // execute this as early as possible not to interfere with popper calculations
            requires: ['popperOffsets'],

            effect: (args) => {
                const popperHeight = args.state.elements.popper.offsetHeight;
                const viewportHeight = document.body.offsetHeight;
                const refRect = args.state.elements.reference.getBoundingClientRect();
                const availableSpaceAbove = refRect.top;
                const availableSpaceBelow = viewportHeight - refRect.bottom;
                const availableSpaceMax = Math.max(availableSpaceAbove, availableSpaceBelow);

                if (popperHeight > availableSpaceMax) {
                    args.state.elements.popper.style.height = availableSpaceMax + 'px';
                }

                return () => {
                    // no cleanup needed
                };
            },
        };
        if (this.wrapperEl != null) {
            /**
             * Wait until referenceElement renders so createPopper
             * can take its dimensions into account.
             */
            setTimeout(() => {
                if (this.wrapperEl != null) {
                    this.popper = createPopper(this.props.getReferenceElement(), this.wrapperEl, {
                        placement: this.props.placement,
                        modifiers: [
                            restrictHeightToMaxAvailable,
                            {
                                name: 'preventOverflow',
                                options: {
                                    padding: {
                                        top: padding,
                                    },
                                },
                            },
                            maxSize,
                            applyMaxSize,
                        ],
                    });
                }
            }, 50);
        }
    }

    componentWillUnmount() {
        window.removeEventListener('click', this.closeOnClick);
        window.removeEventListener('scroll', this.closeOnScroll, true);

        if (this.props.closeOnHoverEnd && this.wrapperEl != null) {
            this.props.getReferenceElement().removeEventListener('mouseleave', this.closeOnMouseLeave);
            this.wrapperEl.removeEventListener('mouseleave', this.closeOnMouseLeave);
        }

        this.popper?.destroy?.();
    }

    render() {
        return (
            <>
                {ReactDOM.createPortal(
                    <div
                        ref={(el) => {
                            this.wrapperEl = el;
                        }}
                        style={{
                            position: 'absolute',
                            left: '-100vw',
                            display: 'flex',
                            zIndex: this.zIndex,
                        }}
                        data-test-id={this.props['data-test-id']}
                    >
                        {this.props.children}
                    </div>,
                    document.body,
                )}
            </>
        );
    }
}

/**
 * The popup will remove itself if click/scroll events are detected outside the popup.
 */
export function showPopup(
    referenceElement: HTMLElement,
    placement: Placement,
    Component: React.ComponentType<{closePopup(): void}>,
    closeOnHoverEnd?: boolean,
    onClose?: () => void,
    shouldCloseOnClick?: (event: MouseEvent) => boolean,
): {close: () => void} {
    const el = document.createElement('div');

    document.body.appendChild(el);

    const closeFn = () => {
        ReactDOM.unmountComponentAtNode(el);
        el.remove();
        onClose?.();
    };

    ReactDOM.render(
        <PopupPositioner
            getReferenceElement={() => referenceElement}
            placement={placement}
            onClose={closeFn}
            shouldCloseOnClick={shouldCloseOnClick}
            closeOnHoverEnd={closeOnHoverEnd || false}
        >
            <Component closePopup={closeFn} />
        </PopupPositioner>,
        el,
    );

    return {close: closeFn};
}
