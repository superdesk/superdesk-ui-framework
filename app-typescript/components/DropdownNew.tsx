import * as React from 'react';
import classNames from 'classnames';

interface IMenuItem {
    label: string;
    icon?: string;
    onSelect(): void;
}

interface ISubmenu {
    type: 'submenu';
    label: string;
    icon?: string;
    items: Array<IMenuItem | ISubmenu | IMenuGroup | 'divider'>;
}

interface IMenuGroup {
    type: 'group';
    label?: string;
    items: Array<IMenuItem | ISubmenu | IMenuGroup | 'divider'>;
}

interface IMenu {
    label?: string;
    items: Array<IMenuItem | ISubmenu | IMenuGroup | 'divider'>;
    header?: Array<IMenuItem | ISubmenu | IMenuGroup | 'divider'>;
    footer?: Array<IMenuItem | ISubmenu | IMenuGroup | 'divider'>;
}

export const DropdownNew = ({
    items,
    header,
}: IMenu) => {
    const [open, setOpen] = React.useState(false);
    const [height, setHeight] = React.useState(false);
    const ref = React.useRef(null);
    let inDebounce = 0;

    React.useLayoutEffect(() => {
        let element = document.getElementsByClassName('dropdown')[0];
        let parentElement = getScrollParent(element);
        parentElement.parentNode.addEventListener("scroll", debounce(50));

        calculate();

        return () => {
            parentElement.removeEventListener("scroll", debounce(50));
            clearTimeout(inDebounce);
        };
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

    function calculate() {
        let number = getDimensions(ref.current);
        let second = screen.height;
        let heightEl = heightElement(ref.current);

        if ((second - number.bottom) < (heightEl + 100) && (number.top > heightEl)) {
            setHeight(true);
        } else {
            setHeight(false);
        }
    }

    const debounce = (delay: number) => {
        return function() {
            const context = dropdownElements;
            clearTimeout(inDebounce);
            inDebounce = setTimeout(() => calculate.apply(context), delay);
        };
    };

    const classes = classNames('dropdown', {
        ['open']: open,
        ['dropdown--dropup']: height,
    });

    function each(item: any, index: number) {
        if (item['type'] === 'submenu') {
            let submenuItems: any = [];
            item['items'].forEach((el: any, key: number) => {
                submenuItems.push(each(el, key));
            });

            return (
                <li key={index}>
                    <div className='dropdown'>
                        <button className='dropdown__toggle dropdown-toggle'>
                            {item['label']}
                        </button>
                        <ul className={'dropdown__menu'} ref={ref}>
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
            return (<DropdownDivider key={index} />);
        } else {
            return (
                <DropdownItem
                    key={index}
                    label={item['label']}
                    icon={item['icon']}
                    onSelect={item['onSelect']} />);
        }
    }

    const dropdownElements = items.map((el, index) => {
        return each(el, index);
    });

    return (
        <div className={classes} >
            <button className='dropdown__toggle nav-btn dropdown-toggle' onClick={isOpen}>
                +
            </button>
            {header ?
                <div className='dropdown__menu dropdown__menu--has-head-foot' ref={ref} ></div> :
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

const DropdownDivider = ({ }) => {
    return (<li className="dropdown__menu-divider"></li>);
};
