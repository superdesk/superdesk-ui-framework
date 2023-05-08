import * as React from 'react';
import {IPropsBase} from './interfaces';

interface IPropsNumberAvatar extends IPropsBase {
    number: string;
}

export class AvatarContentNumber extends React.PureComponent<IPropsNumberAvatar> {
    render() {
        return (
            <span className="sd-avatar-content sd-avatar-content--number">
                <span>+{this.props.number}</span>
            </span>
        );
    }
}
