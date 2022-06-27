import * as React from 'react';

import { HamburgerButton } from '.';
import { Container } from './';

interface IProps {
    children?: React.ReactNode;
    menuOpen?: boolean;
    heading?: string;
    onClick(): void;
    active?: boolean;
    ariaControls?: string;
    buttonAnimation?: 'spin' | 'squeeze' | 'none';
}

export class CoreLayoutTopMenu extends React.PureComponent<IProps> {
    render() {
        return (
            <header className='sd-top-menu'>
                <HamburgerButton
                    buttonAnimation={this.props.buttonAnimation}
                    arialabel='Toggle main menu'
                    ariaControls={this.props.ariaControls}
                    onClick={this.props.onClick}
                    active={this.props.active} />
                <Container className='sd-margin-e--auto'>
                    {this.props.heading && (
                        <p className='sd-top-menu__header'>{this.props.heading}</p>
                    )}
                </Container>
                {this.props.children}
            </header>
        );
    }
}
