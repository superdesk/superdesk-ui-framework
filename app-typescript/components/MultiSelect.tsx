import * as React from "react";
import { MultiSelect as PrimeMultiSelect } from "@superdesk/primereact/multiselect";
import classNames from 'classnames';
import nextId from "react-id-generator";

interface IProps<T> {
    value: Array<T>;
    options: Array<T>;
    placeholder?: string;
    optionLabel: string;
    emptyFilterMessage?: string;
    filterPlaceholder?: string;
    maxSelectedLabels?: number;
    selectedItemsLabel?: string;
    ariaLabelledBy?: string;
    tabIndex?: string | any;
    filter?: boolean;
    showClear?: boolean;
    showSelectAll?: boolean;
    itemTemplate?(item: any): JSX.Element | undefined;
    selectedItemTemplate?(value: any): JSX.Element | undefined;
    onChange(newValue: string): void;
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

interface IState<T> {
    options: Array<T>;
    value: Array<T>;
    invalid: boolean;
}

export class MultiSelect<T> extends React.Component<IProps<T>, IState<T>> {
    constructor(props: IProps<T>) {
        super(props);
        this.state = {
            value: [],
            options: [],
            invalid: this.props.invalid ? this.props.invalid : false,
        };
    }

    render() {

        let classes = classNames({
            'showSelectAll': this.props.showSelectAll,
            'showFilter': this.props.filter,
        });

        const labelClasses = classNames('sd-input__label', {
            'a11y-only': this.props.labelHidden,
        });

        const classesLabel = classNames('sd-input', {
            'sd-input--inline-label': this.props.inlineLabel,
            'sd-input--required': this.props.required,
            'sd-input--disabled': this.props.disabled,
            'sd-input--full-width': this.props.fullWidth,
            'sd-input--invalid': this.props.invalid || this.state.invalid,
        });

        const htmlId = nextId();

        return (
            <div className={classesLabel}>
                <label className={labelClasses} htmlFor={htmlId} id={htmlId + 'label'}
                        tabIndex={this.props.tabindex === undefined ? undefined : -1}>
                    {this.props.label}
                </label>
                <div className="sd-input__input">
                <PrimeMultiSelect
                    panelClassName={classes}
                    value={this.props.value}
                    options={this.props.options}
                    onChange={(e: any) => this.props.onChange(e)}
                    display="chip"
                    filter={this.props.filter}
                    filterBy={this.props.optionLabel}
                    appendTo={document.body}
                    placeholder={this.props.placeholder}
                    optionLabel={this.props.optionLabel}
                    emptyFilterMessage={this.props.emptyFilterMessage}
                    filterPlaceholder={this.props.filterPlaceholder}
                    itemTemplate={this.props.itemTemplate}
                    selectedItemTemplate={this.props.selectedItemTemplate}
                    maxSelectedLabels={this.props.maxSelectedLabels ?? 4}
                    selectedItemsLabel={this.props.selectedItemsLabel}
                    ariaLabelledBy={this.props.ariaLabelledBy}
                    tabIndex={this.props.tabIndex ? this.props.tabIndex : '0'}
                    showClear={this.props.showClear}
                    disabled={this.props.disabled}
                />
                </div>
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
