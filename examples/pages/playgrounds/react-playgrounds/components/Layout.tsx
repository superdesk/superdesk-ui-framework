import * as React from 'react';
import { SidebarMenu } from './SidebarMenu';
import { AuthoringContent } from './AuthoringContent';

interface IProps {
    header: string;
    children?: React.ReactNode;
    theme?: string;
}

export const Layout = ({
    header,
    children,
    theme,
}: IProps) => {
    return (
        <div className='sd-page-grid--test docs-page__full-width-helper' data-theme={theme === 'dark' ? 'dark-ui' : null}>
            <div className='sd-main-menu'>
                <div className='sd-main-menu__inner'></div>
            </div>
            <header className='sd-top-menu'>
                <a className='sd-top-menu__collapse-nav'>
                    <i className='icon-collapse icon--white'></i>
                </a>
                <p className='sd-top-menu__header'>{header}</p>
            </header>
            <section id='1' className='sd-content sd-content-wrapper'>
                {children}
            </section>
            <footer className='bottom-bar'>
                This is the footer.
            </footer>
        </div>
    );
}
