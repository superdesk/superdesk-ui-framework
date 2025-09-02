import * as React from 'react';
interface IPropsContainer {
    children?: React.ReactNode;
    id?: string;
    theme?: 'light' | 'dark';
}
declare class MainMenuContainer extends React.PureComponent<IPropsContainer> {
    render(): JSX.Element;
}
interface IPropsHeader {
    headerTitle?: string;
}
declare class MainMenuHeader extends React.PureComponent<IPropsHeader> {
    render(): JSX.Element;
}
interface IPropsContent {
    children?: React.ReactNode;
}
declare class MainMenuContent extends React.PureComponent<IPropsContent> {
    render(): JSX.Element;
}
interface IPropsFooter {
    children?: React.ReactNode;
    poweredBy?: string;
    footerContent?: boolean;
}
declare class MainMenuFooter extends React.PureComponent<IPropsFooter> {
    render(): JSX.Element;
}
interface IProps {
    header: React.ReactNode;
    footer?: React.ReactNode;
    children?: React.ReactNode;
    headerTitle?: string;
    poweredBy?: string;
    footerContent?: boolean;
}
export default class MainMenu extends React.PureComponent<IProps> {
    render(): JSX.Element;
}
export { MainMenu, MainMenuContainer, MainMenuHeader, MainMenuContent, MainMenuFooter };
