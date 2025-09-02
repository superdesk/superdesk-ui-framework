import * as React from 'react';
export interface IPropsAvatarPlaceholder {
    kind: 'plus-button' | 'user-icon';
    tooltip?: string | null;
    size: 'x-small' | 'small' | 'medium' | 'large' | 'x-large' | 'xx-large';
    icon?: {
        name: string;
        color?: string;
    };
    onClick?(): void;
}
export declare class AvatarPlaceholder extends React.PureComponent<IPropsAvatarPlaceholder> {
    render(): JSX.Element;
}
