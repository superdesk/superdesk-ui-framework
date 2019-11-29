import * as React from 'react';

interface IProps {
    text: string;
    tooltip?: {
        text: string;
        flow?: 'top' | 'left' | 'right' | 'down'; // defaults to 'top'
    };
    onClick(): void;
}

export class Tooltip extends React.PureComponent<IProps> {
    render() {
        return (
            <a className="btn"
                data-sd-tooltip={this.props.tooltip ? this.props.tooltip.text : null}
                data-flow={this.props.tooltip ?
                    (this.props.tooltip.flow !== 'top' ? this.props.tooltip.flow : null) : null}>
                {this.props.text}
            </a>
        );
    }
}
