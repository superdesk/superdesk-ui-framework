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

export class FormGroupItem extends React.PureComponent<IProps> {
    render() {
        const classes = classNames(
            'form-group-item',
            {
                'form-group-item--auto-width': this.props.autoWidth,
                'form-group-item--span-1': this.props.colSpan === 1,
                'form-group-item--span-2': this.props.colSpan === 2,
                'form-group-item--span-3': this.props.colSpan === 3,
                'form-group-item--span-4': this.props.colSpan === 4 || !this.props.colSpan,
            },
            this.props.className,
        );

        return <div className={classes}>{this.props.children}</div>;
    }
}
