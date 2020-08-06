import * as React from 'react';
import * as Markup from '../../js/react';
import { LeftMenu, Prop, PropsList } from '../../../app-typescript';

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
                                    <LeftMenu ariaLabel={'Left navigation'} navClass={'docs-page__grid-page-example__side'} activeItemId='1' 
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

                <h3 className="docs-page__h3">Props</h3>
                <PropsList>
                    <Prop name='groups' isRequered={true} type='Array<menugroup>' default='/' description='Array of groups'/>
                    <Prop name='activeItemId' isRequered={true} type='string' default='/' description='Id of active item'/>
                    <Prop name='menugroup label' isRequered={true} type='string' default='/' description='Menugroup label text value.'/>
                    <Prop name='menugroup items' isRequered={true} type='Array<menuitem>' default='/' description='Array of items'/>
                    <Prop name='menuitem id' isRequered={true} type='string' default='/' description='Menugroup id value'/>
                    <Prop name='menuitem label' isRequered={true} type='string' default='/' description='Menugroup label text value.'/>
                </PropsList>
            </section>
        )
    }
}
