import React, {useEffect} from 'react';
import {Button} from './Button';
import {gettext} from '../translations';
import {InputWrapper} from './Form';
import nextId from 'react-id-generator';
import {IInputCommon} from './Form/InputWrapper';

interface ICopyableTextBoxProps extends IInputCommon {
    value: string;
    label?: string;
    helperText?: string;

    /**
     * Defaults to normal
     */
    size?: 'medium' | 'large';

    'data-test-id'?: string;
}

export const CopyableTextBox: React.FC<ICopyableTextBoxProps> = (props) => {
    const htmlId = nextId();
    const timeoutIdRef = React.useRef<number>();
    const [copied, setCopied] = React.useState(false);

    useEffect(() => {
        return () => {
            if (timeoutIdRef.current) {
                window.clearTimeout(timeoutIdRef.current);
            }
        };
    }, []);

    const handleCopy = () => {
        navigator.clipboard.writeText(props.value).then(() => {
            setCopied(true);

            if (timeoutIdRef.current) {
                window.clearTimeout(timeoutIdRef.current);
            }

            timeoutIdRef.current = window.setTimeout(() => {
                setCopied(false);
            }, 2000);
        });
    };

    return (
        <InputWrapper
            label={props.label}
            disabled={props.disabled}
            value={props.value}
            error={props.error}
            invalid={props.error != null}
            info={props.info}
            size={props.size ?? 'medium'}
            fullWidth={true}
            htmlId={htmlId}
            tabindex={props.tabindex}
        >
            <div className="d-flex items-center gap-1">
                <input
                    id={htmlId}
                    aria-describedby={htmlId + 'label'}
                    type="text"
                    className="sd-input__input"
                    style={{
                        border: '1px solid var(--color-input-border)',
                        borderRadius: 'var(--b-radius--medium)',
                    }}
                    value={props.value}
                    disabled
                    data-test-id={props['data-test-id']}
                />
                <Button
                    text={gettext('Copy')}
                    icon={copied ? 'ok' : 'copy'}
                    iconOnly={true}
                    onClick={handleCopy}
                    type="default"
                    style="hollow"
                    size={props.size === 'medium' ? 'normal' : (props.size ?? 'normal')}
                    data-test-id="copy-button"
                />
            </div>
        </InputWrapper>
    );
};
