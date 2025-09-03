import * as React from 'react';
import {SyntheticEvent} from 'react';
/**
 * Known issues:
 *
 * 1. Menu detaches from trigger element when scrolling.
 * Closing the menu on scroll would fix it,
 * but in case there are more items than
 * can fit in the screen, some wouldn't be selectable.
 *
 * 2. In some cases, menus will be rendered outside of viewport.
 * When the menu is triggered, it will check whether
 * there is more space available on the left or right
 * and will render submenus in that direction.
 * It only checks available space relatively to the trigger element.
 * If there's no space left after n submenus have been opened,
 * it won't change direction.
 *
 * Accessibility features:
 * * ESC closes the last sub-menu or entire menu
 * * When menu is closed via ESC, focus returns to the element that was focused before opening the menu
 * * Focuses the first item on activation
 * * Focuses first sub-menu item when sub-menu opens
 * * ENTER/ESC or arrow keys work for entering/leaving submenus
 */
export type IMenuItem = IMenuBranch | IMenuLeaf | ISeparator;
/**
 * Available icons are listed here:
 * https://ui-framework.superdesk.org/#/components/icons
 */
type IIconName = string;
interface ISeparator {
    separator: true;
}
interface IMenuLeaf {
    label: string | JSX.Element;
    icon?: IIconName;
    onClick(): void;
    disabled?: boolean;
}
interface IMenuBranch {
    label: string | JSX.Element;
    icon?: IIconName;
    children: Array<IMenuItem>;
}
interface IProps {
    items: Array<IMenuItem>;
    children: (toggle: (event: SyntheticEvent) => void) => JSX.Element;
    'data-test-id'?: string;
}
export declare class Menu extends React.Component<IProps, {}> {
    private menu;
    private focusedBefore;
    private zIndex;
    constructor(props: IProps);
    private toPrimeReactInterface;
    private toggle;
    private close;
    render(): JSX.Element;
}
export {};
