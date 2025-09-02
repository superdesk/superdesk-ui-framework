import * as React from 'react';
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
export declare class CalendarWeekDayItem extends React.PureComponent<IPropsItem> {
    render(): JSX.Element;
}
export declare class WeeklyCalendarGrid extends React.PureComponent<{
    style?: React.CSSProperties;
}> {
    render(): JSX.Element;
}
export declare class WeeklyCalendarGridItem extends React.PureComponent {
    render(): JSX.Element;
}
export {};
