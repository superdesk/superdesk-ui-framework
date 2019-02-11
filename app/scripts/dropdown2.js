/* eslint-disable eqeqeq */

import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {reactToAngular1} from './helpers/react-to-angular-1';

import Popper from 'popper.js';

const eventCloseOthers = 'superdesk-ui-framework.dropdown2.closeOthers';

const autoSizeToKeepInViewportModifier = (data) => {
    // type Position = 'top' | 'right' | 'bottom' | 'left';
    const position = data.placement.split('-')[0];
    const container = document.documentElement;

    const padding = data.instance.modifiers.find(
        (modifier) => modifier.name === 'preventOverflow'
    ).padding;

    const ensureWidth = (maxWidth) => {
        data.offsets.popper.width = maxWidth;
        data.styles = {
            maxWidth: maxWidth + 'px',
            overflow: 'auto',
        };
    };

    const ensureHeight = (maxHeight) => {
        data.offsets.popper.height = maxHeight;
        data.styles = {
            maxHeight: maxHeight + 'px',
            overflow: 'auto',
        };
    };

    if (position === 'top') {
        ensureHeight(data.offsets.reference.top - padding);
    } else if (position === 'bottom') {
        ensureHeight(container.clientHeight - data.offsets.reference.bottom - padding);
    } else if (position === 'left') {
        ensureWidth(data.offsets.reference.left - padding);
    } else if (position === 'right') {
        ensureWidth(parent.clientWidth - data.offsets.reference.right - padding);
    }

    return data;
};

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

    handleCloseOthers({triggerElement}) {
        if (triggerElement !== this.triggerElement) {
            this.setState({open: false});
        }
    }

    componentDidMount() {
        this.triggerElement = document.querySelector(this.props.triggerSelector);

        this.triggerElement.addEventListener('click', this.toggleDropdown);
        window.addEventListener('click', this.closeDropdownOnOutsideClick);
        window.addEventListener(eventCloseOthers, this.handleCloseOthers);


        const dropdownElement = this.wrapper.children[0];

        dropdownElement.classList.add('dropdown2');

        if (this.props.zIndex != null) {
            dropdownElement.style['z-index'] = this.props.zIndex;
        }

        this.popperInstance = new Popper(this.triggerElement, dropdownElement, {
            placement: this.props.placement,
            modifiers: {
                preventOverflow: {
                    boundariesElement: 'viewport',
                    escapeWithReference: true,
                },
                autoSizeToKeepInViewport: {
                    enabled: true,
                    fn: autoSizeToKeepInViewportModifier,
                },
            },
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

        window.dispatchEvent(new Event(eventCloseOthers, {
            triggerElement: this.triggerElement,
        }));

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
        if (this.state.open === true) {
            this.popperInstance.enableEventListeners();
        } else {
            this.popperInstance.disableEventListeners();
        }

        // when the component re-renders
        // popper instance isn't destroyed, but events are disabled.
        // Popper won't call it's modifiers on next run unless we schedule an update
        this.popperInstance.scheduleUpdate();
    }

    render() {
        const style = this.state.open === true ? null : {display: 'none'};

        return ReactDOM.createPortal(
            <div style={style} ref={(w) => this.wrapper = w}>{this.props.children}</div>,
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
};

angular.module('superdesk-ui.dropdown2', [])
    .component('dropdown2', reactToAngular1(Dropdown2, ['triggerSelector', 'placement', 'zIndex']));

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