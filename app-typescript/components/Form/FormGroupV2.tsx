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

export class FormGroupV2 extends React.PureComponent<IProps> {
    render() {
        const classes = classNames(
            'form-group',
            {
                'form-group--grid': this.props.grid,
            },
            this.props.className,
        );

        if (this.props.rowLabel) {
            return (
                <div className="form-group__wrapper">
                    <label className="form-group__label">{this.props.rowLabel}</label>
                    <div className={classes}>{this.props.children}</div>
                </div>
            );
        } else {
            return <div className={classes}>{this.props.children}</div>;
        }
    }
}
