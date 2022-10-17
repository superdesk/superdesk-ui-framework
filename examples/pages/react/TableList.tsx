import * as React from 'react';
import * as Markup from '../../js/react';
import { BoxedList, BoxedListItem, BoxedListContentRow, Prop, PropsList, Icon, IconButton, AvatarWrapper, AvatarContentText, ButtonGroup, Button, Heading, Text, Label, Container, IconLabel, SelectGrid, Dropdown, Tooltip } from '../../../app-typescript';
import { TableList, TableListItem } from '../../../app-typescript/components/Lists/TableList';

interface IState {
    array: any;
    itemsDropdown: any;
}

interface IProps {
    array: any;
}

export default class TableListDoc extends React.Component<IProps, IState> {
    constructor(props: IState) {
        super(props);
        this.state = {                             
            itemsDropdown: [
                { label: <Label style='translucent' type='primary' text='aacc' />, onSelect: () => console.log('a')
                },
                { label: <Label style='translucent' text='prlg' />, onSelect: () => 1 },
                { label: <Label style='translucent' type='primary' text='prlg' />, onSelect: () => 1 },
            ],
            array: [
                {
                    start: <>
                        <Label style='translucent' text='aacc' />
                        <Label style='translucent' type='primary' text='prlg' />
                    </>,
                    center: <span>Item 1</span>,
                    end: <IconLabel style='translucent' text='Label success' type='success' icon='time' />,
                    action: <Dropdown append={true} items={[
                        { label: <Label style='translucent' type='primary' text='aacc' />, onSelect: () => 1 },
                        { label: <Label style='translucent' text='prlg' />, onSelect: () => 1 },
                        { label: <Label style='translucent' type='primary' text='prlg' />, onSelect: () => 1 },
                    ]}><IconButton icon='dots-vertical' size='small' ariaValue='More actions' onClick={(e) => e.stopPropagation()} /></Dropdown>,
                    onClick: () => console.log('single'),
                    onDoubleClick: () => console.log('double'),
                    hexColor: '#ccff00'
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
                    itemsDropdown={(index) => [
                        { label: <Label style='translucent' type='primary' text='aacc' />, onSelect: () => console.log(index) },
                        { label: <Label style='translucent' text='prlg' />, onSelect: () => console.log(index) },
                        { label: <Label style='translucent' type='primary' text='prlg' />, onSelect: () => console.log(index) },
                    ]} />
                `}
                </Markup.ReactMarkupCodePreview>

                <p className="docs-page__paragraph">With drag and drop functionality:</p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <TableList
                            dragAndDrop
                            addItem
                            array={this.state.array}
                            itemsDropdown={(index) => [
                                    { label: <Label style='translucent' type='primary' text='aacc' />, onSelect: () => console.log(index) },
                                    { label: <Label style='translucent' text='prlg' />, onSelect: () => console.log(index) },
                                    { label: <Label style='translucent' type='primary' text='prlg' />, onSelect: () => console.log(index) },
                                ]
                            }
                            onDrag={(start, end) => console.log(start, end)}
                        />
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        <TableList
                        dragAndDrop
                        addItem
                        array={this.state.array}
                        itemsDropdown={(index) => [
                                { label: <Label style='translucent' type='primary' text='aacc' />, onSelect: () => console.log(index) },
                                { label: <Label style='translucent' text='prlg' />, onSelect: () => console.log(index) },
                                { label: <Label style='translucent' type='primary' text='prlg' />, onSelect: () => console.log(index) },
                            ]
                        }
                        onDrag={(start, end) => console.log(start, end)}
                        />
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">Props</h3>
                <p className="docs-page__paragraph">TableList</p>
                <PropsList>
                    <Prop name='array' isRequired={true} type='Array' default='false' description='Array of object.' />
                    <Prop name='addItem' isRequired={false} type='boolean' default='false' description='Functionality to add items to the list.' />
                    <Prop name='dragAndDrop' isRequired={false} type='boolean' default='false' description='Drag&Drop functionality.' />
                    <Prop name='className' isRequired={false} type='string' default='false' description='Add class on TableList container.' />
                    <Prop name='showDragHandle' isRequired={false} type='string' default='always' description='"always" | "onHover" | "none".' />
                    <Prop name='readOnly' isRequired={false} type='boolean' default='false' description='When specified, component changes are not enabled.' />
                    <Prop name='onDrag' isRequired={false} type='function' default='false' description='Returns start and end position of draggable item' />
                    <Prop name='onAddItem' isRequired={false} type='function' default='false' description='Returns index of draggable item.' />
                    <Prop name='itemsDropdown' isRequired={false} type='function' default='false' description='Dropdown for adding items in the list. Returns index of draggable item.' />
                </PropsList>
                <p className="docs-page__paragraph">array:</p>
                <PropsList>
                    <Prop name='start' isRequired={false} type='React.ReactNode' default='false' description='Column of individual items of list.' />
                    <Prop name='center' isRequired={false} type='React.ReactNode' default='false' description='Column of individual items of list.' />
                    <Prop name='end' isRequired={false} type='React.ReactNode' default='false' description='Column of individual items of list.' />
                    <Prop name='action' isRequired={false} type='React.ReactNode' default='false' description='Column of individual list items that is displayed on hover.' />
                    <Prop name='hexColor' isRequired={false} type='string' default='false' description='' />
                    <Prop name='onClick' isRequired={false} type='function' default='false' description='onClick functionality.' />
                    <Prop name='onDoubleClick' isRequired={false} type='function' default='false' description='onDoubleClick functionality.' />
                </PropsList>
                

            </section>
        )
    }
}
