import * as React from 'react';
import classNames from 'classnames';
import moment from 'moment';
import nextId from "react-id-generator";

interface IProps {
    hours?: number;
    minutes?: number;
    seconds?: number;
    disabled?: boolean;
    inlineLabel?: boolean;
    required?: boolean;
    fullWidth?: boolean;
    invalid?: boolean;
    labelHidden?: boolean;
    tabindex?: number;
    label?: string;
    info?: string;
    error?: string;
    onChange(e: number): void;
}

interface IState {
    hours?: any;
    minutes?: any;
    seconds?: any;
    invalid?: any;
}

export class DurationInput extends React.PureComponent<IProps, IState> {
    hourRef: React.RefObject<HTMLInputElement>;
    minuteRef: React.RefObject<HTMLInputElement>;
    secondRef: React.RefObject<HTMLInputElement>;
    constructor(props: IProps) {
        super(props);
        this.state = {
            hours: this.stateUpdate('hours', this.props.hours, this.props.minutes, this.props.seconds),
            minutes: this.stateUpdate('minutes', this.props.minutes, this.props.seconds),
            seconds: this.stateUpdate('seconds', this.props.seconds),
            // hours: this.props.hours ? this.zerPad(this.props.hours) : this.zerPad(0),
            // minutes: this.props.minutes ? this.zerPad(this.props.minutes) : this.zerPad(0),
            // seconds: this.props.seconds ? this.zerPad(this.props.seconds) : this.zerPad(0),
            invalid: this.props.invalid ?? false,
        };

        this.hourRef = React.createRef();
        this.minuteRef = React.createRef();
        this.secondRef = React.createRef();
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.zerPad = this.zerPad.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleFocusOnKeyUp = this.handleFocusOnKeyUp.bind(this);
        this.handleKeyValue = this.handleKeyValue.bind(this);
        this.valueUpdate = this.valueUpdate.bind(this);
        this.stateUpdate = this.stateUpdate.bind(this);

    }

    stateUpdate(state: string, parametar1?: number, parametar2?: number, parametar3?: number) {
        let value;
        if(state === 'hours') {
            value =  parametar1 ? parametar1 + Math.floor((parametar2 || 0) / 60) + Math.floor((parametar3 || 0) / 3600) : Math.floor((parametar2 || 0) / 60) + Math.floor((parametar3 || 0) / 3600)
        }
        else if (state === 'minutes') {
            value =  parametar1 ? (parametar1 % 60) + Math.floor((parametar2 || 0) % 3600 / 60) : Math.floor((parametar2 || 0) % 3600 / 60)
        }
        else {
            value =  parametar1 ? parametar1 % 60 : 0
        }
        return this.zerPad(value)
    }
    
    // componentDidUpdate(_: any, prevState: IState) {
    //     if (this.props.onChange) {
    //         this.props.onChange(moment.duration(`${this.state.hours}:${this.state.minutes}:${this.state.seconds}`)
    //         .asSeconds());
    //     }
    //     if (!this.hourRef.current || !this.minuteRef.current || !this.secondRef.current ) {
    //         return;
    //     }
    //     if (this.state.hours !== prevState.hours) {
    //         if (Number(this.hourRef.current.value) > 99) {
    //             this.setState({
    //                 hours: this.zerPad(99),
    //             });
    //         }
    //     }
    //     if (this.state.minutes !== prevState.minutes) {
    //         if (Number(this.minuteRef.current.value) > 59) {
    //             this.setState({
    //                 hours: this.zerPad(Number(this.state.hours) + 1),
    //                 minutes: this.zerPad(0),
    //             });
    //         }
    //         if (Number(this.minuteRef.current.value) < 0) {
    //             this.setState({
    //                 hours: this.zerPad(Number(this.state.hours)) > 0
    //                 ? this.zerPad(Number(this.state.hours) - 1)
    //                 : this.zerPad(Number(this.state.hours)),
    //                 minutes: 59,
    //             });
    //         }
    //     }
    //     if (this.state.seconds !== prevState.seconds) {
    //         if (Number(this.secondRef.current.value) > 59) {
    //             this.setState({
    //                 minutes: this.zerPad(Number(this.state.minutes) + 1),
    //                 seconds: this.zerPad(0),
    //             });
    //         }
    //         if (Number(this.secondRef.current.value) < 0) {
    //             this.setState({
    //                 minutes: this.zerPad(Number(this.state.minutes) - 1),
    //                 seconds: 59,
    //             });
    //         }
    //     }
    // }
    
    valueUpdate() {
        if (this.props.onChange) {
            this.props.onChange(moment.duration(`${this.state.hours}:${this.state.minutes}:${this.state.seconds}`)
            .asSeconds());
        }
        // if (!this.hourRef.current || !this.minuteRef.current || !this.secondRef.current ) {
        //     return;
        // }
        
        if (Number(this.state.hours) > 99) {
            this.setState({
                hours: this.zerPad(99),
            });
        }
    
        if (Number(this.state.minutes) > 59) {
            this.setState({
                hours: this.zerPad(Number(this.state.hours) + 1),
                minutes: this.zerPad(0),
            });
        }
        if (Number(this.state.minutes) < 0) {
            this.setState({
                hours: this.zerPad(Number(this.state.hours)) > 0
                ? this.zerPad(Number(this.state.hours) - 1)
                : this.zerPad(Number(this.state.hours)),
                minutes: 59,
            });
        }
    
        if (Number(this.state.seconds) > 59) {
            this.setState({
                minutes: this.zerPad(Number(this.state.minutes) + 1),
                seconds: this.zerPad(0),
            });
        }
        if (Number(this.state.seconds) < 0) {
            this.setState({
                minutes: this.zerPad(Number(this.state.minutes) - 1),
                seconds: 59,
            });
        }
    }

    handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
        if (!(event.target instanceof HTMLInputElement)) {
            return;
        }
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
            this.handleKeyValue(event, event.target.id as 'hours' | 'minutes' | 'seconds');
        }
        this.valueUpdate();
    }

    handleKeyValue(event: React.KeyboardEvent<HTMLInputElement>, state: 'hours' | 'minutes' | 'seconds') {
        if (!(event.target instanceof HTMLInputElement)) {
            return;
        }
        if (!this.state[state]) {
            return;
        }
        event.preventDefault();
        event.stopPropagation();

        let stateClone: IState = {};
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
        //this.valueUpdate();
    }

    zerPad(value: number | string) {
        if (value.toString().length === 1 || value === 0) {
            return `0${value}`;
        } else if (!value) {
            return '00';
        } else {
            return value;
        }
    }

    handleChange(event: React.ChangeEvent<HTMLInputElement>, state: 'hours' | 'minutes' | 'seconds') {
        let stateClone: IState = {};
        if (event.target.value.length >= 2) {
            stateClone[state] = event.target.value.slice(0, 2);
        } else {
            stateClone[state] = event.target.value;
        }
        this.setState(stateClone);
        this.valueUpdate();
    }

    handleFocus(ref: HTMLInputElement | null, state: 'hours' | 'minutes' | 'seconds') {
        ref?.focus();
        setTimeout(() => {
            ref?.setSelectionRange(0, 2);
        });
        let stateClone: IState = {};
        stateClone[state] = this.zerPad(this.state[state]);
        this.setState(stateClone);
    }

    handleFocusOnKeyUp(event: React.KeyboardEvent<HTMLInputElement>, ref: HTMLInputElement | null) {
        if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft' && event.key !== 'ArrowUp' && event.key !== 'ArrowDown' && event.key !== 'Backspace') {
            if ((event.keyCode > 46 && event.keyCode < 58) || (event.keyCode > 95 && event.keyCode < 106)) {
                const target = event.target as HTMLInputElement;
                if (target.value.length >= 2) {
                    ref?.focus();
                    setTimeout(() => {
                        ref?.setSelectionRange(0, 2);
                    });
                }
            }
        }
    }

    render() {
        let InputClasses = classNames('sd-input__duration-input');

        const classes = classNames('sd-input', {
            'sd-input--inline-label': this.props.inlineLabel,
            'sd-input--required': this.props.required,
            'sd-input--disabled': this.props.disabled,
            'sd-input--full-width': this.props.fullWidth,
            'sd-input--invalid': this.props.invalid || this.state.invalid,
        });
        const labelClasses = classNames('sd-input__label', {
            'a11y-only': this.props.labelHidden,
        });

        let htmlId = nextId();

        return (
            <div className={classes}>
                <label className={labelClasses} htmlFor={htmlId} id={htmlId + 'label'}
                tabIndex={this.props.tabindex === undefined ? undefined : -1}>
                    {this.props.label}
                </label>
                <div className={InputClasses}>
                    <input
                    className='duration-input'
                    type='text'
                    id='hours'
                    max={99}
                    min={0}
                    ref={this.hourRef}
                    value={this.state.hours}
                    disabled={this.props.disabled}
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
                    className='duration-input'
                    type='text'
                    id='minutes'
                    ref={this.minuteRef}
                    value={this.state.minutes}
                    disabled={this.props.disabled}
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
                    className='duration-input'
                    type='text'
                    id='seconds'
                    ref={this.secondRef}
                    value={this.state.seconds}
                    disabled={this.props.disabled}
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
