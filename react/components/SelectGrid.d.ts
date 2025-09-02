import * as React from 'react';
import { OverlayPanel } from '@superdesk/primereact/overlaypanel';
/**
 * @ngdoc react
 * @name SelectGrid
 * @description searchable select component with grid view of items
 */
export interface IItem {
    value: string;
    label: string;
    [extra: string]: any;
}
interface IProps {
    getItems(searchString: string | null): Promise<Array<IItem>>;
    onChange(value: IItem): void;
    itemTemplate: React.ComponentType<{
        item: IItem | null;
    }>;
    triggerTemplate: React.ComponentType<{
        onClick: (e: React.SyntheticEvent) => void;
    }>;
    label: string;
    filterPlaceholder?: string;
}
interface IState {
    items: Array<IItem>;
    loading: boolean;
}
export declare class SelectGrid extends React.PureComponent<IProps, IState> {
    htmlId: string;
    buttonContainer: React.RefObject<HTMLDivElement>;
    overlayPanel: React.RefObject<OverlayPanel>;
    searchInput: React.RefObject<HTMLInputElement>;
    gridContainer: React.RefObject<HTMLDivElement>;
    constructor(props: IProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    mountPopup: (event?: React.SyntheticEvent) => void;
    search: (event: React.ChangeEvent<HTMLInputElement>) => void;
    loadItems: (searchString?: string | null) => void;
    hidePopupAndRefocus: () => void;
    select: (item: IItem) => void;
    getItemElement: (index: number) => HTMLDivElement | null | undefined;
    handleKeydown: (event: KeyboardEvent) => void;
    render(): JSX.Element;
}
export {};
