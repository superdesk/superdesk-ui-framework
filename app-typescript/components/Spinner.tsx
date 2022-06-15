import * as React from 'react';
import classNames from 'classnames';

class LoadingOverlay extends React.PureComponent {
    render() {
        return (
            <div className="sd-loading-overlay--plain">
                {this.props.children}
            </div>
        );
    }
}

interface IProps {
    size?: 'mini' | 'small' | 'medium' | 'large'; // defaults to 'small'
}

class Spinner extends React.PureComponent<IProps> {
    render() {
        let classes = classNames('sd-spinner', {
            'sd-spinner--small': this.props.size === undefined,
            [`sd-spinner--${this.props.size}`]: this.props.size || this.props.size !== undefined,
        });
        return (
            <svg role="progressbar" className={classes} viewBox="0 0 50 50">
                <circle className="sd-spinner__path" cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
            </svg>
        );
    }
}

export { Spinner, LoadingOverlay };
