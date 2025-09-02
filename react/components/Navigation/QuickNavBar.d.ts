import * as React from 'react';
interface IProps {
    items: Array<IItem | 'divider'>;
    side?: 'none' | 'left' | 'right';
    scrollSpy?: string;
    offset?: number;
}
interface IItem {
    icon: string;
    tooltip?: string;
    id?: string;
    onClick?(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
}
interface IState {
    index: number;
    closeIndex: number;
    arr: Array<string>;
}
export declare class QuickNavBar extends React.PureComponent<IProps, IState> {
    constructor(props: IProps);
    handleClick(item: IItem, indexNumber: number, event: any): void;
    render(): JSX.Element;
}
export {};
