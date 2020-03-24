import * as React from 'react';
import classNames from 'classnames';
interface IProps {
    name: string;
    align?: 'left' | 'right';
}
export const Dropdown = ({
    name,
    align,
}: IProps) => {
    const [open, setOpen] = React.useState(false);
    const classes = classNames('dropdown', {
        [`open`]: open,
        ['dropdown--align-right']: align==='right',
    });
    function isOpen(){
        setOpen(true);
        document.addEventListener('click', closeMenu);
    }
    
    function closeMenu(){
        setOpen(false);
        document.removeEventListener('click', closeMenu);
    }
    return (
        <div className={classes}>
            <button className='dropdown__toggle dropdown-toggle' onClick={isOpen}>{name}</button>
            <ul className='dropdown__menu'>
                <li><button>one</button></li>
                <li><button>two</button></li>
                <li><button>three</button></li>
            </ul>
        </div>
    )
}
