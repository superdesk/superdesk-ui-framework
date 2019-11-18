import * as React from 'react';
import classNames from 'classnames';
import { Button } from './Button';

interface IProps {
    icon?: string;
    theme?: 'light' | 'dark'; // defaults to 'light'
    color?: string; // https://ui-framework.superdesk.org/#/components/colors
    disabled?: boolean;
    onClick(): void;
}

export class NavButton extends React.Component<IProps> {
    render() {
        let classes = classNames('button-nav', {
            'button-nav--ui-dark': this.props.theme === 'dark',
            [`button-nav--${this.props.color}`]: this.props.color,
        });

        return (
            <Button navClass={classes} icon={this.props.icon} onClick={() => false}></Button>
        );
    }
}
