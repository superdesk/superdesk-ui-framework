import * as React from 'react';

import * as Markup from '../../js/react';

import { SubNav, NavButton, Button, ButtonGroup, Divider} from '../../../app-typescript';

export default class SubNavDoc extends React.Component {
    render() {
        return (
            <section className='docs-page__container'>
                <h2 className='docs-page__h2'>Sub Navigation bar</h2>
                <p></p>
                <Markup.ReactMarkupCodePreview>{`
                    <SubNav zIndex={2}>
                        <ButtonGroup align='left'>
                            <NavButton icon='search' onClick={()=> false} />
                        </ButtonGroup>
                        <ButtonGroup align='right'>
                            <NavButton icon='dots-vertical' onClick={()=> false} />
                        </ButtonGroup>
                    </SubNav>
                `}
                </Markup.ReactMarkupCodePreview>

                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <SubNav zIndex={4}>
                            <ButtonGroup align='left'>
                                <NavButton icon='search' onClick={()=> false} />
                            </ButtonGroup>
                            <ButtonGroup align='right'>
                                <NavButton icon='expand-thin' type='highlight' onClick={()=> false} />
                            </ButtonGroup>
                        </SubNav>
                        <SubNav color='darker' zIndex={3}>
                            <ButtonGroup align='left'>
                                <NavButton icon='filter-large' type='darker' onClick={()=> false} />
                            </ButtonGroup>
                            <ButtonGroup align='right'>
                                <Button text='Something' onClick={()=> false} />
                                <Button text='Else' onClick={()=> false} />
                                <Divider border={true} />
                                <Button text='Cancel' onClick={()=> false} />
                                <Button text='Save' type='primary' onClick={()=> false} />
                                <Divider size="mini" />
                                <NavButton icon='list-plus' onClick={()=> false} />
                                <NavButton icon='dots-vertical' onClick={()=> false} />
                            </ButtonGroup>
                        </SubNav>
                        <br />
                        <SubNav color='darker' zIndex={2}>
                            <ButtonGroup align='left' padded={true}>
                            <Button text='Something' onClick={()=> false} />
                                <Button text='Else' onClick={()=> false} />
                                <Divider border={true} />
                                <Button text='Cancel' onClick={()=> false} />
                                <Button text='Save' type='primary' onClick={()=> false} />
                            </ButtonGroup>
                        </SubNav>
                        <br />
                        <SubNav color='darker' zIndex={1}>
                            <ButtonGroup align='center'>
                            <Button text='One' onClick={()=> false} />
                                <Button text='Two' onClick={()=> false} />
                                <Divider border={true} />
                                <Button text='Three' onClick={()=> false} />
                                <Button text='Four' onClick={()=> false} />
                                <Divider border={true} />
                                <Button text='Five' onClick={()=> false} />
                                <Button text='Six' onClick={()=> false} />
                            </ButtonGroup>
                        </SubNav>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        <SubNav zIndex={2}>
                            <ButtonGroup align='left'>
                                <NavButton icon='filter-large' type='darker' onClick={()=> false} />
                                <NavButton icon='search' onClick={()=> false} />
                            </ButtonGroup>
                            <ButtonGroup align='right'>
                                <NavButton icon='list-plus' onClick={()=> false} />
                                <NavButton icon='dots-vertical' onClick={()=> false} />
                                <NavButton icon='expand-thin' type='highlight' onClick={()=> false} />
                            </ButtonGroup>
                        </SubNav>        
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>
            </section>
        );
    }
}
