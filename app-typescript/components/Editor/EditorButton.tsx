import * as React from 'react';
import { Icon } from '../Icon';
import { Tooltip } from '../Tooltip';
import classNames from 'classnames';

interface IProps {
    id?: string; // used for tooltip
    icon: string;
    ariaValue: string;
    toolTipFlow?: 'top' | 'left' | 'right' | 'down';
    toolTipAppend?: boolean;
    size?: 'small';
    onClick(event: React.MouseEvent): void;
}

export class EditorButton extends React.PureComponent<IProps> {
    render() {
        let classes = classNames('icn-btn', {
            'icn-btn--small': this.props.size === 'small',
        });
        return (
            <Tooltip text={this.props.ariaValue} flow={this.props.toolTipFlow}>
                <button
                    id={this.props.id}
                    tabIndex={0}
                    onClick={this.props.onClick}
                    className={classes}
                    aria-label={this.props.ariaValue}>
                    <Icon name={this.props.icon} ariaHidden={true} />
                </button>
            </Tooltip>
        );
    }
}
