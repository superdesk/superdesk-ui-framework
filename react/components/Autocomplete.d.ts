import * as React from 'react';
interface IProps {
    items: Array<any>;
    keyValue?: string;
    minLength?: number;
    value?: string | object;
    label?: string;
    placeholder?: string;
    info?: string;
    error?: string;
    required?: boolean;
    disabled?: boolean;
    invalid?: boolean;
    inlineLabel?: boolean;
    isSearchField?: boolean;
    listItemTemplate?(value: any): any;
    search?(
        searhString: string,
        callback: (result: Array<any>) => void,
    ): {
        cancel: () => void;
    };
    onChange(newValue: string): void;
    onSelect?(suggestion: string): void;
}
interface IState {
    selectedItem: any;
    filteredItems: any;
    invalid: boolean;
    focused: boolean;
}
export declare class Autocomplete extends React.Component<IProps, IState> {
    latestCall?: {
        cancel: () => void;
    };
    constructor(props: IProps);
    htmlId: string;
    search(term: string): void;
    searchItem(event: any): void;
    handleChange(event: {originalEvent: Event; value: any}): void;
    handleSelect(event: {originalEvent: Event; value: any}): void;
    handleInputClear(): void;
    render(): JSX.Element;
}
export {};
