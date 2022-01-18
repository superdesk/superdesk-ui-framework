import * as React from 'react';
import classNames from 'classnames';

interface IProps {
    children: React.ReactNode;
    rows?: boolean;
    orientation?: 'horizontal' | 'vertical'; // defaults to 'horizontal'
    spaces?: 'default' | 'condensed' | 'relaxed'; // defaults to 'default'
    marginBottom?: '0' | '1' | '2' | '3' | '4'; // multipliers of 8px (base increment); defaults to '2' (16px)
    inlineLabel?: boolean; // defaults to 'false'
}

export class FormGroup extends React.PureComponent<IProps> {
    render() {
        const classes = classNames(
            'form__group',
            {
                'form__group--rows': this.props.rows,
                [`form__group--vertical`]: this.props.orientation === 'vertical',
                [`form__group--default`]: this.props.spaces === undefined,
                [`form__group--${this.props.spaces}`]: this.props.spaces,
                [`form__group--mb-${this.props.marginBottom}`]: this.props.marginBottom,
                'form__group--inline-label': this.props.inlineLabel,
            },
        );

        return (
            <div className={classes}>
                {this.props.children}
            </div>
        );
    }
}
