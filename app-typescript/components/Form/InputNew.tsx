import * as React from 'react';
import nextId from "react-id-generator";

// import {
//     InputBase,
//     InputWrapper
// } from '.';

interface IPropsBase {
    label?: string;
    maxLength?: number;
    info?: string;
    inlineLabel?: boolean;
    labelHidden?: boolean;
    value?: string | number;
    error?: string;
    required?: boolean;
    disabled?: boolean;
    invalid?: boolean;
    tabindex?: number;
    fullWidth?: boolean;
    boxedStyle?: boolean;
    boxedLable?: boolean;
    placeholder?: string;
    type: 'text' | 'number' | 'password';
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

export class InputNew extends React.PureComponent<IProps, IState> {
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
    }

    componentDidUpdate(prevProps: any) {
        if (prevProps.value !== this.props.value) {
            this.setState({value: this.props.value});
        }
    }
    render() {
        return (
            <React.Fragment>
                {/* <InputWrapper
                    label={this.props.label}
                    placeholder={this.props.placeholder}
                    error={this.props.error}
                    required={this.props.required}
                    disabled={this.props.disabled}
                    onChange={this.handleChange}
                    value={this.state.value}
                    invalid={this.state.invalid}
                    info={this.props.info}
                    maxLength={this.props.maxLength}
                    inlineLabel={this.props.inlineLabel}
                    labelHidden={this.props.labelHidden}
                    type={this.props.type ?? 'text'}
                    size={this.props.size ?? 'medium'}
                    fullWidth={this.props.fullWidth}
                    htmlId={this.htmlId}
                    boxedStyle={this.props.boxedStyle}
                    boxedLable={this.props.boxedLable}
                    tabindex={this.props.tabindex}
                    >
                    <InputBase
                        type={this.props.type ?? 'text'}
                        onChange={this.handleChange}
                        disabled={this.props.disabled}
                        id={this.htmlId}
                        value={this.state.value}
                        aria-describedby={this.htmlId + 'label'}
                        tabIndex={this.props.tabindex}
                        placeholder={this.props.placeholder}
                    />
                </InputWrapper> */}
            </React.Fragment>
        );
    }
}
