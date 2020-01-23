import * as React from 'react';
import { Icon } from './Icon';
import classNames from 'classnames';
import { isThisHour } from 'date-fns';

interface IProps {
    type?: 'default' | 'primary' | 'success' | 'warning' | 'alert' | 'highlight' | 'light';
    icon?: string;
    avatar?: string;
    date?: Date;
    message: {
        heading?: string;
        text: string;
    };
}

export class NotificationToast extends React.PureComponent<IProps> {
    render() {
        let classes = classNames('sd-toast', {
            [`sd-toast--${this.props.type}`]: this.props.type,
        });
        return (
            <div className={classes}>
                <div className='sd-toast__icon'>
                    <Icon name={this.props.icon} />
                </div>
                {this.props.avatar ? <figure className='sd-toast__avatar avatar'>{this.props.avatar}</figure> : null}
                <div className='sd-toast__message'>
                {this.props.message.heading ?
                    (this.props.date ?
                        <React.Fragment>
                            <div className='sd-toast__message-header'>
                                <h4 className='sd-toast__heading'>{this.props.message.heading}</h4>
                                <time>{this.props.date.toLocaleString()}</time>
                            </div>
                            <p>{this.props.message.text}</p>
                        </React.Fragment> :
                        <React.Fragment>
                            <h4 className='sd-toast__heading'>{this.props.message.heading}</h4>
                            <p>{this.props.message.text}</p>
                        </React.Fragment>
                        ) : this.props.message.text}
                        </div>
                <button type="button" className="icn-btn sd-toast__actions">
                    <Icon name='close-small'/>
                </button>
            </div>
        );
    }
}
