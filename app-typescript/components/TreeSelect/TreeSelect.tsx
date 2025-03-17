import * as React from "react";
import { Icon } from "../Icon";
import { Loader } from "../Loader";
import nextId from "react-id-generator";
import _debounce from 'lodash/debounce';
import { InputWrapper } from "../Form";
import { createPopper, Instance } from '@popperjs/core';
import {isEqual} from 'lodash';
import {getTextColor} from '../Label';
import {IInputWrapper} from '../Form/InputWrapper';
import {SelectPreview} from '../SelectPreview';
import {TreeSelectPill} from './TreeSelectPill';
import {getPrefixedItemId, TreeSelectItem} from './TreeSelectItem';
import {keyboardNavigation} from './KeyboardNavigation';
import {WithPortal} from '../WithPortal';
import { DragDropContext, Droppable, Draggable, DropResult } from "react-beautiful-dnd";
import {getNextZIndex} from '../../zIndex';

const reorder = (list: Array<any>, startIndex: number, endIndex: number) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

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

    // array of classNames; used to focus an item after returning for another level
    buttonTarget: Array<string>;
}

interface IPropsBase<T> extends IInputWrapper {
    value?: Array<T>;
    selectBranchWithChildren?: boolean;
    readOnly?: boolean;
    width?: 'medium' | 'match-input';
    inputWidth?: '100%';
    allowMultiple?: boolean;
    loading?: boolean;
    singleLevelSearch?: boolean;
    placeholder?: string;
    searchPlaceholder?: string;
    noResultsFoundMessage?: string;
    dropdownInitiallyOpen?: boolean;
    sortable?: boolean;
    'data-test-id'?: string;
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
    private treeSelectRef: React.RefObject<HTMLDivElement>;
    private htmlId: string = nextId();
    private popperInstance: Instance | null;
    private zIndex: number = getNextZIndex();

    /*
    * This variable is used to distinguish changes coming from outside (from props.value)
    * from those made by the user through interaction with the component.
    * It prevents triggering `onChange` when `props.value` updates externally.
    */
    private changesFromOutside: boolean;

    constructor(props: IProps<T>) {
        super(props);
        this.state = {
            value: this.props.value ? this.props.value : [],
            options: this.props.getOptions ? this.props.getOptions() : [],
            firstBranchOptions: this.props.getOptions ? this.props.getOptions() : [],
            searchFieldValue: '',
            activeTree: [],
            filterArr: [],
            buttonTree: [],
            buttonTarget: [],
            buttonValue: null,
            buttonMouseEvent: false,
            openDropdown: false,
            loading: false,
        };

        this.removeClick = this.removeClick.bind(this);
        this.handleMultiLevel = this.handleMultiLevel.bind(this);
        this.backButton = this.backButton.bind(this);
        this.handleButton = this.handleButton.bind(this);
        this.handleTree = this.handleTree.bind(this);
        this.filteredItem = this.filteredItem.bind(this);
        this.branchButton = this.branchButton.bind(this);
        this.handleDebounce = this.handleDebounce.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);
        this.onMouseDown = this.onMouseDown.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
        this.onPressEsc = this.onPressEsc.bind(this);
        this.dropdownRef = React.createRef();
        this.ref = React.createRef();
        this.inputRef = React.createRef();
        this.categoryButtonRef = React.createRef();
        this.openDropdownRef = React.createRef();
        this.treeSelectRef = React.createRef();
        this.popperInstance = null;
        this.onDragEnd = this.onDragEnd.bind(this);
        this.changesFromOutside = false;
    }

    inputFocus = () => {
        this.inputRef.current?.focus();
    }

    listNavigation = () => {
        const element: HTMLElement = document.querySelector('.suggestion-item--btn') as HTMLElement;
        element.focus();
    }

    buttonFocus = () => {
        this.categoryButtonRef.current?.focus();
    }

    onMouseDown = (event: MouseEvent) => {
        if (
            (this.dropdownRef.current?.contains(event.target as HTMLElement) !== true)
            && (this.treeSelectRef.current?.contains(event.target as HTMLElement) !== true)
            && this.state.openDropdown
        ) {
            this.setState({
                openDropdown: false,
                searchFieldValue: '',
            });
        }
    }

    onKeyDown = (e: KeyboardEvent) => {
        if (this.state.openDropdown && this.ref.current) {
            keyboardNavigation(
                e,
                this.ref.current,
                this.categoryButtonRef.current ? this.buttonFocus : this.inputFocus,
            );

            if (e.key === 'Backspace' && this.state.activeTree.length > 0) {
                this.backButton();

                const lastElement = this.state.buttonTarget.pop();

                if (lastElement != null) {
                    const className = getPrefixedItemId(lastElement);
                    const element: HTMLElement = document.getElementsByClassName(className)[0] as HTMLElement;
                    element.focus();
                }
            }
        }
    }

    onPressEsc = (event: KeyboardEvent) => {
        if (event.key === 'Escape' && this.state.openDropdown) {
            this.setState({
                openDropdown: false,
                searchFieldValue: '',
            });
        }
    }

    componentDidMount = () => {
        this.recursion(this.state.options);

        document.addEventListener("mousedown", this.onMouseDown);
        document.addEventListener("keydown", this.onKeyDown);
        document.addEventListener("keydown", this.onPressEsc);

        if (this.props.dropdownInitiallyOpen) {
            this.setState({openDropdown: true});
        }
    }

    componentWillUnmount(): void {
        document.removeEventListener("mousedown", this.onMouseDown);
        document.removeEventListener("keydown", this.onKeyDown);
        document.addEventListener("keydown", this.onPressEsc);
    }

    componentDidUpdate(prevProps: Readonly<IProps<T>>, prevState: Readonly<IState<T>>): void {
        if (!isEqual(prevState.value, this.state.value)) {
            if (this.changesFromOutside) {
                this.changesFromOutside = false;
            } else {
                this.props.onChange(this.state.value);
            }
        } else if (!isEqual(prevProps.value, this.props.value) && !isEqual(this.props.value, this.state.value)) {
            this.changesFromOutside = true;
            this.setState({
                value: this.props.value ?? [],
            });
        }

        if (prevState.openDropdown !== this.state.openDropdown) {
            this.toggleMenu();
        }

        if (this.props.kind === 'synchronous') {
            if (
                (prevState.activeTree !== this.state.activeTree)
                || (prevState.filterArr !== this.state.filterArr)
                || (prevState.options !== this.state.options)
            ) {
                this.popperInstance?.update();
            }
        }
    }

    toggleMenu() {
        if (this.state.openDropdown) {
            if (this.treeSelectRef.current && this.dropdownRef.current) {
                this.popperInstance = createPopper(this.treeSelectRef.current, this.dropdownRef.current, {
                    placement: 'bottom-start',
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
                const element: HTMLElement = document.querySelector('.suggestion-item--btn') as HTMLElement;
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
                    buttonTarget: [],
                    openDropdown: false,
                });
            }

            this.setState({buttonMouseEvent: false});
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

        const element: HTMLElement = document.querySelector('.suggestion-item--btn') as HTMLElement;
        element.focus();
    }

    backButton(): void {
        const items = this.state.activeTree.pop();

        if (items != null) {
            this.setState({
                options: items,
            });
        }

        const item = this.state.buttonTree.pop();

        this.setState({
            buttonValue: item ?? null,
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
                        .toLowerCase()
                        .includes(this.state.searchFieldValue.toLowerCase())
                    ) {
                        return item.value;
                    } else {
                        return;
                    }
                } else {
                    return item.value;
                }
            });

            if (filteredArr.length === 0) {
                return <li className="suggestion-item--nothing-found">Nothing found</li>;
            } else {
                return filteredArr.map((option, i) => {
                    let selectedItem = this.state.value.some((obj) =>
                        this.props.getId(obj) === this.props.getId(option.value),
                    );

                    return (
                        <TreeSelectItem
                            key={i}
                            option={option}
                            handleTree={this.handleTree}
                            selectedItem={selectedItem}
                            allowMultiple={this.props.allowMultiple}
                            getBorderColor={this.props.getBorderColor}
                            getBackgroundColor={this.props.getBackgroundColor}
                            getId={this.props.getId}
                            optionTemplate={this.props.optionTemplate}
                            getLabel={this.props.getLabel}
                            onClick={() => this.setState({
                                searchFieldValue: '',
                            })}
                        />
                    );
                });
            }
        } else if (this.props.kind === 'asynchronous') {
            if (this.state.options.length > 0) {
                return this.state.options.map((item, i) => {
                    let selectedItem = this.state.value.some((obj) =>
                        this.props.getId(obj) === this.props.getId(item.value),
                    );

                    return (
                        <li
                            key={i}
                            className='suggestion-item suggestion-item--multi-select'
                            onClick={(event) => {
                                this.handleValue(event, item);
                            }}
                        >
                            <button className="suggestion-item--btn" data-test-id="option">
                                {this.props.optionTemplate
                                    ? this.props.optionTemplate(item.value)
                                    : (
                                        <span
                                            className={selectedItem ? 'suggestion-item--selected' : undefined}
                                        >
                                            {this.props.getLabel(item.value)}
                                        </span>
                                    )
                                }
                            </button>
                        </li>
                    );
                });

            } else {
                return <li className="suggestion-item--nothing-found">{this.props.noResultsFoundMessage ?? 'Nothing found'}</li>;
            }
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
                        const element: HTMLElement = document.querySelector('.suggestion-item--btn') as HTMLElement;
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
            return (
                <button
                    className='autocomplete__button autocomplete__button--multi-select'
                    ref={this.categoryButtonRef}
                    onMouseOver={() => this.setState({buttonMouseEvent: true})}
                    onMouseOut={() => this.setState({buttonMouseEvent: false})}
                    onClick={(event) => this.handleBranchValue(event, buttonValue)}
                >
                    Choose entire category
                </button>
            );
        } else {
            return (
                <button
                    className='autocomplete__button autocomplete__button--multi-select autocomplete__button--disabled'
                >
                    Category selected
                </button>
            );
        }
    }

    private debounceFn = _debounce(this.handleDebounce, 500);
    private ICancelFn: ICancelFn | undefined;

    handleDebounce() {
        this.setState({options: []});

        if (this.props.kind === 'asynchronous') {
            if (this.state.searchFieldValue) {
                this.ICancelFn = this.props.searchOptions(this.state.searchFieldValue, (items) => {
                    this.setState({options: items, loading: false});
                    this.popperInstance?.update();
                });
            } else {
                this.setState({options: this.state.firstBranchOptions, loading: false});
            }
        }
    }

    onDragEnd(result: DropResult) {
        if (!result.destination) {
            return;
        }

        const value = reorder(
            this.state.value,
            result.source.index,
            result.destination.index,
        );
        this.setState({
            value: value,
        });
    }

    render() {
        if (this.props.preview) {
            return (
                <SelectPreview
                    kind={this.props.allowMultiple
                        ? {
                            mode: 'multi-select',
                            getBackgroundColor: this.props.getBackgroundColor,
                        }
                        : {
                            mode: 'single-select',
                            getBorderColor: this.props.getBorderColor,
                        }
                    }
                    items={this.state.value}
                    valueTemplate={this.props.valueTemplate}
                    getLabel={this.props.getLabel}
                />
            );
        }

        const ListWrapper = this.props.sortable
            ? ({children}: {children: React.ReactNode}) => (
                <DragDropContext onDragEnd={this.onDragEnd}>
                    <Droppable droppableId="droppable" direction="horizontal">
                        {(provided, _snapshot) => (
                            <ul
                                className="tags-input__tag-list"
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                            >
                                {children}
                                {provided.placeholder}
                            </ul>
                        )}
                    </Droppable>
                </DragDropContext>
            )
            : ({children}: {children: React.ReactNode}) => <ul className="tags-input__tag-list">{children}</ul>;

        const ItemWrapper = this.props.sortable
            ? ({children, itemId, i}: {children: React.ReactNode, itemId: string, i: number}) => {
                return (
                    <Draggable draggableId={itemId} index={i}>
                        {(provided2) => (
                            <div
                                ref={provided2.innerRef}
                                {...provided2.draggableProps}
                                {...provided2.dragHandleProps}
                            >
                                {children}
                            </div>
                        )}
                    </Draggable>
                );
            }
            : ({children}: {children: React.ReactNode}) => <React.Fragment>{children}</React.Fragment>;

        return (
            <InputWrapper
                label={this.props.label}
                error={this.props.error}
                invalid={this.props.error != null}
                required={this.props.required}
                disabled={this.props.disabled}
                info={this.props.info}
                inlineLabel={this.props.inlineLabel}
                labelHidden={this.props.labelHidden}
                htmlId={this.htmlId}
                tabindex={this.props.tabindex}
                fullWidth={this.props.inputWidth === '100%' ?? false}
                data-test-id={this.props['data-test-id']}
            >
                <div
                    className={`
                        tags-input sd-input__input
                        tags-input--${this.props.allowMultiple ? 'multi-select' : 'single-select'}`
                    }
                    ref={this.treeSelectRef}
                    data-test-id={this.props.allowMultiple ? undefined : 'open-popover'}
                >
                    {this.props.allowMultiple
                        ? <div className="tags-input__tags">
                            {this.props.readOnly
                                || <button
                                    ref={this.openDropdownRef}
                                    className={`
                                        tags-input__add-button
                                        ${this.props.disabled ? 'tags-input__add-button--disabled' : ''}`
                                    }
                                    onClick={(e) => {
                                        e.stopPropagation();

                                        if (!this.props.disabled) {
                                            this.setState({
                                                openDropdown: !this.state.openDropdown,
                                                searchFieldValue: '',
                                            });
                                        }
                                    }}
                                    data-test-id="open-popover"
                                    aria-haspopup="tree"
                                    aria-expanded={this.state.openDropdown}
                                >
                                    <i className="icon-plus-large"></i>
                                </button>
                            }

                            <ListWrapper>
                                {this.state.value.map((item, i: number) => {
                                    const Wrapper: React.ComponentType<{backgroundColor?: string}>
                                    = ({backgroundColor, children}) => (
                                        <TreeSelectPill
                                            item={item}
                                            readOnly={this.props.readOnly}
                                            disabled={this.props.disabled}
                                            valueTemplate={this.props.valueTemplate}
                                            backgroundColor={backgroundColor}
                                            onRemove={() => this.removeClick(i)}
                                            getBackgroundColor={this.props.getBackgroundColor}
                                            draggable={this.props.sortable}
                                        >
                                            {children}
                                        </TreeSelectPill>
                                    );

                                    const itemId = this.props.getId(item);

                                    return (
                                        <ItemWrapper itemId={itemId} key={itemId} i={i}>
                                            {this.props.valueTemplate
                                                ? this.props.valueTemplate(item, Wrapper)
                                                : (
                                                    <Wrapper>
                                                        <span>
                                                            {this.props.getLabel(item)}
                                                        </span>
                                                    </Wrapper>
                                                )
                                            }
                                        </ItemWrapper>
                                    );
                                })}
                            </ListWrapper>

                            {this.state.value.length > 0
                                ? (this.props.readOnly || this.props.disabled)
                                    || <button
                                        className="tags-input__remove-value"
                                        style={{position: 'relative', bottom: '2px'}}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            this.setState({value: []});
                                        }}
                                    >
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
                                    onClick={() => {
                                        this.setState({openDropdown: !this.state.openDropdown});
                                    }}
                                />
                            }

                            {this.state.value.length < 1
                                && <span
                                        className={ 'tags-input__single-item'
                                            + (this.props.readOnly ? ' tags-input__tag-item--readonly' : '')
                                        }
                                    >
                                    <span className="tags-input__placeholder">
                                        {this.props.placeholder}
                                    </span>
                                </span>
                            }

                            {this.state.value.map((item, i: number) => {
                                const Wrapper: React.ComponentType<{backgroundColor?: string, borderColor?: string}>
                                = ({backgroundColor, borderColor, children}) => (
                                    <span
                                        className={
                                            'tags-input__single-item'
                                            + (this.props.readOnly ? ' tags-input__tag-item--readonly' : '')
                                        }
                                        onClick={() => !this.props.readOnly && this.removeClick(i)}
                                    >
                                        {this.props.getBorderColor
                                            && <div
                                                className="item-border item-border-selected"
                                                style={borderColor
                                                    ? {backgroundColor: borderColor}
                                                    : {backgroundColor: this.props.getBorderColor(item)}
                                                }
                                            >
                                            </div>
                                        }

                                        <span
                                            className="tags-input__helper-box"
                                            style={{color: backgroundColor && getTextColor(backgroundColor)}}
                                        >
                                            <span
                                                className={backgroundColor && `tags-input__tag-item`}
                                                style={{backgroundColor, margin: 0}}
                                                data-test-id="item"
                                            >
                                                {children}
                                            </span>

                                            {
                                                (this.props.readOnly !== true && this.props.required !== true) && (
                                                    <span
                                                        className="tags-input__remove-button"
                                                        data-test-id="clear-value"
                                                    >
                                                        <Icon name='remove-sign'></Icon>
                                                    </span>
                                                )
                                            }
                                        </span>
                                    </span>
                                );

                                return <React.Fragment key={i}>
                                    {this.props.valueTemplate
                                        ? this.props.valueTemplate(item, Wrapper)
                                        : (
                                            <Wrapper>
                                                <span>{this.props.getLabel(item)}</span>
                                            </Wrapper>
                                        )
                                    }
                                </React.Fragment>;
                            })}
                        </div>
                    }
                </div>

                <WithPortal active={this.state.openDropdown} data-test-id="tree-select-popover">
                    <div
                        className={
                            "autocomplete autocomplete--multi-select"
                            + (this.props.width === 'medium' ? ' autocomplete--fixed-width' : '')
                        }
                        style={{
                            zIndex: this.zIndex,
                            width: this.treeSelectRef.current?.offsetWidth,
                        }}
                        ref={this.dropdownRef}
                    >
                        <div className='autocomplete__header'>
                            <div className="autocomplete__icon">
                                <Icon name="search" className="search"></Icon>
                            </div>

                            <div className='autocomplete__filter'>
                                <input
                                    className="autocomplete__input"
                                    type="text"
                                    placeholder={this.props.searchPlaceholder}
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

                                            this.setState({
                                                searchFieldValue: event.target.value,
                                                options: [],
                                                loading: true,
                                            });
                                            this.popperInstance?.update();
                                            this.debounceFn();
                                        } else {
                                            return;
                                        }
                                    }}
                                    data-test-id="filter-input"
                                />
                            </div>
                        </div>

                        {(this.state.activeTree.length > 0 && this.state.buttonValue != null)
                            && <div className='autocomplete__category-header'>
                                <div
                                    className="autocomplete__icon"
                                    onClick={() => {
                                        this.backButton();
                                    }}
                                >
                                    <Icon name="arrow-left" className="arrow-left"></Icon>
                                </div>

                                <div className='autocomplete__filter'>
                                    <button className='autocomplete__category-title'>
                                        {this.props.optionTemplate
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
                                        data-test-id="options"
                                        role='tree'
                                        aria-multiselectable={this.props.allowMultiple}
                                    >
                                        {this.state.options.map((option, i: React.Key | undefined) => {
                                            let selectedItem = this.state.value.some((obj) =>
                                                this.props.getId(obj) === this.props.getId(option.value),
                                            );

                                            return (
                                                <TreeSelectItem
                                                    key={i}
                                                    option={option}
                                                    handleTree={this.handleTree}
                                                    selectedItem={selectedItem}
                                                    allowMultiple={this.props.allowMultiple}
                                                    parentCategory={this.state.buttonValue == null
                                                        ? undefined
                                                        : this.props.getLabel(this.state.buttonValue.value)
                                                    }
                                                    getBorderColor={this.props.getBorderColor}
                                                    getBackgroundColor={this.props.getBackgroundColor}
                                                    getId={this.props.getId}
                                                    getLabel={this.props.getLabel}
                                                    optionTemplate={this.props.optionTemplate}
                                                    onKeyDown={() => this.setState({
                                                        buttonTarget: [
                                                            ...this.state.buttonTarget,
                                                            this.props.getId(option.value),
                                                        ],
                                                    })}
                                                />
                                            );
                                        })}
                                    </ul>
                                    : null
                                : <ul
                                    className="suggestion-list suggestion-list--multi-select"
                                    ref={this.ref}
                                >
                                    {this.filteredItem(
                                        this.props.singleLevelSearch
                                            ? this.state.options
                                            : this.state.filterArr,
                                    )}
                                </ul>
                        }
                    </div>
                </WithPortal>
            </InputWrapper>
        );
    }
}
