import * as React from 'react';
interface IProps {
    items: Array<IItem>;
    side?: 'none' | 'left' | 'right';
}
interface IItem {
    icon?: string;
    active?: boolean;
    title: string;
    onClick(event: any): void;
    onRemove(event: any): void;
}
interface IState {
    index: number;
    closeIndex: number;
    items: Array<IItem>;
}
export declare class BottomNav extends React.PureComponent<IProps, IState> {
    constructor(props: IProps);
    handleClick(indexNumber: number): void;
    handleDelete(indexNumber: number): void;
    render(): JSX.Element;
}
export {};
