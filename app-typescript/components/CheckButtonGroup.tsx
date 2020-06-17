import * as React from 'react';
import classNames from 'classnames';

interface IProps {
    orientation?: 'horizontal' | 'vertical'; // defaults to 'horizontal'
    grid?: boolean;
    align?: 'left' | 'right' | 'center' | 'inline'; // defaults to 'left'
    padded?: boolean; // adds predefined space to the side based on the alignment and orientation.
}

export class CheckButtonGroup extends React.PureComponent<IProps> {
    render() {
        let classes = classNames('sd-check-button__group', {
            [`sd-check-button__group--${this.props.align}`]: this.props.align,
            [`sd-check-button__group--left`]: !this.props.grid && this.props.align === undefined,
            [`button-group--vertical`]: this.props.orientation === 'vertical',
            [`sd-check-button__group--grid`]: this.props.grid,
            [`sd-check-button__group--padded`]: this.props.padded === true,
        });

        return (
            <div className={classes}>
                {this.props.children}
            </div>
        );
    }
}
