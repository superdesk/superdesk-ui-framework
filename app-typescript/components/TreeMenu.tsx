import * as React from "react";
import { Icon } from "./Icon";
import { createPopper, Instance } from '@popperjs/core';
import {getPrefixedItemId, TreeSelectItem} from './TreeSelect/TreeSelectItem';
import {keyboardNavigation} from './TreeSelect/KeyboardNavigation';
import {WithPortal} from './WithPortal';

interface IState<T> {
    options: Array<ITreeMenuNode<T>>;
    openDropdown: boolean;
    activeTree: Array<Array<ITreeMenuNode<T>>>;
    buttonTree: Array<ITreeMenuNode<T>>;
    buttonValue: ITreeMenuNode<T> | null;
    filterArr: Array<ITreeMenuNode<T>>;
    searchFieldValue: string;
    firstBranchOptions: Array<ITreeMenuNode<T>>;

    // array of classNames; used to focus an item after returning for another level
    buttonTarget: Array<string>;
}

interface IProps<T> {
    zIndex?: number;
    searchPlaceholder?: string;
    singleLevelSearch?: boolean;
    'data-test-id'?: string;
    getOptions?(): Array<ITreeMenuNode<T>>;
    getLabel(item: T): string;
    getId(item: T): string;
    getBackgroundColor?(item: T): string;
    getBorderColor?(item: T): string;
    optionTemplate?(item: T): React.ComponentType<T> | JSX.Element;
    children: (toggle: (event: React.SyntheticEvent) => void) => JSX.Element;
}

interface IParent<T> {
    value: T;
    children: Array<ITreeMenuNode<T>>;
}

interface IChildren<T> {
    value: T;
    disabled?: boolean;
    onSelect(): void;
}

export type ITreeMenuNode<T> = IParent<T> | IChildren<T>;

function nodeHasChildren<T>(item: IParent<T> | IChildren<T>): item is IParent<T> {
    if ('children' in item) {
        return item['children'] != null;
    }

    return false;
}

function nodeCanBeSelected<T>(item: IParent<T> | IChildren<T>): item is IChildren<T> {
    if ('onSelect' in item) {
        return item['onSelect'] != null;
    }

    return false;
}

function onSelect<T>(item: ITreeMenuNode<T>) {
    if (nodeCanBeSelected(item)) {
        return item.onSelect;
    }

    return undefined;
}

function disabledItem<T>(item: ITreeMenuNode<T>) {
    if (nodeCanBeSelected(item)) {
        return item.disabled;
    }

    return undefined;
}

export class TreeMenu<T> extends React.Component<IProps<T>, IState<T>> {
    private dropdownRef: React.RefObject<HTMLInputElement>;
    private ref: React.RefObject<HTMLUListElement>;
    private openDropdownRef: React.RefObject<HTMLDivElement>;
    private treeMenuRef: React.RefObject<HTMLDivElement>;
    private inputRef: React.RefObject<HTMLInputElement>;
    private popperInstance: Instance | null;

    constructor(props: IProps<T>) {
        super(props);
        this.state = {
            options: this.props.getOptions ? this.props.getOptions() : [],
            firstBranchOptions: this.props.getOptions ? this.props.getOptions() : [],
            searchFieldValue: '',
            activeTree: [],
            buttonTree: [],
            buttonTarget: [],
            filterArr: [],
            buttonValue: null,
            openDropdown: false,
        };

        this.handleMultiLevel = this.handleMultiLevel.bind(this);
        this.backButton = this.backButton.bind(this);
        this.handleButton = this.handleButton.bind(this);
        this.handleTree = this.handleTree.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);
        this.toggle = this.toggle.bind(this);
        this.onMouseDown = this.onMouseDown.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
        this.onPressEsc = this.onPressEsc.bind(this);

        this.dropdownRef = React.createRef();
        this.ref = React.createRef();
        this.openDropdownRef = React.createRef();
        this.treeMenuRef = React.createRef();
        this.inputRef = React.createRef();

        this.popperInstance = null;
    }

    inputFocus = () => {
        this.inputRef.current?.focus();
    }

    listNavigation = () => {
        const element: HTMLElement = document.querySelector('.suggestion-item--btn:not([disabled])') as HTMLElement;
        element.focus();
    }

    onMouseDown = (event: MouseEvent) => {
        if (
            (this.dropdownRef.current?.contains(event.target as HTMLElement) !== true)
            && (this.treeMenuRef.current?.contains(event.target as HTMLElement) !== true)
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
                this.inputFocus,
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
    }

    componentWillUnmount(): void {
        document.removeEventListener("mousedown", this.onMouseDown);
        document.removeEventListener("keydown", this.onKeyDown);
        document.addEventListener("keydown", this.onPressEsc);
    }

    componentDidUpdate(_prevProps: Readonly<IProps<T>>, prevState: Readonly<IState<T>>): void {
        if (prevState.openDropdown !== this.state.openDropdown) {
            this.toggleMenu();
        }

        if (
            (prevState.activeTree !== this.state.activeTree)
            || (prevState.filterArr !== this.state.filterArr)
            || (prevState.options !== this.state.options)
        ) {
            this.popperInstance?.update();
        }
    }

    toggleMenu() {
        if (this.state.openDropdown) {
            if (this.openDropdownRef.current && this.dropdownRef.current) {
                this.popperInstance = createPopper(this.openDropdownRef.current, this.dropdownRef.current, {
                    placement: 'bottom-start',
                });
            }

            this.inputRef.current?.addEventListener('keydown', (e: KeyboardEvent) => {
                if (e.key === 'ArrowDown') {
                    e.preventDefault();
                    e.stopPropagation();

                    setTimeout(() => {
                        this.listNavigation();
                    });
                }
            });

            if (this.inputRef.current) {
                this.inputFocus();
            } else {
                const element: HTMLElement
                    = document.querySelector('.suggestion-item--btn:not([disabled])') as HTMLElement;
                element.focus();
            }
        } else {
            this.openDropdownRef.current?.focus();
        }
    }

    toggle(event: React.SyntheticEvent) {
        event.stopPropagation();

        this.setState({
            openDropdown: !this.state.openDropdown,
        });
    }

    handleMultiLevel(item: ITreeMenuNode<T>) {
        if (nodeHasChildren(item)) {
            this.setState({
                activeTree: [...this.state.activeTree, this.state.options],
                options: item.children,
            });
        }
    }

    handleButton(item: ITreeMenuNode<T>) {
        let buttonTreeNext: Array<ITreeMenuNode<T>> = this.state.buttonTree;

        if (this.state.buttonValue != null) {
            buttonTreeNext = buttonTreeNext.concat(this.state.buttonValue);
        }

        this.setState({
            buttonTree: buttonTreeNext,
            buttonValue: item,
        });
    }

    handleTree(_event: React.MouseEvent<HTMLLIElement, MouseEvent>, option: ITreeMenuNode<T>) {
        if (nodeHasChildren(option)) {
            this.handleButton(option);
            this.handleMultiLevel(option);
        } else {
            this.setState({
                openDropdown: false,
                options: this.state.firstBranchOptions,
                activeTree: [],
                buttonTarget: [],
            });
        }

        setTimeout(() => {
            const element: HTMLElement
                = document.querySelectorAll('.suggestion-item--btn:not([disabled])')[0] as HTMLButtonElement;
            element.focus();
        });
    }

    backButton(): void {
        const items = this.state.activeTree.pop();

        if (items != null) {
            this.setState({
                options: items,
            });
        }

        const item = this.state.buttonTree.pop();

        if (item != null) {
            this.setState({
                buttonValue: item,
            });
        }
    }

    recursion(arr: Array<ITreeMenuNode<T>>) {
        arr.map((item) => {
            this.state.filterArr.push(item);

            if (nodeHasChildren(item)) {
                this.recursion(item.children);
            }
        });
    }

    filteredItem(arr: Array<ITreeMenuNode<T>>) {
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
            return filteredArr.map((option, i) => (
                <TreeSelectItem
                    key={i}
                    option={option}
                    handleTree={this.handleTree}
                    disabledItem={disabledItem(option)}
                    getBorderColor={this.props.getBorderColor}
                    getBackgroundColor={this.props.getBackgroundColor}
                    getId={this.props.getId}
                    optionTemplate={this.props.optionTemplate}
                    getLabel={this.props.getLabel}
                    onClick={() => {
                        if (onSelect != null) {
                            onSelect(option);

                            this.setState({
                                searchFieldValue: '',
                            });
                        }

                    }}
                />
            ));
        }
    }

    render() {
        return (
            <div ref={this.treeMenuRef}>
                <div ref={this.openDropdownRef}>
                    {this.props.children(this.toggle)}
                </div>

                <WithPortal active={this.state.openDropdown}  data-test-id="tree-menu-popover">
                    <div
                        ref={this.dropdownRef}
                        className="autocomplete autocomplete--multi-select autocomplete--fixed-width"
                        style={{
                            zIndex: this.props.zIndex,
                        }}
                    >
                        <div className='autocomplete__header'>
                            <div
                                className="autocomplete__icon"
                                onClick={() => {
                                    this.backButton();
                                }}
                            >
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
                                        this.setState({searchFieldValue: event.target.value});
                                        this.popperInstance?.update();
                                    }}
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
                                </div>
                            </div>
                        }

                        {this.state.searchFieldValue === '' ?
                            this.props.getOptions ?
                                <ul
                                    ref={this.ref}
                                    className="suggestion-list suggestion-list--multi-select"
                                >
                                    {this.state.options.map((option, i: React.Key | undefined) => (
                                        <TreeSelectItem
                                            key={i}
                                            option={option}
                                            handleTree={this.handleTree}
                                            onClick={onSelect(option)}
                                            disabledItem={disabledItem(option)}
                                            getBorderColor={this.props.getBorderColor}
                                            getBackgroundColor={this.props.getBackgroundColor}
                                            getId={this.props.getId}
                                            optionTemplate={this.props.optionTemplate}
                                            getLabel={this.props.getLabel}
                                            onKeyDown={() => this.setState({
                                                buttonTarget: [
                                                    ...this.state.buttonTarget,
                                                    this.props.getId(option.value),
                                                ],
                                            })}
                                        />
                                    ))}
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
            </div>
        );
    }
}
