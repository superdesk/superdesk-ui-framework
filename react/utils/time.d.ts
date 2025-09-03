export type ITimeUnit = 'hours' | 'minutes' | 'seconds';
export declare function getOptionsForTimeUnit(
    timeUnit: ITimeUnit,
    is12HourFormat?: boolean,
    disabledOptions?: {
        [key: string]: Array<number>;
    },
): Array<string>;
export declare function padValue(value: number): string;
