import * as React from 'react';
import classNames from 'classnames';
import nextId from "react-id-generator";
import { Tooltip } from './Tooltip';

interface ILabel {
    content: string | ((id: string) => React.ReactNode);
    side?: 'left' | 'right'; // defaults to 'right'
    hidden?: boolean;
}

interface IProps {
    label: ILabel;
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

        const checkboxInput = (
            <span
                role="checkbox"
                id={this.htmlId}
                className={classes}
                aria-checked={this.props.value}
                aria-disabled={this.props.disabled}
                tabIndex={0}
                onClick={this.onClick}
            >
                <span className="inner" />
            </span>
        );

        // if external label is used it can't be hidden
        if (this.props.label.hidden && typeof this.props.label.content === 'string') {
            return (
                <Tooltip
                    text={this.props.label.content}
                    flow={this.props.toolTipFlow}
                >
                    <span className="sd-switch__wrapper" tabIndex={-1}>
                        {checkboxInput}
                        <label className='a11y-only' htmlFor={this.htmlId}>{this.props.label.content}</label>
                    </span>
                </Tooltip>
            );
        } else {
            const labelContent = typeof this.props.label.content === 'string'
                ? <label htmlFor={this.htmlId}>{this.props.label.content}</label>
                : this.props.label.content(this.htmlId);

            return (
                <span className="sd-switch__wrapper" tabIndex={-1}>
                    {this.props.label.side === 'left' ? labelContent : null}
                    {checkboxInput}
                    {this.props.label.side !== 'left' ? labelContent : null}
                </span>
            );
        }
    }
}
