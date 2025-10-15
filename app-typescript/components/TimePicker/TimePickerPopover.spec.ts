import {describe, it} from 'mocha';
import * as assert from 'assert';
import {convert12HourTo24Hour, convert24HourTo12Hour, toInternalState} from './TimePickerPopover';

it('should convert all 12-hour times to 24-hour format', () => {
    // AM times
    assert.strictEqual(convert12HourTo24Hour(12, 'am'), 0);
    assert.strictEqual(convert12HourTo24Hour(1, 'am'), 1);
    assert.strictEqual(convert12HourTo24Hour(2, 'am'), 2);
    assert.strictEqual(convert12HourTo24Hour(3, 'am'), 3);
    assert.strictEqual(convert12HourTo24Hour(4, 'am'), 4);
    assert.strictEqual(convert12HourTo24Hour(5, 'am'), 5);
    assert.strictEqual(convert12HourTo24Hour(6, 'am'), 6);
    assert.strictEqual(convert12HourTo24Hour(7, 'am'), 7);
    assert.strictEqual(convert12HourTo24Hour(8, 'am'), 8);
    assert.strictEqual(convert12HourTo24Hour(9, 'am'), 9);
    assert.strictEqual(convert12HourTo24Hour(10, 'am'), 10);
    assert.strictEqual(convert12HourTo24Hour(11, 'am'), 11);

    // PM times
    assert.strictEqual(convert12HourTo24Hour(12, 'pm'), 12);
    assert.strictEqual(convert12HourTo24Hour(1, 'pm'), 13);
    assert.strictEqual(convert12HourTo24Hour(2, 'pm'), 14);
    assert.strictEqual(convert12HourTo24Hour(3, 'pm'), 15);
    assert.strictEqual(convert12HourTo24Hour(4, 'pm'), 16);
    assert.strictEqual(convert12HourTo24Hour(5, 'pm'), 17);
    assert.strictEqual(convert12HourTo24Hour(6, 'pm'), 18);
    assert.strictEqual(convert12HourTo24Hour(7, 'pm'), 19);
    assert.strictEqual(convert12HourTo24Hour(8, 'pm'), 20);
    assert.strictEqual(convert12HourTo24Hour(9, 'pm'), 21);
    assert.strictEqual(convert12HourTo24Hour(10, 'pm'), 22);
    assert.strictEqual(convert12HourTo24Hour(11, 'pm'), 23);
});

it('should convert all 24-hour times to 12-hour format', () => {
    assert.strictEqual(convert24HourTo12Hour(0), 12);
    assert.strictEqual(convert24HourTo12Hour(1), 1);
    assert.strictEqual(convert24HourTo12Hour(2), 2);
    assert.strictEqual(convert24HourTo12Hour(3), 3);
    assert.strictEqual(convert24HourTo12Hour(4), 4);
    assert.strictEqual(convert24HourTo12Hour(5), 5);
    assert.strictEqual(convert24HourTo12Hour(6), 6);
    assert.strictEqual(convert24HourTo12Hour(7), 7);
    assert.strictEqual(convert24HourTo12Hour(8), 8);
    assert.strictEqual(convert24HourTo12Hour(9), 9);
    assert.strictEqual(convert24HourTo12Hour(10), 10);
    assert.strictEqual(convert24HourTo12Hour(11), 11);
    assert.strictEqual(convert24HourTo12Hour(12), 12);
    assert.strictEqual(convert24HourTo12Hour(13), 1);
    assert.strictEqual(convert24HourTo12Hour(14), 2);
    assert.strictEqual(convert24HourTo12Hour(15), 3);
    assert.strictEqual(convert24HourTo12Hour(16), 4);
    assert.strictEqual(convert24HourTo12Hour(17), 5);
    assert.strictEqual(convert24HourTo12Hour(18), 6);
    assert.strictEqual(convert24HourTo12Hour(19), 7);
    assert.strictEqual(convert24HourTo12Hour(20), 8);
    assert.strictEqual(convert24HourTo12Hour(21), 9);
    assert.strictEqual(convert24HourTo12Hour(22), 10);
    assert.strictEqual(convert24HourTo12Hour(23), 11);
});

describe('toInternalState', () => {
    describe('null/undefined/empty input', () => {
        it('should return null state for null input', () => {
            assert.deepStrictEqual(toInternalState(null), {
                hours: null,
                minutes: null,
                seconds: null,
                period: null,
            });
        });

        it('should return null state for undefined input', () => {
            assert.deepStrictEqual(toInternalState(undefined), {
                hours: null,
                minutes: null,
                seconds: null,
                period: null,
            });
        });

        it('should return null state for empty string', () => {
            assert.deepStrictEqual(toInternalState(' '), {
                hours: null,
                minutes: null,
                seconds: null,
                period: null,
            });
        });
    });

    it('should convert 00:00:00 to 12:00:00 am', () => {
        assert.deepStrictEqual(toInternalState('00:00:00'), {
            hours: '12',
            minutes: '00',
            seconds: '00',
            period: 'am',
        });
    });

    it('should convert 01:30:45 to 01:30:45 am', () => {
        assert.deepStrictEqual(toInternalState('01:30:45'), {
            hours: '01',
            minutes: '30',
            seconds: '45',
            period: 'am',
        });
    });

    it('should convert 11:59:59 to 11:59:59 am', () => {
        assert.deepStrictEqual(toInternalState('11:59:59'), {
            hours: '11',
            minutes: '59',
            seconds: '59',
            period: 'am',
        });
    });

    it('should convert 12:00:00 to 12:00:00 pm', () => {
        assert.deepStrictEqual(toInternalState('12:00:00'), {
            hours: '12',
            minutes: '00',
            seconds: '00',
            period: 'pm',
        });
    });

    it('should convert 13:30:15 to 01:30:15 pm', () => {
        assert.deepStrictEqual(toInternalState('13:30:15'), {
            hours: '01',
            minutes: '30',
            seconds: '15',
            period: 'pm',
        });
    });

    it('should convert 23:59:59 to 11:59:59 pm', () => {
        assert.deepStrictEqual(toInternalState('23:59:59'), {
            hours: '11',
            minutes: '59',
            seconds: '59',
            period: 'pm',
        });
    });

    it('should handle time without seconds and default to 00', () => {
        assert.deepStrictEqual(toInternalState('14:30'), {
            hours: '02',
            minutes: '30',
            seconds: '00',
            period: 'pm',
        });
    });

    it('should handle time without seconds in morning', () => {
        assert.deepStrictEqual(toInternalState('09:15'), {
            hours: '09',
            minutes: '15',
            seconds: '00',
            period: 'am',
        });
    });
});
