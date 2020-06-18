import * as React from 'react';
import classNames from 'classnames';

interface IProps {
    color?: 'light' | 'darker' | 'blueGrey' | 'blueGreyDarker' | 'darkUi'; // defaults to 'light'
    zIndex?: number;
    theme?: 'light' | 'dark' // defaults to 'light;
}

export class SubNav extends React.PureComponent<IProps> {
    render() {
        let classes = classNames('subnav', {
            'subnav--light': this.props.color === undefined,
            [`subnav--${this.props.color}`]: this.props.color || this.props.color !== undefined,
            ['subnav--dark-ui']: this.props.theme === 'dark',
        });
        let style = {
            zIndex: 1000 + (this.props.zIndex ? this.props.zIndex : 0),
        };
        return (
            <div className={classes} style={style}>
                {this.props.children}
            </div>
        );
    }
}
