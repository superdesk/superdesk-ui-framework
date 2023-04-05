import * as React from 'react';
import * as Markup from '../../js/react';
import { Button, ButtonGroup, Container, Heading, Prop, PropsList, QuickNavBar, SimpleList, SimpleListItem } from '../../../app-typescript';

export default class QuickNavBarDoc extends React.Component<{}> {
    render() {

        return (
            <section className="docs-page__container">
                <h2 className="docs-page__h2">Quick navigation bar</h2>

                <Markup.ReactMarkupCodePreview>{`
                    <QuickNavBar
                        items={[
                            { icon: 'heading-1', onClick:()=> false, id: 'section1' },
                            { icon: 'align-left', onClick:()=> false, id: 'section2' },
                            { icon: 'picture', onClick:()=> false, id: 'section3' },
                            { icon: 'attachment-large', onClick:()=> false, id: 'section4' }]} />
                `}
                </Markup.ReactMarkupCodePreview>
                <p className="docs-page__paragraph">If you want the default variant, follow the instructions in the description  above.</p>
                <p className="docs-page__paragraph">The component also supports the scrollspy variant. It is necessary to add ID value to items and add the ID value of the scrollable container in the <code>scrollSpy</code> attribute.</p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <div className='docs-page__content-row'>
                            <div className='docs-page__grid-page-example'>
                                <div className='docs-page__grid-page-example__top'>
                                    <div className="sd-top-menu">
                                        <a className="sd-top-menu__collapse-nav"><i className="icon-collapse icon--white"></i></a>
                                        <p className="sd-top-menu__header">Top menu</p>
                                    </div>
                                </div>
                                <QuickNavBar
                                    scrollSpy='#scrollContainer'
                                    offset={-300}
                                    items={[
                                        { icon: 'heading-1', tooltip: 'Headline', onClick:()=> false, id: 'section1' },
                                        { icon: 'align-left', tooltip: 'Body', onClick:()=> false, id: 'section2' },
                                        { icon: 'picture', tooltip: 'Media', onClick:()=> false, id: 'section3' },
                                        { icon: 'attachment-large', tooltip: 'Attachments', onClick:()=> false, id: 'section4' }]} />
                                <div className='docs-page__grid-page-example__main sd-padding--4' id='scrollContainer' style={{height:600}}>
                                    <SimpleList density='comfortable'>
                                    <SimpleListItem stacked={true} id='section1' >
                                        <Heading type='h2' className='sd-padding--2'>Section 1</Heading>
                                        <Container direction='column' className='sd-radius--medium sd-panel-bg--000 sd-shadow--z2 sd-padding--2 sd-margin-b--3'>
                                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus ab porro nihil facilis beatae amet labore laudantium repellat enim non sunt aspernatur magni consequuntur tempore, aperiam qui doloremque perspiciatis tenetur.</p>
                                        </Container>
                                        <Container direction='column' className='sd-radius--medium sd-panel-bg--000 sd-shadow--z2 sd-padding--2 sd-margin-b--3'>
                                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus ab porro nihil facilis beatae amet labore laudantium repellat enim non sunt aspernatur magni consequuntur tempore, aperiam qui doloremque perspiciatis tenetur.</p>
                                        </Container>
                                        <Container gap="large" display='flex'>
                                            <ButtonGroup align='end'>
                                                <Button text="button" type="primary" onClick={()=> false} />
                                                <Button text="button" type="highlight" onClick={()=> false} />
                                            </ButtonGroup>
                                        </Container>
                                    </SimpleListItem >
                                    <SimpleListItem stacked={true} id='section2' >
                                        <Heading type='h2' className='sd-padding--2'>Section 2</Heading>
                                        <Container direction='column' className='sd-radius--medium sd-panel-bg--000 sd-shadow--z2 sd-padding--2 sd-margin-b--3'>
                                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus ab porro nihil facilis beatae amet labore laudantium repellat enim non sunt aspernatur magni consequuntur tempore, aperiam qui doloremque perspiciatis tenetur.</p>
                                        </Container>
                                        <Container direction='column' className='sd-radius--medium sd-panel-bg--000 sd-shadow--z2 sd-padding--2 sd-margin-b--3'>
                                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus ab porro nihil facilis beatae amet labore laudantium repellat enim non sunt aspernatur magni consequuntur tempore, aperiam qui doloremque perspiciatis tenetur.</p>
                                        </Container>
                                        <Container gap="large" display='flex'>
                                            <ButtonGroup align='end'>
                                                <Button text="button" type="primary" onClick={()=> false} />
                                                <Button text="button" type="highlight" onClick={()=> false} />
                                            </ButtonGroup>
                                        </Container>
                                    </SimpleListItem>
                                    <SimpleListItem stacked={true} id='section3' >
                                        <Heading type='h2' className='sd-padding--2'>Section 3</Heading>
                                        <Container direction='column' className='sd-radius--medium sd-panel-bg--000 sd-shadow--z2 sd-padding--2 sd-margin-b--3'>
                                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus ab porro nihil facilis beatae amet labore laudantium repellat enim non sunt aspernatur magni consequuntur tempore, aperiam qui doloremque perspiciatis tenetur.</p>
                                        </Container>
                                        <Container direction='column' className='sd-radius--medium sd-panel-bg--000 sd-shadow--z2 sd-padding--2 sd-margin-b--3'>
                                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus ab porro nihil facilis beatae amet labore laudantium repellat enim non sunt aspernatur magni consequuntur tempore, aperiam qui doloremque perspiciatis tenetur.</p>
                                        </Container>
                                        <Container gap="large" display='flex'>
                                            <ButtonGroup align='end'>
                                                <Button text="button" type="primary" onClick={()=> false} />
                                                <Button text="button" type="highlight" onClick={()=> false} />
                                            </ButtonGroup>
                                        </Container>
                                    </SimpleListItem>
                                    <SimpleListItem stacked={true} id='section4' >
                                        <Heading type='h2' className='sd-padding--2'>Section 4</Heading>
                                        <Container direction='column' className='sd-radius--medium sd-panel-bg--000 sd-shadow--z2 sd-padding--2 sd-margin-b--3'>
                                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus ab porro nihil facilis beatae amet labore laudantium repellat enim non sunt aspernatur magni consequuntur tempore, aperiam qui doloremque perspiciatis tenetur.</p>
                                        </Container>
                                        <Container direction='column' className='sd-radius--medium sd-panel-bg--000 sd-shadow--z2 sd-padding--2 sd-margin-b--3'>
                                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus ab porro nihil facilis beatae amet labore laudantium repellat enim non sunt aspernatur magni consequuntur tempore, aperiam qui doloremque perspiciatis tenetur.</p>
                                        </Container>
                                    </SimpleListItem>
                                    <Container gap="large" display='flex'>
                                            <ButtonGroup align='end'>
                                                <Button text="button" type="primary" onClick={()=> false} />
                                                <Button text="button" type="highlight" onClick={()=> false} />
                                            </ButtonGroup>
                                    </Container>
                                    </SimpleList>
                                </div>
                            </div>
                        </div>
                    </Markup.ReactMarkupPreview> 
                    <Markup.ReactMarkupCode>
                        {`
                            <QuickNavBar
                            scrollSpy='#scrollContainer'
                            offset={-300}
                            items={[
                                { icon: 'heading-1', tooltip: 'Headline', onClick:()=> false, id: 'section1' },
                                { icon: 'align-left', tooltip: 'Body', onClick:()=> false, id: 'section2' },
                                { icon: 'picture', tooltip: 'Media', onClick:()=> false, id: 'section3' },
                                { icon: 'attachment-large', tooltip: 'Attachments', onClick:()=> false, id: 'section4' }]}
                            />
                            
                            <div id='#scrollContainer'>...</div>
                        `}  
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">Props</h3>
                <PropsList>
                    <Prop name='items' isRequired={true} type='Array<Items>' default='/' description='Array of items'/>
                    <Prop name='scrollSpy' isRequired={false} type='string' default='/' description='Name of the element of scrollable container.'/>
                    <Prop name='offset' isRequired={false} type='Array<menuitem>' default='/' description='Offset value that adjusts to determine the elements are in the viewport.'/>
                </PropsList>
                <p className='docs-page__paragraph'>Items:</p>
                <PropsList>
                    <Prop name='icon' isRequired={true} type='string' default='/' description='Icon class name without the icon- part.'/>
                    <Prop name='tooltip' isRequired={false} type='string' default='/' description='Defines the possition of the ToolTip.'/>
                    <Prop name='id' isRequired={false} type='string' default='/' description='Item id value. It is necessary for scrollspy.'/>
                    <Prop name='onClick' isRequired={false} type='function' default='/' description='Callback fired when a button is pressed.'/>
                </PropsList>

            </section>
        )
    }
}
