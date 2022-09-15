import * as React from 'react';
import * as Markup from '../../js/react';
import { BoxedList, BoxedListItem, BoxedListContentRow, Prop, PropsList, Icon, IconButton, AvatarWrapper, AvatarContentText, ButtonGroup, Button, Heading, Text, Label, Container, IconLabel, SelectGrid, Dropdown } from '../../../app-typescript';
import { TableList, TableListItem } from '../../../app-typescript/components/Lists/TableList';

interface IState {
    array: any;
}

interface IProps {
    array: any;
}

export default class TableListDoc extends React.Component<IProps, IState> {
    constructor(props: IState) {
        super(props);
        this.state = {
            array: [
                {
                    start: <>
                        <Label style='translucent' text='aacc' />
                        <Label style='translucent' type='primary' text='prlg' />
                    </>,
                    center: <span>Item 1</span>,
                    end: <IconLabel style='translucent' text='Label success' type='success' icon='time' />,
                    action: <IconButton icon='dots-vertical' size='small' ariaValue='More actions' onClick={() => false} />,
                    onClick: () => {
                        return false;
                    }
                },
                {
                    start: <>
                        <Label style='translucent' text='aacc' />
                        <Label style='translucent' type='primary' text='prlg' />
                    </>,
                    center: <span>Item 2</span>,
                    end: <IconLabel style='translucent' text='Label success' type='success' icon='time' />,
                    action: <IconButton icon='dots-vertical' size='small' ariaValue='More actions' onClick={() => false} />,
                    onClick: () => {
                        return false;
                    }
                },
                {
                    start: <>
                        <Label style='translucent' text='aacc' />
                        <Label style='translucent' type='primary' text='prlg' />
                    </>,
                    center: <span>Item 3</span>,
                    end: <IconLabel style='translucent' text='Label success' type='success' icon='time' />,
                    action: <IconButton icon='dots-vertical' size='small' ariaValue='More actions' onClick={() => false} />,
                    onClick: () => {
                        return false;
                    }
                },
            ]
        }

    }

    render() {
        return (
            <section className='docs-page__container'>
                <h2 className='docs-page__h2'>TableList</h2>

                <Markup.ReactMarkupCodePreview>{`
                    <TableList
                    dragAndDrop
                    addItem
                    array={this.state.array}
                    itemsDropdown={[
                        { label: 'Action 1', onSelect: () => 1 },
                        { label: 'Action 2', onSelect: () => 1 },
                        { label: 'Action 3', onSelect: () => 1 },
                    ]} />
                `}
                </Markup.ReactMarkupCodePreview>

                <p className="docs-page__paragraph">Basic:</p>

                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>

                        <TableList>
                            <TableListItem
                                start={
                                    <>
                                        <Label style='translucent' text='aacc' />
                                        <Label style='translucent' type='primary' text='prlg' />
                                    </>
                                }
                                center={
                                    <span>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</span>
                                }
                                end={
                                    <IconLabel style='translucent' text='Label success' type='success' icon='time' />
                                }
                                action={
                                    <IconButton icon='dots-vertical' size='small' ariaValue='More actions' onClick={() => false} />
                                } />
                            <TableListItem
                                start={
                                    <>
                                        <Label style='hollow' text='aacc' />
                                        <Label style='filled' type='primary' text='prlg' />
                                    </>
                                }
                                center={
                                    <span>Nullam id dolor id nibh ultricies vehicula ut id elit.</span>
                                }
                                end={
                                    <IconLabel style='translucent' text='Label success' type='success' icon='time' />
                                } />
                            <TableListItem
                                start={
                                    <>
                                        <Label style='translucent' text='aacc' />
                                        <Label style='translucent' type='primary' text='prlg' />
                                    </>
                                }
                                center={
                                    <span>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</span>
                                }
                                end={
                                    <IconLabel style='translucent' text='Label success' type='success' icon='time' />
                                }
                                action={
                                    <IconButton icon='dots-vertical' size='small' ariaValue='More actions' onClick={() => false} />
                                } />
                        </TableList>

                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        <TableList>
                            <TableListItem
                            start={
                                <>
                                    <Label style='translucent' text='aacc' />
                                    <Label style='translucent' type='primary' text='prlg' />
                                </>
                            }
                            center={
                                <span>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</span>
                            }
                            end={
                                <IconLabel style='translucent' text='Label success' type='success' icon='time' />
                            }
                            action={
                                <IconButton icon='dots-vertical' size='small' ariaValue='More actions' onClick={()=> false} />
                            } />
                            <TableListItem
                            start={
                                <>
                                    <Label style='hollow' text='aacc' />
                                    <Label style='filled' type='primary' text='prlg' />
                                </>
                            }
                            center={
                                <span>Nullam id dolor id nibh ultricies vehicula ut id elit.</span>
                            }
                            end={
                                <IconLabel style='translucent' text='Label success' type='success' icon='time' />
                            } />
                            <TableListItem
                            start={
                                <>
                                    <Label style='translucent' text='aacc' />
                                    <Label style='translucent' type='primary' text='prlg' />
                                </>
                            }
                            center={
                                <span>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</span>
                            }
                            end={
                                <IconLabel style='translucent' text='Label success' type='success' icon='time' />
                            }
                            action={
                                <IconButton icon='dots-vertical' size='small' ariaValue='More actions' onClick={()=> false} />
                            } />
                        </TableList>
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>
                <p className="docs-page__paragraph">With drag and drop functionality:</p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>

                        <TableList
                            dragAndDrop
                            addItem
                            array={this.state.array}
                            itemsDropdown={[
                                { label: <Label style='translucent' type='primary' text='aacc' />, onSelect: () => 1 },
                                { label: <Label style='translucent' text='prlg' />, onSelect: () => 1 },
                                { label: <Label style='translucent' type='primary' text='prlg' />, onSelect: () => 1 },
                            ]}
                            onClick={() => false}
                            onDrag={(start, end) => console.log(start, end)}
                        />

                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        <TableList
                        dragAndDrop
                        addItem
                        array={this.state.array}
                        itemsDropdown={[
                            { label: <Label style='translucent' type='primary' text='aacc' />, onSelect: () => 1 },
                            { label: <Label style='translucent' text='prlg' />, onSelect: () => 1 },
                            { label: <Label style='translucent' type='primary' text='prlg' />, onSelect: () => 1 },
                        ]}
                        onClick={() => false}
                        />
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">Props</h3>
                <p className="docs-page__paragraph">TableList</p>
                <PropsList>
                    <Prop name='array' isRequired={false} type='Array' default='false' description='Array of object.' />
                    <Prop name='children' isRequired={false} type='React.ReactNode' default='false' description='Children of component.' />
                    <Prop name='addItem' isRequired={false} type='boolean' default='false' description='Functionality to add items to the list.' />
                    <Prop name='dragAndDrop' isRequired={false} type='boolean' default='false' description='Drag&Drop functionality.' />
                    <Prop name='itemsDropdown' isRequired={false} type='React.ReactNode | any' default='false' description='Dropdown for functionality to add items to the list.' />
                    <Prop name='className' isRequired={false} type='string' default='false' description='Add class on TableList container.' />
                    <Prop name='onClick' isRequired={false} type='function' default='false' description='onClick functionality.' />
                    <Prop name='onDrag' isRequired={false} type='function' default='false' description='Returns start and end position of draggable item' />
                </PropsList>
                <p className="docs-page__paragraph">array:</p>
                <PropsList>
                    <Prop name='start' isRequired={false} type='React.ReactNode' default='false' description='Column of individual items of list.' />
                    <Prop name='center' isRequired={false} type='React.ReactNode' default='false' description='Column of individual items of list.' />
                    <Prop name='end' isRequired={false} type='React.ReactNode' default='false' description='Column of individual items of list.' />
                    <Prop name='action' isRequired={false} type='React.ReactNode' default='false' description='Column of individual list items that is displayed on hover.' />
                </PropsList>
                <p className="docs-page__paragraph">TableListItem</p>
                <PropsList>
                    <Prop name='start' isRequired={false} type='React.ReactNode' default='false' description='Column of individual items of list.' />
                    <Prop name='center' isRequired={false} type='React.ReactNode' default='false' description='Column of individual items of list.' />
                    <Prop name='end' isRequired={false} type='React.ReactNode' default='false' description='Column of individual items of list.' />
                    <Prop name='action' isRequired={false} type='React.ReactNode' default='false' description='Column of individual list items that is displayed on hover.' />
                    <Prop name='onClick' isRequired={false} type='function' default='false' description='onClick functionality.' />
                </PropsList>

            </section>
        )
    }
}
