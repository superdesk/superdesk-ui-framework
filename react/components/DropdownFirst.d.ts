import * as React from 'react';
interface IProps {
    name: string;
    align?: 'left' | 'right';
    side?: 'left' | 'right';
    icon?: string;
    navDropdown?: boolean;
    level?: boolean;
    headerFooter?: boolean;
    children: React.ReactNode;
}
interface IPropsItem {
    text: string;
    noLink?: boolean;
    icon?: string;
    onSelect(): void;
    children?: never;
}
interface IPropsLabel {
    text: string;
    children?: never;
}
interface IPropsMenu {
    title: string;
    children: React.ReactNode;
}
export declare const DropdownFirst: {
    ({name, align, side, level, icon, headerFooter, navDropdown, children}: IProps): JSX.Element;
    Item: ({text, icon, noLink, onSelect}: IPropsItem) => JSX.Element;
    Divider: ({}: {}) => JSX.Element;
    Label: ({text}: IPropsLabel) => JSX.Element;
    Header: ({title, children}: IPropsMenu) => JSX.Element;
    Body: ({title, children}: IPropsMenu) => JSX.Element;
    Footer: ({title, children}: IPropsMenu) => JSX.Element;
};
export declare const DropdownItem: ({text, icon, noLink, onSelect}: IPropsItem) => JSX.Element;
export declare const DropdownDivider: ({}: {}) => JSX.Element;
export declare const DropdownLabel: ({text}: IPropsLabel) => JSX.Element;
export declare const DropdownHeader: ({title, children}: IPropsMenu) => JSX.Element;
export declare const DropdownBody: ({title, children}: IPropsMenu) => JSX.Element;
export declare const DropdownFooter: ({title, children}: IPropsMenu) => JSX.Element;
export {};
