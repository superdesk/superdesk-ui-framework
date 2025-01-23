import * as React from 'react';
import classNames from 'classnames';
import nextId from "react-id-generator";
import {IPropsSimple} from "../ToggleBox/index";

interface IState {
    isOpen: boolean;
    isAnimating: boolean;
}

/**
 * @ngdoc react
 * @name ToggleBox
 * @description ToggleBox used to open/close a set of details
 */

export class SimpleToggleBox extends React.PureComponent<IPropsSimple, IState> {
    htmlId = nextId('togglebox-');
    contentRef = React.createRef<HTMLDivElement>();

    constructor(props: IPropsSimple) {
        super(props);
        this.state = {
            isOpen: this.props.initiallyOpen ?? false,
            isAnimating: false,
        };
    }

    handleKeyDown = (event: React.KeyboardEvent<HTMLAnchorElement>): void => {
        if (event.key === "ArrowRight" && !this.state.isOpen) {
            this.setState({ isOpen: true });
        } else if (event.key === "ArrowLeft" && this.state.isOpen) {
            this.setState({ isOpen: false });
        } else if (event.key === "Enter") {
            this.toggle();
        }
    }

    /**
     * Called via ref
     */
    public isOpen = () => {
        return this.state.isOpen;
    }

    public toggle = (): void => {
        this.setState({ isOpen: !this.state.isOpen }, () => {
            if (!this.state.isOpen && this.props.onClose) {
                this.props.onClose();
            } else if (this.props.onOpen) {
                this.props.onOpen();
            }
        });
    }

    componentDidUpdate(_prevProps: IPropsSimple, prevState: IState) {
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
        const classes = classNames('toggle-box', {
            'toggle-box--margin-normal': this.props.margin === undefined,
            'toggle-box--large-title': this.props.largeTitle,
            'toggle-box--circle': this.props.circledChevron,
            [`toggle-box--margin-${this.props.margin}`]: this.props.margin,
            'hidden': !this.state.isOpen,
            'open': this.state.isOpen,
        }, this.props.className);

        const { title, children, badge } = this.props;
        const { isOpen } = this.state;

        return (
            <div
                className={classes}
            >
                <a
                    className="toggle-box__header"
                    onClick={this.toggle}
                    role="button"
                    tabIndex={0}
                    onKeyDown={this.handleKeyDown}
                    aria-expanded={isOpen}
                    aria-controls={this.htmlId}
                >
                    <div className="toggle-box__chevron">
                        <i className="icon-chevron-right-thin" />
                    </div>
                    <div className="toggle-box__label">
                        {title}
                    </div>
                    <div
                        className="toggle-box__line"
                    />
                    {badge ? badge : null}
                </a>
                <div className="toggle-box__content-wraper">
                    <div
                        id={this.htmlId}
                        className={classNames('toggle-box__content', {
                            'toggle-box__content--animation': this.state.isAnimating,
                        })}
                        aria-hidden={!isOpen}
                        ref={this.contentRef}
                    >
                        {children}
                    </div>
                </div>
            </div>
        );
    }
}
