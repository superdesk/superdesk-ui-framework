import * as React from 'react';
import classNames from 'classnames';

interface IProps {
    style?: 'filled' | 'hollow';
    typeAlert?: 'primary' | 'success' | 'warning' | 'alert' | 'highlight' | 'sd-green';
    typeInfo?: 'primary' | 'success' | 'warning' | 'alert' | 'highlight' | 'sd-green';
    size?: 'nomal' | 'small';
    icon?: 'help' | 'info';
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
        this.isOpen = this.isOpen.bind(this);
    }

    isOpen() {
        this.setState((state) => ({
            open: !state.open,
        }));
    }

    render() {
        let classesAlert = classNames('sd-alert', {
            'sd-alert--hollow': this.props.style === 'hollow',
            'sd-alert--small': this.props.size === 'small',
            [`sd-alert--${this.props.typeAlert}`]: this.props.typeAlert,
            'sd-alert--hidden': !this.state.open,
        });
        let classesInfoBtn = classNames('sd-alert__info-btn sd-shadow--z2', {
            [`sd-alert__info-btn--${this.props.typeInfo}`]: this.props.typeInfo,
            'sd-alert__info-btn--hidden': this.state.open,
        });

        return (
            <div className='sd-alert__container'>
                <div className={classesAlert}>
                    <button className='sd-alert__close' onClick={this.isOpen} ></button>
                    {this.props.children}
                </div>
                <span className={classesInfoBtn} onClick={this.isOpen}>
                    <i className={this.props.icon === 'help' ? 'icon-help-large' : 'icon-info-large'}></i>
                </span>
            </div>
        );
    }
}
