import * as React from 'react';

interface IProps {
    tooltip?: string;
    icon?: string;
    flow?: 'top' | 'left' | 'right' | 'down';
}

export class IconButton extends React.Component<IProps> {
    render() {
        return (
            <React.Fragment>
                <a className="icn-btn"
                    data-sd-tooltip={this.props.tooltip}
                    data-flow={this.props.flow !== 'top' ? this.props.flow : null}>
                    <i className={'icon-' + this.props.icon}></i>
                </a>
            </React.Fragment>
        );
    }
}
