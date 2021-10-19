import * as React from 'react';

interface IProps {
    children?: React.ReactNode;
}

export class AuthoringFrameMain extends React.PureComponent<IProps> {
    render() {
        return (
            <div className="sd-editor-grid__editor-content">
                {this.props.children}
            </div>
        );
    }
}
