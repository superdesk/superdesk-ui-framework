import * as React from 'react';
import classNames from 'classnames';

interface IProps {
    type?: 'primary' | 'success' | 'warning' | 'alert' | 'highlight' | 'sd-green';
    style?: 'filled' | 'hollow'; // defaults to 'filled'
    size?: 'normal' | 'small'; // defaults to 'normal'
    restoreIcon?: 'info' | 'help'; // defaults to 'info'
}

interface IState {
    open: boolean;
}

export class Alert extends React.PureComponent<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            open: true,
        };
        this.onToggle = this.onToggle.bind(this);
    }

    onToggle() {
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
                    {this.props.restoreIcon ?
                        <button className='sd-alert__close' onClick={this.onToggle} ></button> : null}
                    {this.props.children}
                </div>
                {this.props.restoreIcon ?
                    <span className={classesInfoBtn} onClick={this.onToggle}>
                        <i className={this.props.restoreIcon === 'help' ? 'icon-help-large' : 'icon-info-large'}></i>
                    </span> : null
                }
            </div>
        );
    }
}
