import * as React from 'react';
import classNames from 'classnames';
import nextId from "react-id-generator";
import { Tooltip } from './Tooltip';

interface IProps {
    label: {
        text: string,
        side?: 'left' | 'right', // defaults to 'right'
        hidden?: boolean, 
    };
    value: boolean;
    disabled?: boolean;
    toolTipFlow?: 'top' | 'left' | 'right' | 'down';
    toolTipAppend?: boolean;
    onChange(nextValue: boolean): void;
}

export class Switch extends React.PureComponent<IProps> {
    constructor(props: IProps) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    htmlId = nextId('switch-');

    onClick() {
        if (this.props.disabled) {
            return;
        }

        this.props.onChange(!this.props.value);
    }

    render() {
        let classes = classNames('sd-switch', {
            'checked': this.props.value,
            'disabled': this.props.disabled,
        });

        if (this.props.label.hidden) {
            return (
                <Tooltip text={this.props.label.text} flow={this.props.toolTipFlow} appendToBody={this.props.toolTipAppend}>
                    <span className="sd-switch__wrapper" tabIndex={-1}>
                        { this.props.label && this.props.label.side === 'left' ?
                            <label htmlFor={this.htmlId}>{this.props.label.text}</label> : null }
                        <span id={this.htmlId} role="checkbox" className={classes} aria-checked={this.props.value}
                            aria-disabled={this.props.disabled} onClick={this.onClick} tabIndex={0}>
                            <span className="inner" />
                        </span>
                        <label className='a11y-only' htmlFor={this.htmlId}>{this.props.label.text}</label>
                    </span>
                </Tooltip>
            );
        } else {
            return (
                <span className="sd-switch__wrapper" tabIndex={-1}>
                    { this.props.label && this.props.label.side === 'left' ?
                        <label htmlFor={this.htmlId}>{this.props.label.text}</label> : null }
                    <span id={this.htmlId} role="checkbox" className={classes} aria-checked={this.props.value}
                        aria-disabled={this.props.disabled} onClick={this.onClick} tabIndex={0}>
                        <span className="inner" />
                    </span>
                    { this.props.label && this.props.label.side !== 'left' ?
                        <label htmlFor={this.htmlId}>{this.props.label.text}</label> : null }
                </span>
            );
        }
    }
}
