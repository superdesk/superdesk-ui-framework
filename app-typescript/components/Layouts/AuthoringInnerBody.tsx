import * as React from 'react';

interface IProps {
    children?: React.ReactNode;
}

export class AuthoringInnerBody extends React.PureComponent<IProps> {
    render() {
        return (
            <article className="sd-editor-content__authoring-body">
                {this.props.children}
            </article>
        );
    }
}
