import * as React from 'react';

interface IProps {
    children?: React.ReactNode;
}

export class AuthoringFrameOverlay extends React.PureComponent<IProps> {
    render() {
        return (
            <div className="sd-editor-grid__editor-overlay">
                {this.props.children}
            </div>
        );
    }
}
