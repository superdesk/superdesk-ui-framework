import * as React from 'react';
import { DropResult } from 'react-beautiful-dnd';
import { IMenuItem, ISubmenu, IMenuGroup } from '../Dropdown';
export interface IProps {
    array: Array<IPropsArrayItem>;
    addItem?: boolean;
    dragAndDrop?: boolean;
    className?: string;
    readOnly?: boolean;
    showDragHandle?: 'always' | 'onHover' | 'none';
    append?: boolean;
    onDrag?(start: number, end: number): void;
    onAddItem?(index: number, item?: IPropsArrayItem): void;
    itemsDropdown?(index?: number): Array<IMenuItem | ISubmenu | IMenuGroup | 'divider'>;
}
export interface IPropsArrayItem {
    start?: React.ReactNode;
    center?: React.ReactNode;
    end?: React.ReactNode;
    action?: React.ReactNode;
    hexColor?: string;
    locked?: boolean;
    positionLocked?: boolean;
    selected?: boolean;
    onClick?(): void;
    onDoubleClick?(): void;
}
interface IState {
    items: Array<IPropsArrayItem>;
}
declare class TableList extends React.PureComponent<IProps, IState> {
    constructor(props: IProps);
    componentDidMount(): void;
    componentDidUpdate(prevProps: IProps): void;
    onDragEnd(result: DropResult): void | null;
    dropDown(): JSX.Element;
    render(): JSX.Element | null;
}
export interface IPropsItem {
    start?: React.ReactNode;
    center?: React.ReactNode;
    end?: React.ReactNode;
    action?: React.ReactNode;
    addItem?: boolean;
    dragAndDrop?: boolean;
    hexColor?: string;
    showDragHandle?: 'always' | 'onHover' | 'none';
    locked?: boolean;
    positionLocked?: boolean;
    selected?: boolean;
    onClick?(): void;
    onDoubleClick?(): void;
    onSelect?(): void;
    onAddItem?(e: number): void;
    itemsDropdown?(index?: number): Array<IMenuItem | ISubmenu | IMenuGroup | 'divider'>;
}
declare class TableListItem extends React.PureComponent<IPropsItem> {
    private multiClickHandler;
    constructor(props: IPropsItem);
    onActionMenuClick: (event: React.MouseEvent<HTMLElement>) => void;
    render(): JSX.Element;
}
export { TableList, TableListItem };
