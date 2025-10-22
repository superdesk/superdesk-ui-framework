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
                        <div className="tooltip">
                            {(() => {
                                if (typeof this.props.content === 'string') {
                                    return <span>{this.props.content}</span>;
                                } else {
                                    const Component = this.props.content;

                                    return <Component />;
                                }
                            })()}
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
                            <span {...attributes} style={{display: 'contents'}}>
                                {this.props.children}
                            </span>
                        );
                    }
                }}
            </WithPopover>
        );
    }
}
