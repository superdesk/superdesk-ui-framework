import * as React from 'react';
import { Dropdown } from '@superdesk/primereact/dropdown';
import { IInputWrapper } from './Form/InputWrapper';
interface IProps<T> extends IInputWrapper {
    getItems(searchString: string | null): Promise<Array<T>>;
    value: T;
    getLabel(option: T): string;
    onChange(value: T): void;
    areEqual(a: T, b: T): boolean;
    itemTemplate: React.ComponentType<{
        option: T | null;
    }>;
    valueTemplate?: React.ComponentType<{
        option: T | null;
    }>;
    noResultsFoundMessage: string;
    filterPlaceholder?: string;
    autoFocus?: boolean;
    autoOpen?: boolean;
    width?: 'min' | '100%';
    zIndex?: number;
    'data-test-id'?: string;
}
interface IState<T> {
    options: Array<T>;
    loading: boolean;
    invalid: boolean;
}
/**
 * @deprecated use MultiSelect or TreeSelect
 */
export declare class SelectWithTemplate<T> extends React.Component<IProps<T>, IState<T>> {
    componentRef: Dropdown | null;
    private htmlId;
    constructor(props: IProps<T>);
    componentDidMount(): void;
    render(): JSX.Element;
}
export {};
