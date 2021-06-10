import React, {SyntheticEvent} from 'react';
import {TieredMenu} from '@superdesk/primereact/tieredmenu';

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
 * * When menu closes, focus returns to the element that was focused before opening the menu
 * * Focuses the first item on activation
 * * Focuses first sub-menu item when sub-menu opens
 * * ESC closes the last sub-menu or entire menu
 * * ENTER/ESC or arrow keys work for entering/leaving submenus
 */

export type IMenuItem = IMenuBranch | IMenuLeaf | ISeparator;

interface ISeparator {
    separator: true;
}

interface IMenuLeaf {
    label: string;
    icon?: string;
    onClick(): void;
}

interface IMenuBranch {
    label: string;
    icon?: string;
    children: Array<IMenuItem>;
}

interface IProps {
    items: Array<IMenuItem>;
    children: (toggle: (event: SyntheticEvent) => void) => JSX.Element;
}

export class Menu extends React.Component<IProps, {}> {
    private menu: TieredMenu | null;
    private focusedBefore: Element | null;

    constructor(props: IProps) {
        super(props);

        this.menu = null;
        this.focusedBefore = null;

        this.close = this.close.bind(this);
        this.toggle = this.toggle.bind(this);
        this.toPrimeReactInterface = this.toPrimeReactInterface.bind(this);
    }

    toPrimeReactInterface(items: Array<any>): any {
        return items.map((item) => {
            if (item.separator != null) {
                return {separator: true};
            } else if (item.children != null) {
                return {
                    label: item.label,
                    icon: item.icon,
                    items: this.toPrimeReactInterface(item.children),
                };
            } else {
                return {
                    label: item.label,
                    icon: item.icon,
                    command: (event: SyntheticEvent) => {
                        this.close(event);
                        item.onClick();
                    },
                };
            }
        });
    }

    toggle(event: SyntheticEvent) {
        this.menu?.toggle(event);
    }

    close(event: SyntheticEvent) {
        this.menu?.toggle(event);

        if (this.focusedBefore instanceof HTMLElement) {
            this.focusedBefore.focus();
        }
    }

    render() {
        return (
            <div>
                {
                    this.props.children(this.toggle)
                }

                <div
                    onKeyDown={(event) => {
                        if (event.key === 'Escape') {
                            event.stopPropagation();

                            this.close(event);
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
                    />
                </div>
            </div>
        );
    }
}
