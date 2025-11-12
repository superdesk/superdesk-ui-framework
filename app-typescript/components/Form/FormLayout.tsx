import * as React from 'react';
import classNames from 'classnames';

interface IProps {
    children: React.ReactNode;

    /**
     * Spacing between form elements. Defaults to `standard`.
     */
    spaces?: 'compact' | 'standard' | 'relaxed';

    /**
     * Bottom margin for the form layout. Values are multipliers of 8px. Defaults to `2` (16px).
     */
    marginBottom?: '0' | '1' | '2' | '3' | '4';

    /**
     * Optional legend for the form layout/fieldset. Can be used to group items together.
     */
    legend?: string;

    /**
     * Additional CSS class names to apply to the form layout.
     */
    className?: string;

    /**
     * Reserve space for info text on input fields regardless of whether they are present.
     */
    preserveSpaces?: boolean;
}

export class FormLayout extends React.PureComponent<IProps> {
    render() {
        const hasLabel = this.props.legend && this.props.legend.trim() !== '';
        const classes = classNames(
            'form-layout',
            {
                [`form-layout--mb-${this.props.marginBottom}`]: this.props.marginBottom,
                'form-layout--preserve-spaces': this.props.preserveSpaces,
            },
            this.props.className,
        );

        if (hasLabel) {
            return (
                <fieldset className={classes}>
                    <legend className="form-heading-new">{this.props.legend}</legend>
                    {this.props.children}
                </fieldset>
            );
        } else {
            return <div className={classes}>{this.props.children}</div>;
        }
    }
}
