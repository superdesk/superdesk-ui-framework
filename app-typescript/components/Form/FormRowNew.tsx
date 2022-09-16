import * as React from 'react';
import classNames from 'classnames';

interface IProps {
    children: React.ReactNode;
    spaces?: 'default' | 'condensed' | 'relaxed'; // defaults to 'default'
    marginBottom?: '0' | '1' | '2' | '3' | '4'; // multipliers of 8px (base increment); defaults to '2' (16px)
    inlineLabels?: boolean; // defaults to 'false'
    rowLabel?: string;
}

export class FormRowNew extends React.PureComponent<IProps> {
    render() {
        const classes = classNames('form__group-new', {
                [`form__group-new--${this.props.spaces}`]: this.props.spaces,
                [`form__group-new--mb-${this.props.marginBottom}`]: this.props.marginBottom,
                'form__group-new--inline-labels': this.props.inlineLabels,
                'form__group-new--has_row-label': this.props.rowLabel,
            },
        );

        // return (
        //     <div className={classes}>
        //         {this.props.children}
        //     </div>
        // );

        if (this.props.rowLabel) {
            return (
                <div className='form__group-new__wrapper'>
                    <label className='form__group-new__label' htmlFor="form__group-new__label">
                        {this.props.rowLabel}
                    </label>
                    <div className={classes}>
                        {this.props.children}
                    </div>
                </div>
            );
        } else {
            return (
                <div className={classes}>
                    {this.props.children}
                </div>
            );
        }
    }
}