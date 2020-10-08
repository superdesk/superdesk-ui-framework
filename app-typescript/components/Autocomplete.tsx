import * as React from 'react';
import { AutoComplete } from 'primereact/autocomplete';
import classNames from 'classnames';
import nextId from "react-id-generator";

interface IProps {
    items: Array<any>;
    keyValue?: string; // Field of a suggested object to resolve and display
    minLength?: number; // Minimum number of characters to initiate a search
    label?: string;
    info?: string;
    error?: string;
    required?: boolean;
    disabled?: boolean;
    invalid?: boolean;
    inlineLabel?: boolean;
    onChange(newValue: string): void;
}

interface IState {
    selectedItem: any;
    filteredItems: any;
    invalid: boolean;
}

export class Autocomplete extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            selectedItem: null,
            filteredItems: null,
            invalid: this.props.invalid ?? false,
        };

        this.searchItem = this.searchItem.bind(this);
        this.itemTemplate = this.itemTemplate.bind(this);
    }

    htmlId = nextId();

    searchItem(event: any) {
        setTimeout(() => {
            let filteredItems;
            if (!event.query.trim().length) {
                filteredItems = [...this.props.items];
            } else {
                filteredItems = this.props.items.filter((item) => {
                    if (this.props.keyValue) {
                        return item[this.props.keyValue].toLowerCase().startsWith(event.query.toLowerCase());
                    }

                    return item.toLowerCase().startsWith(event.query.toLowerCase());
                });
            }

            this.setState({ filteredItems });
        }, 250);
    }

    itemTemplate(item: any) {
        return (
            <div>
                <div>{this.props.keyValue ? item[this.props.keyValue] : item}</div>
            </div>
        );
    }

    handleChange(event: {originalEvent: Event, value: any}) {
        this.setState({ selectedItem: event.value });
        this.props.onChange(event.value);
    }

    render() {
        const classes = classNames('sd-input', {
            'sd-input--inline-label': this.props.inlineLabel,
            'sd-input--required': this.props.required,
            'sd-input--disabled': this.props.disabled,
            'sd-input--invalid': this.props.invalid || this.state.invalid,
        });

        return (
            <div className={classes}>
                {this.props.label ? <label className='sd-input__label'
                    htmlFor={this.htmlId}>{this.props.label}</label> : null}

                <AutoComplete
                    id={this.htmlId}
                    inputClassName='sd-input__input'
                    value={this.state.selectedItem}
                    suggestions={this.state.filteredItems}
                    completeMethod={this.searchItem}
                    field={this.props.keyValue}
                    disabled={this.props.disabled}
                    minLength={this.props.minLength ? this.props.minLength : 1}
                    onChange={(event: {originalEvent: Event, value: any}) => this.handleChange(event)} />

                <div className='sd-input__message-box'>
                    {this.props.info && !this.props.invalid && !this.state.invalid ?
                        <div className='sd-input__hint'>{this.props.info}</div> : null}
                    {this.props.invalid || this.state.invalid ?
                        <div className='sd-input__message'>{this.props.error}</div>
                        : null}
                </div>
            </div>
        );
    }
}
