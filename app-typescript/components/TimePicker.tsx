import * as React from 'react';
import nextId from 'react-id-generator';
import classNames from 'classnames';
import {InputWrapper} from './Form';
import {IInputWrapper} from './Form/InputWrapper';
import {TimePickerPopover} from './TimePickerPopover';
import {PopupPositioner} from './ShowPopup';
import {Icon} from './Icon';
import {IconButton} from './IconButton';

interface IProps extends IInputWrapper {
    value: string | null; // ISO8601 time string(e.g. 16:55) or null if there's no value
    onChange(valueNext: string | null): void;
    allowSeconds?: boolean;
    headerTemplate?: React.ReactNode;
    footerTemplate?: React.ReactNode;
    canClear?: boolean; // defaults to true
    'data-test-id'?: string;
}

interface IState {
    popupOpen: boolean;
}

export class TimePicker extends React.PureComponent<IProps, IState> {
    private htmlId = nextId();
    private timeInputRef: React.RefObject<HTMLInputElement>;

    constructor(props: IProps) {
        super(props);

        this.timeInputRef = React.createRef();
        this.state = {
            popupOpen: false,
        };
    }

    render() {
        if (this.props.preview) {
            return (
                <div>
                    <span>{this.props.value}</span>
                </div>
            );
        }

        const canClear = this.props.canClear ?? true;

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
                inputWrapper={this.props.inputWrapper}
            >
                {this.state.popupOpen && (
                    <PopupPositioner
                        getReferenceElement={() => this.timeInputRef.current as HTMLElement}
                        placement="bottom-start"
                        onClose={() => {
                            this.setState({
                                popupOpen: false,
                            });
                        }}
                        data-test-id="time-picker-popover"
                    >
                        <TimePickerPopover
                            value={this.props.value}
                            onChange={this.props.onChange}
                            closePopup={() => {
                                this.setState({
                                    popupOpen: false,
                                });
                            }}
                            allowSeconds={this.props.allowSeconds}
                            headerTemplate={this.props.headerTemplate}
                            footerTemplate={this.props.footerTemplate}
                        />
                    </PopupPositioner>
                )}
                <div className="time-picker__input">
                    <input
                        style={{
                            cursor: 'pointer',
                        }}
                        ref={this.timeInputRef}
                        value={this.props.value ?? ''}
                        type="time"
                        onClick={(e) => {
                            // don't show default popup
                            e.preventDefault();

                            this.setState({
                                popupOpen: true,
                            });
                        }}
                        onKeyDown={(event) => {
                            // don't show default popup
                            event.preventDefault();

                            if (event.key === ' ') {
                                this.setState({
                                    popupOpen: !this.state.popupOpen,
                                });
                            } else if ((event.key === 'Enter' || event.key === 'Escape') && this.state.popupOpen) {
                                this.setState({
                                    popupOpen: false,
                                });
                            }
                        }}
                        className={classNames('sd-input__input', {
                            'sd-input__input--can-clear': this.props.value != null && canClear,
                        })}
                        id={this.htmlId}
                        aria-labelledby={this.htmlId + 'label'}
                        step={this.props.allowSeconds ? 1 : undefined}
                        required={this.props.required}
                        disabled={this.props.disabled}
                        onChange={(event) => {
                            this.props.onChange(event.target.value);
                        }}
                        data-test-id={this.props['data-test-id']}
                    />
                    <div className="time-picker__icon-wrapper">
                        <Icon name="time" />
                        <div className="clear-time-picker">
                            <IconButton
                                icon="remove-sign"
                                size="small"
                                ariaValue="Clear"
                                toolTipFlow="left"
                                onClick={() => this.props.onChange(null)}
                            />
                        </div>
                    </div>
                </div>
            </InputWrapper>
        );
    }
}
