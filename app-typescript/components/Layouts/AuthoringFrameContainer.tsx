import * as React from 'react';

interface IProps {
    children?: React.ReactNode;
}

export class AuthoringFrameContainer extends React.PureComponent<IProps> {
    render() {
        return (
            <div className="sd-editor-grid">
                {this.props.children}
            </div>
        );
    }
}
