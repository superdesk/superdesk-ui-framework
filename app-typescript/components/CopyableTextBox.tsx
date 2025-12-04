import * as React from 'react';
import {Button} from './Button';
import {gettext} from '../translations';

interface IProps {
    value: string;
    label?: string;
    helperText?: string;

    /**
     * Defaults to normal
     */
    size?: 'small' | 'normal' | 'large';

    'data-test-id'?: string;
}

interface IState {
    copied: boolean;
}

export class CopyableTextBox extends React.Component<IProps, IState> {
    private timeoutId?: number;

    constructor(props: IProps) {
        super(props);
        this.state = {
            copied: false,
        };
    }

    componentWillUnmount(): void {
        if (this.timeoutId) {
            window.clearTimeout(this.timeoutId);
        }
    }

    handleCopy = () => {
        navigator.clipboard.writeText(this.props.value).then(() => {
            this.setState({copied: true});

            if (this.timeoutId) {
                window.clearTimeout(this.timeoutId);
            }

            this.timeoutId = window.setTimeout(() => {
                this.setState({copied: false});
            }, 2000);
        });
    };

    render() {
        return (
            <div className="sd-display-flex-column" data-test-id={this.props['data-test-id']}>
                {this.props.label && <div className="sd-input__label">{this.props.label}</div>}
                <div className="sd-d-flex gap-0-5">
                    <div className="sd-copyable-text-box">
                        <span className="sd-copyable-text-box__text">{this.props.value}</span>
                    </div>
                    <Button
                        text={gettext('Copy')}
                        icon={this.state.copied ? 'ok' : 'copy'}
                        iconOnly={true}
                        onClick={this.handleCopy}
                        type="default"
                        style="hollow"
                        size={this.props.size ?? 'normal'}
                        data-test-id="copy-button"
                    />
                </div>
                {this.props.helperText && <div className="sd-input__hint">{this.props.helperText}</div>}
            </div>
        );
    }
}
