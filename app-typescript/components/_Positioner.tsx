import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as _popper from 'popper.js';
import {PopperOptions} from 'popper.js';
import {getNextZIndex} from '../zIndex';

const Popper = _popper.default;

const eventCloseOthers = 'superdesk-ui-framework.positioner.closeOthers';
const padding = 5;

type ICloseOthersEvent = CustomEvent<{triggerElement: HTMLElement}>;

interface IPropsPopperWrapper extends IPropsPositioner {
    handleCloseOthers(event: ICloseOthersEvent): void;
    close(): void;
    closeDropdownOnOutsideClick(wrappper: HTMLElement, event: MouseEvent): void;
    triggerElement: HTMLElement;
}

class PopperWrapper extends React.Component<IPropsPopperWrapper> {
    closeDropdownOnOutsideClickBound: (event: MouseEvent) => void;
    wrapper: HTMLDivElement;
    popperInstance: any;
    previouslyFocusedElement: HTMLElement | undefined;
    public zIndex: number = getNextZIndex();

    constructor(props: IPropsPopperWrapper) {
        super(props);

        this.wrapper = document.createElement('div'); // avoid setting to null
        this.closeDropdownOnOutsideClickBound = (event) => {
            this.props.closeDropdownOnOutsideClick(this.wrapper, event);
        };
    }

    componentDidMount() {
        window.addEventListener('click', this.closeDropdownOnOutsideClickBound);
        window.addEventListener(eventCloseOthers, (_event) => {
            const event = _event as unknown as ICloseOthersEvent;

            this.props.handleCloseOthers(event);
        });

        const dropdownElement = this.wrapper;

        dropdownElement.style.zIndex = this.zIndex.toString();

        const rect = this.props.triggerElement.getBoundingClientRect();

        const viewportHeight = document.documentElement.clientHeight;
        const viewportWidth = document.documentElement.clientWidth;

        const availableSpaceTop = rect.top - padding;
        const availableSpaceBottom = (viewportHeight - rect.bottom) - padding;

        const availableSpaceLeft = rect.left;
        const availableSpaceRight = viewportWidth - rect.right;

        this.wrapper.style.maxHeight = Math.max(availableSpaceBottom, availableSpaceTop) + 'px';
        this.wrapper.style.maxWidth = Math.max(availableSpaceLeft, availableSpaceRight) + 'px';
        this.wrapper.style.overflow = 'auto';

        this.popperInstance = new Popper(this.props.triggerElement, dropdownElement, {
            placement: this.props.placement,
            eventsEnabled: false,
        });

        if (document.activeElement instanceof HTMLElement) {
            this.previouslyFocusedElement = document.activeElement;
        }

        this.wrapper.focus();
    }
    componentWillUnmount() {
        window.removeEventListener('click', this.closeDropdownOnOutsideClickBound);
        window.removeEventListener(eventCloseOthers, (_event) => {
            const event = _event as unknown as ICloseOthersEvent;

            this.props.handleCloseOthers(event);
        });
        this.popperInstance.destroy();
        this.previouslyFocusedElement?.focus();
    }
    render() {
        return (
            <div
                className={this.props.className}
                ref={(w) => {
                    if (w != null) {
                        this.wrapper = w;
                    }
                }}
                tabIndex={0}
                role='dialog'
                aria-labelledby='popoverTitle'
                onKeyDown={(event) => {
                    if (event.key === 'Escape') {
                        event.preventDefault();
                        this.props.close();
                    }
                }}
            >
                {this.props.children}
            </div>
        );
    }
}

interface IPropsPositioner {
    triggerSelector: string;
    placement: PopperOptions['placement'];
    className?: string;
}

interface IStatePositioner {
    open: boolean;
}

export class Positioner extends React.Component<IPropsPositioner, IStatePositioner> {
    elementForPositioner: HTMLDivElement;
    triggerElement: HTMLElement;

    constructor(props: IPropsPositioner) {
        super(props);

        this.elementForPositioner = document.body.appendChild(document.createElement('div'));
        this.triggerElement = document.createElement('div'); // avoid setting to null

        this.state = {
            open: false,
        };

        this.toggleDropdown = this.toggleDropdown.bind(this);
        this.handleCloseOthers = this.handleCloseOthers.bind(this);
        this.closeDropdownOnOutsideClick = this.closeDropdownOnOutsideClick.bind(this);
    }

    handleCloseOthers(event: ICloseOthersEvent) {
        if (event.detail.triggerElement !== this.triggerElement) {
            this.setState({open: false});
        }
    }

    componentDidMount() {
        setTimeout(() => {
            // trigger element can rendered as a sibling to positioner
            // so it might not be in the DOM at the same time.

            const el = document.querySelector(this.props.triggerSelector);

            if (el instanceof HTMLElement) {
                this.triggerElement = el;
                this.triggerElement.addEventListener('click', this.toggleDropdown);
            }
        });
    }

    componentWillUnmount() {
        this.elementForPositioner.remove();
        ReactDOM.unmountComponentAtNode(this.elementForPositioner);
        this.triggerElement.removeEventListener('click', this.toggleDropdown);
    }

    toggleDropdown(e: MouseEvent) {
        // When toggle button is clicked it should not bubble up.
        // For example, if clicking a list item opens the preview, the preview should not be opened if the click is on
        // the toggle button. Even if the toggle button is inside the list item.
        e.stopPropagation();

        window.dispatchEvent(new CustomEvent(eventCloseOthers, {
            detail: {
                triggerElement: this.triggerElement,
            },
        }));

        this.setState({open: !this.state.open});
    }

    // arguments are in a different order, because the method is bound
    closeDropdownOnOutsideClick(wrapper: HTMLElement, event: MouseEvent) {
        if (
            this.state.open === true
            && event != null
            && event.target !== this.triggerElement
            && event.target != null
            && event.target instanceof Node // wrapper.contains accepts only Node type
            && wrapper != null
            && !wrapper.contains(event.target)
        ) {
            this.setState({
                open: false,
            });
        }
    }

    componentDidUpdate() {
        if (this.state.open === true) {
            ReactDOM.render(
                (
                    <PopperWrapper
                        {...this.props}
                        handleCloseOthers={this.handleCloseOthers}
                        closeDropdownOnOutsideClick={this.closeDropdownOnOutsideClick}
                        triggerElement={this.triggerElement}
                        close={() => {
                            this.setState({open: false});
                        }}
                    />
                ),
                this.elementForPositioner,
            );
        } else {
            ReactDOM.unmountComponentAtNode(this.elementForPositioner);
        }
    }

    render() {
        // can't use portal, because it causes events to bubble in the original DOM location and not body

        return null;
    }
}
