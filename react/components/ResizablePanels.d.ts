import * as React from 'react';
interface IPanelSize {
    min?: number;
    max?: number;
    default?: number;
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
export declare class ResizablePanels extends React.PureComponent<IProps> {
    private primaryPanelRef;
    private secondaryPanelRef;
    constructor(props: IProps);
    render(): React.ReactNode;
}
export {};
