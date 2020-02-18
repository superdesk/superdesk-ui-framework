import * as React from 'react';
import classNames from 'classnames';
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
    function UpdateTheme() {
        React.useEffect(() => {
            let element = document.getElementById('1');
            let attr = document.createAttribute('theme');
            attr.value = theme;
            element.setAttributeNode(attr);
        }, [theme])
    }

    let classes = classNames('sd-content sd-content-wrapper', {
        [`${theme}`]: theme,
    });
    return (
        <div className='sd-page-grid--test docs-page__full-width-helper'>
            <div className='sd-main-menu'>
                <div className='sd-main-menu__inner'></div>
            </div>
            <header className='sd-top-menu'>
                <a className='sd-top-menu__collapse-nav'>
                    <i className='icon-collapse icon--white'></i>
                </a>
                <p className='sd-top-menu__header'>{header}</p>
            </header>
            <section id='1' className={classes}>
                <SidebarMenu />
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
