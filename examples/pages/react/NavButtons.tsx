import * as React from 'react';

import * as Markup from '../../js/react';

import { SubNav, NavButton, ButtonGroup, Tooltip, PropsList, Prop } from '../../../app-typescript';

export default class NavButtonsDoc extends React.Component {
    render() {
        return (
            <section className='docs-page__container'>
                <h2 className='docs-page__h2'>Navigation button</h2>
                <p></p>
                <Markup.ReactMarkupCodePreview>{`
                    <NavButton type='default' icon='home' onClick={()=> false} />
                `}
                </Markup.ReactMarkupCodePreview>

                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <SubNav zIndex={2}>
                            <ButtonGroup align='start' spaces='no-space'>
                                <Tooltip text='Filters' flow='right'>
                                    <NavButton icon='filter-large' type='darker' state="active" text="Filter" onClick={() => false} />
                                </Tooltip>
                                <NavButton icon='search' text="Search" onClick={() => false} />
                            </ButtonGroup>
                            <ButtonGroup align='end' spaces='no-space'>
                                <NavButton icon='list-plus' text="Add to list" onClick={() => false} />
                                <Tooltip text='More actions' flow='down'>
                                    <NavButton icon='dots-vertical' text="More actions" onClick={() => false} />
                                </Tooltip>
                                <Tooltip text='Send to / Publish' flow='left'>
                                    <NavButton icon='expand-thin' text='Send to / Publish' type='highlight' onClick={() => false} />
                                </Tooltip>
                            </ButtonGroup>
                        </SubNav>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        <SubNav zIndex={2}>
                            <ButtonGroup align='start' spaces='no-space'>
                                <Tooltip text='Filters' flow='right'>
                                    <NavButton icon='filter-large' type='darker' state="active" text="Filter" onClick={() => false} />
                                </Tooltip>
                                <NavButton icon='search' text="Search" onClick={() => false} />
                            </ButtonGroup>
                            <ButtonGroup align='end' spaces='no-space'>
                                <NavButton icon='list-plus' text="Add to list" onClick={() => false} />
                                <Tooltip text='More actions' flow='down'>
                                    <NavButton icon='dots-vertical' text="More actions" onClick={() => false} />
                                </Tooltip>
                                <Tooltip text='Send to / Publish' flow='left'>
                                    <NavButton icon='expand-thin' text='Send to / Publish' type='highlight' onClick={() => false} />
                                </Tooltip>
                            </ButtonGroup>
                        </SubNav>        
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>
                <h3 className="docs-page__h3">Styles / Types</h3>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <SubNav zIndex={2}>
                            <ButtonGroup align='start' spaces='no-space'>
                                <NavButton icon='adjust' type='default' text="Adjust" onClick={() => false} />
                                <NavButton icon='eye-open' type='darker' text="View" onClick={() => false} />
                                <NavButton icon='refresh' type='dark' text="Refresh" onClick={() => false} />
                            </ButtonGroup>
                            <ButtonGroup align='end' spaces='no-space'>
                                <NavButton icon='edit-line' type='primary' text="Edit" onClick={() => false} />
                                <NavButton icon='expand-thin' type='highlight' text="Expand" onClick={() => false} />
                            </ButtonGroup>
                        </SubNav>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        <SubNav zIndex={2}>
                            <ButtonGroup align='start' spaces='no-space'>
                                <NavButton icon='adjust' type='default' text="Adjust" onClick={() => false} />
                                <NavButton icon='eye-open' type='darker' text="View" onClick={() => false} />
                                <NavButton icon='refresh' type='dark' text="Refresh" onClick={() => false} />
                            </ButtonGroup>
                            <ButtonGroup align='end' spaces='no-space'>
                                <NavButton icon='edit-line' type='primary' text="Edit" onClick={() => false} />
                                <NavButton icon='expand-thin' type='highlight' text="Expand" onClick={() => false} />
                            </ButtonGroup>
                        </SubNav>       
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">Props</h3>
                <PropsList>
                    <Prop name='icon' isRequired={false} type='string' default='/' description='Icon class name without the icon- part.' />
                    <Prop name='text' isRequired={false} type='string' default='/' description='Defines the value for aria-label, for screen-readers accessibility.' />
                    <Prop name='iconSize' isRequired={false} type='small | big' default='small' description='Specifies a small or big button' />
                    <Prop name='type' isRequired={false} type='default | primary | highlight | darker | dark' default='default' description='Default + colour variations.' />
                    <Prop name='state' isRequired={false} type='normal | active' default='normal' description='Defines the optional state of the button (e.g. active)' />
                    <Prop name='theme' isRequired={false} type='light | dark' default='light' description='Styles nav button for diffrent background.' />
                    <Prop name='value' isRequired={false} type='button | submit | reset' default='button' description='Specifies a value of nav button' />
                </PropsList>
            </section>
        );
    }
}
