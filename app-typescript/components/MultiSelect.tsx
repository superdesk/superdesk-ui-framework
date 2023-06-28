import * as React from "react";
import { MultiSelect as PrimeMultiSelect } from "@superdesk/primereact/multiselect";
import classNames from 'classnames';
import nextId from "react-id-generator";
import { InputWrapper } from "./Form";
import {getNextZIndex} from '../zIndex';
import {IInputWrapper} from './Form/InputWrapper';
import {SelectPreview} from './SelectPreview';

interface IProps<T> extends IInputWrapper {
    value: Array<T>;
    options: Array<T>;
    placeholder?: string;
    emptyFilterMessage?: string;
    filterPlaceholder?: string;
    maxSelectedLabels?: number;
    selectedItemsLabel?: string;
    ariaLabelledBy?: string;
    tabIndex?: string | any;
    filter?: boolean;
    showClear?: boolean;
    showSelectAll?: boolean;
    optionLabel: (option: T) => string;
    itemTemplate?(item: T): JSX.Element | undefined;
    selectedItemTemplate?(value: T): JSX.Element | undefined;
    onChange(newValue: Array<T>): void;
}

interface IState<T> {
    options: Array<T>;
    value: Array<T>;
    invalid: boolean;
}

export class MultiSelect<T> extends React.Component<IProps<T>, IState<T>> {
    private htmlId = nextId();
    private zIndex: number = getNextZIndex();

    constructor(props: IProps<T>) {
        super(props);
        this.state = {
            value: this.props.value != null ? this.props.value : [],
            options: [],
            invalid: this.props.invalid ? this.props.invalid : false,
        };
    }

    render() {
        let classes = classNames({
            'showSelectAll': this.props.showSelectAll,
            'showFilter': this.props.filter,
        });

        if (this.props.preview) {
            return (
                <SelectPreview
                    kind={{mode: 'multi-select'}}
                    items={this.state.value}
                    valueTemplate={this.props.selectedItemTemplate}
                    getLabel={this.props.optionLabel}
                />
            );
        }

        return (
            <InputWrapper
                label={this.props.label}
                error={this.props.error}
                required={this.props.required}
                disabled={this.props.disabled}
                info={this.props.info}
                inlineLabel={this.props.inlineLabel}
                labelHidden={this.props.labelHidden}
                htmlId={this.htmlId}
                tabindex={this.props.tabindex}
            >
                <PrimeMultiSelect
                    panelClassName={classes}
                    value={this.props.value}
                    options={this.props.options}
                    onChange={({value}) => this.props.onChange(value)}
                    display="chip"
                    zIndex={this.zIndex}
                    filter={this.props.filter}
                    appendTo={document.body}
                    placeholder={this.props.placeholder}
                    optionLabel={(option) => this.props.optionLabel(option)}
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
                    inputId={this.htmlId}
                />
            </InputWrapper>
        );
    }
}
