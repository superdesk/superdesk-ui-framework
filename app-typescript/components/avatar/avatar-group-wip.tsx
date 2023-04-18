import * as React from 'react';
import classNames from 'classnames';

interface IPropsAvatarGroup {
    appearance?: 'stacked' | 'grid';
    borderColor?: '000' | '050' | '100' | '150' | '200';
    className?: string;
    children: React.ReactNode;
    gap?: 'none' | 'small'| 'medium'| 'large';
}

export class AvatarGroup extends React.PureComponent<IPropsAvatarGroup> {
    render() {
        let classes = classNames('sd-avatar-group', {
            [`sd-avatar-group--stacked`]: this.props.appearance === undefined,
            [`sd-avatar-group--${this.props.appearance}`]: this.props.appearance,
            [`sd-avatar-group__border--000`]: this.props.borderColor === undefined,
            [`sd-avatar-group__border--${this.props.borderColor}`]: this.props.borderColor,
            [`sd-avatar-group--stacked--gap-${this.props.gap}`]: this.props.gap,
        }, this.props.className);
        return (
            <div className={classes} role='group'>
                {this.props.children}
            </div>
        );
    }
}
