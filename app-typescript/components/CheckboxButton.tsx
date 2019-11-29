import * as React from 'react';

interface IProps {
    checked: boolean;
    label: {
        text: string,
    };
    icon?: string;
    disabled?: boolean;
    onChange(nextValue: boolean): void;
}

export class CheckboxButton extends React.PureComponent<IProps> {
    constructor(props: IProps) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        this.props.onChange(!this.props.checked);
    }

    render() {
        return (
            <span className='sd-check__wrapper'>
                <span className={'sd-checkbox sd-checkbox--button-style' +
                    (this.props.disabled ? ' sd-checkbox--disabled' :
                        (this.props.checked ? ' checked' : ''))}
                    onClick={this.handleChange}>
                    {this.props.icon ? <i className={`icon-${this.props.icon}`}></i> : null}
                    {this.props.disabled ? (<label className='sd-label--disabled'>{this.props.label.text}
                    </label>) : (<label className={this.props.checked ? 'label--active' : ''}>
                        {this.props.label.text}</label>)}
                </span>
            </span>
        );
    }
}
