import * as React from 'react';
import classNames from 'classnames';
import {IPropsCustomHeader} from "../ToggleBox/index";

interface IState {
    isOpen: boolean;
}

export class CustomHeaderToggleBox extends React.PureComponent<IPropsCustomHeader, IState> {
    constructor(props: IPropsCustomHeader) {
        super(props);
        this.state = {
            isOpen: this.props.initiallyOpen ?? false,
        };
    }

    toggle = (): void => {
        this.setState({isOpen: !this.state.isOpen}, () => {
            this.props.onToggle?.(this.state.isOpen);
        });
    }

    render() {
        let classes = classNames('sd-shadow--z1 new-collapse-box', {
            'new-collapse-box--open': this.state.isOpen,
        });

        return (
            <div
                className={classes}
                data-test-id='toggle-box'
            >
                <div className='new-collapse-box__header'>
                    <div className='new-collapse-box__header-inner'>
                        {this.props.header}
                    </div>

                    <button
                        className='new-collapse-box__divider'
                        onClick={this.toggle}
                    >
                        <span className='label label--translucent new-collapse-box__divider-label'>
                            {this.props.toggleButtonLabel}
                        </span>
                    </button>
                </div>

                <div className='new-collapse-box__content'>
                    <div className='new-collapse-box__content-inner p-2 pt-0-5'>
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}
