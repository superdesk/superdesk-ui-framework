import * as React from 'react';
import classNames from 'classnames';
import {Icon} from './Icon';

interface IProps {
    value?: string;
    type?: 'expanded' | 'collapsed';
    placeholder: string;
    focused?: boolean;
    boxed?: boolean;
    hideSearchButton?: boolean; // Hide the internal search button (useful when triggering search externally)
    searchOnType?: boolean; // Enable automatic search while typing (debounced)
    searchDelay?: number; // Delay in milliseconds for searchOnType (default: 300)
    onSubmit?(value: string | number): void;
}

interface IState {
    inputValue: any;
    type: string;
    focused: boolean;
    boxed?: boolean;
    keyDown?: boolean;
}

export class SearchBar extends React.PureComponent<IProps, IState> {
    private inputRef: React.RefObject<HTMLDivElement>;
    private searchInputRef: React.RefObject<HTMLInputElement>;
    private searchTimeoutId: ReturnType<typeof setTimeout> | null = null;
    private mouseDownHandler: ((event: MouseEvent) => void) | null = null;

    constructor(props: IProps) {
        super(props);
        this.state = {
            inputValue: this.props.value || '',
            focused: this.props.focused || false,
            type: this.props.type || 'expanded',
            boxed: this.props.boxed || false,
            keyDown: false,
        };
        this.inputRef = React.createRef();
        this.searchInputRef = React.createRef();
    }

    // Debounced search handler for searchOnType
    private handleDebouncedSearch = (value: string) => {
        if (this.searchTimeoutId) {
            clearTimeout(this.searchTimeoutId);
        }

        // Require at least 3 characters before triggering search, or allow empty string to clear
        if (value.length > 0 && value.length < 3) {
            return;
        }

        const delay = this.props.searchDelay || 300;
        this.searchTimeoutId = setTimeout(() => {
            if (this.props.onSubmit) {
                this.props.onSubmit(value);
            }
            this.searchTimeoutId = null;
        }, delay);
    };

    // Public method to trigger search externally
    public triggerSearch = () => {
        // Clear any pending debounced search
        if (this.searchTimeoutId) {
            clearTimeout(this.searchTimeoutId);
            this.searchTimeoutId = null;
        }

        if (this.props.onSubmit) {
            this.props.onSubmit(this.state.inputValue);
        }
    };

    // Public method to clear search externally
    public clearSearch = () => {
        // Clear any pending debounced search
        if (this.searchTimeoutId) {
            clearTimeout(this.searchTimeoutId);
            this.searchTimeoutId = null;
        }

        this.setState({inputValue: ''}, () => {
            if (this.props.onSubmit) {
                this.props.onSubmit('');
            }
        });
    };

    // Public method to focus the input externally
    public focus = () => {
        if (this.searchInputRef.current) {
            this.searchInputRef.current.focus();
            this.setState({focused: true});
        }
    };

    // Public method to set value externally
    public setValue = (value: string) => {
        this.setState({inputValue: value});

        // If searchOnType is enabled, trigger debounced search
        if (this.props.searchOnType) {
            this.handleDebouncedSearch(value);
        }
    };

    componentDidUpdate(prevProps: IProps) {
        if (prevProps.value !== this.props.value) {
            this.setState({inputValue: this.props.value || ''});
        }
    }

    componentDidMount = () => {
        this.mouseDownHandler = (event: MouseEvent) => {
            if (this.inputRef.current && !this.inputRef.current.contains(event.target as Node)) {
                this.setState({focused: false});
            }
        };

        document.addEventListener('mousedown', this.mouseDownHandler);

        // Auto-focus if focused prop is true
        if (this.props.focused && this.searchInputRef.current) {
            this.searchInputRef.current.focus();
        }
    };

    componentWillUnmount = () => {
        // Cleanup: clear timeout and remove event listener
        if (this.searchTimeoutId) {
            clearTimeout(this.searchTimeoutId);
            this.searchTimeoutId = null;
        }

        if (this.mouseDownHandler) {
            document.removeEventListener('mousedown', this.mouseDownHandler);
            this.mouseDownHandler = null;
        }
    };

    render() {
        let classes = classNames('sd-searchbar', {
            [`sd-searchbar--${this.state.type}`]: this.props.type,
            'sd-searchbar--expanded': this.state.type === 'expanded' || this.props.type === undefined,
            'sd-searchbar--focused': this.state.focused,
            'sd-searchbar--boxed': this.state.boxed,
        });
        return (
            <div className={classes} ref={this.inputRef}>
                {this.props.children}
                <label className="sd-searchbar__icon"></label>
                <input
                    id="search-input"
                    ref={this.searchInputRef}
                    className="sd-searchbar__input"
                    type="text"
                    placeholder={this.props.placeholder}
                    value={this.state.inputValue}
                    onKeyPress={(event) => {
                        if (event.key === 'Enter') {
                            // Clear any pending debounced search when Enter is pressed
                            if (this.searchTimeoutId) {
                                clearTimeout(this.searchTimeoutId);
                                this.searchTimeoutId = null;
                            }

                            if (this.props.onSubmit) {
                                this.props.onSubmit(this.state.inputValue);
                            }
                            this.setState({keyDown: true});
                        }
                    }}
                    onKeyUp={(event) => {
                        if (event.key === 'Enter') {
                            this.setState({keyDown: false});
                        }
                    }}
                    onChange={(event) => {
                        const value = event.target.value;
                        this.setState({inputValue: value});

                        // Trigger debounced search if searchOnType is enabled
                        if (this.props.searchOnType) {
                            this.handleDebouncedSearch(value);
                        }
                    }}
                    onFocus={() => this.setState({focused: true})}
                />
                {this.state.inputValue && (
                    <button
                        className="sd-searchbar__cancel"
                        onClick={() => {
                            // Clear any pending debounced search
                            if (this.searchTimeoutId) {
                                clearTimeout(this.searchTimeoutId);
                                this.searchTimeoutId = null;
                            }

                            this.setState({inputValue: ''}, () => {
                                if (this.props.onSubmit) {
                                    this.props.onSubmit('');
                                }
                            });
                        }}
                    >
                        <Icon name="remove-sign" />
                    </button>
                )}
                {this.state.inputValue && !this.props.hideSearchButton && !this.props.searchOnType && (
                    <button
                        id="sd-searchbar__search-btn"
                        className={`sd-searchbar__search-btn ${this.state.keyDown ? 'sd-searchbar__search-btn--active' : ''}`}
                        onClick={() => {
                            // Clear any pending debounced search when button is clicked
                            if (this.searchTimeoutId) {
                                clearTimeout(this.searchTimeoutId);
                                this.searchTimeoutId = null;
                            }

                            if (this.props.onSubmit) {
                                this.props.onSubmit(this.state.inputValue);
                            }
                        }}
                    >
                        <Icon name="chevron-right-thin" />
                    </button>
                )}
            </div>
        );
    }
}
