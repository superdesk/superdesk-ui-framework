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
    fontStyle?: 'sans' | 'serif';
}

export class Text extends React.PureComponent<IProps> {
    render() {
        let classes = classNames('sd-text', {
            'sd-text--italic': this.props.style === 'italic',
            'sd-text--normal': this.props.weight === undefined,
            [`sd-text--${this.props.weight}`]: this.props.weight || this.props.weight !== undefined,
            'sd-text-align--left': this.props.align === undefined,
            [`sd-text-align--${this.props.align}`]: this.props.align && this.props.align !== 'start',
            [`sd-font-size--${this.props.size}`]: this.props.size && this.props.size !== 'small',
            'sd-text--sans': this.props.fontStyle === undefined,
            [`sd-text--${this.props.fontStyle}`]: this.props.fontStyle && this.props.fontStyle !== 'sans',
            '': this.props.color === undefined,
            [`sd-text-color--${this.props.color}`]: this.props.color && this.props.color !== 'normal',
        }, this.props.className);

        return (
            <p className={classes}>
                {this.props.children}
            </p>
        );
    }
}
