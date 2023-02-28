import * as React from 'react';
import classNames from 'classnames';

interface IProps {
    children?: React.ReactNode;
    withoutPadding?: boolean;
}

export class AuthoringInnerBody extends React.PureComponent<IProps> {
    render() {
        return (
            <article
                className={classNames(
                    'sd-editor-content__authoring-body',
                    {'sd-editor-content__authoring-body-padding': this.props.withoutPadding === false},
                )}
            >
                {this.props.children}
            </article>
        );
    }
}
