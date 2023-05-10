import * as React from 'react';
import classNames from 'classnames';
import {Avatar, IPropsAvatar} from './avatar';
import {AvatarWrapper} from './avatar-wrapper';
import {AvatarContentNumber} from './avatar-number';
import {AvatarPlaceholder, IPropsAvatarPlaceholder} from './avatar-placeholder';
import {WithPopover} from '../Popover';
import { Spacer } from '../Spacer';

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
    onClick?(): void;
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
            <WithPopover
                placement='bottom-end'
                component={() => (
                    <div className="avatar-popup">
                        {this.props.items.map((item) => {
                            return (
                                <Spacer h alignItems='center' noGrow gap='16'>
                                    <span>{isAvatar(item) ? item.displayName : null}</span>

                                    {
                                        isAvatar(item)
                                            ? (
                                                <Avatar
                                                    size='small'
                                                    imageUrl={item.imageUrl}
                                                    initials={item.initials}
                                                    displayName={item.displayName}
                                                    icon={item.icon}
                                                />
                                            )
                                            : <AvatarPlaceholder
                                                kind='plus-button'
                                                size='small'
                                                icon={item.icon}
                                            />
                                    }
                                </Spacer>
                            );
                        })}
                    </div>
                )}
            >
                {(onToggle) => (
                    <div
                        className={classNames(
                            'sd-avatar-group',
                            'sd-avatar-group--stacked',
                            `sd-avatar-group--stacked--gap-${gap}`,
                        )}
                        role='group'
                        onClick={(event) => {
                            if (this.props.onClick != null) {
                                this.props.onClick();
                            } else {
                                onToggle(event.target as HTMLElement);
                            }
                        }}
                    >
                        {
                            items.slice(0, max).map((item, index) => {
                                if (isAvatar(item)) {
                                    return (
                                        <Avatar {...item} key={index} size={size} />
                                    );
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
                )}
            </WithPopover>
        );
    }
}
