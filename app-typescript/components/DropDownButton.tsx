import * as React from 'react';
import classNames from 'classnames';
import { Icon } from './Icon';

interface IProps {
    disabled?: boolean;
    required?: boolean;
    expand?: boolean;
    style?: 'blanck'| 'bordered'; 
    tabindex?: number;
    size?: 'small'| 'medium' | 'large';
    innerLabel?: string;
    ariaLabel?: string;
    value: string;
    'aria-expanded'?: boolean;
    'aria-haspopup'?: boolean;
    onClick(): void;
}

export class DropDownButton extends React.Component<IProps> {
    render() {
        let classes = classNames('sd-dropdown-button', {
            'sd-dropdown-button--expanded': this.props.expand,
            [`sd-dropdown-button--${this.props.size}`]: this.props.size !== 'medium' && this.props.size !== undefined,
            [`sd-dropdown-button--${this.props.style}`]: this.props.style !== 'bordered' && this.props.style !== undefined,
            'sd-dropdown-button--disabled': this.props.disabled,
        });
        return (
            <button
                onClick={this.props.onClick} type="button"
                aria-label={this.props.innerLabel ?? this.props.ariaLabel}
                className={classes}
                aria-haspopup={this.props['aria-haspopup']}
                aria-expanded={this.props['aria-expanded']}
                tabIndex={this.props.tabindex}
            >
                <span className="sd-dropdown-button__text-block">
                    {this.props.innerLabel == null ? null : 
                        <label className="sd-dropdown-button__text-label">{this.props.innerLabel}:</label>
                    }
                    <span className="sd-dropdown-button__text-value">{this.props.value}</span>
                </span>
                <Icon name="chevron-down-thin" />
            </button>
        );
    }
}
