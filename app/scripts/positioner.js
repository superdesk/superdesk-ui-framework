/* eslint-disable react/no-multi-comp */
/* eslint-disable eqeqeq */

import React from 'react';
import ReactDOM from 'react-dom';
import Popper from 'popper.js';

import PropTypes from 'prop-types';
import {reactToAngular1} from './helpers/react-to-angular-1';

const eventCloseOthers = 'superdesk-ui-framework.positioner.closeOthers';
const padding = 5;

class PopperWrapper extends React.Component {
    componentDidMount() {
        this.closeDropdownOnOutsideClickBound = this.props.closeDropdownOnOutsideClick.bind(null, this.wrapper);

        window.addEventListener('click', this.closeDropdownOnOutsideClickBound);
        window.addEventListener(eventCloseOthers, this.props.handleCloseOthers);

        const dropdownElement = this.wrapper;


        if (this.props.zIndex != null) {
            dropdownElement.style['z-index'] = this.props.zIndex;
        }

        const rect = this.props.triggerElement.getBoundingClientRect();

        const viewportHeight = document.documentElement.clientHeight;
        const viewportWidth = document.documentElement.clientWidth;

        const availableSpaceTop = rect.top - padding;
        const availableSpaceBottom = (viewportHeight - rect.bottom) - padding;

        const availableSpaceLeft = rect.left;
        const availableSpaceRight = viewportWidth - rect.right;

        this.wrapper.style.maxHeight = Math.max(availableSpaceBottom, availableSpaceTop) + 'px';
        this.wrapper.style.maxWidth = Math.max(availableSpaceLeft, availableSpaceRight) + 'px';
        this.wrapper.style.overflow = 'auto';

        this.popperInstance = new Popper(this.props.triggerElement, dropdownElement, {
            placement: this.props.placement,
            eventsEnabled: false,
        });
    }
    componentWillUnmount() {
        window.removeEventListener('click', this.closeDropdownOnOutsideClickBound);
        window.removeEventListener(eventCloseOthers, this.props.handleCloseOthers);
        this.popperInstance.destroy();
    }
    render() {
        return <div className={this.props.className || null} ref={(w) => this.wrapper = w}>{this.props.children}</div>;
    }
}

PopperWrapper.propTypes = {
    children: PropTypes.any,
    triggerSelector: PropTypes.string,
    handleCloseOthers: PropTypes.func,
    closeDropdownOnOutsideClick: PropTypes.func,
    triggerElement: PropTypes.object,

    // https://github.com/FezVrasta/popper.js/blob/master/docs/_includes/popper-documentation.md#Popper.Defaults
    placement: PropTypes.string,
    zIndex: PropTypes.number,
    className: PropTypes.string,
};

export class Positioner extends React.Component {
    constructor(props) {
        super(props);

        this.elementForPositioner = document.body.appendChild(document.createElement('div'));

        this.state = {
            open: false,
        };

        this.toggleDropdown = this.toggleDropdown.bind(this);
        this.handleCloseOthers = this.handleCloseOthers.bind(this);
        this.closeDropdownOnOutsideClick = this.closeDropdownOnOutsideClick.bind(this);
    }

    handleCloseOthers(event) {
        if (event.detail.triggerElement !== this.triggerElement) {
            this.setState({open: false});
        }
    }

    componentDidMount() {
        this.triggerElement = document.querySelector(this.props.triggerSelector);
        this.triggerElement.addEventListener('click', this.toggleDropdown);
    }

    componentWillUnmount() {
        this.elementForPositioner.remove();
        this.triggerElement.removeEventListener('click', this.toggleDropdown);
    }

    toggleDropdown(e) {
        // When toggle button is clicked it should not bubble up.
        // For example, if clicking a list item opens the preview, the preview should not be opened if the click is on
        // the toggle button. Even if the toggle button is inside the list item.
        e.stopPropagation();

        window.dispatchEvent(new CustomEvent(eventCloseOthers, {
            detail: {
                triggerElement: this.triggerElement,
            },
        }));

        this.setState({open: !this.state.open});
    }

    // arguments are in a different order, because the method is bound
    closeDropdownOnOutsideClick(wrapper, event) {
        if (
            this.state.open === true
            && event != null
            && event.target !== this.triggerElement
            && event.target != null
            && wrapper != null
            && !wrapper.contains(event.target)
        ) {
            this.setState({
                open: false,
            });
        }
    }

    componentDidUpdate() {
        if (this.state.open === true) {
            ReactDOM.render(
                (
                    <PopperWrapper
                        {...this.props}
                        handleCloseOthers={this.handleCloseOthers}
                        closeDropdownOnOutsideClick={this.closeDropdownOnOutsideClick}
                        triggerElement={this.triggerElement}
                    />
                ),
                this.elementForPositioner
            );
        } else {
            ReactDOM.unmountComponentAtNode(this.elementForPositioner);
        }
    }

    render() {
        // can't use portal, because it causes events to bubble in the original DOM location and not body

        return null;
    }
}

Positioner.propTypes = {
    children: PropTypes.any,
    triggerSelector: PropTypes.string,

    // https://github.com/FezVrasta/popper.js/blob/master/docs/_includes/popper-documentation.md#Popper.Defaults
    placement: PropTypes.string,
    zIndex: PropTypes.number,
    className: PropTypes.string,
};

// one event listener;

/*
    Maintain a variable, weakmap of boxes

    close others - easy
    close if clicked outside - check all maps and close all where outside
*/

angular.module('superdesk-ui.positioner', [])
    .component('sdPositioner', reactToAngular1(Positioner, ['triggerSelector', 'placement', 'zIndex', 'className']));

/*
    Usage:

        Angularjs:
            <div>
                <button id="open">Open</button>
                <sd-positioner triggerSelector="'#open'" placement="'bottom-end'" class-name="'dropdown2">
                    <div>--contents--</div>
                </sd-positioner>
            </div>

        React:
            <div>
                <button id="open">Open</button>
                <Positioner triggerSelector="#open" placement="bottom-end" className="dropdown2">
                    <div>--contents--</div>
                </Positioner>
            </div>
*/