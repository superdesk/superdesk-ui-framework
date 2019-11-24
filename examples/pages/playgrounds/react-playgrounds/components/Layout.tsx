import * as React from 'react';

interface IProps {
    header: string;
    children?: React.ReactNode;
}

export class Layout extends React.Component<IProps> {
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
                    <div className='sd-sidebar-menu sd-content-wrapper__left-tabs'></div>
                    <div id='leftContent' className='sd-content-wrapper__main-content-area sd-main-content-grid comfort'>
                        {this.props.children}
                    </div>
                </section>
                <footer className='bottom-bar'>
                    This is the footer.
                </footer>
            </div>
        );
    }
}