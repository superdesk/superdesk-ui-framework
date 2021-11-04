import * as React from 'react';
import classNames from 'classnames';

interface IProps {
    style?: 'normal' | 'light';
    text: string;
    forId?: string;
}

export class FormLabel extends React.PureComponent<IProps> {
    render() {
        let classes = classNames('form-label', {
            'form-label--light': this.props.style === 'light',

        });
        return (
            <label htmlFor={this.props.forId} className={classes}>
                {this.props.text}
            </label>
        );
    }
}