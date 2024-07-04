import * as React from 'react';
import classNames from 'classnames';
import {Avatar, IPropsAvatar} from './avatar';
import {AvatarWrapper} from './avatar-wrapper';
import {AvatarContentNumber} from './avatar-number';
import {AvatarPlaceholder, IPropsAvatarPlaceholder} from './avatar-placeholder';
import {Spacer} from '@superdesk/common';
import {WithPopover} from '../WithPopover';

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

    zIndex?: number;

    // unless a custom onClick handler is passed
    // a popover would get shown when maximum number
    // of avatars is exceeded.
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

        const PlusButtonWrapper: React.ComponentType<{onToggle(event: HTMLElement): void}> = ({children, onToggle}) => {
            if (this.props.onClick == null) {
                return (
                    <button
                        style={{padding: 0}}
                        onClick={(event) => {
                            if (this.props.onClick == null) {
                                onToggle(event.target as HTMLElement);
                            }
                        }}
                    >
                       {children}
                    </button>
                );
            } else {
                return <>{children}</>;
            }
        };

        const someHaveDisplayName = this.props.items.some((item) => isAvatar(item) && item.displayName.length > 0);

        return (
            <WithPopover
                zIndex={this.props.zIndex ?? 101}
                placement='bottom-end'
                component={() => (
                    <div className="avatar-popup">
                        {this.props.items.map((item, index) => {
                            return (
                                someHaveDisplayName
                                    ? <Spacer h alignItems='center' gap='16' noGrow key={index}>
                                        {
                                            isAvatar(item)
                                                && item.displayName
                                        }

                                        {
                                            isAvatar(item)
                                                ? (
                                                    <Avatar
                                                        size='small'
                                                        imageUrl={item.imageUrl}
                                                        initials={item.initials}
                                                        displayName={item.displayName}
                                                        icon={item.icon}
                                                        coverageStatus={item.coverageStatus}
                                                    />
                                                )
                                                : (
                                                    <AvatarPlaceholder
                                                        kind='plus-button'
                                                        size='small'
                                                        icon={item.icon}
                                                        onClick={item.onClick}
                                                    />
                                                )
                                        }
                                    </Spacer>
                                    : <div>
                                        <AvatarPlaceholder
                                            kind='plus-button'
                                            size='small'
                                            icon={item.icon}
                                            onClick={isAvatar(item) ? undefined : item.onClick}
                                            key={index}
                                        />
                                    </div>
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
                        onClick={this.props.onClick}
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
                                <PlusButtonWrapper onToggle={onToggle}>
                                    <AvatarWrapper size={size} emptyLight={false}>
                                        <AvatarContentNumber number={`${itemsOverLimit}`} />
                                    </AvatarWrapper>
                                </PlusButtonWrapper>
                            )
                        }
                    </div>
                )}
            </WithPopover>
        );
    }
}
