import * as React from 'react';
import classNames from 'classnames';

interface IProps {
    text?: string;
    type?: 'primary' | 'success' | 'warning' | 'alert' | 'highlight' | 'light';
    style?: 'round' | 'square'; // defaults to 'round'
    children?: React.ReactNode;
}

export class Badge extends React.Component<IProps> {
    render() {
        let classes = classNames('badge', {
            [`badge--${this.props.type}`]: this.props.type,
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
