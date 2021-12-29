import * as React from 'react';
import * as Components from './components/Index';
import { ButtonGroup, Button, NavButton, SubNav, Dropdown, CheckButtonGroup, RadioGroup, Input, Select, Option, Label, Icon, IconButton, Checkbox, GridList, Badge, Divider } from '../../../../app-typescript/index';
import * as GridElements from '../../../../app-typescript/components/GridItem';
import * as Layout from '../../../../app-typescript/components/Layouts';
import dummy_items from '../dummy-data/items';

interface IProps {
    children?: React.ReactNode;
}

interface IState {
    theme: 'dark' | 'light' | string;
    itemType: string;
    dropDownState: string;
    itemSelected1: boolean;
    itemSelected2: boolean;
    itemSelected3: boolean;
    value1: boolean;
    leftPanelOpen: boolean;
    rightPanelOpen: boolean;
}

export class PageLayoutTest extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            theme: 'light',
            itemType: 'itemtype01',
            dropDownState: '',
            itemSelected1: false,
            itemSelected2: false,
            itemSelected3: false,
            value1: false,
            leftPanelOpen: false,
            rightPanelOpen: false,
        }
        this.handleTheme = this.handleTheme.bind(this);
    }

    handleTheme(newTheme: string) {
        this.setState({
            theme: newTheme
        })
    }

    changeStatus(item: any, status: string) {
        if (item.status.includes(status)) {
            item.status.splice(item.status.indexOf(status), 1);
        } else {
            item.status.push(status);
        }
    }

    render() {
        return (
            <Layout.PageLayout
            header={(
<SubNav zIndex={2}>
                <ButtonGroup align="start" padded={true}>
                    <Button
                        text="Open left panel"
                        style="hollow"
                        onClick={() => this.setState({'leftPanelOpen': !this.state.leftPanelOpen})}
                    />
                </ButtonGroup>
                <ButtonGroup align='end'>
                    <Button
                            text="Open right panel"
                            style="hollow"
                            onClick={() => this.setState({'rightPanelOpen': !this.state.rightPanelOpen})}
                        />
                    <Divider size="mini" />
                    <ButtonGroup subgroup={true} spaces="no-space">
                        <Dropdown
                            items={[
                                {
                                    type: 'group', label: 'Chose a theme', items: [
                                        'divider',
                                        { label: 'Light', onSelect: () => this.handleTheme('light-ui')},
                                        { label: 'Dark', onSelect: () => this.handleTheme('dark-ui')},
                                    ]
                                },
                            ]}>
                            <NavButton type='default' icon='adjust' onClick={()=> false} />
                        </Dropdown>
                    </ButtonGroup>
                </ButtonGroup>
            </SubNav>
            )}
            leftPanelOpen={this.state.leftPanelOpen}
            leftPanel={(
                <Layout.Panel side='left' background='light' open={this.state.leftPanelOpen} size='x-large'>
                    <Layout.PanelHeader  title='This is the title for the Panel' onClose={() => this.setState({'leftPanelOpen': false})}>
                    </Layout.PanelHeader>
                    <Layout.PanelContent>
                        <Layout.PanelContentBlock>
                            <p>Maecenas sed diam eget risus varius blandit sit amet non magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas faucibus mollis interdum.
                                Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean lacinia bibendum nulla sed consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <p>Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
                                vestibulum. Nullam quis risus eget urna mollis ornare vel eu leo. Curabitur blandit tempus porttitor. Aenean lacinia bibendum nulla sed consectetur. Morbi leo
                                risus, porta ac consectetur ac, vestibulum at eros.</p>
                        </Layout.PanelContentBlock>
                    </Layout.PanelContent>
                </Layout.Panel>
            )}
            rightPanelOpen={this.state.rightPanelOpen}
            rightPanel={(
                <Layout.Panel side='right' background='grey' open={this.state.rightPanelOpen} size='small'>
                    <Layout.PanelHeader color='blueGreyDarker' title='Right Panel Title' onClose={() => this.setState({'rightPanelOpen': false})}>
                    </Layout.PanelHeader>
                    <Layout.PanelContent>
                        <Layout.PanelContentBlock>
                            <p>Maecenas sed diam eget risus varius blandit sit amet non magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas faucibus mollis interdum.
                                Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean lacinia bibendum nulla sed consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <p>Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
                                vestibulum. Nullam quis risus eget urna mollis ornare vel eu leo. Curabitur blandit tempus porttitor. Aenean lacinia bibendum nulla sed consectetur. Morbi leo
                                risus, porta ac consectetur ac, vestibulum at eros.</p>
                        </Layout.PanelContentBlock>
                    </Layout.PanelContent>
                </Layout.Panel>
            )}
            main={(
                <GridList size="small" gap="medium" margin="3">
                    {dummy_items.map((item, index) =>
                        <GridElements.GridItem locked={item.locked} status={item.status} itemtype={item.type} key={index}>
                            <GridElements.GridItemCheckWrapper>
                                <Checkbox checked={item.selected} label={{text:''}} onChange={(value) => {
                                    item.selected = value;
                                    this.changeStatus(item, 'selected');
                                }} />
                            </GridElements.GridItemCheckWrapper>
                            <GridElements.GridItemTopActions>
                                <IconButton icon='fullscreen' ariaValue='More actions' onClick={()=> false} />
                            </GridElements.GridItemTopActions>
                            <GridElements.GridItemMedia>
                                { item.image ? <img src={item.image} alt={item.imageAlt}/> : null }
                            </GridElements.GridItemMedia>
                            <GridElements.GridItemContent>
                                <GridElements.GridItemTime time={item.date} />
                                <GridElements.GridItemTitle>{item.title}</GridElements.GridItemTitle>
                                <GridElements.GridItemText>{item.description}</GridElements.GridItemText>
                            </GridElements.GridItemContent>
                            <GridElements.GridItemFooter>
                                <GridElements.GridItemFooterBlock align='left'>
                                    <Icon name={item.type} className='sd-grid-item__type-icn' />
                                    <Badge text={item.urgency} color={item.urgencyColor} />
                                    <Badge text={item.priority} shape='square' color={item.priorityColor} />
                                </GridElements.GridItemFooterBlock>
                                <GridElements.GridItemFooterActions>
                                    <IconButton icon='dots-vertical' ariaValue='More actions' onClick={()=> this.changeStatus(item, 'archived')} />
                                </GridElements.GridItemFooterActions>
                            </GridElements.GridItemFooter>
                        </GridElements.GridItem>
                    )}
                </GridList>
            )}
        />
        );
    }
}
