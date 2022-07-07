import * as React from 'react';
import classNames from 'classnames';
import moment from 'moment';

interface IProps {
    hours?: number;
    minutes?: number;
    seconds?: number;
    onChange(e: number): void;
}

interface IState {
    hours: any;
    minutes: any;
    seconds: any;
}

export class DurationInput extends React.PureComponent<IProps, IState> {
    hourRef;
    minuteRef;
    secondRef;
    constructor(props: IProps) {
        super(props);
        this.state = {
            hours: this.props.hours ? this.zerPad(this.props.hours) : this.zerPad(0),
            minutes: this.props.minutes ? this.zerPad(this.props.hours) : this.zerPad(0),
            seconds: this.props.seconds ? this.zerPad(this.props.hours) : this.zerPad(0),
        };

        this.hourRef = React.createRef();
        this.minuteRef = React.createRef();
        this.secondRef = React.createRef();
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.zerPad = this.zerPad.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleFocusOnKeyUp = this.handleFocusOnKeyUp.bind(this);
        this.handleKeyValue = this.handleKeyValue.bind(this);

    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.onChange) {
            this.props.onChange(moment.duration(`${this.state.hours}:${this.state.minutes}:${this.state.seconds}`)
            .asSeconds());
        }

        if (this.state.hours !== prevState.hours) {
            if (this.hourRef.current.value > 99) {
                this.setState({
                    hours: this.zerPad(99),
                });
            }
        }
        if (this.state.minutes !== prevState.minutes) {
            if (this.minuteRef.current.value > 59) {
                this.setState({
                    hours: this.zerPad(Number(this.state.hours) + 1),
                    minutes: this.zerPad(0),
                });
            }
            if (this.minuteRef.current.value < 0) {
                this.setState({
                    hours: this.zerPad(Number(this.state.hours)) > 0
                    ? this.zerPad(Number(this.state.hours) - 1)
                    : this.zerPad(Number(this.state.hours)),
                    minutes: 59,
                });
            }
        }
        if (this.state.seconds !== prevState.seconds) {
            if (this.secondRef.current.value > 59) {
                this.setState({
                    minutes: this.zerPad(Number(this.state.minutes) + 1),
                    seconds: this.zerPad(0),
                });
            }
            if (this.secondRef.current.value < 0) {
                this.setState({
                    minutes: this.zerPad(Number(this.state.minutes) - 1),
                    seconds: 59,
                });
            }
        }
    }

    handleKeyDown(event) {
        if (event.target.id === 'hours') {
            if (event.key === 'ArrowRight') {
                if (event.target.selectionEnd === event.target.value.length) {
                    this.handleFocus(this.minuteRef.current, event.target.id);
                }
            }
            if (event.key === 'ArrowLeft') {
                if (event.target.selectionStart === 0) {
                    this.handleFocus(this.secondRef.current, event.target.id);
                }
            }
        }

        if (event.target.id === 'minutes') {
            if (event.key === 'ArrowRight') {
                if (event.target.selectionEnd === event.target.value.length) {
                    this.handleFocus(this.secondRef.current, event.target.id);
                }
            }
            if (event.key === 'ArrowLeft') {
                if (event.target.selectionStart === 0) {
                    this.handleFocus(this.hourRef.current, event.target.id);
                }
            }
        }

        if (event.target.id === 'seconds') {
            if (event.key === 'ArrowRight') {
                if (event.target.selectionEnd === event.target.value.length) {
                    this.handleFocus(this.hourRef.current, event.target.id);
                }
            }
            if (event.key === 'ArrowLeft') {
                if (event.target.selectionStart === 0) {
                    this.handleFocus(this.minuteRef.current, event.target.id);
                }
            }
        }

        if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
            this.handleKeyValue(event, event.target.id);
        }
    }

    handleKeyValue(event, state) {
        event.preventDefault();
        event.stopPropagation();

        let stateClone = {};
        if (event.key === 'ArrowUp') {
            if (event.target.id === 'hours') {
                stateClone[state] = this.state[state] < 99
                ? this.zerPad(Number(this.state[state]) + 1)
                : this.zerPad(99);
            } else {
                stateClone[state] = this.zerPad(Number(this.state[state]) + 1);
            }
        } else if (event.key === 'ArrowDown') {
            if (event.target.id === 'hours') {
                stateClone[state] = this.state[state] > 0 ? this.zerPad(Number(this.state[state]) - 1) : this.zerPad(0);
            } else {
                stateClone[state] = this.zerPad(Number(this.state[state]) - 1);
            }
        }
        this.setState(stateClone);
    }

    zerPad(value) {
        if (value.toString().length === 1 || value === 0) {
            return `0${value}`;
        } else if (!value) {
            return '00';
        } else {
            return value;
        }
    }

    handleChange(event, state) {
        let stateClone = {};
        if (event.target.value.length >= 2) {
            stateClone[state] = event.target.value.slice(0, 2);
        } else {
            stateClone[state] = event.target.value;
        }
        this.setState(stateClone);
    }

    handleFocus(ref, state) {
        ref.focus();
        setTimeout(() => {
            ref.setSelectionRange(0, 2);
        });
        let stateClone = {};
        stateClone[state] = this.zerPad(this.state[state]);
        this.setState(stateClone);
    }

    handleFocusOnKeyUp(event, ref) {
        if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft' && event.key !== 'ArrowUp' && event.key !== 'ArrowDown' && event.key !== 'Backspace') {
            if (event.target.value.length >= 2) {
                ref.focus();
                setTimeout(() => {
                    ref.setSelectionRange(0, 2);
                });
            }
        }
    }

    render() {
        let classes = classNames('sd-input__duration-input');

        return (
            <div className={classes}>
                <input
                type='text'
                id='hours'
                max={99}
                min={0}
                ref={this.hourRef}
                value={this.state.hours}
                onKeyDown={(event) => this.handleKeyDown(event)}
                onKeyUp={(event) => this.handleFocusOnKeyUp(event, this.minuteRef.current)}
                onChange={(event) => { this.handleChange(event, 'hours'); }}
                onBlur={(event) => this.setState({hours: this.zerPad(event.target.value)})}
                onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                        event.preventDefault();
                    }
                }} />
                <span className='sd-input__suffix'>h</span>

                <input
                type='text'
                id='minutes'
                ref={this.minuteRef}
                value={this.state.minutes}
                onKeyDown={(event) => this.handleKeyDown(event)}
                onKeyUp={(event) => this.handleFocusOnKeyUp(event, this.secondRef.current)}
                onChange={(event) => { this.handleChange(event, 'minutes'); }}
                onBlur={(event) => this.setState({minutes: this.zerPad(event.target.value)})}
                onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                        event.preventDefault();
                    }
                }} />
                <span className='sd-input__suffix'>m</span>

                <input
                type='text'
                id='seconds'
                ref={this.secondRef}
                value={this.state.seconds}
                onKeyDown={(event) => this.handleKeyDown(event)}
                onKeyUp={(event) => this.handleFocusOnKeyUp(event, this.hourRef.current)}
                onChange={(event) => { this.handleChange(event, 'seconds'); }}
                onBlur={(event) => this.setState({seconds: this.zerPad(event.target.value)})}
                onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                        event.preventDefault();
                    }
                }} />
                <span className='sd-input__suffix'>s</span>
            </div>
        );
    }
}
