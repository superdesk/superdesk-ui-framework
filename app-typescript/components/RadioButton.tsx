import * as React from 'react';
import nextId from "react-id-generator";
interface IOption {
    value: any;
    label: string;
    disabled?: boolean;
    icon?: string;
}

interface IProps {
    value: any;
    options: Array<IOption>;
    labelSide?: 'left' | 'right'; // defaults to 'right'
    onChange(nextValue: string): void;
}

export class RadioButton extends React.PureComponent<IProps> {
    constructor(props: IProps) {
        super(props);
    }
    htmlId = nextId();
    handleChange(value: string) {
        this.props.onChange(value);
    }

    render() {

        return (
            this.props.options.map((item: any, index: number) => (
                <React.Fragment key={index + 1}>
                    <input type='checkbox' className='visuallyhidden' id={this.htmlId + index} />
                    <span key={index} className={'sd-check-button' +
                        (item.disabled ? ' sd-checkbox--disabled' :
                            (this.props.value === item.value ? ' checked' : ''))}
                        onClick={() => this.handleChange(item.value)}>
                        {item.icon ? <i className={`icon-${item.icon}`}></i> : null}
                        {item.disabled ?
                            <label
                                className='sd-check-button__text-label sd-label--disabled'
                                htmlFor={this.htmlId + index}>
                                {item.label}</label> :
                            <label
                                className='sd-check-button__text-label'
                                htmlFor={this.htmlId + index}>{item.label}</label>}
                    </span>
                </React.Fragment>
            ))
        );
    }
}
