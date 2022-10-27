import * as React from 'react';
import classNames from 'classnames';

interface IProps {
    style?: 'normal' | 'light' | 'boxed';
    state?: 'default' | 'focused' | 'warning';
    text: string;
    forId?: string;
    required?: boolean;
    invalid?: boolean;
}

export class FormLabel extends React.PureComponent<IProps> {
    render() {
        let classes = classNames('form-label', {
            'form-label--light': this.props.style === 'light',
            'form-label--boxed': this.props.style === 'boxed',
            'form-label--required': this.props.required,
            'form-label--invalid': this.props.invalid,
            [`form-label--${this.props.state}`]: this.props.state !== 'default' && this.props.state !== undefined,

        });
        return (
            <label htmlFor={this.props.forId} className={classes}>
                {this.props.text}
            </label>
        );
    }
}
