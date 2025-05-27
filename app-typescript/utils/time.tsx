import {range, padStart} from 'lodash';

export type ITimeUnit = 'hours' | 'minutes' | 'seconds';

export function getOptionsForTimeUnit(
    timeUnit: ITimeUnit,
    is12HourFormat?: boolean,
    disabledOptions?: {[key: string]: Array<number>},
): Array<string> {
    const format12HourArr = range(1, 13);
    format12HourArr.unshift(format12HourArr.pop() as number);

    const timeUnitArray = (() => {
        if (timeUnit === 'hours') {
            if (is12HourFormat) {
                return format12HourArr;
            } else {
                return range(24);
            }
        } else {
            return range(60);
        }
    })();

    return timeUnitArray
        .filter((item) => !(disabledOptions?.[timeUnit] ?? []).includes(item))
        .map((value) => padStart(value.toString(), 2, '0'));
}

export function padValue(value: number) {
    return padStart((value).toString(), 2, '0');
}
