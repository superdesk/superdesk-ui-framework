import * as React from 'react';
import * as Markup from '../../js/react';
import { Prop, PropsList, Icon, IconButton, Label, Container, IconLabel } from '../../../app-typescript';
import { ContentList } from '../../../app-typescript/components/Lists/ContentList';

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

                    <Markup.ReactMarkupPreview>
                        <p className="docs-page__paragraph">// loading</p>
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
                                loading: true
                            },
                        ]} />
                    </Markup.ReactMarkupPreview>

                    <Markup.ReactMarkupPreview>
                        <p className="docs-page__paragraph">// selected</p>
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
                                selected: true,
                            },
                        ]} />
                    </Markup.ReactMarkupPreview>

                    <Markup.ReactMarkupPreview>
                        <p className="docs-page__paragraph">// locked</p>
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
                                locked: true,
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

                        // loading, slected & locked

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
                                selected: true,
                                locked: true,
                            },
                        ]} />
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>
                <h3 className="docs-page__h3">Props</h3>
                <p className="docs-page__paragraph">ContentList</p>
                <PropsList>
                    <Prop name='items' isRequired={true} type='Array' default='compact' description='An array of object.'/>
                </PropsList>
                <p className="docs-page__paragraph">Items:</p>
                <PropsList>
                    <Prop name='itemColum' isRequired={true} type='Array<{itemRow: Array<{content: any}>, border?: boolean, fullwidth?: boolean}>' default='false' description='An array of objects for defining column of individual items.'/>
                    <Prop name='action' isRequired={false} type='React.ReactNode' default='false' description='On hover displays an additional menu.'/>
                    <Prop name='locked' isRequired={false} type='boolean' default='false' description='If is true, the individual item of list change state and change style.'/>
                    <Prop name='activated' isRequired={false} type='boolean' default='false' description='If is true, the individual item of list change state and change style.'/>
                    <Prop name='selected' isRequired={false} type='boolean' default='false' description='If is true, the individual item of list change state and change style.'/>
                    <Prop name='archived' isRequired={false} type='boolean' default='false' description='If is true, the individual item of list change state and change style.'/>
                    <Prop name='loading' isRequired={false} type='boolean' default='false' description='If is true, the individual item of list change state and change style.'/>
                    <Prop name='onClick' isRequired={false} type='function' default='/' description='onClick functionality.'/>
                    <Prop name='onDoubleClick' isRequired={false} type='function' default='/' description='onDoubleClick functionality.'/>
                </PropsList>
                <p className="docs-page__paragraph">itemColum:</p>
                <PropsList>
                    <Prop name='itemRow' isRequired={true} type='Array<{content: any}>' default='ture' description='An array of objects for defining rows of individual items.'/>
                    <Prop name='border' isRequired={false} type='boolean' default='false' description='If is true, the individual item of list change style.'/>
                    <Prop name='fullwidth' isRequired={false} type='boolean' default='false' description='If is true, the individual item of list change style.'/>
                </PropsList>
            </section>
        )
    }
}
