import * as React from 'react';

import {
    CoreLayoutContainer,
    CoreLayoutMain,
    CoreLayoutTopMenu,
    CoreLayoutSlideInMenu,
    CoreLayoutFooter,
} from '.';

interface IProps {
    topMenu?: React.ReactNode;
    main?: React.ReactNode;
    slideInMenu?: React.ReactNode;
    footer?: React.ReactNode;
    heading?: string;
    menuOpen?: boolean;
    onClick(): void;
    active?: boolean;
    menuId?: string;
    ariaControls?: string;
    buttonAnimation?: 'spin' | 'squeeze' | 'none';
}

export class CoreLayout extends React.PureComponent<IProps> {
    render() {
        return (
            <CoreLayoutContainer>
                {this.props.slideInMenu && (
                    <CoreLayoutSlideInMenu menuId={this.props.menuId} menuOpen={this.props.menuOpen}>
                        {this.props.slideInMenu}
                    </CoreLayoutSlideInMenu>
                )}
                {this.props.topMenu && (
                    <CoreLayoutTopMenu
                        buttonAnimation={this.props.buttonAnimation}
                        heading={this.props.heading}
                        onClick={this.props.onClick}
                        active={this.props.active}
                        ariaControls={this.props.ariaControls}>
                        {this.props.topMenu}
                    </CoreLayoutTopMenu>
                )}
                <CoreLayoutMain>
                        {this.props.children}
                </CoreLayoutMain>
                {this.props.footer && (
                    <CoreLayoutFooter>
                        {this.props.footer}
                    </CoreLayoutFooter>
                )}
            </CoreLayoutContainer>
        );
    }
}
