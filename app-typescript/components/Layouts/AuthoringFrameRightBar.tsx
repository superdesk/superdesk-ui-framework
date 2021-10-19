import * as React from 'react';

interface IProps {
    children?: React.ReactNode;
}

export class AuthoringFrameRightBar extends React.PureComponent<IProps> {
    render() {
        return (
            <div className="sd-editor-grid__sidetabs-bar">
                {this.props.children}
            </div>
        );
    }
}
