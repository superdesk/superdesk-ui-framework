import * as React from 'react';
import classNames from 'classnames';

interface IPropsBase {
    error?: string;
    required?: boolean;
    disabled?: boolean;
    invalid?: boolean;
    tabIndex?: number;
    fullWidth?: boolean;
    boxedStyle?: boolean;
    // boxedLable?: boolean;
    placeholder?: string;
    htmlId?: string;
    id?: string;
    size?: 'medium' | 'large' | 'x-large'; // default: 'medium'
}

interface IPropsText extends IPropsBase {
    type: 'text';
    value: string;
    onChange(newValue: string): void;
}

interface IPropsPassword extends IPropsBase {
    type: 'password';
    value: string;
    onChange(newValue: string): void;
}

interface IPropsNumber extends IPropsBase {
    type: 'number';
    value: number;
    onChange(newValue: number): void;
}

type IProps = IPropsText | IPropsNumber | IPropsPassword;

interface IState {
    value: string | number;
    invalid: boolean;
}

export class InputBase extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.state = {
            value: this.props.value ?? '',
            invalid: this.props.invalid ?? false,
        };

        this.handleChange = this.handleChange.bind(this);
    }

    // htmlId = nextId();

    handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({ value: event.target.value });
        if (this.props.type === 'number') {
            this.props.onChange(Number(event.target.value));
        } else {
            this.props.onChange(event.target.value);
        }
    }

    componentDidUpdate(prevProps: any) {
        if (prevProps.value !== this.props.value) {
            this.setState({value: this.props.value});
        }
    }

    render() {
        let classes = classNames('sd-input__input', {
            'sd-input__input--boxed-style': this.props.boxedStyle,
            'sd-input__input--required': this.props.required,
            'sd-input__input--invalid': this.props.invalid,
            'sd-input__input--disabled': this.props.disabled,
            'sd-input__input--medium': this.props.size === undefined,
            [`sd-input__input--${this.props.size}`]: this.props.size || this.props.size !== undefined,

        });
        return (
            <input className={classes}
            type={this.props.type ?? 'text'}
            id={this.props.htmlId}
            value={this.state.value}
            aria-describedby={this.props.htmlId + 'label'}
            tabIndex={this.props.tabIndex}
            onChange={this.handleChange}
            placeholder={this.props.placeholder}
            disabled={this.props.disabled} />
        );
    }
}
