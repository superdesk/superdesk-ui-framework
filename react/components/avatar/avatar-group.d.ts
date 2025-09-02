import * as React from 'react';
import { IPropsAvatar } from './avatar';
import { IPropsAvatarPlaceholder } from './avatar-placeholder';
export type IAvatarInGroup = Omit<IPropsAvatar, 'size'>;
export type IAvatarPlaceholderInGroup = Omit<IPropsAvatarPlaceholder, 'size'>;
export type IAvatarGroupItem = IAvatarInGroup | IAvatarPlaceholderInGroup;
export interface IPropsAvatarGroup {
    size: IPropsAvatar['size'];
    items: Array<IAvatarGroupItem>;
    /**
     * maximum number of avatars to shown inline; defaults to 4
     * if exceeded, "+1"/"+2"/"+n" button will be shown
     */
    max?: number | 'show-all';
    onClick?(): void;
}
export declare class AvatarGroup extends React.PureComponent<IPropsAvatarGroup> {
    render(): JSX.Element;
}
