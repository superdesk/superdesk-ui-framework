import * as React from 'react';

interface IProps {
    children?: React.ReactNode;
}

export class AuthoringFrameLeftBar extends React.PureComponent<IProps> {
    render() {
        return (
            <div className="sd-editor-grid__sidebar-left">
                {this.props.children}
            </div>
        );
    }
}
