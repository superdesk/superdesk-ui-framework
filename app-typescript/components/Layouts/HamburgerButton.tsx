import * as React from 'react';
import classNames from 'classnames';

interface IProps {
    id?: string;
    arialabel?: string;
    ariaControls?: string;
    onClick(): void;
    active?: boolean;
    buttonAnimation?: 'spin' | 'squeeze' | 'none';
    disabled?: boolean;
}

export class HamburgerButton extends React.PureComponent<IProps> {
    render() {
        let classes = classNames(
            'sd-top-menu__collapse-nav hamburger',
            {
                'is-active': this.props.active,
                'hamburger--spin': this.props.buttonAnimation === undefined,
                [`hamburger--${this.props.buttonAnimation}`]:
                this.props.buttonAnimation || this.props.buttonAnimation !== undefined,
                'sd-top-menu__collapse-nav--disabled': this.props.disabled,
            },
        );
        return (
            <button type='button'
                className={classes}
                tabIndex={0}
                onClick={this.props.onClick}
                aria-label={this.props.arialabel}
                aria-controls={this.props.ariaControls}
                aria-expanded={this.props.active}
                id={this.props.id}>
                    <span className="hamburger__box">
                        <span className="hamburger__inner"></span>
                    </span>
            </button>
        );
    }
}
