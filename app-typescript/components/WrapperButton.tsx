import * as React from 'react';
import classNames from 'classnames';
import {WithTooltip} from './Tooltip';

interface IPropsWrapperButton {
    text?: string;
    onClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
    tooltip?: string;
    id?: string;
    children?: React.ReactNode;
    disabled?: boolean;
    ariaLabel?: string;
    radius?: 'x-small' | 'small' | 'medium' | 'full';
    className?: string;
    'data-test-id'?: string;
}

export class WrapperButton extends React.PureComponent<IPropsWrapperButton> {
    render() {
        let classes = classNames(
            'wrapper-button',
            {
                'wrapper-button--disabled': this.props.disabled,
                'radius-xs': this.props.radius === 'x-small',
                'radius-sm': this.props.radius === 'small',
                'radius-md': this.props.radius === 'medium',
                'radius-full': this.props.radius === 'full',
            },
            this.props.className,
        );

        return (
            <TooltipWrapper tooltipText={this.props.tooltip}>
                {({attributes}) => (
                    <button
                        {...attributes}
                        id={this.props.id}
                        className={classes}
                        tabIndex={0}
                        disabled={this.props.disabled}
                        onClick={this.props.disabled ? () => false : (event) => this.props.onClick(event)}
                        aria-label={this.props.ariaLabel}
                        data-test-id={this.props['data-test-id']}
                    >
                        {this.props.children || this.props.text}
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
