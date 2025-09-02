import * as React from 'react';
interface IProps {
    activeTab: string | null;
    onActiveTabChange(val: string | null): void;
    items: Array<ISideBarTab | 'divider'>;
    side?: 'none' | 'left' | 'right';
    disabled?: boolean;
    ['data-test-id']?: string;
}
export interface ISideBarTab {
    id: string;
    icon: string;
    size: 'small' | 'big';
    tooltip?: string;
    badgeValue?: string;
}
export declare class SideBarTabs extends React.PureComponent<IProps> {
    constructor(props: IProps);
    componentDidMount(): void;
    handleClick(item: ISideBarTab): void;
    render(): JSX.Element;
}
export {};
