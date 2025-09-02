import * as React from 'react';
interface IMenuItem {
    id: string;
    label: string;
    route?: string;
    ref?: string;
    onClick?(): void;
}
interface IMenuGroup {
    label: string;
    items: Array<IMenuItem>;
}
interface IMenu {
    className?: string;
    groups: Array<IMenuGroup>;
    activeItemId?: string;
    scrollTo?: string;
    ariaLabel?: string;
    scrollSpy?: string;
    offset?: number;
    reverseItemBorder?: boolean;
    style?: 'default' | 'inverse' | 'blanc';
    size?: 'medium' | 'large';
    onSelect(id: string, route: string): void;
}
interface IState {
    active: string;
}
export declare class LeftMenu extends React.PureComponent<IMenu, IState> {
    constructor(props: IMenu);
    handleClick(item: IMenuItem, event?: React.MouseEvent): void;
    componentDidMount(): void;
    render(): JSX.Element;
}
export {};
