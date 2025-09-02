import * as React from 'react';
export type HeaderPadding = {
    inlineStart?: React.CSSProperties['padding'];
    inlineEnd?: React.CSSProperties['padding'];
    top?: React.CSSProperties['padding'];
    bottom?: React.CSSProperties['padding'];
};
interface IProps {
    toolBar?: React.ReactNode;
    authoringMain?: React.ReactNode;
    authoringHeader?: React.ReactNode;
    authoringBookmarks?: React.ReactNode;
    headerCollapsed?: boolean;
    hideCollapseButton?: boolean;
    headerPadding?: HeaderPadding;
    toolbarCustom?: boolean;
    noPaddingForContent?: boolean;
}
export declare class AuthoringMain extends React.PureComponent<IProps> {
    render(): JSX.Element;
}
export {};
