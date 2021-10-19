import * as React from 'react';
import classNames from 'classnames';

interface IProps {
    children?: React.ReactNode;
    pinned?: boolean;
    opened?: boolean;
}

export class AuthoringFrameSidePanel extends React.PureComponent<IProps> {
    render() {
        let classes = classNames('sd-editor-grid__sidetabs-content-pinned', {
            [`sidetab-content-pinned--pinned`]: this.props.pinned,
            [`sidetab-content-pinned--open`]: this.props.opened,
        });
        return (
            <div className={classes}>
                {this.props.children}
            </div>
        );
    }
}
