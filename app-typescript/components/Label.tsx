import * as React from 'react';
import classNames from 'classnames';

interface IProps {
    text?: string;
    color?: string;
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
            [`label--${this.props.color}`]: this.props.color !== undefined,
            'label--hollow': this.props.style === 'hollow',
        });

        return (
            <React.Fragment>
                {this.props.onClick ? <a href='' className={classes}>
                    {this.props.text}
                </a> : <span className={classes}>
                        {this.props.text}
                    </span>}
            </React.Fragment>
        );
    }
}
