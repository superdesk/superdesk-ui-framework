import * as React from 'react';
import classNames from 'classnames';

interface IProps {
    children?: React.ReactNode;
    theme?: string;
    menuOpen?: boolean;
    menuId?: string;
}

export class CoreLayoutSlideInMenu extends React.PureComponent<IProps> {
    render() {
        let classes = classNames('sd-main-menu', {
            [`sd-main-menu--open`]: this.props.menuOpen,
        });
        return (
            <div id={this.props.menuId} className={classes} data-theme='dark-ui'>
                <div className='sd-main-menu__inner'>
                    {this.props.children}
                </div>
            </div>
        );
    }
}