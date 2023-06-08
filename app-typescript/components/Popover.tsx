import {PopperOptions} from 'popper.js';
import * as React from 'react';
import {Positioner} from './_Positioner';

interface IProps {
    title: string;
    triggerSelector: string; // CSS selector for an element that will be used to toggle the popover.
    displayCloseButton?: boolean; // defaults to true
    placement?: PopperOptions['placement']; // defaults to auto
}

export class Popover extends React.Component<IProps> {
    render() {
        return (
            <Positioner
                triggerSelector={this.props.triggerSelector}
                placement={this.props.placement ?? 'auto'}
                className="sd-popover"
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
