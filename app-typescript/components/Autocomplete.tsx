import * as React from 'react';
import { AutoComplete } from '@superdesk/primereact/autocomplete';
import classNames from 'classnames';
import nextId from "react-id-generator";

interface IProps {
    items: Array<any>;
    keyValue?: string; // Field of a suggested object to resolve and display
    minLength?: number; // Minimum number of characters to initiate a search
    value?: string | object;
    label?: string;
    placeholder?: string;
    info?: string;
    error?: string;
    required?: boolean;
    disabled?: boolean;
    invalid?: boolean;
    inlineLabel?: boolean;
    isSearchField?: boolean;
    listItemTemplate?(value: any): any;
    search?(searhString: string, callback: (result: Array<any>) => void): {cancel: () => void};
    onChange(newValue: string): void;
    onSelect?(suggestion: string): void;
}

interface IState {
    selectedItem: any;
    filteredItems: any;
    invalid: boolean;
    focused: boolean;
}

export class Autocomplete extends React.Component<IProps, IState> {
    latestCall?: {cancel: () => void};

    constructor(props: IProps) {
        super(props);
        this.state = {
            selectedItem: this.props.value ?? null,
            filteredItems: null,
            invalid: this.props.invalid ?? false,
            focused: false,
        };

        this.searchItem = this.searchItem.bind(this);
    }

    htmlId = nextId();

    search(term: string) {
        if (!this.props.search) {
            return;
        }

        this.latestCall?.cancel();

        this.latestCall = this.props.search(term, (results) => {
            this.setState({filteredItems: results});
        });
    }

    searchItem(event: any) {
        if (this.props.search) {
            return this.search(event.query);
        }

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

    handleChange(event: {originalEvent: Event, value: any}) {
        this.setState({ selectedItem: event.value });
        this.props.onChange(event.value);
    }

    handleSelect(event: {originalEvent: Event, value: any}) {
        this.setState({ selectedItem: event.value });
        if (this.props.onSelect) {
            this.props.onSelect(event.value);
        }
    }

    handleInputClear() {
        this.setState({ selectedItem: null });
    }

    render() {
        let classes, inputFieldClass;

        if (this.props.isSearchField) {
            classes = classNames('sd-searchbar', 'sd-searchbar--boxed', {
                'sd-searchbar--disabled': this.props.disabled,
                'sd-searchbar--invalid': this.props.invalid || this.state.invalid,
                'sd-searchbar--focused': this.state.focused,
            });

            inputFieldClass = 'sd-searchbar__input';
        } else {
            classes = classNames('sd-input', {
                'sd-input--inline-label': this.props.inlineLabel,
                'sd-input--required': this.props.required,
                'sd-input--disabled': this.props.disabled,
                'sd-input--invalid': this.props.invalid || this.state.invalid,
                'sd-input--focused': this.state.focused,
            });

            inputFieldClass = 'sd-input__input';
        }

        return (
            <React.Fragment>
                <div className={classes}>
                    {this.props.label && !this.props.isSearchField ? <label className='sd-input__label'
                        htmlFor={this.htmlId}>{this.props.label}</label> : null}

                    {this.props.label && this.props.isSearchField ? <label className='sd-searchbar__icon'
                        htmlFor={this.htmlId} aria-label={this.props.label}></label> : null}

                    <AutoComplete
                        id={this.htmlId}
                        inputClassName={inputFieldClass}
                        value={this.state.selectedItem}
                        placeholder={this.props.placeholder}
                        suggestions={this.state.filteredItems}
                        completeMethod={this.searchItem}
                        itemTemplate={this.props.listItemTemplate}
                        field={this.props.keyValue}
                        disabled={this.props.disabled}
                        minLength={this.props.minLength ? this.props.minLength : 1}
                        onFocus={() => {this.setState({focused: true}); }}
                        onBlur={() => {this.setState({focused: false}); }}
                        onChange={(event: {originalEvent: Event, value: any}) => this.handleChange(event)}
                        onSelect={(event: {originalEvent: Event, value: any}) => this.handleSelect(event)} />

                    {this.props.isSearchField && this.state.selectedItem
                        ? <button
                            className="sd-searchbar__cancel"
                            onClick={() => this.handleInputClear()}
                        >
                            <i className="icon-remove-sign" aria-label="remove-sign" />
                        </button>
                        : null
                    }

                    {!this.props.isSearchField ?
                        <div className='sd-input__message-box'>
                            {this.props.info && !this.props.invalid && !this.state.invalid ?
                                <div className='sd-input__hint'>{this.props.info}</div> : null}
                            {this.props.invalid || this.state.invalid ?
                                <div className='sd-input__message'>{this.props.error}</div>
                            : null}
                        </div>
                    : null }
                </div>

                {this.props.isSearchField ?
                    <div className='sd-searchbar__message-box'>
                        {this.props.info && !this.props.invalid && !this.state.invalid ?
                            <div className='sd-searchbar__hint'>{this.props.info}</div> : null}
                        {this.props.invalid || this.state.invalid ?
                            <div className='sd-searchbar__message'>{this.props.error}</div>
                        : null}
                    </div>
                : null }
            </React.Fragment>
        );
    }
}
