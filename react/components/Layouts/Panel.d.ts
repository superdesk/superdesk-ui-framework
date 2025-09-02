import * as React from 'react';
interface IPropsPanel {
    children?: React.ReactNode;
    side?: 'left' | 'right';
    theme?: 'light' | 'dark';
    className?: string;
    size?: 'xx-small' | 'x-small' | 'small' | 'medium' | 'large' | 'x-large' | 'xx-large' | 'xxx-large' | 'full' | 'auto' | {
        custom: React.CSSProperties['width'];
    };
    background?: 'transparent' | 'light' | 'grey';
    open?: boolean;
    ['data-test-id']?: string;
}
export default class Panel extends React.PureComponent<IPropsPanel> {
    render(): JSX.Element;
}
interface IPropsPanelHeader {
    color?: 'light' | 'darker' | 'blueGrey' | 'blueGreyDarker';
    title?: string;
    theme?: 'light-ui' | 'dark-ui';
    className?: string;
    onClose?(): void;
    iconButtons?: Array<React.ReactNode>;
}
declare class PanelHeader extends React.PureComponent<IPropsPanelHeader> {
    private zIndex;
    constructor(props: IPropsPanelHeader);
    render(): JSX.Element;
}
interface IPropsPanelContent {
    loading?: boolean;
    empty?: boolean;
    emptyTemplate?: React.ReactNode;
}
declare class PanelContent extends React.PureComponent<IPropsPanelContent> {
    render(): JSX.Element;
}
interface IPropsContentBlock {
    children?: React.ReactNode;
    flex?: boolean;
    padding?: '0' | '1-5' | '3';
    className?: string;
}
declare class PanelContentBlock extends React.PureComponent<IPropsContentBlock> {
    render(): JSX.Element;
}
declare class PanelFooter extends React.PureComponent {
    render(): JSX.Element;
}
interface IPropsSlidingToolbar {
    right?: boolean;
    open?: boolean;
}
declare class PanelHeaderSlidingToolbar extends React.PureComponent<IPropsSlidingToolbar> {
    render(): JSX.Element;
}
export interface IPanelTools {
    icon: string;
    title: string;
    onClick(): void;
    ariaValue: string;
}
interface IPropsPanelTools {
    children?: React.ReactNode;
    tools: Array<IPanelTools>;
}
declare class PanelTools extends React.PureComponent<IPropsPanelTools> {
    render(): JSX.Element;
}
export { Panel, PanelHeader, PanelContent, PanelContentBlock, PanelFooter, PanelHeaderSlidingToolbar, PanelTools };
