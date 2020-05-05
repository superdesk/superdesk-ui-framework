import * as React from 'react';
import * as Markup from '../../js/react';
import { Dropdown } from '../../../app-typescript';
import { SubNav } from '../../../app-typescript';

export default class DropdownDoc extends React.Component {
    render() {
        return (
            <section className="docs-page__container">
                <h2 className="docs-page__h2">Dropdown</h2>
                <Markup.ReactMarkupCodePreview>{`
                    
                `}
                </Markup.ReactMarkupCodePreview>
                <p className='docs-page__paragraph'>The basic Dropdown is composed of a wrapping Dropdown and inner DropdownItem.</p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <Dropdown name='Left aligned (default)'>
                            <Dropdown.Item text='Action 1' />
                            <Dropdown.Item text='Action 2' />
                            <Dropdown.Item text='Action 3' />
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
                        <Dropdown name='Drop append to body'>
                            <Dropdown.Item text='Action 1' />
                            <Dropdown.Item text='Action 2' />
                            <Dropdown.Item text='Action 3' />
                            <Dropdown.Item text='Action 4' />
                            <Dropdown.Item text='Action 5' />
                            <Dropdown.Item text='Action 6' />
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
                            <Dropdown name='Second level actions' level={true} icon='star' align='left'>
                                <Dropdown.Item text='Action 1' />
                                <Dropdown.Item text='Action 2' />
                                <Dropdown.Item text='Action 3' />
                                <Dropdown.Item text='Action 4' />
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
                                <Dropdown.Item text='Action 4' />
                            </Dropdown>
                        </Dropdown>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">Navigation dropdown</h3>
                <p className='docs-page__paragraph'></p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <SubNav zIndex={1} color='darker'>
                            <h3 className="subnav__page-title">Subnav title</h3>
                            <Dropdown name='dots' icon='dots-vertical' navDropdown={true}>
                                <Dropdown.Label text='actions' />
                                <Dropdown.Divider />
                                <Dropdown.Item text='Edit' icon='pencil' />
                                <Dropdown.Item text='Copy' icon='copy' />
                                <Dropdown.Item text='Delete' icon='trash' />
                                <Dropdown.Label text='actions 2' />
                                <Dropdown name='Second level actions' level={true} icon='star' align='left'>
                                    <Dropdown.Item text='Action 1' />
                                    <Dropdown.Item text='Action 2' />
                                    <Dropdown.Item text='Action 3' />
                                    <Dropdown.Item text='Action 4' />
                                </Dropdown>
                            </Dropdown>
                        </SubNav>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">Navigation dropdown with fixed header and footer</h3>
                <p className='docs-page__paragraph'></p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <SubNav zIndex={1} color='darker'>
                            <h3 className="subnav__page-title">Subnav title</h3>
                            <Dropdown name='dots' icon='dots-vertical' navDropdown={true} headerFooter={true}>
                                <Dropdown.Header title='header actions'>
                                    <Dropdown.Item text='Header action one' icon='download' />
                                    <Dropdown.Item text='Header action one' icon='trash' />
                                </Dropdown.Header>
                                <Dropdown.Body title='body actions'>
                                    <Dropdown.Item text='Edit' icon='pencil' />
                                    <Dropdown.Item text='Copy Item' icon='copy' />
                                    <Dropdown.Item text='Action 2' icon='envelope' />
                                    <Dropdown.Item text='Action 3' icon='heart' />
                                    <Dropdown.Item text='Action 4' icon='print' />
                                    <Dropdown.Item text='Action 5' icon='plus-sign' />
                                    <Dropdown.Item text='Action 6' icon='minus-sign' />
                                    <Dropdown.Item text='Action 7' icon='refresh' />
                                    <Dropdown.Item text='Action 8' icon='pick' />
                                    <Dropdown.Item text='Action 9' icon='bell' />
                                    <Dropdown.Item text='Action 10' icon='kill' />
                                    <Dropdown.Item text='Action 11' icon='settings' />
                                    <Dropdown.Item text='Action 12' icon='cut' />
                                </Dropdown.Body>
                                <Dropdown.Footer title='footer actions'>
                                    <Dropdown.Item text='Create gallery' icon='slideshow' />
                                    <Dropdown.Item text='Create package' icon='composite' />
                                </Dropdown.Footer>
                            </Dropdown>
                        </SubNav>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>
            </section>

        )
    }
}
