import * as React from 'react';
import { Icon } from './Icon';
import { Tooltip } from './Tooltip';
import classNames from 'classnames';

interface IProps {
    id?: string; // used for tooltip
    icon: string;
    ariaValue: string;
    toolTipFlow?: 'top' | 'left' | 'right' | 'down';
    toolTipAppend?: boolean;
    size?: 'default' | 'small' | 'x-large';
    style?: 'default' | 'outline' | 'outlineWhite';
    disabled?: boolean;
    rotate?: '90' | '180';
    onClick(event: React.MouseEvent): void;
}

export class IconButton extends React.PureComponent<IProps> {
    static defaultProps = {
        toolTipAppend: true,
    };
    render() {
        let classes = classNames('icn-btn', {
            [`icn-btn--${this.props.size}`]: this.props.size || this.props.size !== undefined,
            [`icn-btn--${this.props.style}`]: this.props.style || this.props.style !== undefined,
            'icn-btn--disabled': this.props.disabled,
        });

        let iconClasses = classNames({
            [`icon--rotate-${this.props.rotate}`]: this.props.rotate,
        });

        return (
            <Tooltip
                text={this.props.ariaValue}
                flow={this.props.toolTipFlow}
                appendToBody={this.props.toolTipAppend}
                disabled={this.props.disabled}
            >
                <button
                    id={this.props.id}
                    tabIndex={0}
                    onClick={this.props.onClick}
                    className={classes}
                    disabled={this.props.disabled}
                    aria-label={this.props.ariaValue}
                >
                    <Icon
                        name={this.props.icon}
                        ariaHidden={true}
                        className={iconClasses}
                    />
                </button>
            </Tooltip>
        );
    }
}
