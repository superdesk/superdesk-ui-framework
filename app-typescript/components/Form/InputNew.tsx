import * as React from 'react';
import nextId from "react-id-generator";

import {
    InputBase,
    InputWrapper
} from '.';

interface IPropsBase {
    label: string;
    maxLength?: number;
    info?: string;
    inlineLabel?: boolean;
    labelHidden?: boolean;
    error?: string;
    required?: boolean;
    disabled?: boolean;
    invalid?: boolean;
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
    value: string;
    onChange(newValue: string): void;
}

type IProps = IPropsText | IPropsNumber | IPropsPassword;

interface IState {
    value: string;
    invalid: boolean;
}

export class InputNew extends React.PureComponent<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.state = {
            value: this.props.value ?? '',
            invalid: this.props.invalid ?? false,
        };
    }

    componentDidUpdate(prevProps: any) {
        if (prevProps.value !== this.props.value) {
            this.setState({ value: this.props.value });
        }
    }

    htmlId = nextId();

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
                <InputBase
                    type="text"
                    onChange={(value: string) => {
                        this.setState({ value: value });
                        this.setState({ invalid: this.props.maxLength
                            ? (value as string).length > this.props.maxLength
                            : false });
                        this.props.onChange(value as string);
                    }}
                    disabled={this.props.disabled}
                    htmlId={this.htmlId}
                    value={this.state.value}
                    aria-describedby={this.htmlId + 'label'}
                    tabIndex={this.props.tabindex}
                    placeholder={this.props.placeholder} />
            </InputWrapper>
        );
    }
}
