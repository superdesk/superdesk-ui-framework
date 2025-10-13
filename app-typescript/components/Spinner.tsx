import * as React from 'react';
import classNames from 'classnames';

class LoadingOverlay extends React.PureComponent {
    render() {
        return <div className="sd-loading-overlay--plain">{this.props.children}</div>;
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
            <svg viewBox="0 0 24 24" className={classes} stroke="var(--color-text-muted)">
                <g className="sd-spinner__path">
                    <circle cx="12" cy="12" r="9.5" fill="none" stroke-width="3"/>
                </g>
            </svg>
        );
    }
}

export {Spinner, LoadingOverlay};
