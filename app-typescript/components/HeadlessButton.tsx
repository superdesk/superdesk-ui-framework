import * as React from 'react';
import classNames from 'classnames';
import {Tooltip} from './Tooltip';

interface IPropsHeadlessButton {
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

export class HeadlessButton extends React.PureComponent<IPropsHeadlessButton> {
    render() {
        let classes = classNames(
            'headless-button',
            {
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
                        id={this.props.id}
                        className={classes}
                        tabIndex={0}
                        disabled={this.props.disabled}
                        onClick={this.props.onClick}
                        aria-label={this.props.ariaLabel}
                        data-test-id={this.props['data-test-id']}
                        {...attributes}
                    >
                        {this.props.children}
                    </button>
                )}
            </TooltipWrapper>
        );
    }
}

interface ITooltipWrapperProps {
    tooltipText: string | null | undefined;
    children: (options: {attributes: React.HTMLAttributes<HTMLElement>}) => React.ReactNode;
}

class TooltipWrapper extends React.PureComponent<ITooltipWrapperProps> {
    render() {
        const {tooltipText, children} = this.props;

        return tooltipText != null && (tooltipText ?? '').length > 0 ? (
            <Tooltip content={tooltipText}>{({attributes}) => children({attributes})}</Tooltip>
        ) : (
            <>{children({attributes: {}})}</>
        );
    }
}
