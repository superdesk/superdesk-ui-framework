import * as React from 'react';
declare class BoxedListContentRow extends React.PureComponent {
    render(): JSX.Element;
}
declare class BoxedListFooter extends React.PureComponent {
    render(): JSX.Element;
}
interface IPropsActions {
    children?: React.ReactNode;
    slideIn?: boolean;
}
declare class BoxedListActions extends React.PureComponent<IPropsActions> {
    rootElement?: HTMLDivElement | null;
    render(): JSX.Element;
}
interface IPropsItem {
    media?: React.ReactNode;
    footer?: React.ReactNode;
    actions?: React.ReactNode;
    children?: React.ReactNode;
    density?: 'compact' | 'comfortable' | 'loose';
    type?: 'default' | 'primary' | 'success' | 'warning' | 'alert' | 'highlight';
    clickable?: boolean;
    alignVertical?: 'start' | 'center';
    slideInActions?: boolean;
    coloredBg?: boolean;
    selected?: boolean;
    unread?: boolean;
    onClick?(): void;
}
declare class BoxedListItem extends React.PureComponent<IPropsItem> {
    private actionsRef;
    constructor(props: IPropsItem);
    handleClick(event: React.MouseEvent<HTMLLIElement, MouseEvent>): void;
    render(): JSX.Element;
}
interface IProps {
    children?: React.ReactNode;
    density?: 'compact' | 'comfortable';
    className?: string;
    style?: React.CSSProperties;
}
declare class BoxedList extends React.PureComponent<IProps> {
    render(): JSX.Element;
}
export {BoxedList, BoxedListItem, BoxedListContentRow, BoxedListActions, BoxedListFooter};
