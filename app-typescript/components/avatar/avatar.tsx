import * as React from 'react';
import classNames from 'classnames';
import {AvatarContentImage} from './avatar-image';
import {AvatarWrapper} from './avatar-wrapper';
import {AvatarContentText} from './avatar-text';
import {Tooltip} from '../Tooltip';

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
    noAvatarPlaceholderColor?: 'subtle' | 'strong'; // defaults to strong; only applies to placeholder image

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
     * - 'title': Shows name in native HTML title attribute
     * - 'inline': Shows name inline next to avatar (like Material Design Chip)
     * Defaults to 'tooltip' if not provided
     */
    nameDisplay?: 'tooltip' | 'title' | 'inline';

    /**
     * Controls the position of the tooltip.
     * Only applies when nameDisplay is 'tooltip'.
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

class TooltipWrapper extends React.PureComponent<ITooltipWrapperProps> {
    render() {
        const {tooltipText, tooltipFlow, children} = this.props;

        return tooltipText != null && (tooltipText ?? '').length > 0 ? (
            <Tooltip content={tooltipText} placement={flowToPlacement(tooltipFlow)}>
                {children}
            </Tooltip>
        ) : (
            <>{children({attributes: {}})}</>
        );
    }
}

export class Avatar extends React.PureComponent<IPropsAvatar> {
    render() {
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
        } = this.props;

        // Determine the name display mode (defaults to 'tooltip')
        const nameDisplay = this.props.nameDisplay ?? 'tooltip';

        // For tooltip mode, use tooltip prop first, fallback to displayName
        const tooltipText = this.props.tooltip ?? displayName;

        // For title mode (legacy behavior), combine displayName and tooltip
        const titleText = [displayName, this.props.tooltip].filter((str) => (str ?? '').trim().length > 0).join('\n');

        const avatarContent = (() => {
            if (customContent != null) {
                return customContent;
            } else if (imageUrl != null || initials == null) {
                return (
                    <AvatarContentImage imageUrl={imageUrl} tooltipText={nameDisplay === 'title' ? titleText : ''} />
                );
            } else {
                return <AvatarContentText text={initials} tooltipText={nameDisplay === 'title' ? titleText : ''} />;
            }
        })();

        const avatarElement = (
            <AvatarWrapper
                size={size}
                statusIndicator={statusIndicator ? {status: statusIndicator, tooltipText: ''} : undefined}
                administratorIndicator={administratorIndicator ? {enabled: true, tooltipText: ''} : undefined}
                icon={icon}
                statusDot={statusDot}
                noAvatarPlaceholderColor={noAvatarPlaceholderColor}
            >
                {avatarContent}
            </AvatarWrapper>
        );

        // Render based on nameDisplay mode
        if (nameDisplay === 'inline') {
            const textPosition = this.props.textPosition ?? 'end';

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
                <TooltipWrapper tooltipText={tooltipText} tooltipFlow={this.props.tooltipFlow}>
                    {({attributes}) => (
                        <span className="d-contents" {...attributes}>
                            {avatarElement}
                        </span>
                    )}
                </TooltipWrapper>
            );
        } else {
            // title mode - current behavior with title attribute
            return avatarElement;
        }
    }
}
