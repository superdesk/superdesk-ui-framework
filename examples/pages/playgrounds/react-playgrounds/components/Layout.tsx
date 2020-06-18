import * as React from 'react';
import { SidebarMenu } from './SidebarMenu';
import { AuthoringContent } from './AuthoringContent';

interface IProps {
    header: string;
    children?: React.ReactNode;
    openA?: boolean;
    theme?: string;
}

export const Layout = ({
    header,
    children,
    openA,
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
                <SidebarMenu
                    items={[
                        { icon: 'dashboard', size: 'big' },
                        { icon: 'view', size: 'big' },
                        { icon: 'marked-star', size: 'big' },
                        { icon: 'spike', size: 'big' },
                        { icon: 'personal', size: 'big' },
                        { icon: 'global-search', size: 'big' },
                        { icon: 'picture', size: 'big' }]} />
                <div id='leftContent' className='sd-content-wrapper__main-content-area sd-main-content-grid comfort'>
                    {children}
                </div>
                <AuthoringContent open={openA} />
            </section>
            <footer className='bottom-bar'>
                This is the footer.
            </footer>
        </div>
    );
}
