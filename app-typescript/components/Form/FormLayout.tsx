import * as React from 'react';
import classNames from 'classnames';

interface IProps {
    children: React.ReactNode;
    spaces?: 'compact' | 'standard' | 'relaxed'; // defaults to 'standard'
    marginBottom?: '0' | '1' | '2' | '3' | '4'; // multipliers of 8px (base increment); defaults to '2' (16px)
    legend?: string; // provides anoptional legend for the form layout/fieldset (can be used to group items together)
    className?: string; // additional class names to apply to the form layout
    preserveSpaces?: boolean; // reserve the space for the info text on input fields regardless if they are added or not
}

export class FormLayout extends React.PureComponent<IProps> {
    render() {
        const hasLabel = this.props.legend && this.props.legend.trim() !== '';
        const classes = classNames('form-layout', {
            [`form-layout--mb-${this.props.marginBottom}`]: this.props.marginBottom,
            [this.props.className as string]: this.props.className,
            [`form-layout--preserve-spaces`]: this.props.preserveSpaces,
        });

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
