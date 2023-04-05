import * as React from 'react';

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
        <div className='sd-page-grid--test docs-page__full-width-helper' data-theme={theme}>
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
            <footer className='sd-bottom-bar'>
                Footer
            </footer>
        </div>
    );
}
