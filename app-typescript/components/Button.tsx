import * as React from 'react';
import classNames from 'classnames';
import {Icon} from './Icon';
import {Spinner} from './Spinner';
import {WithTooltip} from './Tooltip';

interface IPropsButton {
    text: string;
    onClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;

    expand?: boolean;
    style?: 'filled' | 'hollow' | 'text-only'; // defaults to 'filled'
    shape?: 'square' | 'round'; // defaults to 'square'
    isLoading?: boolean;
    loadingLabel?: string;
    tooltip?: string;
    id?: string;
    theme?: 'light' | 'dark'; // defaults to 'light'
    type?: 'primary' | 'secondary' | 'tertiary' | 'default' | 'success' | 'warning' | 'alert' | 'highlight' | 'sd-green';
    size?: 'small' | 'normal' | 'large'; // defaults to 'normal'
    textAlign?: 'start' | 'center' | 'end'; // defaults to 'center'
    children?: never;
    icon?: string;
    disabled?: boolean;
    iconOnly?: boolean;
    noMargin?: boolean;
    'data-test-id'?: string;
}

export class Button extends React.PureComponent<IPropsButton> {
    render() {
        let classes = classNames('btn', {
            'btn--expanded': this.props.expand,
            'btn--hollow': this.props.type === 'tertiary' || this.props.style === 'hollow',
            [`btn--${this.props.size}`]: this.props.size !== 'normal' && this.props.size !== undefined,
            [`btn--${this.props.type}`]: this.props.type !== 'secondary' && this.props.type !== undefined,
            [`btn--${this.props.type}`]: this.props.type !== 'default' && this.props.type !== undefined,
            [`btn--${this.props.style}`]: this.props.style !== 'filled' && this.props.style !== undefined,
            
            'btn--disabled': this.props.disabled,
            'btn--icon-only': this.props.iconOnly,
            'btn--ui-dark': this.props.theme === 'dark',
            'btn--icon-only-circle': this.props.shape === 'round' && this.props.iconOnly,
            'sd-flex-justify-start': this.props.textAlign === 'start',
            'sd-flex-justify-end': this.props.textAlign === 'end',
        });

        return (
            <TooltipWrapper tooltipText={this.props.tooltip}>
                {({attributes}) => (
                    <button
                        {...attributes}
                        id={this.props.id}
                        className={classes}
                        tabIndex={0}
                        disabled={this.props.disabled || this.props.isLoading}
                        data-loading={this.props.isLoading}
                        onClick={this.props.disabled ? () => false : (event) => this.props.onClick(event)}
                        aria-label={this.props.iconOnly ? this.props.text : ''}
                        data-test-id={this.props['data-test-id']}
                        style={this.props.noMargin ? {margin: 0} : undefined}
                    >
                        {this.props.isLoading ? <Spinner size="mini" /> : null}
                        {this.props.icon && !this.props.isLoading ? <Icon ariaHidden name={this.props.icon} /> : null}
                        {this.props.iconOnly ? null : this.props.text}
                    </button>
                )}
            </TooltipWrapper>
        );
    }
}

interface ITooltipWrapperProps {
    tooltipText: string | null | undefined;
    children: React.ComponentProps<typeof WithTooltip>['children'];
}

class TooltipWrapper extends React.PureComponent<ITooltipWrapperProps> {
    render() {
        const {tooltipText, children} = this.props;

        return (tooltipText ?? '').length > 0 ? (
            <WithTooltip text={tooltipText}>{({attributes}) => children({attributes})}</WithTooltip>
        ) : (
            <>{children({attributes: {}})}</>
        );
    }
}
