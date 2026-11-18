import * as React from 'react';
import classNames from 'classnames';
import nextId from 'react-id-generator';
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

export class TextArea extends React.Component<IProps> {
    private htmlId = nextId();
    private textareaRef = React.createRef<HTMLTextAreaElement>();

    constructor(props: IProps) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        if (this.props.autoHeight) {
            this.updateHeight();
        }
    }

    componentDidUpdate(prevProps: IProps) {
        if (this.props.autoHeight) {
            if (
                prevProps.value !== this.props.value ||
                prevProps.rows !== this.props.rows ||
                prevProps.maxRows !== this.props.maxRows ||
                prevProps.autoHeight !== this.props.autoHeight
            ) {
                this.updateHeight();
            }
        } else if (prevProps.autoHeight) {
            this.resetHeight();
        }
    }

    handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
        this.props.onChange(event.target.value);
    }

    updateHeight() {
        const textarea = this.textareaRef.current;

        if (textarea == null) {
            return;
        }

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

        if (this.props.maxRows != null) {
            const style = window.getComputedStyle(textarea);
            const lineHeight = toPixels(style.lineHeight);

            if (lineHeight > 0) {
                const maxHeight =
                    lineHeight * this.props.maxRows +
                    toPixels(style.paddingTop) +
                    toPixels(style.paddingBottom) +
                    borders;

                if (height > maxHeight) {
                    height = maxHeight;
                    overflowY = 'auto';
                }
            }
        }

        textarea.style.height = `${height}px`;
        textarea.style.overflowY = overflowY;
    }

    resetHeight() {
        const textarea = this.textareaRef.current;

        if (textarea != null) {
            textarea.style.height = '';
            textarea.style.overflowY = '';
        }
    }

    render() {
        if (this.props.preview) {
            return (
                <div>
                    <span className="sd-input__textarea-preview">{this.props.value}</span>
                </div>
            );
        }

        return (
            <InputWrapper
                label={this.props.label}
                required={this.props.required}
                disabled={this.props.disabled}
                readonly={this.props.readonly}
                value={this.props.value ?? ''}
                error={this.props.error}
                invalid={this.props.error != null}
                info={this.props.info}
                maxLength={this.props.maxLength}
                inlineLabel={this.props.inlineLabel}
                labelHidden={this.props.labelHidden}
                fullWidth={this.props.fullWidth}
                htmlId={this.htmlId}
                boxedStyle={this.props.boxedStyle}
                boxedLable={this.props.boxedLable}
                tabindex={this.props.tabindex}
                inputWrapper={this.props.inputWrapper}
            >
                <textarea
                    ref={this.textareaRef}
                    className={classNames('sd-input__input', {
                        'sd-input__input--auto-height': this.props.autoHeight,
                    })}
                    id={this.htmlId}
                    value={this.props.value}
                    rows={this.props.rows ?? 3}
                    maxLength={this.props.maxLength}
                    aria-describedby={this.htmlId + 'label'}
                    tabIndex={this.props.tabindex}
                    onChange={this.handleChange}
                    placeholder={this.props.placeholder}
                    disabled={this.props.disabled}
                    readOnly={this.props.readonly}
                    data-test-id={this.props['data-test-id']}
                />
            </InputWrapper>
        );
    }
}
