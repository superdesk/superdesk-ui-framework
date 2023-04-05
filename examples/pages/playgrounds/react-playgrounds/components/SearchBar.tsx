import * as React from 'react';
import classNames from 'classnames';
import {Icon}  from '../../../../../app-typescript/index';

interface IProps {
    value?: string | number;
    type?: 'expanded' | 'collapsed' | 'boxed';
    placeholder: string;
    focused? : boolean;
    boxed?: boolean;
    onSubmit?(): void;
}

interface IState {
    inputValue: any;
    type: string;
    focused: boolean;
    boxed?: boolean;
}

export class SearchBar extends React.PureComponent<IProps, IState> {
    private inputRef: any;
    constructor(props: Readonly<IProps>) {
        super(props);
        this.state = {
            inputValue: this.props.value ? this.props.value : '', 
            focused: this.props.focused ? this.props.focused : false,
            type: this.props.type ? this.props.type : 'expanded',
            boxed: this.props.boxed ? this.props.boxed : false,
        }
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
                    onChange={(e) => this.setState({inputValue: e.target.value})}
                    onFocus={() => this.setState({focused: true})} />
                {this.state.inputValue &&
                <button className="sd-searchbar__cancel" onClick={() => this.setState({inputValue: ''})}>
                    <Icon name='remove-sign' />
                </button>}
                <button id="sd-searchbar__search-btn" className="sd-searchbar__search-btn" onSubmit={() => this.props.onSubmit}>
                    <Icon name='chevron-right-thin' />
                </button>
            </div>
        );
    }
}
