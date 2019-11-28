import * as React from 'react';

interface IProps {
    value: any;
    label: {
        text: string,
        side?: 'left' | 'right',
    };
    disabled?: boolean;
    onChange(nextValue: boolean): void;
}

export class Checkbox extends React.Component<IProps> {
    constructor(props: IProps) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        this.props.onChange(!this.props.value);
    }

    render() {
        return (
            <span className='sd-check__wrapper'>
                {this.props.label.side === 'left' ?
                    (this.props.disabled ? (this.props.value ?
                        <label className='sd-label--disabled label--active'>{this.props.label.text}
                        </label> : <label className='sd-label--disabled'>{this.props.label.text}
                        </label>) : (<label className={this.props.value ? 'label--active' : ''}>
                            {this.props.label.text}</label>)) : null}
                <span className={'sd-checkbox' +
                    (this.props.disabled ? (this.props.value ? ' sd-checkbox--disabled checked' : ' sd-checkbox--disabled') :
                        (this.props.value ? ' checked' : ''))}
                    onClick={this.handleChange}></span>
                {!this.props.label.side ?
                    (this.props.disabled ? (this.props.value ?
                        <label className='sd-label--disabled label--active'>{this.props.label.text}
                        </label> : <label className='sd-label--disabled'>{this.props.label.text}
                        </label>) : (<label className={this.props.value ? 'label--active' : ''}>
                            {this.props.label.text}</label>)) : null}
            </span>
        );
    }
}
