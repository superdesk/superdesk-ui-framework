import * as React from 'react';
import * as Markup from '../../js/react';
import { SubNav, NavButton, Button, ButtonGroup, Divider, PropsList, Prop} from '../../../app-typescript';

export default class SubNavDoc extends React.Component {
    render() {
        return (
            <section className='docs-page__container'>
                <h2 className='docs-page__h2'>Sub Navigation bar</h2>
                <p></p>
                <Markup.ReactMarkupCodePreview>{`
                    <SubNav>
                        <ButtonGroup align='start'>
                            <NavButton icon='search' onClick={()=> false} />
                        </ButtonGroup>
                        <ButtonGroup align='end'>
                            <NavButton icon='dots-vertical' onClick={()=> false} />
                        </ButtonGroup>
                    </SubNav>
                `}
                </Markup.ReactMarkupCodePreview>

                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <SubNav>
                            <ButtonGroup align='start'>
                                <NavButton icon='search' onClick={()=> false} />
                            </ButtonGroup>
                            <ButtonGroup align='end'>
                                <NavButton icon='expand-thin' type='highlight' onClick={()=> false} />
                            </ButtonGroup>
                        </SubNav>
                        <SubNav color='darker'>
                            <ButtonGroup align='start'>
                                <NavButton icon='filter-large' type='darker' onClick={()=> false} />
                            </ButtonGroup>
                            <ButtonGroup align='end'>
                                <Button text='Something' onClick={()=> false} />
                                <Button text='Else' onClick={()=> false} />
                                <Divider border={true} />
                                <Button text='Cancel' onClick={()=> false} />
                                <Button text='Save' type='primary' onClick={()=> false} />
                                <Divider size="mini" />
                                <ButtonGroup subgroup={true} spaces='no-space'>
                                    <NavButton icon='list-plus' onClick={()=> false} />
                                    <NavButton icon='dots-vertical' onClick={()=> false} />
                                </ButtonGroup>
                            </ButtonGroup>
                        </SubNav>
                        <br />
                        <SubNav color='darker'>
                            <ButtonGroup align='start' padded={true}>
                            <Button text='Something' onClick={()=> false} />
                                <Button text='Else' onClick={()=> false} />
                                <Divider border={true} />
                                <Button text='Cancel' onClick={()=> false} />
                                <Button text='Save' type='primary' onClick={()=> false} />
                            </ButtonGroup>
                        </SubNav>
                        <br />
                        <SubNav color='blueGreyDarker'>
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
                        <SubNav>
                            <ButtonGroup align='start'>
                                <NavButton icon='search' onClick={()=> false} />
                            </ButtonGroup>
                            <ButtonGroup align='end'>
                                <NavButton icon='expand-thin' type='highlight' onClick={()=> false} />
                            </ButtonGroup>
                        </SubNav>
                        <SubNav color='darker'>
                            <ButtonGroup align='start'>
                                <NavButton icon='filter-large' type='darker' onClick={()=> false} />
                            </ButtonGroup>
                            <ButtonGroup align='end'>
                                <Button text='Something' onClick={()=> false} />
                                <Button text='Else' onClick={()=> false} />
                                <Divider border={true} />
                                <Button text='Cancel' onClick={()=> false} />
                                <Button text='Save' type='primary' onClick={()=> false} />
                                <Divider size="mini" />
                                <ButtonGroup subgroup={true} spaces='no-space'>
                                    <NavButton icon='list-plus' onClick={()=> false} />
                                    <NavButton icon='dots-vertical' onClick={()=> false} />
                                </ButtonGroup>
                            </ButtonGroup>
                        </SubNav>

                        <br />

                        <SubNav color='darker'>
                            <ButtonGroup align='start' padded={true}>
                            <Button text='Something' onClick={()=> false} />
                                <Button text='Else' onClick={()=> false} />
                                <Divider border={true} />
                                <Button text='Cancel' onClick={()=> false} />
                                <Button text='Save' type='primary' onClick={()=> false} />
                            </ButtonGroup>
                        </SubNav>
                        
                        <br />

                        <SubNav color='blueGreyDarker'>
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
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">Props</h3>
                <PropsList>
                    <Prop name='color' isRequired={false} type='light | darker | blueGrey | blueGreyDarker' default='light' description='Background colour of the SubNav component.'/>
                    <Prop name='theme' isRequired={false} type='light | dark' default='/' description='Choose the UI theme. It will inherit the default theme if not set. All child elements will inherit the theme of the SubNav if it is set.'/>
                    <Prop name='className' isRequired={false} type='string' default='/' description='Add helper classes or custom CSS styles.'/>
                </PropsList>
            </section>
        );
    }
}
