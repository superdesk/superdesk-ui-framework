import * as React from 'react';
import {Placement} from '@popperjs/core';
import {WithPopover} from './WithPopover';

export interface IPropsTooltipV2 {
    content: string | React.ComponentType;
    placement?: Placement;

    /**
     * If unsure - use ReactNode.
     * Function is for advanced use cases where it's needed to avoid the wrapping span.
     */
    children: React.ReactNode | ((options: {attributes: React.HTMLAttributes<HTMLElement>}) => React.ReactNode);
}

/**
 * Component is intentionally not exported.
 * It will be moved into the components/Tooltip.tsx when legacy support is dropped there.
 */
export class TooltipV2 extends React.PureComponent<IPropsTooltipV2> {
    render() {
        return (
            <WithPopover
                placement={this.props.placement ?? 'top'}
                component={() => {
                    return (
                        <div data-theme="dark-ui">
                            <div
                                style={{
                                    background: 'var(--color-bg-100)',
                                    color: 'var(--color-text)',
                                    borderRadius: 'var(--b-radius--medium)',
                                    paddingInline: 'var(--space--0-5)',
                                    fontSize: 'var(--text-size-x-small)',
                                    margin: 2,
                                }}
                            >
                                {(() => {
                                    if (typeof this.props.content === 'string') {
                                        return <span>{this.props.content}</span>;
                                    } else {
                                        const Component = this.props.content;

                                        return <Component />;
                                    }
                                })()}
                            </div>
                        </div>
                    );
                }}
            >
                {(toggle) => {
                    const attributes: React.HTMLAttributes<HTMLElement> = {
                        onMouseOver: (event) => {
                            toggle(event.target as HTMLElement);
                        },
                        onMouseOut: (event) => {
                            toggle(event.target as HTMLElement);
                        },
                    };

                    if (typeof this.props.children === 'function') {
                        return this.props.children({attributes});
                    } else {
                        return (
                            <span {...attributes} style={{display: 'inline-flex'}}>
                                {this.props.children}
                            </span>
                        );
                    }
                }}
            </WithPopover>
        );
    }
}
