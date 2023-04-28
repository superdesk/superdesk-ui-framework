import * as React from 'react';
import classNames from 'classnames';
import {Avatar, IPropsAvatar} from './avatar';
import {AvatarWrapper} from './avatar-wrapper';
import {AvatarContentNumber} from './avatar-number';
import {AvatarPlaceholder, IPropsAvatarPlaceholder} from './avatar-placeholder';

export type IAvatarInGroup = Omit<IPropsAvatar, 'size'>;
export type IAvatarPlaceholderInGroup = Omit<IPropsAvatarPlaceholder, 'size'>;

export type IAvatarGroupItem = IAvatarInGroup | IAvatarPlaceholderInGroup;

type IGap = 'none' | 'small'| 'medium'| 'large';

export interface IPropsAvatarGroup {
    size: IPropsAvatar['size'];
    items: Array<IAvatarGroupItem>;

    /**
     * maximum number of avatars to shown inline; defaults to 4
     * if exceeded, "+1"/"+2"/"+n" button will be shown
     */
    max?: number | 'show-all';
}

function isAvatar(item: IAvatarInGroup | IAvatarPlaceholderInGroup): item is IAvatarInGroup {
    return (item as any)['kind'] == null;
}

export class AvatarGroup extends React.PureComponent<IPropsAvatarGroup> {
    render() {
        const {size, items} = this.props;
        const someIconsHaveExtraElements = items.filter(isAvatar).some(
            ({icon, administratorIndicator}) => icon != null || administratorIndicator != null,
        );
        const gap: IGap = someIconsHaveExtraElements ? 'medium' : 'none';

        const max: number = (() => {
            if (this.props.max === 'show-all') {
                return this.props.items.length;
            } else if (this.props.max == null) {
                return 4;
            } else {
                return this.props.max;
            }
        })();
        const itemsOverLimit = items.length - max;

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
                    items.slice(0, max).map((item, index) => {
                        if (isAvatar(item)) {
                            return (
                                <Avatar {...item} key={index} size={size} />
                            )
                        } else {
                            return (
                                <AvatarPlaceholder
                                    {...item}
                                    key={index}
                                    size={this.props.size}
                                />
                            );
                        }
                    })
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
