import * as React from 'react';

interface IProps {
    children?: React.ReactNode;
}

export class AuthoringMainToolBar extends React.PureComponent<IProps> {
    render() {
        return (
            <div className="sd-editor-content__toolbar">
                {this.props.children}
            </div>
        );
    }
}
