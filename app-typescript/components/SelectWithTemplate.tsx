import * as React from 'react';
import {Dropdown} from '@superdesk/primereact/dropdown';

interface IProps<T> {
    // Don't forget to cancel unfinished requests every the prop is called.
    getItems(searchString: string | null): Promise<Array<T>>;
    value: T;
    getLabel(option: T): string;
    onChange(value: T): void;
    areEqual(a: T, b: T): boolean; // Using reference equality for objects is error prone.
    itemTemplate: React.ComponentType<{option: T | null}>;
    noResultsFoundMessage: string;
    filterPlaceholder?: string;

    disabled?: boolean;
    required?: boolean;
    autoFocus?: boolean;
    autoOpen?: boolean; // Avoid using this - the dropdown may cover important elements.
    width?: 'min' | '100%'; // defaults to min
    zIndex?: number;
    'data-test-id'?: string;
}

interface IState<T> {
    options: Array<T>;
    loading: boolean;
}

const labelKey = 'label';

export class SelectWithTemplate<T> extends React.Component<IProps<T>, IState<T>> {
    componentRef: Dropdown | null;

    constructor(props: IProps<T>) {
        super(props);

        this.state = {
            options: [],
            loading: false,
        };

        this.componentRef = null;
    }
    componentDidMount() {
        this.setState({loading: true});
        this.props.getItems(null).then((_options) => {
            this.setState({options: _options, loading: false});

            if (this.props.autoFocus && this.props.autoOpen) {
                (this.componentRef as unknown as any)?.showOverlay();
            }
        });
    }
    render() {
        const ItemTemplate = this.props.itemTemplate;
        const {loading, options} = this.state;
        const {
            value,
            onChange,
            getLabel,
            disabled,
            required,
            zIndex,
            autoFocus,
            areEqual,
            getItems,
            noResultsFoundMessage: emptyFilterMessage,
            filterPlaceholder,
            width,
        } = this.props;

        // Using another data structure so it is possible to have getLabel function
        // which is more type safe than passing a string with a field name to use for labels.
        function toInternalStructure(option: any) {
            return {[labelKey]: getLabel(option), original: option};
        }

        const optionsInternal = options.map((option) => toInternalStructure(option));
        const valueInternal = value == null
            ? null
            : optionsInternal?.find(({original}) => areEqual(original, value)) ?? toInternalStructure(value);

        // This is regarding the placeholder for selected value.
        // itemTemplate will be used to render it, but a non-empty value
        // needs to be passed to prime react component
        // or it will not be displayed at all, even if returned by itemTemplate
        const fakePlaceholderWithNonBreakingSpace = ' ';

        return (
            <Dropdown
                value={valueInternal}
                options={optionsInternal}
                onChange={(e) => {
                    onChange(e.value == null ? null : e.value.original);
                }}
                placeholder={fakePlaceholderWithNonBreakingSpace}
                filterPlaceholder={filterPlaceholder}
                filter
                filterBy={labelKey}
                showClear={!required}
                emptyFilterMessage={emptyFilterMessage}
                valueTemplate={(option) => <ItemTemplate option={option == null ? null : option.original} />}
                itemTemplate={(option) => <ItemTemplate option={option.original} />}
                disabled={disabled}
                required={required}
                autoFocus={autoFocus}
                appendTo={document.body}
                loading={loading}
                onFilterInputChange={(searchString) => {
                    this.setState({loading: true});

                    getItems(searchString).then((_options) => {
                        this.setState({options: _options, loading: false});
                    });
                }}
                zIndex={zIndex}
                style={width === '100%' ? {display: 'flex', width: '100%'} : {}}
                ref={(componentRef) => {
                    this.componentRef = componentRef;
                }}
            />
        );
    }
}
