import * as React from 'react';
import * as Markup from '../../js/react';
import { BoxedList, BoxedListItem, BoxedListContentRow, Prop, PropsList, Icon, IconButton, AvatarWrapper, AvatarContentText, ButtonGroup, Button, Heading, Text, Label, Container, IconLabel } from '../../../app-typescript';
import { TableList, TableListItem } from '../../../app-typescript/components/Lists/TableList';
import { ContentList, ContentListItem } from '../../../app-typescript/components/Lists/ContentList';

export default class ContentListDoc extends React.Component {
    render() {
        return (
            <section className='docs-page__container'>
                <h2 className='docs-page__h2'>ContentList</h2>
                
                <Markup.ReactMarkupCodePreview>{`
                    <ContentList 
                    items: [...]
                    />
                `}
                </Markup.ReactMarkupCodePreview>

                <p className="docs-page__paragraph">...</p>

                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <p className="docs-page__paragraph">// basic</p>

                        <ContentList
                        items={[
                            {
                                itemColum: [
                                    {
                                        itemRow: [{content:<>
                                                    <i className="icon-rundown"></i>
                                                </>}],
                                        border: true
                                    },
                                    {
                                        itemRow: [
                                            {
                                                content:
                                                <>
                                                    <span className="sd-list-item__slugline">19:00 – 19:45</span>
                                                    <IconLabel style='translucent' innerLabel='Duration:' text='00:38' size='small' type='warning' />
                                                    <IconLabel style='translucent' innerLabel='Planned Duration:'text='00:45' size='small' />
                                                    <time className='sd-margin-s--auto' title="June 01, 2022 11:08 AM">11:08, 01.06.2022</time>
                                                </>
                                            },
                                            {
                                                content:
                                                <>
                                                    <Label text='Marker' color='blue--800'/>
                                                        <span className='sd-list-item__compound-text'>
                                                            <span className='sd-list-item__text-label'>Template:</span>
                                                            <span>Marker Daily</span>
                                                        </span>
                                                        <span className="sd-overflow-ellipsis sd-list-item--element-grow sd-list-item__headline">Marker // 01.06.2022</span>    
                                                    <Label style='translucent' text='In Progress' type='warning' />
                                                </>
                                            },
                                        ],
                                        fullwidth: true,
                                    }
                                ],
                                action: <IconButton icon='dots-vertical' ariaValue='More actions' onClick={()=> false} />,
                                loading: true,
                            },
                            {
                                itemColum: [
                                    {
                                        itemRow: [{content:<>
                                                    <i className="icon-rundown"></i>
                                                </>}], 
                                        border: true
                                    },
                                    {
                                        itemRow: [
                                            {
                                                content: 
                                                <>
                                                    <span className="sd-list-item__slugline">19:00 – 19:45</span>
                                                    <IconLabel style='translucent' innerLabel='Duration:' text='00:38' size='small' type='warning' />
                                                    <IconLabel style='translucent' innerLabel='Planned Duration:'text='00:45' size='small' />
                                                    <time className='sd-margin-s--auto' title="June 01, 2022 11:08 AM">11:08, 01.06.2022</time>
                                                </>
                                            },
                                            {
                                                content: 
                                                <>
                                                    <Label text='Marker' color='blue--800'/>
                                                        <span className='sd-list-item__compound-text'>
                                                            <span className='sd-list-item__text-label'>Template:</span>
                                                            <span>Marker Daily</span>
                                                        </span>
                                                        <span className="sd-overflow-ellipsis sd-list-item--element-grow sd-list-item__headline">Marker // 01.06.2022</span>    
                                                    <Label style='translucent' text='In Progress' type='warning' />
                                                </>
                                            },
                                        ],
                                        fullwidth: true,
                                    }
                                ],
                                locked: true,
                                action: <IconButton icon='dots-vertical' ariaValue='More actions' onClick={()=> false} />,
                            },
                            {
                                itemColum: [
                                    {
                                        itemRow: [{content:<>
                                                    <i className="icon-rundown"></i>
                                                </>}],
                                        border: true
                                    },
                                    {
                                        itemRow: [
                                            {
                                                content:
                                                <>
                                                    <span className="sd-list-item__slugline">19:00 – 19:45</span>
                                                    <IconLabel style='translucent' innerLabel='Duration:' text='00:38' size='small' type='warning' />
                                                    <IconLabel style='translucent' innerLabel='Planned Duration:'text='00:45' size='small' />
                                                    <time className='sd-margin-s--auto' title="June 01, 2022 11:08 AM">11:08, 01.06.2022</time>
                                                </>
                                            },
                                            {
                                                content:
                                                <>
                                                    <Label text='Marker' color='blue--800'/>
                                                        <span className='sd-list-item__compound-text'>
                                                            <span className='sd-list-item__text-label'>Template:</span>
                                                            <span>Marker Daily</span>
                                                        </span>
                                                        <span className="sd-overflow-ellipsis sd-list-item--element-grow sd-list-item__headline">Marker // 01.06.2022</span>    
                                                    <Label style='translucent' text='In Progress' type='warning' />
                                                </>
                                            },
                                        ],
                                        fullwidth: true,
                                    }
                                ],
                                action: <IconButton icon='dots-vertical' ariaValue='More actions' onClick={()=> false} />,
                            },
                        ]} />

                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        <ContentList
                        items={[
                            {
                                itemColum: [
                                    {
                                        itemRow: [{content:<>
                                                            <i className="icon-rundown"></i>
                                                        </>}],   
                                        border: true
                                    },
                                    {
                                        itemRow: [
                                            {
                                                content: 
                                                <>
                                                    <span className="sd-list-item__slugline">19:00 – 19:45</span>
                                                    <IconLabel style='translucent' innerLabel='Duration:' text='00:38' size='small' type='warning' />
                                                    <IconLabel style='translucent' innerLabel='Planned Duration:'text='00:45' size='small' />
                                                    <time className='sd-margin-s--auto' title="June 01, 2022 11:08 AM">11:08, 01.06.2022</time>
                                                </>
                                            },
                                            {
                                                content: 
                                                <>
                                                    <Label text='Marker' color='blue--800'/>
                                                        <span className='sd-list-item__compound-text'>
                                                            <span className='sd-list-item__text-label'>Template:</span>
                                                            <span>Marker Daily</span>
                                                        </span>
                                                        <span className="sd-overflow-ellipsis sd-list-item--element-grow sd-list-item__headline">Marker // 01.06.2022</span>    
                                                    <Label style='translucent' text='In Progress' type='warning' />
                                                </>
                                            },
                                        ],
                                        fullwidth: true,
                                    }
                                ],
                                action: <IconButton icon='dots-vertical' ariaValue='More actions' onClick={()=> false} />,
                            },
                            {
                                itemColum: [
                                    {
                                        itemRow: [{content:<>
                                                            <i className="icon-rundown"></i>
                                                        </>}], 
                                        border: true
                                    },
                                    {
                                        itemRow: [
                                            {
                                                content: 
                                                <>
                                                    <span className="sd-list-item__slugline">19:00 – 19:45</span>
                                                    <IconLabel style='translucent' innerLabel='Duration:' text='00:38' size='small' type='warning' />
                                                    <IconLabel style='translucent' innerLabel='Planned Duration:'text='00:45' size='small' />
                                                    <time className='sd-margin-s--auto' title="June 01, 2022 11:08 AM">11:08, 01.06.2022</time>
                                                </>
                                            },
                                            {
                                                content: 
                                                <>
                                                    <Label text='Marker' color='blue--800'/>
                                                        <span className='sd-list-item__compound-text'>
                                                            <span className='sd-list-item__text-label'>Template:</span>
                                                            <span>Marker Daily</span>
                                                        </span>
                                                        <span className="sd-overflow-ellipsis sd-list-item--element-grow sd-list-item__headline">Marker // 01.06.2022</span>    
                                                    <Label style='translucent' text='In Progress' type='warning' />
                                                </>
                                            },
                                        ],
                                        fullwidth: true,
                                    }
                                ],
                                locked: true,
                                action: <IconButton icon='dots-vertical' ariaValue='More actions' onClick={()=> false} />,
                            },
                            {
                                itemColum: [
                                    {
                                        itemRow: [{content:<>
                                                            <i className="icon-rundown"></i>
                                                        </>}], 
                                        border: true
                                    },
                                    {
                                        itemRow: [
                                            {
                                                content:
                                                <>
                                                    <span className="sd-list-item__slugline">19:00 – 19:45</span>
                                                    <IconLabel style='translucent' innerLabel='Duration:' text='00:38' size='small' type='warning' />
                                                    <IconLabel style='translucent' innerLabel='Planned Duration:'text='00:45' size='small' />
                                                    <time className='sd-margin-s--auto' title="June 01, 2022 11:08 AM">11:08, 01.06.2022</time>
                                                </>
                                            },
                                            {
                                                content:
                                                <>
                                                    <Label text='Marker' color='blue--800'/>
                                                        <span className='sd-list-item__compound-text'>
                                                            <span className='sd-list-item__text-label'>Template:</span>
                                                            <span>Marker Daily</span>
                                                        </span>
                                                        <span className="sd-overflow-ellipsis sd-list-item--element-grow sd-list-item__headline">Marker // 01.06.2022</span>    
                                                    <Label style='translucent' text='In Progress' type='warning' />
                                                </>
                                            },
                                        ],
                                        fullwidth: true,
                                    }
                                ],
                                action: <IconButton icon='dots-vertical' ariaValue='More actions' onClick={()=> false} />,
                            },
                        ]} />
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
