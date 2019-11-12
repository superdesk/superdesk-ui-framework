import * as React from 'react';
import classNames from 'classnames';

interface IProps {
    text?: string;
    color?: 'primary' | 'success' | 'warning' | 'alert' | 'highlight' | 'light';
    style?: 'round' | 'square';
    children?: React.ReactNode;
}

export class Badge extends React.Component<IProps> {
    render() {
        let classes = classNames('badge', {
            [`badge--${this.props.color}`]: this.props.color,
            'badge--square': this.props.style === 'square',
        });

        return (
            <React.Fragment>
                {this.props.children
                    ? (
                        <div className='element-with-badge'>
                            {this.props.children}
                            <span className={classes}>{this.props.text}</span>
                        </div>
                    )
                    : <span className={classes}>{this.props.text}</span>}
            </React.Fragment>
        );
    }
}
