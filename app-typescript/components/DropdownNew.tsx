import * as React from 'react';
import classNames from 'classnames';

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
    label?: string;
    align?: 'left' | 'right';
    side?: 'left' | 'right';
    items: Array<IMenuItem | ISubmenu | IMenuGroup | 'divider'>;
    header?: Array<IMenuItem | ISubmenu | IMenuGroup | 'divider'>;
    footer?: Array<IMenuItem | ISubmenu | IMenuGroup | 'divider'>;
    children: React.ReactNode;
}

export const DropdownNew = ({
    items,
    header,
    footer,
    children,
    align,
    side,
}: IMenu) => {
    const [open, setOpen] = React.useState(false);
    const [change, setChange] = React.useState(false);
    const [height, setHeight] = React.useState(false);
    const [submenu, setSubmenu] = React.useState(false);
    const [width, setWidth] = React.useState(false);
    const [dSide, setDSide] = React.useState('');
    const ref = React.useRef(null);
    let inDebounce = 0;

    React.useLayoutEffect(() => {
        let element = document.getElementsByClassName('dropdown')[0];
        let parentElement = getScrollParent(element);
        function applyScroll() {
            return change ? debounce(20) : null;
        }
        parentElement.parentNode.addEventListener("scroll", applyScroll());

        calculate();

        return () => {
            parentElement.removeEventListener("scroll", applyScroll());
            clearTimeout(inDebounce);
        };
    }, [open]);

    React.useEffect(() => {
        setChange(true);
    }, [open]);

    // open close
    function isOpen() {
        if (!open) {
            setOpen(true);
            document.addEventListener('click', closeMenu);
        } else {
            setOpen(false);
        }
    }

    function closeMenu() {
        document.removeEventListener('click', closeMenu);
        setOpen(false);
    }

    // position on screen
    function getDimensions(el: any) {
        const rect = el.getBoundingClientRect();
        return {
            top: rect.top,
            bottom: rect.bottom,
            left: rect.left,
            right: rect.right,
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
    function heightSet(test: boolean) {
        if (change) {
            return test ? true : false;
        } else {
            return '';
        }
    }
    function calculate() {
        let number = getDimensions(ref.current);
        let screenHeight = screen.height;
        let heightEl = heightElement(ref.current);
        let first = screen.height - number.bottom;

        if ((first < heightEl) && number.top < heightEl) {
            if (!side) {
                if (number.left < 200) {
                    setDSide('right');
                } else {
                    setDSide('left');
                }
            }
        } else {
            setDSide('');
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

    function elementAlign() {
        if (align) {
            return align === 'right' ? 'right' : '';
        } else {
            return width ? 'right' : '';
        }
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
                        <ul className={(width ? 'dropdown__menu--submenu-left ' : '') + 'dropdown__menu'} ref={ref}>
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

    const headerElements = header?.map((el, index) => {
        return each(el, index);
    });

    const dropdownElements = items.map((el, index) => {
        return each(el, index);
    });

    const footerElements = footer?.map((el, index) => {
        return each(el, index);
    });

    const classes = classNames('dropdown', {
        ['open']: open,
        ['dropdown--dropup']: heightSet(height),
        ['dropdown--align-right']: elementAlign() === 'right',
        [`dropdown--drop${side}`]: side,
        [`dropdown--drop${dSide}`]: dSide,
    });

    return (
        <div className={classes} >
            {typeof children === 'object' ?
                (React.isValidElement(children) ? React.cloneElement(children, {
                    className: children.props.className ? (children.props.className + ' dropdown__toggle dropdown-toggle') : 'dropdown__toggle dropdown-toggle',
                    onClick: isOpen,
                }) : null)
                :
                <button
                    className=' dropdown__toggle dropdown-toggle'
                    onClick={isOpen}>
                    {children}
                    <span className="dropdown__caret"></span>
                </button>}

            {header ?
                <div className='dropdown__menu dropdown__menu--has-head-foot' ref={ref} >
                    <ul className='dropdown__menu-header'>
                        {headerElements}
                    </ul>
                    <ul className='dropdown__menu-body'>
                        {dropdownElements}
                    </ul>
                    {footer ?
                        <ul className='dropdown__menu-footer dropdown__menu-footer--has-list '>
                            {footerElements}
                        </ul> : null}
                </div> :
                <ul className='dropdown__menu' ref={ref} >
                    {dropdownElements}
                </ul>}
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
