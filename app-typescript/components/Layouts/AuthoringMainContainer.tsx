import * as React from 'react';

interface IProps {
    children?: React.ReactNode;
}

export class AuthoringMainContainer extends React.PureComponent<IProps> {
    render() {
        return (
            <div className="sd-editor-content">
                {this.props.children}
            </div>
        );
    }
}
