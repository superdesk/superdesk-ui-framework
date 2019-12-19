import * as React from 'react';

import * as Markup from '../../js/react';

import { Menu } from '../../../app-typescript';


export default class LeftNavigationsDoc extends React.Component<{}> {
    render() {

        return (
            <section className="docs-page__container">
                <h2 className="docs-page__h2">Left navigation</h2>
                <p className="docs-page__paragraph">...</p>

                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <div className='docs-page__content-row'>
                            <div style={{ position: 'relative', minHeight: '600px', backgroundColor: '#efefef', overflow: 'hidden', border: '1px solid #dadada' }}>
                                <div className="sd-top-menu">
                                    <a className="sd-top-menu__collapse-nav"><i className="icon-collapse icon--white"></i></a>
                                    <p className="sd-top-menu__header">Top menu</p>
                                </div>
                                <nav className='sd-left-nav sd-left-nav--absolute' style={{ top: '48px' }}>
                                    <Menu activeItemId='1' groups={[{ label: 'SYSTEM SETTINGS', items: [{ id: '1', label: 'General' }, { id: '2', label: 'Email settings' }, { id: '3', label: 'Spell checking' }] },
                                    { label: 'WORKFLOW', items: [{ id: '4', label: 'Desk' }, { id: '5', label: 'User Roles & Privileges' }] },
                                    { label: 'CONTENT CONFIG', items: [{ id: '6', label: 'Image renditions' }, { id: '7', label: 'Controlled Vocabularies' }] }]}
                                        onSelect={() => false} />
                                </nav>
                            </div>
                        </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        <Menu activeItemId='1' 
                              groups={[{ label: 'SYSTEM SETTINGS', items: [{ id: '1', label: 'General' }, { id: '2', label: 'Email settings' }, { id: '3', label: 'Spell checking' }] },
                              { label: 'WORKFLOW', items: [{ id: '4', label: 'Desk' }, { id: '5', label: 'User Roles & Privileges' }] },
                              { label: 'CONTENT CONFIG', items: [{ id: '6', label: 'Image renditions' }, { id: '7', label: 'Controlled Vocabularies' }] }]}
                              onSelect={() => false}/>
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

            </section>
        )
    }
}
