import * as React from 'react';

interface IProps {
    value: any;
    text: string;
    disabled?: boolean;
    active?: boolean;
    side?: string;
}

interface IState {
    active: boolean;
}

export class Checkbox extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            active: false,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState((state) => ({
            active: !state.active,
        }));
    }

    render() {
        return (
            <span className='sd-check__wrapper'>
                {this.props.side === 'left' ?
                    (this.props.disabled ? (this.props.active ?
                        <label className='sd-label--disabled label--active'>{this.props.text}
                        </label> : <label className='sd-label--disabled'>{this.props.text}
                        </label>) : (<label className={this.state.active ? 'label--active' : ''}>
                            {this.props.text}</label>)) : null}
                <span className={'sd-checkbox' +
                    (this.props.disabled ? (this.props.active ? ' sd-checkbox--disabled checked' : ' sd-checkbox--disabled') :
                        (this.state.active ? ' checked' : ''))}
                    onClick={this.handleClick}></span>
                {!this.props.side ?
                    (this.props.disabled ? (this.props.active ?
                        <label className='sd-label--disabled label--active'>{this.props.text}
                        </label> : <label className='sd-label--disabled'>{this.props.text}
                        </label>) : (<label className={this.state.active ? 'label--active' : ''}>
                            {this.props.text}</label>)) : null}
            </span>
        );
    }
}
