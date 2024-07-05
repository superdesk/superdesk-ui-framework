import * as React from 'react';
import {AvatarContentImage} from './avatar-image';
import {AvatarWrapper} from './avatar-wrapper';
import {AvatarContentText} from './avatar-text';

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
    noAvatarPlaceholderColor?: 'subtle' | 'strong';  // defaults to strong; only applies to placeholder image

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

        const tooltipCombined = [displayName, this.props.tooltip]
            .filter((str) => (str ?? '').trim().length > 0).join('\n');

        return (
            <AvatarWrapper
                size={size}
                statusIndicator={statusIndicator ? {status: statusIndicator, tooltipText: ''} : undefined}
                administratorIndicator={administratorIndicator ? {enabled: true, tooltipText: ''} : undefined}
                icon={icon}
                statusDot={statusDot}
                noAvatarPlaceholderColor={noAvatarPlaceholderColor}
            >
                {(() => {
                    if (customContent != null) {
                        return customContent;
                    } else if (imageUrl != null || initials == null) {
                        return (
                            <AvatarContentImage imageUrl={imageUrl} tooltipText={tooltipCombined} />
                        );
                    } else {
                        return (
                            <AvatarContentText text={initials} tooltipText={tooltipCombined} />
                        );
                    }
                })()}
            </AvatarWrapper>
        );
    }
}
