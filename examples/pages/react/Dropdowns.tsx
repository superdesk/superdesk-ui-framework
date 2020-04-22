import * as React from 'react';
import * as Markup from '../../js/react';
import { Dropdown } from '../../../app-typescript';

export default class DropdownDoc extends React.Component {
    render() {
        return (
            <section className="docs-page__container">
                <h2 className="docs-page__h2">Dropdown</h2>
                <Markup.ReactMarkupCodePreview>{`
                    
                `}
                </Markup.ReactMarkupCodePreview>

                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <p className="docs-page__paragraph"></p>
                        <Dropdown name='test'>
                            <Dropdown.Item text='one' />
                            <Dropdown.Item text='two' icon='pencil' />
                            <Dropdown.Item text='PROBA'/>
                            <Dropdown name='inside' level={true} icon='pencil'>
                                <Dropdown.Item text='four' />
                            </Dropdown>
                        </Dropdown>
                        <Dropdown name='test' icon='dots'>
                            <Dropdown.Item text='one' />
                            <Dropdown.Item text='two' icon='pencil' />
                            <Dropdown.Item text='PROBA'/>
                            <Dropdown name='inside' level={true} icon='pencil'>
                                <Dropdown.Item text='four' />
                            </Dropdown>
                        </Dropdown>
                        <Dropdown name='buttons' headerFooter={true}>
                            <Dropdown.Item text='first'/>
                        </Dropdown>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>


            </section>

        )
    }
}
