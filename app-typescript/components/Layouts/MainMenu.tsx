import * as React from 'react';

interface IPropsContainer {
    children?: React.ReactNode;
    id?: string;
    theme?: 'light' | 'dark';
}
class MainMenuContainer extends React.PureComponent<IPropsContainer> {
    render() {
        return (
            <div id={this.props.id}
                aria-labelledby='main-menu_title'
                className='sd-main-menu__navigation'
                data-theme={this.props.theme ? `${this.props.theme}-ui` : null}>
                {this.props.children}
            </div>
        );
    }
}

interface IPropsHeader {
    headerTitle?: string;
}
class MainMenuHeader extends React.PureComponent<IPropsHeader> {
    render() {
        return (
            <div className='sd-main-menu__header'>
                <h3 id='main-menu_title' className='sd-main-menu__title'>{this.props.headerTitle}</h3>
            </div>
        );
    }
}
interface IPropsContent {
    children?: React.ReactNode;
}
class MainMenuContent extends React.PureComponent<IPropsContent> {
    render() {
        return (
            <div className='sd-main-menu__content'>
                {this.props.children}
            </div>
        );
    }
}
interface IPropsFooter {
    children?: React.ReactNode;
    poweredBy?: string;
    footerContent?: boolean;
}
class MainMenuFooter extends React.PureComponent<IPropsFooter> {
    render() {
        return (
            <div className='sd-main-menu__footer'>
                {this.props.poweredBy &&
                    <div className='sd-main-menu__footer-info'>
                        {this.props.poweredBy}
                    </div>
                }
                <div className='sd-main-menu__footer-logo'></div>
                {this.props.footerContent &&
                    <div className='sd-main-menu__footer-content'>
                        {this.props.children}
                    </div>
                }
            </div>
        );
    }
}

interface IProps {
    header: React.ReactNode;
    footer?: React.ReactNode;
    children?: React.ReactNode;
    headerTitle?: string;
    poweredBy?: string;
    footerContent?: boolean;
}

export default class MainMenu extends React.PureComponent<IProps> {
    render() {
        return (
            <MainMenuContainer>
                <MainMenuHeader headerTitle={this.props.headerTitle}>
                    {this.props.header}
                </MainMenuHeader>
                <MainMenuContent>
                    {this.props.children}
                </MainMenuContent>
                {this.props.footer && (
                    <MainMenuFooter footerContent={this.props.footerContent} poweredBy={this.props.poweredBy}>
                        {this.props.footer}
                    </MainMenuFooter>
                )}
            </MainMenuContainer>
        );
    }
}

export {
    MainMenu, MainMenuContainer, MainMenuHeader, MainMenuContent, MainMenuFooter
};
