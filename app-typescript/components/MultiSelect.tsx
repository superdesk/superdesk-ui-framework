import * as React from "react";
import { MultiSelect as PrimeMultiSelect } from "@superdesk/primereact/multiselect";
import classNames from 'classnames';
import nextId from "react-id-generator";
import { InputWrapper } from "./Form";

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
    onChange(newValue: T): void;
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
    private htmlId = nextId();

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
            tabindex={this.props.tabindex}>
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
                ariaLabelledBy={this.htmlId + 'label'}
                tabIndex={this.props.tabIndex ? this.props.tabIndex : '0'}
                showClear={this.props.showClear}
                disabled={this.props.disabled}
                inputId={this.htmlId} />
            </InputWrapper>
        );
    }
}
