import * as React from 'react';
import { ITreeNode } from './TreeSelect';
export declare function getPrefixedItemId(id: string): string;
interface IProps<T> {
    option: ITreeNode<T>;
    selectedItem?: boolean;
    disabledItem?: boolean;
    allowMultiple?: boolean;
    parentCategory?: string | undefined;
    handleTree(event: React.MouseEvent<HTMLLIElement, MouseEvent>, option: ITreeNode<T>): any;
    getLabel(item: T): string;
    getId(item: T): string;
    getBackgroundColor?(item: T): string;
    getBorderColor?(item: T): string;
    optionTemplate?(item: T): React.ComponentType<T> | JSX.Element;
    onClick?: () => void;
    onKeyDown?: () => void;
}
export declare class TreeSelectItem<T> extends React.Component<IProps<T>> {
    render(): JSX.Element;
}
export {};
