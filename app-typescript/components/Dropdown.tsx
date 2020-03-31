import * as React from 'react';
import classNames from 'classnames';
interface IProps {
    name: string;
    align?: 'left' | 'right';
    side?: 'left' | 'right';
}
export const Dropdown = ({
    name,
    align,
    side,
}: IProps) => {
    const [open, setOpen] = React.useState(false);
    const classes = classNames('dropdown', {
        ['open']: open,
        ['dropdown--align-right']: align === 'right',
        [`dropdown--drop${side}`]: side,
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

    return (
        <div className={classes} dropdown-append-to-body='true'>
            <button className='dropdown__toggle dropdown-toggle' onClick={isOpen}>{name}
                <span className="dropdown__caret"></span></button>
            <ul className='dropdown__menu'>
                <li><button>one</button></li>
                <li><button>two</button></li>
                <li><button>three</button></li>
            </ul>
        </div>
    );
};
