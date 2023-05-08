import * as React from 'react';
import {IPropsBase} from './interfaces';

interface IPropsTextAvatar extends IPropsBase {
    text: string; // limited to 3 characters
}

export class AvatarContentText extends React.PureComponent<IPropsTextAvatar> {
    render() {
        return (
            <span
                className="sd-avatar-content sd-avatar-content--text"
                title={this.props.tooltipText}
            >
                <span>{this.props.text.slice(0, 3)}</span>
            </span>
        );
    }
}
