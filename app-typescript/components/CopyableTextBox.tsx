import React, {useEffect} from 'react';
import {Button} from './Button';
import {gettext} from '../translations';

interface ICopyableTextBoxProps {
    value: string;
    label?: string;
    helperText?: string;

    /**
     * Defaults to normal
     */
    size?: 'small' | 'normal' | 'large';

    'data-test-id'?: string;
}

export const CopyableTextBox: React.FC<ICopyableTextBoxProps> = (props) => {
    const [copied, setCopied] = React.useState(false);
    const timeoutIdRef = React.useRef<number>();

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
        <div className="sd-display-flex-column" data-test-id={props['data-test-id']}>
            {props.label && <div className="sd-input__label">{props.label}</div>}
            <div className="sd-d-flex gap-0-5">
                <div className="sd-copyable-text-box">
                    <span className="sd-copyable-text-box__text">{props.value}</span>
                </div>
                <Button
                    text={gettext('Copy')}
                    icon={copied ? 'ok' : 'copy'}
                    iconOnly={true}
                    onClick={handleCopy}
                    type="default"
                    style="hollow"
                    size={props.size ?? 'normal'}
                    data-test-id="copy-button"
                />
            </div>
            {props.helperText && <div className="sd-input__hint">{props.helperText}</div>}
        </div>
    );
};
