import {PopperOptions} from 'popper.js';
import * as React from 'react';
import {Positioner} from './_Positioner';

interface IProps {
    title: string;
    triggerSelector: string; // CSS selector for an element that will be used to toggle the popover.
    displayCloseButton?: boolean; // defaults to true
    placement?: PopperOptions['placement']; // defaults to auto
    zIndex?: number;
}

export class Popover extends React.Component<IProps> {
    render() {
        return (
            <Positioner
                triggerSelector={this.props.triggerSelector}
                placement={this.props.placement ?? 'auto'}
                className="sd-popover"
                zIndex={this.props.zIndex}
            >
                <div className="sd-popover--header">
                    <h4 className="sd-popover--title">{this.props.title}</h4>

                    {
                        (this.props.displayCloseButton ?? true) && (
                            <button
                                className="sd-popover--close"
                                style={{marginLeft: 10, opacity: 0.5}}
                                onClick={() => {
                                    const el = document.querySelector(this.props.triggerSelector);

                                    if (el instanceof HTMLElement) {
                                        el.click();
                                    }
                                }}
                            >
                                <i className="icon-close-small icon--white" />
                            </button>
                        )
                    }
                </div>

                <div>
                    {this.props.children}
                </div>
            </Positioner>
        );
    }
}
