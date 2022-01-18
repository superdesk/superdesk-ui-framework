import * as React from 'react';
import classNames from 'classnames';

interface IProps {
    children?: React.ReactNode;
    opened?: boolean;
}

export class AuthoringFrameSidePanelOverlay extends React.PureComponent<IProps> {
    render() {
        let classes = classNames('sd-editor-grid__sidetabs-content-overlay', {
            [`sidetab-content-overlay--open`]: this.props.opened,
        });
        return (
            <div className={classes}>
                <div className='sidetabs-content-overlay__inner'>
                    {this.props.children}
                </div>
            </div>
        );
    }
}
