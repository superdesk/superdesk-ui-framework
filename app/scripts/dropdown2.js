/* eslint-disable eqeqeq */

import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {reactToAngular1} from './helpers/react-to-angular-1';

import Popper from 'popper.js';

const eventCloseOthers = 'superdesk-ui-framework.dropdown2.closeOthers';

const padding = 5;

export class Dropdown2 extends React.Component {
    constructor(props) {
        super(props);

        this.elementForPortal = document.body.appendChild(document.createElement('div'));

        this.state = {
            open: false,
        };

        this.toggleDropdown = this.toggleDropdown.bind(this);
        this.closeDropdownOnOutsideClick = this.closeDropdownOnOutsideClick.bind(this);
        this.handleCloseOthers = this.handleCloseOthers.bind(this);
    }

    handleCloseOthers(event) {
        if (event.detail.triggerElement !== this.triggerElement) {
            this.setState({open: false});
        }
    }

    componentDidMount() {
        this.triggerElement = document.querySelector(this.props.triggerSelector);

        this.triggerElement.addEventListener('click', this.toggleDropdown);
        window.addEventListener('click', this.closeDropdownOnOutsideClick);
        window.addEventListener(eventCloseOthers, this.handleCloseOthers);


        const dropdownElement = this.wrapper;


        if (this.props.zIndex != null) {
            dropdownElement.style['z-index'] = this.props.zIndex;
        }

        this.popperInstance = new Popper(this.triggerElement, dropdownElement, {
            placement: this.props.placement,
            eventsEnabled: false,
        });
    }

    componentWillUnmount() {
        this.popperInstance.destroy();
        this.elementForPortal.remove();
        this.triggerElement.removeEventListener('click', this.toggleDropdown);
        window.removeEventListener('click', this.closeDropdownOnOutsideClick);
        window.removeEventListener(eventCloseOthers, this.handleCloseOthers);
    }

    toggleDropdown(e) {
        e.stopPropagation();

        window.dispatchEvent(new CustomEvent(eventCloseOthers, {
            detail: {
                triggerElement: this.triggerElement,
            },
        }));

        const rect = this.triggerElement.getBoundingClientRect();

        const viewportHeight = document.documentElement.clientHeight;
        const viewportWidth = document.documentElement.clientWidth;

        const availableSpaceTop = rect.top - padding;
        const availableSpaceBottom = (viewportHeight - rect.bottom) - padding;

        const availableSpaceLeft = rect.left;
        const availableSpaceRight = viewportWidth - rect.right;

        this.wrapper.style.maxHeight = Math.max(availableSpaceBottom, availableSpaceTop) + 'px';
        this.wrapper.style.maxWidth = Math.max(availableSpaceLeft, availableSpaceRight) + 'px';
        this.wrapper.style.overflow = 'auto';

        this.setState({
            open: !this.state.open,
        }, () => {
            this.popperInstance.scheduleUpdate();
        });
    }

    closeDropdownOnOutsideClick(event) {
        if (
            this.state.open === true
            && event != null
            && event.target !== this.triggerElement
            && event.target != null
            && this.wrapper != null
            && !this.wrapper.contains(event.target)
        ) {
            this.setState({
                open: false,
            });
        }
    }

    render() {
        const style = this.state.open === true ? null : {display: 'none'};

        return ReactDOM.createPortal(
            <div style={style} className={this.props.className || null} ref={(w) => this.wrapper = w}>{this.props.children}</div>,
            this.elementForPortal
        );
    }
}

Dropdown2.propTypes = {
    children: PropTypes.any,
    triggerSelector: PropTypes.string,

    // https://github.com/FezVrasta/popper.js/blob/master/docs/_includes/popper-documentation.md#Popper.Defaults
    placement: PropTypes.string,
    zIndex: PropTypes.number,
    className: PropTypes.string,
};

angular.module('superdesk-ui.dropdown2', [])
    .component('dropdown2', reactToAngular1(Dropdown2, ['triggerSelector', 'placement', 'zIndex', 'className']));

/*
    Usage:

        Angularjs:
            <div>
                <button id="open">Open</button>
                <dropdown2 triggerSelector="'#open'" placement="'bottom-end'">
                    <div class="dropdown2">--contents--</div>
                </dropdown2>
            </div>

        React:
            <div>
                <button id="open">Open</button>
                <Dropdown2 triggerSelector="#open" placement="bottom-end">
                    <div className="dropdown2">--contents--</div>
                </Dropdown2>
            </div>
*/