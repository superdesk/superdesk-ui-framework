import * as React from 'react';
import classNames from 'classnames';

interface IProps {
    color?: 'light' | 'darker' | 'blueGrey' | 'blueGreyDarker'; // defaults to 'light'
    zIndex?: number;
    theme?: 'light-ui' | 'dark-ui'; // defaults to 'light
    className?: string;
}

export class SubNav extends React.PureComponent<IProps> {
    render() {
        const  darkColors = ['blueGrey', 'blueGreyDarker'];

        let classes = classNames('subnav', {
            'subnav--light': this.props.color === undefined,
            [`subnav--${this.props.color}`]: this.props.color || this.props.color !== undefined,
        }, this.props.className);
        let style = {
            zIndex: 1000 + (this.props.zIndex ? this.props.zIndex : 0),
        };
        let defaultTheme = darkColors.includes(this.props.color || '') ? 'dark-ui' : null;

        return (
            <div data-theme={this.props.theme || defaultTheme} className={classes} style={style}>
                {this.props.children}
            </div>
        );
    }
}
