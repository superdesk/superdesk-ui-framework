import * as React from 'react';

import * as Markup from '../../js/react';

import { NavigationItem, NavigationList, LeftNavigation } from '../../../app-typescript';


export default class LeftNavigationsDoc extends React.Component<{}> {
    render() {
        
        return (
            <section className="docs-page__container">
                <h2 className="docs-page__h2">Left navigation</h2>
                <p className="docs-page__paragraph">...</p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <div className='docs-page__content-row'>
                            <div style={{position: 'relative', minHeight: '600px', backgroundColor: '#efefef', overflow: 'hidden', border: '1px solid #dadada'}}>
                            <div className="sd-top-menu">
                                <a className="sd-top-menu__collapse-nav"><i className="icon-collapse icon--white"></i></a>
                                <p className="sd-top-menu__header">Top menu</p>
                            </div>
                                <LeftNavigation>
                                    <NavigationList header='SYSTEM SETTINGS'>
                                        <NavigationItem text='General'/>
                                        <NavigationItem text='Email settings'/>
                                        <NavigationItem text='Spell checking'/>
                                    </NavigationList>
                                    <NavigationList header='WORKFLOW'>
                                        <NavigationItem text='Desk'/>
                                        <NavigationItem text='User Roles & Privileges'/>
                                    </NavigationList>
                                    <NavigationList header='CONTENT CONFIG'>
                                        <NavigationItem text='Image renditions'/>
                                        <NavigationItem text='Controlled Vocabularies'/>
                                    </NavigationList>
                                </LeftNavigation>
                            </div>
                            
                        </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>

                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

            </section>
        )
    }
}
