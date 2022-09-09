import * as React from 'react';
import classNames from 'classnames';
import {Icon} from './Icon';

interface IProps {
    value?: string | number;
    type?: 'expanded' | 'collapsed' | 'boxed';
    placeholder: string;
    focused?: boolean;
    boxed?: boolean;
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
    private inputRef: any;
    constructor(props: IProps) {
        super(props);
        this.state = {
            inputValue: this.props.value ? this.props.value : '',
            focused: this.props.focused ? this.props.focused : false,
            type: this.props.type ? this.props.type : 'expanded',
            boxed: this.props.boxed ? this.props.boxed : false,
            keyDown: false,
        };
        this.inputRef = React.createRef();
    }

    componentDidUpdate(prevProps: any) {
        if (prevProps.value !== this.props.value) {
            this.setState({inputValue: this.props.value});
        }
    }

    componentDidMount = () => {
        document.addEventListener("mousedown", (event) => {
            if (this.inputRef.current && !this.inputRef.current.contains(event.target)) {
                this.setState({focused: false});
            }
        });
    }

    render() {
        let classes = classNames('sd-searchbar', {
            [`sd-searchbar--${this.state.type}`] : this.props.type,
            'sd-searchbar--expanded': this.state.type === 'expanded' || this.props.type === undefined,
            'sd-searchbar--focused' : this.state.focused,
            'sd-searchbar--boxed': this.state.boxed,
        });
        return (
            <div className={classes} ref={this.inputRef}>
                <label className="sd-searchbar__icon"></label>
                <input id="search-input"
                ref={(input: any) => (input && this.props.focused) && input.focus()}
                className="sd-searchbar__input"
                type="text"
                placeholder={this.props.placeholder}
                value={this.state.inputValue}
                onKeyDown={(event) => {
                    if (event.key === 'Enter') {
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
                onChange={(event) => this.setState({inputValue: event.target.value})}
                onFocus={() => this.setState({focused: true})} />
                {this.state.inputValue &&
                <button className="sd-searchbar__cancel" onClick={() => this.setState({inputValue: ''})}>
                    <Icon name='remove-sign' />
                </button>}
                <button
                id="sd-searchbar__search-btn"
                className={`sd-searchbar__search-btn ${this.state.keyDown ? 'sd-searchbar__search-btn--active' : ''}`}
                onClick={() => {
                    if (this.props.onSubmit) {
                        this.props.onSubmit(this.state.inputValue);
                    }
                }}>
                    <Icon name='chevron-right-thin' />
                </button>
            </div>
        );
    }
}
