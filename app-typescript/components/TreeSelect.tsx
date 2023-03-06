import * as React from "react";
import { Icon } from "./Icon";
import { Loader } from "./Loader";
import nextId from "react-id-generator";
import _debounce from 'lodash/debounce';
import { InputWrapper } from "./Form";
import { createPopper, Instance } from '@popperjs/core';
import {isEqual, lowerFirst} from 'lodash';
import {getTextColor} from './Label';

interface IState<T> {
    value: Array<T>;
    options: Array<ITreeNode<T>>;
    firstBranchOptions: Array<ITreeNode<T>>;
    openDropdown: boolean;
    activeTree: Array<Array<ITreeNode<T>>>;
    filterArr: Array<ITreeNode<T>>;
    searchFieldValue: string;
    buttonTree: Array<ITreeNode<T>>;
    buttonValue: ITreeNode<T> | null;
    buttonMouseEvent: boolean;
    loading: boolean;
    buttonTarget: Array<string>; // array of class names
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
    searchPlaceholder?: string;
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
    getBackgroundColor?(item: T): string;
    getBorderColor?(item: T): string;
    optionTemplate?(item: T): React.ComponentType<T> | JSX.Element;
    valueTemplate?(item: T, Wrapper: React.ElementType): React.ComponentType<T> | JSX.Element;
    onChange(e: Array<T>): void;
}

interface IPropsSync<T> extends IPropsBase<T> {
    kind: 'synchronous';
    getOptions(): Array<ITreeNode<T>>;
}

type ICancelFn = () => void;

interface IPropsAsync<T> extends IPropsBase<T> {
    kind: 'asynchronous';
    getOptions?(): Array<ITreeNode<T>>;
    searchOptions(term: string, callback?: (options: Array<ITreeNode<T>>) => void): ICancelFn;
}

type IProps<T> = IPropsSync<T> | IPropsAsync<T>;

export interface ITreeNode<T> {
    value: T;
    children?: Array<ITreeNode<T>>;
}

export class TreeSelect<T> extends React.Component<IProps<T>, IState<T>> {
    private dropdownRef: React.RefObject<HTMLInputElement>;
    private ref: React.RefObject<HTMLUListElement>;
    private inputRef: React.RefObject<HTMLInputElement>;
    private categoryButtonRef: React.RefObject<HTMLButtonElement>;
    private openDropdownRef: React.RefObject<HTMLButtonElement>;
    private htmlId: string = nextId();
    private popperInstance: Instance | null;

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
            buttonValue: null,
            buttonMouseEvent: false,
            openDropdown: false,
            loading: false,
            buttonTarget: [],
        };

        this.removeClick = this.removeClick.bind(this);
        this.handleMultiLevel = this.handleMultiLevel.bind(this);
        this.backButton = this.backButton.bind(this);
        this.handleButton = this.handleButton.bind(this);
        this.backButtonValue = this.backButtonValue.bind(this);
        this.handleTree = this.handleTree.bind(this);
        this.filteredItem = this.filteredItem.bind(this);
        this.branchButton = this.branchButton.bind(this);
        this.handleDebounce = this.handleDebounce.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);
        this.dropdownRef = React.createRef();
        this.ref = React.createRef();
        this.inputRef = React.createRef();
        this.categoryButtonRef = React.createRef();
        this.openDropdownRef = React.createRef();

        this.popperInstance = null;
    }

    inputFocus = () => {
        this.inputRef.current?.focus();
    }
    listNavigation = () => {
        const element: HTMLElement = document.querySelectorAll('.suggestion-item--btn')[0] as HTMLElement;
        element.focus();
    }
    buttonFocus = () => {
        this.categoryButtonRef.current?.focus();
    }

    componentDidMount = () => {
        this.recursion(this.state.options);
        document.addEventListener("mousedown", (event) => {
            if (!(event.target instanceof HTMLInputElement)) {
                return;
            }
            if ((this.dropdownRef.current && !this.dropdownRef.current.contains(event.target))
            && (this.openDropdownRef.current && !this.openDropdownRef.current.contains(event.target))) {
                this.setState({openDropdown: false});
            }
        });

        document.addEventListener("keydown", (e: KeyboardEvent) => {
            if (this.state.openDropdown && this.ref.current) {
                keyboardNavigation(
                    e,
                    this.ref.current,
                    this.categoryButtonRef.current ? this.buttonFocus : this.inputFocus,
                );
                if (e.key === 'Backspace') {
                    this.backButton();

                    const {buttonTarget} = this.state;
                    const className = buttonTarget.pop();

                    if (className != null) {
                        const element: HTMLElement = document.getElementsByClassName(className)[0] as HTMLElement;
                        element.focus();
                    }
                }
            }
        });
    }

    componentDidUpdate(prevProps: Readonly<IProps<T>>, prevState: Readonly<IState<T>>): void {
        if (!isEqual(prevState.value, this.state.value)) {
            this.props.onChange(this.state.value);
        } else if (!isEqual(prevProps.value, this.props.value)) {
            this.props.onChange(this.state.value);
        }
        if (prevState.openDropdown !== this.state.openDropdown) {
            this.toggleMenu();
        }
        if (this.props.kind === 'synchronous') {
            if ((prevState.activeTree !== this.state.activeTree)
            || (prevState.filterArr !== this.state.filterArr)
            || (prevState.options !== this.state.options)) {
                this.popperInstance?.update();
            }
        }
    }

    toggleMenu() {
        if (this.state.openDropdown) {
            if (this.openDropdownRef.current && this.dropdownRef.current) {
                this.popperInstance = createPopper(this.openDropdownRef.current, this.dropdownRef.current, {
                    placement: 'bottom-start',
                    modifiers: [
                        {
                            name: 'offset',
                            options: {
                                offset: [-4, 4],
                            },
                        },
                    ],
                });
            }
            this.inputRef.current?.addEventListener('keydown', (e: KeyboardEvent) => {
                if (e.key === 'ArrowDown') {
                    e.preventDefault();
                    e.stopPropagation();

                    if (this.categoryButtonRef.current) {
                        this.buttonFocus();
                    } else {
                        setTimeout(() => {
                            this.listNavigation();
                        });
                    }
                }
            });
            if (this.inputRef.current) {
                this.inputFocus();
            } else {
                const element: HTMLElement = document.querySelectorAll('.suggestion-item--btn')[0] as HTMLElement;
                element.focus();
            }
        } else {
            this.openDropdownRef.current?.focus();
        }
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
        let buttonTreeNext: Array<ITreeNode<T>> = this.state.buttonTree;

        if (this.state.buttonValue != null) {
            buttonTreeNext = buttonTreeNext.concat(this.state.buttonValue);
        }

        this.setState({
            buttonTree: buttonTreeNext,
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
                    this.setState({
                        options: this.state.firstBranchOptions,
                        activeTree: [],
                        buttonTarget: [],
                        openDropdown: false,
                    });
                } else {
                    this.setState({activeTree: [], buttonTarget: [], openDropdown: false});
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
                this.setState({
                    options: this.state.firstBranchOptions,
                    activeTree: [],
                    buttonTarget:
                    [],
                    openDropdown: false,
                });
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
                    this.setState({
                        options: this.state.firstBranchOptions,
                        activeTree: [],
                        buttonTarget: [],
                        openDropdown: false,
                    });
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
                    this.setState({
                        options: this.state.firstBranchOptions,
                        activeTree: [],
                        buttonTarget: [],
                        openDropdown: false,
                    });
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
                        buttonTarget: [],
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
                            buttonTarget: [],
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

        const element: HTMLElement = document.querySelectorAll('.suggestion-item--btn')[0] as HTMLElement;
        element.focus();
    }

    backButton(): void {
        const items = this.state.activeTree.pop();

        if (items != null) {
            this.setState({
                options: items,
            });
        }
    }

    backButtonValue = () => {
        const item = this.state.buttonTree.pop();

        if (item != null) {
            this.setState({
                buttonValue: item,
            });
        }
    }

    recursion(arr: Array<ITreeNode<T>>) {
        arr.map((item) => {
            this.state.filterArr.push(item);
            if (item.children) {
                this.recursion(item.children);
            }
        });
    }

    filteredItem(arr: Array<ITreeNode<T>>) {
        if (this.props.kind === 'synchronous') {
            let filteredArr = arr.filter((item) => {
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
            });

            if (filteredArr.length === 0) {
                return <li className="suggestion-item--nothing-found">Nothing fonud</li>;
            } else {
                return filteredArr.map((option, i) => {
                    let selectedItem = this.state.value.some((obj) =>
                        this.props.getId(obj) === this.props.getId(option.value),
                    );
                    return (
                        <li
                            key={i}
                            className={`suggestion-item suggestion-item--multi-select`}
                            onClick={(event) => {
                                this.setState({
                                    searchFieldValue: '',
                                }),
                                event.preventDefault();
                                event.stopPropagation();
                                this.handleTree(event, option);
                            }}
                        >
                            <button className="suggestion-item--btn">
                                {this.props.getBorderColor
                                    && <div className="item-border"
                                        style={{backgroundColor: this.props.getBorderColor(option.value)}}>
                                    </div>
                                }
                                <span
                                    style={this.props.getBackgroundColor
                                        ? {backgroundColor: this.props.getBackgroundColor(option.value),
                                        color: getTextColor(this.props.getBackgroundColor(option.value))}
                                        : undefined}
                                    className={'suggestion-item--bgcolor'
                                        + (selectedItem ? ' suggestion-item--disabled' : '')}
                                >
                                    {this.props.optionTemplate
                                        ? this.props.optionTemplate(option.value)
                                        : this.props.getLabel(option.value)}
                                </span>
                                {option.children
                                    && <span className="suggestion-item__icon">
                                        <Icon name="chevron-right-thin"></Icon>
                                    </span>
                                }
                            </button>
                        </li>
                    );
                });
            }
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
                        }}
                    >
                        <button className="suggestion-item--btn">
                            {this.props.optionTemplate
                                ? this.props.optionTemplate(item.value)
                                : <span
                                    className={selectedItem
                                    ? 'suggestion-item--disabled' : undefined}
                                >
                                    {this.props.getLabel(item.value)}
                                </span>}
                        </button>
                    </li>
                );
            });
        } else {
            return;
        }
    }

    branchButton(buttonValue: ITreeNode<T>) {
        setTimeout(() => {
            this.categoryButtonRef.current?.addEventListener('keydown', (e: KeyboardEvent) => {
                if (e.key === 'ArrowDown') {
                    e.preventDefault();
                    e.stopPropagation();
                    setTimeout(() => {
                        const element: HTMLElement
                        = document.querySelectorAll('.suggestion-item--btn')[0] as HTMLElement;
                        element.focus();
                    });
                }
                if (e.key === 'ArrowUp') {
                    e.preventDefault();
                    e.stopPropagation();
                    this.inputRef.current?.focus();
                }
            });
        });

        let selectedButton = this.state.value.some((obj) =>
            this.props.getId(obj) === this.props.getId(buttonValue.value),
        );

        if (!selectedButton) {
            return <button
                ref={this.categoryButtonRef}
                className={'autocomplete__button' + (this.props.selectBranchWithChildren ? ' autocomplete__button--multi-select' : '')}
                onMouseOver={() => this.setState({buttonMouseEvent: true})}
                onMouseOut={() => this.setState({buttonMouseEvent: false})}
                onClick={(event) => this.handleBranchValue(event, buttonValue)}
            >
                Choose entire category
            </button>;
        } else {
            return <button
                className={'autocomplete__button'
                + (this.props.selectBranchWithChildren ? ' autocomplete__button--multi-select' : '') + ' autocomplete__button--disabled'}
            >
                Category selected
            </button>;
        }
    }

    private debounceFn = _debounce(this.handleDebounce, 500);
    private ICancelFn: ICancelFn | undefined;

    handleDebounce() {
        this.setState({options: []});
        if (this.props.kind === 'asynchronous') {
            if (this.state.searchFieldValue) {
                this.setState({
                    loading: true,
                });
                this.ICancelFn = this.props.searchOptions(this.state.searchFieldValue, (items) => {
                    this.setState({options: items, loading: false});
                    this.popperInstance?.update();
                });
            }
        }
    }

    render() {
        return (
            <InputWrapper
                label={this.props.label}
                error={this.props.error}
                required={this.props.required}
                disabled={this.props.disabled}
                invalid={this.props.invalid}
                info={this.props.info}
                inlineLabel={this.props.inlineLabel}
                labelHidden={this.props.labelHidden}
                fullWidth={this.props.fullWidth}
                htmlId={this.htmlId}
                tabindex={this.props.tabindex}>
                <div className={`tags-input tags-input--${this.props.allowMultiple ? 'multi-select' : 'single-select'} sd-input__input`}>
                    {this.props.allowMultiple
                        ? <div className="tags-input__tags">
                            {this.props.readOnly
                                || <button ref={this.openDropdownRef}
                                    className="tags-input__add-button"
                                    onClick={() => this.setState({openDropdown: !this.state.openDropdown})}
                                >
                                    <i className="icon-plus-large"></i>
                                </button>}
                            <ul className="tags-input__tag-list">
                                {this.state.value.map((item, i: number) => {
                                    const Wrapper: React.ComponentType<{backgroundColor?: string}>
                                    = ({backgroundColor, children}) => (
                                        <li
                                            className={"tags-input__tag-item tags-input__tag-item--multi-select"
                                            + (this.props.readOnly ? ' tags-input__tag-item--readonly' : '')}
                                            onClick={() => !this.props.readOnly && this.removeClick(i)}
                                            style={this.props.valueTemplate
                                            ? {backgroundColor}
                                            : this.props.getBackgroundColor
                                            && {backgroundColor: this.props.getBackgroundColor(item)}}
                                        >
                                            <span
                                            style={{color: backgroundColor
                                            ? getTextColor(backgroundColor)
                                            : this.props.getBackgroundColor
                                            &&  getTextColor(this.props.getBackgroundColor(item))}}
                                            className="tags-input__helper-box">
                                                {children}
                                                {!this.props.readOnly && <span className="tags-input__remove-button">
                                                    <Icon name="close-small"></Icon>
                                                </span>}
                                            </span>
                                        </li>
                                    );

                                    return (
                                        <React.Fragment key={i}>
                                            {this.props.valueTemplate
                                                ? this.props.valueTemplate(item, Wrapper)
                                                : <Wrapper>
                                                    <span>{this.props.getLabel(item)}</span>
                                                </Wrapper>
                                            }
                                        </React.Fragment>
                                    );
                                })}
                            </ul>
                            {this.state.value.length > 0
                                ? this.props.readOnly
                                    || <button className="tags-input__remove-value"
                                    style={{position: 'relative', bottom: '2px'}}
                                    onClick={() => this.setState({value: []})}>
                                        <Icon name='remove-sign'></Icon>
                                    </button>
                                : null
                            }
                        </div>
                        : <div className="tags-input__tags">
                            {this.props.readOnly
                                || <button
                                    className="tags-input__overlay-button"
                                    ref={this.openDropdownRef}
                                    onClick={() => this.setState({openDropdown: !this.state.openDropdown})}
                                >
                                </button>
                            }
                            {this.state.value.length < 1
                                && <span className={ 'tags-input__single-item'
                                    + (this.props.readOnly ? ' tags-input__tag-item--readonly' : '')}>
                                    <span className="tags-input__placeholder">
                                        {this.props.placeholder}
                                    </span>
                                </span>
                            }
                            {this.state.value.map((item, i: number) => {
                                const Wrapper: React.ComponentType<{backgroundColor?: string, borderColor?: string}>
                                = ({backgroundColor, borderColor, children}) => (
                                    <span
                                        className={ 'tags-input__single-item'
                                        + (this.props.readOnly ? ' tags-input__tag-item--readonly' : '')}
                                        onClick={() => this.props.readOnly || this.removeClick(i)}
                                    >
                                        {this.props.getBorderColor
                                            && <div className="item-border item-border-selected"
                                                style={borderColor
                                                ? {backgroundColor: borderColor}
                                                : {backgroundColor: this.props.getBorderColor(item)}}
                                            >
                                            </div>
                                        }
                                        <span
                                            style={{color: backgroundColor && getTextColor(backgroundColor)}}
                                            className="tags-input__helper-box">
                                            <span
                                                className={backgroundColor && `tags-input__tag-item`}
                                                style={{backgroundColor, margin: 0}}>
                                                {children}
                                            </span>
                                            {this.props.readOnly
                                                || <span className="tags-input__remove-button">
                                                    <Icon name='remove-sign'></Icon>
                                                </span>
                                            }
                                        </span>
                                    </span>
                                );

                                return <React.Fragment key={i}>
                                    {this.props.valueTemplate
                                        ? this.props.valueTemplate(item, Wrapper)
                                        : <Wrapper>
                                            <span>{this.props.getLabel(item)}</span>
                                        </Wrapper>
                                    }
                                </React.Fragment>;
                            })}
                       </div>
                    }

                    {this.state.openDropdown
                        && <div
                            className={"autocomplete autocomplete--multi-select" + (this.props.width === 'medium' ? ' autocomplete--fixed-width' : '')}
                            ref={this.dropdownRef}
                        >
                            <div className='autocomplete__header'>
                                <div
                                    className="autocomplete__icon"
                                    onClick={() => {
                                        this.backButtonValue();
                                        this.backButton();
                                    }}
                                >
                                    <Icon name="search" className="search"></Icon>
                                </div>
                                <div className='autocomplete__filter'>
                                    <input
                                        placeholder={this.props.searchPlaceholder}
                                        type="text"
                                        className="autocomplete__input"
                                        ref={this.inputRef}
                                        value={this.state.searchFieldValue}
                                        onChange={(event) => {
                                            if (this.props.kind === 'synchronous') {
                                                this.setState({searchFieldValue: event.target.value});
                                                this.popperInstance?.update();
                                            } else if (this.props.kind === 'asynchronous') {
                                                if (this.ICancelFn) {
                                                    this.ICancelFn();
                                                }
                                                this.setState({searchFieldValue: event.target.value, options: []});
                                                this.popperInstance?.update();
                                                this.debounceFn();
                                            } else {
                                                return;
                                            }
                                        }}
                                    />
                                </div>
                            </div>
                            {(this.state.activeTree.length > 0 && this.state.buttonValue != null)
                                && <div className='autocomplete__category-header'>
                                    <div
                                        className="autocomplete__icon"
                                        onClick={() => {
                                            this.backButtonValue();
                                            this.backButton();
                                        }}
                                    >
                                        <Icon name="arrow-left" className="arrow-left"></Icon>
                                    </div>
                                    <div className='autocomplete__filter'>
                                        <button className={'autocomplete__category-title'}>
                                            {
                                                this.props.optionTemplate
                                                    ? this.props.optionTemplate(this.state.buttonValue.value)
                                                    : this.props.getLabel(this.state.buttonValue.value)
                                            }
                                        </button>

                                        {this.props.selectBranchWithChildren
                                            && this.branchButton(this.state.buttonValue)
                                        }
                                    </div>
                                </div>
                            }
                            {this.state.loading
                            ? <ul className="suggestion-list--loader"><Loader overlay={true}></Loader></ul>
                            : this.state.searchFieldValue === ''
                                ? this.props.getOptions
                                    ? <ul
                                        className="suggestion-list suggestion-list--multi-select"
                                        ref={this.ref}
                                    >
                                        {this.state.options
                                            .map((option, i: React.Key | undefined) => {
                                                let selectedItem = this.state.value.some((obj) =>
                                                    this.props.getId(obj) === this.props.getLabel(option.value),
                                                );
                                                return (
                                                    <li
                                                        key={i}
                                                        className={`suggestion-item suggestion-item--multi-select`}
                                                        onClick={(event) => {
                                                            event.preventDefault();
                                                            event.stopPropagation();
                                                            this.handleTree(event, option);
                                                        }}
                                                    >
                                                        <button
                                                            className={`suggestion-item--btn ${this.props.getId(option.value)}`}
                                                            onKeyDown={(event) => {
                                                                if (event.key === 'Enter' && option.children) {
                                                                    this.setState({
                                                                        buttonTarget: [
                                                                            ...this.state.buttonTarget,
                                                                            this.props.getId(option.value),
                                                                        ],
                                                                    });
                                                                }
                                                            }}
                                                        >
                                                            {(this.props.getBorderColor && !this.props.allowMultiple)
                                                                && <div
                                                                    className="item-border"
                                                                    style={{
                                                                        backgroundColor: this.props.getBorderColor(
                                                                            option.value,
                                                                        ),
                                                                    }}
                                                                >
                                                                </div>
                                                            }
                                                            <span
                                                                style={
                                                                    (this.props.getBackgroundColor && option.value)
                                                                        ? {
                                                                            backgroundColor:
                                                                            this.props.getBackgroundColor(option.value),
                                                                            color:
                                                                            getTextColor(this.props.getBackgroundColor(
                                                                                option.value,
                                                                                ),
                                                                            ),
                                                                        }
                                                                        : undefined
                                                                }
                                                                className={
                                                                    'suggestion-item--bgcolor'
                                                                    + (selectedItem ? ' suggestion-item--disabled' : '')
                                                                }
                                                            >
                                                                {this.props.optionTemplate
                                                                    ? this.props.optionTemplate(option.value)
                                                                    : this.props.getLabel(option.value)}
                                                            </span>
                                                            {option.children
                                                                && <span className="suggestion-item__icon">
                                                                    <Icon name="chevron-right-thin"></Icon>
                                                                </span>
                                                            }
                                                        </button>
                                                    </li>
                                                );
                                            })
                                        }
                                    </ul>
                                    : null
                                : <ul className="suggestion-list suggestion-list--multi-select" ref={this.ref}>
                                    {this.filteredItem(this.props.singleLevelSearch
                                        ? this.state.options : this.state.filterArr)}
                                </ul>
                            }
                        </div>
                    }
                </div>
            </InputWrapper>
        );
    }
}

const getButtonList = (menuRef: HTMLUListElement | undefined): Array<HTMLButtonElement> => {
    let list = Array.from(menuRef?.querySelectorAll(':scope > li') ?? []);
    let buttons: Array<HTMLButtonElement> = [];

    if (list != null) {
        [...list].filter((item) => {
            if (item.querySelectorAll('.suggestion-item--btn').length > 0) {
                buttons.push(item.querySelectorAll('.suggestion-item--btn')[0] as HTMLButtonElement);
            }
        });
    }

    return buttons;
};

const keyboardNavigation = (e?: KeyboardEvent, menuRef?: HTMLUListElement, ref?: () => void) => {
    let buttons = getButtonList(menuRef);
    const currentElement = document.activeElement;
    const currentIndex = Array.prototype.indexOf.call(buttons, currentElement);

    if (document.activeElement != null && buttons.includes(document.activeElement as HTMLButtonElement)) {
        if (e?.key === 'ArrowDown') {
            nextElement(buttons, currentIndex, e);
        } else if (e?.key === 'ArrowUp') {
            prevElement(buttons, currentIndex, e, ref);
        }
    }
};

const nextElement = (
    buttons: Array<HTMLButtonElement>,
    currentIndex: number,
    e: KeyboardEvent,
) => {
    e.preventDefault();
    e.stopPropagation();

    if (buttons[currentIndex + 1]) {
        buttons[currentIndex + 1].focus();
    } else {
        buttons[0].focus();
    }
};

const prevElement = (
    buttons: Array<HTMLButtonElement>,
    currentIndex: number,
    e: KeyboardEvent,
    ref: (() => void) | undefined,
) => {
    e.preventDefault();
    e.stopPropagation();

    if (buttons[currentIndex - 1]) {
        buttons[currentIndex - 1].focus();
    } else if (currentIndex === 0) {
        if (ref) {
            ref();
        }
    } else {
        buttons[buttons.length - 1].focus();
    }
};
