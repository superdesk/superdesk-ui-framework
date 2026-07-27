import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {createPopper} from '@popperjs/core';
import {useId} from 'react-id-generator';
import {getNextZIndex} from './../zIndex';

export interface IMenuItem {
    label: string | React.ReactNode;
    icon?: string;
    active?: boolean;
    onSelect(): void;
}

interface IMenuItemRes extends IMenuItem {
    onChange?(event?: any): void;
}

export type IMenuElement = IMenuItem | ISubmenu | IMenuGroup | 'divider';

export interface ISubmenu {
    type: 'submenu';
    label: string | React.ReactNode;
    icon?: string;
    items: Array<IMenuElement>;
}

export interface IMenuGroup {
    type: 'group';
    label?: string | React.ReactNode;
    items: Array<IMenuElement>;
}

interface IMenu {
    label?: string | React.ReactNode;
    align?: 'left' | 'right';
    items: Array<IMenuElement>;
    header?: Array<IMenuElement>;
    footer?: Array<IMenuElement>;
    children: React.ReactNode;
    onChange?(event?: any): void;
    maxHeight?: number;
}

const DROPDOWN_ID_CONTAINER = 'sd-dropdown-constainer';

function ensureDropdownContainer(): HTMLElement {
    let placeholder = document.getElementById(DROPDOWN_ID_CONTAINER);

    if (!placeholder) {
        placeholder = document.createElement('div');
        placeholder.id = DROPDOWN_ID_CONTAINER;
        placeholder.style.position = 'absolute';
        placeholder.style.top = '0';
        placeholder.style.left = '0';
        placeholder.style.width = '1px';
        placeholder.style.height = '1px';
        placeholder.setAttribute('data-test-id', 'dropdown-overlay');
        document.body.appendChild(placeholder);
    }

    return placeholder;
}

export const Dropdown = ({items, header, footer, children, align, onChange, maxHeight}: IMenu) => {
    const [zIndex] = React.useState(getNextZIndex);
    const [open, setOpen] = React.useState(false);
    const [menuID] = useId();
    const menuRef = React.useRef<HTMLElement | null>(null);
    const buttonRef = React.useRef<HTMLElement | null>(null);

    // Callback refs so the same ref can be attached to either element type
    // rendered by each branch below (ul/div for the menu, div/button for the toggle).
    const setMenuRef = React.useCallback((element: HTMLElement | null) => {
        menuRef.current = element;
    }, []);
    const setButtonRef = React.useCallback((element: HTMLElement | null) => {
        buttonRef.current = element;
    }, []);

    // Any click closes the menu — including clicks on menu items, which defer
    // their `onSelect` so the menu is gone by the time it runs.
    React.useEffect(() => {
        if (!open) {
            return;
        }

        const closeMenu = () => setOpen(false);

        document.addEventListener('click', closeMenu);

        return () => document.removeEventListener('click', closeMenu);
    }, [open]);

    React.useLayoutEffect(() => {
        const toggle = buttonRef.current;
        const menu = menuRef.current;

        if (!open || toggle == null || menu == null) {
            return;
        }

        const popper = createPopper(toggle, menu, {
            placement: align === 'right' ? 'bottom-end' : 'bottom-start',
            strategy: 'fixed',
        });

        menu.getElementsByTagName('button')[0]?.focus();

        return () => popper.destroy();
    }, [open, align]);

    function each(item: IMenuElement, index: number): React.ReactNode {
        if (item === 'divider') {
            return <li className="dropdown__menu-divider" key={index} />;
        }

        if ('type' in item && item.type === 'submenu') {
            // Empty submenu definitions are treated as plain items so we never
            // portal an empty menu panel.
            if (item.items.length === 0) {
                const asItem = item as Partial<IMenuItem>;

                return (
                    <DropdownItem
                        key={index}
                        label={item.label}
                        icon={item.icon}
                        active={asItem.active}
                        onSelect={asItem.onSelect ?? (() => undefined)}
                        onChange={onChange}
                    />
                );
            }

            return (
                <DropdownItemWithSubmenu
                    key={index}
                    item={item}
                    zIndex={zIndex}
                    subMenuItems={item.items.map(each)}
                    onChange={onChange}
                />
            );
        }

        if ('type' in item && item.type === 'group') {
            return (
                <React.Fragment key={index}>
                    <li>
                        <div className="dropdown__menu-label">{item.label}</div>
                    </li>
                    {item.items.map(each)}
                </React.Fragment>
            );
        }

        return (
            <DropdownItem
                key={index}
                label={item.label}
                icon={item.icon}
                active={item.active}
                onSelect={item.onSelect}
                onChange={onChange}
            />
        );
    }

    function renderMenu() {
        // Only constrain overflow when scrolling is requested. Submenus are portaled
        // to document.body so they are not clipped by this overflow.
        const menuStyle: React.CSSProperties = {
            zIndex,
            display: 'block',
            ...(maxHeight != null ? {maxHeight, overflowY: 'auto' as const} : {}),
        };

        if (header == null && footer == null) {
            return (
                <ul className="dropdown__menu" id={menuID} role="menu" ref={setMenuRef} style={menuStyle}>
                    {items.map(each)}
                </ul>
            );
        }

        return (
            <div
                className="dropdown__menu dropdown__menu--has-head-foot"
                id={menuID}
                role="menu"
                ref={setMenuRef}
                style={menuStyle}
            >
                {header != null && <ul className="dropdown__menu-header">{header.map(each)}</ul>}
                <ul className="dropdown__menu-body">{items.map(each)}</ul>
                {footer != null && (
                    <ul className="dropdown__menu-footer dropdown__menu-footer--has-list">{footer.map(each)}</ul>
                )}
            </div>
        );
    }

    const toggleProps = {
        'aria-haspopup': 'menu' as const,
        'aria-expanded': open,
        onClick: () => setOpen((currentlyOpen) => !currentlyOpen),
    };

    return (
        <div className={open ? 'dropdown open' : 'dropdown'}>
            {React.isValidElement(children) ? (
                // The wrapper (not the cloned child) is the popper anchor, so a plain
                // function component can be used as the toggle without forwarding a ref.
                <div ref={setButtonRef}>
                    {React.cloneElement(children, {
                        ...toggleProps,
                        className: children.props.className
                            ? children.props.className + ' dropdown__toggle dropdown-toggle'
                            : 'dropdown__toggle dropdown-toggle',
                    })}
                </div>
            ) : (
                <button
                    {...toggleProps}
                    ref={setButtonRef}
                    className="dropdown__toggle dropdown__toggle--default dropdown-toggle"
                    tabIndex={0}
                >
                    {children}
                    <span className="dropdown__caret" />
                </button>
            )}
            {open && ReactDOM.createPortal(renderMenu(), ensureDropdownContainer())}
        </div>
    );
};

const DropdownItem = ({label, icon, active, onSelect, onChange}: IMenuItemRes) => {
    return (
        <li role="none" className={active ? 'dropdown__menu-item--active' : ''}>
            <button
                tabIndex={0}
                role="menuitem"
                onClick={() => {
                    setTimeout(() => {
                        onSelect();
                    });

                    onChange?.();
                }}
            >
                <i className={icon ? 'icon-' + icon : ''} />
                {label}
            </button>
        </li>
    );
};

const SUBMENU_CLOSE_DELAY_MS = 150;

const SubmenuHoverContext = React.createContext<{
    keepParentOpen: () => void;
    scheduleParentClose: () => void;
}>({
    keepParentOpen: () => undefined,
    scheduleParentClose: () => undefined,
});

function isMovingToDropdown(relatedTarget: EventTarget | null): boolean {
    return relatedTarget instanceof Element ? relatedTarget.closest('.dropdown__menu, .dropdown') != null : false;
}

interface IDropdownItemWithSubmenu {
    item: ISubmenu;
    zIndex: number;
    subMenuItems: Array<React.ReactNode>;
    onChange?(event?: any): void;
}

const DropdownItemWithSubmenu = ({item, zIndex, subMenuItems, onChange}: IDropdownItemWithSubmenu) => {
    const [open, setOpen] = React.useState(false);
    const [submenuZIndex, setSubmenuZIndex] = React.useState(zIndex + 1);
    const refButtonSubMenu = React.useRef<HTMLLIElement>(null);
    const refSubMenu = React.useRef<HTMLUListElement>(null);
    const closeTimeoutRef = React.useRef<number | null>(null);
    const parentHover = React.useContext(SubmenuHoverContext);
    const onSelect = (item as Partial<IMenuItem>).onSelect;

    const clearCloseTimeout = React.useCallback(() => {
        if (closeTimeoutRef.current != null) {
            window.clearTimeout(closeTimeoutRef.current);
            closeTimeoutRef.current = null;
        }
    }, []);

    const openSubmenu = () => {
        if (subMenuItems.length === 0) {
            return;
        }

        clearCloseTimeout();
        parentHover.keepParentOpen();

        if (!open) {
            setSubmenuZIndex(getNextZIndex());
        }

        setOpen(true);
    };

    const scheduleClose = (closeAncestors: boolean) => {
        clearCloseTimeout();
        closeTimeoutRef.current = window.setTimeout(() => {
            setOpen(false);
            closeTimeoutRef.current = null;
        }, SUBMENU_CLOSE_DELAY_MS);

        if (closeAncestors) {
            parentHover.scheduleParentClose();
        }
    };

    const handleMouseLeave = (event: React.MouseEvent) => {
        scheduleClose(!isMovingToDropdown(event.relatedTarget));
    };

    React.useEffect(() => clearCloseTimeout, [clearCloseTimeout]);

    React.useLayoutEffect(() => {
        if (!open || refButtonSubMenu.current == null || refSubMenu.current == null) {
            return;
        }

        // Portal to body so parent overflow (e.g. maxHeight) cannot clip the submenu.
        const popper = createPopper(refButtonSubMenu.current, refSubMenu.current, {
            placement: 'right-start',
            strategy: 'fixed',
        });

        return () => popper.destroy();
    }, [open]);

    return (
        <li ref={refButtonSubMenu} role="none">
            <div className="dropdown" onMouseEnter={openSubmenu} onMouseLeave={handleMouseLeave}>
                <button
                    className="dropdown__toggle dropdown-toggle"
                    role="menuitem"
                    aria-haspopup="menu"
                    aria-expanded={open}
                    tabIndex={0}
                    onClick={() => {
                        if (onSelect != null) {
                            setTimeout(() => onSelect());
                        }

                        onChange?.();
                    }}
                    onMouseOver={openSubmenu}
                >
                    {item.icon ? <i className={'icon-' + item.icon} /> : null}
                    {item.label}
                </button>
            </div>
            {open &&
                ReactDOM.createPortal(
                    <SubmenuHoverContext.Provider
                        value={{
                            keepParentOpen: openSubmenu,
                            scheduleParentClose: () => scheduleClose(true),
                        }}
                    >
                        <ul
                            role="menu"
                            ref={refSubMenu}
                            className="dropdown__menu"
                            style={{display: 'block', zIndex: submenuZIndex}}
                            onMouseEnter={openSubmenu}
                            onMouseLeave={handleMouseLeave}
                        >
                            {subMenuItems}
                        </ul>
                    </SubmenuHoverContext.Provider>,
                    document.body,
                )}
        </li>
    );
};
