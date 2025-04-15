import * as React from 'react';
import classNames from 'classnames';

interface IProps {
    color?: 'light' | 'darker' | 'blueGrey' | 'blueGreyDarker'; // defaults to 'light'
    theme?: 'light' | 'dark'; // defaults to 'light
    className?: string;
    ['data-test-id']?: string;
}
interface IPropsDivider {
    width?: 'small' | 'medium' | 'large' | 'x-large'; // defaults to 'medium'
}

export class SubNavDivider extends React.PureComponent<IPropsDivider> {
    render() {
        let classes = classNames('subnav__divider', {
            'subnav__divider--medium': this.props.width === undefined,
            [`subnav__divider--${this.props.width}`]: this.props.width || this.props.width !== undefined,
        });

        return (
            <div className={classes}></div>
        );
    }
}

export class SubNav extends React.PureComponent<IProps> {
    render() {
        const  darkColors = ['blueGrey', 'blueGreyDarker'];

        let classes = classNames('subnav', {
            'subnav--light': this.props.color === undefined,
            [`subnav--${this.props.color}`]: this.props.color || this.props.color !== undefined,
        }, this.props.className);

        let defaultTheme = darkColors.includes(this.props.color || '') ? 'dark-ui' : null;

        return (
            <div
                data-theme={this.props.theme ? `${this.props.theme}-ui` : defaultTheme}
                className={classes}
                data-test-id={this.props['data-test-id']}
            >
                {this.props.children}
            </div>
        );
    }
}
