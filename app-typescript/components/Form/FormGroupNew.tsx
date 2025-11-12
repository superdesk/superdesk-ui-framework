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
}

export class FormGroupNew extends React.PureComponent<IProps> {
    render() {
        const classes = classNames('form-group-new', {
            'form-group-new--has_row-label': this.props.rowLabel,
            'form-group-new--grid': this.props.grid,
        });

        if (this.props.rowLabel) {
            return (
                <div className="form-group-new__wrapper">
                    <label className="form-group-new__label">{this.props.rowLabel}</label>
                    <div className={classes}>{this.props.children}</div>
                </div>
            );
        } else {
            return <div className={classes}>{this.props.children}</div>;
        }
    }
}
