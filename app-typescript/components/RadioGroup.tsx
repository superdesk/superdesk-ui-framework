import * as React from 'react';
import classNames from 'classnames';
import nextId from 'react-id-generator';

interface IOption {
    label: string;
    value: string;
    disabled?: boolean;
}

interface IProps {
    value?: IOption['value'];
    options: Array<IOption>;
    labelSide?: 'start' | 'end'; // defaults to 'end' (right)
    required?: boolean;
    buttonStyle?: boolean;
    orientation?: 'horizontal' | 'vertical';
    groupLabelledBy?: string;
    tabindex?: number;
    onChange(nextValue: IOption['value']): void;
}

export class RadioGroup extends React.Component<IProps> {
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
        let classes = classNames('sd-check__group-new', {
            'sd-check__group-new--vertical': this.props.orientation === 'vertical',
        });

        return (
            <div className={classes} aria-labelledby={this.props.groupLabelledBy}>{
                this.props.options.map((item: any, index: number) => (
                    <span className="sd-check-new__wrapper"
                        key={index}
                        label-position={this.props.labelSide || null}
                        tabIndex={this.props.tabindex === undefined ? undefined : -1}>

                        <input
                            type="radio"
                            className="sd-check-new__input"
                            id={this.htmlId + index}
                            tabIndex={this.props.tabindex}
                            name={this.htmlId}
                            onChange={() => this.handleChange(item)}
                            disabled={item.disabled}
                            required={this.props.required}
                            checked={item.value === this.props.value}
                        />

                        <span className="sd-radio-new"></span>
                        <label htmlFor={this.htmlId + index} >{item.label}</label>
                    </span>
                ))
            }</div>
        );
    }
}
