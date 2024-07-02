import * as React from 'react';
import addDays from 'date-fns/addDays';
import format from 'date-fns/format';
import moment from 'moment';
import { Calendar, LocaleSettings, CalendarProps } from '@superdesk/primereact/calendar';
import { range, throttle } from 'lodash';
import nextId from "react-id-generator";
import { InputWrapper } from './Form';
import { IInputWrapper } from './Form/InputWrapper';

export type DatePickerLocaleSettings = Omit<LocaleSettings, 'today' | 'clear'>;

interface IDatePickerBase extends IInputWrapper {
    dateFormat: string; // a combination of YYYY, MM, and DD with a custom separator e.g. 'MM/DD/YYYY'

    // shortcuts can be used to jump to a date relative to today
    // for example [{label: 'tomorrow', days: 1}, {label: 'yesterday', days: -1}]
    headerButtonBar?: Array<{days: number, label: string}>;

    // ability to provide localisation. for example (see https://primefaces.org/primereact/showcase/#/calendar):
    /*
        locale={{
            firstDayOfWeek: 1,
            dayNames: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
            dayNamesShort: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
            dayNamesMin: ["D", "L", "M", "X", "J", "V", "S"],
            monthNames: [
                "enero", "febrero", "marzo", "abril", "mayo", "junio",
                "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
            ],
            monthNamesShort: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"],
        }}
     */
    locale?: DatePickerLocaleSettings;
}

interface IDatePicker extends IDatePickerBase {
    value: Date | null;
    onChange(valueNext: Date | null): void;
    maxDate?: Date;
    minDate?: Date;
    'data-test-id'?: string;
}

const internalPrimereactClassnames = {
    overlayVisible: 'p-input-overlay-visible',
};

interface IPrivatePrimeReactCalendarApi {
    hideOverlay?(): void;
    panel?: HTMLElement;
}

interface IState {
    // required for allowing free text input into the date input field
    // but calling `props.onChange` only when a valid date is entered
    value: CalendarProps['value'];

    // valid means it can be parsed
    valid: boolean;
}

// tries to parse primereact/calendar value format to IDatePicker['value']
function parseFromPrimeReactCalendarFormat(value: CalendarProps['value']): IDatePicker['value'] | 'failed-to-parse' {
    if (Array.isArray(value)) {
        return 'failed-to-parse'; // arrays aren't supported
    } else if (value instanceof Date) {
        return value;
    } else if (value === '') {
        return null;
    } else {
        // at this point value is a free input string that can't be parsed to a Date inside primereact/calendar
        return 'failed-to-parse';
    }
}

function parseToPrimeReactCalendarFormat(value: IDatePicker['value']): CalendarProps['value'] {
    return value === null ? undefined : value;
}

export class DatePicker extends React.PureComponent<IDatePicker, IState> {
    private instance: IPrivatePrimeReactCalendarApi | undefined;
    hidePopupOnScroll: () => void;
    private htmlId = nextId();

    constructor(props: IDatePicker) {
        super(props);
        this.state = {
            value: parseToPrimeReactCalendarFormat(this.props.value),
            valid: true,
        };

        this.hidePopupOnScroll = throttle(() => {
            if (
                this.instance != null
                && this.instance.panel != null
                && this.instance.hideOverlay != null
                && this.instance.panel.classList.contains(internalPrimereactClassnames.overlayVisible)
            ) {
                this.instance.hideOverlay();
            }
        }, 300);
    }

    componentDidMount() {
        document.addEventListener('scroll', this.hidePopupOnScroll, true);
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this.hidePopupOnScroll);
    }

    componentDidUpdate(prevProps: IDatePicker) {
        // sync internal state with props
        // the check is more complex than a === b, because value equality is checked rather than reference equality
        // which prevents infinite loops that may happen otherwise
        if (this.props.value === null || prevProps.value === null) {
            // at least one of the values is null so strict comparison can be used
            if (this.props.value !== prevProps.value) {
                this.setState({value: parseToPrimeReactCalendarFormat(this.props.value), valid: true});
            }
        } else if (this.props.value.getTime() !== prevProps.value.getTime()) { // comparing by value
            this.setState({value: parseToPrimeReactCalendarFormat(this.props.value), valid: true});
        }
    }

    render() {
        let locale: LocaleSettings | undefined;
        if (this.props.locale != null) {
            locale = {
                ...this.props.locale,
                today: 'today',
                clear: 'clear',
            };
        }

        if (this.props.preview) {
            return (
                // We have to do type assertion here because we wrap primereact's component using
                // a narrower interface i.e. primereact supports an array of dates or a single date,
                // and our wrapped component will only ever use a single date.
                <div>
                    <span>{moment(this.state.value as Date).format(this.props.dateFormat)}</span>
                </div>
            );
        }

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
            >
                <Calendar
                    inputId={this.htmlId}
                    ariaLabelledBy={this.htmlId + 'label'}
                    ref={(ref) => {
                        this.instance = ref as unknown as IPrivatePrimeReactCalendarApi;

                        const refAny: any = ref;

                        if (this.props['data-test-id'] != null && refAny?.inputElement != null) {
                            refAny.inputElement.setAttribute('data-test-id', this.props['data-test-id']);
                        }

                    }}
                    value={this.state.value === null ? undefined : this.state.value}
                    onChange={(event) => {
                        const result = parseFromPrimeReactCalendarFormat(event.value);

                        if (result !== 'failed-to-parse') {
                            this.setState({value: event.value, valid: true});
                            this.props.onChange(result);
                        } else {
                            // updating internal state so a user can continue typing and enter a valid value
                            this.setState({value: event.value, valid: false});
                        }
                    }}
                    locale={locale}
                    dateFormat={this.props.dateFormat.replace('YYYY', 'yy').replace('MM', 'mm').replace('DD', 'dd')}
                    showIcon={true}
                    icon="icon-calendar"
                    headerTemplate={() => this.props.headerButtonBar == null ? null : (
                        <div className="datepicker-header-toolbar">
                            {this.props.headerButtonBar.map(({label, days}, i) => (
                                <button
                                    key={i}
                                    className="btn btn--small"
                                    onClick={() => {
                                        this.props.onChange(addDays(new Date(), days));
                                        if (
                                            this.instance != null
                                            && typeof this.instance.hideOverlay === 'function'
                                        ) {
                                            this.instance.hideOverlay();
                                        }
                                    }}
                                >
                                    {label}
                                </button>
                            ))}
                        </div>
                    )}
                    appendTo={document.body} // making it work inside `overflow:hidden`
                    disabled={this.props.disabled}
                    minDate={this.props.minDate}
                    maxDate={this.props.maxDate}
                    onBlur={(event) => {
                        // @ts-ignore: Object is possibly 'null'.
                        if (!event?.target.value) {
                            // @ts-ignore: Object is possibly 'null'.
                            this.setState({valid: true, value: null});
                        } else {
                            // restoring internal state to current props value
                            this.setState({valid: true, value: parseToPrimeReactCalendarFormat(this.props.value)});
                        }
                    }}
                />
            </InputWrapper>
        );
    }
}

interface IDatePickerISO extends IDatePickerBase {
    value: string; // will output date formatted according to ISO8601; value can be an empty string
    onChange(value: string): void; // value can be an empty string
}

export class DatePickerISO extends React.PureComponent<IDatePickerISO> {
    render() {
        return (
            <DatePicker
                value={new Date(this.props.value)}
                onChange={(value) => {
                    if (value === null) {
                        this.props.onChange('');
                    } else {
                        this.props.onChange(format(value, 'yyyy-MM-dd'));
                    }
                }}
                disabled={this.props.disabled}
                preview={this.props.preview}
                headerButtonBar={this.props.headerButtonBar}
                dateFormat={this.props.dateFormat}
                locale={this.props.locale}
                inlineLabel={this.props.inlineLabel}
                required={this.props.required}
                fullWidth={this.props.fullWidth}
                labelHidden={this.props.labelHidden}
                tabindex={this.props.tabindex}
                label={this.props.label}
                info={this.props.info}
                error={this.props.error}
            />
        );
    }
}
