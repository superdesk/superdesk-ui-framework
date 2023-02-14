import * as React from 'react';

interface IProps {
    children?: React.ReactNode;
    withoutPadding?: boolean;
}

export class AuthoringInnerBody extends React.PureComponent<IProps> {
    render() {
        return (
            <article className={`sd-editor-content__authoring-body ${!this.props.withoutPadding && 'sd-editor-content__authoring-body-padding'}`}>
                {this.props.children}
            </article>
        );
    }
}
