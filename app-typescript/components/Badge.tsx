import * as React from 'react';
import classNames from 'classnames';

interface IProps {
    text?: string;
    type?: 'primary' | 'success' | 'warning' | 'alert' | 'highlight' | 'light';
    color?: string; // https://ui-framework.superdesk.org/#/components/colors
    style?: 'round' | 'square'; // defaults to 'round'
    children?: React.ReactNode;
}

export class Badge extends React.PureComponent<IProps> {
    render() {
        let classes = classNames('badge', {
            [`badge--${this.props.type}`]: this.props.type && !this.props.color,
            [`${this.props.color}`] : this.props.color && !this.props.type,
            'badge--square': this.props.style === 'square',
        });

        if (this.props.children) {
            return (
                <div className='element-with-badge'>
                    {this.props.children}
                    <span className={classes}>{this.props.text}</span>
                </div>
            );
        } else {
            return <span className={classes}>{this.props.text}</span>;
        }
    }
}
