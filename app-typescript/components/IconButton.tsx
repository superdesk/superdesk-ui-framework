import * as React from 'react';
import {Icon} from './Icon';
interface IProps {
    id?: string;
    icon?: string;
    onClick(): void;
}

export class IconButton extends React.PureComponent<IProps> {
    render() {
        return (
            <a
                id={this.props.id}
                onClick={this.props.onClick}
                className="icn-btn">
                <Icon name={this.props.icon}/>
            </a>
        );
    }
}
