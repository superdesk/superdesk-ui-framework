import * as React from 'react';
import { Chips } from '@superdesk/primereact/chips';
import {InputWrapper} from './Form';
import nextId from "react-id-generator";
import {IInputWrapper} from './Form/InputWrapper';
import {SelectPreview} from './SelectPreview';

interface IProps extends IInputWrapper {
    value: Array<string>;
    onChange(value: Array<string>): void;
    placeholder?: string;
}

export class TagInput extends React.Component<IProps> {
    private htmlId: string = nextId();

    render() {
        const {onChange, value, placeholder} = this.props;

        if (this.props.preview) {
            return (
                <SelectPreview
                    kind={{mode: 'multi-select'}}
                    items={this.props.value}
                    getLabel={(item) => item}
                />
            );
        }

        return (
            <InputWrapper
                label={this.props.label}
                error={this.props.error}
                invalid={this.props.error != null}
                required={this.props.required}
                disabled={this.props.disabled}
                info={this.props.info}
                inlineLabel={this.props.inlineLabel}
                labelHidden={this.props.labelHidden}
                htmlId={this.htmlId}
                tabindex={this.props.tabindex}
            >
                <Chips
                    className={`
                        tags-input--multi-select sd-input__input
                        ${this.props.disabled ? ' tags-input__padding-disabled' : ''}`
                    }
                    allowDuplicate={false}
                    separator=","
                    onChange={(event) => onChange(event.value)}
                    value={value}
                    placeholder={this.props.disabled ? undefined : placeholder}
                    disabled={this.props.disabled}
                />
            </InputWrapper>
        );
    }
}
