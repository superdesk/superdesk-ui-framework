import * as React from 'react';
import classNames from 'classnames';
import {AvatarContentImage} from './avatar-image';
import {AvatarContentText} from './avatar-text';
import {Tooltip} from '../Tooltip';
import {Icon} from '../Icon';

export interface IPropsAvatar {
    imageUrl: string | null; // nullable, but mandatory to communicate importance
    displayName: string;

    /** 3 letters max */
    initials: string | null; // nullable, but mandatory to communicate importance

    size: 'x-small' | 'small' | 'medium' | 'large' | 'x-large' | 'xx-large';

    statusIndicator?: 'online' | 'offline';
    administratorIndicator?: boolean;
    icon?: {
        name: string;
        color?: string;
    };
    statusDot?: {
        color?: string;
    };

    /**
     * Color scheme for placeholder when no image is available.
     * Defaults to 'strong'.
     */
    noAvatarPlaceholderColor?: 'subtle' | 'strong';

    /**
     * displayName is shown as tooltip by default
     * use this if you need to add additional information (it will be added on a new line)
     */
    tooltip?: string;

    /**
     * JSX resulting from rendering of one of the following components:
     * AvatarContentText
     * AvatarContentImage
     */
    customContent?: JSX.Element;

    /**
     * Controls how the name is displayed:
     * - 'tooltip': Shows name in a tooltip (default)
     * - 'none': No name is displayed at all
     * - 'inline': Shows name inline next to avatar (like Material Design Chip)
     * Defaults to 'tooltip' if not provided
     */
    nameDisplay?: 'tooltip' | 'inline' | 'none';

    /**
     * Controls the position of the tooltip.
     * Defaults to 'top' if not provided
     */
    tooltipFlow?: 'top' | 'left' | 'right' | 'down';

    /**
     * Controls the position of the text relative to the avatar in inline mode.
     * Only applies when nameDisplay is 'inline'.
     * - 'start': Text appears before the avatar
     * - 'end': Text appears after the avatar (default)
     * Defaults to 'end' if not provided
     */
    textPosition?: 'start' | 'end';
}

interface ITooltipWrapperProps {
    tooltipText: string | null | undefined;
    tooltipFlow?: 'top' | 'left' | 'right' | 'down';
    children: (options: {attributes: React.HTMLAttributes<HTMLElement>}) => React.ReactNode;
}

function flowToPlacement(
    flow: 'top' | 'left' | 'right' | 'down' | undefined,
): 'top' | 'left' | 'right' | 'bottom' | undefined {
    if (flow === 'down') {
        return 'bottom';
    }
    return flow;
}

const TooltipWrapper = React.memo<ITooltipWrapperProps>(({tooltipText, tooltipFlow, children}) => {
    const hasTooltip = tooltipText != null && (tooltipText ?? '').length > 0;

    return hasTooltip ? (
        <Tooltip content={tooltipText} placement={flowToPlacement(tooltipFlow)}>
            {children}
        </Tooltip>
    ) : (
        <>{children({attributes: {}})}</>
    );
});

export const Avatar = React.memo<IPropsAvatar>((props) => {
    const {
        imageUrl,
        initials,
        size,
        statusIndicator,
        administratorIndicator,
        icon,
        noAvatarPlaceholderColor,
        displayName,
        customContent,
        statusDot,
        nameDisplay = 'tooltip',
        tooltip,
        tooltipFlow,
        textPosition = 'end',
    } = props;

    // For tooltip mode, use tooltip prop first, fallback to displayName
    const tooltipText = tooltip ?? displayName;

    const avatarContent = React.useMemo(() => {
        if (customContent != null) {
            return customContent;
        } else if (imageUrl != null || initials == null) {
            return <AvatarContentImage imageUrl={imageUrl} tooltipText={''} />;
        } else {
            return <AvatarContentText text={initials} tooltipText={''} />;
        }
    }, [customContent, imageUrl, initials]);

    const avatarClassName = React.useMemo(
        () =>
            classNames('sd-avatar', {
                'sd-avatar--x-small': size === 'x-small',
                'sd-avatar--small': size === 'small',
                'sd-avatar--medium': size === 'medium',
                'sd-avatar--large': size === 'large',
                'sd-avatar--x-large': size === 'x-large',
                'sd-avatar--xx-large': size === 'xx-large',
                'sd-avatar--indicator-status--online': statusIndicator === 'online',
                'sd-avatar--indicator-status--offline': statusIndicator === 'offline',
                'sd-avatar--empty-light': noAvatarPlaceholderColor === 'subtle',
            }),
        [size, statusIndicator, noAvatarPlaceholderColor],
    );

    const avatarElement = (
        <span className={avatarClassName}>
            {avatarContent}

            {administratorIndicator === true && <i className="icon-settings sd-avatar--indicator-admin" />}

            {icon != null && (
                <span className="sd-avatar__icon">
                    <Icon name={icon.name} color={icon.color} />
                </span>
            )}

            {statusDot != null && (
                <span style={{backgroundColor: statusDot.color}} className="sd-avatar__coverage-state" />
            )}
        </span>
    );

    if (nameDisplay === 'inline') {
        return (
            <span
                className={classNames('sd-avatar--inline', {
                    'sd-avatar--inline--text-start': textPosition === 'start',
                })}
            >
                {avatarElement}
                <span className="sd-avatar--inline__text">{displayName}</span>
            </span>
        );
    } else if (nameDisplay === 'tooltip') {
        return (
            <TooltipWrapper tooltipText={tooltipText} tooltipFlow={tooltipFlow}>
                {({attributes}) => (
                    <span className="d-contents" {...attributes}>
                        {avatarElement}
                    </span>
                )}
            </TooltipWrapper>
        );
    } else {
        return avatarElement;
    }
});
