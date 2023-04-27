import * as React from 'react';
import classNames from 'classnames';
import {Avatar, IPropsAvatar} from './avatar';
import {AvatarWrapper} from './avatar-wrapper';
import {AvatarContentNumber} from './avatar-number';

export type IAvatarGroupItem = Omit<IPropsAvatar, 'size'>;

type IGap = 'none' | 'small'| 'medium'| 'large';

export interface IPropsAvatarGroup {
    size: IPropsAvatar['size'];
    avatars: Array<IAvatarGroupItem>;

    /**
     * maximum number of avatars to shown inline
     * if exceeded, "+1"/"+2"/"+n" button will be shown
     */
    max?: number;
}

export class AvatarGroupV2 extends React.PureComponent<IPropsAvatarGroup> {
    render() {
        const {avatars, size} = this.props;
        const someIconsHaveExtraElements = avatars.some(
            ({icon, administratorIndicator}) => icon != null || administratorIndicator != null,
        );
        const gap: IGap = someIconsHaveExtraElements ? 'medium' : 'none';

        const max = this.props.max ?? this.props.avatars.length;
        const itemsOverLimit = avatars.length - max;

        return (
            <div
                className={classNames(
                    'sd-avatar-group',
                    'sd-avatar-group--stacked',
                    `sd-avatar-group--stacked--gap-${gap}`,
                )}
                role='group'
            >
                {
                    avatars.slice(0, max).map((avatar, index) => (
                        <Avatar {...avatar} size={size} key={index} />
                    ))
                }

                {
                    itemsOverLimit > 0 && (
                        <AvatarWrapper size={size} isEmpty={false}>
                            <AvatarContentNumber number={`${itemsOverLimit}`} />
                        </AvatarWrapper>
                    )
                }
            </div>
        );
    }
}
