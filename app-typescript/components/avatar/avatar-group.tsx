import * as React from 'react';
import {AvatarV2, IPropsAvatarV2} from './avatar-v2';

export interface IPropsAvatarGroup {
    size: IPropsAvatarV2['size'];
    avatars: Array<Omit<IPropsAvatarV2, 'size'>>;
}

export class AvatarGroup extends React.PureComponent<IPropsAvatarGroup> {
    render() {
        return (
            <div style={{display: 'flex', justifyContent: 'space-around', gap: 8}}>
                {
                    this.props.avatars.map((avatar, index) => (
                        <AvatarV2 {...avatar} size={this.props.size} key={index} />
                    ))
                }
            </div>
        );
    }
}
