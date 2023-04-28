import * as React from 'react';
import {AvatarWrapper} from './avatar-wrapper';
import {AvatarContentAdd} from './avatar-action-add';

export interface IPropsAvatarPlaceholder {
    kind: 'plus-button'; // kind is used to it's easy to add other types of placeholders without breaking existing usages
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
        const {size, tooltip, icon} = this.props;

        return (
            <AvatarWrapper
                size={size}
                isEmpty={false}
                icon={icon}
            >
                <AvatarContentAdd tooltipText={tooltip ?? undefined} onClick={this.props.onClick} />
            </AvatarWrapper>
        );
    }
}
