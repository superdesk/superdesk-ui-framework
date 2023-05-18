import * as React from 'react';
import nextId from "react-id-generator";
import { InputWrapper } from './Form';
import {IInputWrapper} from './Form/InputWrapper';

interface ISelect extends IInputWrapper {
    value?: string;
    onChange(newValue: string): void;
}

class Select extends React.Component<ISelect> {
    private htmlId = nextId();
    constructor(props: ISelect) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
        this.props.onChange(event.target.value);
    }

    render() {
        if (this.props.preview) {
            return (
                <div>
                    <span>{this.props.value}</span>
                </div>
            );
        } else {
            return (
                <InputWrapper
                    label={this.props.label}
                    error={this.props.error}
                    required={this.props.required}
                    disabled={this.props.disabled}
                    readonly={this.props.readonly}
                    info={this.props.info}
                    inlineLabel={this.props.inlineLabel}
                    labelHidden={this.props.labelHidden}
                    fullWidth={this.props.fullWidth}
                    htmlId={this.htmlId}
                    tabindex={this.props.tabindex}
                >
                    <select
                        className='sd-input__select'
                        id={this.htmlId}
                        value={this.props.value}
                        aria-describedby={this.htmlId}
                        tabIndex={this.props.tabindex}
                        onChange={this.handleChange}
                        disabled={this.props.disabled || this.props.readonly}
                    >
                        {this.props.children}
                    </select>
                </InputWrapper>
            );
        }
    }
}

interface IOption {
    value?: string;
}

class Option extends React.PureComponent<IOption> {
    render() {
        return (
            <option value={this.props.value}>{this.props.children}</option>
        );
    }
}

export { Select, Option };
