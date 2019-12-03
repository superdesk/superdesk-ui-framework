import * as React from 'react';
import classNames from 'classnames';
import { Button } from './Button';

interface IProps {
    icon?: string;
    theme?: 'light' | 'dark'; // defaults to 'light'
    type?: 'default' | 'primary' | 'highlight' | 'darker';
    onClick(): void;
}

export class NavButton extends React.PureComponent<IProps> {
    render() {
        let classes = classNames('sd-navbtn', {
            'sd-navbtn-dark': this.props.theme === 'dark',
            [`sd-navbtn--${this.props.type}`]: this.props.type,
        });

        return (
            <Button navClass={classes} icon={this.props.icon} onClick={this.props.onClick}></Button>
        );
    }
}
