import * as React from 'react';
import {SyntheticEvent} from 'react';

import {TieredMenu} from '@superdesk/primereact/tieredmenu';
import {MenuItem as IPrimeMenuItem} from '@superdesk/primereact/components/menuitem/MenuItem';
import {assertNever} from '../helpers';
import {getNextZIndex} from '../zIndex';

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

function isSeparator(item: IMenuItem): item is ISeparator {
    return (item as any)['separator'] === true;
}

function isMenuLeaf(item: IMenuItem): item is IMenuLeaf {
    return (item as any)['onClick'] != null;
}

function isMenuBranch(item: IMenuItem): item is IMenuBranch {
    return isSeparator(item) !== true && isMenuLeaf(item) !== true;
}

export class Menu extends React.Component<IProps, {}> {
    private menu: TieredMenu | null;
    private focusedBefore: Element | null;
    private zIndex: number = getNextZIndex();

    constructor(props: IProps) {
        super(props);

        this.menu = null;
        this.focusedBefore = null;

        this.close = this.close.bind(this);
        this.toggle = this.toggle.bind(this);
        this.toPrimeReactInterface = this.toPrimeReactInterface.bind(this);
    }

    private toPrimeReactInterface(items: Array<IMenuItem>): Array<IPrimeMenuItem> {
        return items.map((item) => {
            if (isSeparator(item)) {
                return {separator: true};
            } else if (isMenuBranch(item)) {
                return {
                    label: item.label as string,
                    icon: item.icon,
                    items: this.toPrimeReactInterface(item.children),
                };
            } else if (isMenuLeaf(item)) {
                return {
                    label: item.label as string,
                    icon: item.icon,
                    command: (event) => {
                        /**
                         * a click on menu item should not trigger other click handlers
                         * above in the DOM tree. e.g. if menu is inside a clickable list item
                         */
                        event.originalEvent.stopPropagation();

                        this.close(event.originalEvent as unknown as SyntheticEvent);
                        item.onClick();
                    },
                    disabled: item.disabled,
                };
            } else {
                return assertNever(item);
            }
        });
    }

    private toggle(event: SyntheticEvent) {
        this.menu?.toggle(event);
    }

    private close(event: SyntheticEvent) {
        this.menu?.toggle(event);
    }

    render() {
        return (
            <React.Fragment>
                {
                    this.props.children(this.toggle)
                }

                <div
                    onKeyDown={(event) => {
                        if (event.key === 'Escape') {
                            event.stopPropagation();

                            this.close(event);

                            if (this.focusedBefore instanceof HTMLElement) {
                                this.focusedBefore.focus();
                            }
                        }
                    }}
                >
                    <TieredMenu
                        popup
                        model={this.toPrimeReactInterface(this.props.items)}
                        ref={(el) => this.menu = el}
                        appendTo={document.body}
                        onShow={() => {
                            this.focusedBefore = document.activeElement;

                            const firstMenuItem = document.querySelectorAll('.p-tieredmenu [role="menuitem"]')[0];

                            if (firstMenuItem instanceof HTMLElement) {
                                firstMenuItem.focus();
                            }
                        }}
                        data-test-id={this.props['data-test-id'] ?? 'menu'}
                        zIndex={this.zIndex}
                    />
                </div>
            </React.Fragment>
        );
    }
}
