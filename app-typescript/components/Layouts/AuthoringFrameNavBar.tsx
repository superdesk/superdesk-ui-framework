import * as React from 'react';

interface IProps {
    children?: React.ReactNode;
}

export class AuthoringFrameNavBar extends React.PureComponent<IProps> {
    render() {
        return (
            <div className="sd-editor-grid__editor-subnav">
                {this.props.children}
            </div>
        );
    }
}
