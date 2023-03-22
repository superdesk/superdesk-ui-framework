import * as React from 'react';
import nextId from "react-id-generator";
import { InputWrapper } from './Form';

interface ISelect {
    value?: string;
    label: string;
    info?: string;
    error?: string;
    required?: boolean;
    disabled?: boolean;
    invalid?: boolean;
    inlineLabel?: boolean;
    labelHidden?: boolean;
    tabindex?: number;
    fullWidth?: boolean;
    onChange(newValue: string): void;
}

interface IState {
    invalid: boolean;
}

class Select extends React.Component<ISelect, IState> {
    private htmlId = nextId();
    constructor(props: ISelect) {
        super(props);

        this.state = {
            invalid: this.props.invalid ?? false,
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
        this.props.onChange(event.target.value);
    }

    render() {
        return (
            <InputWrapper
                label={this.props.label}
                error={this.props.error}
                required={this.props.required}
                disabled={this.props.disabled}
                invalid={this.state.invalid}
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
                    disabled={this.props.disabled}
                >
                    {this.props.children}
                </select>
            </InputWrapper>
        );
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
