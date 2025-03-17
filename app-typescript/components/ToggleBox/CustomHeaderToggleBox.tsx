import * as React from 'react';
import classNames from 'classnames';
import nextId from "react-id-generator";
import {IPropsCustomHeader} from "../ToggleBox/index";

interface IState {
    isOpen: boolean;
    wasOpened: boolean;
    isAnimating: boolean;
}

export class CustomHeaderToggleBox extends React.PureComponent<IPropsCustomHeader, IState> {
    private htmlId = nextId('togglebox-');
    private contentRef = React.createRef<HTMLDivElement>();

    constructor(props: IPropsCustomHeader) {
        super(props);

        const isOpen = this.props.initiallyOpen ?? false;

        this.state = {
            isOpen: isOpen,
            isAnimating: false,
            wasOpened: isOpen,
        };
    }

    /**
     * Called via ref
     */
    public isOpen = () => {
        return this.state.isOpen;
    }

    public toggle = (): Promise<boolean> => {
        return new Promise((resolve, reject) => {
            this.setState(
                {isOpen: !this.state.isOpen, isAnimating: true},
                () => {
                    if (this.contentRef.current) {
                        const handleAnimation = () => {
                            this.props.onToggle?.(this.state.isOpen);
                            this.handleAnimationEnd();
                            resolve(this.state.isOpen);
                        };

                        this.contentRef.current.addEventListener("animationend", handleAnimation, {once: true});
                    } else {
                        reject();
                    }
                },
            );
        });
    }

    componentDidUpdate(_prevProps: IPropsCustomHeader, prevState: IState) {
        if (prevState.isOpen !== this.state.isOpen) {
            this.setState({ isAnimating: true });

            if (this.contentRef.current) {
                this.contentRef.current.addEventListener('animationend', this.handleAnimationEnd);
            }
        }

        if (this.state.isOpen && !this.state.wasOpened) {
            this.setState({wasOpened: true});
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

                {/** render wrapper unconditionally in order not to break the animation */}
                <div className='new-collapse-box__content'>
                    <div
                        ref={this.contentRef}
                        id={this.htmlId}
                        aria-hidden={!isOpen}
                        className={classNames('new-collapse-box__content-inner p-2 pt-0-5', {
                            'toggle-box__content--animation': this.state.isAnimating,
                        })}
                    >
                        {
                            this.state.isOpen || this.state.wasOpened || this.props.alwaysRenderChildren === true
                                ? this.props.children
                                : null
                        }
                    </div>
                </div>
            </div>
        );
    }
}
