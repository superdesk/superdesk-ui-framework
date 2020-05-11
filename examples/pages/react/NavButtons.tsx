import * as React from 'react';

import * as Markup from '../../js/react';

import { SubNav, NavButton, ButtonGroup, Tooltip } from '../../../app-typescript';

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
            </section>
        );
    }
}
