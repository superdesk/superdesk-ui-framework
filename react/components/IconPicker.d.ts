import * as React from 'react';
import {IItem} from './SelectGrid';
interface IProps {
    label?: string;
    filterPlaceholder?: string;
    translateFunction?: (text: string) => string;
    value: string;
    onChange(icon: string): void;
}
interface IState {
    icons: Array<IItem>;
}
export declare class IconPicker extends React.PureComponent<IProps, IState> {
    constructor(props: IProps);
    componentDidMount(): void;
    getItems: (searchString: string | null) => Promise<Array<IItem>>;
    onChange: (item: IItem) => void;
    triggerTemplate: (props: {onClick: (e: React.SyntheticEvent) => void}) => JSX.Element;
    itemTemplate: ({item}: {item: IItem | null}) => JSX.Element | null;
    render(): JSX.Element;
}
export {};
