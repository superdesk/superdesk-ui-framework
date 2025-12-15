import * as React from 'react';
import classNames from 'classnames';
import {AvatarContentImage} from './avatar-image';
import {AvatarContentText} from './avatar-text';
import {Icon} from '../Icon';
import {TooltipV2} from '../TooltipV2';
import {AvatarWithInlineTextWrapper} from './avatar-with-inline-text-wrapper';
import {assertNever} from '../../helpers';

export type IAvatarWithTooltip = {
    kind: 'tooltip';

    /** Defaults to `top` */
    placement?: 'top' | 'left' | 'right' | 'bottom';

    /** `displayName` used if not provided */
    content?: string;
};

export type IAvatarWithInlineText = {
    kind: 'inline';

    /** Defaults to `end` */
    placement?: 'start' | 'end';
};

export interface IPropsAvatar {
    imageUrl: string | null;

    /** 3 letters max */
    initials: string | null;

    displayName: string;
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
     * Defaults to `strong`.
     * Color scheme for placeholder when no image is available.
     */
    noAvatarPlaceholderColor?: 'subtle' | 'strong';

    /**
     * JSX resulting from rendering of one of the following components:
     * AvatarContentText
     * AvatarContentImage
     */
    customContent?: JSX.Element;

    /**
     * Defaults to `tooltip`.
     *
     * Controls how `tooltip` is displayed:
     * - `tooltip`: Shows name in a tooltip
     * - `none`: No name is displayed at all
     * - `inline`: Shows name inline next to avatar (like Material Design Chip)
     */
    nameDisplay?: IAvatarWithInlineText | IAvatarWithTooltip | {kind: 'none'};
}

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
        nameDisplay = {kind: 'tooltip'},
    } = props;

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

    const kind = nameDisplay.kind;

    if (kind === 'inline') {
        return (
            <AvatarWithInlineTextWrapper
                avatarElement={avatarElement}
                displayName={displayName}
                placement={nameDisplay.placement}
            />
        );
    } else if (kind === 'tooltip') {
        return (
            <TooltipV2 content={nameDisplay.content ?? displayName} placement={nameDisplay.placement}>
                {({attributes}) => (
                    <span className="d-contents" {...attributes}>
                        {avatarElement}
                    </span>
                )}
            </TooltipV2>
        );
    } else if (kind === 'none') {
        return avatarElement;
    } else {
        assertNever(kind);
    }
});
