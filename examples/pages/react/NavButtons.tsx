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
                            <ButtonGroup align='left'>
                                <Tooltip text='Filters' flow='right'>
                                    <NavButton icon='filter-large' type='darker' onClick={() => false} />
                                </Tooltip>
                                <NavButton icon='search' onClick={() => false} />
                            </ButtonGroup>
                            <ButtonGroup align='right'>
                                <NavButton icon='list-plus' onClick={() => false} />
                                <Tooltip text='More actions' flow='down'>
                                    <NavButton icon='dots-vertical' onClick={() => false} />
                                </Tooltip>
                                <Tooltip text='Send to / Publish' flow='left'>
                                    <NavButton icon='expand-thin' type='highlight' onClick={() => false} />
                                </Tooltip>
                            </ButtonGroup>
                        </SubNav>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        <SubNav zIndex={2}>
                            <ButtonGroup align='left'>
                                <Tooltip text='Filters' flow='right'>
                                    <NavButton icon='filter-large' type='darker' onClick={() => false} />
                                </Tooltip>
                                <NavButton icon='search' onClick={() => false} />
                            </ButtonGroup>
                            <ButtonGroup align='right'>
                                <NavButton icon='list-plus' onClick={() => false} />
                                <Tooltip text='More actions' flow='down'>
                                    <NavButton icon='dots-vertical' onClick={() => false} />
                                </Tooltip>
                                <Tooltip text='Send to / Publish' flow='left'>
                                    <NavButton icon='expand-thin' type='highlight' onClick={() => false} />
                                </Tooltip>
                            </ButtonGroup>
                        </SubNav>        
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">Props</h3>
                <PropsList>
                    <Prop name='icon' isRequered={false} type='string' default='/' description='Icon class name without the icon- part.' />
                    <Prop name='iconSize' isRequered={false} type='small | big' default='small' description='Specifies a small or big button' />
                    <Prop name='type' isRequered={false} type='default | primary | success | warning | alert | highlight | sd-green' default='default' description='Default + semantic colour variations (e.g. primary, success etc.).' />
                    <Prop name='theme' isRequered={false} type='light | dark' default='light' description='Styles nav button for diffrent background.' />
                    <Prop name='value' isRequered={false} type='button | submit | reset' default='button' description='Specifies a value of nav button' />
                </PropsList>
            </section>
        );
    }
}
