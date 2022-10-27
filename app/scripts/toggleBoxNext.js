
import React from 'react';
import PropTypes from 'prop-types';
import {reactToAngular1} from './helpers/react-to-angular-1';

export class ToggleBoxNext extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: this.props.isOpen || false,
        };

        this.toggle = this.toggle.bind(this);
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen,
        });
    }
    render() {
        const {title, style, mode, children} = this.props;
        const {isOpen} = this.state;

        const classNames = [
            `toggle-box toggle-box--margin-normal toggle-box--${style}`,
            mode,
        ];

        if (!isOpen) {
            classNames.push('hidden');
        }

        return (
            <div className={classNames.join(' ')}>
                <div className="toggle-box__header" onClick={this.toggle}>
                    <div className="toggle-box__chevron"><i className="icon-chevron-right-thin" /></div>
                    <div className="toggle-box__label">{title}</div>
                    <div className="toggle-box__line" />
                </div>
                <div className="toggle-box__content-wraper">
                    {isOpen ? <div className="toggle-box__content">{children}</div> : null }
                </div>
            </div>
        );
    }
}

ToggleBoxNext.propTypes = {
    mode: PropTypes.string,
    title: PropTypes.string.isRequired,
    style: PropTypes.string, // 'circle' | 'dark'
    children: PropTypes.any,
    isOpen: PropTypes.bool,
};

angular.module('superdesk-ui.toggleBoxNext', [])
    .component('toggleBoxNext', reactToAngular1(ToggleBoxNext, ['mode', 'title', 'style', 'isOpen']));