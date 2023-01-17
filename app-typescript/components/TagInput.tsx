import * as React from 'react';
import { Chips } from '@superdesk/primereact/chips';
import '../../app/styles/form-elements/_tag-input.scss';
import {InputWrapper} from './Form';
import nextId from "react-id-generator";

interface IProps {
    value: Array<string>;
    onChange(value: Array<string>): void;
    placeholder?: string;
    invalid?: boolean;
    inlineLabel?: boolean;
    labelHidden?: boolean;
    tabindex?: number;
    fullWidth?: boolean;
    info?: string;
    error?: string;
    required?: boolean;
    label?: string;
    disabled?: boolean;
}

export class TagInput extends React.Component<IProps> {
    private htmlId: string = nextId();

    render() {
        const {onChange, value, placeholder} = this.props;

        return (
            <InputWrapper
            label={this.props.label}
            error={this.props.error}
            required={this.props.required}
            disabled={this.props.disabled}
            invalid={this.props.invalid}
            info={this.props.info}
            inlineLabel={this.props.inlineLabel}
            labelHidden={this.props.labelHidden}
            fullWidth={this.props.fullWidth}
            htmlId={this.htmlId}
            tabindex={this.props.tabindex}>
                <Chips
                    className={`tags-input--multi-select sd-input__input ${this.props.disabled ? ' tags-input__padding-disabled' : ''}`}
                    allowDuplicate={false}
                    separator=","
                    onChange={({value}) => onChange(value)}
                    value={value}
                    placeholder={placeholder ? placeholder : 'Type Here'}
                    disabled={this.props.disabled}
                />
            </InputWrapper>
        );
    }
}
