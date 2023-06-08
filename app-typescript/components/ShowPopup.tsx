
import * as React from 'react';
import ReactDOM from 'react-dom';
import {createPopper, Instance as PopperInstance, Placement, Modifier} from '@popperjs/core';
import {throttle} from 'lodash';
import maxSize from 'popper-max-size-modifier';
import {getNextZIndex} from '../zIndex';

interface IPropsPopupPositioner {
    referenceElement: HTMLElement;
    placement: Placement;
    onClose(): void;
    closeOnHoverEnd?: boolean;
}

class PopupPositioner extends React.PureComponent<IPropsPopupPositioner> {
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

        const applyMaxSize: Modifier<any, any> = {
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
                style={{
                    zIndex: this.zIndex,
                    position: 'absolute',
                    left: '-100vw',
                    display: 'flex',
                }}
            >
                {this.props.children}
            </div>
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
