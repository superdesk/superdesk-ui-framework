import * as React from 'react';
import * as Markup from '../../js/react';
import { BoxedList, BoxedListItem, BoxedListContentRow, Prop, PropsList, Icon, IconButton, AvatarWrapper, AvatarContentText, ButtonGroup, Button, Heading, Text, Label, Container } from '../../../app-typescript';

export default class BoxedListDoc extends React.Component {
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

                        <BoxedList>
                            <BoxedListItem>None, nulla vitae elit libero, a pharetra augue.</BoxedListItem>
                            <BoxedListItem type='default'>Default. Nulla vitae elit libero, a pharetra augue.</BoxedListItem>
                            <BoxedListItem type='success'>Succes, donec sed odio dui.</BoxedListItem>
                            <BoxedListItem type='warning'>Warning, maecenas sed diam eget risus varius.</BoxedListItem>
                            <BoxedListItem type='alert'>Alert. Nullam quis risus eget urna mollis ornare vel eu leo.</BoxedListItem>
                            <BoxedListItem type='highlight'>Highlight type, cras mattis consectetur purus sit amet fermentum.</BoxedListItem>
                        </BoxedList>

                        <p className="docs-page__paragraph">// clickable, with media and actions</p>

                        <BoxedList>
                            <BoxedListItem
                                type="success"
                                clickable={true} 
                                media={(
                                    <Icon name='slideshow'  />
                                )}
                                actions={(
                                    <IconButton icon="dots-vertical" ariaValue="More actions" onClick={()=> false} />
                                )}
                                >
                                <BoxedListContentRow>
                                    Maecenas sed diam eget risus varius blandit sit amet non magna. Vestibulum id ligula
                                    porta felis euismod semper. Cras mattis consectetur purus sit amet fermentum. Curabitur
                                    blandit tempus porttitor. Cum sociis natoque penatibus et magnis dis parturient montes,
                                    nascetur ridiculus mus. Cras mattis consectetur purus sit amet fermentum.
                                </BoxedListContentRow>
                            </BoxedListItem>
                            <BoxedListItem
                                type="primary"
                                clickable={true} 
                                media={(
                                    <AvatarWrapper size="medium">
                                        <AvatarContentText text="JL" tooltipText="Jeffrey Lebowski" />
                                    </AvatarWrapper>
                                )}
                                actions={(
                                    <IconButton icon="dots-vertical" ariaValue="More actions" onClick={()=> false} />
                                )}
                                >
                                <BoxedListContentRow>
                                    Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel scelerisque
                                    nisl consectetur et. Donec ullamcorper nulla non metus auctor fringilla. Donec sed odio dui. Nulla
                                    vitae elit libero, a pharetra augue. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                                </BoxedListContentRow>
                            </BoxedListItem>
                            <BoxedListItem
                                type="alert"
                                selected={true}
                                media={(
                                    <AvatarWrapper size="medium">
                                        <AvatarContentText text="WS" tooltipText="Walter Sobchak" />
                                    </AvatarWrapper>
                                )}
                                actions={(
                                    <IconButton icon="dots-vertical" ariaValue="More actions" onClick={()=> false} />
                                )}
                                >
                                <BoxedListContentRow>
                                    Nullam id dolor id nibh ultricies vehicula ut id elit. Vestibulum id ligula porta felis euismod semper.
                                    Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Nullam
                                    id dolor id nibh ultricies vehicula ut id elit. Vestibulum id ligula porta felis euismod semper. Duis mollis,
                                    est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
                                </BoxedListContentRow>
                            </BoxedListItem>
                        </BoxedList>

                        <p className="docs-page__paragraph">// with footer + different layout options.</p>

                        <BoxedList>
                            <BoxedListItem
                                type="warning"
                                clickable={true} 
                                media={(
                                    <Icon name='calendar-list'  />
                                )}
                                actions={(
                                    <IconButton icon="dots-vertical" ariaValue="More actions" onClick={()=> false} />
                                )}
                                >
                                <BoxedListContentRow>
                                    Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Integer posuere erat a ante venenatis
                                    dapibus posuere velit aliquet. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna
                                    mollis euismod. Aenean lacinia bibendum nulla sed consectetur. Aenean eu leo quam. Pellentesque ornare sem
                                    lacinia quam venenatis vestibulum.
                                </BoxedListContentRow>
                            </BoxedListItem>
                            <BoxedListItem
                                type="primary"
                                clickable={true} 
                                media={(
                                    <AvatarWrapper size="medium">
                                        <AvatarContentText text="JC" tooltipText="Joel Coen" />
                                    </AvatarWrapper>
                                )}
                                footer={(
                                    <ButtonGroup align='end'>
                                        <Button size='small' style='hollow' text='Decline' onClick={()=> false} />
                                        <Button size='small' style='hollow' type='primary' text='Accept' onClick={()=> false} />
                                    </ButtonGroup>
                                )}
                                >
                                <Heading className='sd-margin-b--1' type='h5'>Amet Mollis Porta</Heading>
                                <BoxedListContentRow>
                                    Nullam id dolor id nibh ultricies vehicula ut id elit. Nullam id dolor id nibh ultricies vehicula ut id elit.
                                    Sed posuere consectetur est at lobortis. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id ligula porta felis euismod semper.
                                    Cras mattis consectetur purus sit amet fermentum.
                                </BoxedListContentRow>
                            </BoxedListItem>
                            <BoxedListItem
                                type="success"
                                clickable={true} 
                                media={(
                                    <AvatarWrapper size="medium">
                                        <AvatarContentText text="EC" tooltipText="Ethan Coen" />
                                    </AvatarWrapper>
                                )}
                                actions={(
                                    <React.Fragment>
                                        <IconButton icon="pencil" ariaValue="Edit" onClick={()=> false} />
                                        <IconButton icon="trash" ariaValue="Delete" onClick={()=> false} />
                                    </React.Fragment>
                                )}
                                >
                                <BoxedListContentRow>
                                    Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                                    Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
                                    Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                                </BoxedListContentRow>
                                <BoxedListContentRow>
                                    <Label type='success' text='In progress' style='translucent' />
                                </BoxedListContentRow>
                            </BoxedListItem>
                            <BoxedListItem
                                type="warning"
                                clickable={true} 
                                media={(
                                    <AvatarWrapper size="medium">
                                        <AvatarContentText text="BL" tooltipText="Bunny Lebowski" />
                                    </AvatarWrapper>
                                )}
                                actions={(
                                    <IconButton icon="pencil" ariaValue="Edit" onClick={()=> false} />
                                )}
                                footer={(
                                    <ButtonGroup align='end'>
                                        <Button size='small' style='hollow' text='Decline' onClick={()=> false} />
                                        <Button size='small' style='hollow' type='primary' text='Accept' onClick={()=> false} />
                                    </ButtonGroup>
                                )}
                                >
                                <BoxedListContentRow>
                                    <Heading className='sd-margin-e--auto' align='start' type='h4'>Dolor Bibenduma</Heading>
                                    <Text align='end' color='light'>23.12.2021</Text>
                                </BoxedListContentRow>
                                <BoxedListContentRow>
                                    <Text>
                                        Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean eu leo quam. Pellentesque ornare sem lacinia quam
                                        venenatis vestibulum. Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo.
                                    </Text>
                                </BoxedListContentRow>
                            </BoxedListItem>
                        </BoxedList>

                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        // basic

                        <BoxedList>
                            <BoxedListItem>None, nulla vitae elit libero, a pharetra augue.</BoxedListItem>
                            <BoxedListItem type='default'>Default. Nulla vitae elit libero, a pharetra augue.</BoxedListItem>
                            <BoxedListItem type='success'>Succes, donec sed odio dui.</BoxedListItem>
                            <BoxedListItem type='warning'>Warning, maecenas sed diam eget risus varius.</BoxedListItem>
                            <BoxedListItem type='alert'>Alert. Nullam quis risus eget urna mollis ornare vel eu leo.</BoxedListItem>
                            <BoxedListItem type='highlight'>Highlight type, cras mattis consectetur purus sit amet fermentum.</BoxedListItem>
                        </BoxedList>

                        // clickable, with media and actions

                        <BoxedList>
                            <BoxedListItem
                                type="success"
                                clickable={true} 
                                media={(
                                    <Icon name='slideshow'  />
                                )}
                                actions={(
                                    <IconButton icon="dots-vertical" ariaValue="More actions" onClick={()=> false} />
                                )}
                                >
                                <BoxedListContentRow>
                                    Maecenas sed diam eget risus varius blandit sit amet...
                                </BoxedListContentRow>
                            </BoxedListItem>
                            <BoxedListItem
                                type="primary"
                                clickable={true} 
                                media={(
                                    <AvatarWrapper size="medium">
                                        <AvatarContentText text="JL" tooltipText="Jeffrey Lebowski" />
                                    </AvatarWrapper>
                                )}
                                actions={(
                                    <IconButton icon="dots-vertical" ariaValue="More actions" onClick={()=> false} />
                                )}
                                >
                                <BoxedListContentRow>
                                    Cras mattis consectetur purus sit amet fermentum...
                                </BoxedListContentRow>
                            </BoxedListItem>
                            <BoxedListItem
                                type="alert"
                                selected={true}
                                media={(
                                    <AvatarWrapper size="medium">
                                        <AvatarContentText text="WS" tooltipText="Walter Sobchak" />
                                    </AvatarWrapper>
                                )}
                                actions={(
                                    <IconButton icon="dots-vertical" ariaValue="More actions" onClick={()=> false} />
                                )}
                                >
                                <BoxedListContentRow>
                                    Nullam id dolor id nibh ultricies vehicula ut id elit...
                                </BoxedListContentRow>
                            </BoxedListItem>
                        </BoxedList>

                        // with footer + different layout options.

                        <BoxedList>
                            <BoxedListItem
                                type="warning"
                                clickable={true} 
                                media={(
                                    <Icon name='calendar-list'  />
                                )}
                                actions={(
                                    <IconButton icon="dots-vertical" ariaValue="More actions" onClick={()=> false} />
                                )}
                                >
                                <BoxedListContentRow>
                                    Vivamus sagittis lacus vel augue laoreet rutrum...
                                </BoxedListContentRow>
                            </BoxedListItem>
                            <BoxedListItem
                                type="primary"
                                clickable={true} 
                                media={(
                                    <AvatarWrapper size="medium">
                                        <AvatarContentText text="JC" tooltipText="Joel Coen" />
                                    </AvatarWrapper>
                                )}
                                footer={(
                                    <ButtonGroup align='end'>
                                        <Button size='small' style='hollow' text='Decline' onClick={()=> false} />
                                        <Button size='small' style='hollow' type='primary' text='Accept' onClick={()=> false} />
                                    </ButtonGroup>
                                )}
                                >
                                <Heading className='sd-margin-b--1' type='h5'>Amet Mollis Porta</Heading>
                                <BoxedListContentRow>
                                    Nullam id dolor id nibh ultricies vehicula...
                                </BoxedListContentRow>
                            </BoxedListItem>
                            <BoxedListItem
                                type="success"
                                clickable={true} 
                                media={(
                                    <AvatarWrapper size="medium">
                                        <AvatarContentText text="EC" tooltipText="Ethan Coen" />
                                    </AvatarWrapper>
                                )}
                                actions={(
                                    <React.Fragment>
                                        <IconButton icon="pencil" ariaValue="Edit" onClick={()=> false} />
                                        <IconButton icon="trash" ariaValue="Delete" onClick={()=> false} />
                                    </React.Fragment>
                                )}
                                >
                                <BoxedListContentRow>
                                    Cras mattis consectetur...
                                </BoxedListContentRow>
                                <BoxedListContentRow>
                                    <Label type='success' text='In progress' style='translucent' />
                                </BoxedListContentRow>
                            </BoxedListItem>
                            <BoxedListItem
                                type="warning"
                                clickable={true} 
                                media={(
                                    <AvatarWrapper size="medium">
                                        <AvatarContentText text="BL" tooltipText="Bunny Lebowski" />
                                    </AvatarWrapper>
                                )}
                                actions={(
                                    <IconButton icon="pencil" ariaValue="Edit" onClick={()=> false} />
                                )}
                                footer={(
                                    <ButtonGroup align='end'>
                                        <Button size='small' style='hollow' text='Decline' onClick={()=> false} />
                                        <Button size='small' style='hollow' type='primary' text='Accept' onClick={()=> false} />
                                    </ButtonGroup>
                                )}
                                >
                                <BoxedListContentRow>
                                    <Heading className='sd-margin-e--auto' align='start' type='h4'>Dolor Bibenduma</Heading>
                                    <Text align='end' color='light'>23.12.2021</Text>
                                </BoxedListContentRow>
                                <BoxedListContentRow>
                                    <Text>
                                        Cras justo odio, dapibus ac facilisis in...
                                    </Text>
                                </BoxedListContentRow>
                            </BoxedListItem>
                        </BoxedList>     
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
