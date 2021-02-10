import * as React from 'react';
import nextId from "react-id-generator";
interface IProps {
    label: {
        text: string,
        side?: 'left' | 'right', // defaults to 'right'
        hidden?: boolean,
    };
    checked?: boolean;
    disabled?: boolean;
    required?: boolean;
    onChange(nextValue: boolean): void;
}
export class Checkbox extends React.Component<IProps> {
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
            <span className="sd-check-new__wrapper" label-position={this.props.label.side || null} tabIndex={-1}>
                <input type="checkbox" className="sd-check-new__input" id={this.htmlId} tabIndex={0}
                    checked={this.props.checked}
                    onChange={this.handleChange}
                    disabled={this.props.disabled}
                    required={this.props.required} />

                <span className="sd-check-new"></span>

                { this.props.label.hidden ? <label htmlFor={this.htmlId}  aria-label={this.props.label.text} /> : null }
                { !this.props.label.hidden ? <label htmlFor={this.htmlId} >{this.props.label.text}</label> : null }
            </span>
        );
    }
}
