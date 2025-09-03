import * as React from 'react';
import {IInputWrapper} from '../Form/InputWrapper';
import {DropResult} from 'react-beautiful-dnd';
interface IState<T> {
    value: Array<T>;
    options: Array<ITreeNode<T>>;
    firstBranchOptions: Array<ITreeNode<T>>;
    openDropdown: boolean;
    activeTree: Array<Array<ITreeNode<T>>>;
    filterArr: Array<ITreeNode<T>>;
    searchFieldValue: string;
    buttonTree: Array<ITreeNode<T>>;
    buttonValue: ITreeNode<T> | null;
    buttonMouseEvent: boolean;
    loading: boolean;
    buttonTarget: Array<string>;
}
interface IPropsBase<T> extends IInputWrapper {
    value?: Array<T>;
    selectBranchWithChildren?: boolean;
    readOnly?: boolean;
    width?: 'medium' | 'match-input';
    inputWidth?: '100%';
    allowMultiple?: boolean;
    loading?: boolean;
    singleLevelSearch?: boolean;
    placeholder?: string;
    searchPlaceholder?: string;
    noResultsFoundMessage?: string;
    dropdownInitiallyOpen?: boolean;
    sortable?: boolean;
    'data-test-id'?: string;
    getLabel(item: T): string;
    getId(item: T): string;
    getBackgroundColor?(item: T): string;
    getBorderColor?(item: T): string;
    optionTemplate?(item: T): React.ComponentType<T> | JSX.Element;
    valueTemplate?(
        item: T,
        Wrapper: React.ComponentType<{
            backgroundColor?: string;
        }>,
    ): React.ComponentType<T> | JSX.Element;
    onChange(e: Array<T>): void;
}
interface IPropsSync<T> extends IPropsBase<T> {
    kind: 'synchronous';
    getOptions(): Array<ITreeNode<T>>;
}
type ICancelFn = () => void;
interface IPropsAsync<T> extends IPropsBase<T> {
    kind: 'asynchronous';
    getOptions?(): Array<ITreeNode<T>>;
    searchOptions(term: string, callback?: (options: Array<ITreeNode<T>>) => void): ICancelFn;
}
type IProps<T> = IPropsSync<T> | IPropsAsync<T>;
export interface ITreeNode<T> {
    value: T;
    children?: Array<ITreeNode<T>>;
}
export declare class TreeSelect<T> extends React.Component<IProps<T>, IState<T>> {
    private dropdownRef;
    private ref;
    private inputRef;
    private categoryButtonRef;
    private openDropdownRef;
    private treeSelectRef;
    private htmlId;
    private popperInstance;
    private zIndex;
    private changesFromOutside;
    constructor(props: IProps<T>);
    inputFocus: () => void;
    listNavigation: () => void;
    buttonFocus: () => void;
    onMouseDown: (event: MouseEvent) => void;
    onKeyDown: (e: KeyboardEvent) => void;
    onPressEsc: (event: KeyboardEvent) => void;
    componentDidMount: () => void;
    componentWillUnmount(): void;
    componentDidUpdate(prevProps: Readonly<IProps<T>>, prevState: Readonly<IState<T>>): void;
    toggleMenu(): void;
    removeClick(i: number): void;
    handleMultiLevel(item: ITreeNode<T>): void;
    handleButton(item: ITreeNode<T>): void;
    handleValue(event: React.MouseEvent<HTMLLIElement, MouseEvent>, item: ITreeNode<T>): void;
    handleBranchValue(event: React.MouseEvent<HTMLButtonElement, MouseEvent>, item: ITreeNode<T>): void;
    handleTree(event: React.MouseEvent<HTMLLIElement, MouseEvent>, option: ITreeNode<T>): void;
    backButton(): void;
    recursion(arr: Array<ITreeNode<T>>): void;
    filteredItem(arr: Array<ITreeNode<T>>): JSX.Element | JSX.Element[] | undefined;
    branchButton(buttonValue: ITreeNode<T>): JSX.Element;
    private debounceFn;
    private ICancelFn;
    handleDebounce(): void;
    onDragEnd(result: DropResult): void;
    private renderItemContent;
    render(): JSX.Element;
}
export {};
