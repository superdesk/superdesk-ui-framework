import * as React from 'react';
import * as Components from './components/Index';
import { ButtonGroup, Button, NavButton, SubNav, Dropdown, Input, IconButton, LeftMenu } from '../../../../app-typescript/index';
import * as Layout from '../../../../app-typescript/components/Layouts';
import * as Form from '../../../../app-typescript/components/Form';
import * as Nav from '../../../../app-typescript/components/Navigation';
import { BottomNav } from '../../../../app-typescript/components/Navigation/BottomNav';

interface IProps {
    children?: React.ReactNode;
    heading?: string;
    active?: boolean;
    onClick(): void;
    ariaControls?: string;
    menuId?: string;
}

interface IState {
    theme: 'dark' | 'light' | string;
    mainMenuOpen: boolean;
}

export class CoreLayout extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            theme: 'light',
            mainMenuOpen: false,
        }
        this.handleMainMenu = this.handleMainMenu.bind(this);
    }

    handleMainMenu() {
        this.setState((state) => ({
            mainMenuOpen: !state.mainMenuOpen,
        }));
    }


    render() {
        return (
            <Layout.CoreLayout
                heading='Core Layout'
                menuOpen={this.state.mainMenuOpen}
                onClick={this.handleMainMenu}
                active={this.state.mainMenuOpen}
                ariaControls='main-menu'
                menuId='main-menu'
                slideInMenu={(
                    <Layout.MainMenu
                        headerTitle='Main Menu'
                        poweredBy='Powered by Superdesk technology'
                        header={(null)}
                        footerContent={true}
                        footer={(
                            <p>Menu footer testing</p>
                        )}
                    >
                        <LeftMenu 
                            style='blanc'
                            reverseItemBorder={true}
                            size='large'
                            ariaLabel={'Left navigation'}   
                            activeItemId='1'
                            groups={[
                                { label: 'MAIN SECTIONS', items: [
                                    { id: '1', label: 'Section 1', ref:'section1'},
                                    { id: '2', label: 'Section 2', ref: 'section2' },
                                    { id: '3', label: 'Section 3', ref: 'section3' },
                                
                                ]},
                                { label:'OTHER SECTIONS', items: [
                                    { id: '4', label: 'Section 4', ref: 'section4' },
                                    { id: '5', label: 'Section 5', ref: 'section5' },
                                ]},
                                { label:'OTHER SECTIONS', items: [
                                    { id: '6', label: 'Section 6', ref: 'section6' },
                                    { id: '7', label: 'Section 7', ref: 'section7' },
                                ]}
                            ]}
                        onSelect={() => false} />
                    </Layout.MainMenu>
                )}
                topMenu={(
                    <p></p>
                )}
                footer={(
                    <>
                    <Layout.BottomBarAction onClick={()=> false} />
                    <BottomNav
                        items={[
                            { icon:'photo', title: 'Sed posuere consectetur est at lobortis.', onClick: () => console.log('test1') },
                            { title: 'Nullam id dolor id nibh ultricies.', onClick: () => console.log('test2')},
                            { icon:'video', title: 'Nulla vitae elit libero, a pharetra augue.', onClick: () => false},
                            { title: 'Donec sed odio dui.', onClick: () => false},
                    ]} />
                    </>
                )}
            >
            </Layout.CoreLayout>
        );
    }
}
