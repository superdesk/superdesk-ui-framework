import * as React from 'react';
import classNames from 'classnames';

interface IProps {
    type?: 'primary' | 'success' | 'warning' | 'alert' | 'highlight' | 'sd-green';
    style?: 'filled' | 'hollow'; // defaults to 'filled'
    size?: 'normal' | 'small'; // defaults to 'normal'
    icon?: 'info' | 'help'; // defaults to 'info'
}

interface IState {
    open: boolean;
}

export class Alert extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            open: true,
        };
        this.onClose = this.onClose.bind(this);
    }

    onClose() {
        this.setState((state) => ({
            open: !state.open,
        }));
    }

    render() {
        let classesAlert = classNames('sd-alert', {
            'sd-alert--hollow': this.props.style === 'hollow',
            'sd-alert--small': this.props.size === 'small',
            [`sd-alert--${this.props.type}`]: this.props.type,
            'sd-alert--hidden': !this.state.open,
        });
        let classesInfoBtn = classNames('sd-alert__info-btn sd-shadow--z2', {
            [`sd-alert__info-btn--${this.props.type}`]: this.props.type,
            'sd-alert__info-btn--hidden': this.state.open,
        });

        return (
            <div className='sd-alert__container'>
                <div className={classesAlert}>
                    <button className='sd-alert__close' onClick={this.onClose} ></button>
                    {this.props.children}
                </div>
                <span className={classesInfoBtn} onClick={this.onClose}>
                    <i className={this.props.icon === 'help' ? 'icon-help-large' : 'icon-info-large'}></i>
                </span>
            </div>
        );
    }
}
