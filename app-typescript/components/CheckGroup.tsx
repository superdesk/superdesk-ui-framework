import * as React from 'react';
import classNames from 'classnames';

interface IProps {
    orientation?: 'horizontal' | 'vertical'; // defaults to 'horizontal'
    children: React.ReactNode;
    groupLabelledBy?: string;
}

export class CheckGroup extends React.PureComponent<IProps> {
    render() {
        let classes = classNames('sd-check__group-new', {
            [`sd-check__group-new--vertical`]: this.props.orientation === 'vertical',
        });

        return (
            <div className={classes} aria-labelledby={this.props.groupLabelledBy}>
                {this.props.children}
            </div>
        );
    }
}
