import * as React from 'react';
import { SidebarMenu } from './SidebarMenu';
import { AuthoringContent } from './AuthoringContent';

interface IProps {
    header: string;
    children?: React.ReactNode;
    openA?: boolean;
}

export class Layout extends React.PureComponent<IProps> {
    render() {
        return (
            <div className='sd-page-grid--test docs-page__full-width-helper'>
                <div className='sd-main-menu'>
                    <div className='sd-main-menu__inner'></div>
                </div>
                <header className='sd-top-menu'>
                    <a className='sd-top-menu__collapse-nav'>
                        <i className='icon-collapse icon--white'></i>
                    </a>
                    <p className='sd-top-menu__header'>{this.props.header}</p>
                </header>
                <section className='sd-content sd-content-wrapper'>
                    <SidebarMenu />
                    <div id='leftContent' className='sd-content-wrapper__main-content-area sd-main-content-grid comfort'>
                        {this.props.children}
                    </div>
                    <AuthoringContent open={this.props.openA} />
                </section>
                <footer className='bottom-bar'>
                    This is the footer.
                </footer>
            </div>
        );
    }
}