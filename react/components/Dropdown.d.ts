import * as React from 'react';
export interface IMenuItem {
    label: string | React.ReactNode;
    icon?: string;
    active?: boolean;
    onSelect(): void;
}
export interface ISubmenu {
    type: 'submenu';
    label: string | React.ReactNode;
    icon?: string;
    items: Array<IMenuItem | ISubmenu | IMenuGroup | 'divider'>;
}
export interface IMenuGroup {
    type: 'group';
    label?: string | React.ReactNode;
    items: Array<IMenuItem | ISubmenu | IMenuGroup | 'divider'>;
}
interface IMenu {
    label?: string | React.ReactNode;
    align?: 'left' | 'right';
    items: Array<IMenuItem | ISubmenu | IMenuGroup | 'divider'>;
    header?: Array<IMenuItem | ISubmenu | IMenuGroup | 'divider'>;
    footer?: Array<IMenuItem | ISubmenu | IMenuGroup | 'divider'>;
    children: React.ReactNode;
    onChange?(event?: any): void;
    maxHeight?: number;
}
export declare const Dropdown: ({ items, header, footer, children, align, onChange, maxHeight }: IMenu) => JSX.Element;
export {};
