import * as React from 'react';
import {IPropsBase} from './interfaces';

export class AvatarContentAdd extends React.PureComponent<IPropsBase> {
    render() {
        return (
            <span
                className="sd-avatar-content sd-avatar-content--add-item"
                title={this.props.tooltipText}
            />
        );
    }
}
