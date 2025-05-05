import * as React from 'react';
import classNames from 'classnames';

interface IProps {
    text: string;
    style?: 'normal' | 'light'; // defaults to normal
    noMinHeight?: boolean;
    noMinWidth?: boolean;
}

export class FormLabel extends React.PureComponent<IProps> {
    render() {
        let classes = classNames('form-label form-label--block', {
            'form-label--light': this.props.style === 'light',

        });

        const style: React.CSSProperties = {};

        if (this.props.noMinWidth) {
            style.minWidth = 'auto';
        }

        if (this.props.noMinHeight) {
            style.minHeight = 'auto';
        }


        return (
            <label
                className={classes}
                style={style}
            >
                {this.props.text}
            </label>
        );
    }
}
