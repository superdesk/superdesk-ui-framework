import * as React from 'react';
import * as Markup from '../../js/react';
import { SimpleList, SimpleListItem, Label, Icon, IconButton, ButtonGroup, Text, Prop, PropsList } from '../../../app-typescript';

export default class SimpleListDoc extends React.Component {
    render() {
        return (
            <section className='docs-page__container'>
                <h2 className='docs-page__h2'>SimpleList</h2>
                
                <Markup.ReactMarkupCodePreview>{`
                    <SimpleList>
                        <SimpleListItem>...</SimpleListItem> 
                    </SimpleList>
                `}
                </Markup.ReactMarkupCodePreview>

                <p className="docs-page__paragraph">...</p>

                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <p className="docs-page__paragraph">// no border / compact (default)</p>
                        <SimpleList>
                            <SimpleListItem>Maecenas sed diam eget risus varius blandit sit amet non magna.</SimpleListItem>
                            <SimpleListItem>Donec sed odio dui.</SimpleListItem>
                            <SimpleListItem>Etiam porta sem malesuada magna mollis euismod.</SimpleListItem>
                            <SimpleListItem>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</SimpleListItem>
                        </SimpleList>
                        <p className="docs-page__paragraph">// border / space-between</p>
                        <SimpleList border={true}>
                            <SimpleListItem justify="space-between">
                                Vehicula Ridiculus <Label text='Active' type='success' style='translucent'/>
                            </SimpleListItem>
                            <SimpleListItem justify="space-between">
                                Tellus Mollis Aenean <Label text='Pending' type='warning' style='translucent'/>
                            </SimpleListItem>
                            <SimpleListItem justify="space-between">
                                Elit Vestibulum <Label text='Closed' type='alert' style='translucent'/>
                            </SimpleListItem>
                        </SimpleList>
                        <p className="docs-page__paragraph">// border / comfortable</p>
                        <SimpleList border={true} density='comfortable'>
                            <SimpleListItem>
                                <Icon name='photo' />
                                <Text weight='medium'>Adipiscing</Text>
                                <Text color='light'>Tellus Dolor Amet</Text>
                                <ButtonGroup align='end'>
                                    <IconButton icon='pencil' ariaValue="Edit" onClick={()=> false}  />
                                    <IconButton icon='trash' ariaValue="Delete" onClick={()=> false}  />
                                </ButtonGroup>
                            </SimpleListItem>
                            <SimpleListItem>
                                <Icon name='video' />
                                <Text weight='medium'>Condimentum</Text>
                                <Text color='light'>Nullam Ridiculus Mattis</Text>
                                <ButtonGroup align='end'>
                                    <IconButton icon='pencil' ariaValue="Edit" onClick={()=> false}  />
                                    <IconButton icon='trash' ariaValue="Delete" onClick={()=> false}  />
                                </ButtonGroup>
                            </SimpleListItem>
                            <SimpleListItem>
                                <Icon name='slideshow' />
                                <Text weight='medium'>Magna Bibendum</Text>
                                <Text color='light'>Vehicula Ornare Cras Aenean</Text>
                                <ButtonGroup align='end'>
                                    <IconButton icon='pencil' ariaValue="Edit" onClick={()=> false}  />
                                    <IconButton icon='trash' ariaValue="Delete" onClick={()=> false}  />
                                </ButtonGroup>
                            </SimpleListItem>
                        </SimpleList>


                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        // no border / compact (default)
                        <SimpleList>
                            <SimpleListItem>Maecenas sed diam eget risus varius blandit sit amet non magna.</SimpleListItem>
                            <SimpleListItem>Donec sed odio dui.</SimpleListItem>
                            <SimpleListItem>Etiam porta sem malesuada magna mollis euismod.</SimpleListItem>
                            <SimpleListItem>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</SimpleListItem>
                        </SimpleList>

                        // border / space-between
                        <SimpleList border={true}>
                            <SimpleListItem justify="space-between">
                                Vehicula Ridiculus <Label text='Active' type='success' style='translucent'/>
                            </SimpleListItem>
                            <SimpleListItem justify="space-between">
                                Tellus Mollis Aenean <Label text='Pending' type='warning' style='translucent'/>
                            </SimpleListItem>
                            <SimpleListItem justify="space-between">
                                Elit Vestibulum <Label text='Closed' type='alert' style='translucent'/>
                            </SimpleListItem>
                        </SimpleList>

                        // border / comfortable
                        <SimpleList border={true} density='comfortable'>
                            <SimpleListItem>
                                <Icon name='photo' />
                                <Text weight='medium'>Adipiscing</Text>
                                <Text color='light'>Tellus Dolor Amet</Text>
                                <ButtonGroup align='end'>
                                    <IconButton icon='pencil' ariaValue="Edit" onClick={()=> false}  />
                                    <IconButton icon='trash' ariaValue="Delete" onClick={()=> false}  />
                                </ButtonGroup>
                            </SimpleListItem>
                            <SimpleListItem>
                                <Icon name='video' />
                                <Text weight='medium'>Condimentum</Text>
                                <Text color='light'>Nullam Ridiculus Mattis</Text>
                                <ButtonGroup align='end'>
                                    <IconButton icon='pencil' ariaValue="Edit" onClick={()=> false}  />
                                    <IconButton icon='trash' ariaValue="Delete" onClick={()=> false}  />
                                </ButtonGroup>
                            </SimpleListItem>
                            <SimpleListItem>
                                <Icon name='slideshow' />
                                <Text weight='medium'>Magna Bibendum</Text>
                                <Text color='light'>Vehicula Ornare Cras Aenean</Text>
                                <ButtonGroup align='end'>
                                    <IconButton icon='pencil' ariaValue="Edit" onClick={()=> false}  />
                                    <IconButton icon='trash' ariaValue="Delete" onClick={()=> false}  />
                                </ButtonGroup>
                            </SimpleListItem>
                        </SimpleList>     
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>


                <h3 className="docs-page__h3">Props</h3>
                <p className="docs-page__paragraph">SimpleList</p>
                <PropsList>
                    <Prop name='density' isRequired={false} type='compact | comfortable | loose' default='compact' description='Specifies the vertical padding inside the list items. '/>
                    <Prop name='width' isRequired={false} type='none | x-small | small | medium | large' default='none' description='Defines the width of the list. If not specified the list will take the full width of the parent container.'/>
                    <Prop name='border' isRequired={false} type='boolean' default='false' description='Adds a dotted border on top of the list and between list items.'/>
                    <Prop name='className' isRequired={false} type='string' default='false' description='Add custom or helper classes to the list to modify the behaviour (e.g. top or bootom margins).'/>
                </PropsList>
                <p className="docs-page__paragraph">SimpleListItem</p>
                <PropsList>
                    <Prop name='stacked' isRequired={false} type='boolean' default='false' description='Changes the flex-direction from row to column.'/>
                    <Prop name='justify' isRequired={false} type='flex-start | flex-end | center | space-between' default='flex-start' description='Changes the flex justification of the elements inside the list item. '/>
                </PropsList>

            </section>
        )
    }
}
