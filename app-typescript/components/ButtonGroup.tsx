import * as React from 'react';
import classNames from 'classnames';

interface IProps {
    orientation?: 'horizontal' | 'vertical'; // defaults to 'horizontal'
    spaces?: 'comfort' | 'compact'; // defaults to 'comfort'
    align?: 'left' | 'right' | 'center'; // defaults to 'left'
    padded?: boolean; // adds predefined space to the side based on the alignment and orientation.
    children: React.ReactNode;
}
export class ButtonGroup extends React.PureComponent<IProps> {
    render() {
        let classes = classNames('button-group', {
            [`button-group--left`]: this.props.align === undefined && !this.props.orientation,
            [`button-group--${this.props.align}`]: this.props.align && !this.props.orientation,
            [`button-group--vertical`]: this.props.orientation === 'vertical',
            [`button-group--compact`]: this.props.spaces === 'compact',
            [`button-group--padded`]: this.props.padded === true,
        });
        return (
            <div className={classes} role='group'>
                {this.props.children}
            </div>
        );
    }
}
