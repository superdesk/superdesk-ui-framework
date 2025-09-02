import * as React from 'react';
interface ITabList {
    size?: 'normal' | 'large' | 'small';
    theme?: 'light' | 'dark';
    children: Array<any>;
}
interface IState {
    index: number;
}
interface ITab {
    label: string;
}
declare class Tab extends React.PureComponent<ITab> {
    render(): JSX.Element;
}
declare class TabList extends React.PureComponent<ITabList, IState> {
    constructor(props: ITabList);
    private handleChange;
    goTo(label: string): void;
    render(): JSX.Element;
}
export { Tab, TabList };
