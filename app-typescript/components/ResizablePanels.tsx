import * as React from 'react';
import {ImperativePanelHandle, Panel, PanelGroup, PanelResizeHandle} from '@superdesk/react-resizable-panels';

interface IPanelSize {
    min?: number; // percent
    max?: number; // percent
    default?: number; // percent
}

interface IProps {
    /**
     * component will set primary dimension(width when horizontal, height when vertical) to 100%
     * parent component has to support this
     */
    direction: 'horizontal' | 'vertical';

    primarySize?: IPanelSize;
    secondarySize?: IPanelSize;

    /**
     * Only 2 items are supported to keep API surface minimal so it's easy to switch to another library if needed.
     */
    children: [React.ReactNode, React.ReactNode];
}


/**
 Features:
 * No absolute positioning is used
 * Component height is fully dynamic and adjusts according to children inside panes
 * Library supports an arbitrary number of panes. We are not using it to keep API minimal.
 * Drawback: only works with percent units. Can be made to work with pixels
 * by creating a wrapper that measures available space and converts to percent.
 */
export class ResizablePanels extends React.PureComponent<IProps> {
    private primaryPanelRef: ImperativePanelHandle | null;
    private secondaryPanelRef: ImperativePanelHandle | null;

    constructor(props: IProps) {
        super(props);

        this.primaryPanelRef = null;
        this.secondaryPanelRef = null;
    }

    render(): React.ReactNode {
        const {direction, primarySize, secondarySize, children} = this.props;
        const separatorDimensions: React.CSSProperties = direction === 'horizontal'
            ? {width: 3, height: '100%'}
            : {height: 3, width: '100%'};

        // Sometimes second panel is conditional. Checking here is more convenient.
        if (children.some((child) => child === false || child == null)) {
            return children;
        }

        return (
            <PanelGroup direction={direction}>
                <Panel
                    id="primary"
                    minSize={primarySize?.min}
                    maxSize={primarySize?.max}
                    defaultSize={primarySize?.default}
                    ref={(panelRef) => {
                        this.primaryPanelRef = panelRef;
                    }}
                >
                    {children[0]}
                </Panel>

                <PanelResizeHandle>
                    <div
                        style={{background: 'var(--color-text-lighter)', ...separatorDimensions}}
                        onDoubleClick={() => {
                            if (primarySize?.default != null) {
                                this.primaryPanelRef?.resize(primarySize.default);
                            } else if (secondarySize?.default != null) {
                                this.secondaryPanelRef?.resize(secondarySize.default);
                            }
                        }}
                    />
                </PanelResizeHandle>

                <Panel
                    id="secondary"
                    minSize={secondarySize?.min}
                    maxSize={secondarySize?.max}
                    defaultSize={secondarySize?.default}
                    ref={(panelRef) => {
                        this.secondaryPanelRef = panelRef;
                    }}
                >
                    {children[1]}
                </Panel>
            </PanelGroup>
        );
    }
}
