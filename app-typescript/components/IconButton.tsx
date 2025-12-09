import * as React from 'react';
import {Icon} from './Icon';
import {Tooltip} from './Tooltip';
import classNames from 'classnames';

interface IProps {
    id?: string; // used for tooltip
    icon: string;
    ariaValue: string;
    toolTipFlow?: 'top' | 'left' | 'right' | 'down';
    size?: 'default' | 'small' | 'x-large';
    style?: 'default' | 'outline' | 'outlineWhite';
    disabled?: boolean;
    onClick(event: React.MouseEvent): void;
}

export const IconButton: React.FC<IProps> = (props) => {
    const classes = classNames('icn-btn', {
        [`icn-btn--${props.size}`]: props.size || props.size !== undefined,
        [`icn-btn--${props.style}`]: props.style || props.style !== undefined,
        'icn-btn--disabled': props.disabled,
    });

    return (
        <Tooltip text={props.disabled ? null : props.ariaValue} flow={props.toolTipFlow}>
            <button
                id={props.id}
                tabIndex={0}
                onClick={props.onClick}
                className={classes}
                disabled={props.disabled}
                aria-label={props.ariaValue}
            >
                <Icon name={props.icon} ariaHidden={true} />
            </button>
        </Tooltip>
    );
};
