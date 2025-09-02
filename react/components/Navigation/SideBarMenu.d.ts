import * as React from 'react';
interface IProps {
    items: Array<IItem | 'divider'>;
    side?: 'none' | 'left' | 'right';
    hover?: boolean;
    onCLick?(): void;
}
interface IItem {
    icon: string;
    size: 'small' | 'big';
    tooltip?: string;
    active?: boolean;
    hover?: boolean;
    onCLick?(): void;
}
interface IState {
    index: number;
    closeIndex: number;
    hover: boolean;
}
export declare class SideBarMenu extends React.PureComponent<IProps, IState> {
    constructor(props: IProps);
    handleClick(indexNumber: number): void;
    handleArrows(): void;
    render(): JSX.Element;
}
export {};
