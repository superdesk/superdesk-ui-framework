import * as React from 'react';
import classNames from 'classnames';

interface IProps {
    text: string;
    type?: 'default' | 'primary' | 'success' | 'warning' | 'alert' | 'highlight' | 'sd-green';
    color?: string; //  https://ui-framework.superdesk.org/#/components/colors
    size?: 'small' | 'normal' | 'large'; // defaults to 'normal'
    onClick?(): void;
    noTransform?: boolean;
    style?: 'filled' | 'hollow'; // defaults to 'filled'
}

export class Label extends React.Component<IProps> {
    render() {
        let classes = classNames('label', {
            [`label--${this.props.size}`]: this.props.size !== 'normal' && this.props.size !== undefined,
            'label--no-transform': this.props.noTransform,
            [`label--${this.props.type}`]: this.props.type !== undefined && !this.props.color,
            [`${this.props.color}`]: this.props.color !== undefined && !this.props.type,
            'label--hollow': this.props.style === 'hollow',
            [`hollow-${this.props.color}`]: this.props.color,
        });

        if (this.props.onClick) {
            return (
                <a href='' className={classes}>
                    {this.props.text}
                </a>
            );
        } else {
            return (
                <span className={classes}>
                    {this.props.text}
                </span>
            );
        }
    }
}
