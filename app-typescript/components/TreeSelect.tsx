import * as React from "react";
import { Icon } from "./Icon";
import { Loader } from "./Loader";
import classNames from 'classnames';
import nextId from "react-id-generator";

interface IState<T> {
    value: Array<T>;
    options: Array<ITreeNode<T>>;
    firstBranchOptions: Array<any>;                // to return on first branch in dropdown
    openDropdown: boolean;                         // open/close dropdown
    activeTree: Array<any>;                         // for filtered array
    filterArr: Array<any>;                          // for filtered array
    searchFieldValue: string;                      // filter value of input
    buttonTree: Array<any>;                         // array of button (for backButton)
    buttonValue: any;                              // button for name of category
    buttonMouseEvent: boolean;                     // valueButton hover
    loading: boolean;
    invalid: boolean;
}

interface IPropsBase<T> {
    value?: Array<T>;
    selectBranchWithChildren?: boolean;
    readOnly?: boolean;
    width?: string;
    allowMultiple?: boolean;
    loading?: boolean;
    singleLevelSearch?: boolean;
    placeholder?: string;
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
    getLabel(item: T): string;
    getId(item: T): string;
    optionTemplate?(item: T): React.ComponentType<T> | JSX.Element;
    valueTemplate?(item: T): React.ComponentType<T> | JSX.Element;
    onChange(e: Array<T>): void;
}

interface IPropsSync<T> extends IPropsBase<T> {
    kind: 'synchronous';
    getOptions(): Array<ITreeNode<T>>;
}

interface IPropsAsync<T> extends IPropsBase<T> {
    kind: 'asynchronous';
    getOptions?(): Array<ITreeNode<T>>;
    searchOptions(term: string, callback?: (options: Array<ITreeNode<T>>) => void): any;
}

type IProps<T> = IPropsSync<T> | IPropsAsync<T>;

export interface ITreeNode<T> {
    value: T;
    children?: Array<ITreeNode<T>>;
}

export class TreeSelect<T> extends React.Component<IProps<T>, IState<T>> {
    private dropdownRef: React.RefObject<HTMLInputElement>;
    private openDropdownRef: React.RefObject<HTMLButtonElement>;

    constructor(props: IProps<T>) {
        super(props);
        this.state = {
            value: this.props.value ? this.props.value : [],
            options: this.props.getOptions ? this.props.getOptions() : [],
            firstBranchOptions: this.props.getOptions ? this.props.getOptions() : [],
            activeTree: [],
            filterArr: [],
            searchFieldValue: '',
            buttonTree: [],
            buttonValue: [],
            buttonMouseEvent: false,
            openDropdown: false,
            loading: this.props.loading ? this.props.loading : false,
            invalid: this.props.invalid ? this.props.invalid : false,
        };

        this.removeClick = this.removeClick.bind(this);
        this.handleMultiLevel = this.handleMultiLevel.bind(this);
        this.backButton = this.backButton.bind(this);
        this.handleButton = this.handleButton.bind(this);
        this.backButtonValue = this.backButtonValue.bind(this);
        this.handleTree = this.handleTree.bind(this);
        this.filteredItem = this.filteredItem.bind(this);
        this.dropdownRef = React.createRef();
        this.openDropdownRef = React.createRef();
    }

    removeClick(i: number) {
        let newTags = this.state.value;
        newTags?.splice(i, 1);

        this.setState({
            value: newTags,
        });
        this.props.onChange(this.state.value);
    }

    handleMultiLevel(item: ITreeNode<T>) {
        if (item.children) {
            this.setState({
                activeTree: [...this.state.activeTree, this.state.options],
                options: item.children,
            });
        }
    }

    handleButton(item: ITreeNode<T>) {
        this.setState({
            buttonTree: [...this.state.buttonTree, this.state.buttonValue],
            buttonValue: item,
        });
    }

    handleValue(event: React.MouseEvent<HTMLLIElement, MouseEvent>, item: ITreeNode<T>) {
        if (this.props.allowMultiple) {
            let checkItem = this.state.value.find((valueItem: T) => {
                return this.props.getId(valueItem) === this.props.getId(item.value);
            });
            if (!checkItem) {
                this.setState({value: [...this.state.value, item.value]});
            }
            if (!event.ctrlKey) {
                if (this.props.getOptions) {
                    this.setState({options: this.state.firstBranchOptions, activeTree: [], openDropdown: false});
                } else {
                    this.setState({activeTree: [], openDropdown: false});
                }
            }
            this.setState({buttonMouseEvent: false});
        } else {
            let checkItem = this.state.value.find((valueItem: T) => {
                return this.props.getId(valueItem) === this.props.getId(item.value);
            });
            if (!checkItem) {
                this.setState({value: [item.value]});
            }
            if (!event.ctrlKey) {
                this.setState({options: this.state.firstBranchOptions, activeTree: [], openDropdown: false});
            }
            this.setState({buttonMouseEvent: false});
        }
    }

    handleBranchValue(event: React.MouseEvent<HTMLButtonElement, MouseEvent>, item: ITreeNode<T>) {
        if (this.props.allowMultiple) {
            if (this.props.selectBranchWithChildren) {
                let checkItem = this.state.value.find((valueItem: T) => {
                    return this.props.getId(valueItem) === this.props.getId(item.value);
                });
                if (!checkItem) {
                    this.setState({value: [...this.state.value, item.value]});
                }
                if (!event.ctrlKey) {
                    this.setState({options: this.state.firstBranchOptions, activeTree: [], openDropdown: false});
                }
                this.setState({buttonMouseEvent: false});
            }
        } else {
            if (this.props.selectBranchWithChildren) {
                let checkItem = this.state.value.find((valueItem: T) => {
                    return this.props.getId(valueItem) === this.props.getId(item.value);
                });
                if (!checkItem) {
                    this.setState({value: [item.value]});
                }
                if (!event.ctrlKey) {
                    this.setState({options: this.state.firstBranchOptions, activeTree: [], openDropdown: false});
                }
                this.setState({buttonMouseEvent: false});
            }
        }
    }

    handleTree(event: React.MouseEvent<HTMLLIElement, MouseEvent>, option: ITreeNode<T>) {
        if (option.children) {
            this.handleButton(option);
            this.handleMultiLevel(option);
            if (event.altKey && this.props.allowMultiple) {
                if (this.props.selectBranchWithChildren) {
                    let filteredItems: Array<T> = [];
                    option.children.forEach((item: { value: T; }) => {
                        if (!this.state.value.includes(item.value)) {
                            filteredItems.push(item.value);
                        }
                    });
                    this.setState({
                        value: [...this.state.value, ...filteredItems],
                        options: this.state.firstBranchOptions,
                        openDropdown: false,
                        activeTree: [],
                    });
                } else {
                    let filteredItems: Array<T> = [];
                    option.children.forEach((item: ITreeNode<T>) => {
                        if (!this.state.value.includes(item.value)
                        && !item.children) {
                            filteredItems.push(item.value);
                        }
                    });
                    if (filteredItems.length > 0) {
                        this.setState({
                            value: [...this.state.value, ...filteredItems],
                            options: this.state.firstBranchOptions,
                            openDropdown: false,
                            activeTree: [],
                        });
                    }
                }
            }
        } else {
            this.handleValue(event, option);
            if (!event.ctrlKey) {
                this.setState({openDropdown: false});
            }
        }
    }

    backButton = () => {
        if (this.state.activeTree.length > 0) {
            this.setState({
                options: this.state.activeTree.pop(),
            });
            return;
        } else {
            return false;
        }
    }

    backButtonValue = () => {
        this.setState({
            buttonValue: this.state.buttonTree.pop(),
        });
    }

    recursion(arr: Array<ITreeNode<T>>) {
        arr.map((item) => {
            this.state.filterArr.push(item);
            if (item.children) {
                this.recursion(item.children);
            }
        });
    }

    componentDidMount = () => {
        this.recursion(this.state.options);
        document.addEventListener("mousedown", (event: any) => {
            if ((this.dropdownRef.current && !this.dropdownRef.current.contains(event.target))
            && (this.openDropdownRef.current && !this.openDropdownRef.current.contains(event.target))) {
                this.setState({openDropdown: false});
            }
        });
    }

    componentDidUpdate(prevProps: Readonly<IProps<T>>, prevState: Readonly<IState<T>>): void {
        if (prevState.value !== this.state.value) {
            this.props.onChange(this.state.value);
        } else if (prevProps.value !== this.props.value) {
            this.props.onChange(this.state.value);
        }
    }

    filteredItem(arr: Array<ITreeNode<T>>) {
        if (this.props.kind === 'synchronous') {
            return arr.filter((item) => {
                if (this.state.searchFieldValue) {
                    if (this.props.getLabel(item.value)
                    .toLowerCase().includes(this.state.searchFieldValue.toLowerCase())) {
                        return item.value;
                    } else {
                        return;
                    }
                } else {
                    return item.value;
                }
            }).map((option, i) => {
                let selectedItem = this.state.value.some((obj) =>
                    this.props.getId(obj) === this.props.getId(option.value),
                );
                return <li key={i}
                className={`suggestion-item suggestion-item--multi-select`}
                onClick={(event) => {
                    this.setState({
                        searchFieldValue: '',
                    }),
                    event.preventDefault();
                    event.stopPropagation();
                    this.handleTree(event, option);
                }}>
                    {this.props.optionTemplate
                        ? this.props.optionTemplate(option.value)
                        : <span
                        className={selectedItem
                        ? 'suggestion-item--disabled' : undefined}
                        >
                            {this.props.getLabel(option.value)}
                        </span>}
                        {option.children && <span className="suggestion-item__icon">
                            <Icon name="chevron-right-thin"></Icon>
                        </span>}
                </li>;
            });
        } else if (this.props.kind === 'asynchronous') {
            return this.state.options.map((item, i) => {
                let selectedItem = this.state.value.some((obj) =>
                    this.props.getId(obj) === this.props.getId(item.value),
                );
                return (
                    <li key={i}
                    className={`suggestion-item suggestion-item--multi-select`}
                    onClick={(event) => {
                    this.handleValue(event, item);
                    }}>
                        {this.props.optionTemplate
                        ? this.props.optionTemplate(item.value)
                        : <span
                        className={selectedItem
                        ? 'suggestion-item--disabled' : undefined}
                        >
                            {this.props.getLabel(item.value)}
                        </span>}
                    </li>
                );
            });
        } else {
            return;
        }
    }

    render() {

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

                <div className={`tags-input tags-input--${this.props.allowMultiple ? 'multi-select' : 'single-select'} sd-input__input`}>
                    {this.props.allowMultiple
                        ? <div className="tags-input__tags">
                        {this.props.readOnly
                        || <button ref={this.openDropdownRef}
                        className="tags-input__add-button"
                        onClick={() => this.setState({openDropdown: !this.state.openDropdown})}>
                            <i className="icon-plus-large"></i>
                        </button>}
                            <ul className="tags-input__tag-list">
                                {this.state.value.map((item, i: number) => {
                                    return <React.Fragment key={i}>
                                        <li
                                        className={"tags-input__tag-item tags-input__tag-item--multi-select"
                                        + (this.props.readOnly ? ' tags-input__tag-item--readonly' : '')}
                                        onClick={() => this.props.readOnly || this.removeClick(i)}>
                                            <span className="tags-input__helper-box">
                                                {this.props.valueTemplate
                                                ? this.props.valueTemplate(item)
                                                : <span>{this.props.getLabel(item)}</span>}
                                                {this.props.readOnly
                                                || <span className="tags-input__remove-button">
                                                    <Icon name="close-small"></Icon>
                                                </span>}
                                            </span>
                                        </li>
                                    </React.Fragment>;
                                })}
                            </ul>
                        </div>
                        : <div className="tags-input__tags">
                            <button
                            className="tags-input__overlay-button"
                            ref={this.openDropdownRef}
                            onClick={() => this.setState({openDropdown: !this.state.openDropdown})}>
                            </button>
                            {this.state.value.length < 1 && <span className={ 'tags-input__single-item'
                            + (this.props.readOnly ? ' tags-input__tag-item--readonly' : '')}>
                                <span className="tags-input__placeholder">
                                    {this.props.placeholder}
                                </span>
                            </span>}
                                {this.state.value.map((item, i: number) => {
                                    return <React.Fragment key={i}>
                                        <span
                                        className={ 'tags-input__single-item'
                                        + (this.props.readOnly ? ' tags-input__tag-item--readonly' : '')}
                                        onClick={() => this.props.readOnly || this.removeClick(i)}>
                                            <span className="tags-input__helper-box">
                                                {this.props.valueTemplate
                                                ? this.props.valueTemplate(item)
                                                : <span>{this.props.getLabel(item)}</span>}
                                                {this.props.readOnly
                                                || <span className="tags-input__remove-button">
                                                    <Icon name='remove-sign'></Icon>
                                                </span>}
                                            </span>
                                        </span>
                                    </React.Fragment>;
                                })}
                       </div>
                    }

                    {this.state.openDropdown &&
                    <div className={"autocomplete autocomplete--multi-select" + (this.props.width === 'medium' ? ' autocomplete--fixed-width' : '')} ref={this.dropdownRef}>
                        <div className='autocomplete__header'>
                            <div className="autocomplete__icon" onClick={() => {
                            this.backButtonValue();
                            this.backButton();
                            }}>
                                 <Icon name="search" className="search"></Icon>
                            </div>
                            <div className='autocomplete__filter'>
                                     <input
                                    placeholder={this.props.singleLevelSearch ? 'Search this category...' : 'Search...'}
                                    type="text"
                                    className="autocomplete__input"
                                    ref={(input) => input && input.focus()}
                                    value={this.state.searchFieldValue}
                                    onChange={(event) => {
                                        const value = event.target.value;
                                        if (this.props.kind === 'asynchronous') {
                                            this.setState({
                                                searchFieldValue: value,
                                                loading: true,
                                            }),
                                            this.props.searchOptions(value, (items) => {
                                                this.setState({options: items, loading: false});
                                            });
                                        } else if (this.props.kind === 'synchronous') {
                                            this.setState({searchFieldValue: value});
                                        }
                                    }}
                                    />
                            </div>
                        </div>
                        {this.state.activeTree.length > 0 &&
                        <div className='autocomplete__category-header'>
                            <div className="autocomplete__icon" onClick={() => {
                            this.backButtonValue();
                            this.backButton();
                            }}>
                                <Icon name="arrow-left" className="arrow-left"></Icon>
                            </div>
                            <div className='autocomplete__filter'>
                                <button
                                className={'autocomplete__category-title'}
                                value={this.state.buttonValue}>
                                    {this.props.optionTemplate
                                    ? this.props.optionTemplate(this.state.buttonValue.value)
                                    : this.props.getLabel(this.state.buttonValue.value)}
                                </button>
                                {this.props.selectBranchWithChildren &&
                                    <button
                                    className={'autocomplete__button' + (this.props.selectBranchWithChildren ? ' autocomplete__button--multi-select' : '')}
                                    onMouseOver={() => this.setState({buttonMouseEvent: true})}
                                    onMouseOut={() => this.setState({buttonMouseEvent: false})}
                                    value={this.state.buttonValue}
                                    onClick={(event) => this.handleBranchValue(event, this.state.buttonValue)}>
                                        Choose entire category
                                    </button>
                                }
                            </div>
                        </div>}
                        {this.state.loading
                        ? <ul className="suggestion-list--loader"><Loader overlay={true}></Loader></ul>
                        :
                        this.state.searchFieldValue === ''
                            ? this.props.getOptions ?
                            <ul className="suggestion-list suggestion-list--multi-select">
                            {this.state.options
                            .map((option, i: React.Key | undefined) => {
                                let selectedItem = this.state.value.some((obj) =>
                                    this.props.getId(obj) === this.props.getLabel(option.value),
                                );
                                return (
                                    <li key={i}
                                    className={`suggestion-item suggestion-item--multi-select`}
                                    onClick={(event) => {
                                        event.preventDefault();
                                        event.stopPropagation();
                                        this.handleTree(event, option);
                                    }}>
                                        {this.props.optionTemplate
                                        ? this.props.optionTemplate(option.value)
                                        : <span
                                        className={selectedItem
                                        ? 'suggestion-item--disabled' : undefined}
                                        >
                                            {this.props.getLabel(option.value)}
                                        </span>}
                                        {option.children && <span className="suggestion-item__icon">
                                            <Icon name="chevron-right-thin"></Icon>
                                        </span>}
                                    </li>
                                );
                            })}</ul> : null
                            :
                            <ul className="suggestion-list suggestion-list--multi-select">
                                {this.filteredItem(this.props.singleLevelSearch
                                ? this.state.options : this.state.filterArr)}
                            </ul>
                    }
                    </div>}
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
