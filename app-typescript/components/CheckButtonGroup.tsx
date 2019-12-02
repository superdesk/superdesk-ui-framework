import * as React from 'react';
import classNames from 'classnames';

interface IProps {
    orientation?: 'horizontal' | 'vertical'; // defaults to 'horizontal'
    grid?: boolean;
    align?: 'left' | 'right' | 'center'; // defaults to 'left'
    children: React.ReactNode;
}

export class CheckButtonGroup extends React.PureComponent<IProps> {
    render() {
        let classes = classNames('sd-check-button__group', {
            [`sd-check-button__group--${this.props.align}`]: this.props.align,
            [`sd-check-button__group--left`]: !this.props.grid && this.props.align === undefined,
            [`button-group--vertical`]: this.props.orientation === 'vertical',
            [`sd-check-button__group--grid`]: this.props.grid,
        });

        return (
            <div className={classes}>
                {this.props.children}
            </div>
        );
    }
}
