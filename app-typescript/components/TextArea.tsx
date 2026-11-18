import * as React from 'react';
import classNames from 'classnames';
import {useId} from 'react-id-generator';
import {IInputCommon, IInputWrapper, InputWrapper} from './Form/InputWrapper';

interface IProps extends IInputCommon {
    value?: string;
    onChange(newValue: string): void;

    /**
     * Shows a character counter and stops input at this length.
     */
    maxLength?: number;
    placeholder?: string;

    /**
     * Number of visible text lines. Defaults to 3.
     * With `autoHeight` it is the minimum height.
     */
    rows?: number;

    /**
     * Grows the field with its content instead of scrolling.
     * The height follows the `value` prop.
     */
    autoHeight?: boolean;

    /**
     * With `autoHeight`, stops growing at this many lines and scrolls instead.
     */
    maxRows?: number;

    'data-test-id'?: string;
    inputWrapper?: IInputWrapper['inputWrapper'];
}

function toPixels(value: string): number {
    const parsed = parseFloat(value);

    return isNaN(parsed) ? 0 : parsed;
}

function updateHeight(textarea: HTMLTextAreaElement, maxRows: number | undefined) {
    // Shrinking first lets `scrollHeight` report the content height, with `rows` as the floor.
    // The scrollbar is hidden while measuring because it narrows the text and adds wrapped lines.
    const previousHeight = textarea.style.height;
    const previousOverflowY = textarea.style.overflowY;

    textarea.style.height = 'auto';
    textarea.style.overflowY = 'hidden';

    // A hidden field (inactive tab, closed modal) measures 0. Keep the last height rather than
    // collapsing it; it is measured again on the next `value` change.
    if (textarea.scrollHeight === 0) {
        textarea.style.height = previousHeight;
        textarea.style.overflowY = previousOverflowY;
        return;
    }

    // `scrollHeight` excludes borders, while `height` includes them (border-box).
    const borders = textarea.offsetHeight - textarea.clientHeight;
    let height = textarea.scrollHeight + borders;
    let overflowY = 'hidden';

    if (maxRows != null) {
        const style = window.getComputedStyle(textarea);
        const lineHeight = toPixels(style.lineHeight);

        if (lineHeight > 0) {
            const maxHeight =
                lineHeight * maxRows + toPixels(style.paddingTop) + toPixels(style.paddingBottom) + borders;

            if (height > maxHeight) {
                height = maxHeight;
                overflowY = 'auto';
            }
        }
    }

    textarea.style.height = `${height}px`;
    textarea.style.overflowY = overflowY;
}

export const TextArea = (props: IProps) => {
    const [htmlId] = useId();
    const textareaRef = React.useRef<HTMLTextAreaElement>(null);

    // Layout effects run before paint, so the measured height shows on the first frame without a jump.
    React.useLayoutEffect(() => {
        if (props.autoHeight && textareaRef.current != null) {
            updateHeight(textareaRef.current, props.maxRows);
        }
    }, [props.value, props.rows, props.maxRows, props.autoHeight]);

    React.useLayoutEffect(() => {
        if (!props.autoHeight) {
            return;
        }

        return () => {
            const textarea = textareaRef.current;

            if (textarea != null) {
                textarea.style.height = '';
                textarea.style.overflowY = '';
            }
        };
    }, [props.autoHeight]);

    if (props.preview) {
        return (
            <div>
                <span className="sd-input__textarea-preview">{props.value}</span>
            </div>
        );
    }

    return (
        <InputWrapper
            label={props.label}
            required={props.required}
            disabled={props.disabled}
            readonly={props.readonly}
            value={props.value ?? ''}
            error={props.error}
            invalid={props.error != null}
            info={props.info}
            maxLength={props.maxLength}
            inlineLabel={props.inlineLabel}
            labelHidden={props.labelHidden}
            fullWidth={props.fullWidth}
            htmlId={htmlId}
            boxedStyle={props.boxedStyle}
            boxedLable={props.boxedLable}
            tabindex={props.tabindex}
            inputWrapper={props.inputWrapper}
        >
            <textarea
                ref={textareaRef}
                className={classNames('sd-input__input', {
                    'sd-input__input--auto-height': props.autoHeight,
                })}
                id={htmlId}
                value={props.value}
                rows={props.rows ?? 3}
                maxLength={props.maxLength}
                aria-describedby={htmlId + 'label'}
                tabIndex={props.tabindex}
                onChange={(event) => props.onChange(event.target.value)}
                placeholder={props.placeholder}
                disabled={props.disabled}
                readOnly={props.readonly}
                data-test-id={props['data-test-id']}
            />
        </InputWrapper>
    );
};
