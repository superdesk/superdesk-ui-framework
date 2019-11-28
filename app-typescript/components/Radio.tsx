import * as React from 'react';

interface IOption {
    value: any;
    label: string;
    disabled?: boolean;
}

interface IProps {
    value: any;
    options: Array<IOption>;
    side?: 'left' | 'right';
    onChange(nextValue: string): void;
}

export class Radio extends React.Component<IProps> {
    constructor(props: IProps) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(value: string) {
        this.props.onChange(value);
    }

    render() {

        return (
            this.props.options.map((item: any, index: number) => (
                <span className='sd-check__wrapper' key={index}>
                    {this.props.side === 'left' ?
                        (item.disabled ? <label className='sd-label--disabled'>{item.label}</label> :
                            (<label className={this.props.value === item.value ? 'label--active' : ''}>
                                {item.label}</label>)) : null}
                    <span className={'sd-checkbox sd-checkbox--radio' +
                        (item.disabled ? ' sd-checkbox--disabled' :
                            (this.props.value === item.value ? ' checked' : ''))}
                        onClick={() => this.handleChange(item.value)}></span>
                    {!this.props.side ? (
                        item.disabled ? <label className='sd-label--disabled'>{item.label}
                        </label> : (<label className={this.props.value === item.value ? 'label--active' : ''}>
                            {item.label}</label>)) : null}
                </span>
            ))
        );
    }
}
