import * as React from 'react';
import * as Markup from '../../js/react';
import { Container, Heading, LeftMenu, Prop, PropsList, SimpleList, SimpleListItem } from '../../../app-typescript';

export default class LeftNavigationsDoc extends React.Component<{}> {
    render() {

        return (
            <section className="docs-page__container">
                <h2 className="docs-page__h2">Left navigation</h2>
                <p className="docs-page__paragraph">...</p>

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
                                    <LeftMenu ariaLabel={'Left navigation'} className={'docs-page__grid-page-example__side'} activeItemId='1' 
                                        groups={[{ label: 'SYSTEM SETTINGS', items: [{ id: '1', label: 'General' }, { id: '2', label: 'Email settings' }, { id: '3', label: 'Spell checking' }] },
                                                 { label: 'WORKFLOW', items: [{ id: '4', label: 'Desk' }, { id: '5', label: 'User Roles & Privileges' }] },
                                                 { label: 'CONTENT CONFIG', items: [{ id: '6', label: 'Image renditions' }, { id: '7', label: 'Controlled Vocabularies' }] }]}
                                        onSelect={() => false} />
                                <div className='docs-page__grid-page-example__main'></div>
                            </div>
                        </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        <LeftMenu ariaLabel={'Left navigation'} navClass={'some-optional-class'} activeItemId='1' groups={[{ label: 'SYSTEM SETTINGS', items: [{ id: '1', label: 'General' }, { id: '2', label: 'Email settings' }, { id: '3', label: 'Spell checking' }] },
                            { label: 'WORKFLOW', items: [{ id: '4', label: 'Desk' }, { id: '5', label: 'User Roles & Privileges' }] },
                            { label: 'CONTENT CONFIG', items: [{ id: '6', label: 'Image renditions' }, { id: '7', label: 'Controlled Vocabularies' }] }]}
                            onSelect={() => false} />
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>
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
                                    <LeftMenu ariaLabel={'Left navigation'}
                                        className={'docs-page__grid-page-example__side'}     
                                        scrollSpy='#scrollContainer'
                                        offset={-300}
                                        activeItemId='1' 
                                        groups={[
                                            { label: 'MAIN SECTIONS', items: [
                                                { id: '1', label: 'Section 1', ref:'section1'},
                                                { id: '2', label: 'Section 2', ref: 'section2' },
                                                { id: '3', label: 'Section 3', ref: 'section3' },
                                            
                                            ]},
                                            { label:'OTHER SECTIONS', items: [
                                                { id: '4', label: 'Section 4', ref: 'section4' },
                                                { id: '5', label: 'Section 5', ref: 'section5' }
                                            ]},
                                            { label:'OTHER SECTIONS', items: [
                                                { id: '6', label: 'Section 6', ref: 'section6' },
                                                { id: '7', label: 'Section 7', ref: 'section7' }
                                            ]}
                                        ]}
                                    onSelect={() => false} />
                                <div className='docs-page__grid-page-example__main sd-padding--4' id='scrollContainer' style={{height:600}}>
                                        <SimpleList density='comfortable'>
                                        <SimpleListItem stacked={true} id='section1' >
                                            <Heading type='h3'>Section 1</Heading>
                                            <Container direction='column' className='sd-radius--medium sd-panel-bg--000 sd-shadow--z2 sd-padding--3 sd-margin-b--5'>
                                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus ab porro nihil facilis beatae amet labore laudantium repellat enim non sunt aspernatur magni consequuntur tempore, aperiam qui doloremque perspiciatis tenetur.</p>
                                            </Container>
                                            <Container direction='column' className='sd-radius--medium sd-panel-bg--000 sd-shadow--z2 sd-padding--3 sd-margin-b--5'>
                                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus ab porro nihil facilis beatae amet labore laudantium repellat enim non sunt aspernatur magni consequuntur tempore, aperiam qui doloremque perspiciatis tenetur.</p>
                                            </Container>
                                        </SimpleListItem >
                                        <SimpleListItem stacked={true} id='section2' >
                                            <Heading type='h3'>Section 2</Heading>
                                            <Container direction='column' className='sd-radius--medium sd-panel-bg--000 sd-shadow--z2 sd-padding--3 sd-margin-b--5'>
                                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus ab porro nihil facilis beatae amet labore laudantium repellat enim non sunt aspernatur magni consequuntur tempore, aperiam qui doloremque perspiciatis tenetur.</p>
                                            </Container>
                                            <Container direction='column' className='sd-radius--medium sd-panel-bg--000 sd-shadow--z2 sd-padding--3 sd-margin-b--5'>
                                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus ab porro nihil facilis beatae amet labore laudantium repellat enim non sunt aspernatur magni consequuntur tempore, aperiam qui doloremque perspiciatis tenetur.</p>
                                            </Container>
                                        </SimpleListItem>
                                        <SimpleListItem stacked={true} id='section3' >
                                            <Heading type='h3'>Section 3</Heading>
                                            <Container direction='column' className='sd-radius--medium sd-panel-bg--000 sd-shadow--z2 sd-padding--3 sd-margin-b--5'>
                                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus ab porro nihil facilis beatae amet labore laudantium repellat enim non sunt aspernatur magni consequuntur tempore, aperiam qui doloremque perspiciatis tenetur.</p>
                                            </Container>
                                            <Container direction='column' className='sd-radius--medium sd-panel-bg--000 sd-shadow--z2 sd-padding--3 sd-margin-b--5'>
                                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus ab porro nihil facilis beatae amet labore laudantium repellat enim non sunt aspernatur magni consequuntur tempore, aperiam qui doloremque perspiciatis tenetur.</p>
                                            </Container>
                                        </SimpleListItem>
                                        <SimpleListItem stacked={true} id='section4' >
                                            <Heading type='h3'>Section 4</Heading>
                                            <Container direction='column' className='sd-radius--medium sd-panel-bg--000 sd-shadow--z2 sd-padding--3 sd-margin-b--5'>
                                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus ab porro nihil facilis beatae amet labore laudantium repellat enim non sunt aspernatur magni consequuntur tempore, aperiam qui doloremque perspiciatis tenetur.</p>
                                            </Container>
                                            <Container direction='column' className='sd-radius--medium sd-panel-bg--000 sd-shadow--z2 sd-padding--3 sd-margin-b--5'>
                                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus ab porro nihil facilis beatae amet labore laudantium repellat enim non sunt aspernatur magni consequuntur tempore, aperiam qui doloremque perspiciatis tenetur.</p>
                                            </Container>
                                        </SimpleListItem>
                                        <SimpleListItem stacked={true} id='section5' >
                                            <Heading type='h3'>Section 5</Heading>
                                            <Container direction='column' className='sd-radius--medium sd-panel-bg--000 sd-shadow--z2 sd-padding--3 sd-margin-b--5'>
                                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus ab porro nihil facilis beatae amet labore laudantium repellat enim non sunt aspernatur magni consequuntur tempore, aperiam qui doloremque perspiciatis tenetur.</p>
                                            </Container>
                                            <Container direction='column' className='sd-radius--medium sd-panel-bg--000 sd-shadow--z2 sd-padding--3 sd-margin-b--5'>
                                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus ab porro nihil facilis beatae amet labore laudantium repellat enim non sunt aspernatur magni consequuntur tempore, aperiam qui doloremque perspiciatis tenetur.</p>
                                            </Container>
                                        </SimpleListItem>
                                        <SimpleListItem stacked={true} id='section6' >
                                            <Heading type='h3'>Section 6</Heading>
                                            <Container direction='column' className='sd-radius--medium sd-panel-bg--000 sd-shadow--z2 sd-padding--3 sd-margin-b--5'>
                                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus ab porro nihil facilis beatae amet labore laudantium repellat enim non sunt aspernatur magni consequuntur tempore, aperiam qui doloremque perspiciatis tenetur.</p>
                                            </Container>
                                            <Container direction='column' className='sd-radius--medium sd-panel-bg--000 sd-shadow--z2 sd-padding--3 sd-margin-b--5'>
                                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus ab porro nihil facilis beatae amet labore laudantium repellat enim non sunt aspernatur magni consequuntur tempore, aperiam qui doloremque perspiciatis tenetur.</p>
                                            </Container>
                                        </SimpleListItem>
                                        <SimpleListItem stacked={true} id='section7' >
                                            <Heading type='h3'>Section 7</Heading>
                                            <Container direction='column' className='sd-radius--medium sd-panel-bg--000 sd-shadow--z2 sd-padding--3 sd-margin-b--5'>
                                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus ab porro nihil facilis beatae amet labore laudantium repellat enim non sunt aspernatur magni consequuntur tempore, aperiam qui doloremque perspiciatis tenetur.</p>
                                            </Container>
                                            <Container direction='column' className='sd-radius--medium sd-panel-bg--000 sd-shadow--z2 sd-padding--3 sd-margin-b--5'>
                                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus ab porro nihil facilis beatae amet labore laudantium repellat enim non sunt aspernatur magni consequuntur tempore, aperiam qui doloremque perspiciatis tenetur.</p>
                                            </Container>
                                        </SimpleListItem>
                                        </SimpleList>
                                </div>
                            </div>
                        </div>
                    </Markup.ReactMarkupPreview> 
                    <Markup.ReactMarkupCode>
                        {`
                            <LeftMenu ariaLabel={'Left navigation'}
                                className={'docs-page__grid-page-example__side'}     
                                scrollSpy='#scrollContainer'
                                activeItemId='1' 
                                groups={[
                                    { label: 'MAIN SECTIONS', items: [
                                        { id: '1', label: 'Section 1', ref:'section1'},
                                        { id: '2', label: 'Section 2', ref: 'section2' },
                                        { id: '3', label: 'Section 3', ref: 'section3' },
                                    
                                    ]},
                                    {label:'OTHER SECTIONS', items: [
                                        { id: '4', label: 'Section 4', ref: 'section4' },
                                        { id: '5', label: 'Section 5', ref: 'section5' }
                                    ]},
                                    {label:'OTHER SECTIONS', items: [
                                        { id: '4', label: 'Section 6', ref: 'section6' },
                                        { id: '5', label: 'Section 7', ref: 'section7' }
                                    ]}
                                ]}
                            onSelect={() => false} />
                            <div id='#scrollContainer'>...</div>
                        `}  
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">Props</h3>
                <PropsList>
                    <Prop name='groups' isRequired={true} type='Array<menugroup>' default='/' description='Array of groups'/>
                    <Prop name='activeItemId' isRequired={true} type='string' default='/' description='Id of active item'/>
                    <Prop name='menugroup label' isRequired={true} type='string' default='/' description='Menugroup label text value.'/>
                    <Prop name='menugroup items' isRequired={true} type='Array<menuitem>' default='/' description='Array of items'/>
                    <Prop name='menuitem id' isRequired={true} type='string' default='/' description='Menugroup id value'/>
                    <Prop name='menuitem label' isRequired={true} type='string' default='/' description='Menugroup label text value.'/>
                    <Prop name='scrollSpy' isRequired={false} type='string' default='HTML' description='Name of the element of scrollable container.'/>
                    <Prop name='offset' isRequired={false} type='number' default='-300' description='Offset value that adjusts to determine the elements are in the viewport.'/>
                </PropsList>

            </section>
        )
    }
}
