import * as React from 'react';
import nextId from "react-id-generator";
interface IProps {
    value?: string;
    options: Array<{
        label: string,
        value: string,
        icon?: string;
        labelHidden?: boolean,
        disabled?: boolean
    }>;
    required?: boolean;
    onChange(nextValue: string): void;
}
export class RadioButton extends React.Component<IProps> {
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
            <React.Fragment>{
                this.props.options.map((item: any, index: number) => (
                    <span className="sd-check-button sd-check-button--native"
                        key={index}
                        tabIndex={-1}>

                        <input type="radio" className="sd-check-button__input"
                            id={this.htmlId + index}
                            tabIndex={0}
                            name={this.htmlId}
                            onChange={() => this.handleChange(item)}
                            disabled={item.disabled}
                            required={this.props.required} />

                        <label className="sd-check-button__text-label" htmlFor={this.htmlId + index}
                            aria-label={item.labelHidden ? item.label : undefined}>

                            { item.icon ?  <i className={`icon-${item.icon}`} aria-hidden="true" /> : null }
                            { !item.labelHidden || !item.icon ?
                                <span className="sd-check-button__text-label-inner">{item.label}</span> : null }
                        </label>
                    </span>
                ))
            }</React.Fragment>
        );
    }
}
