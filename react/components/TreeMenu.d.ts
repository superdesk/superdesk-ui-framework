import * as React from 'react';
interface IState<T> {
    options: Array<ITreeMenuNode<T>>;
    openDropdown: boolean;
    activeTree: Array<Array<ITreeMenuNode<T>>>;
    buttonTree: Array<ITreeMenuNode<T>>;
    buttonValue: ITreeMenuNode<T> | null;
    filterArr: Array<ITreeMenuNode<T>>;
    searchFieldValue: string;
    firstBranchOptions: Array<ITreeMenuNode<T>>;
    buttonTarget: Array<string>;
}
interface IProps<T> {
    searchPlaceholder?: string;
    singleLevelSearch?: boolean;
    'data-test-id'?: string;
    getOptions?(): Array<ITreeMenuNode<T>>;
    getLabel(item: T): string;
    getId(item: T): string;
    getBackgroundColor?(item: T): string;
    getBorderColor?(item: T): string;
    optionTemplate?(item: T): React.ComponentType<T> | JSX.Element;
    children: (toggle: (event: React.SyntheticEvent) => void) => JSX.Element;
}
interface IParent<T> {
    value: T;
    children: Array<ITreeMenuNode<T>>;
}
interface IChildren<T> {
    value: T;
    disabled?: boolean;
    onSelect(): void;
}
export type ITreeMenuNode<T> = IParent<T> | IChildren<T>;
export declare class TreeMenu<T> extends React.Component<IProps<T>, IState<T>> {
    private dropdownRef;
    private ref;
    private openDropdownRef;
    private treeMenuRef;
    private inputRef;
    private popperInstance;
    private zIndex;
    constructor(props: IProps<T>);
    inputFocus: () => void;
    listNavigation: () => void;
    onMouseDown: (event: MouseEvent) => void;
    onKeyDown: (e: KeyboardEvent) => void;
    onPressEsc: (event: KeyboardEvent) => void;
    componentDidMount: () => void;
    componentWillUnmount(): void;
    componentDidUpdate(prevProps: Readonly<IProps<T>>, prevState: Readonly<IState<T>>): void;
    toggleMenu(): void;
    toggle(event: React.SyntheticEvent): void;
    handleMultiLevel(item: ITreeMenuNode<T>): void;
    handleButton(item: ITreeMenuNode<T>): void;
    handleTree(_event: React.MouseEvent<HTMLLIElement, MouseEvent>, option: ITreeMenuNode<T>): void;
    backButton(): void;
    recursion(arr: Array<ITreeMenuNode<T>>): void;
    filteredItem(arr: Array<ITreeMenuNode<T>>): JSX.Element | JSX.Element[];
    render(): JSX.Element;
}
export {};
