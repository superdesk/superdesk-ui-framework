import * as React from 'react';
import classNames from 'classnames';

interface IProps {
    children: React.ReactNode;

    /**
     * Defaults to `false`. Only works with `flex` based FormGroupNew.
     */
    autoWidth?: boolean;

    /**
     * Defaults to `4` (full width). Only works with `grid` based FormGroupNew.
     */
    colSpan?: 1 | 2 | 3 | 4;
}

export class FormGroupItemNew extends React.PureComponent<IProps> {
    render() {
        const classes = classNames('form-group-new-item', {
            'form-group-new-item--auto-width': this.props.autoWidth,
            'form-group-new-item--span-1': this.props.colSpan === 1,
            'form-group-new-item--span-2': this.props.colSpan === 2,
            'form-group-new-item--span-3': this.props.colSpan === 3,
            'form-group-new-item--span-4': this.props.colSpan === 4 || !this.props.colSpan,
        });

        return <div className={classes}>{this.props.children}</div>;
    }
}
