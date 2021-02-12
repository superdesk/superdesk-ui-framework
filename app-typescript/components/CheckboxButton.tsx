import * as React from 'react';
import nextId from "react-id-generator";
interface IProps {
    label: {
        text: string,
        icon?: string;
        hidden?: boolean,
    };
    checked?: boolean;
    disabled?: boolean;
    required?: boolean;
    onChange(nextValue: boolean): void;
}
export class CheckboxButton extends React.Component<IProps> {
    htmlId = nextId();

    constructor(props: IProps) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        if (!this.props.disabled) {
            this.props.onChange(event.target.checked);
        }
    }

    render() {
        return (
            <span className="sd-check-button sd-check-button--native" tabIndex={-1}>
                <input type="checkbox" className="sd-check-button__input" id={this.htmlId} tabIndex={0}
                    checked={this.props.checked}
                    onChange={this.handleChange}
                    disabled={this.props.disabled}
                    required={this.props.required} />

                <label className="sd-check-button__text-label" htmlFor={this.htmlId} 
                    aria-label={this.props.label.hidden ? this.props.label.text : undefined}>

                    { this.props.label.icon ? <i className={`icon-${this.props.label.icon}`} aria-hidden="true" /> : null }
                    { !this.props.label.hidden || !this.props.label.icon ?
                        <span className="sd-check-button__text-label-inner">{this.props.label.text}</span> : null }
                </label>
            </span>
        );
    }
}
