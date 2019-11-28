import * as React from 'react';

interface IValue {
    value: any;
    text: string;
    disabled?: boolean;
}

interface IProps {
    model: any;
    values: Array<IValue>;
    side?: string;
    onClick(nextValue: string): void;
}

export class Radio extends React.Component<IProps> {
    constructor(props: IProps) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(value: string) {
        this.props.onClick(value);
    }

    render() {

        return (
            this.props.values.map((item: any, index: number) => (
                <span className='sd-check__wrapper' key={index}>
                    {this.props.side === 'left' ?
                        (item.disabled ? <label className='sd-label--disabled'>{item.text}</label> :
                            (<label className={this.props.model === item.value ? 'label--active' : ''}>
                                {item.text}</label>)) : null}
                    <span className={'sd-checkbox sd-checkbox--radio' +
                        (item.disabled ? ' sd-checkbox--disabled' :
                            (this.props.model === item.value ? ' checked' : ''))}
                        onClick={() => this.handleClick(item.value)}></span>
                    {!this.props.side ? (
                        item.disabled ? <label className='sd-label--disabled'>{item.text}
                        </label> : (<label className={this.props.model === item.value ? 'label--active' : ''}>
                            {item.text}</label>)) : null}
                </span>
            ))
        );
    }
}
