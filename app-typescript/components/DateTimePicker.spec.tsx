import {describe, it} from 'mocha';
import * as assert from 'assert';
import * as React from 'react';
import {DateTimePicker} from './DateTimePicker';

function makePicker(overrides: Partial<React.ComponentProps<typeof DateTimePicker>> = {}) {
    return new DateTimePicker({
        valueType: 'date',
        dateFormat: 'MM/DD/YYYY',
        value: new Date(2024, 0, 1, 13, 30, 45),
        onChange: () => undefined,
        allowSeconds: true,
        ...overrides,
    } as React.ComponentProps<typeof DateTimePicker>);
}

describe('DateTimePicker', () => {
    it('keeps seconds when formatting date values', () => {
        const picker = makePicker();

        assert.strictEqual(picker.getTimeValue(), '13:30:45');
    });

    it('keeps seconds when changing time values', () => {
        let nextValue: Date | null = null;
        const picker = makePicker({
            onChange: (value: Date | null) => {
                nextValue = value;
            },
        });

        picker.handleTimeChange('09:05:12');

        assert.notStrictEqual(nextValue, null);
        const timeValue = nextValue as unknown as Date;

        assert.strictEqual(timeValue.getHours(), 9);
        assert.strictEqual(timeValue.getMinutes(), 5);
        assert.strictEqual(timeValue.getSeconds(), 12);
    });

    it('keeps seconds when changing the date', () => {
        let nextValue: Date | null = null;
        const picker = makePicker({
            onChange: (value: Date | null) => {
                nextValue = value;
            },
        });

        picker.handleDateChange(new Date(2024, 0, 2));

        assert.notStrictEqual(nextValue, null);
        const dateValue = nextValue as unknown as Date;

        assert.strictEqual(dateValue.getHours(), 13);
        assert.strictEqual(dateValue.getMinutes(), 30);
        assert.strictEqual(dateValue.getSeconds(), 45);
    });
});
