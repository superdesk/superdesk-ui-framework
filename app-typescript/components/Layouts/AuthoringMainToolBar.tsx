import * as React from 'react';
import classNames from 'classnames';

interface IProps {
    children?: React.ReactNode;
    toolbarCustom?: boolean;

}

export class AuthoringMainToolBar extends React.PureComponent<IProps> {
    render() {
        let classes = classNames('sd-editor-content__toolbar', {
            'sd-editor-content__toolbar--custom': this.props.toolbarCustom,
        });
        return (
            <div className={classes}>
                {this.props.children}
            </div>
        );
    }
}
