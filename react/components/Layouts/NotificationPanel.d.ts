import * as React from 'react';
interface IPropsContainer {
    children?: React.ReactNode;
    id?: string;
    theme?: 'light' | 'dark';
    open?: boolean;
}
declare class NotificationPanelContainer extends React.PureComponent<IPropsContainer> {
    render(): JSX.Element;
}
interface IPropsHeader {
    headerTitle?: string;
    onClick(): void;
}
declare class NotificationPanelHeader extends React.PureComponent<IPropsHeader> {
    render(): JSX.Element;
}
interface IPropsContent {
    children?: React.ReactNode;
}
declare class NotificationPanelContent extends React.PureComponent<IPropsContent> {
    render(): JSX.Element;
}
interface IPropsFooter {
    children?: React.ReactNode;
    footerContent?: boolean;
}
declare class NotificationPanelFooter extends React.PureComponent<IPropsFooter> {
    render(): JSX.Element;
}
interface IProps {
    header: React.ReactNode;
    footer?: React.ReactNode;
    children?: React.ReactNode;
    headerTitle?: string;
    poweredBy?: string;
    footerContent?: boolean;
    open?: boolean;
    theme?: 'light' | 'dark';
    onClick(): void;
}
export default class NotificationPanel extends React.PureComponent<IProps> {
    render(): JSX.Element;
}
export { NotificationPanel, NotificationPanelContainer, NotificationPanelHeader, NotificationPanelContent, NotificationPanelFooter, };
