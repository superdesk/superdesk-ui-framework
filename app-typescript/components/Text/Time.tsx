import * as React from 'react';
import classNames from 'classnames';

interface IProps {
    children: React.ReactNode;
    className?: string;
    weight?: 'light' | 'normal' | 'medium' | 'strong';
    style?: 'normal' | 'italic';
    align?: 'start' | 'end' | 'center' | 'justify';
    size?: 'x-small' | 'small' | 'medium' | 'large';
    color?: 'normal' | 'light' | 'lighter';
    datetime?: string;
}

export class Time extends React.PureComponent<IProps> {
    render() {
        let classes = classNames('sd-time', {
            'sd-text--italic': this.props.style === 'italic',
            'sd-text--normal': this.props.weight === undefined,
            [`sd-text--${this.props.weight}`]: this.props.weight || this.props.weight !== undefined,
            'sd-text-align--left': this.props.align === undefined,
            [`sd-text-align--${this.props.align}`]: this.props.align && this.props.align !== 'start',
            [`sd-font-size--${this.props.size}`]: this.props.size && this.props.size !== 'x-small',
            '': this.props.color === undefined,
            [`sd-text-color--${this.props.color}`]: this.props.color && this.props.color !== 'normal',
        }, this.props.className);

        return (
            <time dateTime={this.props.datetime} className={classes}>
                {this.props.children}
            </time>
        );
    }
}
