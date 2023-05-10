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
}

export class Avatar extends React.PureComponent<IPropsAvatar> {
    render() {
        const {imageUrl, initials, size, statusIndicator, administratorIndicator, icon, displayName} = this.props;

        return (
            <AvatarWrapper
                size={size}
                statusIndicator={statusIndicator ? {status: statusIndicator, tooltipText: ''} : undefined}
                administratorIndicator={administratorIndicator ? {enabled: true, tooltipText: ''} : undefined}
                icon={icon}
                isEmpty={false}
            >
                {
                    imageUrl != null || initials == null
                        ? (
                            <AvatarContentImage imageUrl={imageUrl} tooltipText={displayName ?? undefined} />
                        )
                        : (
                            <AvatarContentText text={initials ?? ''} tooltipText={displayName ?? undefined} />
                        )
                }

            </AvatarWrapper>
        );
    }
}
