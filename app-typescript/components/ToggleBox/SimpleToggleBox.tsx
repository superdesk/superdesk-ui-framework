import * as React from 'react';
import classNames from 'classnames';
import nextId from "react-id-generator";
import {IPropsSimple} from "../ToggleBox/index";

interface IState {
    isOpen: boolean;
}

/**
 * @ngdoc react
 * @name ToggleBox
 * @description ToggleBox used to open/close a set of details
 */

export class SimpleToggleBox extends React.PureComponent<IPropsSimple, IState> {
    htmlId = nextId('togglebox-');
    constructor(props: IPropsSimple) {
        super(props);
        this.state = {
            isOpen: this.props.initiallyOpen ?? false,
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

    toggle = (): void => {
        this.setState({ isOpen: !this.state.isOpen }, () => {
            if (!this.state.isOpen && this.props.onClose) {
                this.props.onClose();
            } else if (this.props.onOpen) {
                this.props.onOpen();
            }
        });
    }

    render() {
        let classes = classNames('toggle-box', {
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
                    <div id={this.htmlId} className="toggle-box__content" aria-hidden={!isOpen}>
                        {children}
                    </div>
                </div>
            </div>
        );
    }
}
