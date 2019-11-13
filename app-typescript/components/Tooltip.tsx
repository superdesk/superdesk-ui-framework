import * as React from 'react';

interface IProps {
    text?: string;
    tooltip?: string;
    flow?: 'top' | 'left' | 'right' | 'down'; // defaults to 'top'
}

export class Tooltip extends React.Component<IProps> {
    render() {
        return (
            <React.Fragment>
                <a className="btn"
                    data-sd-tooltip={this.props.tooltip}
                    data-flow={this.props.flow !== 'top' ? this.props.flow : null}>
                    {this.props.text}
                </a>
            </React.Fragment>
        );
    }
}
