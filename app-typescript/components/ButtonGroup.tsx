import * as React from 'react';
import classNames from 'classnames';

interface IProps {
    orientation?: 'horizontal' | 'vertical'; // defaults to 'horizontal'
    spaces?: 'comfort' | 'compact'; // defaults to 'comfort'
    align?: 'left' | 'right' | 'center'; // defaults to 'left'
    children: React.ReactNode;
}

export class ButtonGroup extends React.PureComponent<IProps> {
    render() {
        let classes = classNames('button-group', {
            [`button-group--${this.props.align}`]: this.props.align,
            [`button-group--vertical`]: this.props.orientation === 'vertical',
            [`button-group--compact`]: this.props.spaces === 'compact',
        });

        return (
            <div className={classes}>
                {this.props.children}
            </div>
        );
    }
}
