import * as React from "react";
import { MultiSelect as PrimeMultiSelect } from "@superdesk/primereact/multiselect";
import classNames from 'classnames';

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
    tabIndex?: string;
    filter?: boolean;
    showClear?: boolean;
    showSelectAll?: boolean;
    itemTemplate?(item: any): JSX.Element | undefined;
    selectedItemTemplate?(value: any): JSX.Element | undefined;
    onChange(newValue: string): void;
}

interface IState<T> {
    options: Array<T>;
    value: Array<T>;
}

export class MultiSelect<T> extends React.Component<IProps<T>, IState<T>> {
    constructor(props: IProps<T>) {
        super(props);
        this.state = {
            value: [],
            options: [],
        };
    }

    render() {

        let classes = classNames({
            'showSelectAll': this.props.showSelectAll,
            'showFilter': this.props.filter,
        });

        return (
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
                tabIndex={this.props.tabIndex ?? '0'}
                showClear={this.props.showClear}
            />
        );
    }
}
