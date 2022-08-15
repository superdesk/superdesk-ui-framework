import * as React from 'react';
//import classNames from 'classnames';
import nextId from "react-id-generator";
import { InputWrapper } from './Form';

interface IPropsBase {
    label?: string;
    maxLength?: number;
    info?: string;
    error?: string;
    required?: boolean;
    disabled?: boolean;
    invalid?: boolean;
    inlineLabel?: boolean;
    labelHidden?: boolean;
    tabindex?: number;
    fullWidth?: boolean;
    boxedStyle?: boolean;
    boxedLable?: boolean;
    placeholder?: string;
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

export class Input extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.state = {
            value: this.props.value ?? '',
            invalid: this.props.invalid ?? false,
        };

        this.handleChange = this.handleChange.bind(this);
    }

    htmlId = nextId();

    handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({ value: event.target.value });
        if (this.props.type === 'number') {
            this.props.onChange(Number(event.target.value));
        } else {
            this.props.onChange(event.target.value);
        }

        if (this.props.maxLength && !this.props.invalid) {
            this.setState({ invalid: event.target.value.length > this.props.maxLength });
        }
    }

    componentDidUpdate(prevProps: any) {
        if (prevProps.value !== this.props.value) {
            this.setState({value: this.props.value});
        }
    }

    render() {

        return (
            <InputWrapper
            label={this.props.label}
            error={this.props.error}
            required={this.props.required}
            disabled={this.props.disabled}
            value={this.state.value}
            invalid={this.state.invalid}
            info={this.props.info}
            maxLength={this.props.maxLength}
            inlineLabel={this.props.inlineLabel}
            labelHidden={this.props.labelHidden}
            size={this.props.size ?? 'medium'}
            fullWidth={this.props.fullWidth}
            htmlId={this.htmlId}
            boxedStyle={this.props.boxedStyle}
            boxedLable={this.props.boxedLable}
            tabindex={this.props.tabindex}>
                <input className='sd-input__input'
                type={this.props.type ?? 'text'}
                id={this.htmlId}
                value={this.state.value}
                aria-describedby={this.htmlId + 'label'}
                tabIndex={this.props.tabindex}
                onChange={this.handleChange}
                placeholder={this.props.placeholder}
                disabled={this.props.disabled} />
            </InputWrapper>
        );
    }
}
