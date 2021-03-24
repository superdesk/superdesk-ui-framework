import * as React from 'react';
import {Icon} from './Icon';
import classNames from 'classnames';
interface IProps {
    id?: string; // used for tooltip
    icon?: string;
    ariaValue: string;
    size?: 'small';
    onClick(event: React.MouseEvent): void;
}

export class IconButton extends React.PureComponent<IProps> {
    render() {
        let classes = classNames('icn-btn', {
            'icn-btn--small': this.props.size === 'small',
        });
        return (
            <button
                id={this.props.id}
                tabIndex={0}
                onClick={this.props.onClick}
                className={classes}
                aria-label={this.props.ariaValue}>
                <Icon name={this.props.icon} ariaHidden={true}/>
            </button>
        );
    }
}
