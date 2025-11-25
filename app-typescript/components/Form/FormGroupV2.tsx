import * as React from 'react';
import classNames from 'classnames';

interface IProps {
    children: React.ReactNode;

    /**
     * Defaults to `false`.
     */
    inlineLabels?: boolean;

    rowLabel?: string;
    grid?: boolean;

    /**
     * Additional CSS class names to apply to the form group.
     */
    className?: string;
}

export const FormGroupV2: React.FC<IProps> = React.memo(({children, rowLabel, grid, className}) => {
    const classes = classNames(
        'form-group',
        {
            'form-group--grid': grid,
        },
        className,
    );

    if (rowLabel) {
        return (
            <div className="form-group__wrapper">
                <label className="form-group__label">{rowLabel}</label>
                <div className={classes}>{children}</div>
            </div>
        );
    }

    return <div className={classes}>{children}</div>;
});
