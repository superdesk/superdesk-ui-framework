import * as React from 'react';
import classNames from 'classnames';
import nextId from "react-id-generator";
import {IPropsCustomHeader} from "../ToggleBox/index";

interface IState {
    isOpen: boolean;
    isAnimating: boolean;
}

export class CustomHeaderToggleBox extends React.PureComponent<IPropsCustomHeader, IState> {
    htmlId = nextId('togglebox-');
    contentRef = React.createRef<HTMLDivElement>();

    constructor(props: IPropsCustomHeader) {
        super(props);
        this.state = {
            isOpen: this.props.initiallyOpen ?? false,
            isAnimating: false,
        };
    }

    /**
     * Called via ref
     */
    public isOpen = () => {
        return this.state.isOpen;
    }

    public toggle = (): void => {
        this.setState({isOpen: !this.state.isOpen}, () => {
            this.props.onToggle?.(this.state.isOpen);
        });
    }

    componentDidUpdate(_prevProps: IPropsCustomHeader, prevState: IState) {
        if (prevState.isOpen !== this.state.isOpen) {
            this.setState({ isAnimating: true });

            if (this.contentRef.current) {
                this.contentRef.current.addEventListener('animationend', this.handleAnimationEnd);
            }
        }
    }

    handleAnimationEnd = () => {
        this.setState({ isAnimating: false });

        if (this.contentRef.current) {
            this.contentRef.current.removeEventListener('animationend', this.handleAnimationEnd);
        }
    }

    render() {
        const classes = classNames('sd-shadow--z1 new-collapse-box', {
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
                        aria-controls={this.htmlId}
                    >
                        <span className='label label--translucent new-collapse-box__divider-label'>
                            {this.props.getToggleButtonLabel(isOpen)}
                        </span>
                    </button>
                </div>

                <div className='new-collapse-box__content'>
                    <div
                        id={this.htmlId}
                        aria-hidden={!isOpen}
                        className={classNames('new-collapse-box__content-inner p-2 pt-0-5', {
                            'toggle-box__content--animation': this.state.isAnimating,
                        })}
                    >
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}
