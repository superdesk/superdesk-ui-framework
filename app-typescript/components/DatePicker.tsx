import * as React from 'react';
import addDays from 'date-fns/addDays';
import format from 'date-fns/format';
import {Calendar, LocaleSettings} from 'primereact/calendar';

interface IDatePicker {
    value: Date;
    onChange(valueNext: Date): void;
    disabled?: boolean;

    // shortcuts can be used to jump to a date relative to today
    // for example [{label: 'tomorrow', days: 1}, {label: 'yesterday', days: -1}]
    shortcuts?: Array<{days: number, label: string}>;
}

let currentLocale: LocaleSettings = {
    firstDayOfWeek: 1, // no easy way to get it from Intl API yet https://github.com/tc39/ecma402/issues/6
    dayNames: [
        new Intl.DateTimeFormat(undefined, {weekday: 'long'}).format(new Date('2000-01-01')), // sunday
        new Intl.DateTimeFormat(undefined, {weekday: 'long'}).format(new Date('2000-01-02')),
        new Intl.DateTimeFormat(undefined, {weekday: 'long'}).format(new Date('2000-01-03')),
        new Intl.DateTimeFormat(undefined, {weekday: 'long'}).format(new Date('2000-01-04')),
        new Intl.DateTimeFormat(undefined, {weekday: 'long'}).format(new Date('2000-01-05')),
        new Intl.DateTimeFormat(undefined, {weekday: 'long'}).format(new Date('2000-01-06')),
        new Intl.DateTimeFormat(undefined, {weekday: 'long'}).format(new Date('2000-01-07')),
    ],
    dayNamesShort: [
        new Intl.DateTimeFormat(undefined, {weekday: 'short'}).format(new Date('2000-01-01')), // sunday
        new Intl.DateTimeFormat(undefined, {weekday: 'short'}).format(new Date('2000-01-02')),
        new Intl.DateTimeFormat(undefined, {weekday: 'short'}).format(new Date('2000-01-03')),
        new Intl.DateTimeFormat(undefined, {weekday: 'short'}).format(new Date('2000-01-04')),
        new Intl.DateTimeFormat(undefined, {weekday: 'short'}).format(new Date('2000-01-05')),
        new Intl.DateTimeFormat(undefined, {weekday: 'short'}).format(new Date('2000-01-06')),
        new Intl.DateTimeFormat(undefined, {weekday: 'short'}).format(new Date('2000-01-07')),
    ],
    dayNamesMin: [
        new Intl.DateTimeFormat(undefined, {weekday: 'short'}).format(new Date('2000-01-01')), // sunday
        new Intl.DateTimeFormat(undefined, {weekday: 'short'}).format(new Date('2000-01-02')),
        new Intl.DateTimeFormat(undefined, {weekday: 'short'}).format(new Date('2000-01-03')),
        new Intl.DateTimeFormat(undefined, {weekday: 'short'}).format(new Date('2000-01-04')),
        new Intl.DateTimeFormat(undefined, {weekday: 'short'}).format(new Date('2000-01-05')),
        new Intl.DateTimeFormat(undefined, {weekday: 'short'}).format(new Date('2000-01-06')),
        new Intl.DateTimeFormat(undefined, {weekday: 'short'}).format(new Date('2000-01-07')),
    ],
    monthNames: [
        new Intl.DateTimeFormat(undefined, {month: 'long'}).format(new Date('2000-01-01')),
        new Intl.DateTimeFormat(undefined, {month: 'long'}).format(new Date('2000-02-01')),
        new Intl.DateTimeFormat(undefined, {month: 'long'}).format(new Date('2000-03-01')),
        new Intl.DateTimeFormat(undefined, {month: 'long'}).format(new Date('2000-04-01')),
        new Intl.DateTimeFormat(undefined, {month: 'long'}).format(new Date('2000-05-01')),
        new Intl.DateTimeFormat(undefined, {month: 'long'}).format(new Date('2000-06-01')),
        new Intl.DateTimeFormat(undefined, {month: 'long'}).format(new Date('2000-07-01')),
        new Intl.DateTimeFormat(undefined, {month: 'long'}).format(new Date('2000-08-01')),
        new Intl.DateTimeFormat(undefined, {month: 'long'}).format(new Date('2000-09-01')),
        new Intl.DateTimeFormat(undefined, {month: 'long'}).format(new Date('2000-10-01')),
        new Intl.DateTimeFormat(undefined, {month: 'long'}).format(new Date('2000-11-01')),
        new Intl.DateTimeFormat(undefined, {month: 'long'}).format(new Date('2000-12-01')),
    ],
    monthNamesShort: [
        new Intl.DateTimeFormat(undefined, {month: 'short'}).format(new Date('2000-01-01')),
        new Intl.DateTimeFormat(undefined, {month: 'short'}).format(new Date('2000-02-01')),
        new Intl.DateTimeFormat(undefined, {month: 'short'}).format(new Date('2000-03-01')),
        new Intl.DateTimeFormat(undefined, {month: 'short'}).format(new Date('2000-04-01')),
        new Intl.DateTimeFormat(undefined, {month: 'short'}).format(new Date('2000-05-01')),
        new Intl.DateTimeFormat(undefined, {month: 'short'}).format(new Date('2000-06-01')),
        new Intl.DateTimeFormat(undefined, {month: 'short'}).format(new Date('2000-07-01')),
        new Intl.DateTimeFormat(undefined, {month: 'short'}).format(new Date('2000-08-01')),
        new Intl.DateTimeFormat(undefined, {month: 'short'}).format(new Date('2000-09-01')),
        new Intl.DateTimeFormat(undefined, {month: 'short'}).format(new Date('2000-10-01')),
        new Intl.DateTimeFormat(undefined, {month: 'short'}).format(new Date('2000-11-01')),
        new Intl.DateTimeFormat(undefined, {month: 'short'}).format(new Date('2000-12-01')),
    ],
    today: 'today', // not used
    clear: 'clear', // not used
};

// get date format from current locale
const dateFormat = new Date('2000-11-22').toLocaleDateString()
    .replace('22', 'dd')
    .replace('11', 'mm')
    .replace('2000', 'yy');

interface IPrivatePrimeReactCalendarApi {
    hideOverlay?(): void;
}

export class DatePicker extends React.PureComponent<IDatePicker> {
    private instance: IPrivatePrimeReactCalendarApi | undefined;

    render() {
        return (
            // a patch for primereact/calendar is used for fixing https://github.com/primefaces/primereact/issues/1086
            <Calendar
                ref={(ref) => {
                    this.instance = ref as unknown as IPrivatePrimeReactCalendarApi;
                }}
                value={this.props.value}
                onChange={(event) => {
                    if (Array.isArray(event.value)) {
                        throw new Error('arrays are not supported');
                    } else {
                        this.props.onChange(event.value);
                    }
                }}
                locale={currentLocale}
                dateFormat={dateFormat}
                showIcon={true}
                icon="icon-calendar"
                headerTemplate={() => this.props.shortcuts == null ? null : (
                    <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: 10}}>
                        {
                            this.props.shortcuts.map(({label, days}, i) => (
                                <button
                                    key={i}
                                    className="btn btn--hollow btn--small"
                                    onClick={() => {
                                        this.props.onChange(addDays(new Date(), days));

                                        if (this.instance != null && typeof this.instance.hideOverlay === 'function') {
                                            this.instance.hideOverlay();
                                        }
                                    }}
                                >
                                    {label}
                                </button>
                            ))
                        }
                    </div>
                )}
                appendTo={document.body} // making it work inside `overflow:hidden`
                disabled={this.props.disabled}
            />
        );
    }
}

interface IDatePickerISO {
    value: string;
    onChange(valueNext: string): void;
    disabled?: boolean;
    shortcuts?: Array<{days: number, label: string}>;
}

export class DatePickerISO extends React.PureComponent<IDatePickerISO> {
    render() {
        return (
            <DatePicker
                value={new Date(this.props.value)}
                onChange={(valueNext) => this.props.onChange(format(valueNext, 'yyyy-MM-dd'))}
                disabled={this.props.disabled}
                shortcuts={this.props.shortcuts}
            />
        );
    }
}
