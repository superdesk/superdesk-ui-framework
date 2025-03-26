import * as React from 'react';
import classNames from 'classnames';

interface IProps {
    text: string;
    style?: 'normal' | 'light'; // defaults to normal
    noMinHeight?: boolean;
}

export class FormLabel extends React.PureComponent<IProps> {
    render() {
        let classes = classNames('form-label form-label--block', {
            'form-label--light': this.props.style === 'light',

        });

        return (
            <label
                className={classes}
                style={this.props.noMinHeight === true ? {minHeight: 'auto'} : undefined}
            >
                {this.props.text}
            </label>
        );
    }
}
