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
                            <Dropdown.Item text='Action 1' onSelect={()=>1} />
                            <Dropdown.Item text='Action 2' onSelect={()=>1} />
                            <Dropdown.Item text='Action 3' onSelect={()=>1} />
                        </Dropdown>
                        <Dropdown name='Right aligned' align='right'>
                            <Dropdown.Item text='Action 1' onSelect={()=>1} />
                            <Dropdown.Item text='Action 2' onSelect={()=>1} />
                            <Dropdown.Item text='Action 3' onSelect={()=>1} />
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
                            <Dropdown.Item text='Action 1' onSelect={()=>1} />
                            <Dropdown.Item text='Action 2' onSelect={()=>1} />
                            <Dropdown.Item text='Action 3' onSelect={()=>1} />
                        </Dropdown>
                        <Dropdown name='Drop right' side='right'>
                            <Dropdown.Item text='Action 1' onSelect={()=>1} />
                            <Dropdown.Item text='Action 2' onSelect={()=>1} />
                            <Dropdown.Item text='Action 3' onSelect={()=>1} />
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
                            <Dropdown.Item text='Action 1' onSelect={()=>1} />
                            <Dropdown.Item text='Action 2' onSelect={()=>1} />
                            <Dropdown.Item text='Action 3' onSelect={()=>1} />
                            <Dropdown.Item text='Action 4' onSelect={()=>1} />
                            <Dropdown.Item text='Action 5' onSelect={()=>1} />
                            <Dropdown.Item text='Action 6' onSelect={()=>1} />
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
                            <Dropdown.Item text='Edit' icon='pencil' onSelect={()=>1} />
                            <Dropdown.Item text='Copy' icon='copy' onSelect={()=>1} />
                            <Dropdown.Item text='Delete' icon='trash' onSelect={()=>1} />
                            <Dropdown.Divider />
                            <Dropdown.Label text='actions 2' />
                            <Dropdown name='Second level actions' level={true} icon='star' align='left'>
                                <Dropdown.Item text='Action 1' onSelect={()=>1} />
                                <Dropdown.Item text='Action 2' onSelect={()=>1} />
                                <Dropdown.Item text='Action 3' onSelect={()=>1} />
                                <Dropdown.Item text='Action 4' onSelect={()=>1} />
                            </Dropdown>
                        </Dropdown>

                        <Dropdown name='Submenu on the left'>
                            <Dropdown.Label text='actions' />
                            <Dropdown.Divider />
                            <Dropdown.Item text='Edit' icon='pencil' onSelect={()=>1} />
                            <Dropdown.Item text='Copy' icon='copy' onSelect={()=>1} />
                            <Dropdown.Item text='Delete' icon='trash' onSelect={()=>1} />
                            <Dropdown.Divider />
                            <Dropdown.Label text='actions 2' />
                            <Dropdown name='Second level actions' level={true} icon='star' side='left'>
                                <Dropdown.Item text='Action 1' onSelect={()=>1} />
                                <Dropdown.Item text='Action 2' onSelect={()=>1} />
                                <Dropdown.Item text='Action 3' onSelect={()=>1} />
                                <Dropdown.Item text='Action 4' onSelect={()=>1} />
                            </Dropdown>
                        </Dropdown>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">Navigation dropdown</h3>
                <p className='docs-page__paragraph'>Example of a dropdown inside a subnavigation element. The dropdown has additional modifiers to align the menu to the right of the toggle and to open the submenu on the left.</p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <SubNav zIndex={1} color='darker'>
                            <h3 className="subnav__page-title">Subnav title</h3>
                            <Dropdown name='dots' icon='dots-vertical' navDropdown={true}>
                                <Dropdown.Label text='actions' />
                                <Dropdown.Divider />
                                <Dropdown.Item text='Edit' icon='pencil' onSelect={()=>1} />
                                <Dropdown.Item text='Copy' icon='copy' onSelect={()=>1} />
                                <Dropdown.Item text='Delete' icon='trash' onSelect={()=>1} />
                                <Dropdown.Divider />
                                <Dropdown name='Second level actions' level={true} icon='star' align='left'>
                                    <Dropdown.Item text='Action 1' onSelect={()=>1} />
                                    <Dropdown.Item text='Action 2' onSelect={()=>1} />
                                    <Dropdown.Item text='Action 3' onSelect={()=>1} />
                                    <Dropdown.Item text='Action 4' onSelect={()=>1} />
                                </Dropdown>
                            </Dropdown>
                        </SubNav>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">Navigation dropdown with fixed header and footer</h3>
                <p className='docs-page__paragraph'>Example of a dropdown inside a subnavigation element. The dropdown has additional modifiers to align the menu to the right of the toggle and to open the submenu on the left.</p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <SubNav zIndex={1} color='darker'>
                            <h3 className="subnav__page-title">Subnav title</h3>
                            <Dropdown name='dots' icon='dots-vertical' navDropdown={true} headerFooter={true}>
                                <Dropdown.Header title='header actions'>
                                    <Dropdown.Item text='Header action one' icon='download' onSelect={()=>1} />
                                    <Dropdown.Item text='Header action one' icon='trash' onSelect={()=>1} />
                                </Dropdown.Header>
                                <Dropdown.Body title='body actions'>
                                    <Dropdown.Item text='Edit' icon='pencil' onSelect={()=>1} />
                                    <Dropdown.Item text='Copy Item' icon='copy' onSelect={()=>1} />
                                    <Dropdown.Item text='Action 2' icon='envelope' onSelect={()=>1} />
                                    <Dropdown.Item text='Action 3' icon='heart' onSelect={()=>1} />
                                    <Dropdown.Item text='Action 4' icon='print' onSelect={()=>1} />
                                    <Dropdown.Item text='Action 5' icon='plus-sign' onSelect={()=>1} />
                                    <Dropdown.Item text='Action 6' icon='minus-sign' onSelect={()=>1} />
                                    <Dropdown.Item text='Action 7' icon='refresh' onSelect={()=>1} />
                                    <Dropdown.Item text='Action 8' icon='pick' onSelect={()=>1} />
                                    <Dropdown.Item text='Action 9' icon='bell' onSelect={()=>1} />
                                    <Dropdown.Item text='Action 10' icon='kill' onSelect={()=>1} />
                                    <Dropdown.Item text='Action 11' icon='settings' onSelect={()=>1} />
                                    <Dropdown.Item text='Action 12' icon='cut' onSelect={()=>1} />
                                </Dropdown.Body>
                                <Dropdown.Footer title='footer actions'>
                                    <Dropdown.Item text='Create gallery' icon='slideshow' onSelect={()=>1} />
                                    <Dropdown.Item text='Create package' icon='composite' onSelect={()=>1} />
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
