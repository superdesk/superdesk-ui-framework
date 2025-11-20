import * as React from 'react';
import classNames from 'classnames';

interface IProps {
    children: React.ReactNode;

    /**
     * Spacing between form elements. Defaults to `standard`.
     */
    spaces?: 'compact' | 'standard' | 'relaxed';

    /**
     * Bottom margin for the form layout. `spaces` adds a bottom margin equal to the row gap. Defaults to `none`.
     */
    marginBottom?: 'none' | 'spaces';

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

export const FormLayout: React.FC<IProps> = React.memo(
    ({children, spaces = 'standard', marginBottom = 'none', legend, className, preserveSpaces}) => {
        const hasLabel = legend && legend.trim() !== '';
        const classes = classNames(
            'form-layout',
            {
                [`form-layout--${spaces}`]: spaces,
                [`form-layout--mb-${marginBottom}`]: marginBottom,
                'form-layout--preserve-spaces': preserveSpaces,
            },
            className,
        );

        if (hasLabel) {
            return (
                <fieldset className={classes}>
                    <legend className="form-heading-new">{legend}</legend>
                    {children}
                </fieldset>
            );
        }

        return <div className={classes}>{children}</div>;
    },
);
