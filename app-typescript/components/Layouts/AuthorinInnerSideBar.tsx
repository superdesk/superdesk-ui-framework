import * as React from 'react';

interface IProps {
    children?: React.ReactNode;
}

export class AuthorinInnerSideBar extends React.PureComponent<IProps> {
    render() {
        return (
            <div className="sd-editor-content__authoring-bookmark-bar ">
                {this.props.children}
            </div>
        );
    }
}