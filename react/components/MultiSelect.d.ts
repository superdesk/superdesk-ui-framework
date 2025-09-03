import * as React from 'react';
import {IInputWrapper} from './Form/InputWrapper';
interface IProps<T> extends IInputWrapper {
    value: Array<T>;
    options: Array<T>;
    placeholder?: string;
    emptyFilterMessage?: string;
    filterPlaceholder?: string;
    maxSelectedLabels?: number;
    selectedItemsLabel?: string;
    ariaLabelledBy?: string;
    tabIndex?: string | any;
    filter?: boolean;
    showClear?: boolean;
    showSelectAll?: boolean;
    optionLabel: (option: T) => string;
    itemTemplate?(item: T): JSX.Element | undefined;
    selectedItemTemplate?(value: T): JSX.Element | undefined;
    onChange(newValue: Array<T>): void;
}
interface IState<T> {
    options: Array<T>;
    value: Array<T>;
    invalid: boolean;
}
export declare class MultiSelect<T> extends React.Component<IProps<T>, IState<T>> {
    private htmlId;
    private zIndex;
    constructor(props: IProps<T>);
    render(): JSX.Element;
}
export {};
