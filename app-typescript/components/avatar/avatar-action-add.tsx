import * as React from 'react';
import {IPropsBase} from './interfaces';

interface IProps extends IPropsBase {
    onClick?(): void;
}

export class AvatarContentAdd extends React.PureComponent<IProps> {
    render() {
        if (this.props.onClick == null) {
            return (
                <span
                    className="sd-avatar-content sd-avatar-content--add-item"
                    title={this.props.tooltipText}
                />
            );
        } else {
            return (
                <button
                    className="sd-avatar-content sd-avatar-content--add-item sd-avatar-content--add-item--clickable"
                    title={this.props.tooltipText}
                    onClick={() => this.props.onClick?.()}
                />
            );
        }
    }
}
