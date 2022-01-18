import * as React from 'react';
import classNames from 'classnames';

interface IProps {
    children: React.ReactNode;
    className?: string;
    weight?: 'normal' | 'medium' | 'strong';
    style?: 'normal' | 'italic';
    align?: 'start' | 'end' | 'center' | 'justify';
    fontStyle?: 'sans' | 'serif';
    color?: 'normal' | 'light' | 'lighter';
    type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export class Heading extends React.PureComponent<IProps> {
    render() {
        let classes = classNames('sd-heading', {
            'sd-text--italic': this.props.style === 'italic',
            [`sd-text--${this.props.weight}`]: this.props.weight,
            'sd-text-align--left': this.props.align === undefined,
            [`sd-text-align--${this.props.align}`]: this.props.align && this.props.align !== 'start',
            'sd-text--sans': this.props.fontStyle === undefined,
            [`sd-text--${this.props.fontStyle}`]: this.props.fontStyle && this.props.fontStyle !== 'sans',
            [`sd-heading--${this.props.type}`]: this.props.type,
            '': this.props.color === undefined,
            [`sd-text-color--${this.props.color}`]: this.props.color && this.props.color !== 'normal',
        }, this.props.className);
        switch (this.props.type) {
            case 'h1':
                return (
                    <h1 className={classes}>
                        {this.props.children}
                    </h1>
                );
            case 'h2':
                return (
                    <h2 className={classes}>
                        {this.props.children}
                    </h2>
                );
            case 'h3':
                return (
                    <h3 className={classes}>
                        {this.props.children}
                    </h3>
                );
            case 'h4':
                return (
                    <h4 className={classes}>
                        {this.props.children}
                    </h4>
                );
            case 'h5':
                return (
                    <h5 className={classes}>
                        {this.props.children}
                    </h5>
                );
            case 'h6':
                return (
                    <h6 className={classes}>
                        {this.props.children}
                    </h6>
                );
        }
    }
}
