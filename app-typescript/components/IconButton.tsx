import * as React from 'react';

interface IProps {
    icon?: string;
    tooltip?: {
        text: string;
        flow?: 'top' | 'left' | 'right' | 'down'; // defaults to 'top'
    };
    onClick(): void;
}

export class IconButton extends React.Component<IProps> {
    render() {
        return (
            <a className='icn-btn'
                data-sd-tooltip={this.props.tooltip ? this.props.tooltip.text : null}
                data-flow={this.props.tooltip ?
                    (this.props.tooltip.flow !== 'top' ? this.props.tooltip.flow : null) : null}>
                <i className={'icon-' + this.props.icon}></i>
            </a>
        );
    }
}
