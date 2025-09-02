import * as React from 'react';
export interface IPropsAvatar {
    imageUrl: string | null;
    displayName: string;
    /** 3 letters max */
    initials: string | null;
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
}
export declare class Avatar extends React.PureComponent<IPropsAvatar> {
    render(): JSX.Element;
}
