import * as React from 'react';
import * as Markup from '../../js/react';
import { Prop, PropsList } from '../../../app-typescript';
import { ButtonGroup, Button, NavButton, SubNav, Dropdown, Icon, IconButton, Checkbox, GridList, Badge, Divider, BoxedList, BoxedListItem, EmptyState, Tooltip, Heading, Container, Label } from '../../../app-typescript/index';
import * as Layout from '../../../app-typescript/components/Layouts';

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


class ThreePaneLayoutPattern extends React.Component<IProps, IState> {
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
            <section className='docs-page__container'>
                <h2 className='docs-page__h2'>Three Pane Layout</h2>
                
                <Markup.ReactMarkupCodePreview>{`
                    <PageLayout
                        header={(
                            ...
                        )}
                        leftPanelOpen={true}
                        leftPanel={(
                            ...
                        )}
                        rightPanelOpen={false}
                        rightPanel={(
                            ...
                        )}
                        main={(
                            ...
                        )}
                    />
                `}
                </Markup.ReactMarkupCodePreview>

                <p className="docs-page__paragraph"></p>

                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <div style={{height: 600,}} className='sd-border--light'>
                            <Layout.PageLayout fullHeight={true}
                                header={(
                                    <SubNav zIndex={2}>
                                        <ButtonGroup align="inline">
                                            <Tooltip text='Click to toggle left panel' flow='right'>
                                                <NavButton 
                                                    type='darker'
                                                    icon='filter-large'
                                                    onClick={() => this.setState({'leftPanelOpen': !this.state.leftPanelOpen})}
                                                />
                                            </Tooltip>
                                        </ButtonGroup>
                                        <Heading type='h3' className='ms-2'>Layout example</Heading>
                                        <ButtonGroup align='end'>
                                            <NavButton 
                                                icon='dots-vertical'
                                                onClick={()=> false}
                                            />
                                        </ButtonGroup>
                                    </SubNav>
                                )}
                                leftPanelOpen={this.state.leftPanelOpen}
                                leftPanel={(
                                    <Layout.Panel
                                        side='left'
                                        background='grey'
                                        open={this.state.leftPanelOpen}
                                        size='x-small'
                                    >
                                        <Layout.PanelHeader
                                            title='Left Panel title'
                                            onClose={() => this.setState({'leftPanelOpen': false})}
                                        />
                                        <Layout.PanelContent>
                                            <EmptyState
                                                title={'No content yet'} 
                                                description={'Please come later.'} 
                                                size='small' 
                                                illustration="1"
                                            />
                                        </Layout.PanelContent>
                                    </Layout.Panel>
                                )}
                                rightPanelOpen={this.state.rightPanelOpen}
                                rightPanel={(
                                    <Layout.Panel
                                        side='right'
                                        open={this.state.rightPanelOpen}
                                        size='x-small'
                                    >
                                        <Layout.PanelHeader
                                            title='Right Panel title'
                                            onClose={() => this.setState({'rightPanelOpen': false})}
                                        />
                                        <Layout.PanelContent>
                                            <Layout.PanelContentBlock>
                                                <p className='mb-2'>
                                                    Preview of the items in the main panel would go here.
                                                </p>
                                                <p>
                                                    Maecenas sed diam eget risus varius blandit sit amet non magna.
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                </p>
                                            </Layout.PanelContentBlock>
                                        </Layout.PanelContent>
                                    </Layout.Panel>
                                )}
                                main={(
                                    <BoxedList>
                                        <BoxedListItem
                                            alignVertical='center'
                                            clickable={true}
                                            density='compact'
                                            selected={this.state.rightPanelOpen}
                                            onClick={() => this.setState({rightPanelOpen: !this.state.rightPanelOpen})}
                                            actions={(
                                                <IconButton
                                                    icon="dots-vertical"
                                                    size='small'
                                                    ariaValue="More actions"
                                                    onClick={()=> false}
                                                />
                                            )}
                                        >
                                            <Container gap='small' >
                                                <Label style='translucent' text='Published' type='success' />
                                                <span>Click to open the right panel</span>
                                            </Container>
                                        </BoxedListItem>
                                        <BoxedListItem
                                            alignVertical='center'
                                            clickable={true}
                                            density='compact'
                                            selected={false}
                                            onClick={()=> false}
                                            actions={(
                                                <IconButton
                                                    icon="dots-vertical"
                                                    size='small'
                                                    ariaValue="More actions"
                                                    onClick={()=> false}
                                                />
                                            )}
                                        >
                                            <Container gap='small' >
                                                <Label style='translucent' text='In progress' type='warning' />
                                                <span>Parturient pellentesque aenean commodo</span>
                                            </Container>
                                        </BoxedListItem>
                                        <BoxedListItem
                                            alignVertical='center'
                                            clickable={true}
                                            density='compact'
                                            selected={false}
                                            onClick={()=> false}
                                            actions={(
                                                <IconButton
                                                    icon="dots-vertical"
                                                    size='small'
                                                    ariaValue="More actions"
                                                    onClick={()=> false}
                                                />
                                            )}
                                        >
                                            <Container gap='small' >
                                                <Label style='translucent' text='Canceled' type='alert' />
                                                <span>Lorem fringilla malesuada cursus</span>
                                            </Container>
                                        </BoxedListItem>
                                    </BoxedList>
                                )}
                            />
                        </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        <Layout.PageLayout
                            header={(
                                <SubNav zIndex={2}>
                                    <ButtonGroup align="inline">
                                        <Tooltip text='Click to toggle left panel' flow='right'>
                                            <NavButton 
                                                type='darker'
                                                icon='filter-large'
                                                onClick={() => this.setState({'leftPanelOpen': !this.state.leftPanelOpen})}
                                            />
                                        </Tooltip>
                                    </ButtonGroup>
                                    <Heading type='h3' className='ms-2'>Layout example</Heading>
                                    <ButtonGroup align='end'>
                                        <NavButton 
                                            icon='dots-vertical'
                                            onClick={()=> false}
                                        />
                                    </ButtonGroup>
                                </SubNav>
                            )}
                            leftPanelOpen={this.state.leftPanelOpen}
                            leftPanel={(
                                <Layout.Panel
                                    side='left'
                                    background='grey'
                                    open={this.state.leftPanelOpen}
                                    size='x-small'
                                >
                                    <Layout.PanelHeader
                                        title='Left Panel title'
                                        onClose={() => this.setState({'leftPanelOpen': false})}
                                    />
                                    <Layout.PanelContent>
                                        <EmptyState
                                            title={'No content yet'} 
                                            description={'Please come later.'} 
                                            size='small' 
                                            illustration="1"
                                        />
                                    </Layout.PanelContent>
                                </Layout.Panel>
                            )}
                            rightPanelOpen={this.state.rightPanelOpen}
                            rightPanel={(
                                <Layout.Panel
                                    side='right'
                                    open={this.state.rightPanelOpen}
                                    size='x-small'
                                >
                                    <Layout.PanelHeader
                                        title='Right Panel title'
                                        onClose={() => this.setState({'rightPanelOpen': false})}
                                    />
                                    <Layout.PanelContent>
                                        <Layout.PanelContentBlock>
                                            <p className='mb-2'>
                                                Preview of the items in the main panel would go here.
                                            </p>
                                            <p>
                                                Maecenas sed diam eget risus varius blandit sit amet non magna.
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            </p>
                                        </Layout.PanelContentBlock>
                                    </Layout.PanelContent>
                                </Layout.Panel>
                            )}
                            main={(
                                <BoxedList>
                                    <BoxedListItem
                                        alignVertical='center'
                                        clickable={true}
                                        density='compact'
                                        selected={this.state.rightPanelOpen}
                                        onClick={() => this.setState({rightPanelOpen: !this.state.rightPanelOpen})}
                                        actions={(
                                            <IconButton
                                                icon="dots-vertical"
                                                size='small'
                                                ariaValue="More actions"
                                                onClick={()=> false}
                                            />
                                        )}
                                    >
                                        <Container gap='small' >
                                            <Label style='translucent' text='Published' type='success' />
                                            <span>Click to open the right panel</span>
                                        </Container>
                                    </BoxedListItem>
                                    <BoxedListItem
                                        alignVertical='center'
                                        clickable={true}
                                        density='compact'
                                        selected={false}
                                        onClick={()=> false}
                                        actions={(
                                            <IconButton
                                                icon="dots-vertical"
                                                size='small'
                                                ariaValue="More actions"
                                                onClick={()=> false}
                                            />
                                        )}
                                    >
                                        <Container gap='small' >
                                            <Label style='translucent' text='In progress' type='warning' />
                                            <span>Parturient pellentesque aenean commodo</span>
                                        </Container>
                                    </BoxedListItem>
                                    <BoxedListItem
                                        alignVertical='center'
                                        clickable={true}
                                        density='compact'
                                        selected={false}
                                        onClick={()=> false}
                                        actions={(
                                            <IconButton
                                                icon="dots-vertical"
                                                size='small'
                                                ariaValue="More actions"
                                                onClick={()=> false}
                                            />
                                        )}
                                    >
                                        <Container gap='small' >
                                            <Label style='translucent' text='Canceled' type='alert' />
                                            <span>Lorem fringilla malesuada cursus</span>
                                        </Container>
                                    </BoxedListItem>
                                </BoxedList>
                            )}
                        />   
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>


                {/* <h3 className="docs-page__h3">Props</h3>
                <PropsList>
                    <Prop name='size' isRequired={false} type='x-small | small | medium | large' default='small' description='Specifies the size of the items in the grid. '/>
                    <Prop name='gap' isRequired={false} type='small | medium | large | x-large' default='small' description='Defines the gap between the items inside the Grid list. '/>
                    <Prop name='margin' isRequired={false} type='0 | 1 | 2 | 3' default='3' description='Defines the margin around the Grid list. The values are based on multipliers of the the $sd-base-increment (equal to 8px). Setting the value to 3 results in a margin of 24px.'/>
                </PropsList> */}

            </section>
        )
    }
}

export { ThreePaneLayoutPattern };