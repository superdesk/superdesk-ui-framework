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

export class Input extends React.Component<IProps> {
    constructor(props: IProps) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    htmlId = nextId();

    handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        if (this.props.type === 'number') {
            this.props.onChange(Number(event.target.value));
        } else {
            this.props.onChange(event.target.value);
        }
    }

    render() {
        if (this.props.preview) {
            return (
                <div>
                    <span>{this.props.value}</span>
                </div>
            );
        }

        return (
            <InputWrapper
                label={this.props.label}
                required={this.props.required}
                disabled={this.props.disabled}
                value={this.props.value}
                error={this.props.error}
                invalid={this.props.error != null}
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
                    value={this.props.value}
                    aria-describedby={this.htmlId + 'label'}
                    tabIndex={this.props.tabindex}
                    onChange={this.handleChange}
                    placeholder={this.props.placeholder}
                    disabled={this.props.disabled}
                />
            </InputWrapper>
        );
    }
}
