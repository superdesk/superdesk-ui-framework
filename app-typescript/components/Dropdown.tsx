import * as React from 'react';
import classNames from 'classnames';
import * as ReactDOM from 'react-dom';

export interface IMenuItem {
    label: string;
    icon?: string;
    onSelect(): void;
}

export interface ISubmenu {
    type: 'submenu';
    label: string;
    icon?: string;
    items: Array<IMenuItem | ISubmenu | IMenuGroup | 'divider'>;
}

export interface IMenuGroup {
    type: 'group';
    label?: string;
    items: Array<IMenuItem | ISubmenu | IMenuGroup | 'divider'>;
}

interface IMenu {
    append?: boolean;
    label?: string;
    align?: 'left' | 'right';
    items: Array<IMenuItem | ISubmenu | IMenuGroup | 'divider'>;
    header?: Array<IMenuItem | ISubmenu | IMenuGroup | 'divider'>;
    footer?: Array<IMenuItem | ISubmenu | IMenuGroup | 'divider'>;
    children: React.ReactNode;
}

export const Dropdown = ({
    items,
    header,
    footer,
    children,
    align,
    append,
}: IMenu) => {
    const [open, setOpen] = React.useState(false);
    const [change, setChange] = React.useState(false);
    const [height, setHeight] = React.useState(false);
    const [submenu, setSubmenu] = React.useState(false);
    const [width, setWidth] = React.useState(false);
    const [menuAppend, setMenuAppend] = React.useState(<p></p>);
    const DROPDOWN_ID = "react-placeholder";
    const ref = React.useRef(null);
    const refSubMenu = React.useRef(null);
    const buttonRef = React.useRef(null);
    let inDebounce = 0;

    const headerElements = header?.map((el, index) => {
        return each(el, index);
    });

    const dropdownElements = items.map((el, index) => {
        return each(el, index);
    });

    const footerElements = footer?.map((el, index) => {
        return each(el, index);
    });

    // structure for append menu
    function createAppendMenu(top: number, left: number) {
        if (header && footer) {
            return (
                <div className='dropdown__menu dropdown__menu--has-head-foot'
                    ref={ref}
                    style={{
                        display: 'block',
                        top: top,
                        left: left,
                    }}  >
                    <ul className='dropdown__menu-header'>
                        {headerElements}
                    </ul>
                    <ul className='dropdown__menu-body'>
                        {dropdownElements}
                    </ul>
                    <ul className='dropdown__menu-footer dropdown__menu-footer--has-list '>
                        {footerElements}
                    </ul>
                </div>
            );
        } else if (header) {
            return (
                <div className='dropdown__menu dropdown__menu--has-head-foot'
                    ref={ref}
                    style={{
                        display: 'block',
                        top: top,
                        left: left,
                    }}  >
                    <ul className='dropdown__menu-header'>
                        {headerElements}
                    </ul>
                    <ul className='dropdown__menu-body'>
                        {dropdownElements}
                    </ul>
                </div>
            );
        } else if (footer) {
            return (
                <div className='dropdown__menu dropdown__menu--has-head-foot'
                    ref={ref}
                    style={{
                        display: 'block',
                        top: top,
                        left: left,
                    }}  >
                    <ul className='dropdown__menu-body'>
                        {dropdownElements}
                    </ul>
                    <ul className='dropdown__menu-footer dropdown__menu-footer--has-list '>
                        {footerElements}
                    </ul>
                </div>
            );
        } else {
            return (
                <ul className='dropdown dropdown__menu more-activity-menu '
                    style={{
                        display: 'block',
                        top: top,
                        left: left,
                    }}
                    ref={ref} >
                    {dropdownElements}
                </ul>
            );
        }
    }

    React.useLayoutEffect(() => {
        let element = document.getElementsByClassName('dropdown')[0];
        let parentElement = getScrollParent(element);
        function applyDebounce() {
            return change ? debounce(50) : null;
        }
        if (!append) {
            parentElement.parentNode.addEventListener("scroll", applyDebounce());

            calculate();
        }
        return () => {
            parentElement.removeEventListener("scroll", applyDebounce());
            clearTimeout(inDebounce);
        };
    }, [open]);

    React.useEffect(() => {
        let holder = null;
        const existingElement = document.getElementById(DROPDOWN_ID);
        if (existingElement) {
            holder = existingElement;
        } else {
            const el = document.createElement("div");
            el.id = DROPDOWN_ID;
            // style placeholder
            el.style.position = 'absolute';
            el.style.top = '0';
            el.style.left = '0';
            el.style.width = '1px';
            el.style.height = '1px';

            document.body.appendChild(el);
            holder = el;
        }

        if (append && change) {
            setMenuAppend(createAppendMenu(
                getDimensions(buttonRef.current).bottom,
                getDimensions(buttonRef.current).left));
            addInPlaceholder();
        }
        setChange(true);
    }, [open]);

    // open close
    function toggleDisplay() {
        if (!open) {
            setOpen(true);
            setMenuAppend(createAppendMenu(
                getDimensions(buttonRef.current).bottom,
                getDimensions(buttonRef.current).left));
            document.addEventListener('click', closeMenu);
        } else {
            setOpen(false);
            setMenuAppend(<p></p>);
        }
    }

    function closeMenu() {
        document.removeEventListener('click', closeMenu);
        setMenuAppend(<p></p>);
        setOpen(false);

    }

    // position on screen
    function getDimensions(el: any) {
        const rect = el.getBoundingClientRect();
        return {
            top: rect.top,
            bottom: rect.bottom,
            right: rect.right,
            left: rect.left,
        };
    }

    function heightElement(el: any) {
        return el.clientHeight;
    }

    // scrollable
    function getScrollParent(node: Element): any {
        if (node.scrollHeight > node.clientHeight) {
            return node;
        } else {
            if (node.parentElement !== null) {
                let newElement = node.parentElement;
                return getScrollParent(newElement);
            }
        }
    }
    function heightSet(heightExists: boolean) {
        if (change) {
            return heightExists ? true : false;
        } else {
            return '';
        }
    }

    function calculate() {
        let number = getDimensions(ref.current);
        let screenHeight = screen.height;
        let heightEl = heightElement(ref.current);

        if ((screenHeight - number.bottom) < heightEl) {
            setHeight(true);
        } else {
            setHeight(false);
        }
        if (screenHeight < number.right) {
            setWidth(true);
        } else {
            setWidth(false);
        }
    }

    function calculateTwo() {
        let number = getDimensions(ref.current);
        let second = screen.height;
        let heightEl = heightElement(ref.current);

        if ((second - number.bottom) < (heightEl) && (number.top > heightEl)) {
            setSubmenu(true);
        } else {
            setSubmenu(false);
        }
    }

    const debounce = (delay: number) => {
        return function() {
            const context = dropdownElements;
            clearTimeout(inDebounce);
            inDebounce = setTimeout(() => calculate.apply(context), delay);
        };
    };

    function shouldAlignRight() {
        if (align === 'right') {
            return true;
        } else if (width) {
            return true;
        } else {
            return false;
        }
    }

    function addInPlaceholder() {
        const placeholder = document.getElementById(DROPDOWN_ID);
        return ReactDOM.render(menuAppend, placeholder);
    }

    function each(item: any, index: number) {
        if (item['type'] === 'submenu') {
            let submenuItems: any = [];
            item['items'].forEach((el: any, key: number) => {
                submenuItems.push(each(el, key));
            });
            return (
                <li key={index}>
                    <div className={(submenu ? 'dropdown--dropup' : '') + ' dropdown'} >
                        <button
                            className='dropdown__toggle dropdown-toggle'
                            onMouseOver={() => submenuItems.map((element: any) => { calculateTwo.apply(element); })} >
                            {item['icon'] ? <i className={'icon-' + item['icon']}></i> : null}
                            {item['label']}
                        </button>
                        <ul ref={refSubMenu}
                            className={(width ? 'dropdown__menu--submenu-left ' : '') + 'dropdown__menu'}>
                            {submenuItems}
                        </ul>
                    </div>
                </li>
            );

        } else if (item['type'] === 'group') {
            let groupItems: any = [];
            item['items'].forEach((el: any, key: number) => {
                groupItems.push(each(el, key));
            });
            return (
                <React.Fragment key={index}>
                    <li>
                        <div className="dropdown__menu-label">{item['label']}</div>
                    </li>
                    {groupItems}
                </React.Fragment>
            );

        } else if (item === 'divider') {
            return (<li className="dropdown__menu-divider" key={index}></li>);
        } else {
            return (
                <DropdownItem
                    key={index}
                    label={item['label']}
                    icon={item['icon']}
                    onSelect={item['onSelect']} />);
        }
    }

    // style dropdown
    const classes = classNames('dropdown', {
        ['open']: open,
        ['dropdown--dropup']: heightSet(height),
        ['dropdown--align-right']: shouldAlignRight(),
    });

    return (
        <div className={classes} >
            {typeof children === 'object' ?
                (React.isValidElement(children) ? React.cloneElement(children, {
                    className: children.props.className ? (children.props.className + ' dropdown__toggle dropdown-toggle') : 'dropdown__toggle dropdown-toggle',
                    onClick: toggleDisplay,
                    ref: buttonRef,
                }) : null)
                :
                <button ref={buttonRef}
                    className=' dropdown__toggle dropdown-toggle'
                    onClick={toggleDisplay}>
                    {children}
                    <span className="dropdown__caret"></span>
                </button>}

            {append ?
                null : (function() {
                    if (header && footer) {
                        return (
                            <div className='dropdown__menu dropdown__menu--has-head-foot' ref={ref} >
                                <ul className='dropdown__menu-header'>
                                    {headerElements}
                                </ul>
                                <ul className='dropdown__menu-body'>
                                    {dropdownElements}
                                </ul>
                                <ul className='dropdown__menu-footer dropdown__menu-footer--has-list '>
                                    {footerElements}
                                </ul>
                            </div>
                        );
                    } else if (header) {
                        return (
                            <div className='dropdown__menu dropdown__menu--has-head-foot' ref={ref} >
                                <ul className='dropdown__menu-header'>
                                    {headerElements}
                                </ul>
                                <ul className='dropdown__menu-body'>
                                    {dropdownElements}
                                </ul>
                            </div>
                        );
                    } else if (footer) {
                        return (
                            <div className='dropdown__menu dropdown__menu--has-head-foot' ref={ref} >
                                <ul className='dropdown__menu-body'>
                                    {dropdownElements}
                                </ul>
                                <ul className='dropdown__menu-footer dropdown__menu-footer--has-list '>
                                    {footerElements}
                                </ul>
                            </div>
                        );
                    } else {
                        return <ul className='dropdown__menu' ref={ref} >
                            {dropdownElements}
                        </ul>;
                    }
                })()}
        </div >
    );
};

const DropdownItem = ({
    label,
    icon,
    onSelect,
}: IMenuItem) => {
    return (
        <li><button onSelect={onSelect}><i className={icon ? ('icon-' + icon) : ''}></i>{label}</button></li>
    );

};
