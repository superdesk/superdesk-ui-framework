import * as React from 'react';

interface IProps {
    children?: React.ReactNode;
}

export class AuthoringMainContent extends React.PureComponent<IProps> {
    render() {
        return (
            <div className="sd-editor-content__main-container">
                {this.props.children}
            </div>
        );
    }
}
