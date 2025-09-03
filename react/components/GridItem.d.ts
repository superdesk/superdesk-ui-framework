import * as React from 'react';
declare class GridItemMedia extends React.PureComponent {
    render(): JSX.Element;
}
declare class GridItemContent extends React.PureComponent {
    render(): JSX.Element;
}
declare class GridItemContentBlock extends React.PureComponent {
    render(): JSX.Element;
}
declare class GridItemFooter extends React.PureComponent {
    render(): JSX.Element;
}
interface IPropsFooterBlock {
    align?: 'left' | 'right';
}
declare class GridItemFooterBlock extends React.PureComponent<IPropsFooterBlock> {
    static defaultProps: {
        align: string;
    };
    render(): JSX.Element;
}
interface IPropsFooterActions {
    autohide?: boolean;
}
declare class GridItemFooterActions extends React.PureComponent<IPropsFooterActions> {
    static defaultProps: {
        autohide: boolean;
    };
    render(): JSX.Element;
}
interface IPropsTime {
    time: string;
}
declare class GridItemTime extends React.PureComponent<IPropsTime> {
    render(): JSX.Element;
}
declare class GridItemTitle extends React.PureComponent {
    render(): JSX.Element;
}
declare class GridItemSlug extends React.PureComponent {
    render(): JSX.Element;
}
declare class GridItemText extends React.PureComponent {
    render(): JSX.Element;
}
declare class GridItemTopActions extends React.PureComponent {
    render(): JSX.Element;
}
declare class GridItemCheckWrapper extends React.PureComponent {
    render(): JSX.Element;
}
interface IProps {
    locked?: boolean;
    fetched?: boolean;
    onClick?(): void;
    itemtype?: 'audio' | 'composite' | 'file' | 'graphic' | 'photo' | 'slideshow' | 'text' | 'video' | string;
    status?: Array<'actioning' | 'selected' | 'activated' | string>;
}
export default class GridItem extends React.PureComponent<IProps> {
    static defaultProps: {
        locked: boolean;
        fetched: boolean;
        itemtype: string;
        status: never[];
    };
    render(): JSX.Element;
}
export {
    GridItem,
    GridItemContent,
    GridItemMedia,
    GridItemFooter,
    GridItemContentBlock,
    GridItemTime,
    GridItemTitle,
    GridItemText,
    GridItemSlug,
    GridItemFooterBlock,
    GridItemFooterActions,
    GridItemTopActions,
    GridItemCheckWrapper,
};
