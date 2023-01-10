import * as React from "react";
import { Icon } from "./Icon";
import { Loader } from "./Loader";
import nextId from "react-id-generator";
import _debounce from 'lodash/debounce';
import { InputWrapper } from "./Form";
import { createPopper } from '@popperjs/core';
import {isEqual} from 'lodash';
import {getTextColor} from './Label';

interface IState<T> {
    value: Array<T>;
    options: Array<ITreeNode<T>>;
    firstBranchOptions: Array<any>;
    openDropdown: boolean;
    activeTree: Array<any>;
    filterArr: Array<any>;
    searchFieldValue: string;
    buttonTree: Array<any>;
    buttonValue: any;
    buttonMouseEvent: boolean;
    loading: boolean;
    // provera: boolean;
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
    valueTemplate?(item: T, Wrapper: any): React.ComponentType<T> | JSX.Element;
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
    private dropdownRef: any;
    private ref: any;
    private inputRef: any;
    private categoryButtonRef: any;
    private openDropdownRef: React.RefObject<HTMLButtonElement>;
    private htmlId: string = nextId();
    private popperInstance: any;

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
            loading: false,
            // provera: false
        };

        this.removeClick = this.removeClick.bind(this);
        this.handleMultiLevel = this.handleMultiLevel.bind(this);
        this.backButton = this.backButton.bind(this);
        this.handleButton = this.handleButton.bind(this);
        this.backButtonValue = this.backButtonValue.bind(this);
        this.handleTree = this.handleTree.bind(this);
        this.filteredItem = this.filteredItem.bind(this);
        this.banchButton = this.banchButton.bind(this);
        this.handleDebounce = this.handleDebounce.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);
        this.dropdownRef = React.createRef();
        this.ref = React.createRef();
        this.inputRef = React.createRef();
        this.categoryButtonRef = React.createRef();
        this.openDropdownRef = React.createRef();
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
                this.popperInstance.update();
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
            setTimeout(() => {
                if (this.props.kind === 'synchronous') {
                    this.ref.current.addEventListener('keydown', (e: any) => {
                        keyboardNavigation(e, this.ref.current, this.categoryButtonRef.current
                            ? buttonFocus : inputFocus);
                        if (e.keyCode === 8) {
                            this.backButton();
                        }
                    });
                }
                this.inputRef.current.addEventListener('keydown', (e: any) => {
                    if (e.keyCode === 40) {
                        if (this.categoryButtonRef.current) {
                            buttonFocus();
                        } else {
                            listNavigation();
                        }
                    }
                });
                const inputFocus = () => {
                    this.inputRef.current.focus();
                };
                const listNavigation = () => {
                    this.ref.current.getElementsByTagName('button')[0].focus();
                };
                const buttonFocus = () => {
                    this.categoryButtonRef.current.focus();
                };
                inputFocus();
            });
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
        this.ref.current.getElementsByTagName('button')[0].focus();
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
                        <button className="suggestion-item--btn">
                            {this.props.getBorderColor
                            && <div className="item-border"
                            style={{backgroundColor: this.props.getBorderColor(option.value)}}></div>}
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
                            {option.children && <span className="suggestion-item__icon">
                                <Icon name="chevron-right-thin"></Icon>
                            </span>}
                        </button>
                    </li>;
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
                    }}>
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

    banchButton() {
        setTimeout(() => {
            this.categoryButtonRef.current.addEventListener('keydown', (e: any) => {
                if (e.keyCode === 40) {
                    this.ref.current.getElementsByTagName('button')[0].focus();
                }
                if (e.keyCode === 38) {
                    this.inputRef.current.focus();
                }
            });
        });

        let selectedButton = this.state.value.some((obj) =>
            this.props.getId(obj) === this.props.getId(this.state.buttonValue.value),
        );

        if (!selectedButton) {
            return <button
            ref={this.categoryButtonRef}
            className={'autocomplete__button' + (this.props.selectBranchWithChildren ? ' autocomplete__button--multi-select' : '')}
            onMouseOver={() => this.setState({buttonMouseEvent: true})}
            onMouseOut={() => this.setState({buttonMouseEvent: false})}
            value={this.state.buttonValue}
            onClick={(event) => this.handleBranchValue(event, this.state.buttonValue)}>
                Choose entire category
            </button>;
        } else {
            return <button
            className={'autocomplete__button' + (this.props.selectBranchWithChildren ? ' autocomplete__button--multi-select' : '') + ' autocomplete__button--disabled'}
            value={this.state.buttonValue}>
                Category selected
            </button>;
        }
    }

    private debounceFn = _debounce(this.handleDebounce, 500);
    private ICancelFn: any;

    handleDebounce() {
        this.setState({options: []});
        if (this.props.kind === 'asynchronous') {
            if (this.state.searchFieldValue) {
                this.setState({
                    loading: true,
                    // provera: false
                });
                this.ICancelFn = this.props.searchOptions(this.state.searchFieldValue, (items) => {
                    // if (items.length === 0) {
                    //     this.setState({provera: true, loading: false})
                    // } else {
                        this.setState({options: items, loading: false});
                        this.popperInstance.update();
                    // }
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
                            onClick={() => this.setState({openDropdown: !this.state.openDropdown})}>
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
                                        && {backgroundColor: this.props.getBackgroundColor(item)}}>
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
                                </button> : null}
                        </div>
                        : <div className="tags-input__tags">
                            {this.props.readOnly
                            || <button
                            className="tags-input__overlay-button"
                            ref={this.openDropdownRef}
                            onClick={() => this.setState({openDropdown: !this.state.openDropdown})}>
                            </button>}
                            {this.state.value.length < 1 && <span className={ 'tags-input__single-item'
                            + (this.props.readOnly ? ' tags-input__tag-item--readonly' : '')}>
                                <span className="tags-input__placeholder">
                                    {this.props.placeholder}
                                </span>
                            </span>}
                            {this.state.value.map((item, i: number) => {
                                const Wrapper: React.ComponentType<{backgroundColor?: string, borderColor?: string}>
                                = ({backgroundColor, borderColor, children}) => (
                                    <span
                                    className={ 'tags-input__single-item'
                                    + (this.props.readOnly ? ' tags-input__tag-item--readonly' : '')}
                                    onClick={() => this.props.readOnly || this.removeClick(i)}>
                                        {this.props.getBorderColor
                                        && <div className="item-border item-border-selected"
                                        style={borderColor
                                        ? {backgroundColor: borderColor}
                                        : {backgroundColor: this.props.getBorderColor(item)}}></div>}
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
                                            </span>}
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
                    && <div className={"autocomplete autocomplete--multi-select" + (this.props.width === 'medium' ? ' autocomplete--fixed-width' : '')} ref={this.dropdownRef}>
                        <div className='autocomplete__header'>
                            <div className="autocomplete__icon" onClick={() => {
                            this.backButtonValue();
                            this.backButton();
                            }}>
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
                                        this.popperInstance.update();
                                    } else if (this.props.kind === 'asynchronous') {
                                        if (this.ICancelFn) {
                                            this.ICancelFn();
                                        }
                                        this.setState({searchFieldValue: event.target.value, options: []});
                                        this.popperInstance.update();
                                        this.debounceFn();
                                    } else {
                                        return;
                                    }
                                    // if(!this.state.searchFieldValue) {
                                    //     this.setState({provera: false});
                                    // }
                                }} />
                            </div>
                        </div>
                        {this.state.activeTree.length > 0
                        && <div className='autocomplete__category-header'>
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
                                {this.props.selectBranchWithChildren && this.banchButton()}
                            </div>
                        </div>}
                        {this.state.loading
                        ? <ul className="suggestion-list--loader"><Loader overlay={true}></Loader></ul>
                        : this.state.searchFieldValue === ''
                            ? this.props.getOptions
                                ? <ul className="suggestion-list suggestion-list--multi-select" ref={this.ref}>
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
                                            <button className="suggestion-item--btn">
                                                {(this.props.getBorderColor && !this.props.allowMultiple)
                                                && <div
                                                    className="item-border"
                                                    style={{backgroundColor: this.props.getBorderColor(option.value)}}>
                                                </div>}
                                                <span
                                                style={(this.props.getBackgroundColor && option.value)
                                                    && {backgroundColor: this.props.getBackgroundColor(option.value),
                                                    color: getTextColor(this.props.getBackgroundColor(option.value))}
                                                    }
                                                className={'suggestion-item--bgcolor'
                                                + (selectedItem ? ' suggestion-item--disabled' : '')}
                                                >
                                                    {this.props.optionTemplate
                                                    ? this.props.optionTemplate(option.value)
                                                    : this.props.getLabel(option.value)}
                                                </span>
                                                {option.children && <span className="suggestion-item__icon">
                                                    <Icon name="chevron-right-thin"></Icon>
                                                </span>}
                                            </button>
                                        </li>
                                    );
                                })}</ul> : null
                            : <ul className="suggestion-list suggestion-list--multi-select" ref={this.ref}>
                                {this.filteredItem(this.props.singleLevelSearch
                                ? this.state.options : this.state.filterArr)}
                                {/* {this.state.provera
                                    && <li className="suggestion-item--nothing-found">Nothing fonud</li>} */}
                            </ul>
                        }
                    </div>}
                </div>
            </InputWrapper>
        );
    }
}

const getButtonList = (menuRef: any) => {
    let list = menuRef.querySelectorAll(':scope > li');
    let buttons: any = [];

    [...list].filter((item: any) => {
        if (item.getElementsByTagName('button').length > 0) {
            buttons.push(item.getElementsByTagName('button')[0]);
        }
    });

    return buttons;
};

const keyboardNavigation = (e?: any, menuRef?: any, ref?: any) => {
    let buttons = getButtonList(menuRef);
    const currentElement = document.activeElement;
    const currentIndex = Array.prototype.indexOf.call(buttons, currentElement);

    if (buttons.includes(document.activeElement)) {
        if (e.keyCode === 40) {
            nextElement(buttons, currentIndex);
        } else if (e.keyCode === 38) {
            prevElement(buttons, currentIndex, ref);
        }
    }
};

const nextElement = (buttons: any, currentIndex: number) => {
    if (buttons[currentIndex + 1]) {
        buttons[currentIndex + 1].focus();
    } else {
        buttons[0].focus();
    }
};

const prevElement = (buttons: any, currentIndex: number, ref: any) => {
    if (buttons[currentIndex - 1]) {
        buttons[currentIndex - 1].focus();
    } else if (currentIndex === 0) {
        ref();
    } else {
        buttons[buttons.length - 1].focus();
    }
};
