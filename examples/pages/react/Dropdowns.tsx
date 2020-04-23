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
                <p className='docs-page__paragraph'>The basic Dropdown is composed of a wrapping Dropdown and inner 'DropdownMenu, and DropdownToggle. By default the DropdownTogglewill render a Button component and accepts all the same props.</p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <Dropdown name='Left aligned (default)'>
                            <Dropdown.Item text='Action 1' />
                            <Dropdown.Item text='Action 2' />
                            <Dropdown.Item text='Action 3' />

                            <Dropdown name='inside' level={true} icon='pencil'>
                                <Dropdown.Item text='four' />
                            </Dropdown>
                        </Dropdown>
                        <Dropdown name='Right aligned' align='right'>
                            <Dropdown.Item text='Action 1' />
                            <Dropdown.Item text='Action 2' />
                            <Dropdown.Item text='Action 3' />
                        </Dropdown>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">Dropdowns opened on the side of the trigger.</h3>
                <p className='docs-page__paragraph'></p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <Dropdown name='Drop left' side='left'>
                            <Dropdown.Item text='Action 1' />
                            <Dropdown.Item text='Action 2' />
                            <Dropdown.Item text='Action 3' />
                        </Dropdown>
                        <Dropdown name='Drop right' side='right'>
                            <Dropdown.Item text='Action 1' />
                            <Dropdown.Item text='Action 2' />
                            <Dropdown.Item text='Action 3' />
                        </Dropdown>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">Dropdown Append To Body</h3>
                <p className='docs-page__paragraph'>IN PROGRESS</p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <Dropdown name='Drop left' side='left'>
                            <Dropdown.Item text='Action 1' />
                            <Dropdown.Item text='Action 2' />
                            <Dropdown.Item text='Action 3' />
                        </Dropdown>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">Multilevel dropdown</h3>
                <p className='docs-page__paragraph'></p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <Dropdown name='Multilevel dropdown'>
                            <Dropdown.Label text='actions' />
                            <Dropdown.Divider />
                            <Dropdown.Item text='Edit' icon='pencil' />
                            <Dropdown.Item text='Copy' icon='copy' />
                            <Dropdown.Item text='Delete' icon='trash' />
                            <Dropdown.Label text='actions 2' />
                            <Dropdown name='Second level actions' level={true} icon='star'>
                                <Dropdown.Item text='Action 1' />
                                <Dropdown.Item text='Action 2' />
                                <Dropdown.Item text='Action 3' />
                                <Dropdown.Item text='Action 3' />
                            </Dropdown>
                        </Dropdown>

                        <Dropdown name='Submenu on the left'>
                            <Dropdown.Label text='actions' />
                            <Dropdown.Divider />
                            <Dropdown.Item text='Edit' icon='pencil' />
                            <Dropdown.Item text='Copy' icon='copy' />
                            <Dropdown.Item text='Delete' icon='trash' />
                            <Dropdown.Label text='actions 2' />
                            <Dropdown name='Second level actions' level={true} icon='star' side='left'>
                                <Dropdown.Item text='Action 1' />
                                <Dropdown.Item text='Action 2' />
                                <Dropdown.Item text='Action 3' />
                                <Dropdown.Item text='Action 3' />
                            </Dropdown>
                        </Dropdown>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <p className='docs-page__paragraph'></p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <Dropdown name='test' icon='dots'>
                            <Dropdown.Item text='one' />
                            <Dropdown.Item text='two' icon='pencil' />
                            <Dropdown.Item text='PROBA' />
                            <Dropdown name='inside' level={true} icon='pencil'>
                                <Dropdown.Item text='four' />
                            </Dropdown>
                        </Dropdown>
                        <Dropdown name='buttons' headerFooter={true}>
                            <Dropdown.Item text='first' />
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
