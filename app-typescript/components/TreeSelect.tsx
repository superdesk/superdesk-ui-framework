import { any } from "prop-types";
import * as React from "react";
import { Icon } from "./Icon";

interface IState<T> {
    value?: Array<any>;
    options?: Array<any>;
    firstBranchOptions?: Array<any>;                // to return on first branch in dropdown
    openDropdown?: boolean;                         // open/close dropdown
    activeTree?: Array<any>;                        // for filtered array
    filterArr?: Array<any>;                         // for filtered array
    searchFieldValue?: string;                      // filter value of input
    buttonTree?: Array<any>;                        // array of button (for backButton)
    buttonValue?: any;                       // button for name of category
    buttonMouseEvent?: boolean;                     // valueButton hover
    selectBranchWithChildren?: boolean;
}

interface IProps<T> {
    value?: Array<T>;
    getOptions(): Array<ITreeNode<T>>;
    selectBranchWithChildren?: boolean;
    readonly?: boolean;
    width?: string;
    allowMultiple?: boolean;
    optionTemplate?(item: T): React.ComponentType<T> | JSX.Element;
    valueTemplate?(item: T): React.ComponentType<T> | JSX.Element;
    onChange(): void;
}

interface ITreeNode<T> {
    value: any;
    parent?: ITreeNode<T>;
    children?: Array<ITreeNode<T>>;
}

export class TreeSelect<T> extends React.Component<IProps<T>, IState<T>> {
    private dropdownRef: any;
    private openDropdownRef: any;

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
        };

        this.removeClick = this.removeClick.bind(this);
        this.handleMultiLevel = this.handleMultiLevel.bind(this);
        this.backButton = this.backButton.bind(this);
        this.handleButton = this.handleButton.bind(this);
        this.backButtonValue = this.backButtonValue.bind(this);
        this.dropdownRef = React.createRef();
        this.openDropdownRef = React.createRef();
    }

    removeClick(i: number) {
        let newTags = this.state.value;
        newTags.splice(i, 1);

        this.setState({
            value: newTags,
        });
        this.props.onChange();
    }

    handleMultiLevel(event, item) {
        if (item.children) {
            this.setState({
                activeTree: [...this.state.activeTree, this.state.options],
                options: item.children,
            });
        }
    }

    handleButton(event, item) {
        this.setState({
            buttonTree: [...this.state.buttonTree, this.state.buttonValue],
            buttonValue: item,
        });
    }

    handleValue(event, item) {
            if (this.props.allowMultiple) {
                let checkItem = this.state.value.find((valueItem: any) => {
                    return valueItem === item;
                });

                if (!checkItem) {
                    this.setState({value: [item]});
                }

                if (!event.ctrlKey) {
                    this.setState({options: this.state.firstBranchOptions, activeTree: [], openDropdown: false});
                }
                this.setState({buttonMouseEvent: false});
            } else {
                let checkItem = this.state.value.find((valueItem: any) => {
                    return valueItem === item;
                });

                if (!checkItem) {
                    this.setState({value: [...this.state.value, item]});
                }

                if (!event.ctrlKey) {
                    this.setState({options: this.state.firstBranchOptions, activeTree: [], openDropdown: false});
                }
                this.setState({buttonMouseEvent: false});
            }
    }

    handleBranchValue(event, item) {
        if (this.props.allowMultiple) {
            if (this.props.selectBranchWithChildren) {

                let checkItem = this.state.value.find((valueItem: any) => {
                    return valueItem === item;
                });

                if (!checkItem) {
                    this.setState({value: [item]});
                }

                if (!event.ctrlKey) {
                    this.setState({options: this.state.firstBranchOptions, activeTree: [], openDropdown: false});
                }
                this.setState({buttonMouseEvent: false});
            }
        } else {
            if (this.props.selectBranchWithChildren) {

                let checkItem = this.state.value.find((valueItem: any) => {
                    return valueItem === item;
                });

                if (!checkItem) {
                    this.setState({value: [...this.state.value, item]});
                }

                if (!event.ctrlKey) {
                    this.setState({options: this.state.firstBranchOptions, activeTree: [], openDropdown: false});
                }
                this.setState({buttonMouseEvent: false});
            }
        }
    }

    backButton = () => {
        if (this.state.activeTree.length > 0) {
            this.setState({
                options: this.state.activeTree.pop(),
            });
        } else {
            return false;
        }
    }

    backButtonValue = () => {
        this.setState({
            buttonValue: this.state.buttonTree.pop(),
        });
    }

    recursion(arr) {
        if (this.props.selectBranchWithChildren) {
            arr.map((item: any) => {
                this.state.filterArr.push(item);
                if (item.children) {
                    this.recursion(item.children);
                }
            });
        } else {
            arr.map((item: any) => {
                if (!item.children) {
                    this.state.filterArr.push(item);
                } else {
                    this.recursion(item.children);
                }
            });
        }
    }

    componentDidMount = () => {
        this.recursion(this.state.options);
        document.addEventListener("mousedown", (event) => {
            if ((this.dropdownRef.current && !this.dropdownRef.current.contains(event.target))
            && (this.openDropdownRef.current && !this.openDropdownRef.current.contains(event.target))) {
                this.setState({openDropdown: false});
            }
        });
    }

    componentDidUpdate(prevProps: Readonly<IProps<T>>, prevState: Readonly<IState<T>>): void {
        if (prevState.value !== this.state.value) {
            this.props.onChange();
        } else if (prevProps.value !== this.props.value) {
            this.props.onChange();
        }
    }

    render() {

        return (
            <div className="tags-input tags-input--multiselect">
                <div className="tags-input__tags">
                    {this.props.readonly
                    || <button ref={this.openDropdownRef}
                    className="tags-input__add-button"
                    onClick={() => this.setState({openDropdown: !this.state.openDropdown})}>
                        <i className="icon-plus-large"></i>
                    </button>}
                        <ul className="tags-input__tag-list">
                            {this.state.value.map((item, i) => {
                                return <React.Fragment key={i}>
                                    <li
                                    className={"tags-input__tag-item tags-input__tag-item-multiselect"
                                    + (this.props.readonly ? ' tags-input__tag-item-readonly' : '')}
                                    onClick={(event) => this.props.readonly || this.removeClick(i)}>
                                        <span className="tags-input__helper-box">
                                            {this.props.valueTemplate
                                            ? this.props.valueTemplate(item)
                                            : <span>{item.value}</span>}
                                            {this.props.readonly
                                            || <span className="tags-input__remove-button">
                                                <i className="icon-close-small"></i>
                                            </span>}
                                        </span>
                                    </li>
                                </React.Fragment>;
                            })}
                        </ul>
                </div>

                {this.state.openDropdown &&
                <div className={"autocomplete autocomplete-multiselect" + (this.props.width === 'medium' ? ' autocomplete-multiselect-width' : '')} ref={this.dropdownRef}>
                    <div className='autocomplete__header'>
                        <div className="autocomplete__icon" onClick={() => {
                        this.backButtonValue();
                        this.backButton();
                        }}>
                            {this.state.activeTree.length > 0
                            ? <Icon name="arrow-left" className="arrow-left"></Icon>
                            : <Icon name="search" className="search"></Icon>}
                        </div>
                        <div className='autocomplete__filter'>
                            {this.state.activeTree.length > 0
                                ? <button
                                className={'autocomplete__button' + (this.props.selectBranchWithChildren ? ' autocomplete__button--multiselect' : '')}
                                onMouseOver={() => this.setState({buttonMouseEvent: true})}
                                onMouseOut={() => this.setState({buttonMouseEvent: false})}
                                value={this.state.buttonValue}
                                onClick={(event) => this.handleBranchValue(event, this.state.buttonValue)}>
                                    {this.state.buttonMouseEvent && this.props.selectBranchWithChildren ? 'Choose entire category' : this.state.buttonValue.value}
                                </button>
                                : <input
                                type="text"
                                className="autocomplete__input"
                                ref={(input: any) => input && input.focus()}
                                value={this.state.searchFieldValue}
                                onChange={(event) => {
                                    this.setState({searchFieldValue: event.target.value});
                                }}
                                />
                            }
                        </div>
                    </div>
                    <ul className="suggestion-list suggestion-list--multi-select">
                        {this.state.searchFieldValue === ''
                            ? this.state.options.map((option, i) => {
                                return (
                                    <li key={i}
                                    className={`suggestion-item suggestion-item--multi-select`}
                                    onClick={(event) => {
                                        event.preventDefault();
                                        event.stopPropagation();
                                        if (option.children) {
                                            this.handleButton(event, option);
                                            this.handleMultiLevel(event, option);
                                            if (event.altKey && !this.props.allowMultiple) {
                                                if (this.props.selectBranchWithChildren) {
                                                    let filteredItems = option.children
                                                    .filter((item) => {
                                                        if (!this.state.value.includes(item)) {
                                                            return item;
                                                        }
                                                    });
                                                    this.setState({
                                                        value: [...this.state.value, ...filteredItems],
                                                        options: this.state.firstBranchOptions,
                                                        openDropdown: false,
                                                        activeTree: [],
                                                    });
                                                } else {
                                                    let filteredItems = option.children
                                                    .filter((item) => {
                                                        if (!this.state.value.includes(item)
                                                        && !item.children) {
                                                            return item;
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
                                    }}>
                                        {this.props.optionTemplate
                                        ? this.props.optionTemplate(option)
                                        : <span className={this.state.value.includes(option) ? 'suggestion-item--disabled' : null}>
                                            {option.value}
                                        </span>}
                                        {option.children && <span className="suggestion-item__icon">
                                            <Icon name="chevron-right-thin"></Icon>
                                        </span>}
                                    </li>
                                );
                            })
                            : this.state.filterArr.filter((item: any) => {
                                if (this.state.searchFieldValue) {
                                    if (item.value
                                    .toLowerCase().includes(this.state.searchFieldValue.toLowerCase())) {
                                        return item;
                                    }
                                } else {
                                    return item;
                                }
                            }).map((item, i) => {
                                return <li key={i}
                                className={`suggestion-item suggestion-item--multi-select`}
                                onClick={(event) => {
                                    this.handleValue(event, item);
                                }}>
                                    <span
                                    className={this.state.value.includes(item)
                                    ? 'suggestion-item--disabled' : null}>
                                        {item.value}
                                    </span>
                                </li>;
                            })
                        }
                    </ul>
                </div>}
            </div>
        );
    }
}
