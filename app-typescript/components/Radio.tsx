import * as React from 'react';
import nextId from "react-id-generator";
interface IProps<T> {
    value?: T;
    options: Array<{
        label: string,
        value: T,
        disabled?: boolean
    }>;
    labelSide?: 'left' | 'right', // defaults to 'right'
    required?: boolean;
    onChange(nextValue: boolean): void;
}
export class Radio<T> extends React.Component<IProps<T>> {
    htmlId = nextId();

    constructor(props: IProps<T>) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(item: any) {
        if (!item.disabled) {
            this.props.onChange(item.value);
        }
    }

    render() {
        return (
            this.props.options.map((item: any, index: number) => (
                <span className="sd-check-new__wrapper"
                    key={index}
                    label-position={this.props.labelSide || null}
                    tabIndex={-1}>

                    <input type="radio" className="sd-check-new__input" id={this.htmlId + index} tabIndex={0}
                        name={this.htmlId}
                        onChange={() => this.handleChange(item)}
                        disabled={item.disabled}
                        required={this.props.required} />

                    <span className="sd-radio-new"></span>
                    <label htmlFor={this.htmlId + index} >{item.label}</label>
                </span>
            ))
        );
    }
}
