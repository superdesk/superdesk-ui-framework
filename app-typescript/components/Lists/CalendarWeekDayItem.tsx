import * as React from 'react';
import classNames from 'classnames';

interface IPropsItem {
    children?: React.ReactNode;
    state?: 'default' | 'primary' | 'success' | 'warning' | 'alert' | 'highlight';
    clickable?: boolean;
    coloredBg?: boolean;
    selected?: boolean;
    disabled?: boolean;
    hidden?: boolean;
    onClick?(): void;
}

export class CalendarWeekDayItem extends React.PureComponent<IPropsItem> {
    render() {
        let classes = classNames('calendar-week-day__item', {
            'calendar-week-day__item--clickable': this.props.clickable === true,
            'calendar-week-day__item--selected': this.props.selected,
            'calendar-week-day__item--colored-bg': this.props.coloredBg,
            'calendar-week-day__item--disabled': this.props.disabled,
            'calendar-week-day__item--hidden': this.props.hidden,
            [`calendar-week-day__item--${this.props.state}`]: this.props.state || this.props.state !== undefined,
        });

        return (
            <div className={classes}>
                {this.props.children}
            </div>
        );
    }
}

export class WeeklyCalendarGrid extends React.PureComponent<{style?: React.CSSProperties}> {
    render() {
        return (
            <div className="calendar-user-week-row" style={this.props.style}>
                {this.props.children}
            </div>
        );
    }
}

export class WeeklyCalendarGridItem extends React.PureComponent {
    render() {
        return (
            <div className="calendar-week-day__container">
                {this.props.children}
            </div>
        );
    }
}
