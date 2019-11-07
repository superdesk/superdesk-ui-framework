import * as React from 'react';
import classNames from 'classnames';

interface IProps {
    btnText: string;
    hollow: boolean;
    typeAlert: string;
    typeInfo: string;
    small: boolean;
}

export class Alerts extends React.Component<IProps> {
    constructor(props) {
        super(props);
        this.state = {
            close: false,
            open: true,
        };
        this.close = this.close.bind(this);
        this.open = this.open.bind(this);
    }

    close() {
        this.setState({
            close: true,
            open: false,
        });
    }

    open() {
        this.setState({
            close: false,
            open: true,
        });
    }

    render() {
        let classesAlert = classNames('sd-alert', {
            'sd-alert--hollow': this.props.hollow,
            'sd-alert--small': this.props.small,
            [`sd-alert--${this.props.typeAlert}`]: this.props.typeAlert,
            'sd-alert--hidden': this.close,
        });
        let classesInfoBtn = classNames('sd-alert__info-btn sd-shadow--z2', {
            [`sd-alert__info-btn--${this.props.typeInfo}`]: this.props.typeInfo,
            'sd-alert__info-btn--hidden': this.open,
        });

        return (
            <div className='sd-alert__container'>
                <div className={classesAlert}>
                    <button className='sd-alert__close' onClick={this.close} > {this.props.btnText}</button>
                </div>
                <span className={classesInfoBtn} onClick={this.open}>
                    <i className='info-icon-large'></i>
                </span>
            </div>
        );
    }
}
