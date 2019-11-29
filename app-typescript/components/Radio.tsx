import * as React from 'react';
import classNames from 'classnames';

interface IProps<T> {
    value: T;
    options: Array<{
        label: string,
        value: T,
        disabled?: boolean,
    }>;
    labelSide?: 'left' | 'right';
    onChange: (value: T)=> void;
}

export class Radio extends React.PureComponent<IProps> {
    constructor(props: IProps) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleLabel = this.handleLabel.bind(this);
    }

    handleChange(value: string) {
        this.props.onChange(value);
    }

    handleLabel(item: any) {
        const classes = classNames({
            'sd-label--disabled': item.disabled,
            'label--active': this.props.value === item.value,
        });

        return <label className={classes}>{item.label}</label>;
    }

    render() {
        return (
            this.props.options.map((item: any, index: number) => (
                <span className='sd-check__wrapper' key={index}>
                    {this.props.labelSide === 'left' ? this.handleLabel(item) : null}
                    <span className={'sd-checkbox sd-checkbox--radio' +
                        (item.disabled ? ' sd-checkbox--disabled' :
                            (this.props.value === item.value ? ' checked' : ''))}
                        onClick={() => this.handleChange(item.value)}></span>
                    {!this.props.labelSide ? this.handleLabel(item) : null}
                </span>
            ))
        );
    }
}
