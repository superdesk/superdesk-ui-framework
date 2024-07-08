import * as React from 'react';
import {AvatarWrapper} from './avatar-wrapper';
import {AvatarContentAdd} from './avatar-action-add';
import {AvatarContentImage} from './avatar-image';

export interface IPropsAvatarPlaceholder {
    // kind is used to it's easy to add
    // other types of placeholders without breaking existing usages
    kind: 'plus-button' | 'user-icon';
    tooltip?: string | null; // nullable, but mandatory to communicate importance

    size: 'x-small' | 'small' | 'medium' | 'large' | 'x-large' | 'xx-large';

    icon?: {
        name: string;
        color?: string;
    };

    onClick?(): void;
}

export class AvatarPlaceholder extends React.PureComponent<IPropsAvatarPlaceholder> {
    render() {
        const {size, tooltip, icon, kind, onClick} = this.props;

        return (
            <AvatarWrapper
                size={size}
                icon={icon}
            >
                {(() => {
                    if (kind === 'plus-button') {
                        return (
                            <AvatarContentAdd
                                tooltipText={tooltip ?? undefined}
                                onClick={onClick}
                            />
                        );
                    } else if (kind === 'user-icon') {
                        return (
                            <AvatarContentImage
                                imageUrl={null}
                                tooltipText={tooltip ?? undefined}
                                onClick={onClick}
                            />
                        );
                    } else {
                        return null;
                    }
                })()}
            </AvatarWrapper>
        );
    }
}
