import * as React from 'react';
import classNames from 'classnames';

interface IProps {
    orientation?: 'horizontal' | 'vertical'; // defaults to 'horizontal'
    spaces?: 'comfort' | 'compact' | 'loose' | 'no-space'; // defaults to 'comfort'
    align?: 'start' | 'end' | 'center' | 'inline' | 'sub'; // defaults to 'left'
    padded?: boolean; // adds predefined space to the side based on the alignment and orientation.
    subgroup?: boolean; // for nested button groups§.
    children: React.ReactNode;
    className?: string;
}
export class ButtonGroup extends React.PureComponent<IProps> {
    render() {
        let classes = classNames('button-group', {
            [`button-group--start`]: this.props.align === undefined && !this.props.orientation && !this.props.subgroup,
            [`button-group--${this.props.align}`]: this.props.align && !this.props.orientation,
            [`button-group--vertical`]: this.props.orientation === 'vertical',
            [`button-group--comfort`]: this.props.spaces === undefined,
            [`button-group--${this.props.spaces}`]: this.props.spaces,
            [`button-group--padded`]: this.props.padded === true,
            [`button-group--sub-group`]: this.props.subgroup === true,
        }, this.props.className);
        return (
            <div className={classes} role='group'>
                {this.props.children}
            </div>
        );
    }
}
