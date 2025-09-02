import * as React from 'react';
interface IPropsAvatarWrapper {
    size?: 'x-small' | 'small' | 'medium' | 'large' | 'x-large' | 'xx-large';
    statusIndicator?: {
        status: 'online' | 'offline';
        tooltipText?: string;
    };
    administratorIndicator?: {
        enabled: boolean;
        tooltipText?: string;
    };
    children: React.ReactNode;
    'data-test-id'?: string;
    noAvatarPlaceholderColor?: 'subtle' | 'strong';
    icon?: {
        name: string;
        color?: string;
    };
    statusDot?: {
        color?: string;
    };
}
/**
 * @deprecated use AvatarV2
 */
export declare class AvatarWrapper extends React.PureComponent<IPropsAvatarWrapper> {
    render(): JSX.Element;
}
export {};
