import * as React from 'react';
import nextId from "react-id-generator";
interface IProps {
    value?: string;
    options: Array<{
        label: string,
        value: string,
        disabled?: boolean
    }>;
    labelSide?: 'left' | 'right'; // defaults to 'right'
    required?: boolean;
    onChange(nextValue: string): void;
}
export class Radio extends React.Component<IProps> {
    htmlId = nextId();

    constructor(props: IProps) {
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
