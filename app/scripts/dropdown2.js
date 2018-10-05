/* eslint-disable eqeqeq */

import React from 'react';
import PropTypes from 'prop-types';
import {reactToAngular1} from './helpers/react-to-angular-1';

import Popper from 'popper.js';

export class Dropdown2 extends React.Component {
    constructor(props) {
        super(props);

        this.triggerElement = document.querySelector(this.props.triggerSelector);

        this.initialized = false;

        this.state = {
            open: false,
        };

        this.toggleDropdown = this.toggleDropdown.bind(this);
        this.closeDropdownOnOutsideClick = this.closeDropdownOnOutsideClick.bind(this);
        this.initialize = this.initialize.bind(this);
    }

    initialize() {
        document.body.appendChild(this.wrapper);

        const dropdownElement = this.wrapper.children[0].children[0].children[0];

        dropdownElement.classList.add('dropdown2');

        this.popperInstance = new Popper(this.triggerElement, dropdownElement, {
            placement: this.props.placement,
            modifiers: {
                preventOverflow: {
                    boundariesElement: 'viewport',
                },
            },
        });

        this.initialized = true;
    }

    componentDidMount() {
        this.triggerElement.addEventListener('click', this.toggleDropdown);
        window.addEventListener('click', this.closeDropdownOnOutsideClick);
    }

    componentWillUnmount() {
        this.wrapper.remove();
        this.popperInstance.destroy();
        this.triggerElement.removeEventListener('click', this.toggleDropdown);
        window.removeEventListener('click', this.closeDropdownOnOutsideClick);
    }

    toggleDropdown() {
        this.setState({
            open: !this.state.open,
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

    componentDidUpdate() {
        if (this.wrapper != null) {
            if (this.state.open === true) {
                this.wrapper.style.display = '';
            } else {
                this.wrapper.style.display = 'none';
            }
        }
        if (this.popperInstance != null) { // null until initialized
            if (this.state.open === true) {
                this.popperInstance.enableEventListeners();
            } else {
                this.popperInstance.disableEventListeners();
            }
        }
    }

    render() {
        return (
            <div>
                {
                    /* Keep this wrapper so after the child is moved to the body,
                    React can still see the component and call componentWillUnmount when needed */
                }

                <div ref={(w) => {
                    this.wrapper = w;
                    if (this.state.open === true && this.initialized === false && this.wrapper != null) {
                        this.initialize();
                    }
                }}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

Dropdown2.propTypes = {
    children: PropTypes.any,
    triggerSelector: PropTypes.string,

    // https://github.com/FezVrasta/popper.js/blob/master/docs/_includes/popper-documentation.md#Popper.Defaults
    placement: PropTypes.string,
};

angular.module('superdesk-ui.dropdown2', [])
    .component('dropdown2', reactToAngular1(Dropdown2, ['triggerSelector', 'placement']));

/*
    Usage:

        Angularjs:
            <div>
                <button id="open">Open</button>
                <dropdown2 triggerSelector="'#open'" placement="'bottom end'">
                    <div class="dropdown2">--contents--</div>
                </dropdown2>
            </div>

        React:
            <div>
                <button id="open">Open</button>
                <Dropdown2 triggerSelector="#open" placement="bottom end">
                    <div className="dropdown2">--contents--</div>
                </Dropdown2>
            </div>
*/