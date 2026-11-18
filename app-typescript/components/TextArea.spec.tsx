import {describe, it, beforeEach, afterEach} from 'mocha';
import * as assert from 'assert';
import {mount, ReactWrapper} from 'enzyme';
import * as React from 'react';
import {TextArea} from './TextArea';

const noop = () => undefined;

function getTextarea(wrapper: ReactWrapper): HTMLTextAreaElement {
    return wrapper.find('textarea').getDOMNode() as HTMLTextAreaElement;
}

describe('TextArea', () => {
    it('renders label, hint and required marker through the input wrapper', () => {
        const wrapper = mount(<TextArea label="Notes" info="Some hint" required={true} onChange={noop} />);
        const textarea = getTextarea(wrapper);

        assert.strictEqual(wrapper.find('label.sd-input__label').text(), 'Notes');
        assert.strictEqual(wrapper.find('label.sd-input__label').prop('htmlFor'), textarea.id);
        assert.strictEqual(wrapper.find('.sd-input__hint').text(), 'Some hint');
        assert.ok(wrapper.find('.sd-input').hasClass('sd-input--required'));
        assert.ok(textarea.classList.contains('sd-input__input'));
    });

    it('shows the error instead of the hint and marks the field invalid', () => {
        const wrapper = mount(<TextArea label="Notes" info="Some hint" error="Too vague" onChange={noop} />);

        assert.ok(wrapper.find('.sd-input').hasClass('sd-input--invalid'));
        assert.strictEqual(wrapper.find('.sd-input__message').text(), 'Too vague');
        assert.strictEqual(wrapper.find('.sd-input__hint').length, 0);
    });

    it('calls onChange with the new string value', () => {
        const values: Array<string> = [];
        const wrapper = mount(<TextArea value="" onChange={(value) => values.push(value)} />);
        const textarea = getTextarea(wrapper);

        textarea.value = 'first line\nsecond line';
        wrapper.find('textarea').simulate('change');

        assert.strictEqual(values.length, 1);
        assert.strictEqual(typeof values[0], 'string');
        assert.strictEqual(values[0], 'first line\nsecond line');
    });

    it('limits the length natively and shows a character counter', () => {
        const wrapper = mount(<TextArea value="hello" maxLength={10} onChange={noop} />);

        assert.strictEqual(getTextarea(wrapper).maxLength, 10);
        assert.strictEqual(wrapper.find('.sd-input__char-count').text(), '5 / 10');
    });

    it('counts from zero when there is no value yet', () => {
        const wrapper = mount(<TextArea maxLength={10} onChange={noop} />);

        assert.strictEqual(wrapper.find('.sd-input__char-count').text(), '0 / 10');
    });

    it('defaults to 3 rows', () => {
        assert.strictEqual(getTextarea(mount(<TextArea onChange={noop} />)).rows, 3);
        assert.strictEqual(getTextarea(mount(<TextArea rows={6} onChange={noop} />)).rows, 6);
    });

    it('is read-only without being disabled', () => {
        const textarea = getTextarea(mount(<TextArea value="text" readonly={true} onChange={noop} />));

        assert.strictEqual(textarea.readOnly, true);
        assert.strictEqual(textarea.disabled, false);
    });

    it('disables the textarea and the wrapper', () => {
        const wrapper = mount(<TextArea value="text" disabled={true} onChange={noop} />);

        assert.strictEqual(getTextarea(wrapper).disabled, true);
        assert.ok(wrapper.find('.sd-input').hasClass('sd-input--disabled'));
    });

    it('renders only the value in preview mode', () => {
        const wrapper = mount(<TextArea label="Notes" value={'one\ntwo'} preview={true} onChange={noop} />);

        assert.strictEqual(wrapper.find('textarea').length, 0);
        assert.strictEqual(wrapper.find('.sd-input__textarea-preview').text(), 'one\ntwo');
    });

    describe('autoHeight', () => {
        // jsdom does no layout, so `scrollHeight` is always 0 unless stubbed.
        let scrollHeight: number;

        beforeEach(() => {
            scrollHeight = 0;
            Object.defineProperty(window.HTMLTextAreaElement.prototype, 'scrollHeight', {
                configurable: true,
                get: () => scrollHeight,
            });
        });

        afterEach(() => {
            delete (window.HTMLTextAreaElement.prototype as any).scrollHeight;
        });

        it('sets the height from the content on mount', () => {
            scrollHeight = 120;
            const textarea = getTextarea(mount(<TextArea value="text" autoHeight={true} onChange={noop} />));

            assert.strictEqual(textarea.style.height, '120px');
            assert.strictEqual(textarea.style.overflowY, 'hidden');
        });

        it('adds the borders to the content height', () => {
            scrollHeight = 120;
            const prototype = window.HTMLTextAreaElement.prototype;

            Object.defineProperty(prototype, 'offsetHeight', {configurable: true, get: () => 44});
            Object.defineProperty(prototype, 'clientHeight', {configurable: true, get: () => 40});

            try {
                const textarea = getTextarea(mount(<TextArea value="text" autoHeight={true} onChange={noop} />));

                assert.strictEqual(textarea.style.height, '124px');
            } finally {
                delete (prototype as any).offsetHeight;
                delete (prototype as any).clientHeight;
            }
        });

        it('follows the value when it changes', () => {
            scrollHeight = 60;
            const wrapper = mount(<TextArea value="a" autoHeight={true} onChange={noop} />);

            scrollHeight = 140;
            wrapper.setProps({value: 'a\nb\nc\nd'});
            assert.strictEqual(getTextarea(wrapper).style.height, '140px');

            scrollHeight = 40;
            wrapper.setProps({value: ''});
            assert.strictEqual(getTextarea(wrapper).style.height, '40px');
        });

        it('stops growing at maxRows and scrolls instead', () => {
            scrollHeight = 60;
            const wrapper = mount(<TextArea value="a" autoHeight={true} maxRows={4} onChange={noop} />);
            const textarea = getTextarea(wrapper);

            // The stylesheet is not loaded in jsdom; these mirror what it sets.
            textarea.style.lineHeight = '20px';
            textarea.style.paddingTop = '6px';
            textarea.style.paddingBottom = '6px';

            scrollHeight = 300;
            wrapper.setProps({value: 'long text'});

            assert.strictEqual(textarea.style.height, `${20 * 4 + 6 + 6}px`);
            assert.strictEqual(textarea.style.overflowY, 'auto');

            scrollHeight = 50;
            wrapper.setProps({value: 'short'});

            assert.strictEqual(textarea.style.height, '50px');
            assert.strictEqual(textarea.style.overflowY, 'hidden');
        });

        it('keeps the previous height while the field is hidden', () => {
            scrollHeight = 80;
            const wrapper = mount(<TextArea value="a" autoHeight={true} onChange={noop} />);

            scrollHeight = 0;
            wrapper.setProps({value: 'ab'});

            assert.strictEqual(getTextarea(wrapper).style.height, '80px');
        });

        it('leaves the height alone without autoHeight, and clears it when turned off', () => {
            scrollHeight = 120;
            const wrapper = mount(<TextArea value="a" onChange={noop} />);

            assert.strictEqual(getTextarea(wrapper).style.height, '');

            wrapper.setProps({autoHeight: true});
            assert.strictEqual(getTextarea(wrapper).style.height, '120px');

            wrapper.setProps({autoHeight: false});
            assert.strictEqual(getTextarea(wrapper).style.height, '');
            assert.strictEqual(getTextarea(wrapper).style.overflowY, '');
        });
    });
});
