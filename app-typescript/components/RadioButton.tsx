import * as React from 'react';

interface IOption {
    value: any;
    label: string;
    disabled?: boolean;
    icon?: string;
}

interface IProps {
    value: any;
    options: Array<IOption>;
    labelSide?: 'left' | 'right';
    onChange(nextValue: string): void;
}

export class RadioButton extends React.PureComponent<IProps> {
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
                    <span className={'sd-checkbox sd-checkbox--button-style sd-checkbox--radio' +
                        (item.disabled ? ' sd-checkbox--disabled' :
                            (this.props.value === item.value ? ' checked' : ''))}
                        onClick={() => this.handleChange(item.value)}>
                        {item.icon ? <i className={`icon-${item.icon}`}></i> : null}
                        {item.disabled ? <label className='sd-label--disabled'>{item.label}
                        </label> : <label>{item.label}</label>}
                    </span>
                </span>
            ))
        );
    }
}
