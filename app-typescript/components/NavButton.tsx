import * as React from 'react';
import classNames from 'classnames';

interface IProps {
    icon?: string;
    theme?: 'light' | 'dark'; // defaults to 'light'
    color?: string;
}

export class Label extends React.Component<IProps> {
    render() {
        let classes = classNames('button-nav', {
            'button-nav--ui-dark': this.props.theme === 'dark',
        });

        return (
            <React.Fragment>
                <a className={classes}>
                    <i className={'icon-' + this.props.icon}></i>
                </a>
            </React.Fragment>
        );
    }
}
