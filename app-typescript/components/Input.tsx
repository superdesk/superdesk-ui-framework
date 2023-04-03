import * as React from 'react';
import nextId from "react-id-generator";
import {IInputCommon, InputWrapper} from './Form/InputWrapper';

interface IPropsBase extends IInputCommon {
    maxLength?: number;
    placeholder?: string;
    size?: 'medium' | 'large' | 'x-large'; // default: 'medium'
}

interface IPropsText extends IPropsBase {
    type: 'text';
    value?: string;
    onChange(newValue: string): void;
}

interface IPropsPassword extends IPropsBase {
    type: 'password';
    value?: string;
    onChange(newValue: string): void;
}

interface IPropsNumber extends IPropsBase {
    type: 'number';
    value?: number;
    onChange(newValue: number): void;
}

type IProps = IPropsText | IPropsNumber | IPropsPassword;

interface IState {
    value: string | number;
    error: string | null;
}

export class Input extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.state = {
            value: this.props.value ?? '',
            error: null,
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

        if (this.props.maxLength) {
            const invalid = event.target.value.length > this.props.maxLength;
            this.setState({ error: invalid === true ? 'Length exceeded' : null});
        }
    }

    componentDidUpdate(prevProps: any) {
        if (prevProps.value !== this.props.value) {
            this.setState({value: this.props.value ?? ''});
        }
    }

    render() {
        const error: string | null | undefined = this.state.error ?? this.props.error;
        const invalid = error != null;

        return (
            !this.props.preview
                ? <InputWrapper
                    label={this.props.label}
                    required={this.props.required}
                    disabled={this.props.disabled}
                    value={this.state.value}
                    invalid={invalid}
                    error={error}
                    info={this.props.info}
                    maxLength={this.props.maxLength}
                    inlineLabel={this.props.inlineLabel}
                    labelHidden={this.props.labelHidden}
                    size={this.props.size ?? 'medium'}
                    fullWidth={this.props.fullWidth}
                    htmlId={this.htmlId}
                    boxedStyle={this.props.boxedStyle}
                    boxedLable={this.props.boxedLable}
                    tabindex={this.props.tabindex}
                >
                    <input
                        className='sd-input__input'
                        type={this.props.type ?? 'text'}
                        id={this.htmlId}
                        value={this.state.value}
                        aria-describedby={this.htmlId + 'label'}
                        tabIndex={this.props.tabindex}
                        onChange={this.handleChange}
                        placeholder={this.props.placeholder}
                        disabled={this.props.disabled}
                    />
                </InputWrapper>
                : <div>
                    <span>{this.state.value}</span>
                </div>
        );
    }
}
