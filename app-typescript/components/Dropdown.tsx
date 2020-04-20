import * as React from 'react';
import classNames from 'classnames';
interface IProps {
    name: string;
    align?: 'left' | 'right';
    side?: 'left' | 'right';
    children: React.ReactNode;
}

interface IPropsItem {
    text: string;
    icon?: string;
}

interface IPropsLabel {
    text: string;
}

export const Dropdown = ({
    name,
    align,
    side,
    children,
}: IProps) => {
    const [open, setOpen] = React.useState(false);
    const [height, setHeight] = React.useState(false);
    const ref = React.useRef(null);
    React.useEffect(() => {
        let number = getOffset(ref.current);
        let second = getBodyOffset();
        let heightEl = heightElement(ref.current);
        if (heightEl > second - number.bottom) {
            setHeight(true);
        } else {
            setHeight(false);
        }
    }, [open]);

    const classes = classNames('dropdown', {
        ['open']: open,
        ['dropdown--align-right']: align === 'right',
        [`dropdown--drop${side}`]: side,
        ['dropdown--dropup']: height,
    });

    function isOpen() {
        if (!open) {
            setOpen(true);
            document.addEventListener('click', closeMenu);
        } else {
            setOpen(false);
        }
    }

    function closeMenu() {
        setOpen(false);
        document.removeEventListener('click', closeMenu);
    }

    function getOffset(el: any) {
        const rect = el.getBoundingClientRect();
        return {
            left: rect.left + window.scrollX,
            bottom: rect.bottom + window.scrollY,
        };
    }

    function getBodyOffset() {
        return screen.height;
    }

    function heightElement(el: any) {
        return el.clientHeight;
    }

    return (
        <div className={classes} >
            <button className='dropdown__toggle dropdown-toggle' onClick={isOpen}>{name}
                <span className="dropdown__caret"></span></button>
            <ul className='dropdown__menu' ref={ref}>
                {children}
            </ul>
        </div>
    );
};

export const DropdownItem = ({
    text,
    icon,
}: IPropsItem) => {

    return (
        <li><button><i className={icon ? ('icon-' + icon) : ''}></i>{text}</button></li>
    );
};

export const DropdownDivider = ({ }) => {
    return (<li className="dropdown__menu-divider"></li>);
};

export const DropdownLabel = ({
    text,
}: IPropsLabel) => {
    return (
        <li>
            <div className="dropdown__menu-label">{text}</div>
        </li>
    );
};
