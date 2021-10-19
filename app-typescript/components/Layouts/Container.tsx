import * as React from 'react';
import classNames from 'classnames';

interface IProps {
    children?: React.ReactNode;
    className?: string;
}

export class Container extends React.PureComponent<IProps> {
    render() {
        let classes = classNames('sd-container', this.props.className);
        return (
            <div className={classes}>
                {this.props.children}
            </div>
        );
    }
}
