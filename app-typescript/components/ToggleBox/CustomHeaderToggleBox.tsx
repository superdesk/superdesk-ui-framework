import * as React from 'react';
import classNames from 'classnames';
import nextId from "react-id-generator";
import {IPropsCustomHeader} from "../ToggleBox/index";

interface IState {
    isOpen: boolean;
}

export class CustomHeaderToggleBox extends React.PureComponent<IPropsCustomHeader, IState> {
    htmlId = nextId();
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
        const { isOpen } = this.state;

        return (
            <div
                className={classes}
                aria-expanded={isOpen}
                data-test-id='toggle-box'
            >
                <div className='new-collapse-box__header'>
                    <div className='new-collapse-box__header-inner'>
                        {this.props.header}
                    </div>

                    <button
                        className='new-collapse-box__divider'
                        onClick={this.toggle}
                        aria-controls={`togglebox-${this.htmlId}`}
                    >
                        <span className='label label--translucent new-collapse-box__divider-label'>
                            {this.props.toggleButtonLabel}
                        </span>
                    </button>
                </div>

                <div className='new-collapse-box__content'>
                    <div id={`togglebox-${this.htmlId}`} aria-hidden={!isOpen} className='new-collapse-box__content-inner p-2 pt-0-5'>
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}
