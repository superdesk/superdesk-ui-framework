import * as React from 'react';

interface IProps {
    text: string;
    tooltip?: {
        text: string;
        flow?: 'top' | 'left' | 'right' | 'down'; // defaults to 'top'
    };
    onClick(): void;
}

export class Tooltip extends React.Component<IProps> {
    render() {
        return (
            <React.Fragment>
                <a className="btn"
                    data-sd-tooltip={this.props.tooltip.text}
                    data-flow={this.props.tooltip.flow !== 'top' ? this.props.tooltip.flow : null}>
                    {this.props.text}
                </a>
            </React.Fragment>
        );
    }
}
