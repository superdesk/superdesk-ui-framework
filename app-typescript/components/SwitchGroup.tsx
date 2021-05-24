import * as React from 'react';
import classNames from 'classnames';

interface IProps {
    orientation?: 'vertical' | 'horizontal'; // defaults to 'vertical'
    align?: 'left' | 'right'; // defaults to 'left'
    children: React.ReactNode;
}

export class SwitchGroup extends React.PureComponent<IProps> {
    render() {
        let classes = classNames('sd-switch__group', {
            [`sd-switch__group--vertical`]: this.props.orientation !== 'horizontal',
            [`sd-switch__group--horizontal`]: this.props.orientation === 'horizontal',
            [`sd-switch__group--right`]: this.props.align === 'right',
        });

        return (
            <div className={classes}>
                {this.props.children}
            </div>
        );
    }
}
