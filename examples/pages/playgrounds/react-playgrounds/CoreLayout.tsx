import * as React from 'react';
import * as Components from './components/Index';
import { ButtonGroup, Button, NavButton, SubNav, Dropdown, Input, IconButton, LeftMenu, BoxedList, BoxedListItem, BoxedListContentRow, Heading, Text, Time } from '../../../../app-typescript/index';
import * as Layout from '../../../../app-typescript/components/Layouts';
import * as Form from '../../../../app-typescript/components/Form';
import * as Nav from '../../../../app-typescript/components/Navigation';
import { BottomNav } from '../../../../app-typescript/components/Navigation/BottomNav';
import { clone } from 'lodash';

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
    notificationsOpen: boolean;
    botNavArray: any;
}

export class CoreLayout extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            theme: 'light',
            mainMenuOpen: false,
            notificationsOpen: false,
            botNavArray: [
                            { icon:'photo', title: 'Sed posuere consectetur est at lobortis.', onClick: () => false, onRemove: (e) => this.handleDelete(e) },
                            { title: 'Nullam id dolor id nibh ultricies.', onClick: () => false, onRemove: (e) => this.handleDelete(e)},
                            { icon:'video', title: 'Nulla vitae elit libero, a pharetra augue.', onClick: () => false, onRemove: (e) => this.handleDelete(e)},
                            { title: 'Donec sed odio dui.', onClick: () => false, onRemove: (e) => this.handleDelete(e)},
            ]
        }
        this.handleMainMenu = this.handleMainMenu.bind(this);
        this.handleNotifications = this.handleNotifications.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleMainMenu() {
        this.setState((state) => ({
            mainMenuOpen: !state.mainMenuOpen,
        }));
    }

    handleNotifications() {
        this.setState((state) => ({
            notificationsOpen: !state.notificationsOpen,
        }));
    }
    
    handleDelete(indexNumber: number) {
        const newItems = clone(this.state.botNavArray);
        newItems.splice(indexNumber, 1);

        this.setState({
            botNavArray: newItems,
        });  
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
            editorFullWidth={false}
            slideInMenu={(
                <Layout.MainMenu
                headerTitle='Main Menu'
                poweredBy='Powered by Superdesk technology'
                header={(null)}
                footerContent={true}
                footer={(
                    <p>Menu footer testing</p>
                )}>
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
                    <NavButton badgeValue='6' icon='bell' text='Show notifications' onClick={this.handleNotifications} />
                )}
                footer={(
                    <>
                    <Layout.BottomBarAction onClick={()=> false} />
                    <BottomNav
                        items={this.state.botNavArray} />
                    </>
                )}
                overlay={(
                    <Layout.NotificationPanel
                    header={(null)}
                    headerTitle='Notifications'
                    open={this.state.notificationsOpen}
                    onClick={this.handleNotifications}
                    theme='dark'>
                        <BoxedList>
                            <BoxedListItem unread={true}>
                                <Time datetime='29.06.2022'>29.06.2022</Time>
                                <BoxedListContentRow>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum sociis natoque penatibus et
                                    magnis dis parturient montes, nascetur ridiculus mus.
                                </BoxedListContentRow>
                            </BoxedListItem>
                            <BoxedListItem>
                                <Time datetime='29.06.2022'>29.06.2022</Time>
                                <BoxedListContentRow>
                                    Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Vestibulum id ligula
                                    porta felis euismod semper.
                                </BoxedListContentRow>
                            </BoxedListItem>
                            <BoxedListItem>
                                <Time datetime='29.06.2022'>29.06.2022</Time>
                                <BoxedListContentRow>
                                    Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer
                                    posuere erat a ante venenatis dapibus posuere velit aliquet.
                                </BoxedListContentRow>
                            </BoxedListItem>
                        </BoxedList>

                    </Layout.NotificationPanel>
                )}>
            </Layout.CoreLayout>
        );
    }
}
