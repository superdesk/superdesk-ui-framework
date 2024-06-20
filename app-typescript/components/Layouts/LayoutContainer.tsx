import * as React from 'react';
import classNames from 'classnames';

interface IProps {
    children?: React.ReactNode;
    fullHeight?: boolean;
}

export class LayoutContainer extends React.PureComponent<IProps> {
    render() {
        const classes = classNames('sd-content-wrapper__main-content-area sd-main-content-grid comfort', {
            'sd-main-content-grid--full-height': this.props.fullHeight,
        },
    );
        return (
            <div className={classes}>
                {this.props.children}
            </div>
        );
    }
}
