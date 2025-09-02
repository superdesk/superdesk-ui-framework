import * as React from 'react';
interface IProps {
    value?: string;
    type?: 'expanded' | 'collapsed' | 'boxed';
    placeholder: string;
    focused?: boolean;
    boxed?: boolean;
    onSubmit?(value: string | number): void;
}
interface IState {
    inputValue: any;
    type: string;
    focused: boolean;
    boxed?: boolean;
    keyDown?: boolean;
}
export declare class SearchBar extends React.PureComponent<IProps, IState> {
    private inputRef;
    constructor(props: IProps);
    componentDidUpdate(prevProps: any): void;
    componentDidMount: () => void;
    render(): JSX.Element;
}
export {};
