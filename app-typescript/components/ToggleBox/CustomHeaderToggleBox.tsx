import * as React from 'react';
import classNames from 'classnames';
import nextId from "react-id-generator";
import {IPropsCustomHeader} from "../ToggleBox/index";
import {assertNever} from '../../helpers';

interface IState {
    isOpen: boolean;
    wasOpened: boolean;
    isAnimating: boolean;
}

type IProps = IPropsCustomHeader;

export class CustomHeaderToggleBox extends React.PureComponent<IProps, IState> {
    static defaultProps: Partial<IProps>;

    htmlId = nextId('togglebox-');
    contentRef = React.createRef<HTMLDivElement>();

    constructor(props: IProps) {
        super(props);

        const isOpen = this.props.initiallyOpen ?? false;

        this.state = {
            isOpen: isOpen,
            wasOpened: isOpen,
            isAnimating: false,
        };
    }

    toggle = (): void => {
        const nextState: Partial<IState> = {
            isOpen: !this.state.isOpen,
        };

        if (this.state.wasOpened !== true && nextState.isOpen === true) {
            nextState.wasOpened = true;
        }

        this.setState({...this.state, ...nextState}, () => {
            this.props.onToggle?.(this.state.isOpen);
        });
    }

    componentDidUpdate(_prevProps: IProps, prevState: IState) {
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
        const renderChildren = this.props.renderChildren ?? 'always';

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
                        {(() => {
                            if (renderChildren === 'always') {
                                return this.props.children;
                            } else if (renderChildren === 'when-open') {
                                if (isOpen) {
                                    return this.props.children;
                                } else {
                                    return null;
                                }
                            } else if (renderChildren === 'after-first-opening') {
                                if (this.state.isOpen || this.state.wasOpened) {
                                    return this.props.children;
                                } else {
                                    return null;
                                }
                            } else {
                                return assertNever(renderChildren);
                            }
                        })()}
                    </div>
                </div>
            </div>
        );
    }
}
