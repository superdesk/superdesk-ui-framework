import * as React from 'react';
import classNames from 'classnames';

interface IProps {
    children: React.ReactNode;

    /**
     * Defaults to `false`. Only works with `flex` based FormGroupV2.
     */
    autoWidth?: boolean;

    /**
     * Defaults to `4` (full width). Only works with `grid` based FormGroupV2.
     */
    colSpan?: 1 | 2 | 3 | 4;

    /**
     * Additional CSS class names to apply to the form group item.
     */
    className?: string;
}

export const FormGroupItem: React.FC<IProps> = React.memo(({children, autoWidth, colSpan, className}) => {
    const classes = classNames(
        'form-group-item',
        {
            'form-group-item--auto-width': autoWidth,
            'form-group-item--span-1': colSpan === 1,
            'form-group-item--span-2': colSpan === 2,
            'form-group-item--span-3': colSpan === 3,
            'form-group-item--span-4': colSpan === 4 || !colSpan,
        },
        className,
    );

    return <div className={classes}>{children}</div>;
});
