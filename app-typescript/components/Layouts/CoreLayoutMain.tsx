import * as React from 'react';
import classNames from 'classnames';

interface IProps {
    children?: React.ReactNode;
    id?: string;
    editorFullWidth?: boolean;
    openPanel?: boolean;
}

export class CoreLayoutMain extends React.PureComponent<IProps> {
    render() {
        const classes = classNames('sd-content sd-content-wrapper', {
            'sd-content-wrapper--editor-full': this.props.editorFullWidth,
        },
    );
        return (
            <section
            id={this.props.id}
            className={classes + (this.props.openPanel ? ' sd-content-wrapper--editor-full' : '')}>
                {this.props.children}
            </section>
        );
    }
}
