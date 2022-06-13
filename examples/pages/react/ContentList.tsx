import * as React from 'react';
import * as Markup from '../../js/react';
import { BoxedList, BoxedListItem, BoxedListContentRow, Prop, PropsList, Icon, IconButton, AvatarWrapper, AvatarContentText, ButtonGroup, Button, Heading, Text, Label, Container, IconLabel } from '../../../app-typescript';
import { TableList, TableListItem } from '../../../app-typescript/components/Lists/TableList';

export default class ContentListDoc extends React.Component {
    render() {
        return (
            <section className='docs-page__container'>
                <h2 className='docs-page__h2'>BoxedList</h2>
                
                <Markup.ReactMarkupCodePreview>{`
                    <BoxedList>
                        <BoxedListItem>...</BoxedListItem> 
                    </BoxedList>
                `}
                </Markup.ReactMarkupCodePreview>

                <p className="docs-page__paragraph">...</p>

                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <p className="docs-page__paragraph">// basic</p>

                        <TableList>

                            <TableListItem
                            start={() => {
                                return  <>
                                            <Label style='translucent' text='aacc' />
                                            <Label style='translucent' type='primary' text='prlg' />
                                        </>
                            }}
                            center={() => {
                                return <span>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</span>
                            }}
                            end={() => {
                                return <IconLabel style='translucent' text='Label success' type='success' icon='time' />
                            }}
                            action={() => {
                                return <IconButton icon='dots-vertical' size='small' ariaValue='More actions' onClick={()=> false} />
                            }}
                            />

                            <TableListItem
                            start={() => {
                                return  <>
                                            <Label style='hollow' text='aacc' />
                                            <Label style='filled' type='primary' text='prlg' />
                                        </>
                            }}
                            center={() => {
                                return <span>Nullam id dolor id nibh ultricies vehicula ut id elit.</span>
                            }}
                            end={() => {
                                return <IconLabel style='translucent' text='Label success' type='success' icon='time' />
                            }}
                            />

                            <TableListItem
                            start={() => {
                                return  <>
                                            <Label style='translucent' text='aacc' />
                                            <Label style='translucent' type='primary' text='prlg' />
                                        </>
                            }}
                            center={() => {
                                return <span>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</span>
                            }}
                            end={() => {
                                return <IconLabel style='translucent' text='Label success' type='success' icon='time' />
                            }}
                            />

                        </TableList>

                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">Props</h3>
                <p className="docs-page__paragraph">BoxedList</p>
                <PropsList>
                    <Prop name='density' isRequired={false} type='compact | comfortable' default='compact' description='Increase the gap beetween list items.'/>
                </PropsList>
                <p className="docs-page__paragraph">BoxedListItem</p>
                <PropsList>
                    <Prop name='clickable' isRequired={false} type='boolean' default='false' description='Adds hover effect and changes the cursor to poiter.'/>
                    <Prop name='selected' isRequired={false} type='boolean' default='false' description='Changes the state to selected and adds apropriate styling for it.'/>
                    <Prop name='slideInActions' isRequired={false} type='boolean' default='false' description='If set to true, the action buttons will be hidden and slide in from the right on hover.'/>
                    <Prop name='type' isRequired={false} type='default | primary | success | warning | alert | highlight' default='/' description='Adds a clour coded border on the right, based on the selected type.'/>
                </PropsList>

            </section>
        )
    }
}
