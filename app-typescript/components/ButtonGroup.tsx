import * as React from 'react';
import classNames from 'classnames';

interface IProps {
    orientation?: string;
    spaces?: string;
}

export class ButtonGroup extends React.Component<IProps> {
    render() {
        let classes = classNames({
            [`button-group--${this.props.orientation}`]: this.props.orientation,
        });
        return (
            <div className={this.props.orientation}>
                {this.props.children}
            </div>
        );
    }
}
